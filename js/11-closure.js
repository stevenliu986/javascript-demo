function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 5000);
}

wait("Hello");

// 闭包就是能够读取其他函数内部变量的函数
function foo01() {
  var privateCounter = 0;
  function counter(num) {
    return (privateCounter += num);
  }
  return counter;
}

const bar = foo01();
console.log(bar(2));

const obj01 = { name: "John", age: 23, address: "Beijing" };

Object.keys(obj01);
Object.prototype.hasOwnProperty(obj01);

[1].sort((a, b) => a - b);

function getMaxNumber(arr) {
  if (arr.length === 0) {
    return -1;
  }

  return arr.sort((a, b) => b - a)[0];
}

const arr01 = [];
console.log(getMaxNumber(arr01));

const obj = {
  name: "我是对象的name",
  good: function () {
    // this.name = "我的对象中函数的name";
    const obj01 = {
      name: "我是函数中的name",
      getName: () => {
        console.log(this.name);
      },
    };
    obj01.getName();
  },
};

obj.good();
