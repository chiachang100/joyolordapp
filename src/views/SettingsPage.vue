<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>個人設置</ion-title>
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
        <ion-img
          src="https://docs-demo.ionic.io/assets/madison.jpg"
          alt="The Wisconsin State Capitol building in Madison, WI at night">
        </ion-img>
        <ion-card-header>
          <ion-card-title>語言設置</ion-card-title>
          <ion-card-subtitle>繁體中文|简体中文</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          語言設置更換後，請重新啟動應用程式。
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
  IonImg,
  IonMenuButton,

  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
</script>
