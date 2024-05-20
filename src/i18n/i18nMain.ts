import { createI18n } from 'vue-i18n';
import enUS from '../locales/en-US.json';
import zhCN from '../locales/zh-CN.json';
import zhTW from '../locales/zh-TW.json';
// import defaultMessages from '../locales/en-US.json';

// Set and expose the default locale
// export const defaultLocale = 'en-US'
// export const defaultLocale = 'zh-CN'
export const defaultLocale = 'zh-TW'

type MessageSchema = typeof enUS;

// call with I18n option
const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-CN' | 'zh-TW'>({
  legacy: false, // Set to use Composition API
  locale: defaultLocale, // default locale
  fallbackLocale: defaultLocale,
  messages: {
    // [defaultLocale]: defaultMessages,
    'en-US': enUS,
    'zh-CN': zhCN,
    'zh-TW': zhTW
  }
});

// setLocale(defaultLocale);

export default i18n;
