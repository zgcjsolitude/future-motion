import { ElMessageBox, ElNotification } from 'element-plus'

export const useMessage = () => {
  return {
    // 通知提示
    notify(content: string, config = {}) {
      ElNotification.info({ message: content, customClass: 'is-info', ...config })
    },
    // 成功通知
    notifySuccess(content: string, config = {}) {
      ElNotification.success({ message: content, customClass: 'is-success', ...config })
    },
    // 警告通知
    notifyWarning(content: string, config = {}) {
      ElNotification.warning({ message: content, customClass: 'is-warning', ...config })
    },
    // 错误通知
    notifyError(content: string, config = {}) {
      ElNotification.error({ message: content, customClass: 'is-error', ...config })
    },
    // 确认窗体
    confirm(content: string, tip?: string, config = {}) {
      return ElMessageBox.confirm(content, tip ? tip : '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        ...config
      })
    },
    // 警告窗体
    confirmWarning(content?: string, tip?: string, config = {}) {
      return ElMessageBox.confirm(content, tip ? tip : '系统提示', {
          confirmButtonText: '确定',
          confirmButtonClass: 'el-button--warning',
          cancelButtonText: '取消',
          type: 'warning',
          ...config
        }
      )
    },
    // 删除窗体
    confirmError(content?: string, tip?: string, config = {}) {
      return ElMessageBox.confirm(
        content ? content : '是否删除所选中数据？',
        tip ? tip : '系统提示',
        {
          confirmButtonText: '确定',
          confirmButtonClass: 'el-button--danger',
          cancelButtonText: '取消',
          type: 'error',
          ...config
        }
      )
    },
  }
}
