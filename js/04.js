let arr = [10, 20, 30, 40, 50];

// 克隆数组
let result = arr.slice(0);

// result = arr.slice(-1, 5);
// console.log(result);

// 数组slice方法，考虑下列情况：1. n,m都是负数，2. n>m 3. n, m 都是小数， 4. n，m 都不是有效数字， 5. 如果n,m都大于数组的长度
result = arr.slice(-2, -1); // 倒数来slice数组
console.log(result);
result = arr.slice(5, 2); // 返回空数组
console.log(result);
result = arr.slice(1.2, 5.6); // 会四舍五入到整数，然后再slice
console.log(result);
result = arr.slice("hehe", "haha"); // 返回空数组
console.log(result);
result = arr.slice(20, 90); // 返回空数组
console.log(result);

eval(arr.join("+")); // 数组join的小妙用，可以用eval()来求和
