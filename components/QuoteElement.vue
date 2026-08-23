<template>
  <article class="message">
    <div class="message-body">
      <blockquote>
        <slot></slot>
      </blockquote>
      <p class="mt-2">
        — <strong>{{ name }}</strong>
        <span class="ml-2 has-text-grey">({{ department }})</span>
      </p>
    </div>
  </article>
</template>

<style scoped>
blockquote {
  position: relative;
}

blockquote,
blockquote + p {
  padding-left: 60px;
}

blockquote::before {
  content: "\201D";
  position: absolute;
  left: 5px;
  line-height: 100px;
  font-size: 110px;
}
</style>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();

const { name, department } = defineProps(["name", "department"]);

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Quotation",
        spokenByCharacter: {
          "@type": "Person",
          name,
          affiliation: department,
        },
        text: null, // render slot here
      }),
    },
  ],
});
</script>
