/*
 * @Author: junchao
 * @Date: 2021-02-02 13:44:41
 * @LastEditTime: 2021-02-02 13:52:13
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/meituan/4.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// list to tree map实现
var arr = [{ id: 1, pid: '-1' }, { id: 11, pid: '1' }, { id: 12, pid: '1' }];
function listToTree(list) {
  var map = {}, node, tree = [], i;
  for (i = 0; i < list.length; i++) {
    map[list[i].id] = list[i];
    list[i].children = [];
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.pid !== '-1') {
      map[node.pid].children.push(node);
    } else {
      tree.push(node);
    }
  }
  return tree;
}

console.log(listToTree(arr));