let express = require('express')
let app = express()
//提供年一个/user的get方式接口，返回数组
app.get("/user", (req, res) => {
  res.json([11, 22, 33])
})
app.listen(8888, () => {
  console.log("项目已经启动在8888端口");
})