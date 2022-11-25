# Electron打包Vue项目

CATT-L



[TOC]



#### 设置镜像源

为了网络通畅，先设置ELectron镜像源代理

```shell
config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/
```



#### 安装依赖包

依次安装electron、vue-cli-plugin-electron-builder以及electron-devtools-installer

```shell
// 安装electron
npm i electron --dev
 
// 安装electron打包插件
npm i vue-cli-plugin-electron-builder --dev
npm i electron-devtools-installer --dev
```



#### 配置入口

src目录下新建一个background.js文件，作为electron的入口文件，内容根据下方改动

```js
'use strict'
 
import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
 
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
 
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })
 
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}
 
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
 
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})
 
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
```



#### 添加编译命令

修改package.json文件，新增入口属性以及运行命令

```json
{
    // ...
    "main": "background.js", // electron入口文件
    "author": "author", // 作者
    "description": "your description", // 描述 这里必填，不然打包会报错
    // ...
    "scripts": {
        // ...
        "electron:build": "vue-cli-service electron:build",
        "electron:serve": "vue-cli-service electron:serve",
        "postinstall": "electron-builder install-app-deps",
        "postuninstall": "electron-builder install-app-deps"   
    }
}
```



#### Vue打包配置

修改vue.config.js文件，新增electron打包选项

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',  // 这里设置成./，否则打包后vue的静态资源引用会报错找不到路径导致白屏
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "xxxxxx", // 程序的包ID
        "productName": "Product Name",
        "copyright": "Copyright © xxx",
        "directories": {
          "output": "./dist"//输出文件路径
        },
        "win": {//win相关配置
          "icon": "./public/logo.ico",//图标，这里图标需要至少256*256，否则打包会报错
          "target": [
            {
              "target": "nsis",//利用nsis制作安装程序
              "arch": [
                "x64",//64位
                "ia32"//32位
              ]
            }
          ]
        },
        "nsis": {
          "oneClick": false, // 是否一键安装
          "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          "allowToChangeInstallationDirectory": true, // 允许修改安装目录
          "installerIcon": "./public/logo.ico",// 安装图标
          "uninstallerIcon": "./public/logo.ico",//卸载图标
          "installerHeaderIcon": "./public/logo.ico", // 安装时头部图标
          "createDesktopShortcut": true, // 创建桌面图标
          "createStartMenuShortcut": true,// 创建开始菜单图标
          "shortcutName": "taskmanage", // 图标名称
      },
      }
    }
  }
})
```



#### 调试运行和打包

```shell
# 调试指令
npm run electron:serve

# 编译打包成EXE
npm run electron:build
```



安装完后, dist 目录中分别出现如下文件

- win-ia32-unpacked

  32位免安装版

- win-unpacked

  64位免安装版

- Product Name Setup x.x.x.exe

  软件安装包



#### 注意事项

- 项目完整路径中不要出现ASCII码之外的字符,不然会报错
- 有时因为GitHub资源网络不好报错, 多试几次
- .gitignore 将 dist 和 dist_electron 目录加进去, 排除版本控制跟踪