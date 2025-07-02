<template>
  <div class="menu-wrap">
    <div class="menu-container flex justify-between items-center">
      <div
        v-for="menu in menuList"
        :key="menu.sign"
        :class="['menu-item', menu.sign === activeMenuSign && 'is-active']"
        @click="clickMenu(menu)"
      >
        <span>{{ menu.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['updateMenu'])

const menuList = [
  {
    title: '最新智讯',
    sign: 'news',
  },
  {
    title: '低空经济',
    sign: 'lowEconomy',
  },
  {
    title: '安防监控',
    sign: 'monitoring',
  },
  {
    title: '边缘计算',
    sign: 'edgeComputing',
  },
  {
    title: '网络安全',
    sign: 'network',
  },
  {
    title: '智能制造',
    sign: 'intelligent',
  },
]

const activeMenuSign = ref('')
const clickMenu = (menu) => {
  if (activeMenuSign.value === menu.sign) {
    activeMenuSign.value = ''
  } else {
    activeMenuSign.value = menu.sign
  }
  emits('updateMenu', activeMenuSign.value)
}
</script>

<style lang="scss" scoped>
.menu-wrap {
  height: 100px;
  margin-top: -100px;
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  border-top: 2px solid #fff;
}

.menu-container {
  width: var(--sys-top-body-width);
  height: 100%;
  margin: 0 auto;
}

.menu-item {
  color: #353c57;
  font-size: 18px;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &.is-active {
    color: #fff;
    background: linear-gradient(90deg, #2e65f8, #1ca9ff);
  }
}
</style>
