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
                alt="joyolordapp QR Code"
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
              <ion-img src="assets/images/xlcd/xlcdapp_qrcode.png" alt="xlcdapp QR Code">
              </ion-img> </ion-col></ion-row
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
        <ion-grid
          ><ion-row
            ><ion-col size="8" offset="2">
              <ion-img
                src="assets/images/xlcd/xlcd_book_photo.png"
                alt="「笑裡藏道」書籍"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
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
        <ion-grid
          ><ion-row
            ><ion-col size="8" offset="2">
              <ion-img
                src="assets/images/xlcd/pastor_cheng_photo.png"
                alt="曾興才牧師: 「笑裡藏道」書籍作者"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        <ion-card-header>
          <ion-card-title>曾興才牧師: 「笑裡藏道」書籍作者</ion-card-title>
          <ion-card-subtitle>曾興才牧師: 「笑裡藏道」書籍作者'</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          出生於馬來西亞，至英國及美國路易斯安那州攻讀建築學位。
          全職奉獻後於1990年獲得達拉斯神學院神學碩士，曾於德州阿靈頓聖經教會牧會。
          1995年返回馬來西亞擔任吉隆坡信義會主任牧師。
          2001年全家返美，加入「矽谷生命河靈糧堂」事奉團隊，目前負責牧養處事工。 與師母
          Connie 育有兩個女兒。
        </ion-card-content>

        <ion-button
          fill="outline"
          expand="block"
          href="https://www.youtube.com/results?search_query=%22%E6%9B%BE%E8%88%88%E6%89%8D%E7%89%A7%E5%B8%AB%22"
          >曾興才牧師講道視頻</ion-button
        >
      </ion-card>

      <!-- 讚揚「笑裡藏道」書籍 Section -->
      <ion-card>
        <ion-grid
          ><ion-row
            ><ion-col size="8" offset="2">
              <ion-img
                src="assets/images/xlcd/xlcdapp_photo_default.png"
                alt="讚揚「笑裡藏道」書籍"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
        <ion-card-header>
          <ion-card-title>讚揚「笑裡藏道」書籍</ion-card-title>
          <ion-card-subtitle
            >來，領受一份 「幽默感」的恩膏！
            累積你的笑話存款，提升你的親和指數，打開分享真理的機會之門！'</ion-card-subtitle
          >
        </ion-card-header>

        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label>
                👍若同樣有功效，能用幽默的笑話，把神的道解明，豈不更好？鄭重推薦本書，幫助你分享真道，有笑果，更有效果！
                (靈糧全球使徒性網絡主席 周神助)
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                👍幽默感能使我們從新的角度來看每天周遭發生的事，也使我們可以笑談自己的缺失，並接納別人的軟弱。事實上，幽默感能幫助我們的信仰
                更人性化，使人更容易來親近神。 (美國加州矽谷生命河靈糧堂主任牧師 劉彤)
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                👍曾牧師這本書顛覆傳統，詮釋了矽谷的創新精神⋯⋯一個牧師寫本關於「笑」的書，就如同嚴肅人講笑話，講的時候常有意想不到的效果。
                (矽谷創新頻道「丁丁電視」創辦人丁維平)
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                👍每篇短文都像是曾牧師喜歡的一杯好茶，初嚐不酸，再喝不澀，品完後喉韻甘醇，回味無窮。
                (欣欣教育基金會教育顧問 廖本榮)
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                👍獨樂樂，不如眾樂樂。我預測你的朋友們會和你一樣，迫不及待地想要享受
                《笑裡藏道》。所以，做一件讓他們大為開懷的事一一送他們一人一本吧！
                (北加州全福會會長、優視頻道執行委員會主席 劉效宏)
              </ion-label>
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
        <ion-grid
          ><ion-row
            ><ion-col size="8" offset="2">
              <ion-img
                src="assets/images/xlcd/joy_pray_thanks.png"
                :alt="t('AboutPage.appDeveloper')"
              >
              </ion-img> </ion-col></ion-row
        ></ion-grid>
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
