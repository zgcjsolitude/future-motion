<template>
  <div class="TopHeader">
    <div class="h-full flex items-center">
      <div class="logo-container">
        <LogoComp :show-logo-text="true" />
      </div>

      <div class="nav-container">
        <div
          v-for="item in navList"
          :key="item.path"
          :class="['nav-item', route.path.includes(item.path) && 'is-active']"
          @click="router.push(item.path)"
        >
          {{ item.title }}
        </div>
      </div>

      <div class="search-container">
        <el-input v-model="searchValue" placeholder="输入关键字">
          <template #prefix>
            <GlobalIcon icon="ep:search" />
          </template>
        </el-input>
      </div>

      <div class="ask-container">
        <p class="my-2px">售前咨询：</p>
        <p class="my-2px">400-098-0090</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoComp from '../Logo/index.vue'

const router = useRouter()
const route = useRoute()

const navList = [
  {
    title: '首页',
    path: '/home',
  },
  {
    title: '产品展示',
    path: '/product',
  },
  {
    title: '联系我们',
    path: '/contact',
  },
  {
    title: '支持与服务',
    path: '/support',
  },
  {
    title: '关于我们',
    path: '/aboutour',
  },
]

const searchValue = ref('')
</script>

<style lang="scss" scoped>
.TopHeader {
  height: var(--sys-header-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.12);

  &.shadow {
    box-shadow: var(--el-box-shadow-lighter);
  }
}

.logo-container {
  width: calc((100% - 1420px) * 0.5);
  min-width: 400px;
  padding-left: 40px;
  padding-right: 40px;
}

.nav-container {
  height: 100%;
  display: flex;

  .nav-item {
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

.search-container {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 4px 20px 0;
  margin-left: auto;

  :deep(.el-input) {
    --el-input-border-radius: 0;
    --el-input-bg-color: #f4f4f4;
    --el-input-border-color: #f4f4f4;

    font-size: 14px;

    input::placeholder {
      font-size: 12px;
    }
  }
}

.ask-container {
  height: 100%;
  background-color: var(--el-color-primary);
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
}
</style>
