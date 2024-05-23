<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <!--<app-logo />-->
            <app-xlcd-logo />
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
          v-for="(article, index) in newListOfArticles"
          :key="article.articleId"
          :article="article"
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
import { getArticles } from "../../public/data/articles";
import { Article } from "../../public/data/I_Article";
import ArticleListItem from "@/components/ArticleListItem.vue";
// import AppLogo from "@/components/AppLogo.vue";
import AppXlcdLogo from "@/components/AppXlcdLogo.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

// const articles = ref<Article[]>(getArticles());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

const newListOfArticles = computed<Article[]>(() => {
  return getArticles().filter((m) => m.isNew === true);
});

import { AnalyticsService } from '../services/analytics.service';
const analytics = new AnalyticsService();
analytics.logEvent({
  name: 'screen_name',
  parameters: {
    joyolordapp_screen: 'NewListPage',
    joyolordapp_screen_class: 'NewListPage',
  },
});

</script>

<style scoped>
</style>
