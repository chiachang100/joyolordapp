///// <reference types="@capacitor-firebase/authentication" />
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.joyolord.joyolordapp',
  appName: 'joyolordapp',
  webDir: 'dist',

  // server: {
  //   url: 'http://10.0.2.2:8100',   // special alias for host machine from emulator
  //   cleartext: true                // allow HTTP (non-HTTPS) connections
  // },

  // plugins: {
  //   FirebaseAuthentication: {
  //     skipNativeAuth: false,
  //     providers: ["google.com",],
  //   },
  // },

};

export default config;
