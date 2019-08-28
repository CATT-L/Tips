# CentOS 安装 Node.js



### 下载 Linux 二进制文件

上 [Node.js 官网](https://nodejs.org/zh-cn/download/) 查找下载链接

<https://nodejs.org/zh-cn/download/>

```shell
wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz
```

### 解压

```shell
tar xJvf node-v10.16.3-linux-x64.tar.xz
```



### 移动到指定目录

```shell
mv node-v10.16.3-linux-x64 /usr/local/webserver/nodejs
```



### 设置环境变量

```shell
vi ~/.profile
```

输入以下内容

```conf
# Nodejs
export PATH=/usr/local/webserver/nodejs/bin:$PATH
```

更新环境变量

```shell
source ~/.profile
```







