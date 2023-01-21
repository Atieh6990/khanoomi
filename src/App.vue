<template>
  <div id="app">
    <Header ref="Header"></Header>
    <transition name="fade" mode="out-in">
      <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.fullPath" ref="routeView"></component>
      </router-view>
      <!--      <router-view :key="$route.fullPath" ref="routeView"></router-view>-->
    </transition>
  </div>
</template>
<script>
import Header from './components/Header/header'
import router from './router'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next()
  } else {
    next() // make sure to always call next()!
  }
})
export default {
  components: {
    Header
  },
  watch: {
    '$route' (to, from) {
      console.log('to =>   ' + (to.name) + '   from =>   ' + (from.name))
    }
  },
  data () {
    return {
      loading: false,
      network: false
    }
  },
  created () {
    window.addEventListener('keydown', this.keyEvent)
  },
  methods: {
    keyEvent (event) {
      const keyCode = event.keyCode
      switch (keyCode) {
        case 38: // UP
          if (this.loading === false && this.network === false) {
            if (!this.$refs.routeView.up()) {
              this.$refs.routeView.activeRout = false
              this.$refs.Header.active = true
            }
          }
          break
        case 39:// Right
          if (this.loading === false && this.network === false) {
            if (this.$refs.Header.active) {
              this.$refs.Header.right()
            } else {
              this.$refs.routeView.right()
            }
          }
          break
        case 37:// Left
          if (this.loading === false && this.network === false) {
            if (this.$refs.Header.active) {
              this.$refs.Header.left()
            } else {
              this.$refs.routeView.left()
            }
          }
          break
        case 40:// Down
          if (this.loading === false && this.network === false) {
            console.log(this.$refs.Header.down())
            if (this.$refs.Header.active) {
              this.$refs.Header.active = false
              this.$refs.routeView.activeRout = true
            } else {
              this.$refs.routeView.down()
            }
          }
          break
        case 13:// Enter
          if (this.loading === false && this.network === false) {
            if (this.$refs.Header.active) {
              this.$refs.Header.enter()
            } else {
              this.$refs.routeView.enter()
            }
          }
          break
        case 10009:// Return
          this.$refs.routeview.back()
          break
        case 8:// BackspaceKeyboard
          break
        case 187:
          break
        case 10182:// EXIT
          break
        case 46:
          break
        case 65376:// keyboarddone
          if (this.loading === false && this.network === false) {

          }
          break
        case 65385:// keyboardcancel
          if (this.loading === false && this.network === false) {

          }
          break
        case 48:// key0
        case 49:// key1
        case 50:// key2
        case 51:// key3
        case 52:// key4
        case 53:// key5
        case 54:// key6
        case 55:// key7
        case 56:// key8
        case 57:// key9
          break
        case 10190:// keyPRE-CH
          break
        case 412:// PREVIOUS
          break
        case 417:// NEXT
          break
        case 19:// PAUSE
          break
        case 415:// PLAY
          break
        case 413:// STOP
          break
      }
    }
  }
}
</script>
<style>
#app {
  top: 0;
  left: 0;
  position: fixed;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('./assets/images/back.jpg');
  /*background: radial-gradient(47.27% 47.27% at 50.57% 52.73%, #0E1234 0%, rgba(10, 37, 62, 0.79) 100%) !* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected *!;*/

}

@font-face {
  font-family: 'BYekan';
  font-weight: normal;
  font-style: normal;
  src: url('assets/font/BYekan.ttf');
}

body, input, select, label, div, span, p {
  font-family: "BYekan" !important;
}

</style>
