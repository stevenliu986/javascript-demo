/* console.log(a); // undefined
var a = 12;
var b = a;
b = 13;
console.log(a);
console.log(c); // 会报错 */

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
*/

var foo = "hello";
(function (foo) {
  console.log(foo);
  var foo = foo || "world";
  console.log(foo);
})(foo);
console.log(foo);
