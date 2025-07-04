<template>
  <div class="contact">
    <div class="banner">
      <div class="text-36px font-bold mt-100px mb-50px bootom-line">
        联 系 我 们
      </div>
      <div class="text-14ppx">如果您有什么建议或者想法，欢迎联系我们</div>
    </div>

    <div class="bg-[#f4f4f9] py-60px">
      <div class="w-[var(--sys-body-width)] m-auto">
        <div class="rounded-8px bg-[#fff] p-20px">
          <div class="text-center">
            <div class="text-30px font-bold mt-30px mb-30px bootom-line-2">
              联 系 我 们
            </div>
            <div class="text-14ppx">如果您有什么建议或者想法，欢迎联系我们</div>
          </div>

          <div class="mt-50px mb-30px px-30px">
            <el-form size="large">
              <el-row :gutter="24">
                <el-col :span="12">
                  <el-form-item>
                    <el-input placeholder="你的名字"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item>
                    <el-input placeholder="你的邮箱"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item>
                    <el-input
                      :rows="4"
                      type="textarea"
                      placeholder="写下您的信息"
                    />
                  </el-form-item>
                </el-col>
              </el-row>

              <div class="text-center">
                <el-button type="primary">&nbsp;&nbsp;&nbsp;&nbsp;提 交&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
              </div>
            </el-form>
          </div>
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

.bootom-line-2 {
  display: inline-block;
  position: relative;

  &::before {
    content: '';
    width: 60px;
    height: 3px;
    border-radius: 4px;
    background-color: var(--el-color-primary);
    position: absolute;
    left: 44px;
    bottom: -15px;
  }
}
</style>
