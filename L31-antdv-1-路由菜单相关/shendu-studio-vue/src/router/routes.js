// import a from "./a"
// import b from "./b"
// export default [a, b]

/**
 * 从同级打modules中自动导入所有打js文件,并且将里面打对象注册成路由
 *
 */
let context = require.context("./modules", true, /\.js$/)
// context.keys().forEach(filePath => {
//   routes.push(context(filePath).default)
// })

// let routes = context.keys().reduce((total, filePath) => {
//   total.push(context(filePath).default)
//   return total
// }, [])

let routes = context.keys().map(filePath => context(filePath).default)

// 放在最后处理404(前面的路由都走来没有匹配到)
routes.push({
  path: "*", //通配符
  meta: {
    hide: true
  },
  component: () => import("@/views/PageNotFound"),
})
routes.push({
  path: "/", //通配符
  meta: {
    hide: true
  },
  redirect: "/userlist"
})
export default routes