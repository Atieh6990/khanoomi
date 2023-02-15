<template>
  <div class="pageParent">

    <div class="login">
      <img src="../assets/images/login/logo.svg">
      <div class="title_1">خانومی ، فروشگاه اینترنتی لوازم آرایشی بهداشتی اصل</div>
      <div class="title_2">{{ textShow[type] }}</div>
      <mobile v-if="type == 0" ref="mobile" :activeRout="activeRout" v-on:getVerifyCode="getVerifyCode"></mobile>
      <verifyCode v-if="type == 1" ref="verifyCode" :activeRout="activeRout"></verifyCode>
    </div>
    <div class="errors">{{ validationError }}</div>
  </div>
</template>

<script>

import mobile from '../components/login/mobile'
import verifyCode from '../components/login/verifyCode'
import api from '../api/auth'

export default {
  name: 'login',
  components: {
    mobile,
    verifyCode
  },
  data () {
    return {
      activeRout: true,
      type: 1,
      key: '',
      textShow: ['برای ورود شماره تلفن خود را وارد کنید', 'کد ارسال شده به تلفن همراه خود را وارد کنید'],
      validationError: ''
    }
  },
  created () {
    this.emitter.emit('hide_header')
    this.emitter.on('show_err', err => {
      this.validationError = err
    })
  },
  methods: {
    down () {
      switch (this.type) {
        case 0:
          this.$refs.mobile.down()
          break
      }
      return true
    },
    up () {
      switch (this.type) {
        case 0:
          this.$refs.mobile.up()
          break
      }
      return true
    },
    enter () {
      switch (this.type) {
        case 0:
          this.$refs.mobile.enter()
          break
        case 1:
          this.$refs.verifyCode.enter()
          break
      }
      return true
    },
    getVerifyCode (mobile) {
      api.getCode(mobile).then(data => {
        if (data.success) {
          this.key = data.data.key
          this.type = 1
        }
      })
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
  border: 1px solid red;
}

.login {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  width: 100%;
}

.title_1 {
  height: 82px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  color: #FFFFFF;
}

.title_2 {
  width: 100%;
  height: 41px;
  font-size: 24px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
}

.errors {
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 82px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  color: #F44932;
  bottom: 50px;
  border: 1px solid red;
  direction: rtl;
}
</style>
