<template>
  <div class="product">
    <div class="search-input">
      <el-input
        v-model="searchValue"
        size="large"
        placeholder="请输入"
      >
        <template #append>
          搜索
        </template>
      </el-input>
    </div>

    <div class="conetnt-container">
      <div class="tab-container">
        <div
          v-for="item in tabList"
          :key="item.label"
          :class="['tab-item', item.label === tabValue && 'is-active']"
          @click="tabValue = item.label"
        >
          {{ item.label }}
        </div>
      </div>

      <div class="product-container">
        <div v-for="(item, i) in productList" :key="i" class="product-item" @click="router.push('/productview/001')">
          <div class="w-full h-260px bg-[#f6f7f9] flex justify-center items-center">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="py-10px px-30px">
            <p class="h-50px text-16px color-[#333333] line-height-7">{{ item.name }}</p>
            <p class="h-42px text-12px color-[#919191] line-height-6">{{ item.desc }}</p>
          </div>
          <div class="color-[var(--el-color-danger)] px-30px">
            <span class="text-16px mr-4px">￥</span>
            <span class="text-20px">{{ item.price }}</span>
          </div>
        </div>

        <div class="product-item is-blank"></div>
        <div class="product-item is-blank"></div>
        <div class="product-item is-blank"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()

const searchValue = ref('')

const tabValue = ref('所有宝贝')
const tabList = [
  {
    label: '所有宝贝',
  },
  {
    label: '无人机',
  },
  {
    label: '智能制造',
  },
  {
    label: '激光设备',
  },
  {
    label: '软件定制',
  },
  {
    label: '其他',
  },
]

const productList = [
  {
    imgUrl: '/imgs/product/product-01.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-02.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-01.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-01.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-03.png',
    name: 'Smart3000 4/5G人工智能盒集成 ',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-04.png',
    name: 'nvr录像机',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-01.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-01.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-03.png',
    name: 'Smart3000 4/5G人工智能盒集成 ',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-04.png',
    name: 'nvr录像机',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-01.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
  {
    imgUrl: '/imgs/product/product-01.png',
    name: 'AI边缘计算盒子多路视频算法分析校 园加油站工地社区智能安防监控',
    desc: 'Arm 8核2.4 /8GB/64GB/Arm G52 /6.0 Tops/2*网口,1*Hdmi,12V电源,音频输... ',
    price: '999',
  },
]
</script>

<style lang="scss" scoped>
.product {
  padding-bottom: 60px;
}

.search-input {
  padding: 50px 0 30px;
  display: flex;
  justify-content: center;

  :deep(.el-input) {
    --el-input-border-radius: 8px;
    --el-input-border-color: var(--el-color-danger);
    --el-input-hover-border-color: var(--el-color-danger);
    --el-input-focus-border: var(--el-color-danger);
    --el-input-focus-border-color: var(--el-color-danger);

    width: 750px;

    .el-input-group__append, .el-input-group__prepend {
      color: #fff;
      background-color: var(--el-color-danger);
      cursor: pointer;
    }
  }
}

.conetnt-container {
  width: var(--sys-top-body-width);
  margin: 0 auto;
}

.tab-container {
  height: 60px;
  display: flex;
  margin-bottom: 20px;

  .tab-item {
    color: #282828;
    font-size: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 4px;
    margin: 0 20px;
    cursor: pointer;
    position: relative;

    &:hover {
      color: var(--el-color-primary);
    }

    &.is-active {
      color: var(--el-color-primary);
      font-weight: bold;

      &::before {
        content: '';
        width: 100%;
        height: 3px;
        border-radius: 3px;
        background-color: var(--el-color-primary);
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  width: 336px;
  height: 470px;
  border: 1px solid var(--el-border-color-lighter);
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    box-shadow: var(--el-box-shadow-lighter);
  }

  &.is-blank {
    width: 336px;
    height: 1px;
    opacity: 0;
    margin-bottom: 0;
  }
}
</style>
