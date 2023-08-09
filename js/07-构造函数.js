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
