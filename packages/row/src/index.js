export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h) {
    return h(this.tag, {
      class: [
        'el-row',
        this.type ==='flex'? `el-row--${this.type}` : ''
      ]
    }, this.$slots.default)
  }
}