/*
 * @Author: junchao
 * @Date: 2021-01-16 18:11:42
 * @LastEditTime: 2021-01-17 23:48:08
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/ali2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 扩展一：增加一个参数，支持 m 秒内没有打埋点日志时，自动上报一次

// 为优化性能，对埋点上报逻辑进行封装：

// 已知埋点上报到服务端时你会调用如下的 API：
function reportLog2(logs) {
  // 异步上报埋点数组到服务端，返回一个 Promise 实例，可自己模拟实现
  return new Promise((resolve, reject) => {
    // 处理logs数据
    resolve({
      "code": 0,
      "message": `请求成功, ${logs} 已经上传到服务端`,
    });
  })
    .catch((err) => {
      throw new Error(err);
    })
}

// 需求是实现一个 wrapLog 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：
function wrapLog2(n, m) {
  // 代码逻辑
  // 初始化一个list变量，存储每次调用wrapLog2上传的日志数据
  let list = [];

  // 封装调用api请求
  function postLogs() {
    if (list.length > 0) {
      reportLog2(list).then((res) => {
        // 打印出来日志接口返回信息
        console.log(res);
        // 日志成功发送到服务端之后清除定时器
        clearTimer();
        // 日志成功发送到服务端之后清空list
        clearList();
      });
    }
  }

  // 封装清空list方法
  function clearList() {
    list = [];
  }

  // 设置定时器，在m秒内，没有打埋点日志是，就自动上报一次
  let timer;

  // 封装设置定时器方法
  function setTimer() {
    if (timer) return;
    timer = setTimeout(() => {
      postLogs();
    }, m * 1000);
  }
  // 封装清除定时器方法
  function clearTimer() {
    timer = null;
  }

  return function () {
    // 代码逻辑
    // 将变量存到list中
    list.push(arguments[0]);
    // 当传入的变量数量等于n时，将这n条日志发送到服务端
    console.log(`当前list中数据:${list}`);
    // 设置定时器，在m秒内，没有打埋点日志是，就自动上报一次
    setTimer();
    if (list.length == n) {
      postLogs();
    }
  };
}

// 调用代码：
const log2 = wrapLog2(5, 3);
log2("1");
log2("2");
log2("3");
log2("4");
log2("5"); // 此时将 ['1', '2', '3', '4', '5'] 上报到服务端
log2("5"); // 3s内没有打埋点日志，自动将 ['5'] 上报到服务端