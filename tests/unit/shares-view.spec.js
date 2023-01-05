import { mount, shallowMount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'
import SharesUpdateForm from '@/components/SharesUpdateForm'
import SharesCreateForm from '@/components/SharesCreateForm'

describe('AllSharesView tests', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should render the title passed to it', () => {
    fetch.mockResponseOnce(JSON.stringify([]))
    const title = 'All Shares'
    const wrapper = shallowMount(AllSharesView, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('should return the correct header', () => {
    const wrapper = mount(SharesCreateForm, {
      propsData: {
        shares: [
          {
            id: 1,
            wkn: '1234',
            name: 'Biontech',
            stocksPrice: 100.5,
            buy: true
          }
        ]
      }
    })
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Biontech')
  })

  it('counts numbers of shares', () => {
    fetch.mockResponseOnce(JSON.stringify(AllSharesView, {
      propsData: {
        shares: [
          {
            id: 1,
            wkn: '1234',
            name: 'Biontech',
            stocksPrice: 100.5,
            buy: true
          }
        ]
      }
    }))
    const wrapper = mount(AllSharesView)
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Max Mustermann')

    const cards = wrapper.findAll('.col')
    expect(cards.length).toBe(2)
  })
})
