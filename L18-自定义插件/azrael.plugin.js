   // 定义插件
   /* 
   必须是一个对象
   且必须包含install方法有一个Vue参数
    */
   let AzraelPlugin = {
     install(Vue) {
       //  // 定义Vue的全局功能
       //  Vue.component('a-tip', {
       //    template: `<div class="a-tip"><slot></slot></div>`
       //  })
       //  Vue.mixin({
       //    created() {
       //      console.log("azrael-plugin is ready");
       //    }
       //  })
       //  Vue.directive('red', el => {
       //    el.style.color = 'red'
       //  })
       //  Vue.filter('fmtGender', val => {
       //    return ['男', '女'][val];
       //  })

       // 安装组件
       this.installComponents(Vue)
       //  安装混入
       this.installMixins(Vue)
       //  安装指令
       this.installDirectives(Vue)
       //  安装过滤器
       this.installFilters(Vue)
       //  安装扩展
       this.installprotos(Vue)

       console.log(`%c
       ██╗   ██╗██╗   ██╗███████╗
       ██║   ██║██║   ██║██╔════╝
       ██║   ██║██║   ██║█████╗  
       ╚██╗ ██╔╝██║   ██║██╔══╝  
        ╚████╔╝ ╚██████╔╝███████╗
         ╚═══╝   ╚═════╝ ╚══════╝
       `, "color:#0984e3;font-weight:bold")
     },
     installComponents(Vue) {
       Vue.component('a-tip', {
         template: `<div class="a-tip"><slot></slot></div>`
       })
     },
     installMixins(Vue) {
       Vue.mixin({
         created() {
           console.log("azrael-plugin is ready");
         }
       })
     },
     installDirectives(Vue) {
       Vue.directive('red', el => {
         el.style.color = 'red'
       })
     },
     installFilters(Vue) {
       Vue.filter('fmtGender', val => {
         return ['男', '女'][val];
       })
     },
     installprotos(Vue) {},
   }


   // 使用插件
   Vue.use(AzraelPlugin)