<template>
  <div>
    <el-dialog
      v-bind="$attrs"
      :draggable="draggable"
      destroy-on-close
      :class="['global-dialog', useScrollbar && 'use-scroll-bar']"
      :style="{
        '--global-dialog-height': height,
        '--global-dialog-margin-top': marginTop,
      }"
    >
      <template v-if="$slots.header" #header>
        <slot name="header"></slot>
      </template>

      <el-scrollbar v-if="useScrollbar">
        <div class="global-dialog__body">
          <slot></slot>
        </div>
      </el-scrollbar>
      <slot v-else></slot>

      <template v-if="$slots.footer" #footer>
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'GlobalDialog',
})

defineProps({
  draggable: {
    type: Boolean,
    default: true,
  },
  // 扩展属性
  height: {
    type: String,
    default: 'auto',
  },
  marginTop: {
    type: String,
    default: '15vh',
  },
  useScrollbar: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss">
.global-dialog.el-dialog {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;

  .el-dialog__body {
    position: relative;
    padding: var(--el-dialog-padding-primary);
    overflow: auto;
    flex: 1;
  }

  &:not(.is-fullscreen) {
    max-width: 90%;
    max-height: calc(100vh - 2 * var(--global-dialog-margin-top));
    height: var(--global-dialog-height);
    margin-top: var(--global-dialog-margin-top);

    .el-dialog__body > .el-scrollbar,
    .el-dialog__body > .el-scrollbar > .el-scrollbar__wrap {
      max-height: calc(100vh - 2 * var(--global-dialog-margin-top) - 122px);
    }
  }

  &.use-scroll-bar {
    .el-dialog__body {
      padding: 0;
    }
  }
}

.global-dialog__body {
  padding: var(--el-dialog-padding-primary);
  box-sizing: border-box;
}
</style>
