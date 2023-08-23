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

// 如需匹配2.3，就要使用\转义字符
let reg5 = /^2\.3$/;
console.log(reg4.test("2.3")); // true
console.log(reg4.test("2@3")); // false
console.log(reg4.test("23")); // false

let str1 = "\\d";

let reg6 = /^\\d$/;
console.log(reg6.test(str1)); // true

// x|y: 直接使用会存在很乱的优先级的问题，一般会使用括号进行分组
let reg7 = /^18|29$/;
console.log(reg7.test("18")); // true
console.log(reg7.test("29")); // true
console.log(reg7.test("189")); // true
console.log(reg7.test("129")); // true
console.log(reg7.test("1829")); // true
console.log(reg7.test("829")); // true
console.log(reg7.test("182")); // true

// 如需仅匹配18或29，就需要使用括号将条件分组
let reg8 = /^(18|29)$/; // 表示只能是18或29中的一个了
console.log(reg8.test("29")); // true
console.log(reg8.test("189")); // false
console.log(reg8.test("129")); // false
console.log(reg8.test("1829")); // false
console.log(reg8.test("18")); // true
console.log(reg8.test("829")); // false
console.log(reg8.test("182")); // false

// []: 中括号中出现的字符一般都代表本身的含义，中括号中的@+的+号不是出现1次或多次的意思，就是一个单纯的字符+，而中括号外的+就表示的是出现1次或多次的意思
let reg9 = /^[@+]+$/;
console.log(reg9.test("@@")); // true
console.log(reg9.test("@+")); // true

// 中括号有例外情况，如[\d]，依然表示的是0-9数字
let reg10 = /^[\d]$/;
console.log(reg10.test("d")); // false
console.log(reg10.test("\\")); // false
console.log(reg10.test("9")); // true

// 中括号中不存在多位数的情况
let reg11 = /^[18]$/;
console.log(reg11.test("1")); // true
console.log(reg11.test("8")); // true
console.log(reg11.test("18")); // false

// 常用正则表达式
// 1. 验证是否为有效数字
/**
 * 规则分析：
 *  1. 可能出现也可能不出现+-号；规则是：[+-]?或(+|-)?
 *  2. 如果是一位数，0-9都可以。如果是多位数字，首位不能是0; 规则是：(\d|([1-9]\d+))
 *  3. 小数部分可能有也可能没有，如果有，必须是小数点+数字的形式；规则是：(\.\d+)?
 */

let reg12 = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
console.log(reg12.test("1"));
