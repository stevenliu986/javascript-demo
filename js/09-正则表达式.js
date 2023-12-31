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

// 2. 验证密码
/**
 * 规则分析：密码组成：数字，字母，下划线，密码长度6-16位
 */

let reg13 = /^\w{6,16}$/;

// 3. 验证真实姓名
/**
 * 规则分析：汉字
 *  1. 汉字：/^[\u4E00-\u9FA5]$/
 *  2. 姓名长度：2~10位
 *  3. 有可能是译名，就是还个·的。"尼古拉斯·赵四"
 */
let reg14 = /^[\u4E00-\u9FA5]{2,10}([·\u4E00-\u9FA5]{2,10}){0,2}$/;

// 4. 验证邮箱
/**
 * 规则分析：
 *  1. \w+((-\w+)|(\.\w+))*：开头是数字，字母，下划线（1到多位）
 *  2. @[A-Za-z0-9]+：@后面紧跟着数字，字母（1到多位）
 *  3. ((\.|-)[A-Za-z0-9]+)*：对@后面的域名进行补充，如：多域名：.com.cn，或企业邮箱：xxx@abc-789-def.com.cn
 */
let reg15 =
  /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

// 5. 验证身份证
/**
 * 规则分析：
 *  1. 一共18位，最后一位可能是X
 *  2. 前6位是省市县，中间的8位是出生日期，
 *  3. 最后4位的倒数第一位是校验位（0-9或X），倒数第二位是性别，偶数是女，奇数是男，剩下的两位由算法算出来的
 */
// 小括号的第二个作用是分组捕获
let reg16 = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|X)$/;

reg16.exec("130808198008080523");

// 两种正则表达式创建方式
// 构造函数创建：由于构造函数传递的是字符串，所以需要写两个\代表\。
let reg17 = new RegExp("\\d+", "g"); // 通常不推荐使用这种方法构建正则表达式

// 在正则表达式中，两个斜杠包起来的都是元字符，如下例
let type = "hello";
// 下面的正则表达式本意是使用上面声明的变量。但reg18实际匹配的是：以@开头和结尾，"出现1次到多次，typ匹配一次，e出现1次到多次，"匹配一次
// 如果正则中要包含某个变量的值，则不能使用字面量的方式创建。只能使用构造函数来创建
// 因为它传递的规则是字符串，只有这样才能进行字符串拼接
let reg18 = /^@"+type+"@$/;
console.log(reg18.test("@hello@")); // false

let reg19 = new RegExp("^@" + type + "@$");
console.log(reg19.test("@hello@")); // true
