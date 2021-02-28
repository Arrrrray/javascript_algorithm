/*
 * @Author: junchao
 * @Date: 2021-02-20 20:33:21
 * @LastEditTime: 2021-02-22 20:14:07
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: \javascript_algorithm\1.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

//  百度二面
// 实现一个高阶函数，

// 基本函数
function add(a, b) {
  return a + b;
}

function addPlus(fn, n) {
  let count = 0;
  return function (...rest) {
    if (count < n) {
      count++;
      // console.log('count->', count)
      // console.log('n->', n)
      return fn(...rest);
    } else {
      return null;
    }
  }
}

let a = addPlus(add, 3);
console.log(a(1, 2));
console.log(a(2, 3));
console.log(a(3, 4));
console.log(a(4, 5));
console.log(a(5, 6));
// const console = a => console.log(a);

// const log = before(3,console);
// log()

// class before{
//   constructor(n,fn){
//     this.n = n,
//     this.fn = fn;
//   }

// }

