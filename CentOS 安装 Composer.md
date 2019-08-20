# CentOS 安装 Composer



### 下载安装

```shell
curl -o composer.php https://getcomposer.org/installer
php composer.php
mv composer.phar /usr/local/bin/composer
chmod a+x /usr/local/bin/composer
```



### 更换阿里云镜像

<https://developer.aliyun.com/composer>

#### 全局配置

所有项目都会使用该镜像地址：

```shell
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

取消配置

```shell
composer config -g --unset repos.packagist
```



#### 项目配置

仅修改当前工程配置，仅当前工程可使用该镜像地址：

```shell
composer config repo.packagist composer https://mirrors.aliyun.com/composer/
```

取消配置

```shell
composer config --unset repos.packagist
```



#### 调试

composer 命令增加 -vvv 可输出详细的信息，命令如下：

```shell
composer -vvv require alibabacloud/sdk
```



