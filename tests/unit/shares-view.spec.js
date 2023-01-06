import { mount, shallowMount } from '@vue/test-utils'
import AllSharesView from '@/views/AllSharesView'

import SharesUpdateForm from '@/components/SharesUpdateForm'

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
  it('should find update component', () => {
    const wrapper = mount(AllSharesView)
    expect(wrapper.findComponent(SharesUpdateForm)).toBeTruthy()
  })
})
