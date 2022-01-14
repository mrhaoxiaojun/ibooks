## css基础
### 重绘与回流

重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。

- 重绘是当节点需要更改外观而不会影响布局的，比如改变 `color` 就叫称为重绘
- 回流是布局或者几何属性需要改变就称为回流。

回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

所以以下几个动作可能会导致性能问题：

- 改变 window 大小
- 改变字体
- 添加或删除样式
- 文字改变
- 定位或者浮动
- 盒模型

很多人不知道的是，重绘和回流其实和 Event loop 有关。

1. 当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。
2. 然后判断是否有 `resize` 或者 `scroll` ，有的话会去触发事件，所以 `resize` 和 `scroll` 事件也是至少 16ms 才会触发一次，并且自带节流功能。
3. 判断是否触发了 media query
4. 更新动画并且发送事件
5. 判断是否有全屏操作事件
6. 执行 `requestAnimationFrame` 回调
7. 执行 `IntersectionObserver` 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
8. 更新界面
9. 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 `requestIdleCallback` 回调。

### 盒模型 box-sizing
盒模型：IE下标准模式为：content+padding+border+margin。怪异模式下为：content+margin(padding,border包含在content宽高中)

box-sizing: content-box|border-box|inherit;

**content-box**	
这是由 CSS2.1 规定的宽度高度行为。
宽度和高度分别应用到元素的内容框。
在宽度和高度之外绘制元素的内边距和边框。

**border-box**	
为元素设定的宽度和高度决定了元素的边框盒。
就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

**inherit**	
规定应从父元素继承 box-sizing 属性的值。

> css盒模型基本概念？

1. margin、border、padding、content。在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border）元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域。4个部分一起构成了css中元素的盒模型。
2. 分类：标准模型、IE模型

> 标准模型和IE模型的区别：计算高度和宽度的不同，怎么不同，高度宽度是怎么计算的？

1. 标准模型

```
div宽度 = 内容宽度+border宽度+padding宽度 //改变border宽度，div宽度会变化
box-sizing:content-box;  /*设置标准盒子*/
```

1. 怪异模型|IE模型

```
div宽度（定死） = 内容宽度+border宽度+padding宽度 //改变border宽度，div宽度不会变化
box-sizing:border-box; /*IE模型*/
```

### BFC（边距重叠解决方案）

> BFC的基本概念?

```
BFC（Block Formatting Context ）:块级格式化上下文
IFC(CSS2.1)：Inline Formating Contexts，内联元素格式化上下文  
GFC(CSS3):GridLayout Formating Contexts，网格布局格式化上下文  
FFC(CSS3):Flex Formatting Contexts，自适应格式化上下文
```

> BFC原理/ BFC渲染规则？

```
1、BFC元素垂直方向的边距会发生重叠
2、BFC的区域不会与浮动元素的box重叠（可用于清除浮动）
3、BFC为一个独立的元素，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。
4、计算BFC高度的时候，浮动元素也会参与计算。
```

> 如何创建BFC？

```
1、float值不为none，即为left, right
2、position的值不为static(默认值),relative，即为absolute,fixed
3、display为inline-block, flex, inline-flex, table-cell,table-caption
4、overflow不为visible，overflow为auto,hidden，scroll ;
5、使用fieldset元素（可以给表单元素设置环绕边框的html元素）
```

> BFC的使用场景？

```
1、BFC垂直方向边距重叠
2、BFC不与float重叠
3、清除浮动：子元素是浮动元素的时候，把外层元素设置成BFC的时候，子元素的浮动元素也会参与到父级元素的高度计算上来。
```

### css浮动

> 浮动元素引起的问题？

```
1、父元素的高度无法被撑开，影响与父元素同级的元素
2、与浮动元素同级的非浮动元素（内联元素）会跟随其后
3、若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构
```

> css清除浮动的方法？

```
1、使用空标签
给所有浮动标签后面添加一个空标签，定义CSS clear:both.
但是这种方法会增加一个无意义的标签。
2、设置父级元素为BFC元素
3、使用after伪元素清除浮动
这个方法只适用于非IE浏览器。该方法必须为需要清除浮动元素的伪对象中设置height:0,不然该元素会比实际元素高出若干像素。
#parent:after{
    content:".";
    height:0;
    visibility:hidden;
    display:block;
    clear:both;
}
```

### css经典布局

> 三栏布局：左右各300px,中间自适应？

1. 浮动float

```html
<style>
   html * {
     padding:0;
     margin:0;
   }
   .layout{
     margin-top:20px;
   }
   .layout article div{
     min-height:100px;
   }
 </style>
</head>
<body>
<!--浮动解决方案-->
<section class="layout float">
 <style media="screen">
   .layout.float .left{
     float:left;
     width:300px;
     background:red;
   }
   .layout.float .right{
     float:right;
     width:300px;
     background:blue;
   }
   .layout.float .center{ /*块元素自动撑开*/
     background:yellow;
   }
 </style>
 <article class="left-right-center">
   <div class="left"></div>
   <div class="right"></div>
   <div class="center">
     <h1>浮动解决方案</h1>
     1.这是三蓝布局中间部分
     2.这是三蓝布局中间部分
   </div>
 </article>
</section>
```

