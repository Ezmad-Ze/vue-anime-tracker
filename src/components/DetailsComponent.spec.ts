import { describe, expect, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import DetailsComponent from './DetailsComponent.vue'

vi.mock('vue-router')

describe('HorizontalCard', () => {
  test('renders every component', () => {
    render(DetailsComponent)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('favButton')).toBeInTheDocument()
    expect(screen.getByRole('bookmarkButton')).toBeInTheDocument()
    expect(screen.findByRole('synopsis')).toBeInTheDocument()
  })
})
