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
time =
  time
    .replace("-", "年")
    .replace("-", "月")
    .replace(" ", "日 ")
    .replace(":", "时")
    .replace(":", "分") + "秒";

console.log(time);

// 方案二：获取到年月日小时分钟秒这几个值后，想拼成什么效果就拼成什么效果
