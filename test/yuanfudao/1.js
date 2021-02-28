/*
 * @Author: junchao
 * @Date: 2021-02-24 16:43:39
 * @LastEditTime: 2021-02-25 13:30:03
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/yuanfudao/1.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const a = new Promise((resolve, reject) => {

  console.log('promise1')

  resolve()

}).then(() => {

  console.log('promise2')

})

setTimeout(() => {

  console.log('timeout')

})

const b = new Promise(async (resolve, reject) => {

  await a

  console.log('after1')

  await b

  console.log('after2')

  resolve()

})

console.log('end')