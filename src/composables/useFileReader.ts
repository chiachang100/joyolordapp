// useFileReader.ts
import { ref } from 'vue';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export function useFileReader(filePath: string) {
  const fileContents = ref('');

  const readFile = async () => {
    try {
      const fileData = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      fileContents.value = fileData.data as string;
      console.log('[useFileReader] File content:', fileContents.value);
      console.log('[useFileReader] File content: directory=', Directory.Documents);
    } catch (error) {
      console.error('[useFileReader] Error reading file:', error);
    }
  };

  return { fileContents, readFile };
}
