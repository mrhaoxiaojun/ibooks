---
title:  从0到1搭建一个vue3组件库
date: 2020-05-18
sidebar: auto
tags:
 - vue
 - ts
 - vite
 - vitepress
categories: 
 - 前端
---
<!-- more -->
# 前言

本文其实是整合了DevUI团队的开源分享内容的部分，感谢DevUI团队和村长；内容较为简单，本文主要是为了梳理和增加记忆，同时也是分享给有需要的小伙伴，vue2.0的时代，公司内部组件库也是小编搭建的，其实算是轻车熟路了，包括里面用的一些底层的依赖（markdown-it、commander ），vue3.0依然不能错过，新技术学起来，开源起来

参考：

作者：DevUI团队

链接：https://juejin.cn/post/7024443197854056456

# 搭建Vue3 的组件库工程

我们将使用：Vue3+TypeScript + Vite + Vitepress+Sass作为组件库的技术选型

## 创建基础工程

直通车方式，直接指定模板
```js
npm create vite mini-vtv-ui --template vue-ts
```
[参考vite官网文档](https://cn.vitejs.dev/guide/#trying-vite-online)

### 安装依赖/本地启动/浏览器看效果

```
cd mini-vtv-ui
npm install
npm run dev
```

### 构建生产包

```
"build": "vue-tsc --noEmit && vite build",

```

生产构建的脚本，`vue-ts`模板和`vue`模板不一样的地方是，`vue-ts`模板增加了类型检查的命令：

```
vue-tsc --noEmit
```

在构建的过程中，会检查有没有类型错误，并提示出来。

## 关键文件介绍

目录结构

```

/kagol/vite-demo
├── README.md
├── index.html
├── package.json
├── public
|  └── favicon.ico
├── src
|  ├── App.vue
|  ├── assets
|  |  └── logo.png
|  ├── components
|  |  └── HelloWorld.vue
|  ├── env.d.ts // vue-ts模板
|  └── main.ts
├── tsconfig.json // vue-ts模板
└── vite.config.ts

```

### package.json

一个开源项目，首先关注的是它的`package.json`文件，里面有该项目的基本信息、脚本命令和依赖库等信息。

```
{
  "name": "vite-demo",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite", // 本地启动
    "build": "vue-tsc --noEmit && vite build", // 构建生产包，增加了vue-tsc类型检查 vue模板为 vite build
    "serve": "vite preview" // 预览生产包效果
  },
  "dependencies": {
    "vue": "^3.2.16"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.9.3", // 提供 Vue 3 单文件组件支持
    "typescript": "^4.4.3", // vue-ts模板
    "vite": "^2.6.4",
    "vue-tsc": "^0.3.0" // volar的子包，vue3的ts类型检查工具（可选） vue-ts模板
  }
}

```

一共有5个依赖

运行态依赖：vue

开发态依赖：

- vite
- @vitejs/plugin-vue 提供 Vue 3 单文件组件支持的vite插件
- typescript
- vue-tsc vue3的类型检查工具，可选

### vite.config.ts

这个是vite的配置文件，里面主要引入了一个`@vitejs/plugin-vue`插件，用来为vue3单文件组件提供支持。

后续我们要支持`jsx`等其他功能，都可以通过配置相应的插件来提供支持。

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

```

### tsconfig.json

这个文件是`vue-ts`模板才有的，用来提供TypeScript支持。主要指定了一些ts的编译选项和需要编译的文件/文件夹。

```
{
  // 编译选项 https://www.tslang.cn/docs/handbook/compiler-options.html
  "compilerOptions": {
    "target": "esnext",              // 目标语言的版本
    "useDefineForClassFields": true, // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#the-usedefineforclassfields-flag-and-the-declare-property-modifier
    "module": "esnext",              // 指定生成代码的模块标准
    "moduleResolution": "node",      // 决定如何处理模块
    "strict": true,                  // 启用所有严格类型检查选项
    "jsx": "preserve",               // 在.tsx文件里支持JSX https://www.tslang.cn/docs/handbook/jsx.html
    "sourceMap": true,               // 生成目标文件的sourceMap文件
    "resolveJsonModule": true,       // 为了import json文件方便
    "esModuleInterop": true,         // 为了import cjs文件方便 https://zhuanlan.zhihu.com/p/148081795
    "lib": ["esnext", "dom"]         // 编译过程中需要引入的库文件的列表
  },
  
  // 指定编译器需要编译的文件或文件夹
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}

```

### index.html

index.html是网站的入口文件，它和一般的html文件不太一样，引入`main.ts`文件入口ts文件的，标签是带有`type="module"`属性的，用来支持ES6模块。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

```

没有加`type="module"`的话，浏览器控制台会报错：

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

### main.ts

main.ts是vue的入口文件，主要创建了一个vue实例，并挂载到dom中。

这里可以用来安装vue插件。

```
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

### App.vue

这个是Vue应用的根组件。

```
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### env.d.ts

vue组件的类型声明，不添加该文件会提示：

```
找不到模块“./App.vue”或其相应的类型声明。
```



## 引入SASS、JSX

```
npm add -D sass
```

```
npm add -D @vitejs/plugin-vue-jsx
```

修改配置文件 vite.config.ts

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 根据对各大组件库的做法来看，tsx更适合写较为复杂强的组件库，all in ts，将内容return要比SFC更加灵活
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx() // 新增
  ]
})
```



# 增加VitePress文档系统

## 技术选型

由于我们使用的是Vite构建工具，因此需要选择一款与其配套的文档系统。

当从vue的生态上来说，需要决策的是选择[VuePress](https://link.juejin.cn?target=https%3A%2F%2Fv2.vuepress.vuejs.org%2Fzh%2Fguide%2F)还是[VitePress](https://link.juejin.cn?target=https%3A%2F%2Fvitepress.vuejs.org%2F)，最终我们选择VitePress，主要原因是：

- VitePress是基于Vite的，而VuePress是基于Webpack的（也可以通过配置`bundler: '@vuepress/bundler-vite'`改成Vite构建）
- VitePress更快更轻量，极易上手

参考：

[v2.vuepress.vuejs.org/zh/guide/#%…](https://v2.vuepress.vuejs.org/zh/guide/#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%98%AF)

## 添加VitePress文档

安装vitepress：

```
npm add -D vitepress

