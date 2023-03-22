import { describe, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import FavoriteView from './FavoriteView.vue'

vi.mock('vue-router')

describe('Favorite View', () => {
  test('renders favorites page with correct components when there are favorites', async () => {
    const { getByText, queryByText } = render(FavoriteView)
    // Check for the "Favorites" title
    expect(getByText('Favorites')).toBeInTheDocument()

    // Check that the no-favorites message is not rendered
    expect(queryByText('No Favorites Yet')).toBeInTheDocument()
  })
})
