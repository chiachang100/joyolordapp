import { mount } from '@vue/test-utils'
import ArticlesPage from '@/views/ArticlesPage.vue'
import { describe, expect, test } from 'vitest'

describe('ArticlesPage.vue', () => {
  test('renders joys ArticlesPage', () => {
    const wrapper = mount(ArticlesPage)
    expect(wrapper.text()).toMatch('笑裡藏道')
  })
})
