let person = {
  name: "John",
  age: 21,
  weight: "78kg",
  height: "180cm",
  1: 100,
};

console.log(person.name); // "John"
console.log(person["age"]); // 21
console.log(person[1]); // 100，如果是数字表示键值，则只能使用"对象[属性名]"的形式。

// 删除属性
// 真删除：把属性彻底干掉
delete person[1];
// 假删除：属性还在，值为空
person.weight = null;

let arr = [12, "John", 13];
console.log(arr.length);
console.log(arr[arr.length - 2]); //

let n = [10, 20];
let m = n;
let x = m;
m[0] = 100;
x = [30, 40];
x[0] = 200;
m = x;
m[1] = 300;
n[2] = 400;
console.log(n, m, x);
console.log("==============");
let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };

console.log(a.x);
console.log(b);

let l = 10;
l > 0 && l < 20 ? (console.log(l), l++, console.log(l)) : null;
