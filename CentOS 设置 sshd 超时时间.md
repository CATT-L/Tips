# CentOS 设置 sshd 超时时间



* 修改 sshd 配置文件

  ```shell
  vi /etc/ssh/sshd_config
  ```

* 设置下面两个参数

  ```shell
  ClientAliveInterval 10
  ClientAliveCountMax 8640
  ```

* 重启 sshd 服务

  ```shell
  service sshd restart
  ```

  

