/*
 * @Author: junchao
 * @Date: 2021-02-07 12:59:29
 * @LastEditTime: 2021-02-07 16:05:00
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/js.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
function Foo() {
  getName = function () { console.log(1); };
  return this;
}
Foo.getName = function () { console.log(2);};
Foo.prototype.getName = function () { console.log(3);};
var getName = function () { console.log(4);};
function getName() { console.log(5);}

//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo().getName();



// var getName;
// function getName() { console.log(5);}
// function Foo() {
//     getName = function () { console.log(1); };
//     return this;
// }
// Foo.getName = function () { console.log(2);};
// Foo.prototype.getName = function () { console.log(3);};
// getName = function () { console.log(4);};

// Foo.getName();2
// getName();4
// Foo().getName();1
// getName();1
// new Foo().getName();3