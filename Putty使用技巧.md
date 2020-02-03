# Putty使用技巧

##### 参数启动

putty.exe

[user@]host # [用户名@]地址

[-ssh | -telnet | -rlogin | -raw | -serail ] # 连接方式, 默认 -ssh

[-P port] # 端口号

[-l user] # 用户名

[-pw password] # 密码

[-i ppk] # 私钥文件地址, .ppk格式

[-m script] # 登录后执行的shell脚本文件(该文件位于本地计算机而不是远程计算机)

[-load sessname] # 读取putty中存储的会话数据并连接



例子:

- 普通连接 `putty 192.168.0.1`
- 用户名连接 `putty root@192.168.0.1`, `putty 192.168.0.1 -l root`
- 其它端口连接 `putty root@192.168.0.1 -P 233`
- 带密码 `putty root@192.168.0.1 -pw password`
- 用私钥 `putty root@192.168.0.1 -i D:\ssh_keys\mykey.ppk`
- 读取保存名为 test 的会话并连接 `putty -load test`
- 登录后执行脚本 `putty root@192.168.0.1 -i D:\ssh_keys\mykey.ppk -m D:\ssh_scripts\myscript.sh`



##### 在windows中使用vbs脚本快速连接

test.vbs

```shell
Dim ws
Set ws = CreateObject("WScript.Shell")
ws.Exec("C:\APP\putty\PUTTY.EXE root@192.168.0.1 -i D:\ssh_keys\mykey.ppk")
```



##### 记住登录用户名

![1580713866070](assets/Putty%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/1580713866070.png)



##### 密钥登录

![1580713930005](assets/Putty%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/1580713930005.png)



