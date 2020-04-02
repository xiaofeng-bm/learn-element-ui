export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    }
  },

  render(h) {
    return h(this.tag, {
      class: [
        'el-col',
        `el-col-${this.span}`
      ]
    }, this.$slots.default)
  }
}