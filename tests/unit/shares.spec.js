import { mount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'
import SharesCreateForm from '@/components/SharesCreateForm'

describe('Testing AllSharesView.vue', () => {
  it('should show page title', () => {
    // when
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
})
