<script setup>
const { event } = await useEvent();

const activeModal = ref(false);

useSeoMeta({
  ogImage: "/og.jpg",
  description: event.description,
});

const activeNavbar = ref(false);
const toggleNavbar = () => (activeNavbar.value = !activeNavbar.value);

const route = useRoute();

useHead({
  titleTemplate: (pageTitle) =>
    [pageTitle, event.name].filter(Boolean).join(" | "),
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: event.name },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(event),
    },
  ],
  link: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div class="columns is-gapless" style="min-height: 100vh">
    <div style="position: relative" class="column is-5">
      <!-- min-height on column needed for mobile -->
      <!-- @ mobile -->
      <div
        class="is-hidden-tablet"
        style="
          background-image: url(/images/hero.jpg);
          background-size: cover;
          background-position: 0% 80%;
          min-height: 50vh;
        "
      >
        &nbsp;
      </div>

      <!-- @ desktop -->
      <div
        class="is-hidden-touch"
        style="
          position: fixed;
          width: 42%;
          height: 100%;
          background-image: url(/images/hero.jpg);
          background-size: cover;
          background-position: 0% 0%;
        "
      >
        &nbsp;
      </div>
    </div>

    <div class="column">
      <div
        class="modal"
        :class="{ 'is-active': activeModal }"
        @click="activeModal = false"
      >
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image">
            <img :src="'/qr-code.svg'" />
          </p>
        </div>
      </div>
      <a
        class="is-hidden-desktop"
        @click="activeModal = true"
        style="position: fixed; right: 0px; bottom: 0px"
        ><img
          :src="'/qr-code.svg'"
          style="opacity: 0.1; height: 20px; margin: 10px"
      /></a>

      <div class="my-6 px-6">
        <div class="content">
          <h1 class="title">{{ event.name }}</h1>
        </div>
      </div>

      <slot />

      <div class="px-6">
        <p class="has-text-right">
          <a href="/impressum" class="has-text-grey-light">Impressum</a>
        </p>
      </div>

      <CompetitionsFooter :event="event" class="px-6 pb-6" />
    </div>
  </div>
</template>

<style>
@import url("bulma");
</style>
