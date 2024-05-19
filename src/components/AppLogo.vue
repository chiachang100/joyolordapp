<template>
  <ion-thumbnail slot="start">
    <img :src="logo" :alt="logoAlt" />
  </ion-thumbnail>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { IonThumbnail } from "@ionic/vue";

const logo = inject<string>("appLogo");
const logoAlt = inject<string>("appLogoAlt");
</script>

<style scoped></style>
