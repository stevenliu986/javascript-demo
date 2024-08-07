/* console.log(a); // undefined
var a = 12;
var b = a;
b = 13;
console.log(a);
console.log(c); // 会报错 ReferenceError*/

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
/* var i = 20;
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

var n = 0;
function a() {
  var n = 10;
  function b() {
    n++;
    console.log(n);
  }
  b();
  return b;
}
 
var c = a();
c();
console.log(n);

var a = 10,
  b = 11,
  c = 12;
function test(a) {
  a = 1;
  var b = 2;
  c = 3;
}

test(10);
console.log(a);
console.log(b);
console.log(c); 

var a = 4;
function b(x, y, a) {
  console.log(a);
  arguments[2] = 10;
  console.log(a);
}
a = b(1, 2, 3);
console.log(a);


var foo = "hello";
(function (foo) {
  console.log(foo);
  var foo = foo || "world";
  console.log(foo);
})(foo);
console.log(foo);
*/

// var a = 1;
// function fn(a) {
//   /*
//     形参赋值：a = 1
//     变量提升：var a（无效）。function a...;声明无效，但是需要给a赋值为函数，即a = function...;
//   */
//   console.log(a);
//   var a = 2;
//   function a() {}
//   console.log(a);
// }
// fn(a);

var a = 0,
  b = 0;
function A(a) {
  A = function b() {
    alert(a + b++);
  };
  alert(a++);
}
A(1);
A(2);

/**
 * 变量提升：
 *  a
 *  b
 *  A -> AF0 ("A = function b() {
                            alert(a + b++);
                          };
                          alert(a++);"
    代码执行：
      a -> 0
 *    b -> 0
      A -> BF0
 */
