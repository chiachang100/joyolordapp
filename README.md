# joyolordapp: 主的喜樂
```
"你們不要憂愁，因靠耶和華而得的喜樂是你們的力量。" (尼希米記 8:10b)
“And do not be grieved, for the joy of the Lord is your strength.”(Nehemiah 8:10b)
```

---
## References
### Ionic Framework
- [Ionic Framework](https://ionicframework.com/)
- [One Codebase Any Platform Just React](https://ionicframework.com/docs/react)
- [Ionic UI Components](https://ionicframework.com/docs/components)
- [Your First Ionic App: React](https://ionicframework.com/docs/react/your-first-app)
  - [Ionic React and Capacitor@GitHub](https://github.com/ionic-team/tutorial-photo-gallery-react.git)
- [Configure Ionic in Dark Mode](https://ionicframework.com/docs/theming/dark-mode)

### React
- [React website](https://react.dev/)
   - [Legacy React website](https://legacy.reactjs.org/)

### Progressive Web Apps (PWA)
- [Progressive Web Apps in React](https://ionicframework.com/docs/react/pwa)

### Use Capacitor to Deploy to iOS and Android
- [Capacitor: Deploying to iOS and Android](https://ionicframework.com/docs/vue/your-first-app/deploying-mobile)

### Firebase
- [Firebase CLI reference](https://firebase.google.com/docs/cli)
- [Add Firebase to your Flutter app](https://firebase.google.com/docs/flutter/setup?platform=android#available-plugins)
- Source: [Firebase CLI reference](https://firebase.google.com/docs/cli)
- [Use the CLI with CI systems](https://firebase.google.com/docs/cli#cli-ci-systems)
- Install Node.js using NVM (Node Version Manager))
  - Linux/MacOS: [Node Version Manager](https://github.com/nvm-sh/nvm)
  - Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows).
- [Install and Configure Local Emulator Suite](https://firebase.google.com/docs/emulator-suite/install_and_configure)

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
- `ionic start joyolordapp blank --type=react --capacitor`
- `ionic build`
- `ionic serve`

## Create an App
- Using the `blank` starter template and add `Capacitor` for native functionality.
  - `ionic start joyolordapp blank --type=react --capacitor`

## Install the necessary Capacitor plugins
  - `cd joyolordapp`
  - `npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem`

## Progressive Web Apps (PWA) in React
### PWA Elements
  - `npm install @ionic/pwa-elements`
  - `code .`
  - Next, import `@ionic/pwa-elements` by editing `src/main.tsx`.
```
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader before the render call
defineCustomElements(window);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
  - That’s it! Now for the fun part - let’s see the app in action.

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

// import '@ionic/react/css/palettes/dark.always.css';
// import '@ionic/react/css/palettes/dark.class.css';
import '@ionic/react/css/palettes/dark.system.css';
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
- `ionic build`
- `ionic cap copy`
- `ionic cap sync`
- `ionic cap run android --livereload --external`
  - `ionic cap run android --livereload-url=http://localhost:8100`
- `ionic cap open android`

---
## Deploying to iOS
- Complete a fresh build of the Ionic project (web default directory: `build`)
- `ionic cap add ios`
- `ionic build`
- `ionic cap copy`
- `ionic cap sync`
- `ionic cap run ios --livereload --external`
  - `ionic cap run ios --livereload-url=http://localhost:8100`
- `ionic cap open ios`
- Modify `Info.plist` and other parameters...

---
## Using Firebase
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
