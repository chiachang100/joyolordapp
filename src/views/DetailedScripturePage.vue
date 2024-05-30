<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ t("bibleVerse") }}</ion-label>
          </ion-item>
        </ion-title>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
          <!--<ion-menu-button></ion-menu-button>-->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="scripture">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ t("bibleVerse") }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-list-header>
          <ion-label>
            <h2>{{ scripture.title }} ({{ scripture.articleId }})</h2>
          </ion-label>
        </ion-list-header>
        <ion-item>
          <app-logo />
          <ion-label>
            <h2>{{ scripture.scriptureName }} {{ scripture.scriptureChapter }}</h2>
            <h3>
              {{ scripture.scriptureVerse }} ({{ scripture.scriptureName }}
              {{ scripture.scriptureChapter }})
            </h3>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import AppLogo from "@/components/AppLogo.vue";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { getScripture } from "../../public/data/scriptures";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const getBackButtonText = () => {
  const win = window as any;
  const mode = win && win.Ionic && win.Ionic.mode;
  return mode === "ios" ? t("back") : "";
};

const route = useRoute();
const scripture = getScripture(parseInt(route.params.id as string, 10));

import { AnalyticsService } from "../services/analytics.service";
const analytics = new AnalyticsService();
analytics.logEvent({
  name: "jola_screen_name",
  parameters: {
    jola_screen: "ScripturesPage",
    jola_screen_class: "DetailedScripturesPage_" + scripture?.articleId,
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 8px;
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
