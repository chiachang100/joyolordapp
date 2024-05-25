// useFileWriter.ts
import { ref } from 'vue';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export function useFileWriter(filePath: string, fileContents: string) {
  const writeSuccess = ref(true);

  const writeFile = async () => {
    try {
      await Filesystem.writeFile({
        path: filePath,
        data: fileContents,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      console.log('[useFileWriter] File saved successfully!');
    } catch (error) {
      console.error('[useFileWriter] Error saving file:', error);
      writeSuccess.value = false;
    }
  };

  writeFile()

  return { writeSuccess, writeFile };
}
