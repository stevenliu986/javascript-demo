/* 
  方案一：循环原有数组中的每一项，每拿到一项就往新数组中添加，
  添加之前验证新数组中是否存在这一项，不存在再增加 
*/
let arr = [1, 2, 3, 1, 2, 1, 2, 2, 1, 1, 2, 3, 2, 1];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  if (newArr.includes(item)) {
    continue;
  }
  newArr.push(item);
}
console.log(newArr);
