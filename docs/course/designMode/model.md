::: tip
现在，我们终于步入了设计模式学习的殿堂。
:::

在将函数作为一等对象的语言中，有许多需要利用对象多态性的设计模式，比如命令模式、
策略模式等，这些模式的结构与传统面向对象语言的结构大相径庭，实际上已经融入到了语言之
中，我们可能经常使用它们，只是不知道它们的名字而已。

第二部分并没有全部涵盖 《设计模式》 所提出的 23 种设计模式，而是选择了在 JavaScript 开发中更常见的 14 种设计模式。

## 什么是设计模式

作者原话（设计模式的适用性）：
> 假设有一个空房间，我们要日复一日地往里 面放一些东西。最简单的办法当然是把这些东西 直接扔进去，但是时间久了，就会发现很难从这 个房子里找到自己想要的东西，要调整某几样东 西的位置也不容易。所以在房间里做一些柜子也 许是个更好的选择，虽然柜子会增加我们的成 本，但它可以在维护阶段为我们带来好处。使用 这些柜子存放东西的规则，或许就是一种模式

学习设计模式，有助于写出可复用和可维护性高的程序

以下为简写设计模式，阐明定义和举例，如需更详细解说请看原版本《JavaScript 设计模式与开发实践》

---

## 1、单例模式
### 定义
保证一个类仅有一个实例，并提供一个访问它的全局访问点

### 核心
确保只有一个实例，并提供全局访问

### 生活场景故事

> 例如我们做了一个月饼模型，自己用的很好，当你的亲朋好友在过节的时候来和你借用的时候，你已经有了就直接借出去，而不是重写做一个模型再借出去

### 实现

假设要设置一个管理员，多次调用也仅设置一次，我们可以使用闭包缓存一个内部变量来实现这个单例

```js
function SetManager(name) {
  this.manager = name;
}

SetManager.prototype.getName = function () {
  console.log(this.manager);
};

var SingletonSetManager = (function () {
  var manager = null;

  return function (name) {
    if (!manager) {
      manager = new SetManager(name);
    }

    return manager;
  }
})();

SingletonSetManager('a').getName(); // a
SingletonSetManager('b').getName(); // a
SingletonSetManager('c').getName(); // a
```
这是比较简单的做法，但是假如我们还要设置一个HR呢？就得复制一遍代码了

所以，可以改写单例内部，实现地更通用一些
```js
// 提取出通用的单例
function getSingleton(fn) {
  var instance = null;

  return function () {
    if (!instance) {
      instance = fn.apply(this, arguments);
    }

    return instance;
  }
}
```
再进行调用，结果还是一样

```js
// 获取单例
var managerSingleton = getSingleton(function (name) {
  var manager = new SetManager(name);
  return manager;
});

managerSingleton('a').getName(); // a
managerSingleton('b').getName(); // a
managerSingleton('c').getName(); // a
```
这时，我们添加HR时，就不需要更改获取单例内部的实现了，仅需要实现添加HR所需要做的，再调用即可
```js
function SetHr(name) {
  this.hr = name;
}

SetHr.prototype.getName = function () {
  console.log(this.hr);
};

var hrSingleton = getSingleton(function (name) {
  var hr = new SetHr(name);
  return hr;
});

hrSingleton('aa').getName(); // aa
hrSingleton('bb').getName(); // aa
hrSingleton('cc').getName(); // aa
```
或者，仅想要创建一个div层，不需要将对象实例化，直接调用函数

结果为页面中仅有第一个创建的div
```js
function createPopup(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  document.body.append(div);

  return div;
}

var popupSingleton = getSingleton(function () {
  var div = createPopup.apply(this, arguments);
  return div;
});

console.log(
  popupSingleton('aaa').innerHTML,
  popupSingleton('bbb').innerHTML,
  popupSingleton('bbb').innerHTML
); // aaa  aaa  aaa
```
## 2、策略模式

### 定义

定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

### 核心

将算法的使用和算法的实现分离开来。

一个基于策略模式的程序至少由两部分组成：

第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。

第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context 中要维持对某个策略对象的引用

### 生活场景故事
> 俗话说，条条大路通罗马。在美剧《越狱》中，主角 Michael Scofield 就设计了两条越狱的
> 道路。这两条道路都可以到达靠近监狱外墙的医务室。
> 同样，在现实中，很多时候也有多种途径到达同一个目的地。比如我们要去某个地方旅游，可以根据具体的实际情况来选择出行的线路。 
> * 如果没有时间但是不在乎钱，可以选择坐飞机。
> * 如果没有钱，可以选择坐大巴或者火车。
> * 如果再穷一点，可以选择骑自行车。

### 实现

策略模式可以用于组合一系列算法，也可用于组合一系列业务规则

假设需要通过成绩等级来计算学生的最终得分，每个成绩等级有对应的加权值。我们可以利用对象字面量的形式直接定义这个组策略

```js
// 加权映射关系
var levelMap = {
  S: 10,
  A: 8,
  B: 6,
  C: 4
};

// 组策略
var scoreLevel = {
  basicScore: 80,

  S: function () {
    return this.basicScore + levelMap['S'];
  },

  A: function () {
    return this.basicScore + levelMap['A'];
  },

  B: function () {
    return this.basicScore + levelMap['B'];
  },

  C: function () {
    return this.basicScore + levelMap['C'];
  }
}

// 调用
function getScore(level) {
  return scoreLevel[level] ? scoreLevel[level]() : 0;
}

console.log(
  getScore('S'),
  getScore('A'),
  getScore('B'),
  getScore('C'),
  getScore('D')
); // 90 88 86 84 0
```
在组合业务规则方面，比较经典的是表单的验证方法。这里列出比较关键的部分
```js
// 错误提示
var errorMsgs = {
  default: '输入数据格式不正确',
  minLength: '输入数据长度不足',
  isNumber: '请输入数字',
  required: '内容不为空'
};

// 规则集
var rules = {
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg || errorMsgs['minLength']
    }
  },
  isNumber: function (value, errorMsg) {
    if (!/\d+/.test(value)) {
      return errorMsg || errorMsgs['isNumber'];
    }
  },
  required: function (value, errorMsg) {
    if (value === '') {
      return errorMsg || errorMsgs['required'];
    }
  }
};

// 校验器
function Validator() {
  this.items = [];
};

Validator.prototype = {
  constructor: Validator,

  // 添加校验规则
  add: function (value, rule, errorMsg) {
    var arg = [value];

    if (rule.indexOf('minLength') !== -1) {
      var temp = rule.split(':');
      arg.push(temp[1]);
      rule = temp[0];
    }

    arg.push(errorMsg);

    this.items.push(function () {
      // 进行校验
      return rules[rule].apply(this, arg);
    });
  },

  // 开始校验
  start: function () {
    for (var i = 0; i < this.items.length; ++i) {
      var ret = this.items[i]();

      if (ret) {
        console.log(ret);
        // return ret;
      }
    }
  }
};

// 测试数据
function testTel(val) {
  return val;
}

var validate = new Validator();

validate.add(testTel('ccc'), 'isNumber', '只能为数字'); // 只能为数字
validate.add(testTel(''), 'required'); // 内容不为空
validate.add(testTel('123'), 'minLength:5', '最少5位'); // 最少5位
validate.add(testTel('12345'), 'minLength:5', '最少5位');

var ret = validate.start();

console.log(ret);
```
### 优缺点

