import { mount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'
import SharesCreateForm from '@/components/SharesCreateForm'

describe('Testing AllSharesView.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should show page title', () => {
    // when
    fetch.mockResponseOnce(JSON.stringify(emptyResponse))

    const wrapper = mount(AllSharesView)
    // then
    expect(wrapper.text()).toMatch('All Shares')
  })

  it('should have shares create form component', () => {
    // when
    const wrapper = mount(AllSharesView)

    // then
    const createForm = wrapper.findComponent(SharesCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })

  it('counts the number of cards that have been added', () => {
    const wrapper = mount(AllSharesView, {
      props: {
        shares: [{
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
        }]
      }
    })
    expect(wrapper.findAll('.card').length).toBe(2)
  })

  it('returns the correct name of the share', () => {
    const wrapper = mount(AllSharesView, {
      props: {
        shares: {
          wkn: '123',
          name: 'Apple',
          stocksPrice: 100,
          buy: false
        }
      }
    })
    const shareName = wrapper.findAll('.name')
    expect(shareName.text()).toBe('Apple')
  })
})
