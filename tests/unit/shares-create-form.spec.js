import { mount } from '@vue/test-utils'
import SharesCreateForm from '@/components/SharesCreateForm'

describe('Testing SharesCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(SharesCreateForm)
    // then
    expect(wrapper.text()).toMatch('Add a new Share to Your List!')
  })
})
