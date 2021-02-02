/*
 * @Author: junchao
 * @Date: 2021-02-01 19:38:17
 * @LastEditTime: 2021-02-01 19:44:19
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/meituan/2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 将第一行转换为第二行
// 请读取<highLight>重要通知</highLight>SEF22323
// 请读取<span class="highLight">重要通知</span>SEF22323
function formatStr(str) {
  const reg1 = /<highLight>/g
  const str1 = `<span class="highLight">`;
  const reg2 = /<\/highLight>/g
  const str2 = `</span>`;
  let result = str.replace(reg1, str1);
  result = result.replace(reg2, str2);
  return result;
}
console.log(formatStr(`请读取<highLight>重要通知</highLight>SEF22323`));
