const download0 = (data: Blob, fileName: string, mineType: string) => {
  // 创建 blob
  const blob = new Blob([data], { type: mineType })
  // 创建 href 超链接，点击进行下载
  window.URL = window.URL || window.webkitURL
  const href = URL.createObjectURL(blob)
  const downA = document.createElement('a')
  downA.href = href
  downA.download = fileName
  downA.click()
  // 销毁超连接
  window.URL.revokeObjectURL(href)
}

export const download = {
  // default
  default: (data: Blob, fileName: string) => {
    download0(data, fileName, '')
  },
  // 下载 Excel 方法
  excel: (data: Blob, fileName: string) => {
    download0(data, fileName, 'application/vnd.ms-excel')
  },
  // 下载 Word 方法
  word: (data: Blob, fileName: string) => {
    download0(data, fileName, 'application/msword')
  },
  // 下载 Zip 方法
  zip: (data: Blob, fileName: string) => {
    download0(data, fileName, 'application/zip')
  },
  // 下载 Html 方法
  html: (data: Blob, fileName: string) => {
    download0(data, fileName, 'text/html')
  },
  // 下载 Markdown 方法
  markdown: (data: Blob, fileName: string) => {
    download0(data, fileName, 'text/markdown')
  }
}

export const getFileName = (headers: AxiosHeaders): string => {
  let fileName = decodeURIComponent(headers['content-disposition'])
    .split(';')
    .find((str: string) => str.includes('filename'))

  if (fileName) {
    const chunk = fileName.split('=').map((str: string) => str.trim())
    fileName = chunk[1].replace(/\"/, '')
  }

  return fileName || '未命名文件'
}
