/*
 * @Author: junchao
 * @Date: 2021-02-23 20:42:11
 * @LastEditTime: 2021-02-23 20:52:16
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: \javascript_algorithm\test\test.dart
 * @可以输入预定的版权声明、个性签名、空行等
 */

final Map obj = { "a": 1, "b": 23, "c": 21, "d": 38, "e": 19, "f": 5 };
main(obj) {
  var a;
  var b;
obj.entries.forEach((item)=>{
    if (item[1] > b) {
      a = item[0];
      b = item[1];
    }
  });
  print({a:b});
}