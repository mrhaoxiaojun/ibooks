---
title: 编程技巧
date: 2020-04-04
sidebar: auto
tags:
 - 面试指南   
categories: 
 - 前端
---

## 代码重构

除了使用设计模式进行重构之外，还有一些常见而容易忽略的细节我们来介绍一下其中有一部分思想来自 Martin Fowler 的名著《重构：改善既有代码的设计》，虽然该书是使用 Java 语言写成的，但这些重构的技巧，有很大一部分可以为 JavaScript 语言所借鉴。 

说是重构，其实重点是我们不断优化代码积累过程,那么一手代码质量也会很高，下面开始介绍各种技巧

### 提炼函数
在 JavaScript 开发中，我们大部分时间都在与函数打交道，所以我们希望这些函数有着良好
的命名，函数体内包含的逻辑清晰明了。如果一个函数过长，不得不加上若干注释才能让这个函
数显得易读一些，那这些函数就很有必要进行重构。

如果在函数中有一段代码可以被独立出来，那我们最好把这些代码放进另外一个独立的函数
中。这是一种很常见的优化工作，这样做的好处主要有以下几点。

 避免出现超大函数。
 独立出来的函数有助于代码复用。
 独立出来的函数更容易被覆写。
 独立出来的函数如果拥有一个良好的命名，它本身就起到了注释的作用。

比如在一个负责取得用户信息的函数里面，我们还需要打印跟用户信息有关的 log，那么打
印 log 的语句就可以被封装在一个独立的函数里：

```js
var getUserInfo = function () {
  ajax('http:// xxx.com/userInfo', function (data) {
    console.log('userId: ' + data.userId);
    console.log('userName: ' + data.userName);
    console.log('nickName: ' + data.nickName);
  });
};
// 改成：
var getUserInfo = function () {
  ajax('http:// xxx.com/userInfo', function (data) {
    printDetails(data);
  });
};
var printDetails = function (data) {
  console.log('userId: ' + data.userId);
  console.log('userName: ' + data.userName);
  console.log('nickName: ' + data.nickName);
};
```

### 合并重复的条件片段

如果一个函数体内有一些条件分支语句，而这些条件分支语句内部散布了一些重复的代码，
那么就有必要进行合并去重工作。假如我们有一个分页函数 paging，该函数接收一个参数
currPage，currPage 表示即将跳转的页码。在跳转之前，为防止 currPage 传入过小或者过大的数
字，我们要手动对它的值进行修正，详见如下伪代码：

```js
var paging = function (currPage) {
  if (currPage <= 0) {
    currPage = 0;
    jump(currPage); // 跳转 
  } else if (currPage >= totalPage) {
    currPage = totalPage;
    jump(currPage); // 跳转
  } else {
    jump(currPage); // 跳转
  }
};
```
可以看到，负责跳转的代码 jump( currPage )在每个条件分支内都出现了，所以完全可以把
这句代码独立出来：

```js
var paging = function (currPage) {
  if (currPage <= 0) {
    currPage = 0;
  } else if (currPage >= totalPage) {
    currPage = totalPage;
  }
  jump(currPage); // 把 jump 函数独立出来
};
```

### 把条件分支语句提炼成函数

在程序设计中，复杂的条件分支语句是导致程序难以阅读和理解的重要原因，而且容易导致
一个庞大的函数。假设现在有一个需求是编写一个计算商品价格的 getPrice 函数，商品的计算只
有一个规则：如果当前正处于夏季，那么全部商品将以 8 折出售。代码如下：

```js
var getPrice = function (price) {
  var date = new Date();
  if (date.getMonth() >= 6 && date.getMonth() <= 9) { // 夏天
    return price * 0.8;
  }
  return price;
};
观察这句代码：
if (date.getMonth() >= 6 && date.getMonth() <= 9) {
  // ... 
}
```
这句代码要表达的意思很简单，就是判断当前是否正处于夏天（7~10 月）。尽管这句代码很
短小，但代码表达的意图和代码自身还存在一些距离，阅读代码的人必须要多花一些精力才能明
白它传达的意图。其实可以把这句代码提炼成一个单独的函数，既能更准确地表达代码的意思，
函数名本身又能起到注释的作用。代码如下：

```js
var isSummer = function () {
  var date = new Date();
  return date.getMonth() >= 6 && date.getMonth() <= 9;
};
var getPrice = function (price) {
  if (isSummer()) { // 夏天
    return price * 0.8;
  }
  return price;
};
```
### 合理使用循环

