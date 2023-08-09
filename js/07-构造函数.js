function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  // return { x: "123" }; // 不能人为返回一个引用类型的值
}
/**
 * new CreatePerson()执行和普通函数执行的联系
 *  1. new这种执行方式叫做“构造函数执行模式”，此时的CreatePerson不仅仅是一个函数名，被称为“类”，
 *    而返回的结果（赋值给person1的）是一个对象，称为“实例”。而函数体中出现的this都是这个实例。
 * 注意：如果手动return一个基本值，对返回的实例没有影响。如果手动return的是一个引用类型的值，会把默认返回
 *      实例给替换掉，所以在构造函数模式执行下，一般都不要手动写return，防止把返回的实例给替换掉。
 */

let person1 = new Person("John", 21);
console.log(person1 instanceof CreatePerson);
/**
 * 基本数据类型在JS中的特殊性
 *  1. 一定是看书所属类的实例
 *  2. 但是不一定是对象数据类型的
 */
console.log(1 instanceof Number); // false

// 字面量创建方式（也是Number类的实例，可以调用内置的公有方法
let n = 10;
console.log(n.toFixed(2));
console.log(typeof n); // "number"
// 构造函数创建模式（创建出来的实例是对象类型的）
let m = new Number("10");
console.log(typeof m); // "object"

/**
 * instanceof：用来检测某个实例是否属于这个类，实例 instanceof 类，属于返回TRUE，不属于返回FALSE
 * 局限性：
 *  1. 要求检测的实例必须是对象数据类型的，基本数据类型的实例是无法检测出来的
 */

function Fn(n) {
  let m = 10;
  this.total = n + m;
  this.say = function () {
    console.log(this.total);
  };
}

let f1 = new Fn(10);
let f2 = new Fn(20);
let f3 = new Fn(); // new的时候不论是否带有小括号，都相当于把Fn执行了，也创建了对应的实例
console.log(f1.m); // undefined
console.log(f1.n); // undefined
console.log(f1.total); // 20
f2.say(); // 30
console.log(f1 === f2); // false
