<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ t("newList") }}</ion-label>
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
          <ion-title size="large">{{ t("newList") }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ArticleListItem
          v-for="(scripture, index) in newListOfArticles"
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
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { computed } from "vue";
import { getScriptures } from "../../public/data/scriptures";
import { Scripture } from "../../public/data/I_Scriptures";
import ArticleListItem from "@/components/ArticleListItem.vue";
import AppLogo from "@/components/AppLogo.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

// const scriptures = ref<Scripture[]>(getScriptures());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

const newListOfArticles = computed<Scripture[]>(() => {
  return getScriptures().filter((m) => m.isNew === true);
});
</script>
