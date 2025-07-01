<template>
  <div class="inline-block">
    <img src="/imgs/logo.png" alt="" />
    <img v-if="showLogoText" class="pb-2px pl-10px" src="/imgs/logo-text.png" alt="" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  showLogoText?: boolean
}
withDefaults(defineProps<Props>(), {
  showLogoText: false,
})
</script>

<style lang="scss" scoped>
</style>
