### 參考連結
* [MDN: 使用CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables)
* [SASS, LESS 退散，原生 CSS 可以使用變數啦！](http://muki.tw/tech/native-css-variables/)

### Document.documentElement

1. Document.documentElement 會回傳目前文件（document）中的根元素（Element），如：HTML 文件中的 <html> 元素。
2. 對於所有非空的 HTML 文件， document.documentElement 將會是一個 <html>  元素 ; 對於所有非空的 XML 文件，document.documentElement 則會是文件的根元素。

[MDN ref](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/documentElement)

### tips
本篇用 js 控制 html 的 property，再藉由 html 的 CSS(:root)去同步變動 img 的 css property。