<template>
  <ion-page v-if="scripture">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <!--<ion-icon aria-hidden="true" :icon="bookOutline" color="primary"></ion-icon>-->
          {{ scripture.title }}
          <span class="likes">
            <ion-note>{{ scripture.likes }}</ion-note>
          </span>
        </ion-title>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
          <!--<ion-menu-button></ion-menu-button>-->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="scripture">
      <ion-img :src=scripture.photoUrl :alt=scripture.title />

      <!-- Bible Scripture Section -->
      <ion-item>
        <ion-label>
          ✞{{ scripture.scriptureVerse }} ({{ scripture.scriptureName }} {{ scripture.scriptureChapter }})
        </ion-label>
      </ion-item>

      <!-- Prelude Section -->
      <p>
      </p>
      <ion-item>
        <ion-label>
          ☆{{ scripture.prelude }}
        </ion-label>
      </ion-item>

      <!-- Laugh Section -->
      <ion-item>
        <ion-label>
          🌞{{ scripture.laugh }}
        </ion-label>
      </ion-item>

      <!-- Talk Section -->
      <ion-item>
        <ion-label>
          ❤️{{ scripture.talk }}
        </ion-label>
      </ion-item>

      <!-- YouTube Section -->

      <!-- vue-plyr (https://github.com/redxtech/vue-plyr)-->

      <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
      <!--src="https://www.youtube.com/embed/Mez7DnMOlgc?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"-->
<!--
      <ion-card>
        <ion-card-header>
          <ion-card-title>▶️曾興才牧師@YouTube</ion-card-title>
          <ion-card-subtitle>{{ scripture.videoName }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <vue-plyr>
            <div class="plyr__video-embed">
              <iframe
                :src=videoSrc
                allowfullscreen
                allowtransparency
              ></iframe>
            </div>
          </vue-plyr>
        </ion-card-content>
      </ion-card>
-->

      <!-- vue-plyr (https://github.com/redxtech/vue-plyr)-->
      <!-- youtube div element (None progressive enhancement )-->
      <ion-card>
        <ion-card-header>
          <ion-card-title>▶️曾興才牧師@YouTube</ion-card-title>
          <ion-card-subtitle>{{ scripture.videoName }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <vue-plyr>
            <div data-plyr-provider="youtube" :data-plyr-embed-id=scripture.videoId></div>
          </vue-plyr>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  //IonIcon,
  IonLabel,
  IonNote,
  IonPage,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
/* 
import {
  bookOutline,
  happyOutline,
  happySharp,
  starOutline,
  starSharp,
  logoYoutube,
} from 'ionicons/icons';

 */import { getScripture } from '../data/scriptures';

const getBackButtonText = () => {
  const win = window as any;
  const mode = win && win.Ionic && win.Ionic.mode;
  return mode === 'ios' ? '聖經經文' : '';
};

const route = useRoute();
const scripture = getScripture(parseInt(route.params.id as string, 10));

//const videoSrc = "https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";
const videoSrc = 'https://www.youtube.com/embed/'
  + scripture!.videoId
  +'?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1';

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
