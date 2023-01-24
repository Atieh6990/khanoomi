<template>
  <div class="infoParent">
    <div class="title">آرایشگری</div>
    <div class="shortDes">همه چیز درباره بوتاکس</div>
    <div class="category">
      <img src="../../assets/images/header/cat.svg">
      <span style="padding-right: 10px">دسته بندی : <span  class="catTitle">آرایشگری</span></span>
    </div>
    <div class="duration">
      <div class="durationTitle">
        <img src="../../assets/images/detail/whiteTimer.svg">
        <span style="padding-right: 10px">مدت زمان :</span>
      </div>
      <div style="direction: ltr" class="durationTime">35 : 15 :59</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoInfo'
}
</script>

<style scoped>
.infoParent {
  position: absolute;
  width: 729px;
  height: 320px;
  top: 47px;
  left: 1020px;
  /*border: 1px solid red;*/
}

.title {
  position: absolute;
  width: 100%;
  height: 78px;
  top: 0px;
  right: 0px;
  /*border: 1px solid red;*/
  color: #FC9A8D;
  font-size: 45px;
  font-weight: 300;
  line-height: 80px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
}

.shortDes {
  position: absolute;
  width: 100%;
  height: 44px;
  top: 85px;
  right: 0px;
  /*border: 1px solid red;*/
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
}

.category {
  position: absolute;
  width: 100%;
  height: 40px;
  top: 140px;
  right: 0px;
  /*border: 1px solid red;*/
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
  display: flex;
  flex-direction: row;
  /*justify-content: center;*/
  align-items: center;
  align-content: center;
}
.duration{
  position: absolute;
  height: 52px;
  width: 312px;
  border-radius: 29px;
  background: #FFFFFF2B;
  top: 200px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  color: #FFFFFF;
  direction: rtl;
}
.durationTitle{
  display: flex;
  flex-direction: row;
  /*justify-content: center;*/
  align-items: center;
  align-content: center;
  direction: rtl;
}
</style>