```

创建第一个文档：

```
mkdir docs && echo '# Hello VitePress' > docs/index.md

```

增加脚本命令：

```
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}

```

本地启动：

```
npm docs:dev

```

## 配置VitePress

我们需要实现以下功能：

- 需要一个左侧菜单，用来展示我们有哪些组件
- 点击左侧菜单中的组件，可以展示这个组件的基本信息、Demo、API文档

## 配置sidebar

VitePress有一个配置文件，里面有一个themeConfig/sidebar配置，可以配置左侧菜单。

docs/.vitepress/config.ts

```
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    },
    {
      text: '导航',
    },
    {
      text: '反馈',
    },
    {
      text: '数据录入',
    },
    {
      text: '数据展示',
    },
    {
      text: '布局',
    },
  ]
}

const config = {
  themeConfig: {
    sidebar,
  }
}

export default config

```

## 创建Button组件的文档

404的原因是我们没有创建相应的文档

docs/component/button/index.md

先随便写一些内容

```
# Button 按钮
```

## 在md中增加vue组件

VitePress的一大好处是可以直接在md中写vue组件，VitePress会将其渲染出来。

docs/components/button/index.md

```
# Button 按钮

<d-button></d-button>
```



## 编写一个Button组件

devui/button/src/button.tsx

```
const Button = () => <div>Button 按钮</div>

export default Button
```

## 引入Button组件

docs/.vitepress/theme/index.ts

```
import Theme from 'vitepress/dist/client/theme-default'
import Button from '../../../devui/button/src/button'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('d-button', Button)
  }
}
```

## 报错：React is not defined

这个报错是不是非常熟悉？没错！上一次直播我们也遇到过，相信聪明的你一定知道是怎么回事，也知道怎么解决啦~

```
Uncaught (in promise) ReferenceError: React is not defined
    at Button (button.tsx:1)
```

## 引入jsx插件

安装jsx插件：

```
npm add -D @vitejs/plugin-vue-jsx
```

`docs/vite.config.ts`中引入jsx插件：

```
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()]
})
```



# 增加demo代码展开/收起功能

## 引入背景

早期进行组件开发的时候，demo展示部分需要用`````包裹展示的代码块，另外组件的显示也需要同样的代码，所以同样的代码写了两遍，非常的不“银杏”。

这块小编亲身经历

## 安装vitepress-theme-demoblock依赖

```
yarn add -D vitepress-theme-demoblock
复制代码
```

## 配置 demoBlockPlugin

docs/.vitepress/config.ts

```
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const config = {
  themeConfig: {
    sidebar,
  },
  
  // 以下是新增的
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}
复制代码
```

## 配置 vitepress-rc 脚本命令

