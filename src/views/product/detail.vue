<template>
  <div class="product-detail">
    <div class="productmsg-wrap">
      <div class="productview-container">
        <div class="flex">
          <div class="w-450px pt-10px">
            <img
              class="w-full"
              src="/imgs/product/product-view-01.png"
              alt=""
            />
          </div>

          <div class="flex-1 overflow-auto pl-30px">
            <div class="text-18px font-bold color-[#282828]">
              AI边缘计算盒子多路视频算法分析校园加油站工地社区智能安防监控
            </div>
            <div class="text-12px mt-6px color-[#919191]">
              Arm 8核2.4 /8GB/64GB/Arm G52 /6.0
              Tops/2*网口,1*Hdmi,12V电源,输出,USB,wifi
            </div>
            <div
              class="w-full bg-[#fef8f8] mt-30px p-20px"
              style="border-top: 1px solid var(--el-color-danger-light-7)"
            >
              <div class="mb-15px">
                <label class="w-80px inline-block color-[#919191]">价格</label>
                <span class="color-[var(--el-color-danger)]">
                  <span class="text-12px">￥</span>
                  <span class="text-20px font-bold">2580.00</span>
                </span>
              </div>
              <div>
                <label class="w-80px inline-block color-[#919191]">优惠</label>
                <span>
                  <!-- <span class="text-12px">￥</span>
                  <span class="text-20px font-bold">2580.00</span> -->
                </span>
              </div>
            </div>

            <el-form
              ref="formRef"
              :model="formModel"
              :rules="formRules"
              :label-width="80"
              label-position="left"
              class="mt-20px"
            >
              <el-form-item label="配送至" prop="addressArea">
                <div class="flex">
                  <el-cascader
                    v-model="formModel.addressArea"
                    :options="regionData"
                    class="w-360px!"
                    placeholder="请选择"
                  />
                  <el-input
                    v-model="formModel.addressDesc"
                    class="ml-10px w-360px!"
                    placeholder="请输入"
                  />
                </div>
              </el-form-item>
              <el-form-item label="版本型号" prop="productVersion">
                <el-radio-group v-model="formModel.productVersion">
                  <el-radio value="1" border>AIBOX-H66</el-radio>
                  <el-radio value="2" border>AIBOX-H19</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="内存" prop="productMemory">
                <el-radio-group v-model="formModel.productMemory">
                  <el-radio value="1" border>4GB</el-radio>
                  <el-radio value="2" border>8GB</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="存储" prop="productStorage">
                <el-radio-group v-model="formModel.productStorage">
                  <el-radio value="1" border>32GB</el-radio>
                  <el-radio value="2" border>64GB</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="数量" prop="number">
                <el-input-number
                  v-model="formModel.number"
                  :min="1"
                  :max="99"
                />
              </el-form-item>

              <div class="text-right">
                <el-button size="large" type="danger">立即购买</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>

    <div class="productview-container">
      <div class="productparams-title mt-50px mb-20px">
        <span class="text-18px font-bold">参数错误</span>
        <span class="ml-10px text-12px">Parameter specificctions</span>
      </div>

      <el-row :gutter="60">
        <el-col v-for="(item, i) in parameterList" :span="12" :key="i">
          <div class="parameter-item">
            <label class="inline-block w-100px font-bold">
              {{ item.label }}：
            </label>
            <span>{{ item.value }}</span>
          </div>
        </el-col>
      </el-row>

      <div class="flex justify-center py-60px">
        <!-- <video></video> -->
        <img
          class="w-960px h-540px"
          src="/imgs/product/product-view-01-video.png"
          alt=""
        />
      </div>
    </div>

    <div class="productscene-wrap relative">
      <div class="productview-container pb-60px relative z-1 color-[#4a4c5e]">
        <div class="text-center mb-40px">
          <h2 class="text-32px my-10px">应用场景</h2>
          <p class="mt-20px">跨行业、跨领域、跨场景解决方案</p>
        </div>

        <el-row :gutter="50">
          <el-col v-for="(item, i) in sceneList" :key="i" :span="8">
            <div class="text-center mb-60px">
              <div class="w-full h-255px bg-[#eee]">
                <img class="w-full h-full" :src="item.imgUrl" alt="">
              </div>
              <div class="p-20px">
                <p class="text-18px font-bold m-0 mb-5px">{{ item.title }}</p>
                <p class="text-12px m-0">{{ item.desc }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="absolute w-full h-500px bg-[#fcfcfc] bottom-0"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { regionData } from 'element-china-area-data'

const formRef = ref()
const formModel = ref({
  addressArea: '',
  addressDesc: '',
  productVersion: '1',
  productMemory: '1',
  productStorage: '1',
  number: 1,
})
const formRules = {}

const parameterList = ref([
  {
    label: '产品型号',
    value: 'AIBOX-H66',
  },
  {
    label: 'CPU',
    value: 'Arm 8核2.4',
  },
  {
    label: '内存',
    value: '4GB/8GB',
  },
  {
    label: '硬盘',
    value: '32GB/64GB',
  },
  {
    label: '电源',
    value: '12V 5A',
  },
  {
    label: 'GPU',
    value: '32GB/64GB',
  },
  {
    label: '算力',
    value: '6.0 Tops',
  },
  {
    label: '接口',
    value: '2*网口，1*Hdmi，12V电源，音频输出，USB*6，wifi',
  },
  {
    label: '尺寸',
    value: '234mm*150mm*52mm',
  },
  {
    label: '选配',
    value: '',
  },
  {
    label: 'TF卡',
    value: '支持512GB以下高速打卡',
  },
])

const sceneList = ref([
  {
    imgUrl: '/imgs/product/product-view-scene-1.png',
    title: '智慧社区',
    desc: '新建任务、存量社区老旧街道',
  },
  {
    imgUrl: '/imgs/product/product-view-scene-2.png',
    title: '智慧园区解决方案',
    desc: '办公园区、总部园区、产业园区、工业园区、 物流园区等',
  },
  {
    imgUrl: '/imgs/product/product-view-scene-3.png',
    title: '智慧交通',
    desc: '边缘智能检测，多种智能算法支持,在线监 管，科技赋能交通安全防范 ',
  },
  {
    imgUrl: '/imgs/product/product-view-scene-4.png',
    title: '智慧加油站',
    desc: '预警安全隐患，第一时间告警提示，避免告警滞 后带来的隐患风险 ',
  },
  {
    imgUrl: '/imgs/product/product-view-scene-5.png',
    title: '智慧园区解决方案',
    desc: '办公园区、总部园区、产业园区、工业园区、 物流园区等',
  },
  {
    imgUrl: '/imgs/product/product-view-scene-6.png',
    title: '智慧交通',
    desc: '边缘智能检测，多种智能算法支持,在线监 管，科技赋能交通安全防范 ',
  },
])
</script>

<style lang="scss" scoped>
.productview-container {
  width: var(--sys-body-width);
  margin: 0 auto;
}

.product-detail {
  background-color: #fff;
}

.productmsg-wrap {
  padding: 20px 0;
  background-color: #fcfcfc;
}

:deep(.el-form) {
  .el-input {
    --el-color-primary: var(--el-color-danger);
    --el-input-border-radius: 0;
    --el-input-height: 30px;
  }
  .el-radio-group {
    --el-color-primary: var(--el-color-danger);
    width: 100%;
    .el-radio.is-bordered {
      --el-border-radius-base: 0;
    }
    .el-radio {
      --el-radio-font-size: 14px;
      flex: 1;
      height: 30px;
      margin-right: 0;
      display: flex;
      justify-content: center;
    }
    .el-radio + .el-radio {
      margin-left: 15px;
    }
    .el-radio.is-bordered.is-checked {
      .el-radio__label {
        font-weight: bold;
      }
    }
    .el-radio__inner {
      display: none;
    }
  }
  .el-input-number {
    --el-fill-color-light: #fff;
    --el-color-primary: var(--el-color-danger);
    .el-input {
      --el-input-border-radius: 4px;
    }
  }
  .el-button {
    border-radius: 0;
  }
}

.productparams-title {
  position: relative;
  padding-left: 12px;
  &::before {
    content: '';
    width: 3px;
    height: 80%;
    background-color: var(--el-color-primary);
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 12%;
  }
}

.parameter-item {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color);
  font-size: 14px;
  padding-left: 12px;
  color: #4a4c5e;
}
</style>
