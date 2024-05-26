<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-item>
            <app-logo />
            <ion-label>{{ t("login") }}</ion-label>
          </ion-item>
        </ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ t("login") }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <form @submit.prevent="login" class="login-form">
        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="text" required></ion-input>
        </ion-item>
        <ion-item lines="full">
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="password" type="password" required></ion-input>
        </ion-item>
        <!--<ErrorBox v-if="error" :error="error" />-->
        <!--
        <ion-button expand="block" @click="loginRedirect">Log In</ion-button>
        -->
        <ion-button expand="block" @click="doLogin">Log In</ion-button>
        <ion-button expand="block" @click="doLogout">Log Out</ion-button>
      </form>

      <p v-if="user">Hello {{ user.providerData.displayName }}!!!</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import AppLogo from "@/components/AppLogo.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

//--------------------------------------
// Firebase Authentication
//--------------------------------------
const email = ref("");
const password = ref("");
// Display errors if any
const error = ref(null);

import {
  getRedirectResult,
  signInWithEmailAndPassword,
  // signInWithRedirect,
  // signInWithPopup,
  // signOut,
} from "firebase/auth";
// import { GoogleAuthProvider } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from "vuefire";

const auth = useFirebaseAuth()!; // only exists on client side
// const googleAuthProvider = new GoogleAuthProvider()

// const loginRedirect = () => {
const doLogin = () => {
  // signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
  //     console.error('Failed signInRedirect', reason)
  //     error.value = reason
  //   })
  console.log("doLogin(): email=" + email.value + "; password=" + password.value);
  try {
    // await auth.signInWithEmailAndPassword(email.value, password.value)
    signInWithEmailAndPassword(auth, email.value, password.value).catch((reason) => {
      console.error("Failed signInWithEmailAndPassword", reason);
      error.value = reason;
    });
  } catch (error) {
    console.error("Login failed", error);
  }
};

// Only on client side
onMounted(() => {
  getRedirectResult(auth).catch((reason) => {
    console.error("Failed redirect result", reason);
    error.value = reason;
  });
});

const user = useCurrentUser();

const doLogout = () => {
  console.log("Signed out!");
  auth.signOut();
};

/*
import {

  signInWithPopup,
  // signOut,
} from 'firebase/auth'

import { GoogleAuthProvider } from 'firebase/auth'
import {
  useCurrentUser,
  useIsCurrentUserLoaded,
  useFirebaseAuth
} from 'vuefire'

const auth = useFirebaseAuth()! // only exists on client side
const googleAuthProvider = new GoogleAuthProvider()

const user = useCurrentUser()
// const user = useIsCurrentUserLoaded()

const doLogin = () => {
  console.log("doLogin(): email=" + email.value + "; password=" + password.value);
  error.value = null
  signInWithPopup(auth, googleAuthProvider).catch((reason) => {
      console.error('Failed sign in', reason)
      error.value = reason
  })
  // user = auth.user
  // console.log("user=" + user.providerData.displayName)
} 

 */

//--------------------------------------
// Firebase Analytics
//--------------------------------------
import { AnalyticsService } from "../services/analytics.service";
const analytics = new AnalyticsService();
analytics.logEvent({
  name: "jola_login_name",
  parameters: {
    jola_screen: "LoginPage",
    jola_screen_class: "LoginPage",
  },
});

/*
import {
  getRedirectResult,
  signInWithRedirect,
  signInWithPopup,
  // signOut,
} from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import {
  // useCurrentUser,
  useFirebaseAuth
} from 'vuefire'

const auth = useFirebaseAuth()! // only exists on client side
const googleAuthProvider = new GoogleAuthProvider()

const email = ref("");
const password = ref("");

// Display errors if any
const error = ref(null)
const loginRedirect = () => {
  signInWithRedirect(auth, someAuthProvider).catch((reason) => {
      console.error('Failed signInRedirect', reason)
      error.value = reason
    })
}

// Only on client side
// onMounted(() => {
//   getRedirectResult(auth).catch((reason) => {
//     console.error('Failed redirect result', reason)
//     error.value = reason
//   })
// })

const onMounted = () => {
  getRedirectResult(auth).catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  })
}

const loginPopup = () => {
  console.log("loginPopup(): email=" + email.value + "; password=" + password.value);
  error.value = null
  signInWithPopup(auth, googleAuthProvider).catch((reason) => {
      console.error('Failed sign in', reason)
      error.value = reason
    })
}
 */

/* 
//
// [@capacitor-firebase/authentication](https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/authentication)
//
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';


const signInAnonymously = async () => {
  const result = await FirebaseAuthentication.signInAnonymously();
  return result.user;
};

//
const doLogin = async () => {
  console.log("loginPopup(): email=" + email.value + "; password=" + password.value);
  const result = await FirebaseAuthentication.signInWithEmailAndPassword({
    // email: email.value,
    // password: password.value,
    email: 'test@example.org',
    password: 'test123',
  });
  return result.user;
};

 */
</script>

<style scoped>
ion-card {
  font-weight: 600;
}

ion-card-title {
  font-size: 18px;
}
</style>
