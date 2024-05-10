<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>新出爐</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">新出爐</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-img
          src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg"
          alt="Golden Gate Bridge, San Francisco, CA">
        </ion-img>
        <ion-card-header>
          <ion-card-title>1 靈巧像蛇、馴良像鴿子</ion-card-title>
          <ion-card-subtitle>✞「「我差你們去，如同羊進入狼群，所以你們要靈巧像蛇，馴良像鴿子。」(馬太福音 10:16)</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          🌞國慶黃金週有對老夫婦要去南方看孫子，離家前擔心家中被偷盜，翻箱倒櫃不算，還會損壞傢俱。...
        </ion-card-content>

        <ion-button expand="block" fill="outline" href="/tabs/settings">✞神的道是有功效的</ion-button>
      </ion-card>

      <ion-card>
        <ion-img
          src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg"
          alt="Golden Gate Bridge, San Francisco, CA">
        </ion-img>
        <ion-card-header>
          <ion-card-title>2 靈巧像蛇、馴良像鴿子</ion-card-title>
          <ion-card-subtitle>✞「「我差你們去，如同羊進入狼群，所以你們要靈巧像蛇，馴良像鴿子。」(馬太福音 10:16)</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          🌞國慶黃金週有對老夫婦要去南方看孫子，離家前擔心家中被偷盜，翻箱倒櫃不算，還會損壞傢俱。...
        </ion-card-content>

        <ion-button expand="block" fill="outline" href="/tabs/settings">✞神的道是有功效的</ion-button>
      </ion-card>

      <ion-card>
        <ion-img
          src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg"
          alt="Golden Gate Bridge, San Francisco, CA">
        </ion-img>
        <ion-card-header>
          <ion-card-title>3 靈巧像蛇、馴良像鴿子</ion-card-title>
          <ion-card-subtitle>✞「「我差你們去，如同羊進入狼群，所以你們要靈巧像蛇，馴良像鴿子。」(馬太福音 10:16)</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          🌞國慶黃金週有對老夫婦要去南方看孫子，離家前擔心家中被偷盜，翻箱倒櫃不算，還會損壞傢俱。...
        </ion-card-content>

        <ion-button expand="block" fill="outline" href="/tabs/settings">✞神的道是有功效的</ion-button>
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
