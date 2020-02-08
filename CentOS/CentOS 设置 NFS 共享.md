# CentOS 设置 NFS 共享

首先安装服务

```shell
yum install -y nfs-utils rpcbind
```



开机启动

```shell
systemctl enable nfs
systemctl enable rpcbind
```



启动服务

```shell
service nfs start
service rpcbind start
```



编辑配置

`vi /etc/exports`

```conf
/disk/extend-c/nfs *(rw,sync,insecure,all_squash,anonuid=1000,anongid=1000)
```



注意: 我这里创建了名为 `nfs` 的用户和 `custom` 的组, uid 和 gid 分别为 1000 和 1000, 保证分享的目录用户为指定的用户和组;

```shell
chown -R nfs:custom /disk/extend-c/nfs
chmod -R 0777 /disk/extend-c/nfs
```



生效配置

`exportfs -a` 或者 `exportfs -rv`



查看nfs目录列表

```shell
showmount -e 192.168.0.111
```



客户端挂载

```shell
smount -t nfs 192.168.0.111:/disk/extend-c/nfs ./nfs
```



取消挂载

```shell
umount ./nfs
```



参数说明

> 访问权限选项
>
> - 设置输出目录只读：ro
> - 设置输出目录读写：rw
>
> 用户映射选项
>
> - all_squash：将远程访问的所有普通用户及所属组都映射为匿名用户或用户组（nfsnobody）；
> - no_all_squash：与all_squash取反（默认设置）；
> - root_squash：将root用户及所属组都映射为匿名用户或用户组（默认设置）；
> - no_root_squash：与rootsquash取反；
> - anonuid=xxx：将远程访问的所有用户都映射为匿名用户，并指定该用户为本地用户（UID=xxx）；
> - anongid=xxx：将远程访问的所有用户组都映射为匿名用户组账户，并指定该匿名用户组账户为本地用户组账户（GID=xxx）；
>
> 其它选项
>
> - secure：限制客户端只能从小于1024的tcp/ip端口连接nfs服务器（默认设置）；
> - insecure：允许客户端从大于1024的tcp/ip端口连接服务器；
> - sync：将数据同步写入内存缓冲区与磁盘中，效率低，但可以保证数据的一致性；
> - async：将数据先保存在内存缓冲区中，必要时才写入磁盘；
> - wdelay：检查是否有相关的写操作，如果有则将这些写操作一起执行，这样可以提高效率（默认设置）；
> - no_wdelay：若有写操作则立即执行，应与sync配合使用；
> - subtree：若输出目录是一个子目录，则nfs服务器将检查其父目录的权限(默认设置)；
> - no_subtree：即使输出目录是一个子目录，nfs服务器也不检查其父目录的权限，这样可以提高效率；

