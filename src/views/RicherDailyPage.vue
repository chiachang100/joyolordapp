<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ t("richerDaily") }}</ion-label>
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
          :placeholder="t('search')"
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
          <ion-title size="large">{{ t("richerDaily") }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ScriptureListItem
          v-for="(scripture, index) in filteredListOfScriptures"
          :key="scripture.articleId"
          :scripture="scripture"
          :index="index"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import AppLogo from "@/components/AppLogo.vue";

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
import ScriptureListItem from "@/components/ScriptureListItem.vue";
import { getScriptures } from "../../public/data/scriptures";
import { Scripture } from "../../public/data/I_Scripture";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

// const scriptures = ref<Scripture[]>(getScriptures());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

const searchTerm = ref("");

const filteredListOfScriptures = computed<Scripture[]>(() => {
  if (!searchTerm.value?.trim()) {
    return getScriptures().filter((m) => m.isRicherDaily);
  } else {
    const searchText = searchTerm.value!.toLowerCase();
    console.log("searchText=" + searchText);
    return getScriptures().filter(
      (m) =>
        (m.isRicherDaily && m.scriptureVerse.toLowerCase().includes(searchText)) ||
        (m.scriptureName + " " + m.scriptureChapter).toLowerCase().includes(searchText)
    );
  }
});

const onSearchInput = () => {
  console.log("searchTerm=" + searchTerm.value?.trim());
};

import { AnalyticsService } from "../services/analytics.service";
const analytics = new AnalyticsService();
analytics.logEvent({
  name: "jola_screen_name",
  parameters: {
    jola_screen: "RicherDailyPage",
    jola_screen_class: "RicherDailyPage",
  },
});
</script>

<style scoped></style>
