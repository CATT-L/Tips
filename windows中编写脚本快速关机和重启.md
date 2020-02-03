# windows中编写脚本快速关机和重启

##### 关机

shuts.vbs

```shell
CreateObject("WScript.Shell").run "shutdown -s -t 0", 0
```

##### 重启

shutr.vbs

```shell
CreateObject("WScript.Shell").run "shutdown -r -t 0", 0
```



##### 快速调用

新建一个目录用于存储各种快捷方式, 例如 `C:\FAST`

新建目录用于存储脚本 `C:\FAST\scripts`

将脚本放入目录

在 `C:\FAST` 中建立脚本的快捷方式, 将快捷方式命名为 `shuts`, `shutr`, 无需后缀

将 `C:\FAST` 加入环境变量的Path中

`win+r` 输入 shuts 即可快速关机



![1580717569447](assets/windows%E4%B8%AD%E7%BC%96%E5%86%99%E8%84%9A%E6%9C%AC%E5%BF%AB%E9%80%9F%E5%85%B3%E6%9C%BA%E5%92%8C%E9%87%8D%E5%90%AF/1580717569447.png)

![1580717596374](assets/windows%E4%B8%AD%E7%BC%96%E5%86%99%E8%84%9A%E6%9C%AC%E5%BF%AB%E9%80%9F%E5%85%B3%E6%9C%BA%E5%92%8C%E9%87%8D%E5%90%AF/1580717596374.png)

