import { ref, onMounted, watch } from 'vue';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
//import { Capacitor } from '@capacitor/core';

export interface JoyRecord {
  filepath: string;
  webviewPath?: string;
}

export const useJoysStore = () => {
  const JOYS_STORAGE = 'joys';
  const joys = ref<JoyRecord[]>([]);


  const loadSaved = async () => {
    const joysList = await Preferences.get({ key: JOYS_STORAGE });
    const joysInPreferences = joysList.value ? JSON.parse(joysList.value) : [];

    // If running on the web...
    if (!isPlatform('hybrid')) {
      for (const photo of joysInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
    }

    joys.value = joysInPreferences;
  };

  const cacheJoys = () => {
    Preferences.set({
      key: JOYS_STORAGE,
      value: JSON.stringify(joys.value),
    });
  };

  const getJoysAll = async () => {
  };

  const getJoysRankingList = async () => {
  };

  const getJoysNewList = async () => {
  };
  
  onMounted(loadSaved);
  watch(joys, cacheJoys);

  return {
    joys,
    getJoysAll,
    getJoysRankingList,
    getJoysNewList,
  };
};
