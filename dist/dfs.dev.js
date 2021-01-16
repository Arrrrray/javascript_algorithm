"use strict";

/*
 * @Author: junchao
 * @Date: 2021-01-13 18:59:24
 * @LastEditTime: 2021-01-13 19:45:46
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/dfs.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

/**
*             1
*           2   7
*          3   8 9
*         4       10
*        5 6     11 12
*/
var treeData = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 4,
        left: {
          value: 5
        },
        right: {
          value: 6
        }
      }
    }
  },
  right: {
    value: 7,
    right: {
      value: 9,
      right: {
        value: 10,
        left: {
          value: 11
        },
        right: {
          value: 12
        }
      }
    },
    left: {
      value: 8
    }
  }
};
/**
 * 深度优先遍历
 */

var dfs = function dfs(tree) {
  if (!tree.value) {
    console.log('请输入正确数据结构');
    return;
  }

  var arr = [];
  var queue = [];
  queue.push(tree);
  arr.push(tree.value);
  Array.from(tree).forEach(function (childNode) {
    queue = queue.concat(dfs(childNode));
  });
  return arr.join(',');
};

var result = dfs(treeData);
console.log(result); //1，2，3，4，5，6，7，8，9，10，11，12