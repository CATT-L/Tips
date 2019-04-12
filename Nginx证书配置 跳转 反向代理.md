

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