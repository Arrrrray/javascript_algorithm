/*
 * @Author: junchao
 * @Date: 2021-02-08 20:39:06
 * @LastEditTime: 2021-02-08 21:26:00
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/baidu/test.js
 * @可以输入预定的版权声明、个性签名、空行等
 */


function delay(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, number);
  });
}

function promiseAll(list) {
  return new Promise((resolve, reject) => {
    let result = [];
    let flag = 0;
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      item.then(res => {
        result[i] = res;
        flag++;
        if (flag == list.length) {
          resolve(result);
        }
      }).catch(err => {
        reject(err);
      })
    }

  })
}

// async function getList(){
//   let res = await getListApi();
//   res
// }

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

function getSameItems(arr1, arr2) {
  if (arr1.length <= 0 || arr2.length <= 0) {
    return "请输入正确的测试数据";
  }
  let result = [];
  arr1.forEach(element => {
    let i = arr2.indexOf(element);
    if (i != -1) {
      result.push(element);
      arr2.splice(i, 1);
    }
  });
  return result;
}

console.log(getSameItems(arr1, arr2));

function getSameItems2(arr1, arr2) {
  if (arr1.length <= 0 || arr2.length <= 0) {
    return "请输入正确的测试数据";
  }
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (element < arr2[i]) {
      return;
    }
    if (element > arr2[i]) {

    }

  }
}