优点

可以有效地避免多重条件语句，将一系列方法封装起来也更直观，利于维护

缺点

往往策略集会比较多，我们需要事先就了解定义好所有的情况

## 3、代理模式

### 定义

为一个对象提供一个代用品或占位符，以便控制对它的访问

### 核心

当客户不方便直接访问一个 对象或者不满足需要的时候，提供一个替身对象 来控制对这个对象的访问，客户实际上访问的是 替身对象。

替身对象对请求做出一些处理之后， 再把请求转交给本体对象

代理和本体的接口具有一致性，本体定义了关键功能，而代理是提供或拒绝对它的访问，或者在访问本体之前做一 些额外的事情

### 生活场景故事
> 代理模式是一种非常有意义的模式，在生活中可以找到很多代理模式的场景。比如，明星都
> 有经纪人作为代理。如果想请明星来办一场商业演出，只能联系他的经纪人。经纪人会把商业演
> 出的细节和报酬都谈好之后，再把合同交给明星签。

### 实现

代理模式主要有三种：保护代理、虚拟代理、缓存代理

保护代理主要实现了访问主体的限制行为，以过滤字符作为简单的例子

```js
// 主体，发送消息
function sendMsg(msg) {
  console.log(msg);
}

// 代理，对消息进行过滤
function proxySendMsg(msg) {
  // 无消息则直接返回
  if (typeof msg === 'undefined') {
    console.log('deny');
    return;
  }

  // 有消息则进行过滤
  msg = ('' + msg).replace(/泥\s*煤/g, '');

  sendMsg(msg);
}


sendMsg('泥煤呀泥 煤呀'); // 泥煤呀泥 煤呀
proxySendMsg('泥煤呀泥 煤'); // 呀
proxySendMsg(); // deny
```
的意图很明显，在访问主体之前进行控制，没有消息的时候直接在代理中返回了，拒绝访问主体，这数据保护代理的形式

有消息的时候对敏感字符进行了处理，这属于虚拟代理的模式

虚拟代理在控制对主体的访问时，加入了一些额外的操作

在滚动事件触发的时候，也许不需要频繁触发，我们可以引入函数节流，这是一种虚拟代理的实现
```js
// 函数防抖，频繁操作中不处理，直到操作完成之后（再过 delay 的时间）才一次性处理
function debounce(fn, delay) {
  delay = delay || 200;

  var timer = null;

  return function () {
    var arg = arguments;

    // 每次操作时，清除上次的定时器
    clearTimeout(timer);
    timer = null;

    // 定义新的定时器，一段时间后进行操作
    timer = setTimeout(function () {
      fn.apply(this, arg);
    }, delay);
  }
};

var count = 0;

// 主体
function scrollHandle(e) {
  console.log(e.type, ++count); // scroll
}

// 代理
var proxyScrollHandle = (function () {
  return debounce(scrollHandle, 500);
})();

window.onscroll = proxyScrollHandle;
```
缓存代理可以为一些开销大的运算结果提供暂时的缓存，提升效率

来个栗子，缓存加法操作
```js
function add() {
  var arg = [].slice.call(arguments);

  return arg.reduce(function (a, b) {
    return a + b;
  });
}

// 代理
var proxyAdd = (function () {
  var cache = {};

  return function () {
    var arg = [].join.call(arguments, ",")
    // 如果有，则直接从缓存返回
    if (cache[arg]) {
      return cache[arg];
    }
    return cache[arg] = add.apply(this, arguments);;
  };
})();

console.log(
  add(1, 2, 3, 4),
  add(1, 2, 3, 4),

  proxyAdd(10, 20, 30, 40),
  proxyAdd(10, 20, 30, 40)
); // 10 10 100 100
```


## 4、迭代器模式

### 定义

迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。

### 核心

在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素

### 生活场景故事

> 厨艺大赛，评委是不是得挨个试一试每一道菜的色香味，遍历一边得出他认为，他想要的那道能够满足这次大赛主题的菜肴; 有时候为了快一些我们并不希望每尝一道菜都要判断一下说出来，而是让品味根据自己的评判标准，在试吃的过程中或结束给出最终结论

### 实现

JS中数组的map forEach 已经内置了迭代器

```js
[1, 2, 3].forEach(function(item, index, arr) {
  console.log(item, index, arr);
});
```
现在我们来自己实现一个 each 函数，each 函数接受 2 个参数，
第一个为被循环的数组，
第二个为循环中的每一步后将被触发的回调函数：

```js
var each = function (ary, callback, context) {
  for (var i = 0, l = ary.length; i < l; i++) {
    // 把元素、下标、原数组当作参数传给 callback 函数
    if (  callback.call(context, ary[i], i, ary) === false ){ 
      // callback 的执行结果返回 false，提前终止迭代
      break; 
    } 
  }
};
each([1, 2, 3], function (item, index, arr) {
  if ( item > 2 ){ // item 大于 2 的时候终止循环
    return false; 
  }
  console.log(item, index, arr);
});

// or

Array.prototype.myEach = function(callback,context){
  for (var i = 0, l = this.length; i < l; i++) {
    if (  callback.call(context, ary[i], i, ary) === false ){ 
      // callback 的执行结果返回 false，提前终止迭代
      break; 
    } 
  }
}

[1, 2, 3].myEach(function (item, index, arr) {
  if ( item > 2 ){ // item 大于 2 的时候终止循环
    return false; 
  }
  console.log(item, index, arr);
});
```
再来看一个例子，强行地使用迭代器，来了解一下迭代器也可以替换频繁的条件语句

