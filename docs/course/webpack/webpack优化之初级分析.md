---
title: webpack优化之初级分析
date: 2020-11-26
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

## 使用 webpack 内置的 stats 分析

stats: 构建的统计信息

package.json 中使用 stats

```js
"scripts": {
  "build:stats": "webpack  --config webpack.prod.js --json > stats.json",
  ...
},
```
`npm run build:stats`输出 stats.json 文件 可以看到模块的大小包含chunk等信息

其实在文件里看不是很直观，我们通常直接打包`npm run build`结束后，就能看到命令行中，stats的相关信息，文件名、大小、chunk，时间消耗等等，相对直观一些

但是我们不能知道里面具体哪些文件为什么大，颗粒度相对粗一些



## 使用 speed-measure-webpack-plugin 分析

可以看到每个loader和插件的执行耗时

- 分析整个打包总耗时
- 每个插件和loader的耗时情况

代码示例

```js
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasureWebpackPlugin()
// wrap包裹我们webpack配置即可
const webpackConfig = smp.wrap({
  ...
  pulgins:[
    new Myplugin(),
    new MyOtherPlugin()，
    ...
  ]
})
```
## webpack-bundle-analyzer 分析体积

实际我们使用vue-cli工程的同学们常用，直接执行`npm run build --report`打包完成会启动一个端口为8888的服务

- 依赖的第三方模块文件大小
- 业务里面的组件代码大小

代码示例

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```
[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)



