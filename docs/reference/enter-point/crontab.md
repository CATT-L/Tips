# Crontab 定时任务

## 基本概念

Hyperf 支持秒级定时任务，其定时设置规则与 Linux 里的 crontab 功能一致。  

更多细节内容请查看 [官方文档](https://hyperf.wiki/2.2/#/zh-cn/crontab)

## 前置条件

定时任务依赖 Hyperf 的进程功能，是启动了一个常驻进程来调度定时任务。  

此外，Hyperf 官方提供的定时任务有一些不太合理的地方，因此我们的框架中做出了一些针对性的改进。  

> 官方的定时任务，好多东西都放在注解里面，编写起来太痛苦了 QAQ


因此，要让定时任务正常工作，需要保证如下前提条件：  


::: tip 提示

通常情况下, 这些东西已经默认配好了, 如果发现不能正常工作, 请按照下方内容逐一排查。

:::

### 打开进程开关

在 `config/autoload/process_config.php` 中， 令 `enable` 键的值为 `true`。  
即令 `config('process_config.enable')` 为 `true`。  

为方便配置，我们把这个配置值放到了 .env 文件中。

例：

```php{6-7}
// config/autoload/process_config.php

<?php

return [
    // 全局进程开关
    'enable'     => (bool) env("PROCESS_ENABLE", true),

    // 屏蔽进程启动
    'block_list' => [
        \App\Process\DemoProcess::class,
    ],
];


```

```
// .env

# 全局进程开关
PROCESS_ENABLE=1
```




### 开启定时任务调度进程

在 `config/autoload/process.php` 中，加入定时任务调度进程类，例：

```php
return [
  Hyperf\Crontab\Process\CrontabDispatcherProcess::class,
];
```

### 打开定时任务开关

在 `config/autoload/crontab.php` 中，令 `enable` 键的值为 `true`。  
即令 `config('crontab.enable')` 为 `true`。  

为方便配置，我们把这个配置值放到了 .env 文件中。

例：

```php{5-6}
// config/autoload/crontab.php

return [

    // 是否开启定时任务
    'enable'     => (bool) env("CRONTAB_ENABLE", true),

    'crontab'    => [],

    // 屏蔽启动
    'block_list' => [
        \App\Crontab\Demo\DemoEchoCron::class,
    ],
];

```

```
// .env

# 全局定时开关
CRONTAB_ENABLE=1
```

## 目录规范

### 存放位置

定时任务代码，位于 app/Crontab 目录。

### 多端前缀

此处目录前缀规范与 Controller 控制器一致。

### 功能模块

此处目录规范与 Controller 控制器一致。

类名以 Cron 为后缀。


## 代码规范

### 基本框架

下方是一个最小化的 Crontab 代码片段

```php
<?php

namespace App\Crontab\Demo;

use App\Concern\Hyperf\Crontab\AbstractCrontab;
use Hyperf\Crontab\Annotation\Crontab;

/**
 * @Crontab()
 */
class DemoEchoCron extends AbstractCrontab {

    protected $rule = '* * * * * *';

    public function execute () {
        
    }
}

```
  
  
需要注意的地方：  

- 通过注解 `@Crontab` 来标识它是一份定时任务代码  
- 继承 `\App\Concern\Hyperf\Crontab\AbstractCrontab` 类名  
- `$rule` 是定时规则  
- `function execute ()` 是执行的代码入口  

### 对应的命令行入口

为了方便进行功能调试，以及必要的时候手动触发定时任务，对于所有的定时任务，需要有一份功能完全相同的命令行。  

### 业务代码

与命令行规则一致。


## 摒弃的方案

### :x: 通过配置文件定义定时任务

理由：不方便维护。

### :x: 官方示例的定时任务编写方式

理由：很多东西写在注解里面，不方便编写也不方便阅读。
