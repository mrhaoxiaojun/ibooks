
::: tip
所有设计模式的实现都遵循一条原则，即“ **“找出 程序中变化的地方，并将变化封装起来”**
:::

## 单一职责原则（SRP）

一个对象（方法）只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。

应该把对象或方法划分成较小的粒度

### 何时分离何时违反
要明确的是，并不是所有的职责都应该一一分离

一方面，如果随着需求的变化，有两个职责总是同时变化，那就不必分离他们。比如在 ajax
请求的时候，创建 xhr 对象和发送 xhr 请求几乎总是在一起的，那么创建 xhr 对象的职责和发送
xhr 请求的职责就没有必要分开。

另一方面，我们未必要在任何时候都一成不变地遵守原则。
在实际开发中，因为种种原因违反 SRP 的情况并不少见。比如 jQuery 的 attr 等方法，就是明显
违反 SRP 原则的做法。jQuery 的 attr 是个非常庞大的方法，既负责赋值，又负责取值，这对于
jQuery 的维护者来说，会带来一些困难，但对于 jQuery 的用户来说，却简化了用户的使用。

### SRP 原则的优缺点

SRP优点: 是降低了单个类或者对象的复杂度，按照职责把对象分解成更小的粒度，
这有助于代码的复用，也有利于进行单元测试。当一个职责需要变更的时候，不会影响到其他
的职责。

SRP 缺点: 最明显的是会增加编写代码的复杂度。当我们按照职责把对象分解成更小的粒度之后，实际上也增大了这些对象之间相互联系的难度。

### 设计模式中的 SRP 原则
SRP 原则在很多设计模式中都有着广泛的运用，例如代理模式、迭代器模式、单例模式和装饰者模式。

#### 1. 代理模式
通过增加虚拟代理的方式，把预加载图
片的职责放到代理对象中，而本体仅仅负责往页面中添加 img 标签，这也是它最原始的职责

```js 
// myImage 负责往页面中添加 img 标签：
var myImage = (function () {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    }
  }
})();
// proxyImage 负责预加载图片，并在预加载完成之后把请求交给本体 myImage：
var proxyImage = (function () {
  var img = new Image;
  img.onload = function () {
    myImage.setSrc(this.src);
  }
  return {
    setSrc: function (src) {
      myImage.setSrc('file:// /C:/Users/svenzeng/Desktop/loading.gif');
      img.src = src;
    }
  }
})();
```
把添加 img 标签的功能和预加载图片的职责分开放到两个对象中，这两个对象各自都只有一
个被修改的动机。在它们各自发生改变的时候，也不会影响另外的对象。
#### 2. 迭代器模式
我们有这样一段代码，先遍历一个集合，然后往页面中添加一些 div，这些 div 的 innerHTML
分别对应集合里的元素：

```js
var appendDiv = function (data) {
  for (var i = 0, l = data.length; i < l; i++) {
    var div = document.createElement('div');
    div.innerHTML = data[i];
    document.body.appendChild(div);
  }
};
appendDiv([1, 2, 3, 4, 5, 6]);
```
这其实是一段很常见的代码，经常用于 ajax 请求之后，在回调函数中遍历 ajax 请求返回的
数据，然后在页面中渲染节点。

appendDiv 函数本来只是负责渲染数据，但是在这里它还承担了遍历聚合对象 data 的职责。
我们想象一下，如果有一天 cgi 返回的 data 数据格式从 array 变成了 object，那我们遍历 data 的
代码就会出现问题，必须改成 for ( var i in data )的方式，这时候必须去修改 appendDiv 里的
代码，否则因为遍历方式的改变，导致不能顺利往页面中添加 div 节点。

我们有必要把遍历 data 的职责提取出来，这正是迭代器模式的意义，迭代器模式提供了一
种方法来访问聚合对象，而不用暴露这个对象的内部表示。

当把迭代聚合对象的职责单独封装在 each 函数中后，即使以后还要增加新的迭代方式，我
们只需要修改 each 函数即可，appendDiv 函数不会受到牵连，代码如下：

```js
var each = function (obj, callback) {
  var value,
    i = 0,
    length = obj.length,
    isArray = isArraylike(obj); // isArraylike 函数未实现，可以翻阅 jQuery 源代码
  if (isArray) { // 迭代类数组
    for (; i < length; i++) {
      callback.call(obj[i], i, obj[i]);
    }
  } else {
    for (i in obj) { // 迭代 object 对象
      value = callback.call(obj[i], i, obj[i]);
    }
  }
  return obj;
};
var appendDiv = function (data) {
  each(data, function (i, n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
  });
};
appendDiv([1, 2, 3, 4, 5, 6]);
appendDiv({ a: 1, b: 2, c: 3, d: 4 });
```
#### 3. 单例模式

