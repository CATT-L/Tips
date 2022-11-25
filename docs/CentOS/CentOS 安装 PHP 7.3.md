# CentOS 中安装 PHP  7.3

#### PHP 下载地址

https://www.php.net/downloads.php





#### 安装依赖

```shell
yum -y install curl curl-devel libxml2 libxml2-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel zlib zlib-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers bzip2 bzip2-devel

```



#### 下载 PHP

```shell
wget https://www.php.net/distributions/php-7.3.8.tar.gz

```



#### 下载其它支持库

```shell
wget http://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.15.tar.gz
wget http://jaist.dl.sourceforge.net/project/mcrypt/Libmcrypt/2.5.8/libmcrypt-2.5.8.tar.gz
wget http://jaist.dl.sourceforge.net/project/mcrypt/MCrypt/2.6.8/mcrypt-2.6.8.tar.gz
wget http://jaist.dl.sourceforge.net/project/mhash/mhash/0.9.9.9/mhash-0.9.9.9.tar.gz
wget http://www.imagemagick.org/download/ImageMagick-7.0.8-28.tar.gz
wget http://pecl.php.net/get/imagick-3.4.3.tgz
wget https://libzip.org/download/libzip-1.5.1.tar.gz
wget https://github.com/Kitware/CMake/releases/download/v3.15.2/cmake-3.15.2.tar.gz

```



#### 编译安装 PHP 所需的支持库

```shell
tar zxvf libiconv-1.15.tar.gz
cd libiconv-1.15
./configure --prefix=/usr/local
make && make install
cd ../

tar zxvf libmcrypt-2.5.8.tar.gz
cd libmcrypt-2.5.8/
./configure
make && make install
ldconfig

cd libltdl/
./configure --enable-ltdl-install
make && make install
cd ../../

tar zxvf mhash-0.9.9.9.tar.gz
cd mhash-0.9.9.9/
./configure
make && make install
cd ../

ln -s /usr/local/lib/libmcrypt.la /usr/lib/libmcrypt.la
ln -s /usr/local/lib/libmcrypt.so /usr/lib/libmcrypt.so
ln -s /usr/local/lib/libmcrypt.so.4 /usr/lib/libmcrypt.so.4
ln -s /usr/local/lib/libmcrypt.so.4.4.8 /usr/lib/libmcrypt.so.4.4.8
ln -s /usr/local/lib/libmhash.a /usr/lib/libmhash.a
ln -s /usr/local/lib/libmhash.la /usr/lib/libmhash.la
ln -s /usr/local/lib/libmhash.so /usr/lib/libmhash.so
ln -s /usr/local/lib/libmhash.so.2 /usr/lib/libmhash.so.2
ln -s /usr/local/lib/libmhash.so.2.0.1 /usr/lib/libmhash.so.2.0.1
ln -s /usr/local/bin/libmcrypt-config /usr/bin/libmcrypt-config

tar zxvf mcrypt-2.6.8.tar.gz
cd mcrypt-2.6.8/
/sbin/ldconfig
./configure
make && make install
cd ../

tar xzvf cmake-3.15.2.tar.gz
cd cmake-3.15.2/
./configure
make && make install
cd ../

yum remove -y libzip

tar zxvf libzip-1.5.1.tar.gz 
cd libzip-1.5.1
mkdir build && cd build && cmake .. && make && make install
cd ../../

```



#### 编译安装 PHP

```
echo /usr/local/lib >> /etc/ld.so.conf
echo /usr/local/lib64 >> /etc/ld.so.conf
ldconfig

```

```shell
tar zxvf php-7.3.8.tar.gz
cd php-7.3.8
cp -frp /usr/lib64/libldap* /usr/lib

./configure --prefix=/usr/local/webserver/php --with-config-file-path=/usr/local/webserver/php/etc --with-mysql=mysqlnd --with-mysqli=mysqlnd --with-pdo-mysql=mysqlnd --with-iconv-dir=/usr/local --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir=/usr --enable-xml --disable-rpath --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --enable-mbregex --enable-fpm --enable-mbstring --with-mcrypt --with-gd --enable-gd-native-ttf --with-openssl --with-mhash --enable-pcntl --enable-sockets --with-ldap --with-ldap-sasl --with-xmlrpc --enable-zip --enable-soap --enable-opcache --enable-exif

make ZEND_EXTRA_LIBS='-liconv'
make install
cp php.ini-production /usr/local/webserver/php/etc/php.ini
cd ../

```



创建软链

```shell
ln -s /usr/local/webserver/php/bin/php /usr/bin/
ln -s /usr/local/webserver/php/bin/phpize /usr/bin/

```





#### 编译安装 PHP 扩展模块



下面的安装会返回一个类似如下的字符串, 记住它

```shell
Installing shared extensions:     /usr/local/webserver/php/lib/php/extensions/no-debug-non-zts-20180731/
```



* ImageMagick

  ```shell
  tar xzvf ImageMagick-7.0.8-10.tar.gz
  cd ImageMagick-7.0.8-10
  ./configure
  make && make install
  cd ../
  ln -s /usr/local/include/ImageMagick-7 /usr/local/include/ImageMagick
  export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
  
  tar zxvf imagick-3.4.3.tgz
  cd imagick-3.4.3
  /usr/local/webserver/php/bin/phpize
  ./configure --with-php-config=/usr/local/webserver/php/bin/php-config
  make && make install
  cd ../
  
  ```

  

