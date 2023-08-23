// ^,$: ^: 表示以什么开头。$: 表示以什么结尾

// ^,$都不加：字符串中包含符合规则的内容即可
let reg1 = /\d+/;
// ^,$都加：字符串只能是和规则一致的内容
let reg2 = /^\d+$/;

// 最简单的验证手机号的正则
let reg3 = /^1\d{10}$/;

// \: 转义字符
// 这里的.并不是小数点，而是表示除\n以外的任意字符
let reg4 = /^2.3$/;
console.log(reg4.test("2.3")); // true
console.log(reg4.test("2@3")); // true
console.log(reg4.test("23")); // false

// 如果需匹配2.3，就需要使用\转义字符
let reg5 = /^2\.3$/;
console.log(reg4.test("2.3")); // true
console.log(reg4.test("2@3")); // false
console.log(reg4.test("23")); // false
