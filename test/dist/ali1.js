/*
 * @Author: junchao
 * @Date: 2021-01-16 17:00:30
 * @LastEditTime: 2021-01-16 17:15:51
 * @LastEditors: junchao
 * @Description:
 * @FilePath: /javascript_algorithm/test/ali1.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 为优化性能，对埋点上报逻辑进行封装：
// 已知埋点上报到服务端时你会调用如下的 API：
function reportLog1(logs) {
    // 异步上报埋点数组到服务端，返回一个 Promise 实例，可自己模拟实现
    return new Promise(function (resolve, reject) {
        resolve({
            "code": 0,
            "message": "\u8BF7\u6C42\u6210\u529F, " + logs + " \u5DF2\u7ECF\u4E0A\u4F20"
        });
    })
        .then(function () { console.log(logs); })["catch"](function (err) {
        throw new Error(err);
    });
}
// 需求是实现一个 wrapLog 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：
function wrapLog1(n) {
    // 代码逻辑
    return function (list) {
        // 代码逻辑
        // 最大并发请求数
        // const maxRequestNumber = 5;
        // // 请求队列
        // let requestStack = [];
        // while (requestStack.length < maxRequestNumber) {
        //   requestStack.push(reportLog(logs));
        // }
        return reportLog1(list);
    };
}
// 调用代码：
var log1 = wrapLog1(5);
log1("1");
// log1("2");
// log1("3");
// log1("4");
// log1("5"); // 此时将 ['1', '2', '3', '4', '5'] 上报到服务端
