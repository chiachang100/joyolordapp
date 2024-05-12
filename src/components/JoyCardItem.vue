<template>
  <ion-card v-if="scripture" :routerLink="'/joys/joy/' + scripture.articleId" :detail="false">
    <ion-img :src=scripture.photoUrl :alt=scripture.title />
    <ion-card-header>
      <ion-card-title>{{ scripture.title }}</ion-card-title>
      <ion-card-subtitle>✞{{ scripture.scriptureVerse }} ({{ scripture.scriptureName }} {{ scripture.scriptureChapter }})</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      🌞{{ scripture.laugh.substr(0, 20) }}...👉
    </ion-card-content>

<!--
    <ion-button expand="block" fill="outline" :routerLink="'/scripture/' + scripture.articleId">✞神的道是有功效的</ion-button>
-->
  </ion-card>
</template>

<script setup lang="ts">
import {
  //IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/vue';

defineProps({
  scripture: Object,
});
</script>