虽然例子不太好，但在其他负责的分支判断情况下，也是值得考虑的

```js
function getManager() {
  var year = new Date().getFullYear();

  if (year <= 2000) {
    console.log('A');
  } else if (year >= 2100) {
    console.log('C');
  } else {
    console.log('B');
  }
}

getManager(); // B
```
将每个条件语句拆分出逻辑函数，放入迭代器中迭代
```js
function year2000() {
  var year = new Date().getFullYear();

  if (year <= 2000) {
    console.log('A');
  }

  return false;
}

function year2100() {
  var year = new Date().getFullYear();

  if (year >= 2100) {
    console.log('C');
  }

  return false;
}

function year() {
  var year = new Date().getFullYear();

  if (year > 2000 && year < 2100) {
    console.log('B');
  }

  return false;
}

function iteratorYear() {
  for (var i = 0; i < arguments.length; ++i) {
    var ret = arguments[i]();

    if (ret !== false) {
      return ret;
    }
  }
}

var manager = iteratorYear(year2000, year2100, year); // B
```


## 5、发布-订阅模式

### 定义

也称作观察者模式，定义了对象间的一种一对多的依赖关系，当一个对象的状态发 生改变时，所有依赖于它的对象都将得到通知

### 核心

取代对象之间硬编码的通知机制，一个对象不用再显式地调用另外一个对象的某个接口。

与传统的发布-订阅模式实现方式（将订阅者自身当成引用传入发布者）不同，在JS中通常使用注册回调函数的形式来订阅

### 生活场景故事

> 小明最近看上了一套房子，到了售楼处之后才被告知，该楼盘的房子早已售罄。好在售楼
> MM 告诉小明，不久后还有一些尾盘推出，开发商正在办理相关手续，手续办好后便可以购买。
> 但到底是什么时候，目前还没有人能够知道。
> 于是小明记下了售楼处的电话，以后每天都会打电话过去询问是不是已经到了购买时间。除
> 了小明，还有小红、小强、小龙也会每天向售楼处咨询这个问题。一个星期过后，售楼 MM 决
> 定辞职，因为厌倦了每天回答 1000 个相同内容的电话; 实际上故事是这样的：小明离开之前，把电话号码留在
> 了售楼处。售楼 MM 答应他，新楼盘一推出就马上发信息通知小明。小红、小强和小龙也是一
> 样

### 实现

JS中的事件就是经典的发布-订阅模式的实现
```js
// 订阅
document.body.addEventListener('click', function () {
  console.log('click1');
}, false);

document.body.addEventListener('click', function () {
  console.log('click2');
}, false);

// 发布
document.body.click(); // click1  click2
```
自己实现一下

小A在公司C完成了笔试及面试，小B也在公司C完成了笔试。他们焦急地等待结果，每隔半天就电话询问公司C，导致公司C很不耐烦。

一种解决办法是 AB直接把联系方式留给C，有结果的话C自然会通知AB

**这里的“询问”属于显示调用，“留给”属于订阅，“通知”属于发布**

```js
// 观察者
var observer = {
  // 订阅集合
  subscribes: [],

  // 订阅
  subscribe: function (type, fn) {
    if (!this.subscribes[type]) {
      this.subscribes[type] = [];
    }

    // 收集订阅者的处理
    typeof fn === 'function' && this.subscribes[type].push(fn);
  },

  // 发布  可能会携带一些信息发布出去
  publish: function () {
    var type = [].shift.call(arguments),
      fns = this.subscribes[type];

    // 不存在的订阅类型，以及订阅时未传入处理回调的
    if (!fns || !fns.length) {
      return;
    }

    // 挨个处理调用
    for (var i = 0; i < fns.length; ++i) {
      fns[i].apply(this, arguments);
    }
  },

  // 删除订阅
  remove: function (type, fn) {
    // 删除全部
    if (typeof type === 'undefined') {
      this.subscribes = [];
      return;
    }

    var fns = this.subscribes[type];

    // 不存在的订阅类型，以及订阅时未传入处理回调的
    if (!fns || !fns.length) {
      return;
    }

    if (typeof fn === 'undefined') {
      fns.length = 0;
      return;
    }

    // 挨个处理删除
    for (var i = 0; i < fns.length; ++i) {
      if (fns[i] === fn) {
        fns.splice(i, 1);
      }
    }
  }
};

// 订阅岗位列表
function jobListForA(jobs) {
  console.log('A', jobs);
}

function jobListForB(jobs) {
  console.log('B', jobs);
}

// A订阅了笔试成绩
observer.subscribe('job', jobListForA);
// B订阅了笔试成绩
observer.subscribe('job', jobListForB);


// A订阅了笔试成绩
observer.subscribe('examinationA', function (score) {
  console.log(score);
});

// B订阅了笔试成绩
observer.subscribe('examinationB', function (score) {
  console.log(score);
});

// A订阅了面试结果
observer.subscribe('interviewA', function (result) {
  console.log(result);
});

observer.publish('examinationA', 100); // 100
observer.publish('examinationB', 80); // 80
observer.publish('interviewA', '备用'); // 备用

observer.publish('job', ['前端', '后端', '测试']); // 输出A和B的岗位


// B取消订阅了笔试成绩
observer.remove('examinationB');
// A都取消订阅了岗位
observer.remove('job', jobListForA);

observer.publish('examinationB', 80); // 没有可匹配的订阅，无输出
observer.publish('job', ['前端', '后端', '测试']); // 输出B的岗位
```
### 优缺点

优点

一为时间上的解耦，二为对象之间的解耦。可以用在异步编程中与MV*框架中

缺点

创建订阅者本身要消耗一定的时间和内存，订阅的处理函数不一定会被执行，驻留内存有性能开销

弱化了对象之间的联系，复杂的情况下可能会导致程序难以跟踪维护和理解

## 6、命令模式

### 定义

用一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够消除彼此之间的耦合关系

命令（command）指的是一个执行某些特定事情的指令

### 核心

命令中带有execute执行、undo撤销、redo重做等相关命令方法，建议显示地指示这些方法名

