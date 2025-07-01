<template>
  <div class="banner">
    <el-carousel height="560px" direction="vertical">
      <el-carousel-item>
        <img src="/imgs/home/banner1.png" alt="">

        <div class="banner-wrap">
          <div class="banner-content-full color-[#353c57]">
            <div class="text-44px font-bold color-[var(--el-color-primary)]">积木智集</div>
            <p class="text-28px my-10px mt-50px">智能革新、诚信高效、共赢护航</p>
            <p class="text-28px my-10px">驱动未来、洞察先机、无限可能</p>
            <p class="mt-20px">以科技为翼，借无人机、边缘计算、人工智能与侦听设备，开启智能新视界</p>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="/imgs/home/banner2.png" alt="">

        <div class="banner-wrap">
          <div class="banner-content-body">
            <div class="text-30px font-bold color-[#1a1818]">远距离激光拾音</div>
            <p class="text-20px my-10px mt-15px color-[#454959]">采用最新一代的激光拾音技术，可以有效采集声源目标周边低声阻抗物品的</p>
            <p class="text-20px my-10px color-[#454959]">音频信息。适用于军队、公安、检察等机构的信息收集工作。</p>
            <div class="flex w-600px">
              <div class="flex-1">
                <div class="banner-li-spot">拾音距离远</div>
                <div class="banner-li-spot">穿透力强，适用范围广</div>
                <div class="banner-li-spot">操作简单</div>
              </div>

              <div class="flex-1">
                <div class="banner-li-spot">高稳定抗干扰</div>
                <div class="banner-li-spot">轻巧便携</div>
              </div>
            </div>
            <div class="mt-30px">
              <el-button size="large" type="primary" @click="router.push('/productview/001')">立即查看</el-button>
              <el-button size="large">购买咨询</el-button>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="/imgs/home/banner3.png" alt="">

        <div class="banner-wrap">
          <div class="banner-content-full color-[#353c57]">
            <div class="text-30px font-bold color-[#1a1818]">Smart3000 4/5G人工智能盒集成</div>
            <div class="mt-15px">
              <div class="banner-li-spot size-px16">接受多个普通相机</div>
              <div class="banner-li-spot size-px16">由强大的“智能大脑”处理，显示智能结果</div>
              <div class="banner-li-spot size-px16">搭载铝智能处理芯片</div>
              <div class="banner-li-spot size-px16">嵌入基于深度学习的成熟算法</div>
              <div class="banner-li-spot size-px16">智能分析实时视频</div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>

<style lang="scss" scoped>
:deep(.el-carousel__item) {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

:deep(.el-button) {
  border: none;
}

.banner-wrap {
  width: 100%;
  position: absolute;
  top: 60px;

  .banner-content-full {
    width: 100%;
    max-width: var(--sys-top-body-design-width);
    margin: auto;
    padding: 0 60px;
  }

  .banner-content-body {
    width: var(--sys-top-body-width);
    padding: 0 20px;
    margin: auto;
  }
}

.banner-li-spot {
  padding: 10px 20px;
  position: relative;
  color: #4a4c5e;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: var(--el-color-primary);
    border-radius: 100%;
    position: absolute;
    left: 4px;
    top: 16px;
  }

  &.size-px16 {
    font-size: 16px;
    padding: 6px 20px;
  }
}
</style>
