<template>
  <div class="catParent">
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div class="itemContent" v-for="(item) in cats" :key="item.id"
           :class="[(select == item.id && yPage==0 && activeRout) ? 'hover':'']">
        {{ item.name }}
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  name: 'category',
  props: ['yPage', 'activeRout'],
  components: {
    Flickity
  },
  data () {
    return {
      select: 0,
      indexToStartScroll: 7,
      count: 50,
      flickityOptions: {
        pageDots: false,
        accessibility: false,
        contain: true,
        draggable: false,
        freeScroll: false,
        adaptiveHeight: true,
        prevNextButtons: false,
        cellAlign: 'right',
        rightToLeft: true
      },
      cats: [
        {
          id: 0,
          name: 'آشپزی'
        },
        {
          id: 1,
          name: 'آرایشگری'
        },
        {
          id: 2,
          name: 'خودرو'
        },
        {
          id: 3,
          name: 'مقاله'
        }
      ]
    }
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    },
    left () {
      if (this.select < this.cats.length - 1) {
        this.select++
        if (this.select > this.indexToStartScroll) {
          this.next()
        }
        return true
      } else {
        return false
      }
    },
    right () {
      if (this.select > 0) {
        this.previous()
        this.select--
        return true
      } else {
        return false
      }
    },
    up () {
      return false
    }
  }
}
</script>

<style scoped>
.catParent {
  position: absolute;
  top: 0px;
  left: 195px;
  width: 1550px;
  height: 140px;
  /*border: 1px solid red;*/
  direction: rtl;
}

.flickity {
  top: 25%;
  position: relative;
  height: 100%;
  direction: rtl;
}

.itemContent {
  background: rgba(31, 32, 48, 0.45);
  border: 2px solid #383131;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 59px;
  padding: 5px 50px 5px 50px;
  color: #FFFFFF;
  margin-left: 26px;
  font-size: 18px;
  float: right;
  position: relative;
  height: 50px;
  min-width: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.hover {
  background: linear-gradient(0deg, #F44932, #F44932),
  linear-gradient(0deg, #FF2E00, #FF2E00);
  border: 2px solid #FF2E00;
}
</style>
