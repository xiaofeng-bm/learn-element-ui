<template>
  <button class="el-button">
    <!-- 通过slot承接父组件内容 -->
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
  export default {
    // 注意：这个name不能少，在src/index.js注册为全局组件时要用到，
    name: 'ElButton'
  };
</script>
