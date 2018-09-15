# 參考連結

[JavaScript 陣列處理方法 [filter(), find(), forEach(), map(), every(), some(), reduce()]](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/)

[Array.prototype.forEach()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
map()會回傳新陣列，forEach() **不會**回傳新陣列。
```
const arr = [1,2,3,4,5]
arr.forEach((item,index) => {
	console.log('arr['+[index+1] +']: '+ item)
  }
)
```

[樣板字面值](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)
[Array.prototype.sort()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
[Array.prototype.reduce()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### console不是只有 console.log
[Console method](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)
[Console.table()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table)