1. 绝对定位position:absolute

```html
<!--绝对定位解决方案-->
<section class="layout absolute">
  <style>
    .layout.absolute .left-center-right>div{
      position:absolute;
    }
    .layout.absolute .left{
      left:0;
      width:300px;
      background:red;
    }
    .layout.absolute .center{
      left:300px;
      right:300px;
      background:yellow;
    }
    .layout.absolute .right{
      right:0;
      width:300px;
      background:blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h2>绝对定位解决方案</h2>
      1.这是三蓝布局中间部分
      2.这是三蓝布局中间部分
    </div>
    <div class="right"></div>
  </article>
</section>
```

1. flex布局

```html
<!--flexbox解决方案-->
<section class="layout flexbox">
 <style>
   .layout.flexbox{
     margin-top:140px;
   }
   .layout.flexbox .left-center-right{
     display:flex;
   }
   .layout.flexbox .left{
     width:300px;
     background:red;
   }
   .layout.flexbox .center{
     flex:1; /*中间自适应原理*/
     background:yellow;
   }
   .layout.flexbox .right{
     width:300px;
     background:blue;
   }
 </style>
 <article class="left-center-right">
   <div class="left"></div>
   <div class="center">
     <h2>flexbox解决方案</h2>
     1.这是三蓝布局中间部分
     2.这是三蓝布局中间部分
   </div>
   <div class="right"></div>
 </article>
</section>
```

1. 表格布局table-cell

```html
<!--表格布局解决方案-->
<section class="layout table">
  <style>
    .layout.table .left-center-right{
      width:100%;
      display:table;
      height:100px;
    }
    .layout.table .left-center-right>div{
      display:table-cell;
    }
    .layout.table .left{
      width:300px;
      background:red;
    }
    .layout.table .center{
      background:yellow;
    }
    .layout.table .right{
      width:300px;
      background:blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h2>表格布局解决方案</h2>
      1.这是三蓝布局中间部分
      2.这是三蓝布局中间部分
    </div>
    <div class="right"></div>
  </article>
  </article>
</section>
```

1. 网格布局grid

```html
<!--网格布局解决方案-->
<section class="layout grid">
  <style media="screen">
    .layout.grid .left-center-right{
      display:grid;
      width:100%;
      grid-template-rows:100px;
      grid-template-columns:300px auto 300px;
    }
    .layout.grid .left{
      background:red;
    }
    .layout.grid .center{
      background:yellow;
    }
    .layout.grid .right{
      background:blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h2>网格布局解决方案</h2>
      1.这是三蓝布局中间部分
      2.这是三蓝布局中间部分
    </div>
    <div class="right"></div>
  </article>
</section>
```

1. 延伸
   这5种方案的优缺点
   ①浮动：清除浮动，兼容性比较好。
   ②绝对定位：快捷，布局已经脱离了文档流，导致下面的元素也要脱离文档流，使用性较差。
   ③flex布局，解决了浮动和绝对定位的缺点，移动端基本已经支持了兼容性。
   ④表格布局：表格布局的兼容性非常好
   ⑤网格布局：新出的
   如果“高度已知”去掉，中间内容高度撑开了，需要左右的高度也自动撑开，哪些方案仍适合
   ①flex、table能用
   ②flex左边有遮挡，所以显示在右边，没有遮挡的时候，就会显示在最左边。创建bfc
2. 三栏布局
   ①左右宽度固定，中间自适应
   ②上下高度固定，中间自适应。
3. 两栏布局
   ①左宽度固定，右自适应
   ②右宽度固定，左自适应
   ③上高度固定，下自适应
   ④下高度固定，上自适应

> 圣杯布局？

1. 圣杯布局的核心是左、中、右三栏都通过float进行浮动，然后通过负值margin进行调整。
2. .left， .right的margin-left是为了让.main .left .right在同一行。
3. .container的padding-left,padding-right，.left的position和left,right的position和left是为了防止文字被遮挡。

```html
<style>
    .main{
      float:left;
      width:100%;
    }
    .content{
      height:200px;
      margin-left:100px;
      margin-right:200px;
      background-color:green;
    }
    .main::after{
      display:block;
      content: '';
      font-size: 0;
      height:0;
      clear: both;
      zoom:1;
    }
    .left{
      float:left;
      width:100px;
      height:200px;
      margin-left:-100%; /*左栏移到第一行的首部*/
      background-color:red;
    }
    .right{
      float:left;
      width:200px;
      height:200px;
      margin-left:-200px; /*右栏移到和左中一行*/
      background-color:yellow;
    }
  </style>
</head>
<body>
  <div class="main">
    <div class="content"></div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
```

### css兼容

> 经常遇到的css兼容性的问题在哪些？如何解决的？

