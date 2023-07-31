let str = "Hello,JavaScript,and,HTML,and,CSS!";
console.log(str.substr(5, 9));
console.log(str.substring(5, 9));
console.log(str.slice(-9, -1));
console.log(str.indexOf("@")); // 返回-1，说明@不存在

// 验证Script作为一个整体第一次出现的位置，返回的索引是第一个字符所在位置的索引
console.log(str.indexOf("Script"));

let strArr = str.split("|");
console.log(strArr);
// str = str.replace(",", "|");
// console.log(str);

// 使用正则表达式来实现全部替换
str = str.replace(/,/g, "|");
console.log(str);

// 一些常用的需求
// 1. 转换为"2019年07月24日 12时06分23秒"，"2019年07月24日"，"07/24 12:06"
let time = "2019-7-24 12:6:23";

// 方案一
/* time =
  time
    .replace("-", "年")
    .replace("-", "月")
    .replace(" ", "日 ")
    .replace(":", "时")
    .replace(":", "分") + "秒";

console.log(time); */

// 方案二：获取到年月日小时分钟秒这几个值后，想拼成什么效果就拼成什么效果
// 使用正则表达式来截取
let timeArr = time.split(/(?: |-|:)/g);

let addZero = (val) => (val = val.length < 2 ? "0" + val : val);

time =
  timeArr[0] + "年" + addZero(timeArr[1]) + "月" + addZero(timeArr[2]) + "日";
console.log(time);

// 还是繁琐
/* let l = time.split(" ");
let m = l[0].split("-");
let n = l[1].split(":");
console.log(m, n); */

// 麻烦, 获取值的方法，基于indexOf获取指定符号的索引，基于substring一点点截取
/* let n = time.indexOf("-");
let m = time.lastIndexOf("-");
let x = time.indexOf(" ");
let y = time.indexOf(":");
let z = time.lastIndexOf(":");
let year = time.substring(0, n);
let month = time.substring(n + 1, m);
let date = time.substring(m + 1, x);
console.log(year, month, date); */

// 2. 实现一个方法：queryURLParameter，获取一个URL地址问题后面传递的参数信息
/* 
  结果：{
    lx:1,
    name: "hello",
    teacher: "world",
    HASH: "box"
  }
 */
let url = "http://www.example.com/index.html?lx=1&name=hello&teacher=world#box";
// 1. 获取？和#号后面的值
/* 
  let askIndex = url.indexOf("?"),
    sharpIndex = url.indexOf("#");

  let askString = url.substring(askIndex + 1, sharpIndex);
  let sharpString = url.substring(sharpIndex + 1);
  // 2. 问号后面值的处理
  let askArr = askString.split("&");
  let askObj = {};
  askArr.forEach((item) => {
    let tempArr = item.split("=");
    askObj[tempArr[0]] = tempArr[1];
  });
  askObj.HASH = sharpString; 
*/

/* const queryURLParams = (url) => {
  // 1. 获取?和#后面的信息
  let askIndex = url.indexOf("?"),
    // 判断是否有#号存在
    sharpIndex = url.indexOf("#"),
    askString = "",
    sharpString = "";
  sharpIndex === -1 ? (sharpIndex = url.length) : null;
  askIndex >= 0 ? (askString = url.substring(askIndex + 1, sharpIndex)) : null;
  sharpString = url.substring(sharpIndex + 1);

  // 2. 获取每一部分的信息
  let urlObj = {};
  sharpString !== "" ? (urlObj["HASH"] = sharpString) : null;
  if (askString !== "") {
    let askStringArr = askString.split("&");
    askStringArr.forEach((element) => {
      let askArr = element.split("=");
      urlObj[askArr[0]] = askArr[1];
    });
  }
  return urlObj;
}; */

// 使用正则表达式来修改上面的函数
const queryURLParams = (url) => {
  let result = {},
    regOne = /([^?=&#]+)=([^?=&#]+)/g,
    regTwo = /#([^?=&#]+)/g;
  url.replace(regOne, (n, x, y) => (result[x] = y));
  url.replace(regTwo, (n, x) => (result["HASH"] = x));
  return result;
};
