<template>
  <div class="pt-[var(--sys-header-height)]">
    <TopHeader />

    <router-view>
      <template #default="{ Component }">
        <keep-alive :include="keepList">
          <component :is="Component" />
        </keep-alive>
      </template>
    </router-view>

    <BottomFooter />
  </div>
</template>

<script lang="ts" setup>
import TopHeader from './components/TopHeader/index.vue'
import BottomFooter from './components/BottomFooter/index.vue'

const keepList = ref([])
</script>

<style lang="scss" scoped>
</style>
