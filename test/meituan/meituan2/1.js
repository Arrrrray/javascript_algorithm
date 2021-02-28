/*
 * @Author: junchao
 * @Date: 2021-02-22 20:14:45
 * @LastEditTime: 2021-02-22 20:14:58
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: \javascript_algorithm\test\meituan\meituan2\1.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
var a = 12;
var obj = {
    a: 45,
    getA: function() {
        console.log(this.a);
        var f = function () {
            console.log(this.a);
        }
        f();
    }
}

obj.getA();