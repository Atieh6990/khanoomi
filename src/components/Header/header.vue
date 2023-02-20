<template>
  <div class="headerParent" v-if="show">
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
      active: true,
      show: true
    }
  },
  mounted () {
    this.emitter.on('hide_header', () => {
      this.show = false
      this.active = false
    })
    this.emitter.on('show_header', () => {
      this.show = true
      this.active = true
    })
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
