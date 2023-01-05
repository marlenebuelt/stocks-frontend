import { mount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'
import SharesUpdateForm from '@/components/SharesUpdateForm'
import SharesCreateForm from '@/components/SharesCreateForm'

// aus irgendeinem Grund starten diese Tests nicht. Ich lasse sie der Vollständigkeit halber hier trotzdem stehen.
describe('AllSharesView tests', () => {
  it('should show page title', () => {
    const wrapper = mount(AllSharesView)
    expect(wrapper.text()).toMatch('All Shares')
  })

  it('should have votings card list component', () => {
    const wrapper = mount(AllSharesView)

    const form = wrapper.findComponent(SharesUpdateForm)
    expect(form.exists()).toBeTruthy()
  })

  it('should have votings create form component', () => {
    // when
    const wrapper = mount(AllSharesView)
    const createForm = wrapper.findComponent(SharesCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
