<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="(p, i) in appPages" :key="i" :tab="p.tab" :href="p.url">
          <ion-icon :ios="p.iosIcon" :md="p.mdIcon" />
          <ion-label>{{ t(p.title) }}</ion-label>
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
  settingsOutline,
  settingsSharp,
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
    title: "bibleVerse",
    url: "/tabs/scriptures",
    iosIcon: bookOutline,
    mdIcon: bookSharp,
    tab: "scriptures",
  },
  {
    // title: "笑裡藏道",
    title: "xlcd",
    url: "/tabs/joys",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    tab: "joys",
  },
  {
    // title: "資源簡介",
    title: "about",
    url: "/tabs/about",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
    tab: "about",
  },
  {
    // title: "個人設置",
    title: "settings",
    url: "/tabs/settings",
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
    tab: "settings",
  },
  // {
  // // title: "喜樂榜",
  //   title: 'rankingList',
  //   url: "/tabs/rankinglist",
  //   iosIcon: listCircleOutline,
  //   mdIcon: listCircleSharp,
  //   tab: "rankinglist",
  // },
  // {
  // // title: "新出爐",
  //   title: 'newList',
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

const currentLocale = computed(() => i18n.global.locale.value);
watch(currentLocale, (newLocale) => {
  console.log("TabsPage: New i18n.global.locale.value = ", newLocale);
});

import { AnalyticsService } from "../services/analytics.service";
const analytics = new AnalyticsService();
analytics.logEvent({
  name: "jola_screen_name",
  parameters: {
    jola_screen: "TabsPage",
    jola_screen_class: "TabBars",
  },
});
</script>

<style scoped></style>
