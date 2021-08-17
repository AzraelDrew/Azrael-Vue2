import installMixins from './mixin'
import installDirectives from './directive'
import installFilters from './filter'
import extendVue from './vue-extend'
import RegisterComponents from './components' //默认会导入components文件夹中的index.js文件
const plugin = {

  install(Vue, {
    silent
  } = {}) {

    // 备份consol.log方法
    let oldLog = console.log
    console.log = (...str) => {
      if (!silent) {
        oldLog(...str);
      }
    };
    installMixins(Vue)
    installDirectives(Vue)
    installFilters(Vue)
    extendVue(Vue)
    RegisterComponents(Vue)

    console.log(`%c
    ██╗   ██╗██╗   ██╗███████╗
    ██║   ██║██║   ██║██╔════╝
    ██║   ██║██║   ██║█████╗  
    ╚██╗ ██╔╝██║   ██║██╔══╝  
     ╚████╔╝ ╚██████╔╝███████╗
      ╚═══╝   ╚═════╝ ╚══════╝ @shendu

    `, "color:#3498db;")
    // // 给console扩展一个方法，英语调试打印，不需要时可以通过silent一键关闭所有打印
    // console.log2 = (...str) => {
    //   if (!silent) {
    //     console.log(...str);
    //   }
    // };

    // console.log2("全局混入已经部署...")
    // console.log2("自定义插件已经部署指令...")
    // console.log2("全局过滤器已经部署...")
    // console.log2("全局组件已经部署...")
    // console.log2("Vue实力属性已经扩展...")
    // console.log2(`%c
    // ██╗   ██╗██╗   ██╗███████╗
    // ██║   ██║██║   ██║██╔════╝
    // ██║   ██║██║   ██║█████╗  
    // ╚██╗ ██╔╝██║   ██║██╔══╝  
    //  ╚████╔╝ ╚██████╔╝███████╗
    //   ╚═══╝   ╚═════╝ ╚══════╝ @shendu

    // `, "color:#3498db;")

    // function log(...str) {
    //   if (!silent) {
    //     console.log(...str);
    //   }
    // }
    // log("全局混入已经部署...")
    // log("自定义插件已经部署指令...")
    // log("全局过滤器已经部署...")
    // log("全局组件已经部署...")
    // log("Vue实力属性已经扩展...")


    // let {silent}  =options;
    // if (!silent) {

    //   // 
    //   console.log("全局混入已经部署...");

    //   // 
    //   console.log("自定义插件已经部署指令...");

    //   // 
    //   console.log("全局过滤器已经部署...");

    //   // 
    //   console.log("全局组件已经部署...");

    //   // 
    //   console.log("Vue实力属性已经扩展...");
    // }

    // log(`%c
    // ██╗   ██╗██╗   ██╗███████╗
    // ██║   ██║██║   ██║██╔════╝
    // ██║   ██║██║   ██║█████╗  
    // ╚██╗ ██╔╝██║   ██║██╔══╝  
    //  ╚████╔╝ ╚██████╔╝███████╗
    //   ╚═══╝   ╚═════╝ ╚══════╝ @shendu

    // `, "color:#3498db;");
  }
}
export default plugin;