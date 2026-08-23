<script setup>
const isVideoActive = ref(false);
</script>

<template>
  <div class="my-6 px-6">
    <QuoteElement name="Marcus" department="FF Taufkirchen/Vils">
      Ja bist du deppert 🙈
    </QuoteElement>

    <div class="content">
      <p>
        Treppenläufe für Feuerwehrleute gibt es viele. Hochhäuser,
        Skiflugschanzen, Aussichtstürme – alles schon gelaufen. Mal kurz, mal
        lang, mal mehrfach hintereinander.
      </p>

      <p><strong>In Bewegung</strong> aber war die Treppe bisher nie!</p>

      <p>
        In Budapest wird bereits gegen eine Rolltreppe gelaufen. Als wir den
        <a
          @click.prevent="isVideoActive = true"
          href="https://www.instagram.com/p/DY1t5xMC8JE/"
          >Instagram-Beitrag von Jánosa Bence</a
        >
        gesehen haben, war klar: <strong>Das brauchen wir auch.</strong>
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

    <QuoteElement name="Manuel" department="BwF Laupheim">
      Das ist mal ne wilde Sache 🦾
    </QuoteElement>

    <div class="content">
      <p>
        Hast du Bock drauf? Dann trag deine Kontaktdaten ein und wir melden uns
        sobald es etwas genaueres zum Wettkampf gibt ツ
      </p>

      <InterestForm />
    </div>

    <QuoteElement name="Martin" department="FF Salzkotten">
      ja geil
    </QuoteElement>
  </div>
</template>
