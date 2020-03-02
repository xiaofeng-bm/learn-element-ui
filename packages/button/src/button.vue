<template>
  <button 
    class="el-button"
    :class="[
      type ? 'el-button--' + type : '',
      {
        'is-disabled': buttonDisabled
      }
    ]"
    :autofocus="autofocus"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'ElButton',
    inject: {
      elForm: {
        default: ''
      }
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      autofocus: Boolean,
      disabled: Boolean
    },
    computed: {
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    }
  }
</script>
