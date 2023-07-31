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
