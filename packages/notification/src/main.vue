<template>

  <transition name="el-notification-fade">
    <div 
      :class="['el-notification', horizontalClass]"
      :style="positionStyle"
      v-show="visible"
    >
      <div class="el-notification__group">
        <h2 class="el-notification__title" v-text="title"></h2>
        <div class="el-notification__content" v-show="message">
          <slot>
            <p>{{ message }}</p>
          </slot>
        </div>

        <div
          class="el-notification__closeBtn el-icon-close"
          v-if="showClose"
          @click.stop="close"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  data() {
    return {
      visible: false,
      showClose: true,
      closed: false,
      title: '',
      message: '',
      position: 'top-right',
      verticalOffset: 0
    }
  },
  computed: {
    horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left';
    },
    // 在computed添加positionStyle以及verticalProperty
    verticalProperty() {
      return /^top-/.test(this.position) ? 'top' : 'bottom';
    },
    positionStyle() {
      // 值源码中是通过verticalOffset设置，通过main.js计算出偏移位置，这里为了演示方便，先默认写死0px
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`
      }
    }
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
        
      }
    }
  },

  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
  }
};
</script>
