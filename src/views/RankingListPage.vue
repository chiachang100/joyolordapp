<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <!--<app-logo />-->
            <app-xlcd-logo />
            <!--
            <ion-label
              >{{ t("rankingList") }} ({{ t("qian") }} {{ maxTopNum }})</ion-label
            >
            -->
            <ion-label
              >{{ t("rankingList") }} ({{ t("qian", { num: maxTopNum }) }})</ion-label
            >
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
          <!--
          <ion-title size="large"
            >{{ t("rankingList") }} ({{ t("qian") }} {{ maxTopNum }})</ion-title
          >
          -->
          <ion-title size="large"
            >{{ t("rankingList") }} ({{ t("qian", { num: maxTopNum }) }})</ion-title
          >
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ArticleListItem
          v-for="(article, index) in rankingListOfArticles"
          :key="article.articleId"
          :article="article"
          :index="index"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import AppXlcdLogo from "@/components/AppXlcdLogo.vue";

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

import { getArticles } from "../../public/data/articles";
import { Article } from "../../public/data/I_Article";
import ArticleListItem from "@/components/ArticleListItem.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

// const articles = ref<Article[]>(getArticles());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

const maxTopNum = inject<number>("maxTopNumber");

const rankingListOfArticles = computed<Article[]>(() => {
  const filteredArray = getArticles().filter((m) => m.likes > 0);
  filteredArray.sort((a, b) => b.likes - a.likes);
  const topItems = filteredArray.slice(0, maxTopNum);
  return topItems;
});

import { AnalyticsService } from "../services/analytics.service";
const analytics = new AnalyticsService();
analytics.logEvent({
  name: "jola_screen_name",
  parameters: {
    jola_screen: "RankingListPage",
    jola_screen_class: "RankingListPage",
  },
});
</script>

<style scoped></style>
