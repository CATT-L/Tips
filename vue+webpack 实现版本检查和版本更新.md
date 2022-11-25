# vue+webpack 实现版本检查和版本更新

因为vue的页面跳转，全都是用js实现的，前端压根没有对外发起请求，就像一个app一样。

那么对于一些需要长期使用的网页，例如工作环境使用的页面，用户可能从早到晚都没有执行过“刷新”的操作，更有甚者电脑从来不关机，可能几天都刷新一次页面；

这样就会产生一个问题，当新版本的前端发布了，而用户没有刷新，用的就还是旧版本；

因此，下面通过一种方案实现版本检查和版本更新；



### 版本更新

版本更新，实际上就是刷新一下页面，重新加载前端资源，Ctrl+R 或者 F5 的操作。



### 版本检测

在打包的时候，已经将自身的版本，从 package.json 里读取，并赋值给了环境变量 VUE_APP_VERSION;

在应用中， 可以通过 process.env.VUE_APP_VERSION 读取到；

因此，只需要设法让应用能够知道当前的最新版本，再进行比对，若不一致，提示版本更新（刷新）即可；

所以，我们只需要在打包的时候，输出一个 json 文件到网页根目录，在适当的时机请求 json 文件读取最新版本号即可；

注意在请求加一个变化的 GET 参数，保证读取到最新的 json 文件；

这个触发点，则是根据需求决定，我放在了路由拦截器里，并限流15分钟最多检查一次；



### 实现方式

需要用到一个依赖，在打包的时候生成json文件

```bash
npm i generate-asset-webpack-plugin --save-dev
```



随后在 vue.config.js 里面， configureWebpack 中， 给 config.plugins 增加一个流程, 将版本号生成到 version.json 中

```js
config.plugins.push(new GenerateAssetWebpackPlugin({
    filename: "version.json",
    fn: (complication, cb) => {
      cb(
        null,
        (function() {
          return JSON.stringify({
            version: process.env.VUE_APP_VERSION,
            buildTime: process.env.VUE_APP_BUILD_TIME,
            content: []
          });
        })()
      );
    }
  }));
```



在封装一个版本更新检测函数，我放到了vuex里面

```js
import axios from "axios";

export default {
  namespaced: true,
  state: {

    version: {
      lastCheck: 0,
      cooldown: 15 * 60 * 1000,
      current: process.env.VUE_APP_VERSION,
      latest: process.env.VUE_APP_VERSION,
      buildTime: process.env.VUE_APP_BUILD_TIME,
      content: []
    }
  },

  getters: {
    needUpdate(state) {
      return state.version.latest != state.version.current;
    }
  },

  mutations: {},
  actions: {
    checkUpdate({ state, getters, dispatch, commit }) {
      
      if (getters.needUpdate) {
        return false;
      }

      var t = Date.now();

      if (t - state.version.lastCheck < this.cooldown) {
        return;
      }

      axios
        .get("/version.json" + "?t=" + t)
        .then(resp => {
          var { version, buildTime, content } = resp.data;

          state.version.latest = version;
          state.version.buildTime = buildTime;
          state.version.content = content;
          state.version.lastCheck = Date.now();
        })
        .catch(e => {
          console.error(`版本更新检测失败,原因: ${e.message}`);
        });
    },
  }
};

```



在 router 守卫拦截器里调用更新检测

```js
router.beforeEach(async (to, from, next) => {
  await store.dispatch("app/system/checkUpdate");
}
```



当发现版本更新的时候，我们在页面顶部展示一个提示，点击可以查看详细信息，但不强制更新，因为用户可能还有没保存的工作；

若用户点击“立即更新”按钮，则会将页面刷新，并要求重新登录；
