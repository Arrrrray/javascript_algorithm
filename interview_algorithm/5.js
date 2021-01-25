/*
 * @Author: junchao
 * @Date: 2021-01-24 19:29:42
 * @LastEditTime: 2021-01-24 20:04:13
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/interview_algorithm/5.js
 * @可以输入预定的版权声明、个性签名、空行等
 */


function returnMaxPrice(n, m, arr) {
  // n:工厂生产的产品各个数
  // m:客户数
  // arr:m个客户的出价
  // 公司获得的最大利润
  let maxValue = 0;
  // 公司最高定价
  let max = 0;
  // 对客户报价进行升序排列
  arr = arr.sort((a, b) => a - b);

  // 如果供小于求，截取出出价高的人
  if (n < m) {
    arr = arr.slice(m - n);
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i] * (arr.length - i)) {
      max = arr[i] * (arr.length - i);
      maxValue = arr[i];
    }

  }
  return maxValue;

}

let n = 3;
let m = 4;
let arr = [5, 6, 9, 7];
console.log(returnMaxPrice(n, m, arr));