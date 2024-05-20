<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="(p, i) in appPages" :key="i" :tab="p.tab" :href="p.url">
          <ion-icon :ios="p.iosIcon" :md="p.mdIcon" />
          <ion-label>{{ p.title }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/vue";
import {
  bookOutline,
  bookSharp,
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  // peopleOutline,
  // peopleSharp,
  // listCircleOutline,
  // listCircleSharp,
  // newspaperOutline,
  // newspaperSharp,
} from "ionicons/icons";

import { computed, watch } from "vue";
import i18n from "../i18n/i18nMain";
import { useI18n } from "vue-i18n";

import { ref } from "vue";
const selectedIndex = ref(0);

const { t } = useI18n();

const appPages = [
  {
    // title: "聖經經文",
    title: t("bibleVerse"),
    url: "/tabs/scriptures",
    iosIcon: bookOutline,
    mdIcon: bookSharp,
    tab: "scriptures",
  },
  {
    // title: "笑裡藏道",
    title: t("xlcd"),
    url: "/tabs/joys",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    tab: "joys",
  },
  {
    // title: "資源簡介",
    title: t("about"),
    url: "/tabs/about",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
    tab: "about",
  },
  // {
  // // title: "喜樂榜",
  // title: t("rankingList"),
  //   url: "/tabs/rankinglist",
  //   iosIcon: listCircleOutline,
  //   mdIcon: listCircleSharp,
  //   tab: "rankinglist",
  // },
  // {
  // // title: "新出爐",
  // title: t("newList"),
  //   url: "/tabs/newlist",
  //   iosIcon: newspaperOutline,
  //   mdIcon: newspaperSharp,
  //   tab: "newlist",
  // },
];

const path = window.location.pathname.split("tabs/")[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase()
  );
}

const currentLocale = computed(() => i18n.global.locale);
watch(currentLocale, (newLocale) => {
  console.log("TabsPage: New locale:", newLocale);
});
</script>
