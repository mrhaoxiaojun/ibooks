## 怎么删除无用分支
删除：
`git branch -d branch_name`
强制删除：
`git branch -D branch_name`

## 怎么修改最新的commit的message

`git commit --amend`  对最新一次提交做 commit 修改

命令应该是代替（或这说修改）上一次提交，不仅只能修改message。
比如上一次提交时有几个文件没有`add`以及`commit`，可以重新进行`add`之后再`commit` `--amend`提交。
但这次提交之后不会增加一次新的`commit`，而是相当于在上一次`commit`的基础上进行修改。

## 怎么修改老旧的commit的message

:::tip
注意：`rebase`请在自己的开发分支进行使用，不要随便在公共分支进行操作，以免发生错乱给其他同事带来困扰
:::

通过`git log` 找到需要变更的commit id 的上一个id

然后进行交互交互式修改

`git rebase -i <commit id>`


**实际操作**

```sh
λ git log --oneline -n5
17400a1 添加业务公共组件库
2b8fd66 config.js confil
45e8e62 删除submodalue
01a0be3 layout删减
6528c89 部分配置修改
```
然后执行`git rebase -i 2b8fd66`会弹出如下交互式操作界面（注释部分就是重要的修改api）

```sh
pick baada2d 添加业务公共组件库-rebase update

# Rebase 2b8fd66..baada2d onto 2b8fd66 (1 command)
#
# Commands:
# p, pick = use commit  正常使用
# r, reword = use commit, but edit the commit message  正常使用，但我们要修改message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit 正常使用,但是我们要把当前的commit合并到前面的commit上
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
~
~
~
```
这个时候，我们可以根据我们需要的修改的`commit`，进行修改，将对应的`commit id `前的 `pick` 改成`reword`，然后保存(`:wq!`)退出,看到如下结果

```sh
添加业务公共组件库

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Thu Aug 8 16:27:59 2019 +0800
#
# interactive rebase in progress; onto 2b8fd66
# Last command done (1 command done):
#    r 17400a1 添加业务公共组件库
# No commands remaining.
# You are currently editing a commit while rebasing branch 'issue1' on '2b8fd66'.
#
# Changes to be committed:
#       modified:   package-lock.json
#       modified:   package.json
#       modified:   src/App.vue
#       modified:   src/components/layout/Layout.vue
#       modified:   src/fetch/server/config.js
#       modified:   src/plugins/globalLang.js
```
这个时候，修改第一行就可以了，然后保存退出，你会看到如下
```sh
λ git rebase -i  2b8fd665b6a12
[detached HEAD baada2d] 添加业务公共组件库-rebase update
 Date: Thu Aug 8 16:27:59 2019 +0800
 6 files changed, 43 insertions(+), 31 deletions(-)
 rewrite src/fetch/server/config.js (60%)
Successfully rebased and updated refs/heads/issue1.
```
已经变更完了，可以使用 `git log` 看一下

```sh
λ git log --oneline -n5
baada2d 添加业务公共组件库-rebase update
2b8fd66 config.js confil
45e8e62 删除submodalue
01a0be3 layout删减
6528c89 部分配置修改
```
已经由原来的 “添加业务公共组件库” 变成了 “添加业务公共组件库-rebase update”

## 怎么把连续的多个commit整理成1个

同样是使用 git log 和 `git rebase -i 父节点commitID`

和上一个问题一样，这里简单距离说，执行rebase之后看到如下

```sh
pick baada2d 添加业务公共组件库
pick abcda0d test2
pick daada4d tea3

# Rebase 2b8fd66..baada2d onto 2b8fd66 (4 command)
#
# Commands:
# p, pick = use commit  正常使用
# r, reword = use commit, but edit the commit message  正常使用，但我们要修改message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit 正常使用,但是我们要把当前的commit合并到前面的commit上
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```
接着你可以改了 `pick` 为 `squash` 可以写简写`s` 意思我做了中文描述 **正常使用,但是我们要把当前的commit合并到前面的commit上** 
```sh
pick baada2d 添加业务公共组件库
s abcda0d test2
s daada4d tea3
```
然后保存退出，回到写commit message 的界面，写完保存退出，打工告成，同样请勿去公共分支随意操作变基（rebase）动作

## 怎么把间隔的几个commit整理成1个

和连续的是同样的操作，不同的是，看到`rebase`的交互界面的时候，将需要合并的commit记录，移动到一起，然后向前合并

## 怎么比较暂存区和HEAD之间的差异
```sh
git diff --cached
```
## 怎么比较工作区和暂存区之间的差异

假定：HEAD、暂存区、工作区中的readme.md文件内容均不相同。
`git diff HEAD -- readme.md `# 工作区 <===> HEAD
`git diff -- readme.md` # 工作区 <===> 暂存区
`git diff --cached -- readme.md` # 暂存区 <===> HEAD

## 怎么让暂存区回复成HEAD一样

`git reset HEAD` 取消所有的暂存区文件 暂存区就没有任何变更的文件（恢复暂存区和head一致）

`git reset ` 常用参数

`--soft` 这个只是把 `HEAD` 指向的 `commit` 恢复到你指定的 `commit`，暂存区 工作区不变

`--hard` 这个是 把 `HEAD`， 暂存区， 工作区 都修改为 你指定的 `commit` 的时候的文件状态

`--mixed` 这个是不加时候的默认参数，把 `HEAD`，暂存区 修改为 你指定的 `commit` 的时候的文件状态，工作区保持不变

## 怎么让工作区文件回复和暂存区一样

工作区恢复成暂存区：`git checkout`

## 怎么取消暂存区的文件修改

```sh
git reset HEAD <file name>
```

## 正确的删除文件办法

`rm readme `删除暂存区的readme
`git rm readme` 删除工作区的readme

其实直接删掉，不去做 `git rm` 直接走提交流程也是可以的

## 开发中临时加塞紧急任务

`git stash `把当前工作区的内容放入暂存区
`git stash pop` 把暂存区的内容恢复到工作区，且删除
`git stash apply`把暂存区的内容恢复到工作区，且保留

## 怎么指定不需要Git管理的文件

将文件放在忽略`git`的忽略文件 `.gitignore` 这个文件是可以写通配符

例如

```sh
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
```

注意文件和文件夹的处理例如：
```sh
# 如果有同名文件和文件夹

#忽略文件夹和文件
doc 

#忽略文件夹，不忽略文件
doc/ 

#如果doc和doc/同时存在，但要管理doc文件夹，忽略doc文件

doc
!doc/*

```

## git大小写敏感问题

开发经常会遇到这样的问题，写代码时候发现有个文件没注意大小写，于是重命名了该文件，发现git没有识别这个更改，不能提交

查看配置 `git config --get core.ignorecase`

发现默认是不区分大小的，因此当你修改了文件名的大小写后，git并不会认为你有修改

运行命令 `git config --system core.ignorecase false` 配置 `git` 对文件名大小写敏感

但是如果是团队人员的话，如果需要改，请全部在本地进行开启

或者删除文件，改名后再添加到git仓库，让其他同事全部更新下来