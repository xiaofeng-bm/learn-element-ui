<template>
  <div>
    <el-button @click="handleClick">显示</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$notify({
        title: '提示',
        message: 'hello world',
        type: 'success'
      })
    }
  }
}
</script>
