/*
 * @Author: junchao
 * @Date: 2021-02-02 13:54:46
 * @LastEditTime: 2021-02-02 14:45:47
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/meituan/5.js
 * @可以输入预定的版权声明、个性签名、空行等
 */


function list_to_tree(list) {
  var map = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

var entries = [{
    "id": "12",
    "parentId": "0",
    "text": "Man",
    "level": "1",
    "children": null
  },
  {
    "id": "6",
    "parentId": "12",
    "text": "Boy",
    "level": "2",
    "children": null
  },
  {
    "id": "7",
    "parentId": "12",
    "text": "Other",
    "level": "2",
    "children": null
  },
  {
    "id": "9",
    "parentId": "0",
    "text": "Woman",
    "level": "1",
    "children": null
  },
  {
    "id": "11",
    "parentId": "9",
    "text": "Girl",
    "level": "2",
    "children": null
  }
];

console.log(list_to_tree(entries));