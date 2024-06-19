<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="app-list">
            <ion-list-header>{{ t("coreMenu") }}</ion-list-header>
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ t(p.title) }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="info-list">
            <ion-list-header>{{ t("infoMenu") }}</ion-list-header>
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in infoPages" :key="i">
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ t(p.title) }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <!--
          <ion-list id="future-list">
            <ion-list-header>{{ t("futureMenu") }}</ion-list-header>
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in futurePages" :key="i">
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ t(p.title) }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
          -->
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue";
import { useI18n } from "vue-i18n";

import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  // IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";
import { ref } from "vue";
import {
  bookOutline,
  bookSharp,
  happyOutline,
  happySharp,
  // homeOutline,
  // homeSharp,
  imagesOutline,
  imagesSharp,
  informationCircleOutline,
  informationCircleSharp,
  listCircleOutline,
  listCircleSharp,
  // logInOutline,
  // logInSharp,
  logoFirebase,
  newspaperOutline,
  newspaperSharp,
  settingsOutline,
  settingsSharp,
} from "ionicons/icons";

import i18n from "./i18n/index";
import { SupportedLocale } from "./i18n/index";
import { useFileReader } from "./composables/useFileReader";

const selectedIndex = ref(0);
const { t } = useI18n();

const appPages = [
  {
    // title: "聖經經文",
    title: "bibleVerse",
    url: "/tabs/scriptures",
    iosIcon: bookOutline,
    mdIcon: bookSharp,
  },
  {
    // title: "笑裡藏道",
    title: "xlcd",
    url: "/tabs/joys",
    iosIcon: happyOutline,
    mdIcon: happySharp,
  },
  {
    // title: "喜樂榜",
    title: "rankingList",
    url: "/tabs/rankinglist",
    iosIcon: listCircleOutline,
    mdIcon: listCircleSharp,
    tab: "rankinglist",
  },
  {
    // title: "新出爐",
    title: "newList",
    url: "/tabs/newlist",
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp,
    tab: "newlist",
  },
];

const infoPages = [
  {
    // title: "資源簡介",
    title: "about",
    url: "/tabs/about",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    // title: "個人設置",
    title: "settings",
    url: "/tabs/settings",
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
  },
  // {
  //   // title: "登入頁面",
  //   title: 'login',
  //   url: "/login",
  //   iosIcon: logInOutline,
  //   mdIcon: logInSharp,
  // },
];

const futurePages = [
  {
    // title: "相片存檔",
    title: "photos",
    url: "/tabs/photos",
    iosIcon: imagesOutline,
    mdIcon: imagesSharp,
  },
  {
    title: "FirebaseExpo",
    url: "/firebase",
    iosIcon: logoFirebase,
    mdIcon: logoFirebase,
  },
];

const path = window.location.pathname.split("tabs/")[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase()
  );
}

//---------------------------------------------
// Setup the default locale by loading the saved locale if it's available.
//---------------------------------------------
const { locale } = useI18n();
const appUserProfileFilename = inject<string>("appUserProfileFilename") as string;

const { fileContents, readFile } = useFileReader(appUserProfileFilename);

async function readFileOnMount() {
  console.log(
    `[App] #1. BEFORE reading saved locale=${locale.value}; i18n.global.locale=${i18n.global.locale.value}.`
  );

  await readFile();

  if (fileContents.value.trim().length > 0) {
    locale.value = fileContents.value;
    i18n.global.locale.value = fileContents.value as SupportedLocale;
    console.log(
      `[App] #1. AFTER reading saved locale=${locale.value}; i18n.global.locale=${i18n.global.locale.value}.`
    );
  } else {
    console.log(
      `[App] #1. AFTER Saved file not found. Use default locale: locale=${locale.value}; i18n.global.locale=${i18n.global.locale.value}.`
    );
  }
}
onMounted(readFileOnMount);

//---------------------------------------------
// Firebase Analytics
//---------------------------------------------
import { AnalyticsService } from "./services/analytics.service";
const analytics = new AnalyticsService();
analytics.logEvent({
  name: "jola_screen_name",
  parameters: {
    jola_screen: "App",
    jola_screen_class: `App_Locale_${i18n.global.locale.value}`,
  },
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
