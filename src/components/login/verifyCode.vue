<template>
  <div class="codeParent">
    <div class="codeBox">
      <div class="code" :class="[(ypos == 0 && xpos==i && activeRout ? 'hover':'')]"
           v-for="(key, i) in activationKeyFields"
           :key="i">
        <input class="codeInp" v-model="key.value" :data-length="key.length" :data-index="i" :ref="'input_'+ i"
               type="number"
               maxlength="1"
               @input="handleActivationInput($event)"
               @keydown="($event.keyCode == 40 || $event.keyCode == 38) ? ($event.preventDefault()):('')"
               @keyup="($event.keyCode == 40 || $event.keyCode == 38) ? ($event.preventDefault()):('')"
        >
      </div>
    </div>
    <div class="submitBtn" :class="[(ypos == 1 && activeRout ? 'hover':'')]">ورود</div>
  </div>

</template>

<script>
export default {
  name: 'verifyCode',
  props: ['activeRout'],
  data () {
    return {
      ypos: 0,
      xpos: 0,
      activationCode: '',
      activationKeyFields: [
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        }
      ]
    }
  },
  methods: {
    enter () {
      if (this.ypos === 0) {
        this.$refs[`input_${this.xpos}`][0].focus()
      } else {
        for (const i in this.activationKeyFields) {
          this.activationCode += this.activationKeyFields[i].value.toString()
        }
        this.$emit('login', this.activationCode)
        // console.log(this.activationCode)
      }
    },
    handleActivationInput (e) {
      const value = e.target.value
      const index = parseInt(e.target.dataset.index)
      const maxlength = e.target.dataset.length

      if (this.activationKeyFields[index].value.length > maxlength) {
        e.preventDefault()
        this.activationKeyFields[index].value = value.slice(0, 1)
        try {
          this.$refs[`input_${parseInt(index + 1)}`][0].focus()
          this.xpos++
          // this.$refs['input_' + (index + 1)].focus()
        } catch (e) {
        }
        return
      }
      // Shift focus to next input field if max length reached
      if (value.length >= maxlength) {
        // console.log(this.activationKeyFields[index + 1])
        if (typeof this.activationKeyFields[index + 1] === 'undefined') {
          e.preventDefault()
          this.$refs[`input_${parseInt(index)}`][0].blur()
          this.xpos = -1
          this.ypos = 1
          return
        }
        this.$refs[`input_${parseInt(index + 1)}`][0].focus()
        this.xpos++
        // this.$refs['input_' + (index + 1)].focus()
        e.preventDefault()
      }
    },
    right () {
      if (this.xpos < this.activationKeyFields.length - 1) {
        this.$refs[`input_${parseInt(this.xpos)}`][0].blur()
        this.xpos++
        this.activationKeyFields[this.xpos].value = ''
        this.$refs[`input_${parseInt(this.xpos)}`][0].focus()
      }
    },
    left () {
      if (this.xpos > 0) {
        this.$refs[`input_${parseInt(this.xpos)}`][0].blur()
        this.xpos--
        this.activationKeyFields[this.xpos].value = ''
        this.$refs[`input_${parseInt(this.xpos)}`][0].focus()
      }
    },
    up () {
      this.xpos = 0
      this.ypos = 0
    }
  }
}
</script>

<style scoped>
.codeParent {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
}

.codeBox {
  margin-top: 45px;
  height: 89px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.code {
  height: 89px;
  width: 144px;
  border-radius: 65px;
  border: 5px solid #FFFFFF30;
  margin-left: 22px;
}

.codeInp {
  width: 85%;
  height: 95%;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 41px;
  /*letter-spacing: 0.5em;*/
  color: #FFFFFF;
  background-color: transparent;
  border: 0px;
  /*padding: 0px !important;*/
}

.hover {
  border: 5px solid #FFFFFF
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
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
</style>
