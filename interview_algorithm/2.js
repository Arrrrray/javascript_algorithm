/*
 * @Author: junchao
 * @Date: 2021-01-23 13:30:12
 * @LastEditTime: 2021-01-24 19:10:55
 * @LastEditors: junchao
 * @Description:
 * @FilePath: /javascript_algorithm/interview_algorithm/2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 给定一个字符串，找出其中无重复字符的最长子字符串

function findLongestSubString(str) {
  // 存放无重复的子串
  let noRepeatStr = '';
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    let index = noRepeatStr.indexOf(element);
    if (index == -1) {
      noRepeatStr += element;
    } else {
      noRepeatStr = noRepeatStr.substr(index + 1) + element;
    }
  }
  return noRepeatStr.length;
}

let str = 'abcabaaabcd';
console.log(findLongestSubString(str));