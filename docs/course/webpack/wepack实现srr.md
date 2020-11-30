---
title: webpack实现ssr
date: 2020-11-30
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

服务端
- 使⽤用 react-dom/server 的 renderToString ⽅方法将 React 组件渲染成字符串串
- 服务端路路由返回对应的模板
客户端
- 打包出针对服务端的组件

**webpack ssr 打包存在的问题**

浏览器器的全局变量量 (Node.js 中没有 document, window)

- 组件适配：将不兼容的组件根据打包环境进行适配
- 请求适配：将 fetch 或者 ajax 发送请求的写法改成 isomorphic-fetch 或者 axios

**样式问题 (Node.js 无法解析 css)**

- 方案一：服务端打包通过 ignore-loader 忽略略掉 CSS 的解析
- 方案二：将 style-loader 替换成 isomorphic-style-loader 

```bash
# package.json
"scripts": {
  "build:ssr": "webpack --config webpack.ssr.js"
}
```
```js
// wepack.srr.js

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index-server.js'));

  Object.keys(entryFiles)
    .map((index) => {
      const entryFile = entryFiles[index];
      // '/Users/cpselvis/my-project/src/index/index.js'

      const match = entryFile.match(/src\/(.*)\/index-server\.js/);
      const pageName = match && match[1];

      if (pageName) {
        entry[pageName] = entryFile;
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
      }
    });

  return {
    entry,
    htmlWebpackPlugins
  }
}

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-server.js',
    libraryTarget: 'umd'
  },
  ...
}
```
```html
<!-- ./src/serach/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    ${ require('raw-loader!./meta.html')}
    <title>Document</title>
    <script>${ require('raw-loader!babel-loader!../../node_modules/lib-flexible/flexible.js')}</script>
</head>
<body>
    <div id="root"><!--HTML_PLACEHOLDER--></div>
    <script type="text/javascript" src="https://11.url.cn/now/lib/16.2.0/react.min.js"></script>
    <script type="text/javascript" src="https://11.url.cn/now/lib/16.2.0/react-dom.min.js"></script>
    <!--INITIAL_DATA_PLACEHOLDER-->
</body>
</html>
```
```js
// ./src/serach/index-server.js

'use strict';
// erver端不支持import 需要使用CommonJS语法
// import React from 'react';
// import largeNumber from 'large-number';
// import logo from './images/logo.png';
// import './search.less';
const React = require('react');
const largeNumber = require('large-number');
const logo = require('./images/logo.png');

class Search extends React.Component {

  constructor() {
    super(...arguments);

    this.state = {
      Text: null
    };
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      });
    });
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumber('999', '1');
    return <div className="search-text">
      {
        Text ? <Text /> : null
      }
      {addResult}
      搜索文字的内容<img src={logo} onClick={this.loadComponent.bind(this)} />
    </div>;
  }
}
// server端不支持ReactDOM render 需要使用CommonJS语法
module.exports = <Search />;
```
```js
// ./server/index.js

if (typeof window === 'undefined') {
    global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server');
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');
const data = require('./data.json');

const server = (port) => {
    const app = express();

    // 设置静态目录
    app.use(express.static('dist'));
    
    app.get('/search', (req, res) => {
        const html = renderMarkup(renderToString(SSR));
        res.status(200).send(html);
    });

    app.listen(port, () => {
        console.log('Server is running on port:' + port);
    });
};

server(process.env.PORT || 3000);

const renderMarkup = (str) => {
    const dataStr = JSON.stringify(data);
    return template.replace('<!--HTML_PLACEHOLDER-->', str)
        .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.__initial_data=${dataStr}</script>`);
}
```

```json
// ./server/data.json

{
	"error": [],
	"extra": [],
	"data": {
		"list": [
			[{
				"sub_count": 5556,
				"column_type": 1,
				"id": 192,
				"column_price_market": 9900,
				"column_bgcolor": "#F6F7FB",
				"column_title": "SQL必知必会",
				"column_cover_small": "https:\/\/static001.geekbang.org\/resource\/image\/1c\/38\/1c5a5b154b543af952312eef33217438.jpg",
				"column_cover": "https:\/\/static001.geekbang.org\/resource\/image\/c7\/0d\/c7ee0aabbcb6d2da09a1b4a56c1a730d.jpg",
				"had_sub": false,
				"price_type": 2,
				"column_unit": "45讲",
				"is_experience": false,
				"column_ctime": 1559640855,
				"update_frequency": "每周一 \/ 三 \/ 五更新",
				"is_onboard": true,
				"author_intro": "清华大学计算机博士",
				"column_sku": 100029501,
				"column_cover_wxlite": "https:\/\/static001.geekbang.org\/resource\/image\/cd\/f0\/cd26b744d388dbd4387dcfaa66dd8bf0.jpg",
				"column_price": 6800,
				"column_price_sale": 6800,
				"author_name": "陈旸",
				"column_subtitle": "从入门到数据实战"
			}, ]
		],
		"nav": [{
			"id": 1,
			"name": "专栏",
			"color": "#5ba6ff",
			"icon": "https:\/\/static001.geekbang.org\/resource\/image\/dd\/9e\/dd8cbc79f017d1b01f643c7ea929d79e.png"
		}, {
			"id": 3,
			"name": "视频课程",
			"color": "#79c109",
			"icon": "https:\/\/static001.geekbang.org\/resource\/image\/4a\/c3\/4aebe8fb752fa21a0fd989a45d9847c3.png"
		}, {
			"id": 2,
			"name": "微课",
			"color": "#5ba6ff",
			"icon": "https:\/\/static001.geekbang.org\/resource\/image\/9c\/f1\/9c223ccae33c5245a3009857582f1df1.png"
		}]
	},
	"code": 0
}
```