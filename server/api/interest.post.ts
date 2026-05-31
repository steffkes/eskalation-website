import Airtable from "airtable";
import * as z from "zod";

const Schema = z.strictObject({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  origin: z.string(),
});

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  try {
    Schema.parse(data);

    await new Airtable()
      .base("appNZZJx2wyLsROCg")
      .table("tblkn6qNqYB98nImM")
      .create(data);

    return setResponseStatus(event, 202);
  } catch (rawError) {
    const error = {
      status: 500,
      message: "Unknown Error",
    };
    if (rawError instanceof z.ZodError) {
      error.status = 400;
      error.message = z.treeifyError(rawError);
    } else if (rawError instanceof Airtable.Error) {
      console.error({ rawError });
      error.status = rawError.statusCode;
      error.message = "Airtable: " + rawError.message;
    }

    setResponseStatus(event, error.status);
    return error;
  }
});
