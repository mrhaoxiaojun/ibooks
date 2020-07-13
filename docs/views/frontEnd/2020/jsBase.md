---
title: JavaScript基础
date: 2020-06-04
sidebar: auto
tags:
 - 面试指南   
categories: 
 - 前端
---

## 面向对象

老生常谈，

JavaScript 没有提供传统面向对象语言中的类式继承，而是通过原型委托的方式来实现对象与对象之间的继承。

JavaScript 也没有在语言层面提供对抽象类和接口的支持。正因为存在这些跟传统面向对象语言不一致的地方，我们在用设计模式编写代码的时候，更要跟传统面向对象语言加以区别。

所以在正式学习设计模式之前，我们有必要先了解一些 JavaScript 在面向对象方面的知识。

值得一说的是，es6已经有了class类语法糖，如果你学习了TypeScript那就更完美了,作者是C#的首席架构师，可想而知他的语法，后端会喜欢，这也证明JavaScript在汲取其他语言的优点

### 动态类型语言

编程语言按照数据类型大体可以分为两类，**一类是静态类型语言**，**另一类是动态类型语言**。

静态类型语言在编译时便已确定变量的类型，而动态类型语言的变量类型要到程序运行的时候，待变量被赋予某个值之后，才会具有某种类型，JavaScript就是典型的动态类型语言。

静态语言

* 优点：编译的时就能发现类型不匹配的错误，编辑器帮助我们避免程序在运行时可能发生的一些错误
* 缺点：迫使开发人员强类型编写，类型的声明也会增加更多的代码，在程序编写过程中，这些细节会让程序员的精力从思考业务逻辑上分散开来。

动态语言：

* 优点：代码量少，看起来更简单，专注与逻辑，对阅读程序很有帮助
* 缺点: 无法保证变量的类型,灵活性很强

这里有一个有意思的概念叫做鸭子类型（duck typing）鸭子类型的通俗说法是：“如果它走起路来像鸭子，叫起来也是鸭子，那么它就是鸭子。” 也就是说你本身是不重要，重要是你的行为

### 多态

“多态”一词源于希腊文 polymorphism，拆开来看是 poly（复数）+ morph（形态）+ ism，从字面上我们可以理解为复数形态。

多态的实际含义是：**同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个消息分别给出不同的反馈。**

```js
var makeSound = function( animal ){ 
  if ( animal instanceof Duck ){ 
    console.log( '嘎嘎嘎' ); 
  }else if ( animal instanceof Chicken ){ 
    console.log( '咯咯咯' ); 
  } 
}; 
var Duck = function(){}; 
var Chicken = function(){}; 
makeSound( new Duck() ); // 嘎嘎嘎
makeSound( new Chicken() ); // 咯咯咯
```
这段代码确实体现了“多态性”，当我们分别向鸭和鸡发出“叫唤”的消息时，它们根据此消息作出了各自不同的反应。

但这样的“多态性”是无法令人满意的，如果后来又增加了一只动物，此时我们必须得改动 makeSound 函数，修改的地方越多越容易出问题，我们希望不变的部分让他封装起来不要改变

多态背后的思想是将 **“做什么”和“谁去做以及怎样去做”** 分离开来，也就是将“不变的事物”与 “可能改变的事物”分离开来

```js
var makeSound = function( animal ){ 
  animal.sound(); 
};
var Duck = function(){} 
Duck.prototype.sound = function(){ 
  console.log( '嘎嘎嘎' ); 
}; 
var Chicken = function(){} 
Chicken.prototype.sound = function(){ 
  console.log( '咯咯咯' ); 
}; 
makeSound( new Duck() ); // 嘎嘎嘎
makeSound( new Chicken() ); // 咯咯咯
```
上述代码，是不是就更加贴切的体现了**对象的多态性** 动物都会叫不变，这个永远不会变，可变的部分你再多加多少都互不影响

静态语言类型语言的多态就不举例了（提一嘴：静态类型语言因为类型声明的原因会让它没有动态类型语言那么方便，但是它采用“向上转型”的方法，定义个抽象类来作为被继承的类，这样就可以用父类的类型了）

**多态在面向对象中的作用**

Martin Fowler 在《重构：改善既有代码的设计》里写到： 
> 多态的最根本好处在于，你不必再向对象询问“你是什么类型”而后根据得到的答案调用对象的某个行为——你只管调用该行为就是了，其他的一切多态机制都会为你安排妥当。

换句话说，**多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句**。

### 封装

