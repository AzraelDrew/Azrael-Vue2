import axios from "axios";
import NProgress from "nprogress" //进度条插件
import "nprogress/nprogress.css"
import {
  AJAX_BASE_URL,
  AJAX_TIMEOUT
} from "@/config/index"
// 根据create中的配置返回一个处理之后打axios实例
let myAxios = axios.create({
  // 所有打不是http开头打地址，都会拼接baseURL这个做前缀
  baseURL: AJAX_BASE_URL,
  // 如果请求等待超过"timeout"的是件，将被中断
  timeout: AJAX_TIMEOUT,

})
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  NProgress.start()
  let {
    url,
    method,
    params,
    data
  } = config
  console.log(`${method}了${url}`, method === "get" ? params : data);
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log("请求失败，错误为", error.message);
  NProgress.done()
  return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  console.log("响应成功", response);
  NProgress.done()
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log("响应失败，错误为", error.message);
  NProgress.done()
  return Promise.reject(error);
});
export function $get(url, params) {
  return myAxios.get(url, {
    params
  })
}
export function $post(url, params) {
  return myAxios.post(url, params)
}