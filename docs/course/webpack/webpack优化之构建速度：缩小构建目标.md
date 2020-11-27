---
title: webpack优化之构建速度：缩小构建目标
date:  2020-11-23
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

## 尽可能的少构建模块

目的：尽可能的少构建模块
比如 babel-loader 不解析 node_modules

```js
module.exports = {
  rules: [
    {
      test: /.js$/,
      use: [
        'babel-loader',
        // 'cache-loader',
        // 'eslint-loader'
      ],
      exclude: "node_modules"
    },
  ]
}
```
## 减少文件搜索范围

- 优化 resolve.modules 配置（减少模块搜索层级）
- 优化 resolve.mainFields 配置
- 优化 resolve.extensions 配置
- 合理使用 alias

```js
module.exports = {
  resolve: {
    alias: {
      // 直接指定查找react地址，减少寻址过程
      'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
    },
    // 让它只在当前模块中寻找依赖
    modules:[path.resolve(__dirname,"node_modules")], 
    // 不写后缀的话，默认找得顺序.js->.json，我们现在只设置.js 那么不写后缀的文件它只匹配查找.js文件
    extensions: ['.js'],
    // 默认查找入口路径是根据package.json来查找main-》根项目下的index.js-》lib下的index.js 我们现在给他指定只找main
    mainFields: ['main']
  }
}

```