封装的目的是将信息隐藏一般而言，我们讨论的封装是封装数据和封装实现。这一节将讨论更广义的封装，不仅包括**封装数据和封装实现**，还包括**封装类型和封装变化**

#### 封装数据

封装数据是由语法解析来实现的，这些语言也许提供了 private、public、protected 等关键字来提供不同的访问权限。

JavaScript 并没有提供对这些关键字的支持，我们只能依赖变量的作用域来实现封装特性，而且只能模拟出 public 和 private 这两种封装性。

除了 ECMAScript 6 中提供的 let 之外，一般我们通过函数来创建作用域：
```js
var myObject = (function(){ 
  var __name = 'sven'; // 私有（private）变量
  return { 
    getName: function(){ // 公开（public）方法
      return __name; 
    } 
  } 
})(); 
console.log( myObject.getName() ); // 输出：sven 
console.log( myObject.__name ) // 输出：undefined
```
#### 封装实现

封装的目的是将信息隐藏，封装应该被视为“任何形式的封装”，也就是说，封装不仅仅是隐藏数据，还包括隐藏实现细节、设计细节以及隐藏对象的类型等。

用户都不关心它的内部实现，对象之间只通过暴露的 API 接口来通信。当我们修改一个对象时，可以随意地修改它的
内部实现，只要对外的接口没有变化，就不会影响到程序的其他功能。 封装实现细节的例子非常之多。拿迭代器来说明，迭代器的作用是在不暴露一个聚合对象的内部表示的前提下，提供一种方式来顺序访问这个聚合对象。 each 函数的人不用关心它的内部是怎样实现的，只要它提供的功能正确便可以。即使 each 函数修改了内部源代码，只要对外的接口或者调用方式没有变化，用户就不用关心它内部实现的改变。

#### 封装类型

相比对象的类型，客户更关心对象的行为

JavaScript 本身也是一门类型模糊的语言。在封装类型方面，JavaScript 没有能力，也没有必要做得更多。对于 JavaScript 的设计模式实现来说，不区分类型是一种失色，也可以说是一种解脱。

#### 封装变化

从设计模式的角度出发，封装在更重要的层面体现为封装变化。

《设计模式》一书曾提到如下文字：

>“考虑你的设计中哪些地方可能变化，这种方式与关注会导致重新设计的原因相反。它不是考虑什么时候会迫使你的设计改变，而是考虑你怎样才能够在不重新设计的情况下进行改变。这里的关键在于封装发生变化的概念，这是许多设计模式的主题。”

通过封装变化的方式，把系统中稳定不变的部分和容易变化的部分隔离开来，在系统的演变过程中，我们只需要替换那些容易变化的部分，如果这些部分是已经封装好的，替换起来也相对容易。这可以最大程度地保证程序的稳定性和可扩展性。


### 继承

在原型继承方面 JavaScript 遵守这些原型编程的基本规则。

* 所有的数据都是对象。
* 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
* 对象会记住它的原型。
* 如果对象无法响应某个请求，它会把这个请求委托给它自己的原型。

下面我们来分别讨论 JavaScript 是如何在这些规则的基础上来构建它的对象系统的。

#### 所有的数据都是对象

事实上，JavaScript 中的根对象是 Object.prototype 对象。Object.prototype 对象是一个空的
对象。我们在 JavaScript 遇到的每个对象，实际上都是从 Object.prototype 对象克隆而来的，
Object.prototype 对象就是它们的原型。比如下面的 obj1 对象和 obj2 对象：

```js
var obj1 = new Object(); 
var obj2 = {}; 
//可以利用 ECMAScript 5 提供的 Object.getPrototypeOf 来查看这两个对象的原型：
console.log( Object.getPrototypeOf( obj1 ) === Object.prototype ); // 输出：true 
console.log( Object.getPrototypeOf( obj2 ) === Object.prototype ); // 输出：true
```

#### 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它

但在 JavaScript 语言里，我们并不需要关心克隆的细节，因为这是引擎内部负责实现的

再来看看如何用 new 运算符从构造器中得到一个对象，下面的代码我们再熟悉不过了

```js
function Person( name ){ 
 this.name = name; 
}; 
Person.prototype.getName = function(){ 
 return this.name; 
}; 
var a = new Person( 'sven' ) 
console.log( a.name ); // 输出：sven 
console.log( a.getName() ); // 输出：sven 
console.log( Object.getPrototypeOf( a ) === Person.prototype ); // 输出：true
```
JavaScript 中没有类的概念在这里 Person 并不是类，而是函数构造器

