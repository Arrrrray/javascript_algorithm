/*
 * @Author: junchao
 * @Date: 2021-02-02 17:41:47
 * @LastEditTime: 2021-02-02 17:47:46
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/dfs2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

//        A
//  B   E   L   M 
// C D F G 
// 测试的树
const node = {
  name: 'A',
  children: [{
    name: 'B',
    children: [{
      name: 'C'
    }, {
      name: 'D'
    }]
  }, {
    name: 'E',
    children: [{
      name: 'F'
    }, {
      name: 'G'
    }]
  }, {
    name: 'L'
  }, {
    name: 'M'
  }]
}

// // 深度优先遍历的递归写法
// const nodeList = []
// function deepTraversal(node) {
//   if (node) {
//     nodeList.push(node.name)
//     let children = node.children ? node.children : []
//     for (let i = 0; i < children.length; i++) {
//       deepTraversal(children[i])
//     }
//   }
//   return nodeList.join(',')
// }
// console.log(deepTraversal(node))

// 深度优先遍历的非递归写法
function deepTraversal(node) {
let nodes = []
if (node) {
  let stack = []
  // 同时存放将来要访问的节点
  stack.push(node)
  while(stack.length) {
    let item = stack.pop()
    // 正在访问的节点
    nodes.push(item.name)
    let children = item.children ? item.children : []
    for (let i = children.length - 1; i>=0; i--) {
      // 将现在访问的节点的子节点存入 stack，供将来访问
      stack.push(children[i])
    }
  }
}
return nodes.join(',')
}
console.log(deepTraversal(node))