# Javascript 的几种函数声明和调用方式



CATT-L



#### 一般的函数声明

```javascript
function myFunc(){
    console.log("Hello,world");
}

function funcA(str){
    console.log(str);
}

function funcB(){
    console.log(arguments[0]);
}

myFunc(); // 输出: Hello,world
funcA("AAAA"); // 输出 AAAA
funcB("ABCD"); // 输出 ABCD
```



#### 变量赋值方式的函数声明

```javascript
var myFunc = function(){
    console.log("Hello,wrold");
}

myFunc(); // 输出: Hello,world
```



#### 箭头函数声明

```javascript
var myFunc = () => {
    console.log("Hello,world");
}

var funcA = (str) => {
    console.log(str);
}

var funcB = () => {
    console.log(arguments[0]);
}

myFunc(); // 输出: Hello,world
funcA("AAAA"); // 输出 AAAA
funcB("ABCD"); // 输出 ABCD

// 当箭头函数参数只有一个时候,可以省略括号
var funcC = str => {
    console.log(str);
};

// 当箭头函数语句只有一句时,可以省略花括号
var funcD = str => console.log(str);

// 当省略花括号写法时,会将最后一句的值return出去

var funcE = name => "Hello," + name;
// 等价于
var funcE = (name) => {
    return "Hello," + name;
};
// 等价于
var funcE = function(name){
    return "Hello," + name;
}
// 等价于
function funcE(name){
    return "Hello," + name;
}

console.log(funcE("Jack")); // 输出: Hello,Jack

```



#### 函数的执行方式

```javascript

function myFunc(){
    console.log("hello,world");
}

// 直接调用
myFunc();

// call, apply
myFunc.call();
myFunc.apply();

// 自执行函数, 在创建完之后立即执行

! function(){
    console.log("立即执行");
}();

! function(){
    console.log("立即执行");
}.call();

! function(){
    console.log("立即执行");
}.apply();


// 自执行函数传参
! function(arr){
    console.log(arr); // 输出 [1, 2, 3]
}([1,2,3]);

```





#### 常规参数读取和传参

```javascript
// 常规的形参声明和传参
function myFunc(name, gender, age){
    console.log(`姓名:${name} 性别:${gender} 年龄:${age}`);
}

myFunc("哪吒","男","3岁"); // 输出: "姓名:哪吒 性别:男 年龄:3岁"

// arguments 读取形参
function myFunc(){
    
    var name = arguments[0];
    var gender = arguments[1];
    var age = arguments[2];
    
    console.log(`姓名:${name} 性别:${gender} 年龄:${age}`);
}

myFunc("哪吒","男","3岁"); // 输出: "姓名:哪吒 性别:男 年龄:3岁"

// 不定传参



```



#### 不定传参

```javascript
function myFunc(name, gender, age, weapons, carrier, skills){
    console.log(`姓名:${name} 性别:${gender} 年龄:${age}`);
    
    if(weapons != undefined) console.log("武器:" + weapons.join(","));
    if(carrier != undefined) console.log("载具:" + carrier);
    if(skills != undefined) console.log("技能:" + skills)
    
    // 也可以通过 arguments 读取
    console.log(arguments);
}

myFunc(...["哪吒", "男", "3岁"]);
myFunc("哪吒",["男", "三岁"]);

var extInfo = [["混天绫","火尖枪","乾坤圈"], "风火轮", ["三头六臂","混天绫.束","乾坤.天降"]];

myFunc("哪吒", "男", "六岁", ...extInfo);
myFunc(...["哪吒", "男", "六岁"], ...extInfo);
myFunc("哪吒", ...["男", "六岁"], ...extInfo);

// 输出
// 姓名:哪吒 性别:男 年龄:六岁
// 武器:混天绫,火尖枪,乾坤圈
// 载具:风火轮
// 技能:三头六臂,混天绫.束,乾坤.天降


```



#### 同样地, 不定参在数组中有一样的用法

```javascript
var arr1 = [1,2,3];
var arr2 = [4,5,6];

var arr3 = [...arr1, ...arr2, 7, 8, 9];

console.log(arr3); // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```



