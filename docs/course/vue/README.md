---
title: Vue3.x
date:  2021-10-05
sidebar: auto
tags:
 - vue       
categories: 
 - 前端
---

> 本文主要积累在使用Vue3.x过程中积累的一些使用实践心得

## setup 新的 script 类型

### 简介

- 在单文件组件(*xxx.vue*)中引入了一个新的 script 类型：`<script setup>` ，这种写法会自动将所有顶级变量声明暴露给 `<template> `使用。
- 介绍一个基于编译器的语法糖，这种语法糖可以在`<script setup>`中让你的 ref 不用再写 .value 属性了。
- 注意，本提案意在代替 RFC 182 提出的 `<script setup>` 写法。

### 基本用法

`<script setup>` 直接向` <template>` 暴露顶级变量

⚠️译者注: 顶级变量就是没声明在块级作用域里面的变量

```vue
<script setup>
// 引入的 Foo 组件可以直接在 template 里使用了！
import Foo from './Foo.vue'
import { ref } from 'vue'
// 就像在普通的 setup() 中一样编写 Composition API 代码，
// 无需手动返回所有内容
const count = ref(0)
const inc = () => { count.value++ }
</script>
<template>
<Foo :count="count" @click="inc" />
</template>
```

👆上面的这段代码将会编译成下面这样👇：

其实这就是第一版本的样子 Composition API 约束我们所有的东西都写在setup中就可以,并且必须将数据return，外部和模板才可以使用，不在像Vue2.0的Options API一样，props 、data 、computed 、watch methods components 这些都有指定位置分割开来

```vue
<script>
import Foo from './Foo.vue'
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(1)
    const inc = () => { count.value++ }

    return {
      Foo, // 即使 Foo 组件不是被声明的，也会把它算作顶级变量
      count,
      inc
    }
  }
}
</script>

<template>
  <Foo :count="count" @click="inc" />
</template>
```



## Ref语法糖提案

### 前言

其实之前`Vue3`做过好多次语法糖的提案，最经典的莫过于`<script setup>`提案。但一开始这个提案夹杂着`ref`语法糖，所以很多批评的声音接踵而来：什么`Vue`又开始创造新概念啦、不忠于`JavsScript`啦、不如叫`<script lang="vue-script">`之类的…

