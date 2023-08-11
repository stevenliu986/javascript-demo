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
alert(new C1().name + new C2().name + new C3().name);
