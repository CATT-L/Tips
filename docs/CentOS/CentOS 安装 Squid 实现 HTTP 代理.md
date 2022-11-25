# CentOS 安装 Squid 实现 HTTP 代理

#### 安装squid

```shell
yum install -y squid
```

#### 配置

```shell
vim /etc/squid/squid.conf

# 进入文件按需修改如下配置
# -----------------------------

http_port 12345 # 代理服务端口号

# 密码校验
auth_param basic program /usr/lib64/squid/basic_ncsa_auth /etc/squid/passwords
acl auth_user proxy_auth REQUIRED

# 允许带密码用户使用代理
http_access allow auth_user

# 注: 上述授权代码 要放在 http_access deny all 之前
```



#### 创建密码文件

```shell
htpasswd -c -d /etc/squid/passwords 用户名

# 如果没有这个指令,可通过下列语句安装
yum install -y httpd
```



#### 启用squid服务

```shell
service squid start
```



#### 客户端使用代理

```shell
curl cip.cc --proxy user:password@127.0.0.1:12345
```