自动生成`docs/.vitepress/theme/register-components.js`

```
"register:components": "vitepress-rc"
复制代码
```

## 注册Demo/DemoBlock组件

docs/.vitepress/theme/index.ts

```
/*
 * @Details: 主题文件入口，这里需要注册所有我们的UI组件
 */
import Theme from 'vitepress/dist/client/theme-default'
import Tree from '../../../library/tree'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// vitepress-theme-demoblock插件的组件注册
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Tree)
    registerComponents(app)
  }
}

```

## 编写demo展开/收起的md文档

docs/components/button/index.md

```
# Button 按钮

:::demo XXX

​```vue
<template>
  <d-button></d-button>
</template>
//```
:::
复制代码
```





# 搭建DevUI CLI快速创建组件模板 

## 安装依赖

```
yarn add -D commander inquirer fs-extra kolorist esbuild
复制代码
```

## 开发命令脚本

devui-cli/index.js

```
#!/usr/bin/env node
import { Command } from 'commander'
import { onCreate } from './commands/create'

// 创建命令对象
const program = new Command()

// 注册命令、参数、回调
program
  // 注册 create 命令
  .command('create')
  // 添加命令描述
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
  .option('-t --type <type>', `创建类型，可选值：component, lib-entry`)
  // 注册命令回调
  .action(onCreate)

// 执行命令行参数解析
program.parse()
复制代码
```

devui-cli/commands/create.js

```
import inquirer from 'inquirer'
import { red } from 'kolorist'

// create type 支持项
const CREATE_TYPES = ['component', 'lib-entry']
// 文档分类
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据展示', '布局']

export async function onCreate(cmd = {}) {
  let { type } = cmd

  // 如果没有在命令参数里带入 type 那么就询问一次
  if (!type) {
    const result = await inquirer.prompt([
      {
        // 用于获取后的属性名
        name: 'type',
        // 交互方式为列表单选
        type: 'list',
        // 提示信息
        message: '（必填）请选择创建类型：',
        // 选项列表
        choices: CREATE_TYPES,
        // 默认值，这里是索引下标
        default: 0
      }
    ])
    // 赋值 type
    type = result.type
  }

  // 如果获取的类型不在我们支持范围内，那么输出错误提示并重新选择
  if (CREATE_TYPES.every((t) => type !== t)) {
    console.log(
      red(`当前类型仅支持：${CREATE_TYPES.join(', ')}，收到不在支持范围内的 "${type}"，请重新选择！`)
    )
    return onCreate()
  }

  try {
    switch (type) {
      case 'component':
        // 如果是组件，我们还需要收集一些信息
        const info = await inquirer.prompt([
          {
            name: 'name',
            type: 'input',
            message: '（必填）请输入组件 name ，将用作目录及文件名：',
            validate: (value) => {
              if (value.trim() === '') {
                return '组件 name 是必填项！'
              }
              return true
            }
          },
          {
            name: 'title',
            type: 'input',
            message: '（必填）请输入组件中文名称，将用作文档列表显示：',
            validate: (value) => {
              if (value.trim() === '') {
                return '组件名称是必填项！'
              }
              return true
            }
          },
          {
            name: 'category',
            type: 'list',
            message: '（必填）请选择组件分类，将用作文档列表分类：',
            choices: DOCS_CATEGORIES,
            default: 0
          }
        ])

        createComponent(info)
        break
      case 'lib-entry':
        createLibEntry()
        break
      default:
        break
    }
  } catch (e) {
    console.log(red('✖') + e.toString())
    process.exit(1)
  }
}

function createComponent(info) {
  // 输出收集到的组件信息
  console.log(info)
}

function createLibEntry() {
  console.log('create lib-entry file.')
}
复制代码
```

## 添加脚本命令

package.json

```
{
    // --bundle 标识打包的入口文件
    // --format 转换为目标格式代码
    // --platform 目标平台，默认 browser
    // --outdir 输出目录
    // 开发时实时编译
    "dev": "esbuild --bundle ./src/index.js --format=cjs --platform=node --outdir=./lib --watch",
    // 打包命令
    "build": "esbuild --bundle ./src/index.js --format=cjs --platform=node --outdir=./lib",
    // 执行 create 命令，如果有多个命令，可以去掉 create ，使用时再传入
    "cli": "node ./lib/index.js create"
}
复制代码
```

交互模式执行：

```
yarn cli
复制代码
```

带参数直接执行：

```
yarn cli -t component // -t 是 --type 的别名
```



# 主题样式

# 国际化