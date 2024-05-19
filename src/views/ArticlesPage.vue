<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>笑裡藏道</ion-label>
          </ion-item>
        </ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar
          v-model="searchTerm"
          @ionInput="onSearchInput"
          show-clear-button="focus"
          show-cancel-button="focus"
          placeholder="搜尋"
          :debounce="100"
        >
        </ion-searchbar>
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

      <ion-list>
        <ArticleListItem
          v-for="(scripture, index) in filteredListOfArticles"
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
  IonSearchbar,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { computed, ref } from "vue";
import { getScriptures, Scripture } from "../data/scriptures";
import ArticleListItem from "@/components/ArticleListItem.vue";
import AppLogo from "../components/AppLogo.vue";

// const scriptures = ref<Scripture[]>(getScriptures());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

const searchTerm = ref("");

const filteredListOfArticles = computed<Scripture[]>(() => {
  if (!searchTerm.value?.trim()) {
    return getScriptures();
  } else {
    const searchText = searchTerm.value!.toLowerCase();
    console.log("searchText=" + searchText);
    return getScriptures().filter(
      (m) =>
        m.scriptureVerse.toLowerCase().includes(searchText) ||
        (m.scriptureName + " " + m.scriptureChapter).toLowerCase().includes(searchText) ||
        m.title.toLowerCase().includes(searchText) ||
        m.prelude.toLowerCase().includes(searchText) ||
        m.laugh.toLowerCase().includes(searchText) ||
        m.videoName.toLowerCase().includes(searchText) ||
        m.talk.toLowerCase().includes(searchText)
    );
  }
});

const onSearchInput = () => {
  console.log("searchTerm=" + searchTerm.value?.trim());
};
</script>
