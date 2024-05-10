<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

<!--
        <ion-tab-button tab="joys" href="/tabs/joys">
          <ion-icon :icon="homeOutline" />
          <ion-label>笑裡藏道</ion-label>
        </ion-tab-button>
-->

        <ion-tab-button v-for="(p, i) in appPages" :key="i" :tab="p.tab" :href="p.url">
          <ion-icon :ios="p.iosIcon" :md="p.mdIcon" />
          <ion-label>{{ p.title }}</ion-label>
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
} from '@ionic/vue';
import { ref } from 'vue';
import {
  homeOutline,
  homeSharp,
  listCircleOutline,
  listCircleSharp,
  newspaperOutline,
  newspaperSharp,
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
  {
    tab: 'joys',
    title: '笑裡藏道',
    url: '/tabs/joys',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    tab: 'rankinglist',
    title: '喜樂榜',
    url: '/tabs/rankinglist',
    iosIcon: listCircleOutline,
    mdIcon: listCircleSharp,
  },
  {
    tab: 'newlist',
    title: '新出爐',
    url: '/tabs/newlist',
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp,
  },
];

const path = window.location.pathname.split('tabs/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>
