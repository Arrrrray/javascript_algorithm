/*
 * @Author: junchao
 * @Date: 2021-02-22 20:15:15
 * @LastEditTime: 2021-02-22 20:15:50
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: \javascript_algorithm\test\meituan\meituan2\2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 请实现 Array 的 myReduce 原型方法

// console.log([1,2,3,4].myReduce(
//     (sum, item, index, arr) => {
//         return sum + item;
//     }, 0))  // 10

function myReduce(fn,n){
  // 获取到数组
  this;
  let sum = n?n:this[0];
  for(let i=0;i<this.length;i++){
      sum = fn(sum,this[i],i,this);
  }
  return sum;
}