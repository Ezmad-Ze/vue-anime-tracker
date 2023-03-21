import { describe, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import TbwView from './TbwView.vue'

vi.mock('vue-router')

describe('Tbw View', () => {
  test('renders favorites page with correct components when there are favorites', async () => {
    const { getByText, queryByText } = render(TbwView)
    // Check for the "Tbw" title
    expect(getByText('To be Watched')).toBeInTheDocument()

    // Check that the no-Tbw message is not rendered
    expect(queryByText('No TBW Yett')).not.toBeInTheDocument()
  })
})
