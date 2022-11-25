# Model-Dao 数据访问对象

## 基本概念

这里编写数据库读写相关的代码。



## 目录规范

参考Controller控制器。



## 走过的弯路和摒弃的方案

### 【弯路/摒弃】通用的列表/数量查询函数

请看下方代码片段


::: details 代码片段

- Dao层

```php
    /**
     * 通用条件列表
     *
     * @param      $param
     * @param null $page
     * @param null $limit
     *
     * @return mixed
     */
    public function getList ($param, $page = null, $limit = null) {

        $builder = $this->_buildQueryString($param);
        $builder = $this->_buildOrder($builder, $param);
        $builder = $this->_buildPageLimit($builder, $page, $limit);

        return $builder->get()->toArray();
    }

    /**
     * 通用条件数量
     *
     * @param $param
     *
     * @return int
     */
    public function getCount ($param) {
        $builder = $this->_buildQueryString($param);
        return $builder->count();
    }

		/**
     * 查询条件
     *
     * @param $params
     *
     * @return Builder
     */
    protected function _buildQueryString ($params) {
        // CustomUtils::xzxDebug($params);

        // 本表一律命名为main
        $main    = sprintf("%s AS main", self::TABLE);
        $receive = sprintf("%s AS receive", TradeOrderReceiveDao::table());
        // $mch     = sprintf('%s AS mch', MchInfoDao::table());

        $forceIndex = [
            'createTime',
            'tradeNo',
            'transStatus',
            'mchNo',
            'mchId',
            'isSettle',
            'isRefund',
            'isDis',
            'relNo',
            'orderNo',
            'bondThawSettleTime',
        ];

        $builder = $this->_buildConnectionTable($params)->table($main);
        $builder = $builder->fromRaw("{$main} force index(".join(',', $forceIndex).")");

        $builder->join($receive, 'receive.tradeNo', 'main.tradeNo');
        // $builder->join($mch, 'mch.mchNo', 'main.mchNo');

        // 通过 Arr::exists 来判断是否存在该键, isset不准确
        (Arr::exists($params, "mchIdList") && !empty($params["mchIdList"])) && $builder->whereIn("main.mchId", $params['mchIdList']);
        (Arr::exists($params, "mchId") && $params["mchId"] !== "") && $builder->where("main.mchId", $params['mchId']);
        (Arr::exists($params, "mchNo") && $params["mchNo"] !== "") && $builder->where("main.mchNo", $params['mchNo']);
        (Arr::exists($params, "tradeNo") && $params["tradeNo"] !== "") && $builder->where("main.tradeNo", $params['tradeNo']);
        (Arr::exists($params, "orderNo") && $params["orderNo"] !== "") && $builder->where("main.orderNo", $params['orderNo']);
        (Arr::exists($params, "relNo") && $params["relNo"] !== "") && $builder->where("main.relNo", $params['relNo']);
        (Arr::exists($params, "mchUrl") && $params["mchUrl"] !== "") && $builder->where("main.mchUrl", "like", "%{$params['mchUrl']}%");
        (Arr::exists($params, "transStatus") && $params["transStatus"] !== "") && $builder->where("main.transStatus", "=", $params['transStatus']);
        (Arr::exists($params, "isSettle") && $params["isSettle"] !== "") && $builder->where("main.isSettle", "=", $params['isSettle']);
        (Arr::exists($params, "isChecked") && $params["isChecked"] !== "") && $builder->where("main.isChecked", "=", $params['isChecked']);
        (Arr::exists($params, "isRefund") && $params["isRefund"] !== "") && $builder->where("main.isRefund", "=", $params['isRefund']);
        (Arr::exists($params, "isDis") && $params["isDis"] !== "") && $builder->where("main.isDis", "=", $params['isDis']);
        (Arr::exists($params, "isFrozen") && $params["isFrozen"] !== "") && $builder->where("main.isFrozen", "=", $params['isFrozen']);
        (Arr::exists($params, "isThaw") && $params["isThaw"] !== "") && $builder->where("main.isThaw", "=", $params['isThaw']);
        (Arr::exists($params, "channelId") && $params["channelId"] !== "") && $builder->where("main.channelId", "=", $params['channelId']);
        (Arr::exists($params, "createTimeRange") && $params["createTimeRange"] !== "") && $builder->whereBetween('main.createTime', $params['createTimeRange']);
        (Arr::exists($params, "mchNoList") && !empty($params["mchNoList"])) && $builder->whereIn("main.mchNo", $params['mchNoList']);
        (Arr::exists($params, "mchNoNotInList") && !empty($params["mchNoNotInList"])) && $builder->whereNotIn("main.mchNo", $params['mchNoNotInList']);

        Arr::exists($params, 'bondThawSettleStatus') && $builder->where('main.bondThawSettleStatus', $params['bondThawSettleStatus']);
        Arr::exists($params, 'bondThawSettleTimeRange') && $builder->whereBetween('main.bondThawSettleTime', $params['bondThawSettleTimeRange']);

        Arr::exists($params, 'cardType') && $builder->where('receive.cardType', $params['cardType']);
        Arr::exists($params, 'bankBillUrl') && $builder->where('receive.bankBillUrl', 'like', "%{$params['bankBillUrl']}%");

        Arr::exists($params, 'cardNo64') && $builder->where('receive.cardNo', $params['cardNo64']);

        if (Arr::exists($params, 'cardNoHash')) {

            $cardNoHash = $params['cardNoHash'];

            if (is_string($cardNoHash)) {
                $cardNoHash = [$cardNoHash];
            }

            if (count($cardNoHash) > 0) {
                $builder->whereIn('receive.cardNoHash', $cardNoHash);
            }

        }

        if (Arr::exists($params, 'bankType')) {

            $bank = sprintf('%s AS bank', BankInfoDao::table());

            $builder->join($bank, 'bank.id', 'main.bankId');
            $builder->where('bank.type', $params['bankType']);
        }

        $builder->selectRaw(join(',', [
            'main.*',
            'receive.cardType',
            'receive.cardNo',
            'receive.cardNoHash',
            'receive.cardEmail',
            'receive.cardCountry',
            'receive.bankBillUrl',
            // 'mch.mchName',
        ]));

        return $builder;
    }
```


- Service层调用

```php
$total = $this->TradeOrderDetailDao->getCount($param);
$list  = $this->TradeOrderDetailDao->getList($param, $page, $limit);
```

:::




这是最早设计的Dao通用查询，其设计初衷也是复用查询代码。

起初业务简单的时候，这还是一个挺好用的设计，各种查询条件复制粘贴改一改就搞定了。

**后来，查询条件越来越多、越来越多样化，调用这个查询功能的业务也越来越多，因此导致这部分代码越来越臃肿。**

并且A业务需要修改查询逻辑，就有影响到同样调用这部分查询逻辑的B业务的可能性，因为这种复用，把他们耦合在一起了。


**这种代码目前在我们的项目中大量存在着，所以旧的就不要管了，新的就尽量不要再用这种方法。**