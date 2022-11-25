# Controller 控制器

::: warning 注意

下列提到的项目信息仅供示范，以实际项目为准

:::

## 基本概念

控制器是HTTP请求的入口。

更多细节内容请查看 [官方文档](https://hyperf.wiki/2.2/#/zh-cn/controller)

## 目录规范

控制器位于 Controller 目录下。

从功能上来说，其实控制器放在哪里都能跑，只要加上@Controller注解，或者通过别的途径将路由注册上，都是可以运行的。

但代码除了给机器跑，还得让人来维护，因此，我们统一放在Controller目录下。

### 多端前缀

通常一个后端，会给多个端提供API服务，因此我们用一个目录和固定的prefix来区分。

例如遇见特粉，分为下列几种：

- 车主端（Owner）
- 认证端（Audit）
- 商家端（Merchant）
- 内部调用（Internal）

那么目录结构如下

```shell
Controller
|--Owner
|--Audit
|--Merchant
|--Internal
```



对应的，接口路由也会通过指定前缀进行区分：

```shell
/owner/*
/audit/*
/merchant/*
/internal/*
```



### 功能模块

随后，根据功能模块划分目录，在指定目录下编写控制器代码。

例如特粉活动模块，其功能结构如下

```shell
- 活动
- 活动-配置
- 活动-打卡点
- 活动-打卡点-打卡记录
- 活动-打卡人员
- 活动-俱乐部
- 活动-商品
- 活动-订单
- 活动-订单-商品
- 活动-订单-退款
- 活动-参与用户
```

那么，其目录结构将是这样

```shell
Controller
|--Owner
|  |--Activity
|  |  |--Config
|  |  |  |--ConfigController.php
|  |  |--Checkpoint
|  |  |  |--Record
|  |  |  |  |--RecordController.php
|  |  |  |--CheckpointController.php
|  |  |--Checker
|  |  |  |--CheckerController.php
|  |  |--Club
|  |  |  |--ClubController.php
|  |  |--Goods
|  |  |  |--GoodsController.php
|  |  |--Order
|  |  |  |--Goods
|  |  |  |  |--GoodsQueryController.php
|  |  |  |--Refund
|  |  |  |  |--RefundQueryController.php
|  |  |  |  |--RefundActionController.php
|  |  |  |--OrderController.php
|  |  |  |--OrderActionCreateController.php
|  |  |--User
|  |  |  |--UserController.php
|  |  |--ActivityQueryController.php
|  |  |--ActivityActionController.php
```

有时候有的控制器特别简单，可能只有一两个方法，然后只有一份控制器文件，那也可以不要那个目录，直接放到上一层的模块目录下面，例如：

```shell{17-23}
Controller
|--Owner
|  |--Activity
|  |  |--Checker
|  |  |  |--CheckerController.php
|  |  |--Goods
|  |  |  |--GoodsController.php
|  |  |--Order
|  |  |  |--Goods
|  |  |  |  |--GoodsQueryController.php
|  |  |  |--Refund
|  |  |  |  |--RefundQueryController.php
|  |  |  |  |--RefundActionController.php
|  |  |  |--OrderController.php
|  |  |  |--OrderActionCreateController.php
|  |  |  
|  |  |--ActivityQueryController.php
|  |  |--ActivityActionController.php
|  |  |--ActivityConfigController.php
|  |  |--CheckpointController.php
|  |  |--CheckpointRecordController.php
|  |  |--ActivityUserController.php
|  |  |--ClubController.php
```

控制器的命名不必过度重复目录（命名空间）已经有的名词。

例如车主端-活动-订单-退款-查询相关，不必写成 `OwnerActivityOrderRefundQueryController.php`, 过于繁琐，命名空间里已经有前面的信息了。

写成 `RefundQueryController.php` 即可，此时完整目录 `Owner/Activity/Order/Refund/RefundQueryController.php`。

也不要写成 `QueryController.php`，这样又太过于突兀！这是在查询什么呢？



具体如何分配、命名，不做强制要求，只要做到**一看完整路径，知道代码用途**即可。



需要注意的一点，**目录名按照词义划分**，而不是单词划分。

例如红包模块（red packet）, 应该划分为一个名为 `RedPacket` 的目录，而不是 `Red/Packet`。



## 划分规范

一个控制器里可以有很多个API方法函数，如果一个文件里有太多的函数在里面，那其实看着有点累。

因此我目前是按照接口功能，这么划分的：

| 功能组     | 控制器后缀        | 路由前缀  |
| ---------- | ----------------- | --------- |
| 选项下拉框 | OptionsController | /options/ |
| 查询       | QueryController   | /query/   |
| 操作       | ActionController  | /action/  |

这样无论从代码还是路由观看，都是一目了然。



### 一个API一个控制器的情况？

先行代码里存在一个控制器里只有一个API的情况，例如

```shell:no-line-numbers
ActivityClubActionAddController
ActivityClubActionDeleteController
ActivityClubQueryListController
```

不仅如此，命名也特别冗长诶！而且有把一个词义分割成两个单词的情况，例如 `Red/Packet`。

这些代码是通过生成器进行生成的，所以不用太过在意。

因为生成器生成，一个文件一个函数，会容易实现得多。

其他问题，因为这个生成器也在开发实验阶段，一些无伤大雅的问题，后面都会逐步完善。



## 代码规范

### 几乎没有逻辑的情况

例如选项下拉框，都是拿的枚举列表，直接返回就可以了，这种接口，并不需要下探到业务层（Service），直接构造数据返回即可。

例子：

```php{11}
/**
 * @Controller(prefix="/owner/activity/options")
 */
class ActivityOptionsController extends AbstractController {

    /**
     * @PostMapping(path="status")
     */
    public function status () {
      
      $result = ResultVo::buildSuccess(ActivityStatusEnum::born()->getExcludedOptions());
      
      return $result->toResponse();
    }

}

```



### 有逻辑的情况

这时候控制器的功能，是获取参数、校验参数并传递给业务层处理，然后构造参数返回。

例子：

```php{6-10,31}
/**
 * @Controller(prefix="/owner/activity/action")
 */
class ActivityActionController extends AbstractController {
  
    /**
     * @var ActivityActionService
     * @Inject()
     */
    protected $ActivityActionService;

    /**
     * @PostMapping(path="add")
     */
    public function add () {

        $params = [
            'title'       => $this->request->post('title'),
            'description' => $this->request->post('description'),
            'isActive'    => $this->request->post('isActive'),
        ];

        InputUtils::trimSpace($params);

        ValidateUtils::mustValidate($params, [
            'title'       => 'required|max:40',
            'description' => 'sometimes|max:240',
            'isActive'    => 'required|bool',
        ]);

        $result = $this->ActivityActionService->add($params);

        return $result->toResponse();
    }

}
```



### 关于 $result->toResponse()

大家可能会发现，直接返回 $result，就可以了，接口就已经可以返回正确的响应了。

这是因为hyperf做了一个隐式的数据类型转换，自动转换成数组再转换成响应对象。

我觉得这种隐式转换，欠妥，所以还是显式地将其转换为 Response 对象，再进行返回比较好。



### 长整型要转换为字符串返回

这个不需要自己实现，只要调用 $result->toResponse() 即可，在转换操作中已经完成了该步骤，并且是递归执行。

这么做的理由是JavaScript和PHP对于长整数支持的范围不同，**过长的数字，在JavaScript会失真**，因此，转换为字符串进行传递。



## 探索中的方案

### 多端共用Service逻辑引发的紧耦合？

如你所见，一个后端会提供多端的API，那么每个端对于同一个功能模块的侧重点，是不同的。

例如活动需要审核，车主端是不允许编辑审核状态的，但管理端可以。

例如车主端和认证端对于用户的查询逻辑有所差异。



起初我们加了source区分请求来源，在Service代码里，用switch处理不同的情况。



但，这就意味着，两个不同端的逻辑，紧紧地耦合在了一起，后面再有这部分的改动，势必会引起另一个端的变化。因为调用的是同一个逻辑代码。



所以，不同端的逻辑，其实要拆开来写，那么具体怎么拆，我正在往两个方向探索：

#### 简单增删改查，Service层的必要性

简单的增删改查逻辑，即使是在Service的代码也很简单，就是原封不动把参数传给Dao或Entity，读写数据库即可。很直白、很简单。

那么对于这种简单的增删改查，是否直接把逻辑写在Controller里就可以了呢？

#### Service层也根据不同端划分目录

相当于Service目录有类似Controller目录中，根据端来区分的目录。

各管各的，互不干扰，也就不会存在不同端代码耦合的问题。

但，总觉得怪怪的，而且似乎有些繁琐。

而且既然这么排布目录了，那为什么不做成下面这种目录结构？似乎更加合理一点…

```
App
|--Owner
|  |--Controller
|  |--Service
|  |--Model
|--Manage
|  |--Controller
|  |--Service
|  |--Model

```



核心需求就是，如何组织代码才能适应复杂多变的需求，即利于维护。



我还在想，我还没想好；如果大家有自己的看法，也可以讲讲。



## 走过的弯路和摒弃的方案

### 【摒弃】参数注入请求响应对象

即 `$request` 和 `$response` 。

实际使用中发现，这种注入比较多余，并且写代码的时候不方便输入，复制粘贴每次都要重新引入对象命名空间。

所以我们直接将请求对象和响应对象，注入为控制器基类的成员变量，随后直接读取成员变量即可。

### 【摒弃】Restful规范

简单地说，Restful的思路是把所有东西当作资源看待，这种抽象思维有时候很反直觉。

例如登录接口，被抽象成“创建一个session”。

此外实际业务中，有很多操作是针对动作和状态的，硬要抽象成资源实在是折腾。

因此遵守该规范对我们的项目开发并没有好处，反而徒增困难，所以我们摒弃了Restful规范。

实际上主要用POST，少数情况用GET，注意给路由做好命名即可。

### 【弯路】复用逻辑

控制器由添加和编辑方法，都需要读取参数，并且参数通常都是一样的。

那么很容易想到，可以复用获取和校验参数的逻辑，包括有些IDE也会标注该部分代码重复。

于是，自然而然地会去封装一个 `__getParams` 私有函数，给 `add` 和 `edit` 或类似方法调用。

但问题来了，需求发生改变，某些参数不允许 `edit`，这时候怎么办？

- 方案A：`__getParams`去掉不允许`edit`的参数，`add` 里面补充。
- 方案B：`edit` 方法里 `unset` 掉不需要的参数。

无论哪种方案，都很不直观，即使没有这种需求，后期维护代码的时候，想知道控制器接收哪些参数，也要饶一个弯子。

综上所述，这种逻辑复用，不利于维护。复用性和可维护性。

我们要找到一个平衡点，而实践证明，控制器里的代码，本就没什么逻辑，无非就是获取参数、校验参数、调用逻辑、返回响应。

因此就应该平铺直叙、一目了然，才更加利于维护。



