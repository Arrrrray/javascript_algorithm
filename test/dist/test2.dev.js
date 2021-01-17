"use strict";

/*
 * @Author: junchao
 * @Date: 2021-01-17 18:04:39
 * @LastEditTime: 2021-01-17 23:46:29
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/test2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 为优化性能，对埋点上报逻辑进行封装：
// 已知埋点上报到服务端时你会调用如下的 API：
function reportLog4(logs) {
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
} // 需求是实现一个 wrapLog4 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：


function wrapLog4(n, m) {
  // 代码逻辑
  // 代码逻辑
  // 初始化一个list变量，存储每次调用wrapLog2上传的日志数据
  var list = []; // 封装调用api请求

  function postLogs(rList) {
    if (list.length > 0) {
      reportLog4(list).then(function (res) {
        // 打印出来日志接口返回信息
        console.log(res); // 日志成功发送到服务端之后清除定时器

        clearTimer(); // 日志成功发送到服务端之后清空list

        clearList(); // rList.forEach(item => item);
        // clearRList();
      });
    }
  } // 封装清空list方法


  function clearList() {
    list = [];
  } // 封装清空rList方法


  function clearRList() {
    rList = [];
  } // 设置定时器，在m秒内，没有打埋点日志是，就自动上报一次


  var timer; // 封装设置定时器方法

  function setTimer() {
    if (timer) return;
    timer = setTimeout(function () {
      postLogs();
    }, m * 1000);
  } // 封装清除定时器方法


  function clearTimer() {
    timer = null;
  }

  return function () {
    // 代码逻辑
    // 将变量存到list中
    list.push(arguments[0]); // 当传入的变量数量等于n时，将这n条日志发送到服务端

    console.log("\u5F53\u524Dlist\u4E2D\u6570\u636E:".concat(list)); // 设置定时器，在m秒内，没有打埋点日志时，就自动上报一次

    setTimer(m);
    var rList = []; // return new Promise((resolve, reject) => {
    //   // 我个人的理解，resolve是一个function，打印出来console.log("report 1 success")的一个方法
    //   // 创建一个rList将resolve存起来，等接口调用成功之后再打印出来日志
    //   // 但是打印出来的顺序不对
    //   rList.push(new Promise(resolve));
    //   if (list.length == n) {
    //     postLogs(rList);
    //   }
    // })

    return new Promise(function (resolve, reject) {
      if (list.length == n) reportLog4(list).then(console.log).then(resolve);
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