<template>
  <div class="home">
    <BannerVue />

    <MenuVue @update-menu="(val) => (activeMenuSign = val)" />

    <!-- 子菜单内容区 -->
    <MenuBase v-if="activeMenuSign === 'news'" />
    <MenuNews v-else />
  </div>
</template>

<script lang="ts" setup>
import BannerVue from './components/Banner.vue'
import MenuVue from './components/Menu.vue'
import MenuBase from './components/MenuBase.vue'
import MenuNews from './components/MenuNews.vue'

const activeMenuSign = ref('')
</script>

<style lang="scss" scoped></style>