当使用 new 运算符来调用函数时，此时的函数就是一个构造器

用new 运算符来创建对象的过程，实际上也只是先克隆 Object.prototype 对象

在 Chrome 和 Firefox 等向外暴露了对象__proto__属性的浏览器下，我们可以通过下面这段代
码来理解 new 运算的过程：

```js
function Person(name) {
  this.name = name;
};
Person.prototype.getName = function () {
  return this.name;
};
var objectFactory = function () {
  var obj = new Object(), // 从 Object.prototype 上克隆一个空的对象
    Constructor = [].shift.call(arguments); // 取得外部传入的构造器，此例是 Person
  obj.__proto__ = Constructor.prototype; // 指向正确的原型
  var ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器给 obj 设置属性
  return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
};
var a = objectFactory(Person, 'sven');
console.log(a.name); // 输出：sven 
console.log(a.getName()); // 输出：sven 
console.log(Object.getPrototypeOf(a) === Person.prototype); // 输出：true 
// 我们看到，分别调用下面两句代码产生了一样的结果：
var a = objectFactory(A, 'sven');
var a = new A('sven');
```

####  对象会记住它的原型

其实并不能说对象有
原型，而只能说对象的构造器有原型。对于“对象把请求委托给它自己的原型”这句话，更好
的说法是对象把请求委托给它的构造器的原型。那么对象如何把请求顺利地转交给它的构造器
的原型呢？

JavaScript 给对象提供了一个名为__proto__的隐藏属性，某个对象的__proto__属性默认会指
向它的构造器的原型对象，即{Constructor}.prototype。在一些浏览器中，__proto__被公开出来，
我们可以在 Chrome 或者 Firefox 上用这段代码来验证：

```js
var a = new Object(); 
console.log ( a.__proto__=== Object.prototype ); // 输出：true
```

#### 如果对象无法响应某个请求，它会把这个请求委托给它的构造器的原型

在 JavaScript 中，每个对象都是从 Object.prototype 对象克隆而来的，如果是这样的话，
我们只能得到单一的继承关系，即每个对象都继承自 Object.prototype 对象，这样的对象系统显
然是非常受限的。

对象构造器的原型并不仅限于 Object.prototype 上，而是可以动态指向其他对象。这样一来，当对象 a 需
要借用对象 b 的能力时，可以有选择性地把对象 a 的构造器的原型指向对象 b，从而达到继承的
效果。下面的代码是我们最常用的原型继承方式：

```js
var obj = { name: 'sven' }; 
var A = function(){}; 
A.prototype = obj; 
var a = new A(); 
console.log( a.name ); // 输出：sven
```
我们来看看执行这段代码的时候，引擎做了哪些事情。
* 首先，尝试遍历对象 a 中的所有属性，但没有找到 name 这个属性。
* 查找 name 属性的这个请求被委托给对象 a 的构造器的原型，它被 a.__proto__ 记录着并且
指向 A.prototype，而 A.prototype 被设置为对象 obj。 
* 在对象 obj 中找到了 name 属性，并返回它的值

最后还要留意一点，原型链并不是无限长的。现在我们尝试访问对象 a 的 address 属性。而
对象 b 和它构造器的原型上都没有 address 属性，那么这个请求会被最终传递到哪里呢？

实际上，当请求达到 A.prototype，并且在 A.prototype 中也没有找到 address 属性的时候，
请求会被传递给 A.prototype 的构造器原型 Object.prototype，显然 Object.prototype 中也没有
address 属性，但 Object.prototype 的原型是 null，说明这时候原型链的后面已经没有别的节点了。
所以该次请求就到此打住，a.address 返回 undefined。

### 原型模式 
从设计模式的角度讲，原型模式是用于创建对象的一种模式，如果我们想要创建一个对象，
一种方法是先指定它的类型，然后通过类来创建这个对象。原型模式选择了另外一种方式，我们
不再关心对象的具体类型，而是找到一个对象，然后通过克隆来创建一个一模一样的对象。

原型模式的实现关键，是语言本身是否提供了clone方法。ECMAScript 5提供了Object.create
方法，可以用来克隆对象。代码如下：

