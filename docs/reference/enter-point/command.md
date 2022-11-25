# Command 命令

## 基本概念

命令是在服务端执行 PHP 脚本的入口，通过下方语句可以查看命令列表：

```shell
php bin/hyperf.php
```

通过下方语句执行对应的命令，例如 `demo:echo`

```shell
php bin/hyperf.php demo:echo
```

若有需要，也可以携带参数, 例如 `demo:params` 需要携带一些参数

```shell
php bin/hyperf.php demo:params --class="G305" --name="张三" --number="1503050025"
```

上述语句因为在命令行里执行，为便于观看，当然可以用命令行的换行写法, 即末尾加 `[空格]\`

```shell
php bin/hyperf.php demo:params \
--class="G305" \
--name="张三" \
--number="150300025"
```

更多细节内容请查看 [官方文档](https://hyperf.wiki/2.2/#/zh-cn/command)

## 目录规范

参考 Controller 控制器。

类名以 Command 为后缀。

## 代码规范

### 基本框架

下方是一个最小化的 Command 代码片段

```php
<?php

namespace App\Command\Demo;

use Hyperf\Command\Annotation\Command;

/**
 * @Command()
 */
class DemoEchoCommand extends \Hyperf\Command\Command {

    protected $name = 'demo:echo';

    protected static $defaultDescription = '示例/回显';

    public function handle () {

    }
}

```

需要注意的地方：

- 通过注解 `@Command` 来标识它是一份命令行代码
- 继承 `\Hyperf\Command\Command` 类
  > 可以注意到它与注解重名，但请不要重命名它  
  > 因为写起来很麻烦，且没有必要
- `$name` 是命令行的执行名称，也就是上面 `php bin/hyperf.php <执行名称>` 后面的东西
- `static $defaultDescription` 是给人看的介绍，在执行 `php bin/hyperf.php` 的时候，会展示
- `function handle ()` 是执行的代码入口

### 执行名称

在列表中，执行名称会以第一个冒号 `:` 进行分组，因此我们命名的时候，也要根据不同的功能点，来确定第一个冒号的位置。  
后面也可以出现多个冒号，没啥影响。

在命名的时候，以短横线 `-` 来替换空格（短横线命名法）, 这是为了方便阅读和输入。

> 驼峰命名不方便阅读，但方便输入；  
> 下划线命名方便阅读，但不方便输入；  
> 而短横线命名，就既方便阅读，也方便输入啦！

---

例子：

- 抽奖功能-扫描符合开奖条件的记录触发开奖
  > 执行名称：lottery:scan-trigger-run  
  > 命令介绍：抽奖-扫描符合开奖条件的记录触发开奖

### 业务代码

#### 类名

业务代码放在业务层相应功能的目录下，以 Command 开头、Service 结尾，其类名尽量与对应 Command 一致。

一份命令行业务类，专注一个操作，不要把不同的操作混在一起。

例如：

- Command 类名： `DemoEchoCommand`
- Service 类名: `CommandDemoEchoService`

#### 入口函数

若无特殊情况，入口函数统一为 `public function handle ($params)`。

#### 调用方式

Command 代码里不需要搞对象注入，一般就一个调用点而已，直接用 `di` 函数注入调用更方便。

例如：

```php{20-23}
<?php

namespace App\Command\Demo;

use Hyperf\Command\Annotation\Command;

use App\Service\Demo\CommandDemoEchoService\CommandDemoEchoService;

/**
 * @Command()
 */
class DemoEchoCommand extends \Hyperf\Command\Command {

    protected $name = 'demo:echo';

    protected static $defaultDescription = '示例/回显';

    public function handle () {

      di(CommandDemoEchoService::class)->([
          'from' => '命令:示例/回显',
          'time' => date('Y-m-d H:i:s'),
      ]);

    }
}

```

#### 传入参数

通过重写 configure() 函数，在里面调用 addOption() 的方式配置传入参数，随后可在代码入口，通过 $input 对象读取。  

详情见下方代码示例。  

```php{20-26,30-34}
<?php


namespace App\Command\Demo;

use App\Service\Demo\CommandDemoParamsService;
use App\Utils\ValidateUtils;
use Hyperf\Command\Annotation\Command;
use Symfony\Component\Console\Input\InputOption;

/**
 * @Command()
 */
class DemoParamsCommand extends \Hyperf\Command\Command {

    protected $name = 'demo:params';

    protected static $defaultDescription = '示例/带参数';

    protected function configure () {
        parent::configure();

        $this->addOption('class', '', InputOption::VALUE_REQUIRED, '班级');
        $this->addOption('name', '', InputOption::VALUE_REQUIRED, '姓名');
        $this->addOption('number', '', InputOption::VALUE_REQUIRED, '学号');
    }

    public function handle () {

        $params = [
            'class'  => $this->input->getOption('class'),
            'name'   => $this->input->getOption('name'),
            'number' => $this->input->getOption('number'),
        ];

        ValidateUtils::mustValidate($params, [
            'class'  => 'required',
            'name'   => 'required',
            'number' => 'required',
        ]);

        di(CommandDemoParamsService::class)->handle($params);
    }
}

```

## 摒弃的方案

### :x: 在 Command 中运行其他命令

因为命令行代码是执行入口，如果我们在这里调用其他的命令行代码，会变得混乱，因此我们避免这种操作。  

并且我们的逻辑下放到了 Service 业务层，若有必要，在业务层同层级调用即可。  

### :x: 在非 Command 中运行命令

首先列举一下可以执行的位置：

- 同层级，即其他的入口 （例如控制器、定时任务之类的）  
- 下层级，即业务层或者模型层，倒回来调用命令  

下面逐一解释

#### 上层级

代码入口会有上层级吗？它自身就是最顶层了，所以上面也就没列举。不需要考虑这种情况。

#### 同层级

大家都是代码入口，请不要这样调用其他的入口，不然会造成混乱。  

#### 下层级

代码应当自上而下调用，最多做到同层级调用（例如业务层）。  
如果从下往上调用，那可真是乱成一锅粥了！  

例如：
- :x: 模型层调用业务层
- :x: 业务层调用入口层
