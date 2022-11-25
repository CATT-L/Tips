import{_ as e,o as i,c as n,e as s}from"./app.09614df6.js";const d={},r=s(`<h1 id="nginx-\u8BC1\u4E66\u914D\u7F6E-\u8DF3\u8F6C-\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#nginx-\u8BC1\u4E66\u914D\u7F6E-\u8DF3\u8F6C-\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> Nginx \u8BC1\u4E66\u914D\u7F6E \u8DF3\u8F6C \u53CD\u5411\u4EE3\u7406</h1><p>\u4E0B\u65B9\u914D\u7F6E\u5305\u542B\u4E86 \u8BC1\u4E66\u914D\u7F6E, \u9875\u9762\u8DF3\u8F6C, \u53CD\u5411\u4EE3\u7406 \u529F\u80FD</p><h4 id="\u9700\u8981\u4E0A\u4F20\u8BC1\u4E66\u5230\u6307\u5B9A\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u4E0A\u4F20\u8BC1\u4E66\u5230\u6307\u5B9A\u76EE\u5F55" aria-hidden="true">#</a> \u9700\u8981\u4E0A\u4F20\u8BC1\u4E66\u5230\u6307\u5B9A\u76EE\u5F55</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen 443;
    server_name catt-l.com;

    ssl on;
    ssl_certificate /disk/cert/catt-l.com.pem;
    ssl_certificate_key /disk/cert/catt-l.com.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location ~
    {
        add_header Access-Control-Allow-Origin *;

        proxy_pass http://192.168.0.4;
        
        proxy_set_header        Host                  $host;
        proxy_set_header        X-Real-IP             $remote_addr;
        proxy_set_header        X-Real-Port           $remote_port;
        proxy_set_header        x-remote-addr         $http_x_forwarded_for;
        proxy_set_header        X-Forwarded-For       $remote_addr;
    }
}

server {
    listen 443;
    server_name www.catt-l.com;

    rewrite ^(.*)$  https://catt-l.com$1 permanent;  
}

server {
    listen 80;
    server_name catt-l.com www.catt-l.com;

    rewrite ^(.*)$  https://$host$1 permanent;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53CD\u5411\u4EE3\u7406\u4E5F\u53EF\u4EE5\u901A\u8FC7include\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406\u4E5F\u53EF\u4EE5\u901A\u8FC7include\u5F15\u5165" aria-hidden="true">#</a> \u53CD\u5411\u4EE3\u7406\u4E5F\u53EF\u4EE5\u901A\u8FC7include\u5F15\u5165</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

proxy_pass http://192.168.0.4;
include proxy.conf

proxy.conf
-------------------------
proxy_connect_timeout 300s;
proxy_send_timeout 900;
proxy_read_timeout 900;
proxy_buffer_size 32k;
proxy_buffers 4 64k;
proxy_busy_buffers_size 128k;
proxy_redirect off;
proxy_hide_header Vary;
proxy_set_header Accept-Encoding &#39;&#39;;
proxy_set_header Referer $http_referer;
proxy_set_header Cookie $http_cookie;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[r];function a(v,c){return i(),n("div",null,l)}const o=e(d,[["render",a],["__file","Nginx \u8BC1\u4E66\u914D\u7F6E \u8DF3\u8F6C \u53CD\u5411\u4EE3\u7406.html.vue"]]);export{o as default};
