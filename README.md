# joyolordapp: 主的喜樂
```
"你們不要憂愁，因靠耶和華而得的喜樂是你們的力量。" (尼希米記 8:10b)
“And do not be grieved, for the joy of the Lord is your strength.”(Nehemiah 8:10b)
```

---
## References
### Ionic Framework
- [Ionic Framework](https://ionicframework.com/)
- [One Codebase Any Platform Just Vue](https://ionicframework.com/docs/vue)
- [Ionic UI Components](https://ionicframework.com/docs/components)
- [Your First Ionic App: Vue](https://ionicframework.com/docs/vue/your-first-app)
  - [Ionic Vue and Capacitor@GitHub](https://github.com/ionic-team/tutorial-photo-gallery-vue.git)
- [Configure Ionic in Dark Mode](https://ionicframework.com/docs/theming/dark-mode)

### Vue
- [Vue website](https://vue.dev/)
   - [Legacy Vue website](https://legacy.vuejs.org/)

### Progressive Web Apps (PWA)
- [Progressive Web Apps in Vue](https://ionicframework.com/docs/vue/pwa)

### Use Capacitor to Deploy to iOS and Android
- [Capacitor: Deploying to iOS and Android](https://ionicframework.com/docs/vue/your-first-app/deploying-mobile)

### Additional Tools
- [Ionic Icons](https://ionic.io/ionicons/)
- [Emoji](https://emojidb.org/more-emojis?utm_source=user_search)
- [vue-plyr: YouTube Video Player](https://github.com/redxtech/vue-plyr)
  - [VueYoutube](https://github.com/vue-youtube/vue-youtube). Tried but it didn't work for me.

#### Install and/or Update packages
- `npx update-browserslist-db@latest`
---
## Download Required Tools
- [LTS version of Node.js](https://nodejs.org/en/).
- [Visual Studio Code](https://code.visualstudio.com/).

## Install Ionic Tooling
- `npm install -g @ionic/cli native-run cordova-res`
- Commonly used Ionic commands
- `ionic -v`
- `ionic --help`
- `ionic start --help`
- `ionic start joyolordapp blank --type=vue --capacitor`
- `ionic build`
- `ionic serve`

## Create an App
- Using the `blank` starter template and add `Capacitor` for native functionality.
  - `ionic start joyolordapp blank --type=vue --capacitor`

## Install the necessary Capacitor plugins
  - `cd joyolordapp`
  - `npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem`

## Progressive Web Apps (PWA) in Vue
### PWA Elements
  - `npm install @ionic/pwa-elements`

---
### Running `vite-plugin-pwa`
- Install the `vite-plugin-pwa` package:
  - `npm install -D vite-plugin-pwa`
- update your `vite.config.js` or `vite.config.ts` file
```
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "name":"主的喜樂",
        "short_name":"主的喜樂",
        ...
      }
    })
  ],
});
```

## Dark Mode
- Add `dark.system.css` in `src/App.tsx` to use the System setting:
```
/**
 * Ionic Dark Palette
 * -----------------------------------------------------
 * For more information, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/vue/css/palettes/dark.always.css';
// import '@ionic/vue/css/palettes/dark.class.css';
import '@ionic/vue/css/palettes/dark.system.css';
```

## Run the APP
- `ionic serve`

---
## Deploying to Android
- `ionic cap add android`
- Modify `android/app/src/main/AndroidManifest.xml`
  - Scroll to the `Permissions` section and ensure these entries are included:
```
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```
- Web: `ionic build`
- `ionic cap build android`
- `ionic cap copy`
- `ionic cap sync`

- Launch Android Emulator and bind to external IP address (e.g., http://192.168.1.25:8100 on your LAN).
  - `ionic cap run android --livereload --external`

- Forces the app to connect to the specific URL you provide (http://localhost:8100 in this case)
  - `ionic cap run android --livereload-url=http://localhost:8100`

- Open Android Studio
  - `ionic cap open android`

---
## Deploying to iOS
- Add `Firebase` in `ios/App/Podfile`:
```
target 'App' do
  capacitor_pods
  # Add your Pods here
  pod 'FirebaseCore'
  pod 'FirebaseAnalytics'
end
```
- Run `pod install`
- `pushd .`
- `cd ios/App`
- `pod install`
- `pod update`
- `popd`

- Check your target iOS device ID
- `xcrun simctl list devices`

- Complete a fresh build of the Ionic project (web default directory: `build`)
- `ionic cap add ios`
- Web: `ionic build`
- iOS: `ionic cap build ios`
- `ionic cap copy`
- `ionic cap sync`

- Launch iOS Simulator and bind to external IP address (e.g., http://192.168.1.25:8100 on your LAN). 
  - `ionic cap run ios --livereload --external`

- Forces the app to connect to the specific URL you provide (http://localhost:8100 in this case)
  - `ionic cap run ios --livereload-url=http://localhost:8100`

- Open Xcode
  - `ionic cap open ios`

- Modify `Info.plist` and other parameters...

---
---
## Using Firebase Hosting
- [Firebase CLI reference](https://firebase.google.com/docs/cli)
- [Add Firebase to your Flutter app](https://firebase.google.com/docs/flutter/setup?platform=android#available-plugins)
- Source: [Firebase CLI reference](https://firebase.google.com/docs/cli)
- [Use the CLI with CI systems](https://firebase.google.com/docs/cli#cli-ci-systems)
- Install Node.js using NVM (Node Version Manager))
  - Linux/MacOS: [Node Version Manager](https://github.com/nvm-sh/nvm)
  - Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows).
- [Install and Configure Local Emulator Suite](https://firebase.google.com/docs/emulator-suite/install_and_configure)

- Install Firebase tools
  - `npm install -g firebase-tools`
- Log into Firebase
  - `firebase login`
  - `firebase login:ci`
- Listing your Firebase projects
  - `firebase projects:list`
- Initialize a Firebase project
  - Run the following command from within your app's directory:
  - `firebase init`
  - It will create `firebase.json` config file.
- Use project aliases
  - `firebase use`
  - `firebase use <PROJECT_ID|ALIAS>`
- Serve and test your Firebase project locally
  - `ionic build --prod`
  - `firebase serve --only hosting`
- Test from other local devices
  - `firebase serve --host 0.0.0.0  --only hosting` // accepts requests to any host
- Deploy to a Firebase project
  - `firebase deploy`
  - OR `firebase deploy --only hosting`

---
### Firebase Local Emulator Suite
- `firebase init emulators`
  - `firebase.json`
  - `.firebaserc`

- Specifying Java options
  - `export JAVA_TOOL_OPTIONS="-Xmx4g"`

- Start up emulators
  - `firebase emulators:start --import c:\ws\fb_emulators --export-on-exit`
  - `firebase emulators:exec scriptpath`

```
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

i  Using project xlcdapp (xlcdapp)

=== Emulators Setup
=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices.
Authentication Emulator, Firestore Emulator, Database Emulator, Hosting Emulator
i  Port for auth already configured: 9099
i  Port for firestore already configured: 8080
i  Port for database already configured: 9000
i  Port for hosting already configured: 5000
i  Emulator UI already enabled with port: (automatic)
? Would you like to download the emulators now? Yes
```

---
---
## Vue I18N
- [Vue I18n Internationalization plugin for Vue.js](https://vue-i18n.intlify.dev/)
  - [vue-i18n-next: Vue I18n 9 for Vue 3 @GitHub](https://github.com/intlify/vue-i18n-next)
  - [Getting Started](https://vue-i18n.intlify.dev/guide/essentials/started.html)
    - [Example on stackblitz.com](https://stackblitz.com/edit/vue-i18n-get-started?file=main.js)
- [vue-i18n-locale-message](https://github.com/intlify/vue-i18n-locale-message)
- [Intlify CLI: CLI Tooling for i18n development](https://github.com/intlify/cli)
- [A Comprehensive Guide to Vue Localization By Mohammad Ashour](https://phrase.com/blog/posts/ultimate-guide-to-vue-localization-with-vue-i18n/)
  - [vue3-i18n-2022: Vue I18N Demo](https://github.com/PhraseApp-Blog/vue3-i18n-2022/tree/i18n-composition)

- `npm install vue-i18n`

### Create the locale messages
- Create a json file for each locale in `src/i18n/` and include them in `i18nMain.ts`
  - `src/i18n/`
    - `en-US.json`
    - `zh-CN.json`
    - `zh-TW.json`
    - `index.ts`

### Add the `vue-18n` init in `main.ts`:
```
import i18n from './i18n/index';

app.use(i18n);

```

### Use `useI18n` in the `.vue` components:
```
<script setup> 
import { useI18n } from 'vue-i18n'
const { t } = useI18n() 
</script>

<template>
  <h1>{{ $t("message.hello") }}</h1>
OR
  <h1>{{ t("message.hello") }}</h1>
</template>
```

### Message Translation
- [Composition API: Message Translation](https://vue-i18n.intlify.dev/guide/advanced/composition.html)

```
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  locale: 'en',
  messages: {
    en: {
      msg: 'hello',
      named: '{msg} world!',
      list: '{0} world!',
      literal: "{'hello'} world!",
      the_world: 'the world',
      dio: 'DIO:',
      linked: '@:dio @:the_world !!!!'
    },
    ja: {
      msg: 'こんにちは',
      named: '{msg} 世界！',
      list: '{0} 世界！',
      literal: "{'こんにちは'} 世界！",
      the_world: 'ザ・ワールド！',
      dio: 'ディオ:',
      linked: '@:dio @:the_world ！！！！'
    }
  }
})

const msg = computed(() => t('msg'))
</script>

<template>
  <p>{{ t('named', { msg }) }}</p>
  <p>{{ t('list', [msg]) }}</p>
  <p>{{ t('literal') }}</p>
  <p>{{ t('linked') }}</p>
</template>
```

---
## Firebase Authentication, Firestore and Analytics
- Please see ** Firebase Hosting ** section above for Firebase information.

### Firebase Analytics
- [@capacitor-firebase/analytics](https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/analytics)
- `npm install @capacitor-firebase/analytics firebase`
- Create `src/services/analytics.service.ts`

### Firebase Firestore
- [VueFire Official Firebase bindings for Vue.js](https://vuefire.vuejs.org/)

- Install VueFIre
- `npm i vuefire firebase`
- Create `src/services/firebase.service.ts`

### Firebase Authentication
- [@capacitor-firebase/authentication](https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/authentication)
- [Set up authentication using Google Sign-In](https://github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/setup-google.md)
- `npm install @capacitor-firebase/authentication firebase`

- In `capacitor.config.ts:`
```
/// <reference types="@capacitor-firebase/authentication" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["apple.com", "facebook.com"],
    },
  },
};

export default config;
```

---
## Generating Splash Screen and App Icon Using Capacitor Sssets Plugin

- Create icons
```
assets/
- icon.png (png|jpg) must be at least 1024x1024px
- splash.png (png|jpg) must be at least 2732x2732px

- Install Capacitor assets plugin
- `npm install @capacitor/assets`
- `npx capacitor-assets generate`

---
