import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import TbwHorizontalCard from './TbwHorizontalCard.vue'

describe('HorizontalCard', () => {
  test('renders anime card with correct props', async () => {
    const tbw = {
      mal_id: 1,
      title: 'Test Anime',
      episodes: 12,
      images: {
        jpg: {
          small_image_url: 'https://example.com/image.jpg'
        }
      },
      favorite: true
    }

    const { getByRole, getByText, getByAltText, getByTestId } = render(TbwHorizontalCard, {
      props: { tbw }
    })

    // Check for the main div and its attributes
    const card = getByRole('AnimeCard')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass(
      'cursor-pointer',
      'flex',
      'flex-row',
      'justify-between',
      'w-full',
      'mb-5',
      'p-4',
      'max-w-[900px]',
      'rounded-3xl',
      'hover:bg-opacity-40',
      'bg-blue-900',
      'bg-opacity-60'
    )

    // Check for the image and its alt text
    const image = getByAltText(tbw.title)
    expect(image).toBeInTheDocument()

    // Check for the title and number of episodes
    expect(getByText(tbw.title)).toBeInTheDocument()
    expect(getByText(`${tbw.episodes} eps`)).toBeInTheDocument()

    // Check for the favorite button and its icon
    const tbwButton = getByRole('bookmarkButton')
    expect(tbwButton).toBeInTheDocument()

    const tbwIcon = getByTestId('nottbw')
    expect(tbwIcon).toBeInTheDocument()
  })
})
