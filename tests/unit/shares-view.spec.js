import { shallowMount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'

describe('AllSharesView tests', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should render the title passed to it', () => {
    fetch.mockResponseOnce(JSON.stringify([{
      wkn: '123',
      name: 'Apple',
      stocksPrice: 100,
      buy: false
    },
    {
      wkn: '456',
      name: 'Biontech',
      stocksPrice: 120,
      buy: true
    }]))

    const title = 'All Shares'
    const wrapper = shallowMount(AllSharesView, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