```js
var Plane = function(){ 
  this.blood = 100; 
  this.attackLevel = 1; 
  this.defenseLevel = 1; 
}; 
var plane = new Plane(); 
plane.blood = 500; 
plane.attackLevel = 10; 
plane.defenseLevel = 7; 
var clonePlane = Object.create( plane ); 
// 输出：Object {blood: 500, attackLevel: 10, defenseLevel: 7} 
console.log( clonePlane ); 
//在不支持 Object.create 方法的浏览器中，则可以使用以下代码：
Object.create = Object.create || function( obj ){ 
 var F = function(){}; 
 F.prototype = obj; 
 return new F(); 
}
```

## 上下文的执行问题

在 JavaScript 编程中，this 关键字总是让初学者感到迷惑，Function.prototype.call 和
Function.prototype.apply 这两个方法也有着广泛的运用。我们有必要在学习设计模式之前先理解

### this

this 总是指向一个对象，而具体指向哪个对象**是在运行时基于函数的执行环境动态绑定的**，而非函数被声明时的环境。

this 的指向大致可以分为以下 4 种

* 作为对象的方法调用。
* 作为普通函数调用。
* 构造器调用。
* Function.prototype.call 或 Function.prototype.apply 调用。

#### 作为对象的方法调用

```js
var obj = {
  a: 1, 
  getA: function(){ 
    alert ( this === obj ); // 输出：true 
    alert ( this.a ); // 输出: 1 
  } 
}; 
obj.getA();
```
#### 作为普通函数调用

```js
window.name = 'globalName'; 
var myObject = { 
  name: 'sven', 
  getName: function(){ 
    return this.name; 
  } 
}; 
var getName = myObject.getName; 
console.log( getName() ); // globalName
```
#### 构造器调用

```js
var MyClass = function(){ 
  this.name = 'sven'; 
  return { // 显式地返回一个对象
    name: 'anne' 
  } 
}; 
var obj = new MyClass(); 
alert ( obj.name ); // 输出：anne
```
####  Function.prototype.call 或 Function.prototype.apply 调用
call 和 apply 方法能很好地体现 JavaScript 的函数式语言特性，在 JavaScript 中，几乎每一次编写函数式语言风格的代码，都离不开 call 和 apply

```js
var obj1 = { 
  name: 'sven', 
  getName: function(){ 
    return this.name; 
  } 
}; 
var obj2 = { 
  name: 'anne' 
}; 
console.log( obj1.getName() ); // 输出: sven 
console.log( obj1.getName.call( obj2 ) ); // 输出：anne
```

### call、apply、bind

::: tip
call、apply、bind的模拟实现请看《面试指南》
:::

ECAMScript 3给Function的原型定义了两个方法，它们是Function.prototype.call和Function. prototype.apply。在实际开发中，特别是在一些函数式风格的代码编写中，call 和 apply 方法尤为有用。在 JavaScript 版本的设计模式中，这两个方法的应用也非常广泛，能熟练运用这两个方法，是我们真正成为一名 JavaScript 程序员的重要一步。

call 是包装在 apply 上面的一颗语法糖，如果我们明确地知道函数接受多少个参数，而且想
一目了然地表达形参和实参的对应关系，那么也可以用 call 来传送参数。

#### call和apply的区别

apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向，第二个参数为一个带下
标的集合，这个集合可以为数组，也可以为类数组

```js
var func = function( a, b, c ){ 
  alert ( [ a, b, c ] ); // 输出 [ 1, 2, 3 ] 
}; 
func.apply( null, [ 1, 2, 3 ] );
```
call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，
从第二个参数开始往后，每个参数被依次传入函数：

```js
var func = function( a, b, c ){ 
  alert ( [ a, b, c ] ); // 输出 [ 1, 2, 3 ] 
}; 
func.call( null, 1, 2, 3 );
```
如果我们传入的第一个参数为 null，函数体内的 this 会指向默认的宿主对象，在浏览器中则是 window：

```js
var func = function( a, b, c ){ 
 alert ( this === window ); // 输出 true
 "use strict"; 
 //严格模式下，函数体内的 this 还是为 null
 alert ( this === null ); // 输出 true
 }; 
func.apply( null, [ 1, 2, 3 ] );
```
#### call和apply的用途
 
* 改变 this 指向

```js
var obj1 = {
  name: 'sven'
};
var obj2 = {
  name: 'anne'
};
window.name = 'window';
var getName = function () {
  alert(this.name);
};
getName(); // 输出: window 
getName.call(obj1); // 输出: sven 
getName.call(obj2); // 输出: anne
```
* 借用其他对象的方法

借用方法的第一种场景是“借用构造函数”，通过这种技术，可以实现一些类似继承的效果：

