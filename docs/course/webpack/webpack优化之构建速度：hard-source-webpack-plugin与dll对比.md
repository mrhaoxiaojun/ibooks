---
title: webpack优化之构建速度：hard-source-webpack-plugin与dll对比
date: 2020-11-23
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

webpack优化，`webpack dll`动态链接库的方案可谓是很多人用的经典方案
但是睡着webpack的升级，打包性能还是逐步提高了很多，我们也希望减少配置带来的复杂关系，那么最优化最小化配置的，必然是最好的选择，下面介绍一下 hard-source-webpack-plugin以及和dll的对比

## dll

其实是做缓存
>所谓动态链接，就是把一些经常会共享的代码制作成 DLL 档，当可执行文件调用到 DLL 档内的函数时，Windows 操作系统才会把 DLL 档加载存储器内，DLL 档本身的结构就是可执行档，当程序有需求时函数才进行链接。透过动态链接方式，存储器浪费的情形将可大幅降低。

将dll和缓存进行对比可以发现：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917174951143.png#pic_center)
个人理解的dll基本过程：

1、第一次npm run的时候，把请求的内容存储起来（存储在映射表中）

2、再次请求时，先从映射表中找，看请求的内容是否有缓存，有则加载缓存（类似浏览器的缓存策略，命中缓存），没有就正常打包。

3、直接从缓存中读取。

## hard-source-webpack-plugin
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