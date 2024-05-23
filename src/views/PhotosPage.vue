<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ t("photos") }}</ion-label>
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
          <ion-title size="large">{{ t("photos") }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="photo in photos" :key="photo.webviewPath">
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  actionSheetController,
  IonButtons,
  IonContent,
  IonCol,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { camera, trash, close } from "ionicons/icons";
import { usePhotoGallery, UserPhoto } from "../composables/usePhotoGallery";
import AppLogo from "@/components/AppLogo.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const { photos, takePhoto, deletePhoto } = usePhotoGallery();

const showActionSheet = async (photo: UserPhoto) => {
  const actionSheet = await actionSheetController.create({
    header: "Photos",
    buttons: [
      {
        text: "Delete",
        role: "destructive",
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: "Cancel",
        icon: close,
        role: "cancel",
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        },
      },
    ],
  });
  await actionSheet.present();
};

import { AnalyticsService } from '../services/analytics.service';
const analytics = new AnalyticsService();
analytics.logEvent({
  name: 'jola_screen_name',
  parameters: {
    joyolordapp_screen: 'PhotosPage',
    joyolordapp_screen_class: 'PhotosPage',
  },
});

</script>

<style scoped>
</style>