### 生活场景故事 
> 假设有一个快餐店，而我是该餐厅的点餐服务员，那么我一天的工作应该是这样的：当某位
> 客人点餐或者打来订餐电话后，我会把他的需求都写在清单上，然后交给厨房，客人不用关心是
> 哪些厨师帮他炒菜。我们餐厅还可以满足客人需要的定时服务，比如客人可能当前正在回家的路
> 上，要求 1 个小时后才开始炒他的菜，只要订单还在，厨师就不会忘记。客人也可以很方便地打
> 电话来撤销订单。另外如果有太多的客人点餐，厨房可以按照订单的顺序排队炒菜。
> 这些记录着订餐信息的清单，便是命令模式中的命令对象。

### 实现

```js
var setCommand = function (button, command) {
  button.onclick = function () {
    command.execute();
  }
};
var MenuBar = {
  refresh: function() {
    console.log('刷新菜单目录');
  } 
};
var SubMenu = {
  add: function () {
    console.log('增加子菜单');
  },
  del: function () {
    console.log('删除子菜单');
  }
};
// 在让 button 变得有用起来之前，我们要先把这些行为都封装在命令类中：
var RefreshMenuBarCommand = function (receiver) {
  this.receiver = receiver;
};
RefreshMenuBarCommand.prototype.execute = function () {
  this.receiver.refresh();
};
var AddSubMenuCommand = function (receiver) {
  this.receiver = receiver;
};

AddSubMenuCommand.prototype.execute = function () {
  this.receiver.add();
};
var DelSubMenuCommand = function (receiver) {
  this.receiver = receiver;
};
DelSubMenuCommand.prototype.execute = function () {
  console.log('删除子菜单');
};

// 最后就是把命令接收者传入到 command 对象中，并且把 command 对象安装到 button 上面：

var refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar);
var addSubMenuCommand = new AddSubMenuCommand(SubMenu);
var delSubMenuCommand = new DelSubMenuCommand(SubMenu);
setCommand(button1, refreshMenuBarCommand);
setCommand(button2, addSubMenuCommand);
setCommand(button3, delSubMenuCommand);
```
以上只是一个很简单的命令模式示例，但从中可以看到我们是如何把请求发送者和请求接收
者解耦开的。

也许我们会感到很奇怪，所谓的命令模式，看起来就是给对象的某个方法取了 execute 的名
字。引入 command 对象和 receiver 这两个无中生有的角色无非是把简单的事情复杂化了，即使不
用什么模式，用下面寥寥几行代码就可以实现相同的功能：

```js
var bindClick = function (button, func) {
  button.onclick = func;
};
var MenuBar = {
  refresh: function () {
    console.log('刷新菜单界面');
  }
};
var SubMenu = {
  add: function () {
    console.log('增加子菜单');
  },
  del: function () {
    console.log('删除子菜单');
  }
};
bindClick(button1, MenuBar.refresh);
bindClick( button2, SubMenu.add ); 
bindClick( button3, SubMenu.del );
```
这种说法是正确的，上一个示例代码是模拟传统面向对象语言的命令模式实现

**命令模式的由来，其实是回调（callback）函数的一个面向对象的替代品**

JavaScript 作为将函数作为一等对象的语言，跟策略模式一样，命令模式也早已融入到了
JavaScript 语言之中。运算块不一定要封装在 command.execute 方法中，也可以封装在普通函数中。
函数作为一等对象，本身就可以被四处传递

## 7、组合模式

### 定义

是用小的子对象来构建更大的 对象，而这些小的子对象本身也许是由更小 的“孙对象”构成的。

### 核心

可以用树形结构来表示这种“部分- 整体”的层次结构。

调用组合对象 的execute方法，程序会递归调用组合对象 下面的叶对象的execute方法

但要注意的是，组合模式不是父子关系，它是一种HAS-A（聚合）的关系，将请求委托给 它所包含的所有叶对象。基于这种委托，就需要保证组合对象和叶对象拥有相同的 接口

此外，也要保证用一致的方式对待 列表中的每个叶对象，即叶对象属于同一类，不需要过多特殊的额外操作

### 生活场景故事
> 我们知道地球和一些其他行星围绕着太阳旋转，也知道在一个原子中，有许多电子围绕着原
> 子核旋转。我曾经想象，我们的太阳系也许是一个更大世界里的一个原子，地球只是围绕着太阳
> 原子的一个电子。而我身上的每个原子又是一个星系，原子核就是这个星系中的恒星，电子是围
> 绕着恒星旋转的行星。一个电子中也许还包含了另一个宇宙，虽然这个宇宙还不能被显微镜看到，
> 但我相信它的存在。
> 也许这个想法有些异想天开，但在程序设计中，也有一些和“事物是由相似的子事物构成”
> 类似的思想。组合模式就是用小的子对象来构建更大的对象，而这些小的子对象本身也许是由更
> 小的“孙对象”构成的。
### 实现

使用组合模式来实现扫描文件夹中的文件
```js
// 文件夹 组合对象
function Folder(name) {
  this.name = name;
  this.parent = null;
  this.files = [];
}

Folder.prototype = {
  constructor: Folder,

  add: function (file) {
    file.parent = this;
    this.files.push(file);

    return this;
  },

  scan: function () {
    // 委托给叶对象处理
    for (var i = 0; i < this.files.length; ++i) {
      this.files[i].scan();
    }
  },

  remove: function (file) {
    if (typeof file === 'undefined') {
      this.files = [];
      return;
    }

    for (var i = 0; i < this.files.length; ++i) {
      if (this.files[i] === file) {
        this.files.splice(i, 1);
      }
    }
  }
};

// 文件 叶对象
function File(name) {
  this.name = name;
  this.parent = null;
}

File.prototype = {
  constructor: File,

  add: function () {
    console.log('文件里面不能添加文件');
  },

  scan: function () {
    var name = [this.name];
    var parent = this.parent;

    while (parent) {
      name.unshift(parent.name);
      parent = parent.parent;
    }

    console.log(name.join(' / '));
  }
};
```
构造好组合对象与叶对象的关系后，实例化，在组合对象中插入组合或叶对象

```js
var web = new Folder('Web');
var fe = new Folder('前端');
var css = new Folder('CSS');
var js = new Folder('js');
var rd = new Folder('后端');

web.add(fe).add(rd);

var file1 = new File('HTML权威指南.pdf');
var file2 = new File('CSS权威指南.pdf');
var file3 = new File('JavaScript权威指南.pdf');
var file4 = new File('MySQL基础.pdf');
var file5 = new File('Web安全.pdf');
var file6 = new File('Linux菜鸟.pdf');

css.add(file2);
fe.add(file1).add(file3).add(css).add(js);
rd.add(file4).add(file5);
web.add(file6);

rd.remove(file4);

// 扫描
web.scan();
```
扫描结果为


