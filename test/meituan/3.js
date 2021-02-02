/*
 * @Author: junchao
 * @Date: 2021-02-01 19:48:03
 * @LastEditTime: 2021-02-02 14:29:10
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/meituan/3.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 将input转换为output的格式
const input = [

  { id: 1, value: 'School', parentId: null },

  { id: 2, value: 'Class1', parentId: 1 },

  { id: 3, value: 'Class2', parentId: 1 },

  { id: 4, value: 'Student1', parentId: 2 },

  { id: 5, value: 'Student2', parentId: 2 },

  { id: 6, value: 'Student3', parentId: 3 },

]

const output = {
  id: 1,
  value: 'School',
  children: [
    {
      id: 2,
      value: 'Class1',
      children: [
        {
          id: 4,
          value: 'Student1',
          children: []
        },
        {
          id: 5,
          value: 'Student2',
          children: []
        },
      ]
    },
    {
      id: 3,
      value: 'Class2',
      children: [
        {
          id: 6,
          value: 'Student3',
          children: []
        },
      ]
    }
  ]
}

function formatInput(input) {
  if (!input instanceof Array) {
    return false;
  }
  let result = {};
  // 先找出根节点
  for (let item of input) {
    if (!item.parentId) {
      result = {
        "id": item.id,
        "value": item.value,
        "children": getChildren(input, item.id),
      }
    }
  }
  // 根据输入的数据和根节点id，递归出其他子节点
  function getChildren(arr, id) {
    let children = new Array();
    for (let item of arr) {
      if (item.parentId == id) {
        children.push({
          "id": item.id,
          "value": item.value,
          "children": [],
        })
      }
    }
    for (let child of children) {
      let children2 = getChildren(arr, child.id);
      if (children2.length > 0) {
        child.children = children2;
      }
    }
    return children;
  }
  return result;

}
// 这边打印输出在浏览器显示没有问题，node的debug模式显示也没有问题，直接运行会显示不全
console.log(formatInput(input));
console.log(111111)