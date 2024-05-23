import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

import AppAvatarLogo from '@/components/AppAvatarLogo.vue';
import AppLogo from '@/components/AppLogo.vue';
import AppXlcdLogo from '@/components/AppXlcdLogo.vue';
import packageJson from '../package.json';

// vue-plyr
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

// I18N
//import i18n, { defaultLocale } from './i18n/i18nMain';
import i18n from './i18n/i18nMain';

// VueFire
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './services/firebase.services'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

defineCustomElements(window);

// const i18n = createI18n({
//   // something vue-i18n options here ...
// })

// Above the createApp() line
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VuePlyr, {
    plyr: {}
  })
  .use(i18n)
  .use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  });

// Global components
app.component('app-avatar-logo', AppAvatarLogo);
app.component('app-logo', AppLogo);
app.component('app-xlcd-logo', AppXlcdLogo);

// Global variables
app.provide('appVersion', packageJson.version);
app.provide('appUrl', packageJson.homepage);
app.provide('appUrlForXlcd', 'https://xlcdapp.web.app');
app.provide('appName', '主的喜樂');
app.provide('appNameInEnglish', packageJson.name);
app.provide('appLogo', 'assets/icon/joyolordapp-logo.webp');
app.provide('appLogoAlt', packageJson.name + ' logo');
app.provide('appXlcdLogo', 'assets/icon/xlcdapp-logo.webp');
app.provide('appXlcdLogoAlt', 'xlcdapp logo');
app.provide('appDescription', 'packageJson.description');
app.provide('appEmail', 'chiachang100@gmail.com');

app.provide('maxTopNumber', 7);

// app.use(i18n);

// Hooray! we can mount our app now!
router.isReady().then(() => {
  app.mount('#app');
});

const app_version = packageJson.version;

import { AnalyticsService } from './services/analytics.service';
const analytics = new AnalyticsService();
analytics.logEvent({
  name: 'jola_screen_name',
  parameters: {
    app_version: app_version,
    joyolordapp_screen: 'Main',
    joyolordapp_screen_class: 'Main',
  },
});

analytics.setUserProperty({ key: 'app_version', value: app_version });