```js
var A = function (name) {
  this.name = name;
};
var B = function () {
  A.apply(this, arguments);
};
B.prototype.getName = function () {
  return this.name;
};
var b = new B('sven');
console.log(b.getName()); // 输出： 'sven'
```
函数的参数列表 arguments 是一个类数组对象，虽然它也有“下标”，但它并非真正的数组，
所以也不能像数组一样，进行排序操作或者往集合里添加一个新的元素。这种情况下，我们常常
会借用 Array.prototype 对象上的方法。比如想往 arguments 中添加一个新的元素，通常会借用
Array.prototype.push：

```js
(function(){ 
  Array.prototype.push.call( arguments, 3 ); 
  console.log ( arguments ); // 输出[1,2,3] 
})( 1, 2 );
```
在操作 arguments 的时候，我们经常非常频繁地找 Array.prototype 对象借用方法。
想把 arguments 转成真正的数组的时候，可以借用 Array.prototype.slice 方法；想截去
arguments 列表中的头一个元素时，又可以借用 Array.prototype.shift 方法。那么这种机制的内
部实现原理是什么呢？我们不妨翻开 V8 的引擎源码，以 Array.prototype.push 为例，看看 V8 引
擎中的具体实现：

```js
function ArrayPush() {
  var n = TO_UINT32(this.length); // 被 push 的对象的 length 
  var m = % _ArgumentsLength(); // push 的参数个数
  for (var i = 0; i < m; i++) {
    this[i + n] = % _Arguments(i); // 复制元素 (1) 
  }
  this.length = n + m; // 修正 length 属性的值 (2) 
  return this.length;
};
```
通过这段代码可以看到，Array.prototype.push 实际上是一个属性复制的过程，把参数按照
下标依次添加到被 push 的对象上面，顺便修改了这个对象的 length 属性。至于被修改的对象是
谁，到底是数组还是类数组对象

为可以借用 Array.prototype.push 方法的对
象还要满足以下两个条件，从 ArrayPush 函数的 *(1)* 处和 *(2)* 处也可以猜到，这个对象至少还要满足：

* 对象本身要可以存取属性；
* 对象的 length 属性可读写

#### Function.prototype.bind 的实现
大部分高级浏览器都实现了内置的 Function.prototype.bind，用来指定函数内部的 this指向，
即使没有原生的 Function.prototype.bind 实现，我们来模拟一个也不是难事，代码如下：

在 Function.prototype.bind 的内部实现中，我们先把 func 函数的引用保存起来，然后返回一
个新的函数。当我们在将来执行 func 函数时，实际上先执行的是这个刚刚返回的新函数。在新
函数内部，self.apply( context, arguments )这句代码才是执行原来的 func 函数，并且指定 context
对象为 func 函数体内的 this。

```js
Function.prototype.bind = function () {
  var self = this, // 保存原函数
    context = [].shift.call(arguments), // 需要绑定的 this 上下文
    args = [].slice.call(arguments); // 剩余的参数转成数组
  return function () { // 返回一个新的函数
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    // 执行新的函数的时候，会把之前传入的 context 当作新函数体内的 this 
    // 并且组合两次分别传入的参数，作为新函数的参数
  }
};
var obj = {
  name: 'sven'
};
var func = function (a, b, c, d) {
  alert(this.name); // 输出：sven 
  alert([a, b, c, d]) // 输出：[ 1, 2, 3, 4 ] 
}.bind(obj, 1, 2);
func(3, 4);
```

## 闭包

闭包的定义很简单：**函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。**

```js
function A() {
  let a = 1
  function B() {
      console.log(a)
  }
  return B
}
```

闭包的形成与**变量的作用域**以及**变量的生存周期**密切相关

### 变量的作用域

变量的作用域，就是指变量的有效范围。我们最常谈到的是在函数中声明的变量作用域。直接撸代码高手秒懂

```js
var a = 1;
var func1 = function () {
  var b = 2;
  var func2 = function () {
    var c = 3;
    alert(b); // 输出：2 
    alert(a); // 输出：1 
  }
  func2();
  alert(c); // 输出：Uncaught ReferenceError: c is not defined 
};
func1();
```
### 变量的生存周期

对于全局变量来说，全局变量的生存周期当然是永久的，除非我们主动销毁这个全局变量。

对于在函数内用 var 关键字声明的局部变量来说，当退出函数时，这些局部变量即失去了它们的价值，它们都会随着函数调用的结束而被销毁

那么闭包结构的出现是干什么的

