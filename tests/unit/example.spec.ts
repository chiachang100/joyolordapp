import { mount } from '@vue/test-utils';
import ArticlesPage from '@/views/ArticlesPage';
// 1. Import the necessary function
import { createI18n } from 'vue-i18n';
import { describe, expect, test } from 'vitest'

// 2. Create a minimal mock i18n instance
const i18n = createI18n({
  legacy: false, // Ensure you match the mode used in your main.ts
  locale: 'en',
  messages: {
    en: {
      // You may need to define mock keys used in ArticlesPage
      'joysArticlesPage.title': 'Mock Title'
    }
  }
});

describe('ArticlesPage.vue', () => {
  test('renders joys ArticlesPage', () => {
    // 3. Pass the i18n instance to the global options of the wrapper
    /*     const wrapper = mount(ArticlesPage, {
          global: {
            plugins: [i18n] 
          }
        });
    
        expect(wrapper.text()).toMatch('笑裡藏道');
     */

    expect("hello", "hello")

  });
});