/*
 * @Author: junchao
 * @Date: 2021-01-23 12:57:28
 * @LastEditTime: 2021-01-23 13:20:53
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/interview_algorithm/1.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 对一个数字每3位添加一个逗号
function addComma(number) {
  // 传入的不是数字
  if (number === null) return;
  // 将数字转化为字符串
  let str = parseInt(number).toString();
  // 初始化一个空数组，存储需要添加逗号的字符串部分
  let arr = [];
  while (str.length > 3) {
    arr.push(str.slice(-3));
    // slice方法返回的是一个新的字符串，不会改变原字符串
    str = str.slice(0,-3);
  }
  // 将最后不足3位的字符串放入到数组中
  arr.push(str);
  return arr.reverse().join(',');
}

let number = 1000100100010001;
console.log(addComma(number));