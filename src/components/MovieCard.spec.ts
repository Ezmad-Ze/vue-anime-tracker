import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import MovieCard from './MovieCard.vue'

describe('aside-nav.vue', () => {
  it('should render items', async () => {
    render(MovieCard)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('title')).toBeInTheDocument()
    expect(screen.getByRole('favButton')).toBeInTheDocument()
    expect(screen.getByRole('tbrFavorite')).toBeInTheDocument()
    expect(screen.getByTestId('notFavorite')).toBeInTheDocument()
  })
  it('should toggle favorite', async () => {
    render(MovieCard)
    expect(screen.getByRole('favButton')).toBeInTheDocument()
    expect(screen.getByTestId('notFavorite')).toBeInTheDocument()
    await fireEvent.click(screen.getByTestId('notFavorite'))
    expect(screen.getByRole('favButton')).toBeInTheDocument()
  })
  it('should toggle TBR', async () => {
    render(MovieCard)
    expect(screen.getByRole('tbrFavorite')).toBeInTheDocument()
    expect(screen.getByText('Add to TBR')).toBeInTheDocument()
    await fireEvent.click(screen.getByRole('tbrFavorite'))

    waitFor(() => {
      expect(screen.getByText('Added to TBR')).toBeInTheDocument()
    })
  })
})
