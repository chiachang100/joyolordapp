import { mount } from '@vue/test-utils'
import JoysPage from '@/views/JoysPage.vue'
import { describe, expect, test } from 'vitest'

describe('JoysPage.vue', () => {
  test('renders joys JoysPage', () => {
    const wrapper = mount(JoysPage)
    expect(wrapper.text()).toMatch('笑裡藏道')
  })
})
