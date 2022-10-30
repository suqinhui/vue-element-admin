export default {
  methods: {
    messageBox(message, type) {
      this.$message({
        message: message,
        type: type
      })
    },
    testGlobalMethod() {
      this.$message.error('测试全局混入方法')
    }
  }
}
