import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import SearchInput from '@/components/SearchInput.vue'

describe('Search Input', () => {
  it('Should render correctly', () => {
    render(SearchInput)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })
  
  it('should get value from input box', async () => {
    const { emitted } = render(SearchInput)
    const $inputbox = screen.getByRole('searchbox')

    expect($inputbox).toBeInTheDocument()
    await fireEvent.update($inputbox, 'Hello')

    //@ts-ignore
    expect(emitted('update:modelValue')[0][0]).toEqual('Hello')
  })
})
