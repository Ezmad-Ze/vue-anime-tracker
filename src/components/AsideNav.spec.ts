import { describe, it, expect, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import AsideNav from './AsideNav.vue'

vi.mock('vue-router')

describe('aside-nav.vue', () => {
  it('should render hamburger icon', async () => {
    const wrapper = mount(AsideNav, {
      props: {
        aside: true
      }
    })

    const icon = wrapper.find('#icon-ham')
    expect(icon.exists()).toBe(false)
  })

  it('should nav elements', () => {
    const wrapper = mount(AsideNav)
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('should render div elements', () => {
    const wrapper = mount(AsideNav)

    expect(wrapper.find('#aside-div').exists()).toBe(true)
  })

  it('should render route paths', () => {
    const wrapper = shallowMount(AsideNav)

    const links = wrapper.findAllComponents({ name: 'RouterLink' })

    expect(links.length).toBe(3)
    expect(links.at(0)?.props().to).toBe('/')
    expect(links.at(1)?.props().to).toBe('/anime/favorite')
    expect(links.at(2)?.props().to).toBe('/anime/tbw')
  })

  it('should toggle theme', async () => {
    const wrapper = mount(AsideNav)

    expect(wrapper.find('#icon-moon').isVisible()).toBe(true)

    await wrapper.find('#icon-moon').trigger('click')

    expect(wrapper.find('#icon-sun').isVisible()).toBe(true)

    await wrapper.find('#icon-sun').trigger('click')

    expect(wrapper.find('#icon-moon').isVisible()).toBe(true)
  })

  it('should be hidden when clicked', async () => {
    const wrapper = mount(AsideNav)

    expect(wrapper.find('#aside-div').isVisible()).toBe(true)

    wrapper.find('#close-icon').trigger('click')

    // Wait for the next tick of the Vue.js event loop to allow any state changes to take effect
    await wrapper.vm.$nextTick()

    expect(wrapper.find('#icon-ham').isVisible()).toBe(true)
  })
})
