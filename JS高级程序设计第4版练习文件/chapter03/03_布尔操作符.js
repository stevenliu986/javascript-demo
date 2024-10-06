// 逻辑非：逻辑非操作符首先将操作数转换为布尔值，然后再对其取反。
console.log(!false); // true
console.log(!"blue"); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!""); // true
console.log(!12345); // false
// 逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个叹号（!!），相当于调用了转型函
// 数Boolean()。
console.log(!!"blue"); // true
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!""); // false
console.log(!!12345); // true

// 逻辑与：逻辑与操作符由两个和号（&&）表示，应用到两个值。
{
    let found = true;
    let result = (found && someUndeclaredVariable); // 这里会出错，因为someUndeclaredVariable未事先声明
    console.log(result); // 不会执行这一行
}
{
    let found = false;
    let result = (found && someUndeclaredVariable); // 不会出错
    console.log(result); // 会执行
}