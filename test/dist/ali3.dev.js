"use strict";

/*
 * @Author: junchao
 * @Date: 2021-01-17 13:17:55
 * @LastEditTime: 2021-01-17 23:48:35
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/ali3.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 扩展二：考虑页面关闭再打开时，继续上次暂存的日志进行上报
// 为优化性能，对埋点上报逻辑进行封装：
// 已知埋点上报到服务端时你会调用如下的 API：
function reportLog2(logs) {
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
} // 封装将数据存储到localStorage中的方法


function addStorage(list) {
  window.localStorage.setItem("logs", list);
} // 封装从localStorage中取logs数据的方法


function getStorage() {
  return window.localStorage.getItem("logs");
} // 封装清除localStorage中logs数据的方法


function clearStorage() {
  window.localStorage.setItem("logs", []);
} // 页面启动的时候检查localStorage中logs是否有数据，有数据的话调用上传日志的接口，进行日志的上传


window.onload = function () {
  var tempLogs = getStorage();

  if (tempLogs.length > 0) {
    // 直接调用上传日志的接口，将日志数据上传到服务器
    reportLog2(tempLogs).then(function (res) {
      // 打印出来日志接口返回信息
      console.log(res);
      window.alert(res);
    }); // 上传成功之后清除localStorage中数据

    clearStorage();
    clearList();
  }
}; // window.addEventListener('beforeunload', (event) => {
//   // Cancel the event as stated by the standard.
//   event.preventDefault();
//   // Chrome requires returnValue to be set.
//   event.returnValue = '';
// });
// 需求是实现一个 wrapLog 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：


function wrapLog3(n, m) {
  // 代码逻辑
  // 初始化一个list变量，存储每次调用wrapLog2上传的日志数据
  var list = []; // 设置定时器，在m秒内，没有打埋点日志是，就自动上报一次

  var timer; // 封装调用api请求

  function postLogs() {
    if (list.length > 0) {
      reportLog2(list).then(function (res) {
        // 打印出来日志接口返回信息
        console.log(res);
      }); // 日志成功发送到服务端之后清除定时器

      clearTimer(); // 日志成功发送到服务端之后清空list

      clearList();
    }
  } // 封装清空list方法


  function clearList() {
    list = [];
  } // 封装设置定时器方法


  function setTimer() {
    if (timer) return;
    timer = setTimeout(function () {
      postLogs();
    }, m * 1000);
  } // 封装清除定时器方法


  function clearTimer() {
    timer = null;
  } // // 监听页面状态
  // window.document.addEventListener("visibilitychange", function () {
  //   console.log(11111111111, window.document.visibilityState);
  //   // Modify behavior...
  //   // 监听页面状态，可能的取值有
  //   // 'visible' : 此时页面内容至少是部分可见. 即此页面在前景标签页中，并且窗口没有最小化.
  //   // 'hidden' : 此时页面对用户不可见. 即文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于 '锁屏状态' .
  //   // 'prerender' : 页面此时正在渲染中, 因此是不可见的 (considered hidden for purposes of document.hidden).
  //   let windowStatus = window.document.visibilityState;
  //   if (windowStatus == "visible") {
  //     let tempLogs = getStorage();
  //     if (tempLogs.length > 0) {
  //       // 直接调用上传日志的接口，将日志数据上传到服务器
  //       reportLog2(tempLogs).then((res) => {
  //         // 打印出来日志接口返回信息
  //         console.log(res);
  //       });
  //       // 上传成功之后清除localStorage中数据
  //       clearStorage();
  //       clearList();
  //     }
  //   } else if (windowStatus == "hidden") {
  //     // 页面隐藏之后，将list数据存储到storage中
  //     addStorage();
  //     // 清除list数据
  //     clearList();
  //   }
  // });


  return function () {
    // 代码逻辑
    // 将变量存到list中
    list.push(arguments[0]); // 此处选择调用之后直接将数据存在localStorage中，
    // 而不是监听页面时间关闭再将数据存在localStorage中原因是
    // 点击页卡关闭按钮，会触发页面的beforeunload事件，当用户直接用快捷键比如command+w关闭当前页卡，则不会触发beforeunload事件
    // 因此，为了数据的完整性，此处实现选择每打一次买点日志，就将日志数据存储在localStorage中

    addStorage(list); // 当传入的变量数量等于n时，将这n条日志发送到服务端

    console.log("\u5F53\u524Dlist\u4E2D\u6570\u636E:".concat(list)); // 设置定时器，在m秒内，没有打埋点日志是，就自动上报一次

    setTimer();

    if (list.length == n) {
      postLogs();
    }
  };
} // 调用代码：


var log3 = wrapLog3(5, 5); // log3("1");
// log3("2");
// log3("3");
// log3("4");
// log3("5"); // 此时将 ['1', '2', '3', '4', '5'] 上报到服务端
// log3("5"); // 3s内没有打埋点日志，自动将 ['5'] 上报到服务端