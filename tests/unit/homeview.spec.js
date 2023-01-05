import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'
import HomeView from '@/views/HomeView'
import HelloWorld from '@/components/HelloWorld'

describe('tests functions of the homeview-page', () => {
  it('tests navbar is visible when the landing page is launched', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.findComponent(Navbar)).toBeTruthy()
  })
})
