import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeViewVue from './HomeView.vue'

describe('HomeView test', () => {
  it('should render', () => {
    const wrapper = mount(HomeViewVue)
  })
})
