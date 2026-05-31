<script setup>
const isVideoActive = ref(false);
</script>

<template>
  <div class="my-6 px-6">
    <div class="content">
      <p>
        Treppenläufe für Feuerwehr sind nichts Neues. Kurze Treppen, lange
        Treppen, drinnen oder draußen - alles schon mal irgendwie da gewesen.
        Auch Läufe bei denen man mehrmals hinauf mussten, waren schon da. Aber
        bewegt hat sich die Treppe nie.
      </p>

      <p>
        Aber warum eigentlich nicht? In Budapest wird gegen eine Rolltreppe
        gelaufen, wie man im
        <a
          @click.prevent="isVideoActive = true"
          href="https://www.instagram.com/p/DY1t5xMC8JE/"
          >Instagram-Beitrag von Jánosa Bence</a
        >
        sehen kann. Wäre doch mal eine Idee ..
      </p>

      <div id="video" class="mb-4">
        <p v-if="!isVideoActive" class="mb-0">
          <button @click="isVideoActive = true" class="button is-fullwidth">
            Zeig mir das crazy Video auf der Rolltreppe
          </button>
        </p>

        <div
          v-else
          style="
            position: relative;
            width: 100%;
            height: 0px;
            padding-bottom: 177.778%;
          "
        >
          <iframe
            allow="fullscreen"
            allowfullscreen
            height="100%"
            src="https://streamable.com/e/mb5o7p?autoplay=1loop=0&muted=1&nocontrols=1"
            width="100%"
            style="
              border: none;
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0px;
              top: 0px;
              overflow: hidden;
            "
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
