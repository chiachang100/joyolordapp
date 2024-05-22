<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ t("AboutPage.title") }}</ion-label>
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
          <ion-title size="large">{{ t("AboutPage.title") }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- 「主的喜樂」 joyolordapp QR Code Section -->
      <ion-card>
        <ion-grid
          ><ion-row
            ><ion-col size="4" offset="4">
              <ion-img
                src="assets/images/joyolord/joyolordapp_qrcode.png"
                :alt="t('AboutPage.joyolordappQrCode')"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        <ion-card-header>
          <ion-card-title>{{ t("AboutPage.joyolordappQrCode") }}</ion-card-title>
          <ion-card-subtitle
            >{{ t("AboutPage.joyolordappQrCode") }} (joyolordapp QR
            Code)</ion-card-subtitle
          >
        </ion-card-header>

        <ion-card-content style="padding-top: 0; white-space: pre-wrap">
          {{ t("useQrCode") }}{{ t("joyolordappApp") }}。 (v{{ appVer }})
        </ion-card-content>

        <ion-button fill="outline" expand="block" href="https://joyolordapp.web.app/"
          >{{ t("joyolordappApp") }} (joyolordapp)</ion-button
        >
      </ion-card>

      <!-- 「笑裡藏道」 xlcdapp QR Code Section -->
      <ion-card>
        <ion-grid
          ><ion-row
            ><ion-col size="4" offset="4">
              <ion-img
                src="assets/images/xlcd/xlcdapp_qrcode.png"
                :alt="t('AboutPage.xlcdappQrCode')"
              ></ion-img> </ion-col></ion-row
        ></ion-grid>
        <ion-card-header>
          <ion-card-title>{{ t("AboutPage.xlcdappQrCode") }}</ion-card-title>
          <ion-card-subtitle
            >{{ t("AboutPage.xlcdappQrCode") }} (xlcdapp QR Code)</ion-card-subtitle
          >
        </ion-card-header>

        <ion-card-content style="padding-top: 0; white-space: pre-wrap">
          {{ t("useQrCode") }}{{ t("xlcdappApp") }}。
        </ion-card-content>
        <ion-button fill="outline" expand="block" href="https://xlcdapp.web.app/"
          >{{ t("xlcdappApp") }} (xlcdapp)</ion-button
        >
      </ion-card>

      <!-- 「笑裡藏道」書籍介紹 Section -->
      <ion-card>
        <ion-img style="width: 100%; object-fit: cover;"
          src="assets/images/xlcd/xlcd_book_photo.png"
          :alt="t('AboutPage.bookIntro')">
        </ion-img>
      <!--
        <ion-grid
          ><ion-row
            ><ion-col size="8" offset="2">
              <ion-img
                src="assets/images/xlcd/xlcd_book_photo.png"
                :alt="t('AboutPage.bookIntro')"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        -->
        <ion-card-header>
          <ion-card-title>{{ t("AboutPage.bookIntro") }}</ion-card-title>
          <ion-card-subtitle>{{ t("AboutPage.bookIntroSubtitle") }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>{{ t("AboutPage.bookIntroContent") }}</ion-card-content>

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button
                fill="outline"
                expand="block"
                href="https://graceph.com/product/01i072/"
                >{{ t("AboutPage.gracephBookStore") }}</ion-button
              >
            </ion-col>
            <ion-col>
              <ion-button
                fill="outline"
                expand="block"
                href="https://www.rolcc.net/opencart/index.php?route=product/product&product_id=358"
                >{{ t("AboutPage.riverbankBookStore") }}</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>

      <!-- 「笑裡藏道」書籍作者 Section -->
      <ion-card>
        <ion-img style="width: 100%; object-fit: cover;"
          src="assets/images/xlcd/pastor_cheng_photo.png"
          :alt="t('AboutPage.bookAuthor')">
        </ion-img>
        <!--
        <ion-grid
          ><ion-row
            ><ion-col size="8" offset="2">
              <ion-img
                src="assets/images/xlcd/pastor_cheng_photo.png"
                :alt="t('AboutPage.bookAuthor')"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        -->
        <ion-card-header>
          <ion-card-title>{{ t("AboutPage.bookAuthor") }}</ion-card-title>
          <ion-card-subtitle>{{ t("AboutPage.bookAuthorSubtitle") }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>{{ t("AboutPage.bookAuthorContent") }}</ion-card-content>

        <ion-button
          fill="outline"
          expand="block"
          href="https://www.youtube.com/results?search_query=%22%E6%9B%BE%E8%88%88%E6%89%8D%E7%89%A7%E5%B8%AB%22"
          >{{ t("AboutPage.bookAuthorYouTube") }}</ion-button
        >
      </ion-card>

      <!-- 讚揚「笑裡藏道」書籍 Section -->
      <ion-card>
        <ion-img style="width: 100%; object-fit: cover;"
          src="assets/images/xlcd/xlcdapp_photo_default.png"
          :alt="t('AboutPage.bookPraisesTitle')">
        </ion-img>
      <!--
        <ion-grid
          ><ion-row  style="width: 100%; object-fit: cover;"
            ><ion-col size="8" offset="2">
              <ion-img style="width: 100%; object-fit: cover;"
                src="assets/images/xlcd/xlcdapp_photo_default.png"
                :alt="t('AboutPage.bookPraisesTitle')"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        -->
        <ion-card-header>
          <ion-card-title>{{ t("AboutPage.bookPraisesTitle") }}</ion-card-title>
          <ion-card-subtitle>{{ t("AboutPage.bookPraisesSubtitle") }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label>{{ t("AboutPage.bookPraises1") }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>{{ t("AboutPage.bookPraises2") }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>{{ t("AboutPage.bookPraises3") }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>{{ t("AboutPage.bookPraises4") }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>{{ t("AboutPage.bookPraises5") }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button
                fill="outline"
                expand="block"
                href="https://graceph.com/product/01i072/"
                >{{ t("AboutPage.gracephBookStore") }}</ion-button
              >
            </ion-col>
            <ion-col>
              <ion-button
                fill="outline"
                expand="block"
                href="https://www.rolcc.net/opencart/index.php?route=product/product&product_id=358"
                >{{ t("AboutPage.riverbankBookStore") }}</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>

      <!-- App 程式開發員 Section -->
      <ion-card>
        <ion-img style="width: 100%; object-fit: cover;"
          src="assets/images/xlcd/joy_pray_thanks.png"
          :alt="t('AboutPage.appDeveloper')">
        </ion-img>
      <!--
        <ion-grid
          ><ion-row
            ><ion-col size="8" offset="2">
              <ion-img style="width: 100%; object-fit: cover;"
                src="assets/images/xlcd/joy_pray_thanks.png"
                :alt="t('AboutPage.appDeveloper')"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        -->
        <ion-card-header>
          <ion-card-title>{{ t("AboutPage.appDeveloper") }}</ion-card-title>
          <ion-card-subtitle>{{ t("AboutPage.appDeveloperSubtitle") }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>{{ t("AboutPage.appDeveloperContent") }}</ion-card-content>

        <ion-button
          fill="outline"
          expand="block"
          href="https://www.biblegateway.com/passage/?search=%E5%B8%96%E6%92%92%E7%BE%85%E5%B0%BC%E8%BF%A6%E5%89%8D%E6%9B%B8+5%3A16-18&version=CUVMPT"
          >{{ t("AboutPage.onlineBible") }}
        </ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { inject } from "vue";

import {
  IonButton,
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
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import AppLogo from "@/components/AppLogo.vue";

const appVer = inject<string>("appVersion");

import { useI18n } from "vue-i18n";
const { t } = useI18n();

</script>

<style scoped>
ion-card-title {
  font-size: 18px;
}
</style>