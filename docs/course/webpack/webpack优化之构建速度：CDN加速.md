---
title: webpack优化之构建速度：CDN加速(vue-cli4.0)
date:  2020-11-23
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

vue.config.js
出于对网站性能的要求，有时候我们不希望一些比较大的第三方库直接打包到最后的bundle中，而会选择在打包的时候忽略他们，并直接使用CDN上面的资源。

以下是vue-cli4的相关配置vue.config.js

cdn.config.js
```javascript
module.exports = assetsCDN = {
  useCDN: false,
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    'view-design': 'iview'
  },
  css: [
    // '//cdn.jsdelivr.net/npm/view-design@4.3.2/dist/styles/iview.css'
  ],
  // 国内免费（猫云）CDN https://www.bootcdn.cn/
  // 国外免费（unpkg）CDN https://unpkg.com
  // 国外免费（jsdelivr）CDN https://www.jsdelivr.com/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.3/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
    '//cdn.jsdelivr.net/npm/view-design@4.3.2/dist/iview.min.js',
  ]
}
```
```javascript

const assetsCDN = require('./config/cdn.config')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  ...
  // 对vue-cli内部的 webpack 配置进行更细粒度的修改
  chainWebpack: config => {
    if (isProd) {
      ...
      // 添加自定义参数cdn
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN.useCDN ? assetsCDN : {}
        return args
      })
    }
  },
  configureWebpack: (config) => {
    if (isProd) {
      ...
      if(assetsCDN.useCDN){
        // externals里的模块不打包
        config.externals = assetsCDN.externals
      }
    }
  }
}

```

解释一下如何寻找第三方库或者插件，大家可以自己去源码找暴露出来的全局对象就可以

```javascript
externals: {
  vue: 'Vue',
   'vue-router': 'VueRouter',
   vuex: 'Vuex',
   axios: 'axios',
   'view-design': 'iview'
 },
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910174709671.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaGFveGlhb2p1bg==,size_16,color_FFFFFF,t_70#pic_center)
然后将自定义的cdn地址，通过模板渲染添加到html中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <!-- require cdn assets css 配置在vue.config.js下 -->
    <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.css) { %>
      <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" />
    <% } %>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- require cdn assets js 配置在vue.config.js下 -->
    <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
      <script type="text/javascript" src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
    <% } %>
    <!-- built files will be auto injected -->
  </body>
</html>

```
到这里就配置结束了，可以看到修改前后的区别
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910175619595.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaGFveGlhb2p1bg==,size_16,color_FFFFFF,t_70#pic_center)
这里是修改后的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910175611234.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaGFveGlhb2p1bg==,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910175601243.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaGFveGlhb2p1bg==,size_16,color_FFFFFF,t_70#pic_center)
