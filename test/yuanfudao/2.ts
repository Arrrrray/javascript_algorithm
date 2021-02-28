/*
 * @Author: junchao
 * @Date: 2021-02-25 13:31:25
 * @LastEditTime: 2021-02-25 13:31:54
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /javascript_algorithm/test/yuanfudao/2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 考察递归
// 批量请求url
function load(url: string): Promise<string> {

  return new Promise((resolve, reject) => {

      // network request

  })

}

function batchLoad(urls: string[], concurrent: number): Promise<Array<string | Error>> {

}

// batchLoad([‘a’, ‘b’, ‘c’, ‘d’, ‘e’], 2).then(data => …)