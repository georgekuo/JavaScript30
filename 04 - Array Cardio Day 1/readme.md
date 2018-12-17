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

### Array - reduce
```
arr.reduce(callback[accumlator, currentValue, currentIndex, array], initialValue)
```
如果 initalValue 有值，會被當成 accumlator **初始值**(用於第一次呼叫函式所使用的 accumlator)，接下來每一次呼叫函式的 accumlator 皆是**上一次呼叫後的累加累加數值**。

故第八題解題邏輯如下：
先將 initalValue 放置一空陣列當作容器，第一次的函式運算，先檢查 {car}，結果為 falsy，故給他一個值為 0，此時 obj[item] 為 {car: 0}，然後給其加 1，變成 {car: 1}，然後回傳此物件(return obj)。

接下來很重要，因為 accumlator 經由回傳已經變成**陣列** {car: 1}，故第二次函式運算，obj[item] 也就是 {car} 裡面是有值的，所以不用再設為 0，接著將 obj[item] 再次加 1，於是回傳 {car: 2}，然後成為第三次函式運算的 accumlator。

從這樣的函式運算我們可以理出一個邏輯：如果在運算過程中遇到第一次看到的 currentValue，先給他一個初始值為 0，使其先有 key 與 value，然後再給它設成 1，接下來有遇到同名 item 再加 1，當函式完成運算後，即可得到原陣列所有 item 值的集合。

[計算相同元素數量並以物件鍵值顯示](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

