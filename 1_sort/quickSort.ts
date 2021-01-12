/*
 * @Author: junchao
 * @Date: 2021-01-12 16:06:17
 * @LastEditTime: 2021-01-12 16:31:22
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/1_sort/quickSort.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */


// function quickSort(params: Array<Number>) {

//   function sort(left, right) {
//     if (left > right) return;

//     let i = left;
//     let j = right;
//     let temp = params[left];
//     while (i != j) {
//       while (params[j] >= temp && i < j) {
//         j--;
//       }
//       while (params[i] <= temp && i < j) {
//         i++
//       }
//       if (i < j) {
//         let temp = params[i];
//         params[i] = params[j];
//         params[j] = temp;
//       }
//     }
//     params[left] = params[i];
//     params[i] = temp;
//     sort(left, i - 1);
//     sort(i + 1, right);
//   }
//   sort(0, params.length - 1);
//   return params;
// }


function quickSort(arr) {
  if (arr.length <= 1) { return arr; }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

let arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]

console.log(quickSort(arr));