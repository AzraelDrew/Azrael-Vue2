export let b = 10;
let a = 10;
export default function test(c) {
  // console.log("Hello");
  return a + b + c;
}
import img1 from "~a/img/bg.jpg"
let img = document.createElement("img")
img.src = img1
document.body.appendChild(img)