#### this到底指向谁?

```javascript

window.a = "hello";

function myFunc(){
	console.log(this.a);
}

myFunc(); // 输出: hello

// 在独立函数调用时, this 指向全局变量
// 浏览器中是 window
// nodejs环境中貌似是 global
// 虽然微信小游戏有个GameGlobal全局变量但是并不符合ECMAScript标准所以指向 undefined


// 对象的情况
var obj = {
    value: "hello",
    func: function(){
        console.log(this.value);
    }
};

obj.func(); // 输出: hello

// 下方写法也行

var num = 1;

function func(){
    console.log(this.num);
}

var obj = {
    num: 2,
    func: func,
};

obj.func(); // 输出 2
func(); // 输出 1

// 更复杂的调用情况

var name = "city";

function printName(){
    console.log(this.name);
}

var house = {
    name: "house",
    printName, // javascript中的对象当 key 和 value变量名一致时可以用这种省略写法
};

var street = {
    name: "street",
    printName,
    house,
};

printName(); // 输出: city
house.printName(); // 输出 house
street.printName(); // 输出 street
street.house.printName(); // 输出 house

var func = house.printName;
func(); // 输出 city, 因为将函数赋值过来已经丢失了原有的this指向,因此指向全局,在微信环境是undefined,会报错


setTimeout(street.printName, 1000); // 一秒后输出 city, 在回调函数中创建的函数, this指向的是全局
setTimeout(function(){
    printName(); // 输出city, 理由同上
}, 1000);


// 伪类,通过函数原型模拟出来的类,下面会解释

function Weapon(){
    this.name = "武器";
};

Weapon.prototype.printName = printName;

var weapon = new Weapon;
weapon.printName(); // 输出武器
```



#### 解决this指向丢失

```javascript
// 不优雅但管用的方式

var that = this; // 通过临时变量保存

setTimeout(function(){
    
    console.log(this.name); // 输出city
    console.log(that.name); // 输出调用对象的name属性
}, 1000);


// 优雅的实现方式

// 箭头函数

setTimeout(() => {
    this.printName(); // 输出上一级this指向对象的name属性
}, 1000);

setTimeout(printName.bind(this), 1000); // 通过bind函数绑定

```



* 回调函数使用箭头函数, this指向上一级的this, 如果直接在最外层创建箭头函数, this则指向全局变量, 微信环境是undefined;

  因此, 在回调函数中使用箭头函数, 可以优雅地解决this指向的问题

  由于箭头函数这种this指向的特性, 箭头函数不适合用于函数原型声明(伪类), 因为this会指向全局变量

  ```javascript
  Weapon.prototype.print = () => { console.log(this) }; // 指向全局
  Weapon.prototype.print = function() { console.log(this) } // 指向Weapon类
  ```

  

#### call, apply, bind 调用函数(传递this指向)

通过这三种方式调用函数可以将this指向传递过去, 有了上面的铺垫下面应该很容易理解

```javascript
var name = "city";

function printName(){
    console.log(this.name);
}

printName.call(this); // 输出 city
printName.call(street); // 输出 street.name
printName.apply(house); // 输出 house.name

// 特殊地
printName.bind(street); // 不输出, 返回一个函数

var func = printName.bind(street);
func(); // 输出 street

// 简单写法
printName.bind(street)(); // 输出 street

// 传参

function myFunc(name, gender, age, weapons, carrier, skills){
    console.log(`姓名:${name} 性别:${gender} 年龄:${age}`);
    
    if(weapons != undefined) console.log("武器:" + weapons.join(","));
    if(carrier != undefined) console.log("载具:" + carrier);
    if(skills != undefined) console.log("技能:" + skills)
    
    // 也可以通过 arguments 读取
    console.log(arguments);
}

function print(){
    myFunc(this.name, this.gender, this.age);
    
    console.log(arguments);
}

var nezha = {
    name: "哪吒",
    gender: "男",
    age: "6岁",
}

// call 第一个参数是传递this作用域, 后面参数则为参数
print.call(nezha, "哈哈哈哈哈哈", "11111"); 
// 输出 姓名:哪吒 性别:男 年龄:6岁 ["哈哈哈哈哈哈", "11111"]

// apply 第一个参数传递this作用域, 第二个参数是数组, 数组中的值作为函数参数传入
print.apply(nezha, ["哈哈哈哈哈哈", "11111"]);
// 与上一句等价

// bind 传递this作用域, 后面的参数为函数参数, 不执行, 返回函数的copy函数
play.bind(nezha, "哈哈哈哈哈哈", "11111")();

// 与上两句等价, 注意后方的括号


```



