import Navbar from '@/components/Navbar'
import HomeView from '@/views/HomeView'
import {mount} from '@vue/test-utils'

describe('tests functions of the navbar', () => {
  it('tests navbar is visible when the landing page is launched', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.findComponent(Navbar)).toBeTruthy()
  })
})
