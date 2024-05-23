<template>
  <ion-thumbnail slot="start">
    <img :src="xlcdLogo" :alt="xlcdLogoAlt" />
  </ion-thumbnail>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { IonThumbnail } from "@ionic/vue";

const xlcdLogo = inject<string>("appXlcdLogo");
const xlcdLogoAlt = inject<string>("appXlcdLogoAlt");
</script>

<style scoped></style>
