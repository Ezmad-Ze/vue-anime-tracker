import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import AsideNav from './AsideNav.vue'
import { shallowMount } from '@vue/test-utils'

vi.mock('vue-router')

describe('aside-nav.vue', () => {
  it('should render items', async () => {
    const { getByRole } = render(AsideNav, {
      props: {
        aside: true
      }
    })
    expect(screen.getByRole('nav')).toBeInTheDocument()
    expect(screen.getByTestId('darkMode')).toBeInTheDocument()
    expect(screen.getByRole('aside')).toBeInTheDocument()
    expect(screen.getByTestId('closeIcon')).toBeInTheDocument()
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
    render(AsideNav)

    expect(screen.getByTestId('darkMode')).toBeInTheDocument()

    await fireEvent.click(screen.getByTestId('darkMode'))

    expect(screen.getByTestId('lightMode')).toBeInTheDocument()

    await fireEvent.click(screen.getByTestId('lightMode'))

    expect(screen.getByTestId('darkMode')).toBeInTheDocument()
  })
  it('should toggle aside', async () => {
    render(AsideNav)

    expect(screen.getByRole('aside')).toBeInTheDocument()
    expect(screen.getByTestId('closeIcon')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('closeIcon'))

    waitFor(() => {
      expect(screen.getByTestId('hamIcon')).toBeInTheDocument()
    })
  })
})
