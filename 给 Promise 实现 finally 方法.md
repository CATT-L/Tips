```javascript
// 给 Promise 实现 finally 方法
if(Promise.prototype.finally == undefined){

    Promise.prototype.finally = function(callback){
        let P = this.constructor;

        return this.then(
            value  => P.resolve(callback()).then(() => value),
            reason => P.resolve(callback()).then(() => { throw reason })
        );
    };

}
```

