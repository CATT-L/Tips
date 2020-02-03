# windows中通过运行快速启动软件

新建一个目录用于存放快捷方式, 例如 `C:\FAST`

在该目录下放入软件的快捷方式并给予简单的命名

![1580717740897](assets/windows%E4%B8%AD%E9%80%9A%E8%BF%87%E8%BF%90%E8%A1%8C%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E8%BD%AF%E4%BB%B6/1580717740897.png)

将该目录加入环境变量

![1580717795019](assets/windows%E4%B8%AD%E9%80%9A%E8%BF%87%E8%BF%90%E8%A1%8C%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E8%BD%AF%E4%BB%B6/1580717795019.png)



用`win+r`打开运行, 输入快捷方式名称, 即可快速打开软件

![1580717849094](assets/windows%E4%B8%AD%E9%80%9A%E8%BF%87%E8%BF%90%E8%A1%8C%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E8%BD%AF%E4%BB%B6/1580717849094.png)

在命令行CMD中可以通过 `start 快捷方式名称` 快速打开软件



还可以将一些比较复杂的操作写成vbs脚本, 然后创建快捷方式进行快速执行

例如 **使用sublime打开hosts文件**, **电脑关机**, **用putty通过root用户登录xx服务器, 采用某个私钥文件验证** 等操作