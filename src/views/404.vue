<template>
  <div :class="['error-container', `is-${newTheme}`]">
    <svg class="svg-container" viewBox="0 0 837 1045" version="1.1">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup"></path>
        <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup"></path>
        <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup"></path>
        <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup"></path>
        <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup"></path>
      </g>
    </svg>

    <div class="message-box">
      <h1>404</h1>
      <p>抱歉，未找到相关页面……</p>
      <div class="buttons-con" @click="router.go(-1)">
        <div class="action-link-wrap">
          <a class="link-button link-back-button">返回</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const router = useRouter()

const props = defineProps({
  theme: { // 主题，light | dark
    type: String,
    default: 'light' 
  }
})

const newTheme = ref(props.theme)
</script>

<style lang="scss" scoped>
.error-container.is-light {
  --err-color: #2F3242;
  --err-bg-color: #fff;
}
.error-container.is-dark {
  --err-color: #fff;
  --err-bg-color: #2F3242;
}

.error-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--err-bg-color);
}

.svg-container {
  width: 60%;
  height: 100%;
  max-width: 380px;
  margin: 0 2%;
}

.message-box {
  color: var(--err-color);
  font-family: Roboto;
  font-weight: 300;
  margin: 0 2%;

  h1 {
    font-size: 60px;
    line-height: 46px;
    margin-bottom: 40px;
  }
}

.buttons-con {
  .action-link-wrap {
    margin-top: 40px;
  }

  .action-link-wrap a {
    background: var(--el-color-primary);
    padding: 8px 25px;
    border-radius: 4px;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s linear;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
      background: #5A5C6C;
      color: #fff;
    }
  }
}

// 响应式
@media (max-width: 450px) {
  .error-container {
    flex-direction: column;
  }

  .svg-container {
    height: 50%;
  }
}

// 动画效果
#Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
  animation: float 1s infinite ease-in-out alternate;
}
#Polygon-2 {
  animation-delay: .2s; 
}
#Polygon-3 {
  animation-delay: .4s; 
}
#Polygon-4 {
  animation-delay: .6s; 
}
#Polygon-5 {
  animation-delay: .8s; 
}

@keyframes float {
	100% {
    transform: translateY(20px);
  }
}
</style>
