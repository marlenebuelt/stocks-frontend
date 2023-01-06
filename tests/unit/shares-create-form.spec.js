import { mount } from '@vue/test-utils'
import SharesCreateForm from '@/components/SharesCreateForm'

describe('Testing SharesCreateForm.vue', () => {
  it('should not show form by default', () => {
    const wrapper = mount(SharesCreateForm)
    expect(wrapper.text()).toMatch('Add a new Share to Your List!')})
})