* 总结

  call, apply, bind 第一个参数都传递 this 作用域

  call 传参按照参数个数传入, bind相同, apply 需要将参数放在数组中传入

  call, apply 立即执行, bind不执行, 返回该函数的拷贝



#### ECMAScript 5(ES5)标准的类的声明

按照当前浏览器的标准(ES5), javascript并不支持像其它语言一样的`class`关键字创建类

而是通过函数原型(prototype)实现的

```javascript

// 类的创建

// 创建武器类, 按照约定俗成的惯例,类名大写
function Weapon(name, attack){
    
    // 对象属性
    this.name = name;
    this.attack = attack;
}

// 对象方法
Weapon.prototype.doAttack = function(target){
    if(target != null && target.health > 0){
        target.health -= this.attack;
        console.log(target.name + " 受到 " + this.attack + " 点攻击");
    }
}

// 类的继承

// 创建斧头类
function Axe(){
    Weapon.call(this, "斧头", 3);
}

// 类的调用

// 创建僵尸类
function Zombie(){
    // 构造函数
   	
    // 声明属性
    this.name = "僵尸";
    this.health = 10;
    this.weapon = new Axe(); 
    // this.weapon = new Axe; // 后面的括号可以省略
    
}

// 对象方法也可以像这样批量地给它
function.prototype = {
    howl: function(){
        console.log(this.name + "在吼叫");
    },
    
    doAttack: function(target){
        
        this.weapon.doAttack(target);
    	
        console.log(this.name + "用武器:" + this.weapon.name + "攻击了" + target.name);
    }, // 记得逗号
    
    getHurt: function(hurt){
        this.health -= hurt;
        
        console.log(this.name + "受到了伤害:" + hurt);
    }
};

// 创建对象

var zombie = new Zombie();
var human = new Human; // 假装有这个类

zombie.howl(); // 僵尸吼叫
zombie.doAttack(human) // 僵尸攻击人类

// 僵尸踩到了地雷受到了4点伤害
zombie.getHurt(4);
// 地雷爆炸


```



#### ECMAScript 6(ES6)标准的类的声明

ES6的标准中引入了class关键字, 可以像其它语言一样实现类的创建和继承

下方代码用ES6的语法实现了跟上方一样的功能

```javascript
// 类的创建

// 创建武器类
class Weapon {
    
    // 构造函数
    constructor(name, attack){
        
        // 对象属性
        this.name = name;
        this.attack = attack;
    }
    
    // 对象方法
    doAttack(target){
        
        if(target != null && target.health > 0){
            target.health -= this.attack;
            console.log(target.name + " 受到 " + this.attack + " 点攻击");
        }
    }
}

// 创建斧头类
class Axe extends Weapon {
    constructor(){
        super("斧头", 3);
    }
}

class Zombie {
    
    constructor(){
        this.name = "僵尸";
        this.health = 10;
        this.weapon = new Axe();
    }
    
    howl(){
        console.log(this.name + "在吼叫");
    }
    
    doAttack(target){
        
        this.weapon.doAttack(target);
    	
        console.log(this.name + "用武器:" + this.weapon.name + "攻击了" + target.name);
    }
    
    getHurt(hurt){
        this.health -= hurt;
        
        console.log(this.name + "受到了伤害:" + hurt);
    }
}

// 创建对象

var zombie = new Zombie();
var human = new Human; // 假装有这个类

zombie.howl(); // 僵尸吼叫
zombie.doAttack(human) // 僵尸攻击人类

// 僵尸踩到了地雷受到了4点伤害
zombie.getHurt(4);
// 地雷爆炸

```



以上