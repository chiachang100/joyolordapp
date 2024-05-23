<template>
  <ion-page v-if="article">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <!--<app-logo />-->
            <app-xlcd-logo />
            <ion-label>{{ article.title }}</ion-label>
          </ion-item>
        </ion-title>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
          <!--<ion-menu-button></ion-menu-button>-->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="article">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!--<ion-title size="large">{{ t("article.title") }}</ion-title>-->
          <ion-title size="large">
            <ion-item>
              <!--<app-logo />-->
              <app-xlcd-logo />
              <ion-label>{{ article.title }}</ion-label>
            </ion-item>
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Bible Scripture Section -->
      <ion-card color="light">
        <ion-img :src="article.photoUrl" :alt="article.title" />
      <!--
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-img :src="article.photoUrl" :alt="article.title" />
            </ion-col>
          </ion-row>
        </ion-grid>
      -->
        <ion-card-header>
          <ion-card-title>{{ article.title }} ({{ article.articleId }})</ion-card-title>
        <!--
          <ion-card-title>
            {{ article.title }}({{ article.articleId }})
            <span class="likes">
              <ion-note>{{ article.likes }}</ion-note>
            </span>
          </ion-card-title>
        -->
          <ion-card-subtitle
            >{{ article.scriptureName }}
            {{ article.scriptureChapter }}</ion-card-subtitle
          >
        </ion-card-header>

        <ion-card-content>
          {{ article.scriptureVerse }}
        </ion-card-content>
      </ion-card>

      <!-- Prelude Section -->
      <p></p>
      <ion-card color="light">
        <ion-card-header>
          <ion-card-title>{{ t("DetailedPage.prelude") }}</ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ article.prelude }}
        </ion-card-content>
      </ion-card>

      <!-- Laugh Section -->
      <ion-card color="light">
        <ion-card-header>
          <ion-card-title>{{ t("DetailedPage.laugh") }}</ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ article.laugh }}
        </ion-card-content>
      </ion-card>

      <!-- Talk Section -->
      <ion-card color="light">
        <ion-card-header>
          <ion-card-title>{{ t("xlcd") }}</ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ article.talk }}
        </ion-card-content>
      </ion-card>

      <!-- YouTube Section -->

      <!-- vue-plyr (https://github.com/redxtech/vue-plyr)-->

      <!-- vue-plyr (https://github.com/redxtech/vue-plyr)-->
      <!-- youtube div element (None progressive enhancement )-->
      <ion-card color="light">
        <ion-card-header>
          <ion-card-title>{{ t("DetailedPage.youtubeVideo") }}</ion-card-title>
          <ion-card-subtitle>{{ article.videoName }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <vue-plyr>
            <div
              data-plyr-provider="youtube"
              :data-plyr-embed-id="article.videoId"
            ></div>
          </vue-plyr>
        </ion-card-content>
      </ion-card>

      <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
      <!--src="https://www.youtube.com/embed/Mez7DnMOlgc?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"-->
      <!--
      <ion-card color="light">
        <ion-card-header>
          <ion-card-title>YouTube視頻</ion-card-title>
          <ion-card-subtitle>{{ article.videoName }}</ion-card-subtitle>
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
  // IonCol,
  IonContent,
  // IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  //IonIcon,
  // IonMenuButton,
  //IonNote,
  IonPage,
  // IonRow,
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

//import { Article } from "../../public/data/I_Article";
import { getArticle } from "../../public/data/articles";
// import AppLogo from "@/components/AppLogo.vue";
import AppXlcdLogo from "@/components/AppXlcdLogo.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const getBackButtonText = () => {
  const win = window as any;
  const mode = win && win.Ionic && win.Ionic.mode;
  return mode === "ios" ? t("back") : "";
};

const route = useRoute();
const article = getArticle(parseInt(route.params.id as string, 10));

import { AnalyticsService } from '../services/analytics.service';
const analytics = new AnalyticsService();
analytics.logEvent({
  name: 'screen_name',
  parameters: {
    joyolordapp_screen: 'ArticlesPage',
    joyolordapp_screen_class: 'DetailedArticlesPage',
  },
});

//const videoSrc = "https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";
// const videoSrc =
//   "https://www.youtube.com/embed/" +
//   article!.videoId +
//   "?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";

/*
// Composable Usage
import { usePlayer, PlayerEvent } from '@vue-youtube/core';
import { ref } from 'vue';

// YouTube Player
//const videoId = ref(article!.videoId);
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
ion-card-title {
  font-size: 18px;
}

ion-img {
  width: 100%;
  object-fit: cover;
}

ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;

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
