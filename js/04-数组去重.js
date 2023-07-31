/* 
  方案一：循环原有数组中的每一项，每拿到一项就往新数组中添加，
  添加之前验证新数组中是否存在这一项，不存在再增加 
*/
let arr = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];

let newArr = [];
arr.forEach((item) => {
  if (newArr.includes(item)) {
    return;
  }
  newArr.push(item);
});

console.log(newArr);

// 方案二：使用splice方法去重(不可行，有数组塌陷问题，需要在去重的时候，人为将索引更改来避免数组塌陷问题)
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--;
    }
  }
  return arr;
}

console.log(arr);
