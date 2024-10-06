// 3.5 操作符

// 3.5.1 一元操作符

// 递增/递减操作符
// 无论使用前缀递增还是前缀递减操作符，变量的值都会在语句被求值之前改变。
let age = 29;
let anotherAge = --age + 2;
console.log(age); // 28
console.log(anotherAge); // 30

// 前缀递增和递减在语句中的优先级是相等的，因此会从左到右依次求值。比如：
{
    let num1 = 2;
    let num2 = 20;
    let num3 = --num1 + num2;
    let num4 = num1 + num2;
    console.log(num3); // 21
    console.log(num4); // 21
}

// 递增和递减的后缀版语法一样（分别是++和--），只不过要放在变量后面。后缀版与前缀版的主要
// 区别在于，后缀版递增和递减在语句被求值后才发生。
{
    let num1 = 2;
    let num2 = 20;
    let num3 = num1-- + num2;
    let num4 = num1 + num2;
    console.log(num3); // 22
    console.log(num4); // 21
}

// 这4 个操作符可以作用于任何值，注意数据类型的不同
{
    let s1 = "2";
    let s2 = "z";
    let b = false;
    let f = 1.1;
    let o = {
        valueOf() {
            return -1;
        }
    };
    s1++; // 值变成数值3
    s2++; // 值变成NaN
    b++; // 值变成数值1
    f--; // 值变成0.10000000000000009（因为浮点数不精确）
    o--; // 值变成-2
}

// 一元加和减
{
    let s1 = "01";
    let s2 = "1.1";
}