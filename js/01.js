console.log(isNaN(10)); // false
console.log(isNaN("10")); // false
console.log(isNaN("AA")); // true

console.log(Number("12.5")); // 12.5
console.log(Number("12.5.5")); // NaN
console.log(Number("")); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(isNaN(false)); // false
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number({ name: 10 })); // NaN
console.log(Number({})); // NaN
console.log(Number([])); // 0
console.log(Number([12])); // 12
console.log(Number([12, 13])); // NaN

const str = "12.5px";
console.log(parseInt(str)); // 12
console.log(parseFloat(str)); // 12.5
console.log(parseFloat("width: 12px")); // NaN
console.log([].toString()); // ''
