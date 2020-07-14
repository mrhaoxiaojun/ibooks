---
title: GitHub-Pages上部署项目
date: 2019-08-03
sidebar: auto
tags:
 - GitHub
 - gh-pages
categories: 
 - 运维
---

如何在 GitHub Pages 上部署项目 下面以 vue-cli 项目为例

:::tip
以下为四种，手动部署方式，均需要手动触发发布命令，而推荐使用第三种或第四种方式，更为方便

现在都是需要自己搞两个分支，然后手动发布，那么我们想直接push代码的时候就自动 持续集成/持续部署(CI/CD) 后面我们会继续分析
:::

:::tip
**需要注意的坑（改成相对路径才可以直接访问生成的静态文件）**

 1、修改config => index.js => build => assetsPublicPath 中的'/'成为'./'

 2、在build => util.js 里找到ExtractTextPlugin.extract增加一行：publicPath: '../../'
:::
<!-- more -->

**所有部署方法的第一步：**

先将本地工程push到远程master分支

## 方法一（subtree方式）

如果你的确想用 gh-pages（或别的什么目录名）的话，以下是一种最简单的方法：将 dist 下的所有文件夹 push 到 gh-pages

```sh
  $ npm run build
  $ git checkout -b gh-pages
  $ git add -f dist
  $ git commit -m 'create project'
  $ git subtree push --prefix dist origin gh-pages
```
`dist` 代表子树所在的目录名
`origin` 是 remote name
`gh-pages` 是目标分支名称

## 方法二（将目标文件作为仓库）

```sh
cd dist // 进入dist目录
git init // git 初始化
git checkout -b gh-pages // 创建gh-pages分支
git add . 
git commit -m"init project"
git remote add origin https://github.com//xxx.xx.git // 设置远程仓库地址
git push origin gh-pages // 推送到目标分支gh-pages
```

## 方法三（通过第三方包的方式）

1、npm 安装gh-pages `npm install gh-pages --save-dev`

2、修改package.json 

​	添加homepage："https//github账户名/github.io/项目名称"

​	scripts 里添加两个命令

```sh
"predeploy":"npm run build",
"deploy":"gh-pages -d build"
```

添加好之后执行上面两个命令，这样就坐等执行完成，然后再到你的仓库里面的设置看看，是不是发现gh-pages已经发布成功并设置成了github pages

3、运行`npm run deploy` 自动打包并上次到gh-pages分支

4、访问`https//github账户名/github.io/项目名称 ` 部署成功

 **注意：**

> package.json里面homepages影响项目发布后的js的相对路径，因为它编译的时候会改变js和css路径，比如：如果你添加了homepages，那么你发布的js路径就变成了/your-repository/../../xx.js了，否则就会变成/../../xx.js

## 方法四（编写shell脚本的方式）

1. 在 `docs/.vuepress/config.js` 中设置正确的 `base`。

   如果你打算发布到 `https://.github.io/`，则可以省略这一步，因为 `base` 默认即是 `"/"`。

   如果你打算发布到 `https://.github.io//`（也就是说你的仓库在 `https://github.com//`），则将 `base` 设置为 `"//"`。

2. 在你的项目中，创建一个如下的 `deploy.sh` 文件（请自行判断去掉高亮行的注释）:

   ```sh
   #!/usr/bin/env sh

   # 确保脚本抛出遇到的错误
   set -e

   # 生成静态文件
   npm run docs:build

   # 进入生成的文件夹
   cd docs/.vuepress/dist

   # 如果是发布到自定义域名
   # echo 'www.example.com' > CNAME

   git init
   git add -A
   git commit -m 'deploy'

   # 如果发布到 https://<USERNAME>.github.io
   # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

   # 如果发布到 https://<USERNAME>.github.io/<REPO>
   # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

   cd -
   ```
:::tip
你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。
:::


详情可以看[vuepress官方说明](https://www.vuepress.cn/guide/deploy.html#github-pages)或vuepress比较不错的主题，[vuepress-theme-reco的文档介绍](https://vuepress-theme-reco.recoluan.com/views/other/deploy.html#github) 里面还讲到了手动部署和自动部署



- 参考：[git subtree push1](https://www.jianshu.com/p/cc053119f119)
- 参考：[git subtree push2](https://segmentfault.com/q/1010000007913675?_ea=1490992)
- 参考：[git init](https://blog.csdn.net/nqmysbd/article/details/88764425)
- 参考：[npm gh-pages](https://segmentfault.com/a/1190000010672318)