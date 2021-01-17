"use strict";

/*
 * @Author: junchao
 * @Date: 2021-01-12 20:17:40
 * @LastEditTime: 2021-01-17 19:29:55
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/test.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
var timeout = function timeout(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
};

var ajax1 = function ajax1() {
  return timeout(2000).then(function () {
    console.log('1');
    return 1;
  });
};

var ajax2 = function ajax2() {
  return timeout(1000).then(function () {
    console.log('2');
    return 2;
  });
};

var ajax3 = function ajax3() {
  return timeout(2000).then(function () {
    console.log('3');
    return 3;
  });
};

var mergePromise = function mergePromise(ajaxArray) {
  // 在这里实现你的代码
  // 保存数组中的函数执行后的结果
  var data = []; // Promise.resolve方法调用时不带参数，直接返回一个resolved状态的 Promise 对象。

  var sequence = Promise.resolve();
  ajaxArray.forEach(function (item) {
    // 第一次的 then 方法用来执行数组中的每个函数，
    // 第二次的 then 方法接受数组中的函数执行后返回的结果，
    // 并把结果添加到 data 中，然后把 data 返回。
    // 这里对 sequence 的重新赋值，其实是相当于延长了 Promise 链
    sequence = sequence.then(item).then(function (res) {
      data.push(res);
      return data;
    });
  }); // 遍历结束后，返回一个 Promise，也就是 sequence， 他的 [[PromiseValue]] 值就是 data，
  // 而 data（保存数组中的函数执行后的结果） 也会作为参数，传入下次调用的 then 方法中。

  return sequence;
};

mergePromise([ajax1, ajax2, ajax3]).then(function (data) {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
}); // 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]