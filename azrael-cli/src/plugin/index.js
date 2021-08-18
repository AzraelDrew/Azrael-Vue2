import installMixins from './mixin'
import installDirectives from './directive'
import installFilters from './filter'
import extendVue from './vue-extend'
import RegisterComponents from './component'

const plugin = {
  install(Vue, {
    silent
  } = {}) {
    let oldLog = console.log
    console.log = (...str) => {
      if (!silent) {
        oldLog(...str)
      }
    }

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
  }
}
export default plugin;