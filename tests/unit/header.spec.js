import { mount } from '@vue/test-utils'
import headerMenu from '../../src/components/Header/headerMenu'
import headerProfile from '../../src/components/Header/headerProfile'

// header keshide shode
describe('headerMenu.vue', () => {
  it('renders headerMenu completely', () => {
    const wrapper = mount(headerMenu)
    const menuLen = wrapper.vm.$data.items.length
    expect(wrapper.findAll('.menuItem').length).toEqual(menuLen) // tedade item ha ba oonaee ke keshide to safe barabare?
    expect(wrapper.text()).toContain('خانه')// item haye menu ro keshide???
  })

  it('renders headerProfile completely', () => {
    const wrapper = mount(headerProfile)
    expect(wrapper.find('.userName').text()).not.toBe('') // user name khali nabashe
  })

  it('click on menu hase returned some value', () => {
    const wrapper = mount(headerMenu)
    const menuSelect = wrapper.vm.enter()
    expect(menuSelect).toHaveProperty('id')// rooye ye item az menu click karde bashe
  })
})
