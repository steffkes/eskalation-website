import Airtable from "airtable";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  try {
    await new Airtable()
      .base("appNZZJx2wyLsROCg")
      .table("tblkn6qNqYB98nImM")
      .create(data);

    return setResponseStatus(event, 202);
  } catch (rawError) {
    const error = {
      status: 400,
      message: "Unknown Error",
    };
    if (rawError instanceof Airtable.Error) {
      console.error({ rawError });
      error.status = rawError.statusCode;
      error.message = "Airtable: " + rawError.message;
    }

    return setResponseStatus(event, error.status, error.message);
  }
});
