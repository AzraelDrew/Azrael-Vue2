import {
  b
} from "./b"
console.log(b);
// tree-sharking 打包时剔除无用代码，减小打包后的体积
import test from "./b"
let count = Math.random();
console.log(test(count));


import img1 from "./assets/img/bg.jpg"
let img = document.createElement("img")
img.src = img1
document.body.appendChild(img)

import img2 from "./assets/img/02.jpg"
let img3 = document.createElement("img")
img3.src = img2
document.body.appendChild(img3)