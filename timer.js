// 定制一个 setTimeout 方法
createjs.setTimeout = function(cb, delay) {
    var tween = createjs.Tween.get({})
        .wait(delay)
        .call(function() {
            cb && cb(); 
            createjs.clearTimeout(tween); 
        }); 
    return tween; 
}
// 定制一个 clearTimeout 方法
createjs.clearTimeout = function(timeout) { 
    // 删除动画 
    createjs.Tween.removeTweens(timeout.target); 
    // 删除实例
    timeout = undefined; 
    return true; 
}

// 定制一个 setInterval 方法
createjs.setInterval = function(cb, delay) {
    var tween = createjs.Tween.get({})
        .wait(delay) 
        .call(function() {
            cb && cb(); 
        }); 
    tween.loop = 1; 
    return tween; 
}
// 定制一个 clearInterval 方法
createjs.clearInterval = function(interval) { 
    // 删除动画
    createjs.Tween.removeTweens(interval.target); 
    // 删除实例
    interval = undefined; 
    return true; 
}
