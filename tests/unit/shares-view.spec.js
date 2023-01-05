import { mount, shallowMount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'
import SharesUpdateForm from '@/components/SharesUpdateForm'
import SharesCreateForm from '@/components/SharesCreateForm'

describe('AllSharesView tests', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should render the title passed to it', () => {
    fetch.mockResponseOnce(JSON.stringify([
      {
        id: 1,
        wkn: '1234',
        name: 'Biontech',
        stocksPrice: 100.5,
        buy: true
      },
      {
        id: 2,
        wkn: '4567',
        name: 'Astra Zeneca',
        stocksPrice: 130.5,
        buy: false
      }]))
    const title = 'This is a title!'
    const wrapper = shallowMount(AllSharesView, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
it('should show page title', () => {
  const wrapper = shallowMount(AllSharesView)
  expect(wrapper.text()).toMatch('All Shares')
})

it('should have shares card list component', () => {
  const wrapper = mount(AllSharesView)

  const form = wrapper.findComponent(SharesUpdateForm)
  expect(form.exists()).toBeTruthy()
})

it('should have shares create form component', () => {
  // when
  const wrapper = mount(AllSharesView)
  const createForm = wrapper.findComponent(SharesCreateForm)
  expect(createForm.exists()).toBeTruthy()
})

it('counts numbers of rows in Component TableCategories', () => {
  const wrapper = mount(AllSharesView, {
    propsData: {
      shares: [
        {
          id: 1,
          wkn: '1234',
          name: 'Biontech',
          stocksPrice: 100.5,
          buy: true
        },
        {
          id: 2,
          wkn: '4567',
          name: 'Astra Zeneca',
          stocksPrice: 130.5,
          buy: false
        }
      ]
    }
  })
  const cards = wrapper.findAll('.cards')
  expect(cards.length).toBe(2)
})
