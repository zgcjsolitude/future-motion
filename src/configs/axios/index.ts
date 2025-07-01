import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

const message = useMessage()

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '/', // api 的 base_url
  timeout: 30000, // 请求超时时间
  withCredentials: false // 禁用 Cookie 等信息
})

// request 拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    const { data, request } = response

    // 返回[HTTP]请求没有返回值
    if (!data) {
      throw new Error()
    }

    // 二进制数据则直接返回
    if (['blob', 'arraybuffer'].includes(request.responseType)) {
      return response
    }
    
    return data
  },
  (error: AxiosError) => {
    let msg = error.message
    if (msg === 'Network Error') {
      msg = '操作失败,系统异常!'
    } else if (msg.includes('timeout')) {
      msg = '接口请求超时,请刷新页面重试!'
    } else if (msg.includes('Request failed with status code')) {
      msg = '请求出错，请稍候重试' + msg.substr(msg.length - 3)
    }
    message.notifyError(msg)
    return Promise.reject(error)
  }
)

export {
  service
}
