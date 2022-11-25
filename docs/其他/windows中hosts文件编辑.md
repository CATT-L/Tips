# windows中hosts文件编辑



##### 让当前用户可以直接编辑

进入目录 `C:\Windows\System32\drivers\etc`

编辑 `hosts` 的属性

![1580716905891](./assets/hosts%E6%96%87%E4%BB%B6%E7%BC%96%E8%BE%91/1580716905891.png)

添加使用的账户

![1580716879177](./assets/hosts%E6%96%87%E4%BB%B6%E7%BC%96%E8%BE%91/1580716879177.png)

给指定账户添加权限

![1580716858740](./assets/hosts%E6%96%87%E4%BB%B6%E7%BC%96%E8%BE%91/1580716858740.png)



##### 在windows中用vbs脚本快速用编辑器打开hosts文件

原理, notepad 和 sublime 都支持传入文件路径作为参数启动

* notepad `notepad C:\Windows\System32\drivers\etc\hosts`
* sublime `sublime C:\Windows\System32\drivers\etc\hosts`



openByNotepad.vbs

```shell
Dim ws
Set ws = CreateObject("WScript.Shell")
ws.Exec("notepad C:\Windows\System32\drivers\etc\hosts")
```



openBySublime.vbs

```shell
Dim ws
Set ws = CreateObject("WScript.Shell")
ws.Exec("C:\APP\Sublime Text 3\sublime_text.exe C:\Windows\System32\drivers\etc\hosts")
```

