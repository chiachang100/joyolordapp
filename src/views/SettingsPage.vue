<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ t("settings") }}</ion-label>
          </ion-item>
        </ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ t("settings") }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-grid
          ><ion-row
            ><ion-col size="5" offset="3">
              <ion-img src="assets/images/xlcd/joy_pray_thanks.png" alt="個人設置">
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        <ion-card-header>
          <ion-card-title>{{ t("SettingsPage.langSetting") }}</ion-card-title>
          <ion-card-subtitle>{{
            t("SettingsPage.langSettingsSubtitle")
          }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-select v-model="selectedLocale" 
            :label="t('SettingsPage.selectLanguage')" 
            :placeholder="t(i18n.global.locale.value)">
            <ion-select-option value="zh-TW">{{ t("zh-TW") }}</ion-select-option>
            <ion-select-option value="zh-CN">{{ t("zh-CN") }}</ion-select-option>
            <ion-select-option value="en-US">{{ t("en-US") }}</ion-select-option>
          </ion-select>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import AppLogo from "@/components/AppLogo.vue";
import i18n from "../i18n/i18nMain";
import { SupportedLocale } from "../i18n/i18nMain";

import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { t } = useI18n();

// type SupportedLocale = "en-US" | "zh-TW" | "zh-CN";

const selectedLocale = ref<string>("");
watch(selectedLocale, (newLocale) => {
  console.log("SettingPage: Selected locale:", newLocale);
  locale.value = newLocale;
  i18n.global.locale.value = newLocale as SupportedLocale;

  // Refresh the entire app
  // window.location.reload();
});

import { AnalyticsService } from '../services/analytics.service';
const analytics = new AnalyticsService();
analytics.logEvent({
  name: 'screen_name',
  parameters: {
    joyolordapp_screen: 'SettingsPage',
    joyolordapp_screen_class: 'SettingsPage',
  },
});

</script>

<style scoped>
ion-card {
  font-weight: 600;
}

ion-card-title {
  font-size: 18px;
}

</style>