在函数体内，如果有些代码实际上负责的是一些重复性的工作，那么合理利用循环不仅可以
完成同样的功能，还可以使代码量更少。下面有一段创建 XHR 对象的代码，为了简化示例，我们
只考虑版本 9 以下的 IE 浏览器，代码如下：

```js
var createXHR = function () {
  var xhr;
  try {
    xhr = new ActiveXObject('MSXML2.XMLHttp.6.0');
  } catch (e) {
    try {
      xhr = new ActiveXObject('MSXML2.XMLHttp.3.0');
    } catch (e) {
      xhr = new ActiveXObject('MSXML2.XMLHttp');
    }
  }
  return xhr;
};
var xhr = createXHR();
```
下面我们灵活地运用循环，可以得到跟上面代码一样的效果：
```js
var createXHR = function () {
  var versions = ['MSXML2.XMLHttp.6.0ddd', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];
  for (var i = 0, version; version = versions[i++];) {
    try {
      return new ActiveXObject(version);
    } catch (e) {
    }
  }
};
var xhr = createXHR();
```
### 提前让函数退出代替嵌套条件分支

许多程序员都有这样一种观念：“每个函数只能有一个入口和一个出口。”现代编程语言都会
限制函数只有一个入口。但关于“函数只有一个出口”，往往会有一些不同的看法。

下面这段伪代码是遵守“函数只有一个出口的”的典型代码：

```js
var del = function (obj) {
  var ret;
  if (!obj.isReadOnly) { // 不为只读的才能被删除
    if (obj.isFolder) { // 如果是文件夹
      ret = deleteFolder(obj);
    } else if (obj.isFile) { // 如果是文件
      ret = deleteFile(obj);
    }
  }
  return ret;
};
```
嵌套的条件分支语句绝对是代码维护者的噩梦，对于阅读代码的人来说，**嵌套的 if、else语句相比平铺的 if、else，在阅读和理解上更加困难**，有时候一个外层 if 分支的左括号和右括号之间相隔 500 米之远。用《重构》里的话说，嵌套的条件分支往往是由一些深信“每个函数只
能有一个出口的”程序员写出的。但实际上，如果对函数的剩余部分不感兴趣，那就应该立即退
出。引导阅读者去看一些没有用的 else 片段，只会妨碍他们对程序的理解。 

于是我们可以挑选一些条件分支，在进入这些条件分支之后，就立即让这个函数退出。要做
到这一点，有一个常见的技巧，即在面对一个嵌套的 if 分支时，我们可以把外层 if 表达式进行
反转。重构后的 del 函数如下：

```js
var del = function (obj) {
  if (obj.isReadOnly) { // 反转 if 表达式
    return;
  }
  if (obj.isFolder) {
    return deleteFolder(obj);
  }
  if (obj.isFile) {
    return deleteFile(obj);
  }
};
```
### 传递对象参数代替过长的参数列表

有时候一个函数有可能接收多个参数，而参数的数量越多，函数就越难理解和使用。使用该
函数的人首先得搞明白全部参数的含义，在使用的时候，还要小心翼翼，以免少传了某个参数或
者把两个参数搞反了位置。如果我们想在第 3 个参数和第 4 个参数之中增加一个新的参数，就会
涉及许多代码的修改，代码如下：

```js
var setUserInfo = function (id, name, address, sex, mobile, qq) {
  console.log('id= ' + id);
  console.log('name= ' + name);
  console.log('address= ' + address);
  console.log('sex= ' + sex);
  console.log('mobile= ' + mobile);
  console.log('qq= ' + qq);
};
setUserInfo(1314, 'sven', 'shenzhen', 'male', '137********', 377876679);
```
这时我们可以把参数都放入一个对象内，然后把该对象传入 setUserInfo 函数，setUserInfo
函数需要的数据可以自行从该对象里获取。现在不用再关心参数的数量和顺序，只要保证参数对
应的 key 值不变就可以了：

