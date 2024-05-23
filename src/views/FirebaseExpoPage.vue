<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>FirebaseExpo</ion-label>
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
          <!--<ion-title size="large">FirebaseExpo</ion-title>-->
          <ion-title size="large">
            <ion-item>
              <app-logo />
              <ion-label>FirebaseExpo</ion-label>
            </ion-item>
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Firebase Firestore</ion-card-title>
          <ion-card-subtitle>Connect to {{ t('joyolordappName') }}.</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
        <ion-list>
          <ion-item v-for="(joy, index) in joys" :key="joy.id" :index="index">
            <ion-label>{{ index + 1 }}. {{ joy.title }} ({{ joy.itemId }})</ion-label>
          </ion-item>
        </ion-list>
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
  IonHeader,
  // IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import AppLogo from "@/components/AppLogo.vue";

defineProps({
  index: Number,
});

// import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { useFirestore, useCollection } from 'vuefire'
import { collection } from "firebase/firestore"

const db = useFirestore()
const joys = useCollection(collection(db, 'joys'))

import { ref } from 'vue';
import { AnalyticsService } from '../services/analytics.service';
const analytics = new AnalyticsService();
analytics.logEvent({
  name: 'screen_name',
  parameters: {
    joyolordapp_screen: 'Firebase',
    joyolordapp_screen_class: 'FirebaseExpoPage',
  },
});

// Test Firebase Analytics functions
// const enabled = analytics.isEnabled();
ref(analytics.setEnabled({ enabled: true }));
analytics.setEnabled({ enabled: true });
analytics.setUserId({ userId: 'test' });
analytics.setUserProperty({ key: 'language', value: 'en-US' });

</script>

<style scoped>
</style>
