<template>
  <ion-page v-if="scripture">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ scripture.title }}</ion-label>
          </ion-item>
        </ion-title>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
          <!--<ion-menu-button></ion-menu-button>-->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="scripture">
      <!-- Bible Scripture Section -->
      <ion-card color="warning">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-img :src="scripture.photoUrl" :alt="scripture.title" />
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card-header>
          <ion-card-title>
            <h2>
              {{ scripture.title }}({{ scripture.articleId }})
              <span class="likes">
                <ion-note>{{ scripture.likes }}</ion-note>
              </span>
            </h2>
          </ion-card-title>
          <ion-card-subtitle
            >{{ scripture.scriptureName }}
            {{ scripture.scriptureChapter }}</ion-card-subtitle
          >
        </ion-card-header>

        <ion-card-content>
          {{ scripture.scriptureVerse }}
        </ion-card-content>
      </ion-card>

      <!-- Prelude Section -->
      <p></p>
      <ion-card color="primary">
        <ion-card-header>
          <ion-card-title>{{ t("DetailedPage.prelude") }}</ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ scripture.prelude }}
        </ion-card-content>
      </ion-card>

      <!-- Laugh Section -->
      <ion-card color="secondary">
        <ion-card-header>
          <ion-card-title>{{ t("DetailedPage.laugh") }}</ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ scripture.laugh }}
        </ion-card-content>
      </ion-card>

      <!-- Talk Section -->
      <ion-card color="tertiary">
        <ion-card-header>
          <ion-card-title>{{ t("xlcd") }}</ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ scripture.talk }}
        </ion-card-content>
      </ion-card>

      <!-- YouTube Section -->

      <!-- vue-plyr (https://github.com/redxtech/vue-plyr)-->

      <!-- vue-plyr (https://github.com/redxtech/vue-plyr)-->
      <!-- youtube div element (None progressive enhancement )-->
      <ion-card color="success">
        <ion-card-header>
          <ion-card-title>{{ t("DetailedPage.youtubeVideo") }}</ion-card-title>
          <ion-card-subtitle>{{ scripture.videoName }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <vue-plyr>
            <div
              data-plyr-provider="youtube"
              :data-plyr-embed-id="scripture.videoId"
            ></div>
          </vue-plyr>
        </ion-card-content>
      </ion-card>

      <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
      <!--src="https://www.youtube.com/embed/Mez7DnMOlgc?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"-->
      <!--
      <ion-card color="success">
        <ion-card-header>
          <ion-card-title>YouTube視頻</ion-card-title>
          <ion-card-subtitle>{{ scripture.videoName }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <vue-plyr>
            <div class="plyr__video-embed">
              <iframe
                :src="videoSrc"
                allowfullscreen
                allowtransparency
                allow="autoplay"
              ></iframe>
            </div>
          </vue-plyr>
        </ion-card-content>
      </ion-card>
      -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  //IonIcon,
  // IonMenuButton,
  IonNote,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
/* 
import {
  bookOutline,
  happyOutline,
  happySharp,
  starOutline,
  starSharp,
  logoYoutube,
} from 'ionicons/icons';

 */

import { getScripture } from "../../public/data/scriptures";
import AppLogo from "@/components/AppLogo.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const getBackButtonText = () => {
  const win = window as any;
  const mode = win && win.Ionic && win.Ionic.mode;
  return mode === "ios" ? "聖經經文" : "";
};

const route = useRoute();
const scripture = getScripture(parseInt(route.params.id as string, 10));

//const videoSrc = "https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";
// const videoSrc =
//   "https://www.youtube.com/embed/" +
//   scripture!.videoId +
//   "?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";

/*
// Composable Usage
import { usePlayer, PlayerEvent } from '@vue-youtube/core';
import { ref } from 'vue';

// YouTube Player
//const videoId = ref(scripture!.videoId);
const videoId = ref('Mez7DnMOlgc');
const youtube = ref();

const { onReady } = usePlayer(videoId, youtube, {
  cookie: false,
  playerVars: {
    mute: 1,
  },
});

onReady((event: PlayerEvent): void => {
  event?.target.playVideo();
});
*/
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 400;

  /**
   * With larger font scales
   * the date/time should wrap to the next
   * line. However, there should be
   * space between the name and the date/time
   * if they can appear on the same line.
   */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

ion-item .likes {
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 0.9375rem;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 1.4rem;
}

p {
  line-height: 1.4;
}
</style>
