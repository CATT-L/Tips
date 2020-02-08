

# socket.io 无法在 vue 中直接使用的解决方法





* 在 `public/index.html` 中载入对应的 静态 `js` 文件

  ```html
  <script src="/socket.io/socket.io.js"></script>
  ```

* 创建目录 `src/plugins`

* 新建文件 `src/plugins/MySocketIO.js`, 内容如下:

  ```javascript
  
  let MySocketIO = {};
  
  MySocketIO.install = function (Vue, options) {
  	Vue.prototype.$socket = io(options.connection);
  }
  
  export default MySocketIO;
  
  ```

* `main.js` 中引入， 并 `use`， 如下示例:

  ```javascript
  import MySocketIO from './plugins/MySocketIO';
  
  Vue.use(MySocketIO, {
  	connection: "127.0.0.1:12345"
  });
  ```
