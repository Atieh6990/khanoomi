export default {
  methods: {
    showErrors (datas) {
      const errorAjax = []
      for (const value of Object.values(datas)) {
        errorAjax.push(value)
      }
      return errorAjax
    }
  }
}
