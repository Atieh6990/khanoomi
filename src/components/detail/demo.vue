<template>
  <div class="demoParent">

    <div v-if="showPoster" class="onPoster">

      <img src="../../assets/images/detail/posterTest.svg" class="playBox">
      <div class="playBlurBack">
        <div class="playBack">
          <img src="../../assets/images/detail/playOnPoster.svg">
        </div>
      </div>

    </div>

    <div class="button play" :class="[(btnIndex==0 && activeRout && yPage ==1) ? 'btnHover':'']">
      <img src="../../assets/images/detail/playIcon.svg" class="btnIcon">
      <span class="btnTxt">نمایش</span>
    </div>

    <div class="button fullScreen" :class="[(btnIndex==1 && activeRout && yPage ==1) ? 'btnHover':'']">
      <!--      <img :src="fullScreenIcon" class="btnIcon">-->
      <span class="btnTxt">بزرگ نمایی</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'demo',
  props: ['yPage', 'activeRout'],
  data () {
    return {
      showPoster: true,
      posterUrl: '',
      btnIndex: 0
    }
  },
  methods: {
    right () {
      if (this.btnIndex === 0) {
        this.btnIndex = 1
        return true
      }
      return false
    },
    left () {
      if (this.btnIndex === 1) {
        this.btnIndex = 0
        return true
      }
      return false
    },
    enter () {
      if (this.btnIndex === 0) {
        console.log('play')
      }
      if (this.btnIndex === 1) {
        console.log('fullscreen')
      }
    }
  }
}
</script>

<style scoped>

.demoParent {
  position: absolute;
  top: 75px;
  left: 150px;
  width: 911px;
  height: 650px;
  /*border: 1px solid blue;*/
}

.playBox {
  position: absolute;
  height: 542px;
  width: 911px;
  left: 2px;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 18px;
}

.btnHover {
  border: 3px solid #EEF3FF !important;
}

.button {
  width: 435px;
  height: 75px;
  color: #FFFFFF;
  top: 572px;
  border-radius: 16px;
  position: absolute;
  font-weight: 400;
  font-size: 24px;
  direction: rtl;
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  border: 3px solid transparent;
}

.play {
  left: 2px;
  background: #F44932;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}

.fullScreen {
  right: 2px;
  background: #5B79AC;
  border: 1px solid #273D5B;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
}

.btnIcon {
  /*float: right;*/
  /*margin-top: 15px;*/
  /*padding-left: 10px;*/
  /*margin-right: 30%;*/
}

.btnTxt {
  /*float: left;*/
  margin-right: 15px;
}

.playBlurBack {
  box-sizing: border-box;
  position: absolute;
  width: 142px;
  height: 143px;
  left: 385px;
  top: 194px;
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(2px);
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 20;
}

.playBack {
  position: absolute;
  height: 95px;
  width: 95px;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
