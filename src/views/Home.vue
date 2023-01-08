<template>
  <div class="pageParent">
    <category :yPage="yPage" ref="category" :activeRout="activeRout"></category>
  </div>
</template>

<script>
import category from '@/components/Home/category'

export default {
  name: 'Home',
  components: { category },
  data () {
    return {
      yPage: 0, // 0->cat
      activeRout: false
    }
  },
  methods: {
    right () {
      switch (this.yPage) {
        case 0:
          this.$refs.category.right()
          break
      }
    },
    left () {
      switch (this.yPage) {
        case 0:
          this.$refs.category.left()
          break
      }
    },
    up () {
      if (this.yPage === 0) {
        return false
      } else {
        switch (this.yPage) {
          case 0:

            break
        }
      }
    },
    down () {
    },
    enter () {
    },
    back () {
    }
  }
}
</script>

<style scoped>
.pageParent {
  position: absolute;
  width: 1920px;
  left: 0px;
  top: 134px;
  height: 940px;
  /*border: 1px solid red;*/
}
</style>
