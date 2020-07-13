
## 概要

我们常常在代码发版时,使用git 创建一个tag ,这样一个不可修改的历史代码版本就像被我们封存起来一样,不论是运维发布拉取,或者以后的代码版本管理,都是十分方便的。

**git 下打标签其实有2种情况**
::: tip
轻量级的：它其实是一个独立的分支,或者说是一个不可变的分支.指向特定提交对象的引用

带附注的：实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证,电子邮件地址和日期，一般我们都建议使用含附注型的标签，以便保留相关信息
所以我们推荐使用第二种标签形式
:::


```sh
git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>] [-e]
	<tagname> [<commit> | <object>]
git tag -d <tagname>…​
git tag [-n[<num>]] -l [--contains <commit>] [--no-contains <commit>]
	[--points-at <object>] [--column[=<options>] | --no-column]
	[--create-reflog] [--sort=<key>] [--format=<format>]
	[--[no-]merged [<commit>]] [<pattern>…​]
git tag -v [--format=<format>] <tagname>…​
```
## 常用速查

```sh
// 查看标签,可加上参数-l(列表形式列出） -n(附加说明)
git tag [-l -n]
// 查看符合检索条件的标签 
git tag -l 1.*.* 
// 查看对应标签状态 
git checkout 1.0.0 
// 创建轻量级的标签(本地)
git tag 1.0.0-light 
// 创建带附注的标签(推荐) 
git tag -a 1.0.0 -m "这是备注信息" 
// 针对特定commit版本SHA创建标签 
git tag -a 1.0.0 0c3b62d -m "这是备注信息" 
// 删除标签(本地) 
git tag -d 1.0.0 
// 将本地所有标签发布到远程仓库
git push origin --tags 
// 指定版本发送 
git push origin 1.0.0 
// 删除远程仓库对应标签（Git版本 > V1.7.0）
git push origin --delete 1.0.0 
// 旧版本Git 
git push origin :refs/tags/1.0.0
// 获取远程标签
git fetch origin tag "标签名称"
```

## 创建标签
在Git中打标签非常简单，首先，切换到需要打标签的分支上：

```sh
$ git branch
* dev
  master
$ git checkout master
Switched to branch 'master'
```

然后，敲命令`git tag `下面三种方式创建

1、创建轻量标签
轻量标签指向一个发行版的分支，其只是一个像某commit的引用，不存储名称时间戳及标签说明等信息。定义方法如下

```sh
 git tag <版本号>-light
```

2、创建带附注标签
相对于轻量标签，附注标签是一个独立的标签对象，包含了名称时间戳以及标签备注等信息，同时指向对应的commit。定义方法如下

```sh
git tag -a <版本号> -m "<备注信息>"
```

3、同时我们也可以像特定的commit添加标签，使用该commit对应的SHA值即可

```sh
git tag -a <版本号> <SHA值> -m "<备注信息>"
```

比如 git tag -a v1.0 0c3b62d -m "Release Edition v1.0" 就是为SHA为0c3b62d的这次提交打了1.0发行版的tag




## 查看标签

可以用命令`git tag`查看所有标签：

```sh
$ git tag
v1.0

```

默认标签是打在最新提交的commit上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？

方法是找到历史提交的commit id，然后打上就可以了：

```sh
$ git log --pretty=oneline --abbrev-commit
12a631b (HEAD -> master, tag: v1.0, origin/master) merged bug fix 101
4c805e2 fix bug 101
e1e9c68 merge with no-ff
f52c633 add merge
cf810e4 conflict fixed
5dc6824 & simple
14096d0 AND simple
b17d20e branch test
d46f35e remove test.txt
b84166e add test.txt
519219b git tracks changes
e43a48b understand how stage works
1094adb append GPL
e475afc add distributed
eaadf4e wrote a readme file

```

比方说要对`add merge`这次提交打标签，它对应的commit id是`f52c633`，敲入命令：

```sh
$ git tag v0.9 f52c633
```

再用命令`git tag`查看标签：

```sh
$ git tag
v0.9
v1.0
```

注意，标签不是按时间顺序列出，而是按字母排序的。可以用`git show `查看标签信息：

```sh
$ git show v0.9
commit f52c63349bc3c1593499807e5c8e972b82c8f286 (tag: v0.9)
Author: xxx <xxx@gmail.com>
Date:   Fri May 18 21:56:54 2018 +0800

    add merge

diff --git a/readme.txt b/readme.txt
...
```

可以看到，`v0.9`确实打在`add merge`这次提交上。

还可以创建带有说明的标签，用`-a`指定标签名，`-m`指定说明文字：

```sh
$ git tag -a v0.1 -m "version 0.1 released" 1094adb
```

用命令`git show `可以看到说明文字：

```sh
$ git show v0.1
tag v0.1
Tagger: xxx <xxx@gmail.com>
Date:   Fri May 18 22:48:43 2018 +0800

version 0.1 released

commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (tag: v0.1)
Author: xxx <xxx@gmail.com>
Date:   Fri May 18 21:06:15 2018 +0800

    append GPL

diff --git a/readme.txt b/readme.txt
...
```

## 删除标签

如果标签打错了，也可以删除：

```sh
$ git tag -d v0.1
Deleted tag 'v0.1' (was f15b0dd)

```

因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

## 推送标签

如果要推送某个标签到远程，使用命令`git push origin `：

```sh
$ git push origin v1.0
Total 0 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
 * [new tag]         v1.0 -> v1.0

```

或者，一次性推送全部尚未推送到远程的本地标签：

```sh
$ git push origin --tags
Total 0 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
 * [new tag]         v0.9 -> v0.9

```
## 删除远程标签

如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：

```sh
$ git tag -d v0.9
Deleted tag 'v0.9' (was f52c633)
```

然后，从远程删除。删除命令也是push，但是格式如下：

```sh
$ git push origin :refs/tags/v0.9
To github.com:michaelliao/learngit.git
 - [deleted]         v0.9
```

要看看是否真的从远程库删除了标签，可以登陆GitHub查看。



## 小结

- 命令`git tag `用于新建一个标签，默认为`HEAD`，也可以指定一个commit id；
- 命令`git tag -a  -m "blablabla..."`可以指定标签信息；
- 命令`git tag`可以查看所有标签
- 命令`git push origin `可以推送一个本地标签；
- 命令`git push origin --tags`可以推送全部未推送过的本地标签；
- 命令`git tag -d `可以删除一个本地标签；
- 命令`git push origin :refs/tags/`可以删除一个远程标签。