```js
var setUserInfo = function (obj) {
  console.log('id= ' + obj.id);
  console.log('name= ' + obj.name);
  console.log('address= ' + obj.address);
  console.log('sex= ' + obj.sex);
  console.log('mobile= ' + obj.mobile);
  console.log('qq= ' + obj.qq);
};
setUserInfo({
  id: 1314,
  name: 'sven',
  address: 'shenzhen',
  sex: 'male',
  mobile: '137********',
  qq: 377876679
});
```
### 尽量减少参数数量
如果调用一个函数时需要传入多个参数，那这个函数是让人望而生畏的，我们必须搞清楚这
些参数代表的含义，必须小心翼翼地把它们按照顺序传入该函数。而如果一个函数不需要传入任
何参数就可以使用，这种函数是深受人们喜爱的。在实际开发中，向函数传递参数不可避免，但
我们应该尽量减少函数接收的参数数量。下面举个非常简单的示例。 有一个画图函数 draw，它
现在只能绘制正方形，接收了 3 个参数，分别是图形的 width、heigth 以及 square：
`var draw = function( width, height, square ){}; `
但实际上正方形的面积是可以通过 width 和 height 计算出来的，于是我们可以把参数 square
从 draw 函数中去掉：
```js
var draw = function( width, height ){ 
  var square = width * height; 
}; 
```
假设以后这个 draw函数开始支持绘制圆形，我们需要把参数 width和 height换成半径 radius，
但图形的面积 square 始终不应该由客户传入，而是应该在 draw 函数内部，由传入的参数加上一
定的规则计算得来。此时，我们可以使用策略模式，让 draw 函数成为一个支持绘制多种图形的
函数。

### 少用三目运算符
有一些程序员喜欢大规模地使用三目运算符，来代替传统的 if、else。理由是三目运算符性
能高，代码量少。不过，这两个理由其实都很难站得住脚。

即使我们假设三目运算符的效率真的比 if、else 高，这点差距也是完全可以忽略不计的。
在实际的开发中，即使把一段代码循环一百万次，使用三目运算符和使用 if、else 的时间开销
处在同一个级别里。

同样，相比损失的代码可读性和可维护性，三目运算符节省的代码量也可以忽略不计。让 JS
文件加载更快的办法有很多种，如压缩、缓存、使用 CDN 和分域名等。把注意力只放在使用三
目运算符节省的字符数量上，无异于一个 300 斤重的人把超重的原因归罪于头皮屑。 

如果条件分支逻辑简单且清晰，这无碍我们使用三目运算符：

`var global = typeof window !== "undefined" ? window : this;`

但如果条件分支逻辑非常复杂，如下段代码所示，那我们最好的选择还是按部就班地编写
if、else。if、else 语句的好处很多，一是阅读相对容易，二是修改的时候比修改三目运算符周
围的代码更加方便：

```js
if (!aup || !bup) {
  return a === doc ? -1 :
    b === doc ? 1 :
      aup ? -1 :
        bup ? 1 :
          sortInput ?
            (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
            0;
}
```
### 合理使用链式调用
经常使用 jQuery 的程序员相当习惯链式调用方法，在 JavaScript 中，可以很容易地实现方法
的链式调用，即让方法调用结束后返回对象自身，如下代码所示：

```js
var User = function () {
  this.id = null;
  this.name = null;
};
User.prototype.setId = function (id) {
  this.id = id;
  return this;
};
User.prototype.setName = function (name) {
  this.name = name;
  return this;
};
console.log(new User().setId(1314).setName('sven'));
// 或者：
var User = {
  id: null,
  name: null,
  setId: function (id) {
    this.id = id;
    return this;
  },
  setName: function (name) {
    this.name = name;
    return this;
  }
};
console.log(User.setId(1314).setName('sven'));
```
使用链式调用的方式并不会造成太多阅读上的困难，也确实能省下一些字符和中间变量，但
节省下来的字符数量同样是微不足道的。链式调用带来的坏处就是在调试的时候非常不方便，如
果我们知道一条链中有错误出现，必须得先把这条链拆开才能加上一些调试 log 或者增加断点，
这样才能定位错误出现的地方。

如果该链条的结构相对稳定，后期不易发生修改，那么使用链式调用无可厚非。但如果该链
条很容易发生变化，导致调试和维护困难，那么还是建议使用普通调用的形式
```js
var user = new User(); 
user.setId( 1314 ); 
user.setName( 'sven' );
```
### 用 return 退出多重循环

假设在函数体内有一个两重循环语句，我们需要在内层循环中判断，当达到某个临界条件时
退出外层的循环。我们大多数时候会引入一个控制标记变量：

