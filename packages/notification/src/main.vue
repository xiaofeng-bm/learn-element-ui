<template>
  <transition name="el-notification-fade">
    <div 
      :class="['el-notification', horizontalClass]" 
      :style="positionStyle"
      v-show="visible"
    >
      <i class="el-notification__icon" :class="[ typeClass ]"></i>
      <div class="el-notification__group">
        <h2 class="el-notification__title" v-text="title"></h2>
        <div class="el-notification__content" v-show="message">
          <slot>
            <p>{{ message }}</p>
          </slot>
        </div>
        <!-- 关闭按钮 -->
        <div class="el-notification__closeBtn el-icon-close" v-if="showClose" @click.stop="close"></div>
      </div>
    </div>
  </transition>
</template>

<script>
let typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};
export default {
  data() {
    return {
      visible: false,
      title: "",
      message: "",
      type: "",
      showClose: true,
      onClose: null,
      position: "top-right",
      verticalOffset: 0
    };
  },
  computed: {
    typeClass() {
      return this.type && typeMap[this.type] ? `el-icon-${ typeMap[this.type] }` : '';
    },
    horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left';
    },
    positionStyle() {
      return {
        top: `${ this.verticalOffset }px`
      };
    }
  },
  methods: {
    close() {
      this.onClose();
    }
  },
  mounted() {

  }
};
</script>
