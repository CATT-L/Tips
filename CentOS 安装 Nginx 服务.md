# CentOS 安装 Nginx 服务

#### 安装 gcc, openssl

```shell
yum -y install gcc gcc-c++ openssl openssl-devel
```



#### 下载 pcre 和 openresty

```shell
wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.41.tar.gz
wget https://openresty.org/download/openresty-1.13.6.1.tar.gz
```



#### 安装 Nginx 所需的 pcre 库

```shell
tar zxvf pcre-8.41.tar.gz
cd pcre-8.41
./configure
make && make install
cd ../
```



#### 创建用户和组

```shell
groupadd www
useradd -g www www
```



#### 创建网站目录和设置目录用户

```shell
mkdir -p /disk/htdocs/default
chmod +w /disk/htdocs/default
chown -R www:www /disk/htdocs/
```



#### 安装 Nginx

```shell
tar zxvf openresty-1.13.6.1.tar.gz
cd openresty-1.13.6.1
./configure --user=www --group=www --prefix=/usr/local/openresty --with-luajit --with-http_stub_status_module --with-http_ssl_module --with-http_sub_module --with-http_realip_module
gmake && gmake install
```



#### 创建软链

```shell
rm -f /usr/local/webserver/nginx
ln -s /usr/local/openresty/nginx/ /usr/local/webserver/nginx
ln -s /usr/local/webserver/nginx/sbin/nginx /usr/bin/
```



#### 修改nginx配置

```shell
vi /usr/local/webserver/nginx/conf/nginx.conf
```

```conf
user  www custom;

worker_processes 8;

error_log  /disk/data/logs/nginx_error.log  crit;

pid        /usr/local/webserver/nginx/nginx.pid;

#Specifies the value for maximum file descriptors that can be opened by this process.
worker_rlimit_nofile 65535;

events
{
  use epoll;
  worker_connections 65535;
}

http
{
  include       mime.types;
  default_type  application/octet-stream;

  #charset  gb2312;
      
  server_names_hash_bucket_size 128;
  client_header_buffer_size 32k;
  large_client_header_buffers 4 32k;
  client_max_body_size 8m;
      
  sendfile on;
  tcp_nopush     on;

  keepalive_timeout 60;

  tcp_nodelay on;
  server_tokens off;

  fastcgi_connect_timeout 300;
  fastcgi_send_timeout 300;
  fastcgi_read_timeout 300;
  fastcgi_buffer_size 64k;
  fastcgi_buffers 4 64k;
  fastcgi_busy_buffers_size 128k;
  fastcgi_temp_file_write_size 128k;

  gzip on;
  gzip_min_length  1k;
  gzip_buffers     4 16k;
  gzip_http_version 1.0;
  gzip_comp_level 2;
  gzip_types       text/plain application/x-javascript text/css application/xml  application/javascript;
  gzip_vary on;

  #limit_zone  crawler  $binary_remote_addr  10m;
  log_format  access  '$remote_addr - $remote_user [$time_local] "$request" '
               '$status $body_bytes_sent $upstream_response_time $request_time "$http_referer" '
               '"$http_user_agent" $http_x_forwarded_for "$server_name" "$http_host"';

  log_format  wwwlogs  '$remote_addr - $remote_user [$time_local] "$request" '
               '$status $body_bytes_sent $upstream_response_time $request_time "$http_referer" '
               '"$http_user_agent" $http_x_forwarded_for "$server_name" "$http_host"';
              

  server
  {
    listen       80 default;
    server_name  _;
    index index.html index.htm index.php;
    root  /disk/htdocs/default;

    access_log  /disk/data/logs/wwwlogs.log  wwwlogs;
  }

}

```



#### 不停止 Nginx 服务的情况下平滑变更配置

修改  `nginx/conf/nginx.conf` 配置后, 执行以下命令检查是否配置正确;

```shell
nginx -t
```



若配置正确, 执行以下命令平滑变更;

```shell
nginx -s reload
```