```js
Web / 前端 / HTML权威指南.pdf
Web / 前端 / JavaScript权威指南.pdf
Web / 前端 / CSS / CSS权威指南.pdf
Web / 后端 / Web安全.pdf
Web / Linux菜鸟.pdf
```
### 优缺点

优点

可 以方便地构造一棵树来表示对象的部分-整体 结构。在树的构造最终 完成之后，只需要通过请求树的最顶层对 象，便能对整棵树做统一一致的操作。

缺点

创建出来的对象长得都差不多，可能会使代码不好理解，创建太多的对象对性能也会有一些影响

## 8、模板方法模式

### 定义

模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。(tips:听起来很像interface的实现)

### 核心

在抽象父类中封装子类的算法框架，它的 init方法可作为一个算法的模板，指导子类以何种顺序去执行哪些方法。

由父类分离出公共部分，要求子类重写某些父类的（易变化的）抽象方法

### 生活场景故事
> 高考模式，我们高考固定的流程进入考场，考试规定的时间内完成，交卷子，离场，这一部分就是模板方法的抽象父类， 而具体实现的每个人作为子类，必须遵循这样的规矩，但是怎么完成卷子，完成的怎么样，就是子类重写父类的过程

### 实现

咖啡与茶是一个经典的例子，经常用来讲解模板方法模式，这个例子的原型来自《Head First
设计模式》。这一节我们就用 JavaScript 来实现这个例子。

首先，我们先来泡一杯咖啡，如果没有什么太个性化的需求，泡咖啡的步骤通常如下：
* (1) 把水煮沸
* (2) 用沸水冲泡咖啡
* (3) 把咖啡倒进杯子
* (4) 加糖和牛奶
  通过下面这段代码，我们就能得到一杯香浓的咖啡：

```js
var Coffee = function () { };
Coffee.prototype.boilWater = function () {
  console.log('把水煮沸');
};
Coffee.prototype.brewCoffeeGriends = function () {
  console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
};
Coffee.prototype.addSugarAndMilk = function () {
  console.log('加糖和牛奶');
};
Coffee.prototype.init = function () {
  this.boilWater();
  this.brewCoffeeGriends();
  this.pourInCup();
  this.addSugarAndMilk();
};
var coffee = new Coffee();
coffee.init();
```
接下来，开始准备我们的茶，泡茶的步骤跟泡咖啡的步骤相差并不大：
* (1) 把水煮沸
* (2) 用沸水浸泡茶叶
* (3) 把茶水倒进杯子
* (4) 加柠檬
  同样用一段代码来实现泡茶的步骤：
```js
var Tea = function () { };
Tea.prototype.boilWater = function () {
  console.log('把水煮沸');
};
Tea.prototype.steepTeaBag = function () {
  console.log('用沸水浸泡茶叶');
};
Tea.prototype.pourInCup = function () {
  console.log('把茶水倒进杯子');
};
Tea.prototype.addLemon = function () {
  console.log('加柠檬');
};
Tea.prototype.init = function () {
  this.boilWater();
  this.steepTeaBag();
  this.pourInCup();
  this.addLemon();
};
var tea = new Tea();
tea.init();
```
分离出共同点

我们找到泡咖啡和泡茶主要有以下不同点。
* 原料不同。一个是咖啡，一个是茶，但我们可以把它们都抽象为“饮料”。
* 泡的方式不同。咖啡是冲泡，而茶叶是浸泡，我们可以把它们都抽象为“泡”。
* 加入的调料不同。一个是糖和牛奶，一个是柠檬，但我们可以把它们都抽象为“调料”。
  经过抽象之后，不管是泡咖啡还是泡茶，我们都能整理为下面四步：
* (1) 把水煮沸
* (2) 用沸水冲泡饮料
* (3) 把饮料倒进杯子
* (4) 加调料
```js
var Beverage = function(){}; 
Beverage.prototype.boilWater = function(){ 
  console.log( '把水煮沸' ); 
}; 
Beverage.prototype.brew = function(){}; // 空方法，应该由子类重写
Beverage.prototype.pourInCup = function(){}; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function(){}; // 空方法，应该由子类重写
Beverage.prototype.init = function(){ 
  this.boilWater(); 
  this.brew(); 
  this.pourInCup(); 
  this.addCondiments(); 
};
```
创建 Coffee 子类和 Tea 子类

```js
var Coffee = function(){}; 
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
};
Coffee.prototype.addCondiments = function () {
  console.log('加糖和牛奶');
};
var Coffee = new Coffee();
Coffee.init();

// 接下来照葫芦画瓢，来创建我们的 Tea 类：

var Tea = function () { };
Tea.prototype = new Beverage();
Tea.prototype.brew = function () {
  console.log('用沸水浸泡茶叶');
};
Tea.prototype.pourInCup = function () {
  console.log('把茶倒进杯子');
};
Tea.prototype.addCondiments = function () {
  console.log('加柠檬');
};
var tea = new Tea();
tea.init();
```
而 Beverage.prototype.init 方法中已经规定好了泡饮料的顺序，所以我们能成功地泡出一杯
咖啡，代码如下：
```js
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};
```
## 9、享元模式

### 定义

享元（flyweight）模式是一种用于性能优化的模式，它的目标是尽量减少共享对象的数量
### 核心

运用共享技术来有效支持大量细粒度的对象。

强调将对象的属性划分为内部状态（属性）与外部状态（属性）。内部状态用于对象的共享，通常不变；而外部状态则剥离开来，由具体的场景决定。

### 生活场景故事
> 一个班同学去参加体育考试，根据男女区分，考试科目不同，评判标准不同，然而如果我们一起去一个一个参加考试，必然会很慢很乱，如果将男女分开两个小组，进行测试，只需要分开两套考核科目和标准即可

### 实现

在程序中使用了大量的相似对象时，可以利用享元模式来优化，减少对象的数量

举个栗子，要对某个班进行身体素质测量，仅测量身高体重来评判

