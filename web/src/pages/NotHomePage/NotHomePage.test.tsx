import { render } from '@redwoodjs/testing/web'

import NotHomePage from './NotHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NotHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotHomePage />)
    }).not.toThrow()
  })
})
