// rollup.config.js
export default {
  // 核心选项
  input: "main.js", // 必须  入口

  output: [{ // 必须 (如果要输出多个，可以是一个数组)   出口
      // 核心选项
      file: "azrael.js", // 必须  
      format: "iife", // 必须
      name: "azrael",
    },
    { // 必须 (如果要输出多个，可以是一个数组)
      // 核心选项
      file: "azrael-min.js", // 必须
      format: "iife", // 必须   模式
      name: "azrael", //导出名
    },
  ],

};