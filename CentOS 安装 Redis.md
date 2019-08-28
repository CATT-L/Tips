# CentOS 安装 Redis

到 [Redis 官网](<https://redis.io/download>) 找到下载地址

<https://redis.io/download>



解压, 编译安装

```shell
wget http://download.redis.io/releases/redis-5.0.5.tar.gz
tar xzvf redis-5.0.5.tar.gz
cd redis-5.0.5
make
```



将 src 目录移动到指定位置

```shell
mkdir -p /usr/local/webserver/redis
mv src /usr/local/webserver/redis/
```



前往目标目录, 创建软链接

```shell
cd /usr/local/webserver/redis
mkdir bin
ln -s /usr/local/webserver/redis/src/redis-cli bin/
ln -s /usr/local/webserver/redis/src/redis-server bin/
```



编辑 `~/.profile` 将目录加入环境变量

```shell
# Redis
export PATH=/usr/local/webserver/redis/bin:$PATH
```



从解压目录复制配置文件, 配置 redis

```shell
mkdir /usr/local/webserver/redis/6379/
cp redis.conf /usr/local/webserver/redis/6379/
```

修改以下值

```conf
daemonize yes
port 6379
pidfile /var/run/redis_6379.pid
```



启动 Redis

```shell
redis-cli redis.conf
```

