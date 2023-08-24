// 实现正则捕获的前提是：当前正则要与字符串匹配，如果不匹配，结果就是null

let str1 = "hello2023looking2024waiting2025";
let reg1 = /\d+/;
console.log(reg1.test(str1));
/**
 * 基于exec实现正则的捕获：
 *  1. 捕获的结果是null或一个数组，数组第一项是捕获到的内容，其余项对应小分组本次单独捕获的内容；
 *     index：当前捕猎的内容在字符串中的起始索引；input：原始字符串。
 *  2. 每执行一次exec，只能捕猎到一个符合正则的。默认情况下，无论执行多少次，
 *      返回的结果都是第一个匹配的字符串，其余的捕获不到，这就是正则捕获的懒惰性。
 *  3. 正则捕获的懒惰性的原因：
 *      因为reg.lastIndex默认的起始索引为0，所以每次进行捕获的时候都是从这个位置开始，这也就是为什么每次捕获的结果
 *      都相同的原因。要克服正则捕获的懒惰性，可以添加一个全局匹配修饰符g。
 *  注意下面代码返回结果的变化。如果没有匹配到，则lastIndex就会重置为0
 */

console.log(reg1.exec(str1)); // [2019...]
console.log(reg1.lastIndex); // 0

// 添加全局匹配修饰符g
reg1 = /\d+/g;
console.log(reg1.exec(str1)); // [2023...]
console.log(reg1.lastIndex); // 9
console.log(reg1.exec(str1)); // [2024...]
console.log(reg1.lastIndex); // 20
console.log(reg1.exec(str1)); // [2025...]
console.log(reg1.lastIndex); // 31
console.log(reg1.exec(str1)); // null
console.log(reg1.lastIndex); // 0

// 需求：编写一个方法execAll一次性的将所有匹配的结果都捕获到。手写的match方法
// 这个方法可以使用字符串上的一个方法match替代，语法：字符串.match(正则)
~(function () {
  // str: 要匹配的字符串
  function executeAll(str = "") {
    // 进来后，要先对正则进行验证，看带没带全局修饰符g，如果没带，则下面的while循环就是成为死循环
    if (!this.global) {
      // 没带全局修饰符g，就将第一个匹配的字符串返回
      return this.exec(str);
    }
    // this: RegExp的实例
    let arr = [],
      result = this.exec(str);
    while (result) {
      arr.push(result[0]);
      result = this.exec(str);
    }
    return arr;
  }
  RegExp.prototype.execAll = executeAll;
})();

// 分组捕获
let str2 = "130808198008080523";
let reg2 = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(?:\d|X)$/; // 最后一个小分组添加了?:表示只匹配不捕获。
console.log(reg2.exec(str2));
console.log(str2.match(reg2));
// 返回结果：第一项是大正则匹配捕获的结果。其余项：每个小分组单独匹配捕获的结果

// 需求：既要捕获{数字}，也要捕获到单独的数字。如：第一次找到{0}，还需要单独获取0
let str3 = "{0}年{1}月{3}日";
let reg3 = /\{(\d+)\}/g;
console.log(str3.match(reg3)); // 返回的结果只捕获到了{0},{1},{3}。
// 多次匹配的情况下，match只能把大正则匹配的内容获取到，小分组匹配的信息无法获取。
let arrBig = [],
  arrSmall = [],
  result = reg3.exec(str3);
while (result) {
  let [big, small] = result;
  arrBig.push(big);
  arrSmall.push(small);
  result = reg3.exec(str3);
}

console.log(arrBig, arrSmall);

// 分组引用：就是通过“\数字”的形式让其和对应分组出现一模一样的内容。例：([a-zA-Z])\1
let str4 = "book";
let reg4 = /^[a-zA-Z]([a-zA-Z])\1[a-zA-Z]$/;
console.log(reg4.test("hook")); // true 传入的字符串长度必须是4。
console.log(reg4.test("toot")); // true
console.log(reg4.test("come")); // false

// 正则捕获的贪婪性：默认情况下，正则捕获的时候，是按照当前正则所匹配的最长结果来获取的
let str5 = "hello2023@2024world";
let reg5 = /\d+/g;
