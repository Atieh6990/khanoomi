<template>
  <div class="mobileParent">
    <div class="mobileBox" :class="[(ypos == 0 && activeRout ? 'hover':'')]">
      <input class="mobileInp" v-model="phone" ref="mobile" v-if="typeInpShow == 1">
      <div class="mobileInp" v-if="typeInpShow == 0">{{ phone }}</div>
    </div>
    <div class="submitBtn" :class="[(ypos == 1 && activeRout ? 'hover':'')]">ارسال</div>
  </div>
</template>

<script>

import * as yup from 'yup'
import { useField, useForm, useIsFieldValid } from 'vee-validate'

export default {
  name: 'mobile',
  props: ['activeRout'],
  data () {
    return {
      ypos: 0,
      typeInpShow: 0
    }
  },
  created () {
  },
  watch: {
    phoneError: function () {
      this.emitter.emit('show_err', this.phoneError)
    }
  },
  setup () {
    const schema = yup.object().shape({
      phone: yup.string().length(11, 'تلفن  باید 11 رقم باشد.').matches('^(?=.*[0-9])', 'تلفن  باید فقط شامل عدد باشد').required('تلفن  الزامی است')
    })
    useForm({ validationSchema: schema })
    const {
      value: phone,
      errorMessage: phoneError
    } = useField('phone')
    const phoneIsValid = useIsFieldValid('phone')
    return {
      phone,
      phoneError,
      phoneIsValid
    }
  },

  methods: {
    down () {
      if (this.ypos < 1) {
        this.typeInpShow = 0
        this.$refs.mobile.blur()
        this.ypos++
      }
    },
    up () {
      if (this.ypos > 0) {
        this.ypos--
      }
    },
    enter () {
      console.log(this.ypos)
      if (this.ypos === 0) {
        this.typeInpShow = 1
        setTimeout(() => {
          this.$refs.mobile.focus()
        }, 100)
        // this.$refs.email.$el.focus();
      } else {
        if (this.phoneIsValid) {
          this.$emit('getVerifyCode', this.phone)
        }
      }
    }
  }
}
</script>

<style scoped>
.mobileParent {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
}

.mobileBox {
  height: 89px;
  width: 644px;
  border-radius: 65px;
  border: 5px solid #FFFFFF30;
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.mobileInp {
  width: 85%;
  height: 95%;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0.5em;
  color: #FFFFFF;
  background-color: transparent;
  border: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.submitBtn {
  height: 89px;
  width: 644px;
  left: 638px;
  top: 599px;
  border-radius: 65px;
  margin-top: 45px;
  background: linear-gradient(0deg, #D77C79, #D77C79),
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
  font-size: 30px;
  font-weight: 400;
  line-height: 51px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.hover {
  border: 5px solid #FFFFFF
}
</style>
