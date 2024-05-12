<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>笑裡藏道</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">笑裡藏道</ion-title>
        </ion-toolbar>
      </ion-header>

      <JoyCardItem v-for="scripture in scriptures" :key="scripture.articleId" :scripture="scripture" />

<!--
      <ion-card>
        <ion-img
          src="https://cdn.pixabay.com/photo/2016/10/03/21/13/jerusalem-1712855_1280.jpg"
          alt="Jerusalem, Israel">
        </ion-img>
        <ion-card-header>
          <ion-card-title>1 愛的激勵</ion-card-title>
          <ion-card-subtitle>✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          🌞老張在他生日時，收到好朋友送給他一隻會說話的鸚鵡，但這隻鸚鵡的態度很差，滿口都是髒話，不是罵人的話，就是一些粗話。...
        </ion-card-content>

        <ion-button expand="block" fill="outline" href="/tabs/settings">✞神的道是有功效的</ion-button>
      </ion-card>
-->

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';

import { ref } from 'vue';
import { getScriptures, Scripture } from '@/data/scriptures';
import JoyCardItem from '@/components/JoyCardItem.vue';

const scriptures = ref<Scripture[]>(getScriptures());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};
</script>
