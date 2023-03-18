import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import HomeViewVue from './HomeView.vue'

describe('HomeView test', () => {
  it('should render components', () => {
    render(HomeViewVue)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    waitFor(() => {
      expect(screen.getByTestId('movieCard')).toBeInTheDocument()
    })
  })
})
