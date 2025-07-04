<template>
  <div class="MenuBase">
    <div class="MenuBase-container">
      <div class="text-center color-[#4a4c5e] mt-60px mb-50px">
        <h2 class="text-32px my-10px">核心业务</h2>
        <p class="mt-20px">跨行业、跨领域、跨场景解决方案</p>
      </div>

      <div class="flex flex-wrap justify-between">
        <div
          v-for="(item, i) in business"
          :key="i"
          class="w-331px h-487px mb-30px px-20px py-50px color-[#4a4c5e]"
          :style="{ background: `url(${item.imgUrl})` }"
        >
          <div class="text-24px mb-20px">{{ item.title }}</div>
          <div class="h-70px">
            <div v-for="(txt, j) in item.desc" :key="j" class="mb-6px">{{ txt }}</div>
          </div>
          <div>
            <el-link type="primary">在线咨询</el-link>
          </div>
        </div>
      </div>
    </div>

    <div class="MenuBase-2-wrap">
      <div class="MenuBase-container">
        <div class="text-center color-[#4a4c5e] mt-80px mb-70px">
          <h2 class="text-30px my-10px">更懂客户,为不同行业和规模的企业提供多样产品</h2>
          <p class="mt-20px">以卓越的综合性服务能力全面助理产业数字化转型</p>
        </div>

        <div class="flex flex-wrap justify-between">
          <div
            v-for="(item, i) in product"
            :key="i"
            class="w-454px h-320px mb-30px p-24px pt-28px color-[#4a4c5e] bg-[#fff] rounded-6px"
          >
            <div class="text-24px mb-16px color-[#1a1a1a]">{{ item.title }}</div>
            <div class="h-70px">
              <div v-for="(txt, j) in item.desc" :key="j" class="text-16px mb-8px">{{ txt }}</div>
            </div>
            <div>
              <img class="w-full" :src="item.imgUrl" alt="">
            </div>
          </div>
        </div>

        <div class="text-center mt-30px">
          <el-button type="primary" plain size="large">查看更多</el-button>
        </div>
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
const business = [
  {
    title: '解决方案',
    desc: ['从百万数据中捕捉0.01%的商机，AI比', '直觉更可靠。'],
    imgUrl: '/imgs/home/busi-1.png',
  },
  {
    title: '边缘计算',
    desc: ['从百万数据中捕捉0.01%的商机，AI比', '直觉更可靠。'],
    imgUrl: '/imgs/home/busi-2.png',
  },
  {
    title: '激光/探测',
    desc: ['技术迷雾中，我们是指向业务增长的', '灯塔。'],
    imgUrl: '/imgs/home/busi-3.png',
  },
  {
    title: '无人机',
    desc: ['云上算力，始于脚下的坚实——从设备', '到云端，一步稳赢。'],
    imgUrl: '/imgs/home/busi-4.png',
  },
  {
    title: '特种装备',
    desc: ['在极限中定义极限，在危机中终结危机。'],
    imgUrl: '/imgs/home/busi-5.png',
  },
  {
    title: '定制开发',
    desc: ['标准化软件解决70%问题，定制开发填', '补100%缺口。'],
    imgUrl: '/imgs/home/busi-6.png',
  },
  {
    title: '智能设备',
    desc: ['突破物理限制，智能设备', '—— 让‘不可能’成为‘正在发生’'],
    imgUrl: '/imgs/home/busi-7.png',
  },
  {
    title: '芯片制作',
    desc: ['芯之所向，突破‘线’制', '—— 让每纳米都是新赛道'],
    imgUrl: '/imgs/home/busi-8.png',
  },
]

const product = [
  {
    title: '国防与低空经济',
    desc: [
      '战略级侦察/电子信号监听/察打一体能力/集群作',
      '战协同/反无人机作战/灾害应急勘察/医疗救援'
    ],
    imgUrl: '/imgs/home/product-1.png',
  },
  {
    title: '智能激光',
    desc: [
      '工业检测/科研与医疗/安防监控/特殊通信/艺术',
      '与声学/远距离拾音/非接触式采集/多传感器融合'
    ],
    imgUrl: '/imgs/home/product-2.png',
  },
  {
    title: 'Smart3000 4/5G人工智能盒集成 ',
    desc: [
      '搭载AI智能处理芯片',
      '嵌入基于深度学习的成熟算法'
    ],
    imgUrl: '/imgs/home/product-3.png',
  },
  {
    title: '国防与低空经济',
    desc: [
      '工业制造/智慧城市/航空航天/医疗健康/多源数',
      '据融合 /AI 深度融合/元宇宙应用'
    ],
    imgUrl: '/imgs/home/product-4.png',
  },
  {
    title: '国防与低空经济',
    desc: [
      '搭载AI智能处理芯片',
      '嵌入基于深度学习的成熟算法'
    ],
    imgUrl: '/imgs/home/product-5.png',
  },
  {
    title: '国防与低空经济',
    desc: [
      '信号截获与监听/声学与光学窃听/网络与数字侦',
      '听/军事与情报侦察/信号防御'
    ],
    imgUrl: '/imgs/home/product-6.png',
  },
]

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
.MenuBase-container {
  width: var(--sys-body-width);
  margin: 0 auto;
  overflow: auto;
}

.MenuBase-2-wrap {
  width: 100%;
  height: 1075px;
  background: url(/imgs/home/bg-wrap-1.png);
  background-size: cover;
}
</style>