```js
var func = function () {
  var flag = false;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        flag = true;
        break;
      }
    }
    if (flag === true) {
      break;
    }
  }
};
```
第二种做法是设置循环标记：

```js
var func = function () {
  outerloop:
  for (var i = 0; i < 10; i++) {
    innerloop:
    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        break outerloop;
      }
    }
  }
};
```
这两种做法无疑都让人头晕目眩，更简单的做法是在需要中止循环的时候直接退出整个方法：

```js
var func = function () {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        return;
      }
    }
  }
};
```
当然用 return 直接退出方法会带来一个问题，如果在循环之后还有一些将被执行的代码呢？
如果我们提前退出了整个方法，这些代码就得不到被执行的机会：

```js
var func = function () {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        return;
      }
    }
  }
  console.log(i); // 这句代码没有机会被执行
};
```
为了解决这个问题，我们可以把循环后面的代码放到 return 后面，如果代码比较多，就应
该把它们提炼成一个单独的函数：

```js
var print = function (i) {
  console.log(i);
};
var func = function () {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        return print(i);
      }
    }
  }
};
func();
```

## 接口和面向接口编程

当我们谈到接口的时候，通常会涉及以下几种含义，下面先简单介绍。

我们经常说一个库或者模块对外提供了某某 API 接口。通过主动暴露的接口来通信，可以隐藏软件系统内部的工作细节。这也是我们最熟悉的第一种接口含义。

第二种接口是一些语言提供的关键字，比如 Java 的 interface。interface 关键字可以产生一个完全抽象的类。这个完全抽象的类用来表示一种契约，专门负责建立类与类之间的联系。

第三种接口即是我们谈论的“面向接口编程”中的接口，接口的含义在这里体现得更为抽象。用《设计模式》中的话说就是：

**接口是对象能响应的请求的集合。**

### Java 的抽象类

```java
// 先创建一个 Animal 抽象类：
public abstract class Animal { 
  abstract void makeSound(); // 抽象方法
 }
// 然后让 Duck 类和 Chicken 类都继承自抽象类 Animal：
public class Chicken extends Animal {
  public void makeSound() {
    System.out.println("咯咯咯");
  }
}
public class Duck extends Animal {
  public void makeSound() {
    System.out.println("嘎嘎嘎");
  }
}
// 现在剩下的就是让 AnimalSound 类的 makeSound 方法接收 Animal 类型的参数，而不是具体的
// Duck 类型或者 Chicken 类型：
public class AnimalSound {
  // 接收 Animal 类型的参数，而非 Duck 类型或 Chicken 类型
  public void makeSound(Animal animal) {
    animal.makeSound();
  }
}
public class Test {
  public static void main(String args[]) {
    AnimalSound animalSound = new AnimalSound();
    Animal duck = new Duck(); // 向上转型
    Animal chicken = new Chicken(); // 向上转型
    animalSound.makeSound(duck); // 输出：嘎嘎嘎
    animalSound.makeSound(chicken); // 输出：咯咯咯
  }
} 
```

* 向上转型。让 Duck 对象和 Chicken 对象的类型都隐藏在 Animal 类型身后，隐藏对象的具体
类型之后，duck 对象和 chicken 对象才能被交换使用，这是让对象表现出多态性的必经之路。
* 建立一些契约。继承自抽象类的具体类都会继承抽象类里的 abstract 方法，并且要求覆
写它们。这些契约在实际编程中非常重要，可以帮助我们编写可靠性更高的代码。比如
在命令模式中，各个子命令类都必须实现 execute 方法，才能保证在调用 command.execute
的时候不会抛出异常。

### interface

除了用抽象类来完成面向接口编程之外，使用 interface 也可以达到同样的效果。虽然很多
人在实际使用中刻意区分抽象类和 interface，但**使用 interface 实际上也是继承的一种方式，叫作接口继承**。

**相对于单继承的抽象类，一个类可以实现多个 interface**。抽象类中除了 abstract 方法之外，
还可以有一些供子类公用的具体方法。interface 使抽象的概念更进一步，它产生一个完全抽象
的类，不提供任何具体实现和方法体（Java 8 已经有了提供实现方法的 interface），但允许该
interface 的创建者确定方法名、参数列表和返回类型，这相当于提供一些行为上的约定，但**不关心该行为的具体实现过程**。 

interface 同样可以用于向上转型，这也是让对象表现出多态性的一条途径，实现了同一个接口的两个类就可以被相互替换使用

