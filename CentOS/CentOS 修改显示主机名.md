# CentOS 修改显示主机名



### 仅当前有效, 重启后失效

```shell
hostname CATT-L
```

### 永久生效

编辑文件

```shell
vi /etc/hostname
```

将里面的值改成主机名即可



或者直接 echo 覆盖



```shell
echo CATT-L > /etc/hostname
```