```js
// 健康测量
function Fitness(name, sex, age, height, weight) {
  this.name = name;
  this.sex = sex;
  this.age = age;
  this.height = height;
  this.weight = weight;
}

// 开始评判
Fitness.prototype.judge = function () {
  var ret = this.name + ': ';

  if (this.sex === 'male') {
    ret += this.judgeMale();
  } else {
    ret += this.judgeFemale();
  }

  console.log(ret);
};

// 男性评判规则
Fitness.prototype.judgeMale = function () {
  var ratio = this.height / this.weight;

  return this.age > 20 ? (ratio > 3.5) : (ratio > 2.8);
};

// 女性评判规则
Fitness.prototype.judgeFemale = function () {
  var ratio = this.height / this.weight;

  return this.age > 20 ? (ratio > 4) : (ratio > 3);
};


var a = new Fitness('A', 'male', 18, 160, 80);
var b = new Fitness('B', 'male', 21, 180, 70);
var c = new Fitness('C', 'female', 28, 160, 80);
var d = new Fitness('D', 'male', 18, 170, 60);
var e = new Fitness('E', 'female', 18, 160, 40);

// 开始评判
a.judge(); // A: false
b.judge(); // B: false
c.judge(); // C: false
d.judge(); // D: true
e.judge(); // E: true
```
```js
评判五个人就需要创建五个对象，一个班就几十个对象

可以将对象的公共部分（内部状态）抽离出来，与外部状态独立。将性别看做内部状态即可，其他属性都属于外部状态。

这么一来我们只需要维护男和女两个对象（使用factory对象），而其他变化的部分则在外部维护（使用manager对象）
```
```js
// 健康测量
function Fitness(sex) {
  this.sex = sex;
}

// 工厂，创建可共享的对象
var FitnessFactory = {
  objs: [],

  create: function (sex) {
    if (!this.objs[sex]) {
      this.objs[sex] = new Fitness(sex);
    }

    return this.objs[sex];
  }
};

// 管理器，管理非共享的部分
var FitnessManager = {
  fitnessData: {},

  // 添加一项
  add: function (name, sex, age, height, weight) {
    var fitness = FitnessFactory.create(sex);

    // 存储变化的数据
    this.fitnessData[name] = {
      age: age,
      height: height,
      weight: weight
    };

    return fitness;
  },

  // 从存储的数据中获取，更新至当前正在使用的对象
  updateFitnessData: function (name, obj) {
    var fitnessData = this.fitnessData[name];

    for (var item in fitnessData) {
      if (fitnessData.hasOwnProperty(item)) {
        obj[item] = fitnessData[item];
      }
    }
  }
};

// 开始评判
Fitness.prototype.judge = function (name) {
  // 操作前先更新当前状态（从外部状态管理器中获取）
  FitnessManager.updateFitnessData(name, this);

  var ret = name + ': ';

  if (this.sex === 'male') {
    ret += this.judgeMale();
  } else {
    ret += this.judgeFemale();
  }

  console.log(ret);
};

// 男性评判规则
Fitness.prototype.judgeMale = function () {
  var ratio = this.height / this.weight;

  return this.age > 20 ? (ratio > 3.5) : (ratio > 2.8);
};

// 女性评判规则
Fitness.prototype.judgeFemale = function () {
  var ratio = this.height / this.weight;

  return this.age > 20 ? (ratio > 4) : (ratio > 3);
};


var a = FitnessManager.add('A', 'male', 18, 160, 80);
var b = FitnessManager.add('B', 'male', 21, 180, 70);
var c = FitnessManager.add('C', 'female', 28, 160, 80);
var d = FitnessManager.add('D', 'male', 18, 170, 60);
var e = FitnessManager.add('E', 'female', 18, 160, 40);

// 开始评判
a.judge('A'); // A: false
b.judge('B'); // B: false
c.judge('C'); // C: false
d.judge('D'); // D: true
e.judge('E'); // E: true
```
不过代码可能更复杂了，这个例子可能还不够充分，只是展示了享元模式如何实现，它节省了多个相似的对象，但多了一些操作。

factory对象有点像单例模式，只是多了一个sex的参数，如果没有内部状态，则没有参数的factory对象就更接近单例模式了

## 10、职责链模式

### 定义

使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链 传递该请求，直到有一个对象处理它为止
### 核心

请求发送者只需要知道链中的第一个节点，弱化发送者和一组接收者之间的强联系，可以便捷地在职责链中增加或删除一个节点，同样地，指定谁是第一个节点也很便捷

### 生活场景故事
> 如果早高峰能顺利挤上公交车的话，那么估计这一天都会过得很开心。因为公交车上人
> 实在太多了，经常上车后却找不到售票员在哪，所以只好把两块钱硬币往前面递。除非
> 你运气够好，站在你前面的第一个人就是售票员，否则，你的硬币通常要在 N 个人手上
> 传递，才能最终到达售票员的手里。

### 实现

以卖手机为例，设置一条职责链，可以免去多重if条件分支

我们的订单页面是 PHP 吐出的模板，在页面加载之初，PHP 会传递给页面几个字段。
* orderType：表示订单类型（定金用户或者普通购买用户），code 的值为 1 的时候是 500 元
  定金用户，为 2 的时候是 200 元定金用户，为 3 的时候是普通购买用户。
* pay：表示用户是否已经支付定金，值为 true 或者 false, 虽然用户已经下过 500 元定金的
  订单，但如果他一直没有支付定金，现在只能降级进入普通购买模式。
* stock：表示当前用于普通购买的手机库存数量，已经支付过 500 元或者 200 元定金的用
  户不受此限制。

```js
var order = function (orderType, pay, stock) {
  if (orderType === 1) { // 500 元定金购买模式
    if (pay === true) { // 已支付定金
      console.log('500 元定金预购, 得到 100 优惠券');
    } else { // 未支付定金，降级到普通购买模式
      if (stock > 0) { // 用于普通购买的手机还有库存
        console.log('普通购买, 无优惠券');
      } else {
        console.log('手机库存不足');
      }
    }
  }
  else if (orderType === 2) { // 200 元定金购买模式
    if (pay === true) {
      console.log('200 元定金预购, 得到 50 优惠券');
    } else {
      if (stock > 0) {
        console.log('普通购买, 无优惠券');
      } else {
        console.log('手机库存不足');
      }
    }
  }
  else if (orderType === 3) {
    if (stock > 0) {
      console.log('普通购买, 无优惠券');
    } else {
      console.log('手机库存不足');
    }
  }
};
order(1, true, 500); // 输出： 500 元定金预购, 得到 100 优惠券
```
虽然我们得到了意料中的运行结果，但这远远算不上一段值得夸奖的代码。order 函数不仅
巨大到难以阅读，而且需要经常进行修改。虽然目前项目能正常运行，但接下来的维护工作无疑
是个梦魇。恐怕只有最“新手”的程序员才会写出这样的代码。

