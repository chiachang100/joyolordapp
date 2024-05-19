<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>喜樂榜</ion-label>
          </ion-item>
        </ion-title>
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
          <ion-title size="large">喜樂榜</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ArticleListItem
          v-for="(scripture, index) in scriptures"
          :key="scripture.articleId"
          :scripture="scripture"
          :index="index"
        />
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
} from "@ionic/vue";

import { ref } from "vue";
import { getScriptures, Scripture } from "@/data/scriptures";
import ArticleListItem from "@/components/ArticleListItem.vue";

const scriptures = ref<Scripture[]>(getScriptures());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};
</script>
