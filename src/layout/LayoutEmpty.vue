<template>
  <div class="relative h-[100%] w-[100%]">
    <router-view>
      <template #default="{ Component }">
        <keep-alive :include="keepList">
          <component :is="Component" />
        </keep-alive>
      </template>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
const keepList = ref([])
</script>

<style lang="scss" scoped>
</style>
