<template>
  <ion-item
    v-if="scripture"
    :routerLink="'/scriptures/scripture/' + scripture.articleId"
    :detail="false"
    class="list-item"
  >
    <app-logo />
    <ion-label class="ion-text-wrap">
      <h2>
        {{index! + 1}}. {{ scripture.title }}
        {{ scripture.isRicherDaily ? "*" : "" }}
        <!--
        {{ scripture.isRicherDaily ? t("richerDailyTitle") : "" }}

        <span class="likes">
          <ion-icon
            aria-hidden="true"
            :name="chevronForward"
            size="small"
            v-if="isIos()"
          ></ion-icon>
        </span>
        -->
      </h2>
      <h3>{{ scripture.scriptureName }} {{ scripture.scriptureChapter }}</h3>
      <p>
        {{ scripture.scriptureVerse }} ({{ scripture.scriptureName }}
        {{ scripture.scriptureChapter }})
      </p>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import {
  // IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/vue";
// import { chevronForward } from "ionicons/icons";

defineProps({
  scripture: Object,
  index: Number,
});

// const isIos = () => {
//   const win = window as any;
//   return win && win.Ionic && win.Ionic.mode === "ios";
// };

// Disable this event since it generatee too many events.
// import { AnalyticsService } from '../services/analytics.service';
// const analytics = new AnalyticsService();
// analytics.logEvent({
//   name: 'jola_screen_name',
//   parameters: {
//     jola_screen: 'ScripturesPage',
//     jola_screen_class: 'ScriptureListItem',
//   },
// });
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 6px;
  margin-bottom: 6px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;

  /**
   * With larger font scales
   * the date/time should wrap to the next
   * line. However, there should be
   * space between the name and the date/time
   * if they can appear on the same line.
   */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list-item p {
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .likes {
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 0.9375rem;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>
