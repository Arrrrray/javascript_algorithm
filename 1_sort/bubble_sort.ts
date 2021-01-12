/*
 * @Author: junchao
 * @Date: 2021-01-12 13:33:23
 * @LastEditTime: 2021-01-12 13:41:49
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/1_sort/bubble_sort.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 冒泡排序，从大到小排序
function bubbleSort(params: Array<Number>) {
  for (let i = 0; i < params.length - 1; i++) {
    for (let j = 0; j < params.length - 1; j++) {
      if (params[i] > params[j]) {
        let temp = params[i];
        params[i] = params[j];
        params[j] = temp;
      }
    }
  }
  return params;
}

let a = [8,100,50,22,15,6,1,1000,999,0];
console.log(bubbleSort(a));