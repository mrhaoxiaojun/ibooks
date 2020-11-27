---
title: webpack优化之构建速度：DllPlugin
date: 2020-11-23
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

我们在使用cli创建项目，完成开发后，在项目打包通常会发现很慢。为了优化打包速度，我们可以使用Dll来做这个优化，也可以使用hard-source-webpack-plugin，还可以用thread-loader。

这里我们主要讲Dll，Dll不仅可以在cli的项目中使用，我们也可以单独建立一个webpack文件来进行处理。

## 1、我们先创建webpack.dll.js文件,代码如下：

```javascript
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
  // 自己项目使用的第三方库
    vendor: ['lodash', 'axios', 'vue-router', 'element-ui', 'vue/dist/vue.esm.js']
  },
  // // 这个是输出 dll 文件
  output: {
    // 打包后输入路径，可以自行修改
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  //  // 这个是输出映射表
  plugins: [
    new webpack.DllPlugin({
      // Tips: DllPlugin的name属性需要和libary保持一致
      name: '[name]_[hash]',
      //指定当前目录
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      // context需要和webpack.config.js保持一致
      context: __dirname
    })
  ]
}
```

## 2、我们需要下载webpack-cli来运行我们的webpack.dll.js

```javascript
npm install webpack-cli
//查看webpack版本号 webpack -v是无用的
npm info webpack
//Tips: ./webpack.dll.js 路径要写对
//只能在package.json文件的scripts配置"dll": "webpack --config ./webpack.dll.js"
//运行文件
npm run build:dll
```
package.json增加配置如下

```javascript
{
  "scripts": {
    "build:dll": "webpack --config ./webpack.dll.js",
  },
}
```
当我们在package.json文件配好，然后运行命令后，会打包生成vendor-manifest.json文件

## 3、在项目中引入我们打包后的json文件
现在已经把第三方的包打包好了，接下来只需要在我们项目中注入即可。

### 方式有两种：

**vue.config.js配置**

```javascript
const webpack = require('webpack')

module.exports = {
    //二者选其一即可
    chainWebpack: config => {
      config.plugin('dll-reference-plugin')
         .use(webpack.DllReferencePlugin)
         .tap(options => {
           options[0] = {
             context: __dirname,
             // manifest就是我们第2步中打包出来的json文件
             manifest: require(path.join(__dirname, `./vendor-manifest.json`))
           }
           return options
         })
    },
    configureWebpack: config => {
      config.plugins.push(new webpack.DllReferencePlugin({
        context: __dirname,
        // manifest就是我们第2步中打包出来的json文件
        manifest: require('./vendor-manifest.json')
      }))
    }
}
```
**webpack.config.js配置**

```javascript
const path = require('path');
const webpack = require('webpack')
module.exports = {
  // dll相关配置
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      // manifest就是我们之前打包出来的json文件
      manifest: require('./vendor-manifest.json'),
    })
  ]
}
```
当我们再次打包我们的项目，你会发现打包速度有很明显的改

除了上面讲的一种优化方案，我们还可以使用hard-source-webpack-plugin来做这方面的优化请看我得其他文章