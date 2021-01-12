<!--
 * @Author: junchao
 * @Date: 2021-01-12 13:33:44
 * @LastEditTime: 2021-01-12 16:31:36
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/1_sort/sort.md
 * @可以输入预定的版权声明、个性签名、空行等
-->

# 1. 冒泡排序

冒泡排序的基本思想是：每次比较两个相邻的元素，如果它们的顺序错误，就把它们交换过来。

```typescript
// 冒泡排序，从大到小排序
function bubbleSort(params: Array<Number>) {
  for (let i = 0; i < params.length - 1; i++) {
    for (let j = 0; j < params.length - 1; j++) {
      if (params[i] > params[j]) {
        let temp = params[i];
        params[i] = params[j];
        params[j] = temp;
      }
    }
  }
  return params;
}
```

冒泡排序的核心部分是双重嵌套循环。
冒泡排序的时间复杂度是O(N^2)

# 2.快速排序

"快速排序"的思想很简单，整个排序过程只需要三步：

　　（1）在数据集之中，选择一个元素作为"基准"（pivot）。

　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。

　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

```typescript
function quickSort(arr) {
  if (arr.length <= 1) { return arr; }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
```

快速排序最差时间复杂度是O(N^2)
平均时间复杂度是O(NlogN)