用职责链模式重构代码

```js
// 500 元订单
var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购, 得到 100 优惠券');
  } else {
    order200(orderType, pay, stock); // 将请求传递给 200 元订单
  }
};
// 200 元订单
var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购, 得到 50 优惠券');
  } else {
    orderNormal(orderType, pay, stock); // 将请求传递给普通订单
  }
};
// 普通购买订单
var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买, 无优惠券');
  } else {
    console.log('手机库存不足');
  }
};
// 测试结果：
order500(1, true, 500); // 输出：500 元定金预购, 得到 100 优惠券
order500(1, false, 500); // 输出：普通购买, 无优惠券
order500(2, true, 500); // 输出：200 元定金预购, 得到 500 优惠券
order500(3, false, 500); // 输出：普通购买, 无优惠券
order500(3, false, 0); // 输出：手机库存不足
```
可以看到，执行结果和前面那个巨大的 order 函数完全一样，但是代码的结构已经清晰了很
多，我们把一个大函数拆分了 3 个小函数，去掉了许多嵌套的条件分支语句。

目前已经有了不小的进步，但我们不会满足于此，虽然已经把大函数拆分成了互不影响的 3
个小函数，但可以看到，请求在链条传递中的顺序非常僵硬，传递请求的代码被耦合在了业务函
数之中：

```js
var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购, 得到 100 优惠券');
  } else {
    order200(orderType, pay, stock);
    // order200 和 order500 耦合在一起
  }
};
```
这依然是违反开放封闭原则的，如果有天我们要增加 300 元预订或者去掉 200 元预订，意
味着就必须改动这些业务函数内部。就像一根环环相扣打了死结的链条，如果要增加、拆除或者
移动一个节点，就必须得先砸烂这根链条。

灵活可拆分的职责链节点

```js
var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购，得到 100 优惠券');
  } else {
    return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};
var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购，得到 50 优惠券');
  } else {
    return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};
var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券');
  } else {
    console.log('手机库存不足');
  }
};
```
接下来需要把函数包装进职责链节点，我们定义一个构造函数 Chain，在 new Chain 的时候传
递的参数即为需要被包装的函数，同时它还拥有一个实例属性 this.successor，表示在链中的下
一个节点。
此外 Chain 的 prototype 中还有两个函数，它们的作用如下所示：

```js
// Chain.prototype.setNextSuccessor 指定在链中的下一个节点
// Chain.prototype.passRequest 传递请求给某个节点
var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
};
Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor;
};
Chain.prototype.passRequest = function () {
  var ret = this.fn.apply(this, arguments);
if (ret === 'nextSuccessor') {
  return this.successor && this.successor.passRequest.apply(this.successor, arguments);
}
return ret; 
};
// 现在我们把 3 个订单函数分别包装成职责链的节点：
var chainOrder500 = new Chain(order500);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);
// 然后指定节点在职责链中的顺序：
chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);
// 最后把请求传递给第一个节点：
chainOrder500.passRequest(1, true, 500); // 输出：500 元定金预购，得到 100 优惠券
chainOrder500.passRequest(2, true, 500); // 输出：200 元定金预购，得到 50 优惠券
chainOrder500.passRequest(3, true, 500); // 输出：普通购买，无优惠券
chainOrder500.passRequest(1, false, 0); // 输出：手机库存不足
// 通过改进，我们可以自由灵活地增加、移除和修改链中的节点顺序，假如某天网站运营人员
// 又想出了支持 300 元定金购买，那我们就在该链中增加一个节点即可：
var order300 = function () {
  // 具体实现略 
};
chainOrder300 = new Chain(order300);
chainOrder500.setNextSuccessor(chainOrder300);
chainOrder300.setNextSuccessor(chainOrder200);
```
## 11、中介者模式
### 定义

所有的相关 对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者对象即可
### 核心

使网状的多对多关系变成了相对简单的一对多关系（复杂的调度处理都交给中介者）



### 生活场景故事
> 中介者也被称为调停者，我们想象一下机场的指挥塔，如果没有指挥塔的存在，每一架飞机
> 要和方圆 100 公里内的所有飞机通信，才能确定航线以及飞行状况，后果是不可想象的。现实中
> 的情况是，每架飞机都只需要和指挥塔通信。指挥塔作为调停者，知道每一架飞机的飞行状况，
> 所以它可以安排所有飞机的起降时间，及时做出航线调整。


### 实现

多个对象，指的不一定得是实例化的对象，也可以将其理解成互为独立的多个项。当这些项在处理时，需要知晓并通过其他项的数据来处理。

如果每个项都直接处理，程序会非常复杂，修改某个地方就得在多个项内部修改

我们将这个处理过程抽离出来，封装成中介者来处理，各项需要处理时，通知中介者即可。
```js
var A = {
  score: 10,

  changeTo: function (score) {
    this.score = score;

    // 自己获取
    this.getRank();
  },

  // 直接获取
  getRank: function () {
    var scores = [this.score, B.score, C.score].sort(function (a, b) {
      return a < b;
    });

    console.log(scores.indexOf(this.score) + 1);
  }
};

var B = {
  score: 20,

  changeTo: function (score) {
    this.score = score;

    // 通过中介者获取
    rankMediator(B);
  }
};

var C = {
  score: 30,

  changeTo: function (score) {
    this.score = score;

    rankMediator(C);
  }
};

// 中介者，计算排名
function rankMediator(person) {
  var scores = [A.score, B.score, C.score].sort(function (a, b) {
    return a < b;
  });

  console.log(scores.indexOf(person.score) + 1);
}

// A通过自身来处理
A.changeTo(100); // 1

// B和C交由中介者处理
B.changeTo(200); // 1
C.changeTo(50); // 3
```
ABC三个人分数改变后想要知道自己的排名，在A中自己处理，而B和C使用了中介者。B和C将更为轻松，整体代码也更简洁

最后，虽然中介者做到了对模块和对象的解耦，但有时对象之间的关系并非一定要解耦，强行使用中介者来整合，可能会使代码更为繁琐，需要注意。

## 12、装饰者模式

### 定义

以动态地给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。
是一种“即用即付”的方式，能够在不改变对 象自身的基础上，在程序运行期间给对象动态地 添加职责
### 核心

是为对象动态加入行为，经过多重包装，可以形成一条装饰链

### 生活场景故事
> 天冷了穿好秋衣秋裤

### 实现

