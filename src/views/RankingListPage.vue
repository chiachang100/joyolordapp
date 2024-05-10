<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>喜樂榜</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">喜樂榜</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-img
          src="https://cdn.pixabay.com/photo/2016/08/27/15/57/washington-d-1624419_1280.jpg"
          alt="Washington DC, USA">
        </ion-img>
        <ion-card-header>
          <ion-card-title>1 愛的激勵</ion-card-title>
          <ion-card-subtitle>✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          🌞老張在他生日時，收到好朋友送給他一隻會說話的鸚鵡，但這隻鸚鵡的態度很差，滿口都是髒話，不是罵人的話，就是一些粗話。...
        </ion-card-content>

        <ion-button expand="block" fill="outline" href="/tabs/settings">✞神的道是有功效的</ion-button>
      </ion-card>

      <ion-card>
        <ion-img
          src="https://cdn.pixabay.com/photo/2016/08/27/15/57/washington-d-1624419_1280.jpg"
          alt="Washington DC, USA">
        </ion-img>
        <ion-card-header>
          <ion-card-title>2 愛的激勵</ion-card-title>
          <ion-card-subtitle>✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          🌞老張在他生日時，收到好朋友送給他一隻會說話的鸚鵡，但這隻鸚鵡的態度很差，滿口都是髒話，不是罵人的話，就是一些粗話。...
        </ion-card-content>

        <ion-button expand="block" fill="outline" href="/tabs/settings">✞神的道是有功效的</ion-button>
      </ion-card>

      <ion-card>
        <ion-img
          src="https://cdn.pixabay.com/photo/2016/08/27/15/57/washington-d-1624419_1280.jpg"
          alt="Washington DC, USA">
        </ion-img>
        <ion-card-header>
          <ion-card-title>3 愛的激勵</ion-card-title>
          <ion-card-subtitle>✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          🌞老張在他生日時，收到好朋友送給他一隻會說話的鸚鵡，但這隻鸚鵡的態度很差，滿口都是髒話，不是罵人的話，就是一些粗話。...
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
