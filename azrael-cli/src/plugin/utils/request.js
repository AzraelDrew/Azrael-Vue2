import axios from "axios"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import {
  AJAX_BASE_URL,
  AJAX_TIMEOUT
} from "@/config/index"

let myAxios = axios.create({
  baseURL: AJAX_BASE_URL,
  timeout: AJAX_TIMEOUT,
})
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  NProgress.start();
  return config;
}, function (error) {
  // 对请求错误做些什么
  NProgress.done()
  return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  NProgress.done()
  return response;
}, function (error) {
  // 对响应错误做点什么
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