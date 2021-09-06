# Azrael-Vue2

> data  

```js
data{
    return{
        
    }
}
```

- 存放数据需要使用this访问

> methods  

```js
mthods:{
    methodName(){
        /* code */
    }
}
```

- 自定义方法  在模板中可以直接使用
- 在{{}}中需要加()调用此方法 
- 在生命周期等类似的地方需要使用this

> directive

```js
directives: {
    	  // directiveName指令名 el表示当前元素  data表示传入打参数
          directiveName: (el, data) => { 
/* code */
          }
        }
```

> filters

```js
filterName(){
    /* code */
    
    return value
}
```

> computed

```js
     computed: {
        computedName() {
            /* code */
          return value
        }
     }
```

- 计算属性
- 利用已有的数据生成新的变量,和data中的数据一样都可以被this获取
- 可以简化页面模板
- 如果数据时重复打,则自动保存

> watch

```js
watch: {
        // 将data中的变量名作为一个函数 (函数名与变量名一致)
        count(val) {
        /* code */
        }
}
```



> 基础指令	(指令打参数必须是一个变量)

- v-cloak  
  - 在Vue渲染好之前会一直存在  渲染好后就会消失
- v-model 
  - 在input标签中 将绑定的值给文本框的value 同时监听文本框打输入事件,输入时改变绑定的值
  - .number尝试转换为数字
  - .trim 去掉空格
  - .lazy 当文本框失去焦点时才更新 blur事件触发

- v-on 简写 @
  - 事件监听
  - .once只会监听一次
- v-bind 简写   :
  - 对style使用v-bind 参数必须时对象
- v-show 
  - 参数为布尔值 控制dispaly属性 来控制显示与隐藏 标签一直在
- v-if
  - 与v-show类似 创建或删除标签
- v-for
- v-once 
  - 只会绑定一次 不再监听后续打变化
- v-text
- v-html

> 生命周期

- beforeCreate
  - 数据还未初始化,还拿不到数据(正在准备初始化) 
- created
  - 数据初始化完成,可以进行数据操作
- beforeMount
  - DOM还未初始化
- mounted
  - DOM初始化完成,科研进行页面样式处理
- beforeDestroy
- destroyed
- beforeUpdate
- updated

> 组件

```js
components: {
      //  componentName组件名 对应的HTML内容是template中的标签
      componentName: {
        template: `
        <button>
		按钮
		</button>`
      }
}
```

> 插槽

```js
 //  componentName组件名 对应的HTML内容是template中的标签    
Vue.component("componentName", {
    // <slot>默认值</slot>     默认插槽   当没有传值时则使用默认值  
      template: `
      <button>
		<slot>按钮</slot>
      </button>`
    })

Vue.component("componentName", {
    // <slot name="slotName"></slot>     具名插槽   slotName为插槽名  
      template: `
      <button>
		<slot>按钮</slot>
      </button>`
    })

//作用域插槽
<componentName :data="data">
    <template v-slot="{row}">
      <a href="">
          {{row.name}}
       </a>
    </template>
</componentName>

Vue.component("componentName", {
        props: ["data"],
        template: 
       `<ul>
    	<li v-for="(item,i) in data">
      		{{item.id}}--<slot v-bind:row="item">{{item.name}}</slot>
    	</li>
  		</ul>`
    })
```



> 全局自定义指令

```js
// directiveName指令名 el表示当前元素  data表示传入的参数
Vue.directive("directiveName",(el,data)={  
/* code */
})
```

> 全局过滤器

```js
// filterName 过滤器名称 val需要被过滤的值
Vue.filter("filterName", (val) => {
      return value
})
```

> 全局组件

```js
 //  componentName组件名 对应的HTML内容是template中的标签    
Vue.component("componentName", {
      template: `
      <button>
		按钮
      </button>`
    })
```



