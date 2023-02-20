import { mount } from '@vue/test-utils'
import category from '@/components/Home/category'

describe('category.vue', () => {
  it('renders category completely', () => {
    const wrapper = mount(category)
    const menuLen = wrapper.vm.$data.cats.length
    expect(wrapper.findAll('.itemContent').length).toEqual(menuLen) // tedade item ha ba oonaee ke keshide to safe barabare?
    // expect(wrapper.text()).toContain('خانه')// item haye menu ro keshide???
  })
})
