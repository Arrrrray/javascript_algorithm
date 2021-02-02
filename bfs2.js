/*
 * @Author: junchao
 * @Date: 2021-02-02 17:36:26
 * @LastEditTime: 2021-02-02 17:40:38
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/bfs2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

//        A
//  B   E   L   M 
// C D F G 

// 测试的树
const node = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {
          name: 'C'
        },
        {
          name: 'D'
        }
      ]
    },
    {
      name: 'E',
      children: [
        {
          name: 'F'
        },
        {
          name: 'G'
        }
      ]
    },
    {
      name: 'L'
    },
    {
      name: 'M'
    }
  ]
}

// 广度优先遍历递归方法(缺点：Maximum call stack size exceeded)
/**
* 1. 遍历当前层，并将当前层的节点存入数组
* 2. 获取下一层的节点数据
* 3. 重复，直至到达最底层
*/
const nodelist = [];
function wideTraversal(node) {
  const tempNode = [];
  if (node) {
    if (!nodelist.length) {
      nodelist.push(node.name);
      if (node.children && node.children.length) {
        wideTraversal(node.children);
      }
    } else {
      for (let i = 0; i < node.length; i++) {
        if (node[i].name) {
          nodelist.push(node[i].name);
        }
        if (node[i].children) {
          for (let j = 0; j < node[i].children.length; j++) {
            tempNode.push(node[i].children[j]);
          }
        }
      }
      if (tempNode.length) {
        wideTraversal(tempNode);
      }
    }
  }
  return nodelist;
}
console.log(wideTraversal(node));
// // 广度优先遍历非递归方法
// const nodelist = [];
// function wideTraversal(node) {
//   if (node) {
//     let queue = [];
//     queue.unshift(node);
//     while (queue && queue.length) {
//       let item = queue.shift();
//       nodelist.push(item.name);
//       let children = item.children;
//       if (children) {
//         for (i = 0; i < children.length; i++) {
//           queue.push(children[i]);
//         }
//       }
//     }
//   }
//   return nodelist;
// }
// console.log(wideTraversal(node))