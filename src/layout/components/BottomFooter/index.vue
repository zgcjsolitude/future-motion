<template>
  <div class="BottomFooter">
    <div class="contact-wrap">
      <div class="contact-container pt-30px">
        <h2 class="color-[#fff] text-32px m-0px">联系我们，实现卓越运营</h2>
        <p class="color-[#f6f9ff] text-16px pl-1px">
          留下您的联系方式，专属顾问会尽快联系您
        </p>

        <div class="contact-input-form">
          <el-input placeholder="姓名" />
          <el-input placeholder="电话" />
          <el-input placeholder="公司名称" />
          <el-button type="primary">提交需求</el-button>
        </div>
      </div>
    </div>

    <div class="company-info flex">
      <div :style="{ flex: 2 }" class="pl-50px">
        <h3 class="text-20px mb-40px">{{ t('layout.contactUs') }}</h3>

        <p class="mb-20px">四川积木智集科技有限公司</p>
        <p class="w-360px line-height-6">{{ t('layout.address') }}</p>

        <div class="flex flex-wrap w-500px mt-20px">
          <div class="w-50% my-10px">
            <GlobalIcon icon="svg-icon:com-icon-008" class="mr-10px vertical-bottom" />
            <span>021-610100000</span>
          </div>
          <div class="w-50% my-10px">
            <GlobalIcon icon="svg-icon:com-icon-008" class="mr-10px vertical-bottom" />
            <span>021-610100000</span>
          </div>
          <div class="w-50% my-10px">
            <GlobalIcon icon="svg-icon:com-icon-007" class="mr-10px vertical-bottom" />
            <span>Liuqiang@163.com</span>
          </div>
          <div class="w-50% my-10px">
            <GlobalIcon icon="svg-icon:com-icon-007" class="mr-10px vertical-bottom" />
            <span>Liuqiang@163.com</span>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <h3 class="text-20px mb-40px">{{ t('layout.quickNavigation') }}</h3>
        <div class="flex">
          <div class="w-160px">
            <div class="mb-30px">{{ t('route.product') }}</div>
            <div class="mb-30px">{{ t('route.support') }}</div>
            <div class="mb-30px">{{ t('route.about') }}</div>
            <div class="mb-30px">合作伙伴</div>
          </div>

          <div>
            <div>在线留言</div>
          </div>
        </div>
      </div>

      <div class="flex-1 pl-50px">
        <h3 class="text-20px mb-40px">{{ t('route.about') }}</h3>
        <div>
          <img src="/imgs/home/qrcode.png" alt="" />
          <div class="mt-30px">扫一扫 关注我们</div>
        </div>
      </div>
    </div>

    <div class="copyright">
      Copyright©2025四川四川积木智集科技有限公司All rights reserved
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n() // 国际化
</script>

<style lang="scss" scoped>
.contact-wrap {
  height: 260px;
  background-image: url('/imgs/footer/bg.png');
  background-size: cover;
}

.contact-container {
  width: var(--sys-body-width);
  margin: auto;
}

.contact-input-form {
  margin-top: 50px;
  margin-left: 140px;

  .el-input {
    width: 180px;
    margin-right: 12px;
  }

  .el-button {
    --el-color-primary: #5d9eff;
  }
}

.company-info {
  width: var(--sys-body-width);
  margin: auto;
  color: #4a4c5e;
  padding-top: 60px;
}

.copyright {
  width: var(--sys-body-width);
  margin: auto;
  text-align: center;
  color: #4a4c5e;
  padding: 100px 0;
}
</style>
