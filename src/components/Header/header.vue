<template>
  <div class="headerParent" v-if="show">
    <headerMenu ref="headerMenu" :active="active"></headerMenu>
    <headerProfile :profileData="profileData"></headerProfile>
  </div>
</template>
<script>
import headerMenu from './headerMenu'
import headerProfile from '@/components/Header/headerProfile'
import api from '@/api/profile'

export default {
  name: 'header',
  components: {
    headerMenu,
    headerProfile
  },
  data () {
    return {
      active: false,
      show: true,
      profileData: ''
    }
  },
  created () {
  },
  mounted () {
    this.emitter.on('hide_header', () => { // namayeshe NAdadane header
      this.show = false
    })
    this.emitter.on('show_header', () => { // namayesh dadane header
      this.show = true
    })
    this.emitter.on('active_header', () => { // hover begire
      this.active = true
    })
    this.emitter.on('deactive_header', () => { // hover nagire
      this.active = false
    })
    this.emitter.on('get_profile', () => { // hover nagire
      api.profile().then(data => {
        if (data.success) {
          this.profileData = data.data
        }
      })
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
