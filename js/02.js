let a = 12;
console.log(a.toString()); // '12'
console.log(NaN.toString()); // 'NaN'

let b =
  10 + null + true + {} + [] + undefined + "hello" + null + [] + 10 + false;
/* 
 1. 10 + null (这一步为数学运算) = 10 + Number(null) = 10 + 0 = 10
 2. 10 + true (这一步为数学运算) = 10 + Number(true) = 10 + 1 = 11
 3. 11 + [] = 11 + '' = 11 + '' = '11'，这里[]会先转换为''，这就变成了字符串拼接，所以结果是'11'
 4. '11' + undefined = '11undefined'，字符串拼接
 5. '11undefined' + "hello" = '11undefinedhello'，字符串拼接
 6. '11undefinedhello' + null = '11undefinedhellonull'
 7. '11undefinedhellonull' + [] = '11undefinedhellonull'
 8. '11undefinedhellonull' + 10 = '11undefinedhellonull10'
 9. '11undefinedhellonull10' + false = '11undefinedhellonull10false'
*/
console.log(b); // '11undefinedhellonull10false'
