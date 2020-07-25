import axios from 'axios'

// export function request(config, success, failure) {
//   //1. 创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 发送真正的网络请求
//   instance(config).then(
//     res => {
//       success(res)
//     }).catch(err => {
//     failure(err)
//   })
// }

export function request(config) {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

  // axios拦截器
  // 请求拦截
  instance.interceptors.request.use(aaa => {
    // console.log(aaa)
    // 某些网络请求（比如登录），必须携带有某些特殊信息
    return aaa
  }, err => {
    // console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    // console.log(err)
  })
    // 返回网络请求
    return instance(config)
}
