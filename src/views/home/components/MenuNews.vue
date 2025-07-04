<template>
  <div class="MenuNews">
    <div class="MenuNews-wrap flex">
      <div class="left-nav">
        <div class="ml-auto w-368px">
          <div class="text-24px font-bold mb-4px">案例展示</div>
          <div class="text-16px color-[#acbbfc]">Case Presentation</div>
          <div class="w-36px h-4px bg-[#fff] mt-10px rounded-2px"></div>
        </div>

        <div class="text-right mt-60px">
          <div
            v-for="item in askList"
            :key="item.label"
            :class="['ask-item', item.label === askLabel && 'is-active']"
            @click="askLabel = item.label"
          >
            {{ item.label }}
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-auto flex p-50px color-[#4a4c5e]" style="letter-spacing: 1px">
        <div class="overflow-auto" style="flex: 2">
          <div class="text-24px font-bold mb-20px">{{ askItem.title1 }}</div>
          <div class="line-height-40px">{{ askItem.title1Desc }}</div>
          <div class="text-24px font-bold mb-20px mt-40px">
            {{ askItem.title2 }}
          </div>
          <div class="line-height-40px">{{ askItem.title2Desc }}</div>

          <div class="mt-40px">
            <el-button type="primary">免费咨询</el-button>
          </div>
        </div>

        <div class="overflow-auto p-60px" style="flex: 3">
          <img
            class="max-w-full max-h-full"
            :src="askItem.imgUrl"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const askLabel = ref('算法盒子')
const askList = [
  {
    label: '算法盒子',
    title1: '边侧服务器应用案例',
    title1Desc:
      '基于现有管理体系中的音视频分析设备、各类传感器等设施设备，引入DeepSe 模型，针对各类园区业务流程数据展开深度解析和优化，对人车物出入、设备运行状态、能耗等多维度数据的监测分析和预警处理，实现各类园区运作智能化分析决策、执行反馈和信息管理，保障安全、高效、低成本运行。',
    title2: '应用场景',
    title2Desc: '针对各类园区/工厂/仓储/物流等应用场景泛安放智能体AI Agent。',
    imgUrl: '/imgs/home/ask-bg-1.png',
  },
  {
    label: 'Smart3000 4/5G人工智能盒集成',
    title1: '边侧服务器应用案例',
    title1Desc:
      '基于现有管理体系中的音视频分析设备、各类传感器等设施设备，引入DeepSe 模型，针对各类园区业务流程数据展开深度解析和优化，对人车物出入、设备运行状态、能耗等多维度数据的监测分析和预警处理，实现各类园区运作智能化分析决策、执行反馈和信息管理，保障安全、高效、低成本运行。',
    title2: '应用场景',
    title2Desc: '针对各类园区/工厂/仓储/物流等应用场景泛安放智能体AI Agent。',
    imgUrl: '/imgs/home/ask-bg-1.png',
  },
  {
    label: '智能安防',
    title1: '边侧服务器应用案例',
    title1Desc:
      '基于现有管理体系中的音视频分析设备、各类传感器等设施设备，引入DeepSe 模型，针对各类园区业务流程数据展开深度解析和优化，对人车物出入、设备运行状态、能耗等多维度数据的监测分析和预警处理，实现各类园区运作智能化分析决策、执行反馈和信息管理，保障安全、高效、低成本运行。',
    title2: '应用场景',
    title2Desc: '针对各类园区/工厂/仓储/物流等应用场景泛安放智能体AI Agent。',
    imgUrl: '/imgs/home/ask-bg-1.png',
  },
  {
    label: '智能激光',
    title1: '边侧服务器应用案例',
    title1Desc:
      '基于现有管理体系中的音视频分析设备、各类传感器等设施设备，引入DeepSe 模型，针对各类园区业务流程数据展开深度解析和优化，对人车物出入、设备运行状态、能耗等多维度数据的监测分析和预警处理，实现各类园区运作智能化分析决策、执行反馈和信息管理，保障安全、高效、低成本运行。',
    title2: '应用场景',
    title2Desc: '针对各类园区/工厂/仓储/物流等应用场景泛安放智能体AI Agent。',
    imgUrl: '/imgs/home/ask-bg-1.png',
  },
  {
    label: '数字孪生',
    title1: '边侧服务器应用案例',
    title1Desc:
      '基于现有管理体系中的音视频分析设备、各类传感器等设施设备，引入DeepSe 模型，针对各类园区业务流程数据展开深度解析和优化，对人车物出入、设备运行状态、能耗等多维度数据的监测分析和预警处理，实现各类园区运作智能化分析决策、执行反馈和信息管理，保障安全、高效、低成本运行。',
    title2: '应用场景',
    title2Desc: '针对各类园区/工厂/仓储/物流等应用场景泛安放智能体AI Agent。',
    imgUrl: '/imgs/home/ask-bg-1.png',
  },
  {
    label: '国防与低空经济 ',
    title1: '边侧服务器应用案例',
    title1Desc:
      '基于现有管理体系中的音视频分析设备、各类传感器等设施设备，引入DeepSe 模型，针对各类园区业务流程数据展开深度解析和优化，对人车物出入、设备运行状态、能耗等多维度数据的监测分析和预警处理，实现各类园区运作智能化分析决策、执行反馈和信息管理，保障安全、高效、低成本运行。',
    title2: '应用场景',
    title2Desc: '针对各类园区/工厂/仓储/物流等应用场景泛安放智能体AI Agent。',
    imgUrl: '/imgs/home/ask-bg-1.png',
  },
]
const askItem = computed(() => {
  return askList.find((el) => el.label === askLabel.value)
})
</script>

<style lang="scss" scoped>
.MenuNews-wrap {
  height: 720px;
  background: url('/imgs/home/news-bg-2.png');
  background-size: cover;
  margin: 80px 0;
}

.left-nav {
  width: 20%;
  min-width: 408px;
  height: 100%;
  background: url('/imgs/home/news-bg-1.png');
  color: #fff;
  padding: 30px;
  padding-right: 0;
  overflow: auto;
}

.ask-item {
  font-size: 18px;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  margin: 10px 0;
  background-color: line;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, transparent, #ffffff08, #ffffff3b);
  }

  &.is-active {
    font-weight: bold;
    background: linear-gradient(90deg, transparent, #ffffff08, #ffffff3b);
  }
}
</style>