我们希望当退出函数后，局部变量并没有消失，既局部变量所在的环境还能被外界访问，这个局部变量就有了不被销毁的理由。在这里产生了一个闭包结构，局部变量的生命看起来被延续了。

利用闭包实现的经典案例

```js
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```
### 闭包的更多作用

#### 封装变量：闭包可以帮助把一些不需要暴露在全局的变量封装成“私有变量” 略
#### 延续局部变量的寿命 略
#### 闭包和面向对象设计 

过程与数据的结合是形容面向对象中的“对象”时经常使用的表达。对象以方法的形式包含
了过程，而闭包则是在过程中以环境的形式包含了数据。通常用面向对象思想能实现的功能，用
闭包也能实现。反之亦然。

```js
var extent = {
  value: 0,
  call: function () {
    this.value++;
    console.log(this.value);
  }
};
extent.call(); // 输出：1 
extent.call(); // 输出：2 
extent.call(); // 输出：3 
//或者：
var Extent = function () {
  this.value = 0;
};
Extent.prototype.call = function () {
  this.value++;
  console.log(this.value);
};
var extent = new Extent();
extent.call();
extent.call();
extent.call();
```
#### 用闭包实现命令模式

但在 JavaScript 中，函数作为一等对象，本身就可以四处传递，用函数对象而不是普通对象
来封装请求显得更加简单和自然。如果需要往函数对象中预先植入命令的接收者，那么闭包可以
完成这个工作。在面向对象版本的命令模式中，预先植入的命令接收者被当成对象的属性保存起
来；而在闭包版本的命令模式中，命令接收者会被封闭在闭包形成的环境中，代码如下：

```js
var Tv = {
  open: function () {
    console.log('打开电视机');
  },
  close: function () {
    console.log('关上电视机');
  }
};
var createCommand = function (receiver) {
  var execute = function () {
    return receiver.open(); // 执行命令，打开电视机
  }
  var undo = function () {
    return receiver.close(); // 执行命令，关闭电视机
  }
  return {
    execute: execute,
    undo: undo
  }
};
var setCommand = function (command) {
  document.getElementById('execute').onclick = function () {
    command.execute(); // 输出：打开电视机
  }
  document.getElementById('undo').onclick = function () {
    command.undo(); // 输出：关闭电视机
  }
};
setCommand(createCommand(Tv));
```
###  闭包与内存管理（重要）
闭包是一个非常强大的特性，但人们对其也有诸多误解。一种耸人听闻的说法是闭包会造成
内存泄露，所以要尽量减少闭包的使用。 
局部变量本来应该在函数退出的时候被解除引用，但如果局部变量被封闭在闭包形成的环境
中，那么这个局部变量就能一直生存下去。从这个意义上看，闭包的确会使一些数据无法被及时
销毁。使用闭包的一部分原因是我们选择主动把一些变量封闭在闭包中，因为可能在以后还需要
使用这些变量，把这些变量放在闭包中和放在全局作用域，对内存方面的影响是一致的，这里并
不能说成是内存泄露。如果在将来需要回收这些变量，我们可以手动把这些变量设为 null。
跟闭包和内存泄露有关系的地方是，使用闭包的同时比较容易形成循环引用，如果闭包的作
用域链中保存着一些 DOM 节点，这时候就有可能造成内存泄露。但这本身并非闭包的问题，也
并非 JavaScript 的问题。在 IE 浏览器中，由于 BOM 和 DOM 中的对象是使用 C++以 COM 对象
的方式实现的，而 COM 对象的垃圾收集机制采用的是引用计数策略。在基于引用计数策略的垃
圾回收机制中，如果两个对象之间形成了循环引用，那么这两个对象都无法被回收，但循环引用
造成的内存泄露在本质上也不是闭包造成的。
同样，如果要解决循环引用带来的内存泄露问题，我们只需要把循环引用中的变量设为 null
即可。将变量设置为 null 意味着切断变量与它此前引用的值之间的连接。当垃圾收集器下次运
行时，就会删除这些值并回收它们占用的内存

## 高价函数

高阶函数是指至少满足下列条件之一的函数。

* 函数可以作为参数被传递
* 函数可以作为返回值输出

### 函数作为参数传递
把函数当作参数传递，这代表我们可以抽离出一部分容易变化的业务逻辑，把这部分业务逻
辑放在函数参数中，这样一来可以分离业务代码中变化与不变的部分。其中一个重要应用场景就
是常见的回调函数。

例: ajax的callback大家不陌生

例：Array.prototype.sort