```
本都是ie8及以前的版本会遇到css兼容问题。一般是图片透明、圆角、字体大小，新出的css3样式。
aSuncat：如此老旧浏览器终究会被市场放弃，不花时间在这上面。
```

### css hack

> 什么是CSS hack？

```
针对不同的浏览器或浏览器不同版本写相应的CSS的过程，就是CSS hack
```

> CSS hack分类？
> 3种：条件hack、属性级hack、选择符hack。

```css
// 1、条件hack
<!--[if IE]>
<style>
	.test{color:red;}
</style>
<![endif]-->
```

```css
// 2、属性hack（类内部hack）
.test{
	color:#090\9; /*For IE8*/
	*color:#f00; /*For IE7 and earlier*/
	_color:#ff0; /*For IE6 and earlier*/
}
```

```css
// 3、选择符hack（选择器属性前缀法）
* htm .test{color:#0f90;} /*For IE6 and earlier*/
* + html .test{color:#ff0;} /*For IE7*/
```

> CSS hack书写顺序？

```
CSS hack书写顺序，一般是将适用范围广、被识别能力强的CSS定义在前面。
```

### html、css基础

> link和@import的区别？

```cs
1、从属关系区别：
link属于html标签，而@import是css提供的。
2、加载顺序区别：
页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载。
3、兼容性区别：
import只在IE5以上才能识别，而link是html标签，无兼容问题。
4、dom可操作性区别：
可以通过JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式
5、权重区别：
如果已经存在相同样式，@import引入的这个样式将被该 CSS 文件本身的样式层叠掉，表现出link方式的样式权重高于@import的权重这样的直观效果。
（aSuncat：简而言之，link和@import，谁写在后面，谁的样式就被应用，后面的样式覆盖前面的样式。）
```

> 如何理解标签语义，它有哪些好处？

```cs
1、语义元素清楚地向浏览器和开发者描述其意义。
2、好处：
（1）html结构清晰，代码可读性较好。
（2）有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
（3）无障碍阅读，样式丢失的时候能让页面呈现清晰的结构。
（4）方便其他设备解析，如盲人阅读器根据语义渲染网页
（5）便于团队维护和开发，语义化更具可读性，代码更好维护，与CSS3关系更和谐。
```

> css的选择符有哪些，优先级如何计算，哪些属性可以继承？

1. css选择符类型

```css
1、通用选择器：*
2、类别选择器：.class
3、id选择器：#id
4、标签选择器：p
5、后代选择器：div p
6、子选择器：div > p
7、群组选择器：div , p
8、相邻同胞选择器：div +p
9、伪类选择器：:link :visited :active :hover :focus :first-child
10、伪元素选择器：:first-letter :first-line:before :after :lang(language)
11、属性选择器：[attribute] [attribute=value] [attribute~=value] [attribute|=value]
```

1. 优先级计算

```css
!important > 内联样式 > id > class > tag
3、属性继承
（1）所有元素可继承：visibility、cursor
（2）块级元素可继承：text-indent、text-align
（3）内联元素可继承：
①字体系列属性：font、font-family、font-size、font-style、font-variant、font-weight、font-stretch、font-size-adjust
②除text-indent、text-align之外的文本系列属性：
letter-spacing、word-spacing、white-space、line-height、color、text-transform、direction

扩展：
一、不可继承的样式属性：
1、display
2、文本属性：vertical-align、text-decoration、text-shadow、unicode-bidi
3、盒子模型属性：border、padding、margin、width、height
4、背景属性：background
5、定位属性：float、clear、position
6、生成内容属性：content
7、轮廓样式属性：outlien-style
8、页面样式属性：size
9、声音样式属性：pause-before
```

> 行内元素和块级元素举几个例子？

```css
行内元素：span,a,var ,em,input,img,img,textarea,var,em,strong,select,lable
块级标签：div,p,h1-h3,ul,ol,dl,li,dd,dt,table,td,tr
```

> 伪类和伪元素？

```css
伪类：:active :focus :hover :link :visited :first-child
伪元素：:before :after :first-letter :first-line
```

> svg和canvas的区别？

```cs
1、canvas时h5提供的新的绘图方法 ；svg已经有了十多年的历史
2、canvas画图基于像素点，是位图，如果进行放大或缩小会失真 ；svg基于图形，用html标签描绘形状，放大缩小不会失真
3、canvas需要在js中绘制 ；svg在html绘制
4、canvas支持颜色比svg多
5、canvas无法对已经绘制的图像进行修改、操作 ；svg可以获取到标签进行操作
```

> flex实现原理？

```cs
1、容器上有主轴和纵轴的概念，默认主轴（main-axis）是横向，从左到右，纵轴是竖向，从上到下。
2、其中所有的孩子的布局都会受到这两个轴的影响。
3、有很多相关的css属性就是通过改变主轴和纵轴的方向来实现不同的布局效果的。
```

> src与href的区别？

```cs
1、href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
2、src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。
```

