<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>個人設置</ion-label>
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
          <ion-title size="large">個人設置</ion-title>
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
          <ion-card-title>語言設置</ion-card-title>
          <ion-card-subtitle>語言設置更換後，請重新啟動應用程式。</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-select label="選擇語言" label-placement="floating">
            <ion-select-option value="zh_tw">繁體中文</ion-select-option>
            <ion-select-option value="zh_cn">简体中文</ion-select-option>
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

import AppLogo from "../components/AppLogo.vue";
</script>
