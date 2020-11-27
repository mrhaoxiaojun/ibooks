---
title: webpack优化之构建速度：缓存
date: 2020-11-26
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

> 目的：提升二次构建速度

## 缓存思路：

- babel-loader 开启缓存
- terser-webpack-plugin 开启缓存
- 使用 cache-loader 或者 hard-source-webpack-plugin

### babel-loader 开启缓存
```js
const HappyPack = require('happypack');
module.exports = {
  mode: 'production',
  module: {
      rules: [
        {
            test: /.js$/,
            use: [
              'happypack/loader'
            ]
        },
        ...
      ]
  },
  plugins:[
    new HappyPack({
      // 这里的添加参数 cacheDirectory=true 
      // 第一次运行后，可以看一下node_modules下有个.cache文件里面会有babel-loader的
      loaders: [ 'babel-loader?cacheDirectory=true' ] 
    }),
  ]
}
```
### terser-webpack-plugin 开启缓存

```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4, // true
        cache:true // 这个也被缓存了
      }),
    ],
  },
};
```
### hard-source-webpack-plugin
在项目实现的过程中，想在代码更改的同时，查看效果的改变，而这个时候长时间的编译等待，造成了额外的时间浪费。

更好的代替者DLL，选择hard-source-webpack-plugin

HardSourceWebpackPlugin是webpack的插件，为模块提供中间缓存步骤。为了查看结果，您需要使用此插件运行webpack两次：第一次构建将花费正常的时间。第二次构建将显着加快（大概提升90%的构建速度）。

1、安装

```javascript
npm install --save-dev hard-source-webpack-plugin 
```
2、配置文件
```javascript
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  // ......
  plugins: [
    new HardSourceWebpackPlugin() // <- 直接加入这行代码就行
  ]
}
```
更多关于配置hard-source-webpack-plugin可以查看官网[hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin)

