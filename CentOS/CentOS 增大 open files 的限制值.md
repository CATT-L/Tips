# CentOS 增大 open files 的限制值

#### 

```shell
vi /etc/security/limits.conf
```

在 `# End of file` 之上添加下面内容

```shell
*  -  nofile  65536
```

该语句表示：每一个用户的默认打开文件数是65536。

修改完毕之后，重启服务器。

然后输入：

```shell
ulimit -a
```

将会输出：

```shell
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
file size               (blocks, -f) unlimited
pending signals                 (-i) 1024
max locked memory       (kbytes, -l) 32
max memory size         (kbytes, -m) unlimited
open files                      (-n) 65536
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 819200
stack size              (kbytes, -s) 10240
cpu time               (seconds, -t) unlimited
max user processes              (-u) 16384
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited
```

只要 open files 的限制值达到 65536，则设置成功。