但`尤雨溪`发现反对的意见大多数是对`ref`语法糖不满，于是继续细分，把`<script setup>`和`ref`语法糖分成了两个不同的提案，如果不太清楚我说的到底是什么东西的话，可以点进这两篇文章看一看：[《[译\]尤雨溪: Ref语法糖提案》](https://link.segmentfault.com/?url=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzI5NDMwODY2NQ%3D%3D%26amp%3Bmid%3D2247484456%26amp%3Bidx%3D1%26amp%3Bsn%3D03d8e53bae03f2022c32c90d3394858a%26amp%3Bchksm%3Dec659a7edb121368534d825d7b3c6b14650fb73435c15c6eae6452e3c98fb20c15abb17686db%26amp%3Btoken%3D1807705780%26amp%3Blang%3Dzh_CN%23rd)、[《Vue 3.0.3 : 新增CSS变量注入以及最新的Ref提案》](https://link.segmentfault.com/?url=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzI5NDMwODY2NQ%3D%3D%26amp%3Bmid%3D2247484475%26amp%3Bidx%3D1%26amp%3Bsn%3Df7403ba8aeaf866971c580c524327c7c%26amp%3Bchksm%3Dec659a6ddb12137bb459e8c86e71c07f5fb8f672c31ce35d831f04bca4ac5e586b6c105cfb3e%26amp%3Btoken%3D1807705780%26amp%3Blang%3Dzh_CN%23rd)

最近我看到`<script setup>`这个提案终于定稿了，已经进入`Vue`的标准里面去了，我们在用新版`Vue`的时候是默认支持这种写法的。不过由于`ref`这个提案反对意见太多，尤大怕如果不顾大家的反对意见坚决推进的话，可能会失去大家的信任从而流失一批用户、顺便再给自己多招点黑…

于是`ref`这个提案就被放弃掉了。正当我以为终于不用再搞那些花里胡哨的玩意之后，新版的`ref`语法糖提案又来了… 原来尤大解决`ref`的`.value`属性这个决心一直都没有改变，你们不同意原来的写法？那好，换个语法再来一遍！

### 为什么做这个 ref 语法糖（老的）？

自从引入 `Composition API` 以来，一个主要未解决的问题是 `ref` 对象的使用。`.value`在任何地方使用都可能很麻烦，如果不使用 TS 的话，很容易就会忘记写这个`.value`属性，就像这样：

```js
import { ref } from 'vue'

let loading = ref(true)

if (loading) {
    // 此处省略若干代码
    loading = false
}
```

但实际上我们要写成这样才会正确运行：

```js
if (loading.value) {
    // 此处省略若干代码
    loading.value = false
}
```

这就很烦，所以一些用户特别倾向于只用`reactive()`这个函数，这样他们就不必面对`ref`的`.value`属性了，就像这样：

```js
import { reactive } from 'vue'

const state = reactive({
    loading: true
})

if (state.loading) {
    // 此处省略若干代码
    state.loading = false
}
```

### Vue 3.0.3 无法接受的新ref语法糖

提案是 RFC 228

但其实这些写法在`尤雨溪`的眼里都不是最好的解决方案，于是他参考了`Svelte`的写法，用了几乎快被废弃掉的`label`语法：

```js
ref: loading = true

if (loading) {
    // 此处省略若干代码
    loading = false
}
```

这个语法为何遭到大家的强烈反对呢？因为我们声明一个变量通常会用`let`、`const`以及`var`关键字对吧，但这个压根儿就没用到任何声明的关键字，取而代之的是不伦不类的`ref:`。这个语法并不是尤雨溪自创的啊，它是`JS`里的`label`语法，但几乎没人用，可能有一部分人听都没听过，它主要是在多重嵌套的循环中配合`break`及`continue`使用的，就像这样：

```js
let num = 0
outermost:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermost
        } else {
            console.log(i, j, 88)
        }
        num++
    }
}
console.log(num) //95
```

看不懂没关系啊，也没必要弄懂这种语法，因为它不够直观，用处也不是很大，所以几乎没什么人用它！不过既然没什么人在用，同时它还是`JS`的合法语法，那用它来告诉编译器这里是声明了一个`ref`变量岂不是很完美？

那么大家为何会如此反对呢？就是因为`label`语法压根儿就不是这么用的，人家原本是为了和`break`、`continue`配合使用的，虽然在别的地方用也不算是语法错误，但你这么做明显是修改了`JS`原本的语意！

### Vue 3.2.x 改进版的新ref语法糖

那尤大新提的这个`ref`语法糖长什么样呢，我们来看一下：

```vue
<script setup>
let loading = $ref(true)

if (loading) {
    // 此处省略若干代码
    loading = false
}
</script>
```

尤大心想：你们不是嫌我之前用了不规范的语法么？那我这回这么写应该没问题了吧！想想之前我们定义一个`ref`变量，首先需要先把`ref`引进来然后才能用：

```js
import { ref } from 'vue'

const loading = ref(true)
```

而新语法不用引，直接就能用，类似于全局变量的感觉。除了`$ref`这个特殊的全局变量呢，这次提案还有：`$computed`、`$fromRefs`和`$raw`这几个玩意。我们一个个来看，先看`$computed`：

```vue
<!-- 以前 -->
<script setup>
import { ref, computed } from 'vue'

const num = ref(1)
const num_10 = computed(() => num.value * 10)
</script>

<!-- 现在 -->
<script setup>
let num = $ref(1)
const num_10 = $computed(() => num * 10)
</script>
```

`$fromRefs`又是个啥呢？这玩意在之前没有啊！只听说过`toRefs`：

```vue
<!-- 以前 -->
<script setup>
import { fromRefs } from 'vue' // 这个API并不存在
import { toRefs } from 'vue' // 这个API倒是有 也就是只有 to 没有 from
</script>
```

其实这个`$fromRefs`正是为了配合`toRefs`而产生的，比方说我们在别的地方写了一个`useXxx`：

```js
import { reactive } from 'vue'

const state = reactive({
    x: 0,
    y: 0
})

export default = (x = 0, y = 0) => {
    state.x = x
    state.y = y
    
    return toRefs(state)
}
```

于是我们在使用的时候就：

```vue
<script setup>
import { useXxx } form '../useXxx.js'

const { x, y } = useXxx(100, 200)

console.log(x.value, y.value)
</script>
```

这岂不是又要出现尤大最不想看到的`.value`属性了吗？所以`$fromRefs`就是为了解决这个问题而生的：

```vue
<script setup>
import { useXxx } form '../useXxx.js'

const { x, y } = $fromRefs(useXxx(100, 200))

console.log(x, y)
</script>
```

最后一个 API 就是`$raw`了，raw 不是原始的意思嘛！那么看名字也能猜到，就是我们用`$ref`所创建出来的其实是一个响应式`对象`，而不是一个基本数据类型，但语法糖会让我们在使用的过程中像是在用基本数据类型那样可以改来改去，但有时我们想看看这个`对象`长什么样，那么我们就需要用到`$raw`了：

```vue
<script setup>
const loading = $ref(true)

console.log(loading) // 其实打印的不是 loading 这个对象 而是它里面的值 相当于 loading.value
console.log($raw(loading)) // 这回打印的就是 loading 这个对象了
</script>
```

### 在 vue-cli 脚手架中开启方式

这种语法是随着`Vue 3.2`一同发布的，所以我们的`Vue`版本至少要大于等于`Vue 3.2.0-beta.1`。由于该语法是实验性的，默认是不启用的，我们需要自行配置：

#### 在 vue-cli 脚手架中

我们需要在根目录下新建一个`vue.config.js`，然后在里面写：

```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          refSugar: true
        }
      })
  }
}
```

#### 在 Vite 中

我们需要在根目录下新建一个`vite.config.js`，然后在里面写：

```js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    })
  ]
}
```

#### 在自己搭建的 webpack 脚手架中

```js
// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          refSugar: true
        }
      }
    ]
  }
}
```
### 注意事项

首先这个新语法还是实验性质的，并未进入标准，尽量不要在主要项目中开启，因为实验性语法不一定就会进入标准。第一波`ref`语法糖提案被毙掉之后，有人跑到`GitHub`上大加吐槽

## CSS 变量注入

那么这个`CSS变量注入`又是个什么鬼呢？

总结起来就是：

1. 以前在 JS 中的变量不能直接和 CSS 变量产生联系
2. 现在可以在 `` 标签中将 JS 变量与 CSS 变量进行关联
3. 同时还具有响应性，比如改变了 JS 中 this.xxx 的值，同名的 CSS 变量也会随之改变，视图随之进行更新：

```vue
<template>
  <h1>Vue</h1>
</template>

<script>
export default {
  data () {
    return {
      opacity: 0
    }
  },
  mounted () {
    setInterval(_ => {
      this.opacity >= 1 && (this.opacity = 0)
      this.opacity += 0.2
    }, 300)
  }
}
</script>

<style>
h1 {
  color: rgb(65, 184, 131);
  opacity: v-bind(opacity);
}
</style>
```
如果是 JS 变量是xxx.xxx这种形式的话，比如这样：
```js
export default {
  data () {
    return {
      font: {
          weight: 100
      }
    }
  }
}
```
那么 CSS 不能直接写成这样：
```css
h1 {
  font-weight: v-bind(font.weight)
}
```
而是需要用一对引号扩起来，类似于字符串的那种形式：
```css
h1 {
  font-weight: v-bind('font.weight')
}
```
## expose API

那么这又是个什么鬼呢？

在 Vue 2 时期我们是通过 Options API 来写代码的，也就是说需要导出一个对象，对象的键无非就是那些耳熟能详的：

```js
export default {
    data () {},
    mounted () {},
    computed: {},
    methods: {},
    // 省略若干 Options ...
}
```
而现在新加了一个 expose：
```js
export default {
    data () {},
    mounted () {},
    computed: {},
    methods: {},
    // 省略若干 Options ...
    expose: []
}
```
这玩意是干嘛的呢？首先它的用法和 props 的数组形式差不多：
```js
export default {
    data () {
        return {
            x: 1,
            y: 2
        }
    },
    expose: [ 'x' ]
}
```
这样的话在父组件中用 ref 获取子组件实例时，子组件身上只有x这个变量，y是获取不到的！

而在 Composition API 中的用法是这样的：
```js
export default defineComponent((_, { expose }) => {
    expose({
      x: ref(1)
    })

    return {
      x: ref(2),
      y: ref(3)
    }
  }
})
```
看！咱们这里有两个x，你们猜哪个x会被导出？

答案是如果有两个导出的变量的话，以 expose 导出的为准。

那么 Composition API 和 Options API 混合用法会是什么样的呢：
```js
expotr default defineComponent({
  expose: ['x'],
  data () {
    return {
      x: 1
    }
  },
  setup (_, { expose }) {
    expose({
      y: ref(2)
    })

    return {
      y: ref(3),
      z: ref(4)
    }
  }
})
```
正确答案是：

x = 1

y = 2

z = undefined

当然这些只在组件外起作用，组件内部还是能获取到z的，而且y也还是等于 3 的。