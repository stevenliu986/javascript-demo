// 第一题
function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  };
}

Fn.prototype.getX = function () {
  console.log(this.x);
};

Fn.prototype.getY = function () {
  console.log(this.y);
};
let f1 = new Fn();
let f2 = new Fn();

console.log(f1.getX === f2.getX); // false
console.log(f1.getY === f2.getY); // true
console.log(f1.__proto__.getY === Fn.prototype.getY); // true
console.log(fl.__proto__.getX === f2.getX); // false
console.log(fl.getX === Fn.prototype.getX); // false
console.log(fl.constructor); // Fn
console.log(Fn.prototype.__proto__.constructor); // Object
f1.getX(); // 100
f1.__proto__.getX(); // undefined
f2.getY(); // 200
Fn.prototype.getY(); // undefined

// 第二题
function Fun() {
  this.a = 0;
  this.b = function () {
    alert(this.a);
  };
}
/* 批量给原型设置属性方法的时候：重构类的原型
    但这会带来一个问题：即重定向后的空间不一定有CONSTRUCTOR属性，这样会导致类和原型机制不完整，
    所以需要手动给新的原型空间设置CONSTRUCTOR属性。
    还有一个问题就是：重定向前，要确保原有原型的堆内存中没有设置属性和方法，因为重定向后，
    原有的属性和方法就会被替换掉，如需克隆到新的原型堆内存中，需要额外的处理。
*/
Fun.prototype = {
  // constructor: Fun,
  b: function () {
    this.a = 20;
    alert(this.a);
  },
  c: function () {
    this.a = 30;
    alert(this.a);
  },
};
var my_fun = new Fun();
my_fun.b(); // 0
my_fun.c(); // 30

// 第三题
function C1(name) {
  if (name) {
    this.name = name;
  }
}
function C2(name) {
  this.name = name;
}
function C3(name) {
  this.name = name || "join";
}
C1.prototype.name = "Tom";
C2.prototype.name = "Tom";
C3.prototype.name = "Tom";
alert(new C1().name + new C2().name + new C3().name); // "Tomundefinedjoin"

// 第四题
function Fn1(num) {
  this.x = this.y = num;
}

Fn1.prototype = {
  x: 20,
  sum: function () {
    console.log(this.x + this.y);
  },
};

let f = new Fn1(10);
console.log(f.sum === Fn1.prototype.sum); // true
f.sum(); // 20
Fn1.prototype.sum(); // NaN
console.log(f.constructor); // Object，按照原型链查找，最终找到Object这个基类

// 第五题
function Fn2() {
  let a = 1;
  this.a = a;
}
Fn2.prototype.say = function () {
  this.a = 2;
};
Fn2.prototype = new Fn2();
let f3 = new Fn2();
Fn2.prototype.b = function () {
  this.a = 3;
};

console.log(f3.a); // 1
console.log(f3.prototype); // undefined
console.log(f3.b); // 这指向的是一个function
console.log(f3.hasOwnProperty("b")); // false
console.log("b" in f3); // true
console.log(f3.constructor == Fn2); // true

// 第六题：编写两个方法实现plus/minus的效果
// let n = 10;
// let m = n.plus(10).minus(5);
// console.log(m); // 15, (10 + 10 - 5)

~(function () {
  // 检测传进来的实参是否是有效数字
  function checkNumber(n) {
    n = Number(n);
    return isNaN(n) ? 0 : n;
  }
  function plus(n) {
    n = checkNumber(n);
    return this + n;
  }
  function minus() {
    n = checkNumber(n);
    return this - n;
  }

  Number.prototype.plus = plus;
  Number.prototype.minus = minus;
})();