再回到用抽象类实现让鸭子和鸡发出叫声的故事。这个故事得以完美收场的关键是让抽象类
Animal 给 duck 和 chicken 进行向上转型。但此时也引入了一个限制，抽象类是基于单继承的，也
就是说我们不可能让 Duck 和 Chicken 再继承自另一个家禽类。如果使用 interface，可以仅仅针
对发出叫声这个行为来编写程序，同时一个类也可以实现多个 interface。

下面用 interface 来改写基于抽象类的代码。我们先定义 Animal 接口，所有实现了 Animal 接
口的动物类都将拥有 Animal 接口中约定的行为

```java
public interface Animal{
  abstract void makeSound(); 
}
public class Duck implements Animal {
  public void makeSound() { // 重写 Animal 接口的 makeSound 抽象方法
    System.out.println("嘎嘎嘎");
  }
}
public class Chicken implements Animal {
  public void makeSound() { // 重写 Animal 接口的 makeSound 抽象方法
    System.out.println("咯咯咯");
  }
}
public class AnimalSound {
  public void makeSound(Animal animal) {
    animal.makeSound();
  }
}
public class Test {
  public static void main(String args[]) {
    Animal duck = new Duck();
    Animal chicken = new Chicken();
    AnimalSound animalSound = new AnimalSound();
    animalSound.makeSound(duck); // 输出：嘎嘎嘎
    animalSound.makeSound(chicken); // 输出：咯咯咯
  }
}
```
### JavaScript 语言是否需要抽象类和 interface

通过前面的讲解，我们明白了抽象类和 interface 的作用主要都是以下两点。

* 通过向上转型来隐藏对象的真正类型，以表现对象的多态性。
* 约定类与类之间的一些契约行为。

对于 JavaScript 而言，因为 JavaScript 是一门动态类型语言，类型本身在 JavaScript 中是一个
相对模糊的概念。也就是说，不需要利用抽象类或者 interface 给对象进行“向上转型”。除了
number、string、boolean 等基本数据类型之外，**其他的对象都可以被看成“天生”被“向上转型”成了 Object 类型**

```js
var ary = new Array(); 
var date = new Date(); 
// 如果 JavaScript 是一门静态类型语言，上面的代码也许可以理解为：
Array ary = new Array(); 
Date date = new Date(); 
// 或者： 
Object ary = new Array(); 
Object date = new Date(); 
```

很少有人在 JavaScript 开发中去关心对象的真正类型。**在动态类型语言中，对象的多态性是与生俱来的**，但在另外一些静态类型语言中，对象类型之间的解耦非常重要，甚至有一些设计模
式的主要目的就是专门隐藏对象的真正类型。 因为不需要进行向上转型，接口在 JavaScript 中的**最大作用就退化到了检查代码的规范性**。
比如检查某个对象是否实现了某个方法，或者检查是否给函数传入了预期类型的参数。如果忽略了这两点，有可能会在代码中留下一些隐藏的 bug。
比如我们尝试执行 obj 对象的 show 方法，但是 obj 对象本身却没有实现这个方法，代码如下：

```js
function show(obj) {
  obj.show(); // Uncaught TypeError: undefined is not a function 
}
var myObject = {}; // myObject 对象没有 show 方法
show(myObject);
// 或者：
function show(obj) {
  obj.show(); // TypeError: number is not a function 
}
var myObject = { // myObject.show 不是 Function 类型
  show: 1
};
show(myObject);
// 此时，我们不得不加上一些防御性代码：
function show(obj) {
  if (obj && typeof obj.show === 'function') {
    obj.show();
  }
}
// 或者：
function show(obj) {
  try {
    obj.show();
  } catch (e) {
  }
}
var myObject = {}; // myObject 对象没有 show 方法
// var myObject = { // myObject.show 不是 Function 类型
// show: 1 
// }; 
show(myObject);
```
### 用 TypeScript 编写基于 interface 的命令模式

虽然在大多数时候 interface 给 JavaScript 开发带来的价值并不像在静态类型语言中那么大，
但如果我们正在编写一个复杂的应用，还是会经常怀念接口的帮助。

下面我们以基于命令模式的示例来说明 interface 如何规范程序员的代码编写，这段代码本
身并没有什么实用价值，在 JavaScript 中，我们一般用闭包和高阶函数来实现命令模式。

