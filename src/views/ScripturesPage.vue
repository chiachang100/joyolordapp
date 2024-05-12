<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>聖經經文</ion-title>
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
          <ion-title size="large">聖經經文</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ScriptureListItem v-for="scripture in scriptures" :key="scripture.articleId" :scripture="scripture" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonHeader,
  IonList,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
import ScriptureListItem from '@/components/ScriptureListItem.vue';
import { getScriptures, Scripture } from '@/data/scriptures';
import { ref } from 'vue';

const scriptures = ref<Scripture[]>(getScriptures());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};
</script>
