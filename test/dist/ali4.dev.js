"use strict";

/*
 * @Author: junchao
 * @Date: 2021-01-17 18:04:39
 * @LastEditTime: 2021-01-18 00:17:03
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/ali4.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 为优化性能，对埋点上报逻辑进行封装：
// 已知埋点上报到服务端时你会调用如下的 API：
function reportLog4(logs) {
  // 异步上报埋点数组到服务端，返回一个 Promise 实例，可自己模拟实现
  return new Promise(function (resolve, reject) {
    // 处理logs数据
    resolve({
      code: 0,
      message: "\u8BF7\u6C42\u6210\u529F, ".concat(logs, " \u5DF2\u7ECF\u4E0A\u4F20\u5230\u670D\u52A1\u7AEF")
    });
  })["catch"](function (err) {
    throw new Error(err);
  });
} // 需求是实现一个 wrapLog4 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：


function wrapLog4(n, m) {
  // 代码逻辑
  // 初始化一个list变量，存储每次调用wrapLog2上传的日志数据
  var list = []; // 初始化一个变量r,用来保存resolve的状态

  var r; // 初始化一个变量p，是一个promise，因为log会调用n次，但是api接口调用一次，保存这一次的promise

  var p = new Promise(function (resolve, reject) {
    if (r == undefined) {
      r = resolve;
    }
  });
  return function () {
    // 代码逻辑
    // 将变量存到list中
    list.push(arguments[0]);
    console.log("\u5F53\u524Dlist\u4E2D\u6570\u636E:".concat(list));

    if (list.length == n) {
      reportLog4(list).then(function (value) {
        console.log(value);
        r(value);
      });
    }

    return new Promise(function (resolve, reject) {
      return p.then(resolve);
    });
  };
} // 调用代码：
// log 方法也返回 Promise 实例，在服务端处理成功后执行 then 方法，如下面所示：


var log4 = wrapLog4(5, 3);
log4("1").then(function () {
  console.log("report 1 success");
});
log4("2").then(function () {
  console.log("report 2 success");
});
log4("3").then(function () {
  console.log("report 3 success");
});
log4("4").then(function () {
  console.log("report 4 success");
});
log4("5").then(function () {
  console.log("report 5 success");
}); // 在 ['1', '2', '3', '4', '5'] 上报到服务端完成后，再同时打印 5 个日志