假设我们正在编写一个用户界面程序，页面中有成百上千个子菜单。因为项目很复杂，我们
决定让整个程序都基于命令模式来编写，即编写菜单集合界面的是某个程序员，而负责实现每个
子菜单具体功能的工作交给了另外一些程序员。

那些负责实现子菜单功能的程序员，在完成自己的工作之后，会把子菜单封装成一个命令对
象，然后把这个命令对象交给编写菜单集合界面的程序员。他们已经约定好，当调用子菜单对象
的 execute 方法时，会执行对应的子菜单命令。

虽然在开发文档中详细注明了每个子菜单对象都必须有自己的 execute 方法，但还是有一个
粗心的 JavaScript 程序员忘记给他负责的子菜单对象实现 execute 方法，于是当执行这个命令的
时候，便会报出错误，代码如下：

```html
<html>
  <body>
    <button id="exeCommand">执行菜单命令</button>
    <script>
      var RefreshMenuBarCommand = function(){};
 RefreshMenuBarCommand.prototype.execute = function(){
        console.log('刷新菜单界面');
      };
 var AddSubMenuCommand = function(){};
 AddSubMenuCommand.prototype.execute = function(){
        console.log('增加子菜单');
      };
 var DelSubMenuCommand = function(){};
      /*****没有实现 DelSubMenuCommand.prototype.execute *****/
 // DelSubMenuCommand.prototype.execute = function(){
 // }; 
 var refreshMenuBarCommand = new RefreshMenuBarCommand(),
      addSubMenuCommand = new AddSubMenuCommand(),
      delSubMenuCommand = new DelSubMenuCommand();
 var setCommand = function( command ){
        document.getElementById('exeCommand').onclick = function () {
          command.execute();
        }
      };
      setCommand( refreshMenuBarCommand );
      // 点击按钮后输出："刷新菜单界面"
      setCommand( addSubMenuCommand );
      // 点击按钮后输出："增加子菜单"
      setCommand( delSubMenuCommand );
      // 点击按钮后报错。Uncaught TypeError: undefined is not a function
</script>
  </body>
</html>
```
为了防止粗心的程序员忘记给某个子命令对象实现 execute 方法，我们只能在高层函数里添
加一些防御性的代码，这样当程序在最终被执行的时候，有可能抛出异常来提醒我们，代码如下：

```js
var setCommand = function (command) {
  document.getElementById('exeCommand').onclick = function () {
    if (typeof command.execute !== 'function') {
      throw new Error("command 对象必须实现 execute 方法");
    }
    command.execute();
  }
};
```
如果确实不喜欢重复编写这些防御性代码，我们还可以尝试使用 TypeScript来编写这个程序。

TypeScript 是微软开发的一种编程语言，是 JavaScript 的一个超集。跟 CoffeeScript 类似，
TypeScript 代码最终会被编译成原生的 JavaScript 代码执行。通过 TypeScript，我们可以使用静态
语言的方式来编写 JavaScript 程序。用 TypeScript 来实现一些设计模式，显得更加原汁原味。

TypeScript 目前的版本还没有提供对抽象类的支持，但是提供了 interface。下面我们就来编
写一个 TypeScript 版本的命令模式。

首先定义 Command 接口：

```js
interface Command{ 
  execute: Function; 
}
```
接下来定义 RefreshMenuBarCommand、AddSubMenuCommand 和 DelSubMenuCommand 这 3 个类，它们
分别都实现了 Command 接口，这可以保证它们都拥有 execute 方法：
```js
class RefreshMenuBarCommand implements Command {
  constructor() {
  }
  execute() {
    console.log('刷新菜单界面');
  }
}
class AddSubMenuCommand implements Command {
  constructor() {
  }
  execute() {
    console.log('增加子菜单');
  }
}
class DelSubMenuCommand implements Command {
  constructor() {
  }
  // 忘记重写 execute 方法
}
var refreshMenuBarCommand = new RefreshMenuBarCommand(),
  addSubMenuCommand = new AddSubMenuCommand(),
  delSubMenuCommand = new DelSubMenuCommand();
refreshMenuBarCommand.execute(); // 输出：刷新菜单界面
addSubMenuCommand.execute(); // 输出：增加子菜单
delSubMenuCommand.execute(); // 输出：Uncaught TypeError: undefined is not a function
```
当我们忘记在 DelSubMenuCommand 类中重写 execute 方法时，TypeScript 提供的编译器及时给出了错误提示。