* redis

  ```shell
  git clone git://github.com/nicolasff/phpredis
  cd phpredis
  git submodule init
  git submodule update
  /usr/local/webserver/php/bin/phpize
  ./configure --with-php-config=/usr/local/webserver/php/bin/php-config
  make && make install
  cd ../
  
  ```


#### 修改 php.ini 文件

```shell
vi /usr/local/webserver/php/etc/php.ini
```

查找

```conf
; extension_dir = "./"
```

修改为刚刚返回的字符串, 注意去掉前面的分号;

```conf
extension_dir = "/usr/local/webserver/php/lib/php/extensions/no-debug-non-zts-20180731/"
```

并在此行下增加几行

```conf
extension = "imagick.so"
extension = "redis.so"
```



查找

```conf
;always_populate_raw_post_data
```

修改为, 若没有则添加

```conf
always_populate_raw_post_data = On
```



查找

```conf
;cgi.fix_pathinfo=1
```

修改为

```conf
cgi.fix_pathinfo=0
```



查找

```conf
;date.timezone =
```

修改为

```conf
date.timezone = Asia/Hong_Kong 
```



#### 创建 php-fpm 配置文件

```shell
cd /usr/local/webserver/php/etc/
mv php-fpm.conf.default php-fpm.conf
vi /usr/local/webserver/php/etc/php-fpm.conf
```

需要修改的几个地方

```conf
pid = run/php-fpm.pid
error_log = log/php-fpm.log
process_control_timeout = 5s
rlimit_files = 65535
rlimit_core = 0
```



```shell
mv php-fpm.d/www.conf.default php-fpm.d/www.conf
vi /usr/local/webserver/php/etc/php-fpm.d/www.conf
```

需要修改的几个地方

```conf
listen.backlog = 128
pm = static
pm.max_children = 128
pm.start_servers = 20
pm.min_spare_servers = 5
pm.max_spare_servers = 35
pm.max_requests = 1024
rlimit_core = 0
catch_workers_output = yes
```



启动 php-cgi 进程, 监听 127.0.0.1 的 9000 端口, 进程数为 128, 若服务器内存小于 3GB, 可以改为 64 进程, 用户为 www;

回到 php 源码目录, 编辑 php-fpm.service

```shell
vi sapi/fpm/php-fpm.service
```

```conf
[Unit]
Description=The PHP FastCGI Process Manager
After=network.target

[Service]
Type=simple
PIDFile=/usr/local/webserver/php/var/run/php-fpm.pid
ExecStart=/usr/local/webserver/php/sbin/php-fpm --nodaemonize --fpm-config /usr/local/webserver/php/etc/php-fpm.conf
ExecReload=/bin/kill -USR2 $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```



并没有什么需要编辑的, 直接将 `php-fpm.service` 复制到 `/usr/lib/systemd/system/` 目录下

```shell
cp sapi/fpm/php-fpm.service /usr/lib/systemd/system/
ulimit -SHn 65535

```

启动

```shell
service php-fpm start
```



重启

```shell
service php-fpm restart
```



关闭

```shell
service php-fpm stop
```



#### 删除安装完的文件夹

```shell
rm -rf cmake-3.15.2 ImageMagick-7.0.8-10 imagick-3.4.3 libiconv-1.15 libmcrypt-2.5.8 libzip-1.5.1 mhash-0.9.9.9 php-7.3.8 phpredis
```





#### 在 Nginx 中调用 PHP



创建 `fcgi.conf` 文件

```shell
vi /usr/local/webserver/nginx/conf/fcgi.conf
```

输入以下内容

```conf
fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
fastcgi_param  SERVER_SOFTWARE    nginx;

fastcgi_param  QUERY_STRING       $query_string;
fastcgi_param  REQUEST_METHOD     $request_method;
fastcgi_param  CONTENT_TYPE       $content_type;
fastcgi_param  CONTENT_LENGTH     $content_length;

fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;
fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
fastcgi_param  REQUEST_URI        $request_uri;
fastcgi_param  DOCUMENT_URI       $document_uri;
fastcgi_param  DOCUMENT_ROOT      $document_root;
fastcgi_param  SERVER_PROTOCOL    $server_protocol;

fastcgi_param  REMOTE_ADDR        $remote_addr;
fastcgi_param  REMOTE_PORT        $remote_port;
fastcgi_param  SERVER_ADDR        $server_addr;
fastcgi_param  SERVER_PORT        $server_port;
fastcgi_param  SERVER_NAME        $server_name;

# PHP only, required if PHP was built with --enable-force-cgi-redirect
fastcgi_param  REDIRECT_STATUS    200;
```



配置虚拟主机

在 `server` 层级下加入以下内容

```conf
location ~ .*\.(php|php5)?$
{      
  fastcgi_pass  127.0.0.1:9000;
  fastcgi_index index.php;
  include fcgi.conf;
}
```



更新 Nginx 配置

```shell
nginx -s reload
```















