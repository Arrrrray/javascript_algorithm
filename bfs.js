/*
 * @Author: junchao
 * @Date: 2021-01-13 18:50:05
 * @LastEditTime: 2021-01-13 18:51:35
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/bfs.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

/**
*             1
*           2   7
*          3   8 9
*         4       10
*        5 6     11 12
*/

const treeData = {
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
        },
      },
    },
  },
  right: {
    value: 7,
    right: {
      value: 9,
      right: {
        value: 10,
        left: {
          value: 11,
        },
        right: {
          value: 12
        },
      },
    },
    left: {
      value: 8
    }
  }
};
/**
 * 广度优先遍历
 */
const bfs = tree => {
  if (!tree.value) {
    console.log('请输入正确数据结构');
    return;
  }
  let arr = [];
  let queue = [];
  queue.push(tree);
  while (queue.length > 0) {
    let treeChild = queue.shift();
    arr.push(treeChild.value);
    if (treeChild.left) {
      queue.push(treeChild.left);
    }
    if (treeChild.right) {
      queue.push(treeChild.right);
    }
  }
  return arr.join(',');
}



const result = bfs(treeData);
console.log(result); //1 2 7 3 8 9 4 10 5 6 11 12