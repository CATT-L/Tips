# 让 Git 不再跟踪配置文件的变化

有的文件, 比如说配置文件, 我们不希望将修改后的内容提交到仓库, 但是如果添加到 `.gitignore` 中就会完全没有这个文件, 导致项目无法运行;



因此我们可以让一个文件至少提交一次, 然后不再跟踪之后的变更;

执行以下指令即可

```shell
git update-index --skip-worktree [文件路径]
```



撤销这个操作, 使用下面命令

```shell
git update-index --no-skip-worktree [文件路径]
```

