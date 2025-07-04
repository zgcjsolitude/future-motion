<template>
  <div class="about">
    <div class="banner">
      <div class="text-36px font-bold mt-100px mb-50px bootom-line">
        关 于 我 们
      </div>
      <div class="text-14ppx">
        以科技为翼，借无人机、边缘计算、人工智能与侦听设备，开启智能新视界
      </div>
    </div>

    <div class="bg-[#f4f4f9] py-60px">
      <div class="w-[var(--sys-body-width)] m-auto flex justify-center">
        <div class="w-400px">
          <div class="text-30px font-bold mt-30px mb-30px">
            关 于 我 们
          </div>
          <div class="text-14ppx">
            以科技为翼，借无人机、边缘计算、人工智能与侦听设备，开启智能新视界
          </div>
          <div class="mt-30px">
            <el-button size="large" type="primary">&nbsp;&nbsp;更 多&nbsp;&nbsp;</el-button>
          </div>
        </div>
        <div class="w-600px overflow-auto pl-30px">
          <img class="w-full" src="/imgs/product/product-view-scene-1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.banner {
  height: 360px;
  background: url(/imgs/home/banner1.png);
  background-size: cover;
  text-align: center;
  overflow: auto;
}

.bootom-line {
  display: inline-block;
  position: relative;

  &::before {
    content: '';
    width: 80px;
    height: 3px;
    border-radius: 4px;
    background-color: var(--el-color-primary);
    position: absolute;
    left: 50px;
    bottom: -20px;
  }
}
</style>
