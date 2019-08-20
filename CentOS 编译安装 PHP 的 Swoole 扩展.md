# CentOS 编译安装 PHP 的 Swoole 扩展



官方指引

<https://wiki.swoole.com/wiki/page/6.html>



源码下载

<https://github.com/swoole/swoole-src/releases>



### 下载 编译 安装

```shell
wget https://github.com/swoole/swoole-src/archive/v4.4.4.tar.gz
tar xzvf v4.4.4.tar.gz
cd swoole-src-4.4.4/
phpize
./configure --with-php-config=/usr/local/webserver/php/bin/php-config
make && make install
cd ../

```



### 配置 php.ini

```shell
vi /usr/local/webserver/php/etc/php.ini
```

在 `extension_dir` 相关位置加上下面的配置

```conf
extension = "swoole.so"
```



### 重启 php-fpm

```shell
service php-fpm restart
```



### 查看安装信息

```shell
php --ri swoole
```



