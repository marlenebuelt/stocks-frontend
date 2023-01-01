import { mount } from '@vue/test-utils'
import SharesCreateForm from '@/components/SharesCreateForm'

describe('Testing SharesCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(SharesCreateForm)

    // then
    expect(wrapper.find('shares-create-button-close').classes()).toContain('collapsed')
  })
})
