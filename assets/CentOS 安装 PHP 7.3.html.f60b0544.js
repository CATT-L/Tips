import{_ as n,o as s,c as a,e}from"./app.09614df6.js";const i={},l=e(`<h1 id="centos-\u4E2D\u5B89\u88C5-php-7-3" tabindex="-1"><a class="header-anchor" href="#centos-\u4E2D\u5B89\u88C5-php-7-3" aria-hidden="true">#</a> CentOS \u4E2D\u5B89\u88C5 PHP 7.3</h1><h4 id="php-\u4E0B\u8F7D\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#php-\u4E0B\u8F7D\u5730\u5740" aria-hidden="true">#</a> PHP \u4E0B\u8F7D\u5730\u5740</h4><p>https://www.php.net/downloads.php</p><h4 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">curl</span> curl-devel libxml2 libxml2-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel zlib zlib-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers <span class="token function">bzip2</span> bzip2-devel

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0B\u8F7D-php" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-php" aria-hidden="true">#</a> \u4E0B\u8F7D PHP</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://www.php.net/distributions/php-7.3.8.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0B\u8F7D\u5176\u5B83\u652F\u6301\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5176\u5B83\u652F\u6301\u5E93" aria-hidden="true">#</a> \u4E0B\u8F7D\u5176\u5B83\u652F\u6301\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.15.tar.gz
<span class="token function">wget</span> http://jaist.dl.sourceforge.net/project/mcrypt/Libmcrypt/2.5.8/libmcrypt-2.5.8.tar.gz
<span class="token function">wget</span> http://jaist.dl.sourceforge.net/project/mcrypt/MCrypt/2.6.8/mcrypt-2.6.8.tar.gz
<span class="token function">wget</span> http://jaist.dl.sourceforge.net/project/mhash/mhash/0.9.9.9/mhash-0.9.9.9.tar.gz
<span class="token function">wget</span> http://www.imagemagick.org/download/ImageMagick-7.0.8-28.tar.gz
<span class="token function">wget</span> http://pecl.php.net/get/imagick-3.4.3.tgz
<span class="token function">wget</span> https://libzip.org/download/libzip-1.5.1.tar.gz
<span class="token function">wget</span> https://github.com/Kitware/CMake/releases/download/v3.15.2/cmake-3.15.2.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7F16\u8BD1\u5B89\u88C5-php-\u6240\u9700\u7684\u652F\u6301\u5E93" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5-php-\u6240\u9700\u7684\u652F\u6301\u5E93" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5 PHP \u6240\u9700\u7684\u652F\u6301\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> zxvf libiconv-1.15.tar.gz
<span class="token builtin class-name">cd</span> libiconv-1.15
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token function">tar</span> zxvf libmcrypt-2.5.8.tar.gz
<span class="token builtin class-name">cd</span> libmcrypt-2.5.8/
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
ldconfig

<span class="token builtin class-name">cd</span> libltdl/
./configure --enable-ltdl-install
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/

<span class="token function">tar</span> zxvf mhash-0.9.9.9.tar.gz
<span class="token builtin class-name">cd</span> mhash-0.9.9.9/
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmcrypt.la /usr/lib/libmcrypt.la
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmcrypt.so /usr/lib/libmcrypt.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmcrypt.so.4 /usr/lib/libmcrypt.so.4
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmcrypt.so.4.4.8 /usr/lib/libmcrypt.so.4.4.8
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmhash.a /usr/lib/libmhash.a
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmhash.la /usr/lib/libmhash.la
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmhash.so /usr/lib/libmhash.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmhash.so.2 /usr/lib/libmhash.so.2
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libmhash.so.2.0.1 /usr/lib/libmhash.so.2.0.1
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/libmcrypt-config /usr/bin/libmcrypt-config

<span class="token function">tar</span> zxvf mcrypt-2.6.8.tar.gz
<span class="token builtin class-name">cd</span> mcrypt-2.6.8/
/sbin/ldconfig
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token function">tar</span> xzvf cmake-3.15.2.tar.gz
<span class="token builtin class-name">cd</span> cmake-3.15.2/
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

yum remove <span class="token parameter variable">-y</span> libzip

<span class="token function">tar</span> zxvf libzip-1.5.1.tar.gz 
<span class="token builtin class-name">cd</span> libzip-1.5.1
<span class="token function">mkdir</span> build <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> build <span class="token operator">&amp;&amp;</span> cmake <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7F16\u8BD1\u5B89\u88C5-php" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5-php" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5 PHP</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo /usr/local/lib &gt;&gt; /etc/ld.so.conf
echo /usr/local/lib64 &gt;&gt; /etc/ld.so.conf
ldconfig

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> zxvf php-7.3.8.tar.gz
<span class="token builtin class-name">cd</span> php-7.3.8
<span class="token function">cp</span> <span class="token parameter variable">-frp</span> /usr/lib64/libldap* /usr/lib

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/webserver/php --with-config-file-path<span class="token operator">=</span>/usr/local/webserver/php/etc --with-mysql<span class="token operator">=</span>mysqlnd --with-mysqli<span class="token operator">=</span>mysqlnd --with-pdo-mysql<span class="token operator">=</span>mysqlnd --with-iconv-dir<span class="token operator">=</span>/usr/local --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir<span class="token operator">=</span>/usr --enable-xml --disable-rpath --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --enable-mbregex --enable-fpm --enable-mbstring --with-mcrypt --with-gd --enable-gd-native-ttf --with-openssl --with-mhash --enable-pcntl --enable-sockets --with-ldap --with-ldap-sasl --with-xmlrpc --enable-zip --enable-soap --enable-opcache --enable-exif

<span class="token function">make</span> <span class="token assign-left variable">ZEND_EXTRA_LIBS</span><span class="token operator">=</span><span class="token string">&#39;-liconv&#39;</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token function">cp</span> php.ini-production /usr/local/webserver/php/etc/php.ini
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u8F6F\u94FE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/webserver/php/bin/php /usr/bin/
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/webserver/php/bin/phpize /usr/bin/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7F16\u8BD1\u5B89\u88C5-php-\u6269\u5C55\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5-php-\u6269\u5C55\u6A21\u5757" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5 PHP \u6269\u5C55\u6A21\u5757</h4><p>\u4E0B\u9762\u7684\u5B89\u88C5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u5982\u4E0B\u7684\u5B57\u7B26\u4E32, \u8BB0\u4F4F\u5B83</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Installing shared extensions:     /usr/local/webserver/php/lib/php/extensions/no-debug-non-zts-20180731/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>ImageMagick</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> xzvf ImageMagick-7.0.8-10.tar.gz
<span class="token builtin class-name">cd</span> ImageMagick-7.0.8-10
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/include/ImageMagick-7 /usr/local/include/ImageMagick
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PKG_CONFIG_PATH</span><span class="token operator">=</span>/usr/local/lib/pkgconfig

<span class="token function">tar</span> zxvf imagick-3.4.3.tgz
<span class="token builtin class-name">cd</span> imagick-3.4.3
/usr/local/webserver/php/bin/phpize
./configure --with-php-config<span class="token operator">=</span>/usr/local/webserver/php/bin/php-config
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>redis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git://github.com/nicolasff/phpredis
<span class="token builtin class-name">cd</span> phpredis
<span class="token function">git</span> submodule init
<span class="token function">git</span> submodule update
/usr/local/webserver/php/bin/phpize
./configure --with-php-config<span class="token operator">=</span>/usr/local/webserver/php/bin/php-config
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="\u4FEE\u6539-php-ini-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-php-ini-\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539 php.ini \u6587\u4EF6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /usr/local/webserver/php/etc/php.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u627E</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>; extension_dir = &quot;./&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u4E3A\u521A\u521A\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32, \u6CE8\u610F\u53BB\u6389\u524D\u9762\u7684\u5206\u53F7;</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>extension_dir = &quot;/usr/local/webserver/php/lib/php/extensions/no-debug-non-zts-20180731/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E76\u5728\u6B64\u884C\u4E0B\u589E\u52A0\u51E0\u884C</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>extension = &quot;imagick.so&quot;
extension = &quot;redis.so&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u627E</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>;always_populate_raw_post_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u4E3A, \u82E5\u6CA1\u6709\u5219\u6DFB\u52A0</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>always_populate_raw_post_data = On
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u627E</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>;cgi.fix_pathinfo=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u4E3A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>cgi.fix_pathinfo=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u627E</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>;date.timezone =
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u4E3A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>date.timezone = Asia/Hong_Kong 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA-php-fpm-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-php-fpm-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA php-fpm \u914D\u7F6E\u6587\u4EF6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/webserver/php/etc/
<span class="token function">mv</span> php-fpm.conf.default php-fpm.conf
<span class="token function">vi</span> /usr/local/webserver/php/etc/php-fpm.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u4FEE\u6539\u7684\u51E0\u4E2A\u5730\u65B9</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>pid = run/php-fpm.pid
error_log = log/php-fpm.log
process_control_timeout = 5s
rlimit_files = 65535
rlimit_core = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> php-fpm.d/www.conf.default php-fpm.d/www.conf
<span class="token function">vi</span> /usr/local/webserver/php/etc/php-fpm.d/www.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u4FEE\u6539\u7684\u51E0\u4E2A\u5730\u65B9</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>listen.backlog = 128
pm = static
pm.max_children = 128
pm.start_servers = 20
pm.min_spare_servers = 5
pm.max_spare_servers = 35
pm.max_requests = 1024
rlimit_core = 0
catch_workers_output = yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8 php-cgi \u8FDB\u7A0B, \u76D1\u542C 127.0.0.1 \u7684 9000 \u7AEF\u53E3, \u8FDB\u7A0B\u6570\u4E3A 128, \u82E5\u670D\u52A1\u5668\u5185\u5B58\u5C0F\u4E8E 3GB, \u53EF\u4EE5\u6539\u4E3A 64 \u8FDB\u7A0B, \u7528\u6237\u4E3A www;</p><p>\u56DE\u5230 php \u6E90\u7801\u76EE\u5F55, \u7F16\u8F91 php-fpm.service</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> sapi/fpm/php-fpm.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[Unit]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u6CA1\u6709\u4EC0\u4E48\u9700\u8981\u7F16\u8F91\u7684, \u76F4\u63A5\u5C06 <code>php-fpm.service</code> \u590D\u5236\u5230 <code>/usr/lib/systemd/system/</code> \u76EE\u5F55\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> sapi/fpm/php-fpm.service /usr/lib/systemd/system/
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-SHn</span> <span class="token number">65535</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> php-fpm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> php-fpm restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5173\u95ED</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> php-fpm stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u5B89\u88C5\u5B8C\u7684\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5B89\u88C5\u5B8C\u7684\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u5220\u9664\u5B89\u88C5\u5B8C\u7684\u6587\u4EF6\u5939</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> cmake-3.15.2 ImageMagick-7.0.8-10 imagick-3.4.3 libiconv-1.15 libmcrypt-2.5.8 libzip-1.5.1 mhash-0.9.9.9 php-7.3.8 phpredis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5728-nginx-\u4E2D\u8C03\u7528-php" tabindex="-1"><a class="header-anchor" href="#\u5728-nginx-\u4E2D\u8C03\u7528-php" aria-hidden="true">#</a> \u5728 Nginx \u4E2D\u8C03\u7528 PHP</h4><p>\u521B\u5EFA <code>fcgi.conf</code> \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /usr/local/webserver/nginx/conf/fcgi.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u865A\u62DF\u4E3B\u673A</p><p>\u5728 <code>server</code> \u5C42\u7EA7\u4E0B\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location ~ .*\\.(php|php5)?$
{      
  fastcgi_pass  127.0.0.1:9000;
  fastcgi_index index.php;
  include fcgi.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0 Nginx \u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,71),c=[l];function p(d,r){return s(),a("div",null,c)}const o=n(i,[["render",p],["__file","CentOS \u5B89\u88C5 PHP 7.3.html.vue"]]);export{o as default};
