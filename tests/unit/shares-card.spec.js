import { mount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'

describe('Testing AllSharesView.vue', () => {
  it('should render name', () => {
    // when
    const wrapper = mount(AllSharesView, {
      data: {
        share: {
          id: 1,
          wkn: '1234',
          name: 'Biontech',
          stocksPrice: 100,
          buy: true
        }
      }
    })
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Biontech')
  })
})
