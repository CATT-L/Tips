import{_ as e,o as n,c as s,e as i}from"./app.09614df6.js";const a={},l=i(`<h1 id="centos-\u5B89\u88C5-nginx-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#centos-\u5B89\u88C5-nginx-\u670D\u52A1" aria-hidden="true">#</a> CentOS \u5B89\u88C5 Nginx \u670D\u52A1</h1><h4 id="\u5B89\u88C5-gcc-openssl" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-gcc-openssl" aria-hidden="true">#</a> \u5B89\u88C5 gcc, openssl</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4E0B\u8F7D-pcre-\u548C-openresty" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-pcre-\u548C-openresty" aria-hidden="true">#</a> \u4E0B\u8F7D pcre \u548C openresty</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.41.tar.gz
<span class="token function">wget</span> https://openresty.org/download/openresty-1.13.6.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5-nginx-\u6240\u9700\u7684-pcre-\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nginx-\u6240\u9700\u7684-pcre-\u5E93" aria-hidden="true">#</a> \u5B89\u88C5 Nginx \u6240\u9700\u7684 pcre \u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> zxvf pcre-8.41.tar.gz
<span class="token builtin class-name">cd</span> pcre-8.41
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u7528\u6237\u548C\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237\u548C\u7EC4" aria-hidden="true">#</a> \u521B\u5EFA\u7528\u6237\u548C\u7EC4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">groupadd</span> www
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> www www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u7F51\u7AD9\u76EE\u5F55\u548C\u8BBE\u7F6E\u76EE\u5F55\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7F51\u7AD9\u76EE\u5F55\u548C\u8BBE\u7F6E\u76EE\u5F55\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u7F51\u7AD9\u76EE\u5F55\u548C\u8BBE\u7F6E\u76EE\u5F55\u7528\u6237</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /disk/htdocs/default
<span class="token function">chmod</span> +w /disk/htdocs/default
<span class="token function">chown</span> <span class="token parameter variable">-R</span> www:www /disk/htdocs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nginx" aria-hidden="true">#</a> \u5B89\u88C5 Nginx</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> zxvf openresty-1.13.6.1.tar.gz
<span class="token builtin class-name">cd</span> openresty-1.13.6.1
./configure <span class="token parameter variable">--user</span><span class="token operator">=</span>www <span class="token parameter variable">--group</span><span class="token operator">=</span>www <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openresty --with-luajit --with-http_stub_status_module --with-http_ssl_module --with-http_sub_module --with-http_realip_module
gmake <span class="token operator">&amp;&amp;</span> gmake <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u8F6F\u94FE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8F6F\u94FE" aria-hidden="true">#</a> \u521B\u5EFA\u8F6F\u94FE</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/local/webserver/nginx
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openresty/nginx/ /usr/local/webserver/nginx
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/webserver/nginx/sbin/nginx /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539nginx\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539nginx\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539nginx\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /usr/local/webserver/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>user  www custom;

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
  log_format  access  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
               &#39;$status $body_bytes_sent $upstream_response_time $request_time &quot;$http_referer&quot; &#39;
               &#39;&quot;$http_user_agent&quot; $http_x_forwarded_for &quot;$server_name&quot; &quot;$http_host&quot;&#39;;

  log_format  wwwlogs  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
               &#39;$status $body_bytes_sent $upstream_response_time $request_time &quot;$http_referer&quot; &#39;
               &#39;&quot;$http_user_agent&quot; $http_x_forwarded_for &quot;$server_name&quot; &quot;$http_host&quot;&#39;;
              

  server
  {
    listen       80 default;
    server_name  _;
    index index.html index.htm index.php;
    root  /disk/htdocs/default;

    access_log  /disk/data/logs/wwwlogs.log  wwwlogs;
  }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0D\u505C\u6B62-nginx-\u670D\u52A1\u7684\u60C5\u51B5\u4E0B\u5E73\u6ED1\u53D8\u66F4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u505C\u6B62-nginx-\u670D\u52A1\u7684\u60C5\u51B5\u4E0B\u5E73\u6ED1\u53D8\u66F4\u914D\u7F6E" aria-hidden="true">#</a> \u4E0D\u505C\u6B62 Nginx \u670D\u52A1\u7684\u60C5\u51B5\u4E0B\u5E73\u6ED1\u53D8\u66F4\u914D\u7F6E</h4><p>\u4FEE\u6539 <code>nginx/conf/nginx.conf</code> \u914D\u7F6E\u540E, \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u662F\u5426\u914D\u7F6E\u6B63\u786E;</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u82E5\u914D\u7F6E\u6B63\u786E, \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5E73\u6ED1\u53D8\u66F4;</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),r=[l];function d(c,t){return n(),s("div",null,r)}const u=e(a,[["render",d],["__file","CentOS \u5B89\u88C5 Nginx \u670D\u52A1.html.vue"]]);export{u as default};
