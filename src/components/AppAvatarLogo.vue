<template>
  <ion-avatar slot="start">
    <img :src="logo" :alt="logoAlt" />
  </ion-avatar>
</template>

<script setup lang="ts">
import { inject } from "vue";

const logo = inject<string>("appLogo");
const logoAlt = inject<string>("appLogoAlt");
</script>

<style scoped></style>
