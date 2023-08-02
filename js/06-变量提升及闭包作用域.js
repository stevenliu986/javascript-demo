console.log(a); // undefined
var a = 12;
var b = a;
b = 13;
console.log(a);
console.log(c); // 会报错

// 闭包作用域练习题1
/* var i = 5;
function fn(i) {
  return function (n) {
    console.log(n + ++i);
  };
}
var f = fn(1);
f(2);
fn(3)(4);
fn(5)(6);
f(7);
console.log(i); */

// 闭包作用域练习题2
var i = 20;
function fn() {
  i -= 2;
  return function (n) {
    console.log(++i - n);
  };
}
var f = fn();
f(1);
f(2);
fn()(3);
fn()(4);
f(5);
console.log(i);
