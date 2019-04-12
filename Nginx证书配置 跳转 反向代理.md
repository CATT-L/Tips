

#### 需要上传证书到指定目录

```
server {
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
```


#### 反向代理也可以通过include引入


```


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
proxy_set_header Accept-Encoding '';
proxy_set_header Referer $http_referer;
proxy_set_header Cookie $http_cookie;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```