let str1 = "hello2023looking2024waiting2025";
let reg1 = /\d+/;
console.log(reg1.test(str1));
// 只返回第一个匹配的字符串，后面如果还有匹配的不再返回
console.log(reg1.exec(str1));
