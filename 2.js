/*
 * @Author: junchao
 * @Date: 2021-02-23 20:27:57
 * @LastEditTime: 2021-02-23 20:55:28
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: \javascript_algorithm\2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
let a = { a: 1, b: 23, c: 21, d: 38, e: 19, f: 5 }

function func(obj) {
  let a = '';
  let b = 0;
  for (let item in obj) {
    if (obj[item] > b) {
      a = item;
      b = obj[item];
    }
  }

  return { [a]: b };

}

console.log(func(a));

// 补充 function，return最大的键值对： { d: 38 }