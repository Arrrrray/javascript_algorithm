"use strict";

/*
 * @Author: junchao
 * @Date: 2021-01-16 17:00:30
 * @LastEditTime: 2021-01-17 23:47:56
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/ali1.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 基础实现，每5条日志，调用api接口上传一次
// 为优化性能，对埋点上报逻辑进行封装：
// 已知埋点上报到服务端时你会调用如下的 API：
function reportLog1(logs) {
  // 异步上报埋点数组到服务端，返回一个 Promise 实例，可自己模拟实现
  return new Promise(function (resolve, reject) {
    // 处理logs数据
    resolve({
      "code": 0,
      "message": "\u8BF7\u6C42\u6210\u529F, ".concat(logs, " \u5DF2\u7ECF\u4E0A\u4F20\u5230\u670D\u52A1\u7AEF")
    });
  })["catch"](function (err) {
    throw new Error(err);
  });
} // 需求是实现一个 wrapLog 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：


function wrapLog1(n) {
  // 代码逻辑
  // 初始化一个list变量，存储每次调用wrapLog1上传的日志数据
  var list = [];
  return function () {
    // 代码逻辑
    // 将变量存到list中
    list.push(arguments[0]); // 当传入的变量数量等于n时，将这n条日志发送到服务端

    console.log("\u5F53\u524Dlist\u4E2D\u6570\u636E:".concat(list));

    if (list.length == n) {
      reportLog1(list).then(function (res) {
        // 打印出来日志接口返回信息
        console.log(res); // 日志成功发送到服务端之后清空list

        list = [];
      });
    }
  };
} // 调用代码：


var log1 = wrapLog1(5);
log1("1");
log1("2");
log1("3");
log1("4");
log1("5"); // 此时将 ['1', '2', '3', '4', '5'] 上报到服务端

log1("1");
log1("2");
log1("3");
log1("4");
log1("5"); // 此时将 ['1', '2', '3', '4', '5'] 上报到服务端