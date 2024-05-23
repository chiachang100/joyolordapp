import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US';
import zhCN from './locales/zh-CN';
import zhTW from './locales/zh-TW';

// Set and expose the default locale
// export const defaultLocale = 'en-US'
// export const defaultLocale = 'zh-CN'
export const defaultLocale = 'zh-TW'

export type SupportedLocale = "en-US" | "zh-TW" | "zh-CN";

// type MessageSchema = typeof enUS;
// const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-CN' | 'zh-TW'>({

// call with I18n option
const i18n = createI18n({
  legacy: false, // Set to use Composition API
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
    'zh-TW': zhTW
  }
});

// i18n.global.locale.value = defaultLocale;
// i18n.global.locale.value = 'en-US';

export default i18n;
