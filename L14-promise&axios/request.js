let ax = axios.create({
    timeout: 3000,
    baseURL: 'http://simbajs.com:8888'
})
let $get = async function (url) {
    let {
        data
    } = await ax.get(url)
    return data
}

// 请求拦截器  (出现在所有的请求之前)
// 添加请求拦截器
ax.interceptors.request.use(function (config) {
    console.log(config.method + "请求了" + config.url);
    NProgress.start();
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
ax.interceptors.response.use(function (response) {
    // console.log("响应了", response);
    NProgress.done();
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});