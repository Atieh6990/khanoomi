<template>
  <div class="pageParent">
    <category :yPage="yPage" ref="category" :activeRout="activeRout" :catData="catData"
              v-if="catData.length>0"></category>
    <slideShow :yPage="yPage" ref="slideShow" :activeRout="activeRout" :slideShowData="slideShowData"
               v-if="slideShowData.length>0"></slideShow>
    <videos :yPage="yPage" ref="videos" :activeRout="activeRout"></videos>
  </div>
</template>

<script>
import category from '@/components/Home/category'
import slideShow from '@/components/Home/slideShow'
import videos from '@/components/Home/videos'
import catApi from '@/api/catApi'
import productApi from '@/api/product'

export default {
  name: 'Home',
  components: {
    category,
    slideShow,
    videos
  },
  data () {
    return {
      yPage: 0, // 0->cat , 1->slideShow , 2->videos
      activeRout: true,
      catData: '',
      slideShowData: ''
    }
  },
  created () {
    this.emitter.emit('show_header')
    this.emitter.emit('get_profile')
    catApi.category().then(data => {
      if (data.success) {
        this.catData = data.data
      }
    })

    productApi.product().then(data => {
      if (data.success) {
        this.slideShowData = data.data
      }
    })
  },
  methods: {
    right () {
      switch (this.yPage) {
        case 0:
          this.$refs.category.right()
          break
        case 1:
          this.$refs.slideShow.right()
          break
        case 2:
          this.$refs.videos.right()
          break
      }
    },
    left () {
      switch (this.yPage) {
        case 0:
          this.$refs.category.left()
          break
        case 1:
          this.$refs.slideShow.left()
          break
        case 2:
          this.$refs.videos.left()
          break
      }
    },
    up () {
      // console.log(this.yPage)
      if (this.yPage === 0) {
        return false
      } else {
        switch (this.yPage) {
          case 1:
            this.yPage = 0
            break
          case 2:
            this.yPage = 1
            break
        }
        return true
      }
    },
    down () {
      // console.log(this.activeRout)
      switch (this.yPage) {
        case 0:
          this.yPage = 1
          break
        case 1:
          this.yPage = 2
          break
      }
    },
    enter () {
      switch (this.yPage) {
        case 0:
          this.$refs.category.enter()
          break
        case 1: {
          const param = this.$refs.slideShow.enter()
          // console.log('param', param)
          this.$router.push({
            name: 'detail',
            params: { data: JSON.stringify(param) }
          })
        }
          break
        case 2:
          this.$refs.videos.enter()
          break
      }
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
