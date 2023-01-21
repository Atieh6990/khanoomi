import { mount } from '@vue/test-utils'
import slideShow from '../../src/components/Home/slideShow'

describe('slideShow.vue', () => {
  it('renders slideShow completely', () => {
    const wrapper = mount(slideShow)
    const menuLen = wrapper.vm.$data.items.length
    expect(wrapper.findAll('.itemContent').length).toEqual(menuLen) // tedade item ha ba oonaee ke keshide to safe barabare?
    // expect(wrapper.text()).toContain('خانه')// item haye menu ro keshide???
  })
})