```js
var createLoginLayer = (function () {
  var div;
  return function () {
    if (!div) {
      div = document.createElement('div');
      div.innerHTML = '我是登录浮窗';
      div.style.display = 'none';
      document.body.appendChild(div);
    }
    return div;
  }
})();
```
现在我们把管理单例的职责和创建登录浮窗的职责分别封装在两个方法里，这两个方法可以
独立变化而互不影响，当它们连接在一起的时候，就完成了创建唯一登录浮窗的功能，下面的代
码显然是更好的做法：

```js
var getSingle = function (fn) { // 获取单例
  var result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  }
};
var createLoginLayer = function () { // 创建登录浮窗
  var div = document.createElement('div');
  div.innerHTML = '我是登录浮窗';
  document.body.appendChild(div);
  return div;
};
var createSingleLoginLayer = getSingle(createLoginLayer);
var loginLayer1 = createSingleLoginLayer();
var loginLayer2 = createSingleLoginLayer();
alert(loginLayer1 === loginLayer2); // 输出： true
```
#### 4. 装饰者模式
使用装饰者模式的时候，我们通常让类或者对象一开始只具有一些基础的职责，更多的职责
在代码运行时被动态装饰到对象上面。装饰者模式可以为对象动态增加职责，从另一个角度来看，
这也是分离职责的一种方式。

```html
<html> 
 <body> 
 <button tag="login" id="button">点击打开登录浮层</button> 
 </body> 
<script> 
Function.prototype.after = function( afterfn ){ 
 var __self = this; 
 return function(){ 
 var ret = __self.apply( this, arguments ); 
 afterfn.apply( this, arguments ); 
 return ret; 
 } 
}; 
var showLogin = function(){ 
 console.log( '打开登录浮层' ); 
}; 
var log = function(){ 
 console.log( '上报标签为: ' + this.getAttribute( 'tag' ) );
  
document.getElementById( 'button' ).onclick = showLogin.after( log ); 
// 打开登录浮层之后上报数据
</script> 
</html>
```


## 最少知识原则（LKP）

一个软件实体应当 尽可能少地与其他实体发生相互作用 

应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理

### 1. 中介者模式

在世界杯期间购买足球彩票，如果没有博彩公司作为中介，上千万的人一起计算赔率和输赢
绝对是不可能的事情。博彩公司作为中介，每个人都只和博彩公司发生关联，博彩公司会根据所
有人的投注情况计算好赔率，彩民们赢了钱就从博彩公司拿，输了钱就赔给博彩公司。

中介者模式很好地体现了最少知识原则。通过增加一个中介者对象，让所有的相关对象都通
过中介者对象来通信，而不是互相引用。所以，当一个对象发生改变时，只需要通知中介者对象
即可。


## 开放-封闭原则（OCP）

软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改

当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定

### 扩展 window.onload 函数
假设我们是一个大型 Web 项目的维护人员，在接手这个项目时，发现它已经拥有 10 万行以
上的 JavaScript 代码和数百个 JS 文件。 

不久后接到了一个新的需求，即在 window.onload 函数中打印出页面中的所有节点数量。这
当然难不倒我们了。于是我们打开文本编辑器，搜索出 window.onload 函数在文件中的位置

如果目前的 window.onload 函数是一个拥有 500 行代码的巨型函数，里面密布着各种变量和
交叉的业务逻辑，而我们的需求又不仅仅是打印一个 log 这么简单。那么“改好一个 bug，引发
其他 bug”这样的事情就很可能会发生。我们永远不知道刚刚的改动会有什么副作用，很可能会
引发一系列的连锁反应。

通过增加代码，而不是修改代码的方式，来给 window.onload 函数添加新的功能，代
码如下：

```js
Function.prototype.after = function (afterfn) {
  var __self = this;
  return function () {
    var ret = __self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  }
};
window.onload = (window.onload || function () { }).after(function () {
  console.log(document.getElementsByTagName('*').length);
});
```
通过动态装饰函数的方式，我们完全不用理会从前 window.onload 函数的内部实现，无论它
的实现优雅或是丑陋。就算我们作为维护者，拿到的是一份混淆压缩过的代码也没有关系。只要
它从前是个稳定运行的函数，那么以后也不会因为我们的新增需求而产生错误。新增的代码和原
有的代码可以井水不犯河水。

