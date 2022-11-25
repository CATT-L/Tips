# Service 业务层

::: warning 注意

下列提到的项目信息仅供示范，以实际项目为准

:::


## 基本概念

业务层用于编写实际的业务逻辑。


## 目录规范

业务位于 Service 目录下。



### 多端前缀

此处目录前缀规范与 Controller 控制器一致。



### 功能模块

此处目录规范与 Controller 控制器一直。

文件名均以 Service.php 为后缀。

例：

管理后台-活动参与-查询的目录，可以有下面几种分法

`/app/Service/Manage/Activity/ActivityRecordQueryService.php`

`/app/Service/Manage/Activity/Record/RecordQueryService.php`

`/app/Service/Manage/Activity/RecordQueryService.php`



#### 单一功能原则

在逻辑较为复杂的情况下，一个Service应当专注完成一种甚至是一个业务逻辑。

也就是说，一个类只有一个操作是可能的。

不必担心这种设计会让代码看起来很简陋，因为一个复杂的逻辑，必定包含大量的私有方法。因此，在这种情况下，即使一个类中只有一个操作（公有方法），但由于有多个私有方法，所以实际上它并不简陋。



##### 例：一种业务逻辑的情况

查询相关放在 *QueryService.php 里

导出相关放在 *ExportService.php 里



##### 例： 一个业务逻辑的情况

活动报名订单支付 ActivityOrderPayService::handle





## 代码规范

### 返回 ResultVo 值对象

Service层的公有函数，返回 ResultVo 值对象。



### 函数名和变量名

函数名和变量名，统一使用驼峰命名法，通常首字母小写。

常量，采用全大写的下划线命名。

例外：

- 成员变量，如果它的用途是一个配置，那么采用下划线命名法。
- 对象注入，为了方便复制，其变量名通常与注入类名一致，自然而然首字母也是大写。



常用词缩写视为正常单词，例如 Json、Xml、Html、Id、Tcp。

不要随意制造缩写，不然其他人看不懂，名字长一点也没有问题的，反正有自动补全。

**反例：**

- 拒付：dishonor -> dis



优先采用英语命名，若实在想不到符合含义的英文名称，可退而采用拼音命名。

变量、方法名限制使用ASCII字符。



public 函数、变量无前缀，例： `Foo::bar()`。

protected 函数、变量单下划线前缀，例：`Foo::_bar()` 。

private 函数、变量双下划线前缀，例：`Foo::__bar()` 。



### 代码引用限制

Service层不能调用比自己上一层的代码，例如所有的入口代码

- Controller 控制器

- Command 命令

- Process 进程

- Crontab 定时任务

- ……

  

Service层可以调用同一层级（即Service层）的代码，但不提倡注入成员变量，容易产生循环依赖。

可以通过`di`函数获取指定对象并调用。



Service层可以调用下层级的代码，例如Model层的代码，提倡注入，也可以用 `di` 函数。

- Dao 数据访问对象
- Entity 数据实体
- ……



### 配置 config 读取方式

配置读取统一采用 @Value 注入，不建议用 config 函数。

因为注入可以在启动的时候检查，有无疏漏的配置，config 函数只有执行到才能发现问题。

例：

```php{5,11,17}
class ImageActionService {

    /**
     * @var string
     * @Value(key="app_base_url")
     */
    protected $app_base_url;

    /**
     * @var string
     * @Value(key="qiniu.default.access_key")
     */
    protected $access_key;

    /**
     * @var string
     * @Value(key="qiniu.default.secret_key")
     */
    protected $secret_key;
}
```



### 不要在代码中用 env 函数

在 /config/ 目录下的配置，可以用 env 函数读取环境变量。

但 /app/ 下的代码，应当读取 /config/ 目录下的配置，而不是直接通过 env 读取。

这是为了避免不必要的混乱。

