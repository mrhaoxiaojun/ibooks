---
title: webpack优化之使用高版本webpack和node
date: 2020-11-26
sidebar: auto
tags:
 - webpack       
categories: 
 - 前端
---

使用 webpack4：优化原因

- V8 带来的优化（for of 替代 forEach、Map 和 Set 替代 Object、includes 替代 indexOf）

- 默认使用更快的 md4 hash 算法

- webpacks AST 可以直接从 loader 传递给 AST，减少解析时间

- 使用字符串方法替代正则表达式

使用node高版本同样是对一些算法进行优化，速度会比老版本快一些