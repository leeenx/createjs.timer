# createjs.timer
借用 tweenjs 创建 setTimeout 与 setInterval API。目的是 createjs.Ticker.paused 可以同步操作 setTimeout/setInterval

## 用法

```javascript
// 创建一个 setTimeout
let sto = createjs.setTimeout(function() {
  // to do
}, 3000); 

// 清除setTimeout
createjs.clearTimeout(sto); 
```

```javascript
// 创建一个 setInterval
let siv = createjs.setInterval(function() {
  // to do
}, 1000); 

// 清除 setInterval
createjs.clearInterval(siv); 
```

## 注意事项

保证 createjs 有 tweenjs 模块。setTimeout/cleatTimeout/setInterval/clearInterval 都挂载在 createjs 全局对象上。
