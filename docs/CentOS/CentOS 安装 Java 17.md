# CentOS 安装 Java 17

## 删除旧版本Java

查找

```bash
rpm -qa|grep java
```

删除

```bash
rpm -e --nodeps 查询到的jdk
```



### 下载

去官网下载Java17

https://www.oracle.com/java/technologies/downloads/#java17



找到对应版本然后下载

```bash
wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz
```



### 解压

```bash
tar -xzvf jdk-17_linux-x64_bin.tar.gz
```



### 移动到 /usr/local/java/

若没有目录则创建它

```bash
mv jdk-17.0.5 /usr/local/java/
```



### 配置环境变量

```bash
#set java environment
export JAVA_HOME=/usr/local/java/jdk-17.0.5
export CLASSPATH=.:$JAVA_HOME/lib
export PATH=$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin
```

注意: java17是没有jre/bin目录的，但是为了方便切换到8版本，还是保留吧。想切换到java只需要修改环境变量JAVA_HOME为你java8的安装目录即可。



随后执行下列指令使环境变量生效

```bash
source /etc/profile
```



### 测试安装结果

```bash
java --version
```