### 生活中的开发和封闭故事

> 有一家生产肥皂的大企业，从欧洲花巨资引入了一条生产线。这条生产线可以自动
完成从原材料加工到包装成箱的整个流程，但美中不足的是，生产出来的肥皂有一定的
空盒几率。于是老板又从欧洲找来一支专家团队，花费数百万元改造这一生产线，终于
解决了生产出空盒肥皂的问题。
> 另一家企业也引入了这条生产线，他们同样遇到了空盒肥皂的问题。但他们的解决
办法很简单：用一个大风扇在生产线旁边吹，空盒肥皂就会被吹走

### 设计模式中的开放－封闭原则

有一种说法是，设计模式就是给做的好的设计取个名字。几乎所有的设计模式都是遵守开放
封闭原则的，我们见到的好设计，通常都经得起开放封闭原则的考验。不管是具体的各种设计
模式，还是更抽象的面向对象设计原则，比如单一职责原则、最少知识原则、依赖倒置原则等，
都是为了让程序遵守开放封闭原则而出现的。可以这样说，开放封闭原则是编写一个好程序的
目标，其他设计原则都是达到这个目标的过程

#### 1. 发布订阅模式
发布订阅模式用来降低多个对象之间的依赖关系，它可以取代对象之间硬编码的通知机制，
一个对象不用再显式地调用另外一个对象的某个接口。当有新的订阅者出现时，发布者的代码不
需要进行任何修改；同样当发布者需要改变时，也不会影响到之前的订阅者。

#### 2. 模板方法模式
在第 11 章中，我们曾提到，模板方法模式是一种典型的通过封装变化来提高系统扩展性的
设计模式。在一个运用了模板方法模式的程序中，子类的方法种类和执行顺序都是不变的，所以
我们把这部分逻辑抽出来放到父类的模板方法里面；而子类的方法具体怎么实现则是可变的，于
是把这部分变化的逻辑封装到子类中。通过增加新的子类，便能给系统增加新的功能，并不需要
改动抽象父类以及其他的子类，这也是符合开放封闭原则的。 

#### 3. 策略模式
策略模式和模板方法模式是一对竞争者。在大多数情况下，它们可以相互替换使用。模板方
法模式基于继承的思想，而策略模式则偏重于组合和委托。
策略模式将各种算法都封装成单独的策略类，这些策略类可以被交换使用。策略和使用策略
的客户代码可以分别独立进行修改而互不影响。我们增加一个新的策略类也非常方便，完全不用
修改之前的代码。

#### 4. 代理模式
我们在第 6 章中举了几个例子，开放封闭原则在它们之中都得到了体现。拿预加载图片举
例，我们现在已有一个给图片设置 src 的函数 myImage，当我们想为它增加图片预加载功能时，
一种做法是改动 myImage 函数内部的代码，更好的做法是提供一个代理函数 proxyMyImage，代理
函数负责图片预加载，在图片预加载完成之后，再将请求转交给原来的 myImage 函数，myImage 在
这个过程中不需要任何改动。
预加载图片的功能和给图片设置 src 的功能被隔离在两个函数里，它们可以单独改变而互不
影响。myImage 不知晓代理的存在，它可以继续专注于自己的职责——给图片设置 src。

#### 5. 职责链模式
在第 14 章的学习中，我们遇到过一个例子，把一个巨大的订单函数分别拆成了 500 元订单、
200 元订单以及普通订单的 3 个函数。这 3 个函数通过职责链连接在一起，客户的请求会在这条
链条里面依次传递：
```js
var order500yuan = new Chain(function( orderType, pay, stock ){ 
 // 具体代码略
}); 
var order200yuan = new Chain(function( orderType, pay, stock ){ 
 // 具体代码略
}); 
var orderNormal = new Chain(function( orderType, pay, stock ){ 
 // 具体代码略
}); 
order500yuan.setNextSuccessor( order200yuan ).setNextSuccessor( orderNormal ); 
order500yuan.passRequest( 1, true, 10 ); // 500 元定金预购，得到 100 优惠券
```
可以看到，当我们增加一个新类型的订单函数时，不需要改动原有的订单函数代码，只需要
在链条中增加一个新的节点。