<template>
  <div class="headerParent">
    <headerMenu ref="headerMenu" :active="active"></headerMenu>
    <headerProfile></headerProfile>
  </div>
</template>
<script>
import headerMenu from './headerMenu'
import headerProfile from '@/components/Header/headerProfile'

export default {
  name: 'header',
  components: {
    headerMenu,
    headerProfile
  },
  data () {
    return {
      active: true
    }
  },
  methods: {
    left () {
      this.$refs.headerMenu.left()
    },
    right () {
      this.$refs.headerMenu.right()
    },
    enter () {
      return this.$refs.headerMenu.enter()
    },
    down () {
      return false
    }
  }
}
</script>
<style scoped>
.headerParent {
  position: absolute;
  width: 1920px;
  height: 134px;
  left: 0px;
  top: 0px;
  background: linear-gradient(180deg, #2B2E54 0%, #1D1D29 100%);
}
</style>
