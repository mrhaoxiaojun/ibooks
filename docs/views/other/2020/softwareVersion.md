---
title: 软件版本阶段说明
date: 2020-04-14
sidebar: auto
tags:
 - 软件开发相关       
categories: 
 - 其他
---
## 软件版本阶段说明

### 版本命名规范

软件版本号由四部分组成：

第一个1为主版本号

第二个1为子版本号

第三个1为阶段版本号

第四部分为日期版本号加希腊字母版本号

希腊字母版本号共有5种，分别为：base、alpha、beta、RC、release。

例如：1.1.1.051021_beta。

### 版本号定修改规则

- 主版本号(1)：当功能模块有较大的变动，比如增加多个模块或者整体架构发生变化。此版本号由项目决定是否修改。

- 子版本号(1)：当功能有一定的增加或变化，比如增加了对权限控制、增加自定义视图等功能。此版本号由项目决定是否修改。

- 阶段版本号(1)：一般是 Bug 修复或是一些小的变动，要经常发布修订版，时间间隔不限，修复一个严重的bug即可发布一个修订版。此版本号由项目经理决定是否修改。

- 日期版本号(051021):用于记录修改项目的当前日期，每天对项目的修改都需要更改日期版本号。此版本号由开发人员决定是否修改。

- 希腊字母版本号(beta):此版本号用于标注当前版本的软件处于哪个开发阶段，当软件进入到另一个阶段时需要修改此版本号。此版本号由项目决定是否修改。


开发期
---

### Alpha
α是希腊字母的第一个，表示最早的版本，预览版，内部测试版，一般不向外部发布，bug会比较多，功能也不全，一般只有测试人员使用。

### Beta
β是希腊字母的第二个，公开测试版，比alpha版本晚些，主要会有“粉丝用户”测试使用，该版本仍然存在很多bug，但比alpha版本稳定一些。这个阶段版本还会不断增加新功能。分为Beta1、Beta2等，直到逐渐稳定下来进入RC版本。

### RC（Release Candidate）
最终测试版本，发行候选版本，基本不再加入新的功能，主要修复bug。是最终发布成正式版的前一个版本，将bug修改完就可以发布成正式版了。多数开源软件会推出两个RC版本，最后的 RC2 则成为正式版本。

完成期
---

### Release
正式发布版，官方推荐使用的版本，有的用GA来表示。比如spring。

### Final
最终版，也是正式发布版的一种表示方法。比如Hibernate。

### Stable
稳定版，来自预览版本释出使用与改善而修正完成。

### GA（General Availability）
正式发布的版本；在国外都是用GA来说明release版本的。

### RTM(Release to Manufacturing)
给生产商的release版本；RTM版本并不一定意味着创作者解决了软件所有问题；仍有可能向公众发布前更新版本。
另外一种RTM的称呼是RTW（Release To Web），表示正式版本的软件发布到Web网站上供客户免费下载。

### RTL(Retail)
零售版；是真正的正式版，正式上架零售版。
以Windows 7为例，RTM版与零售版的版本号是一样的。

按授权划分
### Trial
试用版，通常都有时间限制，有些试用版软件还在功能上做了一定的限制。可注册或购买成为正式版

### Unregistered
未注册版，通常没有时间限制，在功能上相对于正式版做了一定的限制。可注册或购买成为正式版。

### Demo
演示版，仅仅集成了正式版中的几个功能，不能升级成正式版 ，一般会有功能限制。

### Lite
精简版。

### Full version
完整版，属于正式版。

### Plus
加强版

### Delux
豪华版 (deluxe: 豪华的，华丽的)

### 其他
Enhance
增强版或者加强版　属于正式版1

Free
自由版

Upgrade
升级版

Retail
零售版

Cardware
属共享软件的一种，只要给作者回复一封电邮或明信片即可。（有的作者并由此提供注册码等），目前这种形式已不多见。

Preview
预览版

Corporation & Enterprise
企业版

Standard
标准版

Mini
迷你版也叫精简版只有最基本的功能

Premium
贵价版，旗舰版

Professional(Pro)
专业版

Express
特别版

Regged
已注册版

Build
内部标号

OEM(Original Equipment Manufacturer)
原始设备制造商；是给计算机厂商随着计算机贩卖的，也就是随机版；
只能随机器出货，不能零售。只能全新安装，不能从旧有操作系统升级。包装不像零售版精美，通常只有一面CD和说明书(授权书)。

RVL
号称是正式版，其实RVL根本不是版本的名称。它是中文版/英文版文档破解出来的。
