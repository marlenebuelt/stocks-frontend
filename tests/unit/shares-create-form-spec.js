import { mount } from '@vue/test-utils'
import SharesCreateForm from '@/components/SharesCreateForm'
import AllSharesView from '@/views/AllSharesView'

describe('Testing SharesCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(SharesCreateForm)

    // then
    expect(wrapper.find('shares-create-button-close').classes()).toContain('collapsed')
  })

  it('tests validity form'), () => {
    // when
    const wrapper = mount(AllSharesView, {
      data: {
        share: {
          id: 1,
          wkn: '',
          name: 'Biontech',
          stocksPrice: 100,
          buy: true
        }
      }
    })
        //then
        expect(wrapper.find().classes()).toContain('collapsed')
  }
})
