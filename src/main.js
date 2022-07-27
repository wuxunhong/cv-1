// let demo = document.querySelector('#demo');
let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/*你好，我叫小吴
*接下来我要演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
border:1px solid red;
width:200px;
height:200px;
}
/*接下来，我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
**/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个小球 */
#div1::before{
  width:100px;
  height:100px;
  left:50%;
  top:0;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
  width:100px;
  height:100px;
  left:50%;
  bottom:0;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}`;
let string2 = "";
// string = string.replace(/\n/g, '<br>')
let n = 0;//n=1

let step = () => {
  setTimeout(() => {
    // string2 += string[n] === "\n" ? "<br>" : string[n];
    // n = n + 1;
    if (string[n] === '\n') {
      //如果是回车，就不照搬
      string2 += '<br>';
    } else if (string[n] === " ") {
      string2 += "&nbsp;"
    } else {
      string2 += string[n];
      //如果不是回车，就照搬
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    // demo.innerHTML = string2;
    if (n < string.length - 1) {
      n += 1
      step()
    }
  }, 50)

};

step();

// let style = document.querySelector('#style')
// setTimeout(() => {
//   style.innerHTML = `
//   body{
//     color:red;
//   }
//   `
// }, 3000);