Array.prototype.sort 接受一个函数当作参数，这个函数里面封装了数组元素的排序规则。从
Array.prototype.sort 的使用可以看到，我们的目的是对数组进行排序，这是不变的部分；而使
用什么规则去排序，则是可变的部分。把可变的部分封装在函数参数里

### 函数作为返回值输出

#### 判断数据的类型
判断一个数据是否是数组，在以往的实现中，可以基于鸭子类型的概
念来判断，比如判断这个数据有没有 length 属性，有没有 sort 方法或者 slice 方法等。但更好
的方式是用 Object.prototype.toString 来计算。Object.prototype.toString.call( obj )返回一个
字符串，比如 Object.prototype.toString.call( [1,2,3] ) 总是返回 "[object Array]" ， 而
Object.prototype.toString.call( “str”)总是返回"[object String]"。所以我们可以编写一系列的
isType 函数。代码如下：

```js
var isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  }
  var isString = isType('String');
  var isArray = isType('Array');
  var isNumber = isType('Number');
  console.log(isArray([1, 2, 3])); // 输出：true
};

```
我们还可以用循环语句，来批量注册这些 isType 函数：
```js
var Type = {};
for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
  (function (type) {
    Type['is' + type] = function (obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
  })(type)
};
Type.isArray([]); // 输出：true 
Type.isString("str"); // 输出：true
```
### 高阶函数实现AOP

AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来,这样做的好处首先是可以保持业务逻辑模块的纯净和高内聚性，其次是可以很方便地复用非核心业务例如日志统计等功能模块。

在 Java 语言中，可以通过反射和动态代理机制来实现 AOP 技术。而在 JavaScript 这种动态
语言中，AOP 的实现更加简单，这是 JavaScript 与生俱来的能力。
通常，在 JavaScript 中实现 AOP，都是指把一个函数“动态织入”到另外一个函数之中，具
体的实现技术有很多，本节我们通过扩展 Function.prototype 来做到这一点。代码如下：

```js
Function.prototype.before = function (beforefn) {
  var __self = this; // 保存原函数的引用
  return function () { // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this, arguments); // 执行新函数，修正 this 
    return __self.apply(this, arguments); // 执行原函数
  }
};
Function.prototype.after = function (afterfn) {
  var __self = this;
  return function () {
    var ret = __self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  }
};
var func = function () {
  console.log(2);
};
func = func.before(function () {
  console.log(1);
}).after(function () {
  console.log(3);
});
func();
```
我们把负责打印数字 1 和打印数字 3 的两个函数通过 AOP 的方式动态植入 func 函数。通过
执行上面的代码，我们看到控制台顺利地返回了执行结果 1、2、3。

### 函数柯里化（function currying）

currying 的概念最早由俄国数学家 Moses Schönfinkel 发明，而后由著名的数理逻辑学家 Haskell Curry 将其丰富和发展，currying 由此得名

**currying 又称部分求值**

1、一个 currying 的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。

2、待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。

应用场景例如：我们记录每个月花多少钱，我可能并不关心每天花了多少，但是我希望看到我的月度支出

```js
var currying = function (fn) {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
      return arguments.callee;
    }
  }
};
var cost = (function () {
  var money = 0;
  return function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i];
    }
    return money;
  }
})();
var cost = currying(cost); // 转化成 currying 函数
cost(100); // 未真正求值
cost(200); // 未真正求值 
cost(300); // 未真正求值
alert(cost()); // 求值并输出：600
```
### 函数节流

**(1) 函数被频繁调用的场景**
* window.onresize 事件。我们给 window 对象绑定了 resize 事件，当浏览器窗口大小被拖动
而改变的时候，这个事件触发的频率非常之高。如果我们在 window.onresize 事件函数里
有一些跟 DOM 节点相关的操作，而跟 DOM 节点相关的操作往往是非常消耗性能的，这
时候浏览器可能就会吃不消而造成卡顿现象。
* mousemove 事件。同样，如果我们给一个 div 节点绑定了拖曳事件（主要是 mousemove），当
div 节点被拖动的时候，也会频繁地触发该拖曳事件函数。
* 上传进度。微云的上传功能使用了公司提供的一个浏览器插件。该浏览器插件在真正开
始上传文件之前，会对文件进行扫描并随时通知 JavaScript 函数，以便在页面中显示当前
的扫描进度。但该插件通知的频率非常之高，大约一秒钟 10 次，很显然我们在页面中不
需要如此频繁地去提示用户。


