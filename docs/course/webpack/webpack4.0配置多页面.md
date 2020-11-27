---
title: webpack4.0配置多页面应用
date: 2019-06-15
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

## 页面应用(MPA)概念

每⼀次页面跳转的时候，后台服务器都会给返回⼀个新的 html ⽂文档， 这种类型的网站也就是多页网站，也叫做多页应用。

## 多页面打包基本思路 

每个页面对应一个 entry，一个 html-webpack-plugin

缺点：每次新增或删除页面需要改 webpack 配置

## 多页面打包通用方案

动态获取 entry 和设置 html-webpack-plugin 数量

利用 glob.sync

```js
module.exports = { 
 entry: glob.sync(path.join(__dirname, './src/*/index.js'))
}
```

代码示例

```js
'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

  // 因为兼容entryFiles取出来也许是对象不是数组，所以用Object.keys做一下处理，一步到位
  Object.keys(entryFiles)
      .map((index) => {
        // 获取到入口文件路径
        const entryFile = entryFiles[index];
        // '/Users/cpselvis/my-project/src/index/index.js'
        // '/Users/cpselvis/my-project/src/search/index.js'
        // 解析出来文件名
        const match = entryFile.match(/src\/(.*)\/index\.js/);
        const pageName = match && match[1];
        //  组合entry对象
        entry[pageName] = entryFile;
        // 设置多模板
        htmlWebpackPlugins.push(
          new HtmlWebpackPlugin({
            inlineSource: '.css$',
            template: path.join(__dirname, `src/${pageName}/index.html`),
            filename: `${pageName}.html`,
            chunks: ['vendors', pageName],
            inject: true,
            minify: {
              html5: true,
              collapseWhitespace: true,
              preserveLineBreaks: false,
              minifyCSS: true,
              minifyJS: true,
              removeComments: false
            }
          })
        );
      });

  return {
      entry,
      htmlWebpackPlugins
  }
}

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
    entry: entry, // 多入口打包
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    module:{...},
    plugins:[
      // ... new pulgins
    ].concat(htmlWebpackPlugins) // 动态多模板打包
```