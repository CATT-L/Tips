# Cocos 网络请求



跨域问题不在本篇讨论范畴



### Ajax 请求

http://docs.cocos.com/creator/manual/zh/scripting/network.html

```js
var url = ''; 

let xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function () {
     if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
         var response = xhr.responseText;
         console.log(response);
     }
 };
 xhr.open("GET", url, true);
 xhr.send();
```



Cocos 中还可以通过 `cc.loader.getXMLHttpRequest()` 获取 xhr 对象

https://docs.cocos.com/creator/api/zh/classes/loader.html#getxmlhttprequest



适用于读取静态 json 配置, 向服务器提交信息





### 远程资源加载

https://docs.cocos.com/creator/api/zh/classes/loader.html

http://docs.cocos.com/creator/manual/zh/scripting/load-assets.html

```js
cc.loader.load({url: 'http://example.com/getImageREST?file=a.png', type: 'png'}, function (err, tex) {
    cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
});
```

适用于静态文件读取, 也可以用与 json 文件读取