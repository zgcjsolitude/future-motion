<template>
  <div class="support">
    <div class="banner">
      <div class="text-36px font-bold mt-100px mb-50px bootom-line">
        支 持 与 服 务
      </div>
      <div class="text-14ppx">
        以科技为翼，借无人机、边缘计算、人工智能与侦听设备，开启智能新视界
      </div>
    </div>
    
    <div class="MenuBase-container pb-50px">
      <div class="text-center color-[#4a4c5e] mt-80px mb-50px">
        <h2 class="text-32px my-10px">耦合发展&nbsp;&nbsp;&nbsp;&nbsp;共同飞跃</h2>
        <p class="mt-20px">诚邀有行业优势、区域优势及交付优势的合作伙伴，整合资源，实现产品耦合、商机互通、市场同力的生态发展模式</p>
      </div>

      <div class="text-center mb-60px">
        <el-button type="primary" size="large">立即成为合作伙伴</el-button>
      </div>

      <div class="flex flex-wrap justify-center">
        <div
          v-for="(item, i) in partner"
          :key="i"
          class="w-415px h-450px mb-30px px-32px py-50px color-[#4a4c5e] mx-16px"
          :style="{ background: `url(${item.imgUrl})` }"
        >
          <div class="text-24px mb-20px">{{ item.title }}</div>
          <div class="h-70px">
            <div v-for="(txt, j) in item.desc" :key="j" class="mb-6px">{{ txt }}</div>
          </div>
          <div>
            <el-button type="primary" size="large">立即加入</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const partner = [
  {
    title: '分销型合作伙伴',
    desc: ['代理硬件设备、软件授权的批发与零售。'],
    imgUrl: '/imgs/home/partner-1.png',
  },
  {
    title: '解决方案合作伙伴',
    desc: ['为智慧城市、企业数字化提供定制化方案 。'],
    imgUrl: '/imgs/home/partner-2.png',
  },
  {
    title: '产品交付合作伙伴',
    desc: ['硬件安装调试、软件部署、系统运维 '],
    imgUrl: '/imgs/home/partner-3.png',
  },
]
</script>

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
    left: 72px;
    bottom: -20px;
  }
}
</style>