最简单的装饰者，就是重写对象的属性

```js
var A = {
  score: 10
};

A.score = '分数：' + A.score;
```
可以使用传统面向对象的方法来实现装饰，添加技能
```js
function Person() { }

Person.prototype.skill = function () {
  console.log('数学');
};

// 装饰器，还会音乐
function MusicDecorator(person) {
  this.person = person;
}

MusicDecorator.prototype.skill = function () {
  this.person.skill();
  console.log('音乐');
};

// 装饰器，还会跑步
function RunDecorator(person) {
  this.person = person;
}

RunDecorator.prototype.skill = function () {
  this.person.skill();
  console.log('跑步');
};

var person = new Person();

// 装饰一下
var person1 = new MusicDecorator(person);
person1 = new RunDecorator(person1);

person.skill(); // 数学
person1.skill(); // 数学 音乐 跑步
```
在JS中，函数为一等对象，所以我们也可以使用更通用的装饰函数

```js
// 装饰器，在当前函数执行前先执行另一个函数
function decoratorBefore(fn, beforeFn) {
  return function () {
    var ret = beforeFn.apply(this, arguments);

    // 在前一个函数中判断，不需要执行当前函数
    if (ret !== false) {
      fn.apply(this, arguments);
    }
  };
}


function skill() {
  console.log('数学');
}

function skillMusic() {
  console.log('音乐');
}

function skillRun() {
  console.log('跑步');
}

var skillDecorator = decoratorBefore(skill, skillMusic);
skillDecorator = decoratorBefore(skillDecorator, skillRun);

skillDecorator(); // 跑步 音乐 数学
```

## 13、状态模式

### 定义

事物内部状态的改变往往会带来事物的行为改变。在处理的时候，将这个处理委托给当前的状态对象即可，该状态对象会负责渲染它自身的行为
### 核心

区分事物内部的状态，把事物的每种状态都封装成单独的类，跟此种状态有关的行为都被封装在这个类的内部

### 生活场景故事
> 我们来想象这样一个场景：有一个电灯，电灯上面只有一个开关。当电灯开着的时候，此时
> 按下开关，电灯会切换到关闭状态；再按一次开关，电灯又将被打开。同一个开关按钮，在不同
> 的状态下，表现出来的行为是不一样的。

### 实现

以灯光切换为例子
```js
// OffLightState：
var OffLightState = function (light) {
  this.light = light;
};
OffLightState.prototype.buttonWasPressed = function () {
  console.log('弱光'); // offLightState 对应的行为
  this.light.setState(this.light.weakLightState); // 切换状态到 weakLightState 
};
// WeakLightState：
var WeakLightState = function (light) {
  this.light = light;
};
WeakLightState.prototype.buttonWasPressed = function () {
  console.log('强光'); // weakLightState 对应的行为
  this.light.setState(this.light.strongLightState); // 切换状态到 strongLightState 
};
// StrongLightState：
var StrongLightState = function (light) {
  this.light = light;
};
StrongLightState.prototype.buttonWasPressed = function () {
  console.log('关灯'); // strongLightState 对应的行为
  this.light.setState(this.light.offLightState); // 切换状态到 offLightState 
};

var Light = function(){ 
 this.offLightState = new OffLightState( this ); 
 this.weakLightState = new WeakLightState( this ); 
 this.strongLightState = new StrongLightState( this ); 
 this.button = null; 
};
在 button 按钮被按下的事件里，Context 也不再直接进行任何实质性的操作，而是通过
self.currState.buttonWasPressed()将请求委托给当前持有的状态对象去执行，代码如下
```
```js
Light.prototype.init = function(){ 
  var button = document.createElement( 'button' ), 
  self = this;
  this.button = document.body.appendChild( button ); 
  this.button.innerHTML = '开关'; 
  this.currState = this.offLightState; // 设置当前状态
  this.button.onclick = function(){ 
    self.currState.buttonWasPressed(); 
  } 
};
```
最后还要提供一个 Light.prototype.setState 方法，状态对象可以通过这个方法来切换 light
对象的状态。前面已经说过，状态的切换规律事先被完好定义在各个状态类中。在 Context 中再
也找不到任何一个跟状态切换相关的条件分支语句：

```js
Light.prototype.setState = function( newState ){ 
 this.currState = newState; 
}; 
// 现在可以进行一些测试：
var light = new Light(); 
light.init();
```
## 14、适配器模式
### 定义

是解决两个软件实体间的接口不兼容的问题，对不兼容的部分进行适配
### 核心

解决两个已有接口之间不匹配的问题

### 生活场景故事

> Mac book 电池支持的电压是 20V，我们日常生活中的交流电压一般是 220V。除了我们了解
> 的 220V 交流电压，日本和韩国的交流电压大多是 100V，而英国和澳大利亚的是 240V。笔记本
> 电脑的电源适配器就承担了转换电压的作用，电源适配器使笔记本电脑在 100V~240V 的电压之
> 内都能正常工作，这也是它为什么被称为电源“适配器”的原因。

### 实现

比如一个简单的数据格式转换的适配器
```js
// 渲染数据，格式限制为数组了
function renderData(data) {
  data.forEach(function (item) {
    console.log(item);
  });
}

// 对非数组的进行转换适配
function arrayAdapter(data) {
  if (typeof data !== 'object') {
    return [];
  }

  if (Object.prototype.toString.call(data) === '[object Array]') {
    return data;
  }

  var temp = [];

  for (var item in data) {
    if (data.hasOwnProperty(item)) {
      temp.push(data[item]);
    }
  }

  return temp;
}

var data = {
  0: 'A',
  1: 'B',
  2: 'C'
};

renderData(arrayAdapter(data)); // A B C
```
## 15、外观模式
### 定义

为子系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使子系统更加容易使用
### 核心

可以通过请求外观接口来达到访问子系统，也可以选择越过外观来直接访问子系统

### 生活场景故事

> 去饭馆你可以选择吃大盘鸡还是只吃鸡或吃土豆

### 实现

外观模式在JS中，可以认为是一组函数的集合
```js
// 三个处理函数
function start() {
  console.log('start');
}

function doing() {
  console.log('doing');
}

function end() {
  console.log('end');
}

// 外观函数，将一些处理统一起来，方便调用
function execute() {
  start();
  doing();
  end();
}


// 调用init开始执行
function init() {
  // 此处直接调用了高层函数，也可以选择越过它直接调用相关的函数
  execute();
}

init(); // start doing end
```