**(2) 函数节流的原理**
我们整理上面提到的三个场景，发现它们面临的共同问题是函数被触发的频率太高。
比如我们在 window.onresize 事件中要打印当前的浏览器窗口大小，在我们通过拖曳来改变
窗口大小的时候，打印窗口大小的工作 1 秒钟进行了 10 次。而我们实际上只需要 2 次或者 3 次。
这就需要我们按时间段来忽略掉一些事件请求，比如确保在 500ms 内只打印一次。很显然，我们
可以借助 setTimeout 来完成这件事情。

**(3) 函数节流的代码实现**
关于函数节流的代码实现有许多种，下面的 throttle 函数的原理是，将即将被执行的函数用
setTimeout 延迟一段时间执行。如果该次延迟执行还没有完成，则忽略接下来调用该函数的请求。
throttle 函数接受 2 个参数

```js
var throttle = function (fn, interval) {
  var __self = fn, // 保存需要被延迟执行的函数引用
    timer, // 定时器
    firstTime = true; // 是否是第一次调用
  return function () {
    var args = arguments,
      __me = this;
    if (firstTime) { // 如果是第一次调用，不需延迟执行
      __self.apply(__me, args);
      return firstTime = false;
    }
    if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成
      return false;
    }
    timer = setTimeout(function () { // 延迟一段时间执行
      clearTimeout(timer);
      timer = null;
      __self.apply(__me, args);
    }, interval || 500);
  };
};
window.onresize = throttle(function () {
  console.log(1);
}, 500);
```
###  分时函数

解决某些函数确实是用户主动调用的，但因为一些客观的原因，这些函数会严重地影响页面性能

例如：QQ好有列表，列表中通常会有成百上千个好友，在短时间内往页面中大量添加 DOM 节点显然也会让浏览器吃不消，我们看到的结果往往就是浏览器的卡顿甚至假死

解决方案之一是下面的 timeChunk 函数吗，工作分批进行

```js
var timeChunk = function (ary, fn, count) {
  var obj,
    t;
  var len = ary.length;
  var start = function () {
    for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
      var obj = ary.shift();
      fn(obj);
    }
  };
  return function () {
    t = setInterval(function () {
      if (ary.length === 0) { // 如果全部节点都已经被创建好
        return clearInterval(t);
      }
      start();
    }, 200); // 分批执行的时间间隔，也可以用参数的形式传入
  };
};
//最后我们进行一些小测试，假设我们有 1000 个好友的数据，我们利用 timeChunk 函数，每一批只往页面中创建 8 个节点：
var ary = [];
for (var i = 1; i <= 1000; i++) {
  ary.push(i);
};
var renderFriendList = timeChunk(ary, function (n) {
  var div = document.createElement('div');
  div.innerHTML = n;
  document.body.appendChild(div);
}, 8);
renderFriendList();
```
### 惰性加载函数
在 Web 开发中，因为浏览器之间的实现差异，一些嗅探工作总是不可避免。比如我们需要一个在各个浏览器中能够通用的事件绑定函数 addEvent，常见的写法如下：

```js
var addEvent = function( elem, type, handler ){ 
  if ( window.addEventListener ){ 
      return elem.addEventListener( type, handler, false );
    } 
  if ( window.attachEvent ){ 
    return elem.attachEvent( 'on' + type, handler ); 
  } 
};
```
这个函数的缺点是，当它每次被调用的时候都会执行里面的 if 条件分支，虽然执行这些 if分支的开销不算大

们将要讨论的惰性载入函数方案。此时 addEvent 依然被声明为一个普通函数，在函数里依然有一些分支判断。但是在第一次进入条件分支之后，在函数内部会**重写这个函数**，重写之后的函数就是我们期望的 addEvent 函数，在下一次进入 addEvent 函数的时候，addEvent函数里不再存在条件分支语句：

```html
<html>
  <body>
    <div id="div1">点我绑定事件</div>
  </body>
</html>
```
```js
var addEvent = function (elem, type, handler) {
  if (window.addEventListener) {
    addEvent = function (elem, type, handler) {
      elem.addEventListener(type, handler, false);
    }
  } else if (window.attachEvent) {
    addEvent = function (elem, type, handler) {
      elem.attachEvent('on' + type, handler);
    }
  }
  addEvent(elem, type, handler);
};
var div = document.getElementById('div1');
addEvent(div, 'click', function () {
  alert(1);
});
addEvent(div, 'click', function () {
  alert(2);
});
```
