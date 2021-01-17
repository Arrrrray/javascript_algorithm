/*
 * @Author: junchao
 * @Date: 2021-01-16 14:51:54
 * @LastEditTime: 2021-01-16 18:19:16
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/ali.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 为优化性能，对埋点上报逻辑进行封装：

// 已知埋点上报到服务端时你会调用如下的 API：
function reportLog(logs: string[]): promise {
  // 异步上报埋点数组到服务端，返回一个 Promise 实例，可自己模拟实现
}

// 需求是实现一个 wrapLog 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：
function wrapLog(n: number): function {
  // 代码逻辑
  return function () {
    // 代码逻辑
    // reportLog(list);
  };
}

// 调用代码：
const log = wrapLog(5);
log("1");
log("2");
log("3");
log("4");
log("5"); // 此时将 ['1', '2', '3', '4', '5'] 上报到服务端

// 扩展一：增加一个参数，支持 m 秒内没有打埋点日志时，自动上报一次
// 扩展二：考虑页面关闭再打开时，继续上次暂存的日志进行上报
// 扩展三：log 方法也返回 Promise 实例，在服务端处理成功后执行 then 方法，如下面所示：

const log = wrapLog(5);
log("1").then(() => {
  console.log("report 1 success");
});
log("2").then(() => {
  console.log("report 2 success");
});
log("3").then(() => {
  console.log("report 3 success");
});
log("4").then(() => {
  console.log("report 4 success");
});
log("5").then(() => {
  console.log("report 5 success");
}); // 在 ['1', '2', '3', '4', '5'] 上报到服务端完成后，再同时打印 5 个日志
// PS: 可以根据自己的思路进行抽象封装，来提高易用性