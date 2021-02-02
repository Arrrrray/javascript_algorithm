/*
 * @Author: junchao
 * @Date: 2021-01-13 18:50:05
 * @LastEditTime: 2021-02-02 17:36:14
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
 * 广度优先遍历，非递归实现
 */
const bfs = tree => {
  if (!tree.value) {
    console.log('请输入正确数据结构');
    return;
  }
  // 存储遍历结果结果
  let res = [];
  // 创建队列，存储遍历的节点
  let queue = [];
  queue.push(tree);
  while (queue.length > 0) {
    // 取出第一个节点
    let treeChild = queue.shift();
    // 遍历第一个节点的值
    res.push(treeChild.value);
    // 当前节点左子树存在，将左子树放到队列中
    if (treeChild.left) {
      queue.push(treeChild.left);
    }
    // 当前节点右子树存在，将右子树放到队列中
    if (treeChild.right) {
      queue.push(treeChild.right);
    }
  }
  return res.join(',');
}
const result = bfs(treeData);
console.log(result); //1 2 7 3 8 9 4 10 5 6 11 12