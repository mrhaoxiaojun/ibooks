## 创建与合并分支

我们通过查看历史命令`git log --graph` 或者 `gitk` 或者其他图形化界面都可以看到，其实每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。HEAD严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，HEAD指向的就是当前分支。

### 常用命令

查看分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`或者`git switch <name>`

创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`

合并某分支到当前分支：`git merge <name> ` 

删除分支：`git branch -d <name>`

### HEAD 指向
一开始的时候，`master`分支是一条线，`Git`用`master`指向最新的提交，再用`HEAD`指向`master`，就能确定当前分支，以及当前分支的提交点：

![git-br-initial](./imgs/git-br-initial.png)

每次提交，`master`分支都会向前移动一步，这样，随着你不断提交，`master`分支的线也越来越长。

当我们创建新的分支，例如dev时，`Git`新建了一个指针叫dev，指向`master`相同的提交，再把`HEAD`指向dev，就表示当前分支在dev上：

![git-br-create](./imgs/git-br-create.png)

你看，`Git`创建一个分支很快，因为除了增加一个`dev`指针，改改`HEAD`的指向，工作区的文件都没有任何变化！

不过，从现在开始，对工作区的修改和提交就是针对`dev`分支了，比如新提交一次后，`dev`指针往前移动一步，而`master`指针不变：

![git-br-dev-fd](./imgs/git-br-dev-fd.png)

假如我们在`dev`上的工作完成了，就可以把`dev`合并到`master`上。`Git`怎么合并呢？最简单的方法，就是直接把`master`指向`dev`的当前提交，就完成了合并：

![git-br-ff-merge](./imgs/git-br-ff-merge.png)

所以Git合并分支也很快！就改改指针，工作区内容也不变！

合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，我们就剩下了一条`master`分支：

### 实践
接下来我们来做一个闭合的操作

首先，我们创建`dev`分支，然后切换到`dev`分支：

```sh
$ git checkout -b dev
Switched to a new branch 'dev'
```
`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令

然后，用git branch命令查看当前分支：
```sh
$ git branch
* dev
  master
```
git branch命令会列出所有分支，当前分支前面会标一个*号。

然后，我们就可以在dev分支上正常提交，比如对readme.txt做个修改，加上一行然后提交：

```sh
$ git add readme.txt 
$ git commit -m "branch test"
[dev b17d20e] branch test
 1 file changed, 1 insertion(+)
```
现在，dev分支的工作完成，我们就可以切换回master分支：

```sh
$ git checkout master
Switched to branch 'master'
```
现在，我们把dev分支的工作成果合并到master分支上：

```sh
$ git merge dev
Updating d46f35e..b17d20e
Fast-forward
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
 ```
`git merge`命令用于合并指定分支到当前分支。合并后，再查看readme.txt的内容，就可以看到，和`dev`分支的最新提交是完全一样的。

注意到上面的`Fast-forward`信息，`Git`告诉我们，这次合并是“快进模式”，也就是直接把`master`指向`dev`的当前提交，所以合并速度非常快。

合并完成后，就可以放心地删除dev分支了：
```sh
$ git branch -d dev
Deleted branch dev (was b17d20e).
```
删除后，查看`branch`，就只剩下master分支了

我们可以看一下gitk图形化界面张什么样,图像化界面可以让我们更清晰直观的看到它所有分支信息以及时间线的情况

![gitk](./imgs/gitk.jpg)

## 解决冲突
人生不如意之事十之八九,我们组内开发，大家避免不了修改了同一个文件而发生冲突的，或者是自己与自己在不同分支并行开发，这是正常的

举例：
新建一个feature1分支
```sh
git checkout -b feature1
```
然后修改其readme文件->`add`->`commit`（略）

然后`checkout` 到 `master`分支

```sh
$ git switch master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
```
Git还会自动提示我们当前`master`分支比远程的`master`分支要超前1个提交。

在`master`分支同样 修改其readme文件->`add`->`commit`（略）

```sh
$ git merge feature1
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
```
果然冲突了！Git告诉我们，readme.txt文件存在冲突，必须手动解决冲突后再提交。git status也可以告诉我们冲突的文件
```sh
$ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

	both modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
我们可以直接查看readme.txt的内容：

```sh
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
<<<<<<< HEAD
Creating a new branch is quick & simple.
=======
Creating a new branch is quick AND simple.
>>>>>>> feature1
```
Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容（上半部分为当前分支修改，下半部分为传入更改） 根据需要进行修改继续提交流程即可

提价后可以，`git log --graph -n5`看历史

:::tip
以上为例子，但实际开发中，`master`通常只有项目负责人有权限操作，且代码与线上代码保持一致，

所以我们分支合入`master`前，请先将`master`（活其他公共父分支）更新至本地，并在自己的分支上进行`merge`操作，在个人分支进行处理冲突后，进行提交，再外向提交合并请求到需要合并的分支，借助`gitlab`等代码托管平台由其他同事或负责人进行`codeRview`后，进行合并处理
:::

## 分支管理策略

### merge 策略

:::tip

合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。
:::

通常，合并分支时，如果可能，`Git`会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息。

如果要强制禁用`Fast forward`模式，`Git`就会在`merge`时生成一个新的`commit`，这样，从分支历史上就可以看出分支信息。

下面我们实战一下`--no-ff`方式的git `merge`：

如何弄出来，`merge` 同上

准备合并dev分支，请注意`--no-ff`参数，表示禁用Fast forward：
```sh
$ git merge --no-ff -m "merge with no-ff" dev
Merge made by the 'recursive' strategy.
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
```
因为本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。


### 分支策略
在实际开发中，我们应该按照几个基本原则进行分支管理：

首先，master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

那在哪干活呢？干活都在dev分支上，也就是说，dev分支是不稳定的，到某个时候，比如1.0版本发布时，再把dev分支合并到master上，在master分支发布1.0版本；

你和你的小伙伴们每个人都在dev分支上干活，每个人都有自己的分支，时不时地往dev分支上合并就可以了。

所以，团队合作的分支看起来就像这样：

![git-br-policy](./imgs/git-br-policy.png)

### Bug 分支
软件开发中，`bug`就像家常便饭一样。有了`bug`就需要修复，在Git中，由于分支是如此的强大，所以，每个`bug`都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。

当你接到一个修复一个代号01的`bug`的任务时，很自然地，你想创建一个分支`bug-01`来修复它，但是，等等，当前正在`dev`上进行的工作还没有提交：

并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？

幸好，`Git`还提供了一个`stash`功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：

```sh
$ git stash
Saved working directory and index state WIP on dev: f52c633 add merge
```
现在，用`git status`查看工作区，就是干净的，现在可以切换分支或者创建bug分支了

比如我要在`master`分支打补丁，那就要`git checout master` 然后 `git checkout -b bug-01` 使用完分支做了`bug`需求上线后，你可以选择删了`bug`分支，也可以预留后期再说

good，我们改完bug，后回到dev分支继续干活 `git checkut dev`

```sh
$ git status
On branch dev
nothing to commit, working tree clean
```
工作区是干净的，刚才的工作现场存到哪去了？用`git stash list`命令看看：

```sh
$ git stash list
stash@{0}: WIP on dev: f52c633 add merge
```
工作现场还在，`Git`把`stash`内容存在某个地方了，但是需要恢复一下，有两个办法：

* 一是用`git stash apply`恢复，但是恢复后，`stash`内容并不删除(如果有反复需要使用的场景可以使用)，你需要用`git stash drop`来删除；

* 另一种方式是用`git stash pop`（通常我们用这个），恢复的同时把stash内容也删了

```sh
$ git stash pop
On branch dev
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   hello.py

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.txt

Dropped refs/stash@{0} (5d677e2ee266f39ea296182fb2354265b91b3b2a)
```
再用`git stash list`查看，就看不到任何stash内容了：

你可以多次stash，恢复的时候，先用`git stash list`查看，然后恢复指定的stash，用命令：

```sh
$ git stash apply stash@{0}

```

在`master`分支上修复了`bug`后，我们要想一想，`dev`分支是早期从`master`分支分出来的，所以，这个`bug`其实在当前dev分支上也存在。

那怎么在dev分支上修复同样的`bug`？重复操作一次，提交不就行了？

这个太傻了，指定不行

我们可以吧`master`分支的代码，更新到`dev`分支一下

```sh
git pull origin master
# 相当于master被merge到了dev
```
但如果我不是把整个`master`分支`merge`过来呢

为了方便操作，`Git`专门提供了一个cherry-pick命令，让我们能复制一个特定的提交到当前分支（真是够牛，瞌睡了送枕头）：

```sh
$ git branch
* dev
  master
$ git cherry-pick 4c805e2
[master 1d4b803] fix bug 101
 1 file changed, 1 insertion(+), 1 deletion(-)
```
`4c805e2` 你需要`git log`去查一下那个需要合并过来的`commit id`

不过我通常使用`merge`处理

### 删除分支

普通删除 `git branch -d <name>`

```sh
$ git branch -d bug-01
error: The branch 'bug-01' is not fully merged.
If you are sure you want to delete it, run 'git branch -D bug-01'.
```
如上代码，发现有时候们删除不了，但是Git友情提醒，bug-01分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用大写的-D参数。

```sh
$ git branch -D bug-01
Deleted branch bug-01 (was 287773e).
```
完美

## 多人协作
当你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin。

要查看远程库的信息，用git remote：
```sh
$ git remote
origin
```
或者，用git remote -v显示更详细的信息：

```sh
$ git remote -v
origin  git@github.com:michaelliao/learngit.git (fetch)
origin  git@github.com:michaelliao/learngit.git (push)
```
上面显示了可以抓取和推送的origin的地址。如果没有推送权限，就看不到push的地址。

推送分支和抓取分支的命令还有产生冲突的命令和演示，文中都有讲解，这里就直接讲，多人协作流程和遇到冲突怎么解决了

实际开发中多人协作的工作模式通常是这样：

1. 首先，可以试图用`git push origin <branch-name>`推送自己的修改；

2. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；

3. 如果合并有冲突，则解决冲突，并在本地提交；

4. 没有冲突或者解决掉冲突后，再用`git push origin <branch-name>`推送就能成功！

如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream-to <branch-name> origin/<branch-name>`。

这就是多人协作的工作模式，每天都要这么去做，一旦熟悉很简单，但它同样很重要，同样再次说明，冲突在自己的分支解决


### rebase
Git有一种称为rebase的操作，有人把它翻译成“变基”。

git rebase能够将分叉的分支重新合并，下面主要介绍它的两个使用场景：

#### 场景一：本地与远端同一分支提交历史不一致

**方式一**

多个人在同一个分支上协作时，出现冲突是很正常的，比如现在有一个项目由我和A一同开发。

我在修复了一个bug以后准备提交

```sh
HowiedeiMac:ganlin howie$ git add models/paper.go
HowiedeiMac:ganlin howie$ git commit -m 'fix a bug'
[master 8b76654] fix a bug
 1 file changed, 3 insertions(+), 3 deletions(-)
```
现在准备推送到远端

```sh
HowiedeiMac:ganlin howie$ git push origin master
To https://gitee.com/greenhn/ganlin.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://gitee.com/greenhn/ganlin.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

`push`失败了，说明A在我之前已经提交了，我本地master分支的提交历史已经落后远端了，需要先`pull`一下，与远端同步后才能`push`

```sh
HowiedeiMac:ganlin howie$ git pull
remote: Enumerating objects: 14, done.
remote: Counting objects: 100% (14/14), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 8 (delta 6), reused 0 (delta 0)
Unpacking objects: 100% (8/8), done.
From https://gitee.com/greenhn/ganlin
   a1bc60a..b91f711  master     -> origin/master
Merge made by the 'recursive' strategy.
 controllers/deal_local_data.go | 14 +++++++++++---
 controllers/rtu_interface.go   |  8 ++++----
 models/instrument_type.go      |  3 +++
 models/rtu_interface.go        |  3 +++
 4 files changed, 21 insertions(+), 7 deletions(-)
 ```

`pull`成功，现在使用`git log`看下一提交历史：

```sh
HowiedeiMac:ganlin howie$ git log --oneline --graph
*   f63ecbf (HEAD -> master) Merge branch 'master' of https://gitee.com/greenhn/ganlin
|\  
| * b91f711 (origin/master, origin/HEAD) 修正bug，优化内置通道配置
* | 8b76654 fix a bug
|/  
* a1bc60a 完善日报接口
* 9f73b5e 增加内置通道设置功能
* a0d464e ...
```

竟然分叉了！由于我本地master的提交历史和远端的master分支的提交历史不一致，所以git为我进行了自动合并，然后生成了一个新的提交历史（f63ecbf Merge branch 'master' of）

对于部分强迫症来说这个不能接受的，不想看到分叉。

这个时候用`git rebase`就可以解决

```sh
HowiedeiMac:ganlin howie$ git rebase
First, rewinding head to replay your work on top of it...
Applying: fix a bug
```

现在再查看一下提交历史：

```sh
HowiedeiMac:ganlin howie$ git log --oneline --graph
* 2e2b995 (HEAD -> master) fix a bug
* b91f711 (origin/master, origin/HEAD) 修正bug，优化内置通道配置
* a1bc60a 完善日报接口
* 9f73b5e 增加内置通道设置功能
* a0d464e ...
```

完美解决，现在再`push`推送到远端：

```sh
HowiedeiMac:ganlin howie$ git push origin master
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 394 bytes | 394.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0)
remote: Powered By Gitee.com
To https://gitee.com/greenhn/ganlin.git
   b91f711..2e2b995  master -> master
```

再次查看提交历史

```sh
HowiedeiMac:ganlin howie$ git lg --oneline --graph
* 2e2b995 (HEAD -> master, origin/master, origin/HEAD) fix a bug
* b91f711 修正bug，优化内置通道配置
* a1bc60a 完善日报接口
* 9f73b5e 增加内置通道设置功能
* a0d464e ...
```

现在远端`master`，远端`head`，本地`master`全部统一，问题解决。

**方式二**

直接执行：
`git pull --rebase`

效果与上面是一致的，推荐使用

#### 场景二：不同分支之间的合并
由于老板突发奇想，要求开发一个新的功能。

先创建一个分支用于开发新功能：

```sh
HowiedeiMac:hello howie$ git checkout -b feature
Switched to a new branch 'feature'
HowiedeiMac:hello howie$ git branch
* feature
  master
```
接下来修改newFunc.go，增加新的功能,并且保存提交

`vim newFunc.go`

`git add newFunc.go`

`git commit -m 'add new func'`

现在查看一下提交

```sh
HowiedeiMac:hello howie$ git log --oneline --graph
* 4f58ab8 (HEAD -> feature) add new func
* 94c134b (master) init base

HowiedeiMac:hello howie$ git branch
* feature
  master
```

现在新功能开发完毕，需要将它合并的主分支中。

先尝试通过`merge`合并：

首先切换到`master`分支

```sh
HowiedeiMac:hello howie$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
```
直接合并feature分支

```sh
HowiedeiMac:hello howie$ git merge feature
Auto-merging newFunc.go
CONFLICT (content): Merge conflict in newFunc.go
Automatic merge failed; fix conflicts and then commit the result.
```

失败了，说明我两个分支之前的版本已经不同步了，需要手动合并冲突，再提交：

先查看冲突文件：`git status`

```sh
HowiedeiMac:hello howie$ git status
On branch master
Your branch is ahead of 'origin/master' by 7 commits.
  (use "git push" to publish your local commits)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   newFunc.go
```

打开文件，进行修改

原文件：
```js
func NewFunc() {
<<<<<<< HEAD
=======
    fmt.Println("add new func")
>>>>>>> feature
}
修改后：

func NewFunc() {
    fmt.Println("add new func")
}
```
现在通过add添加，然后commit提交

```sh
HowiedeiMac:hello howie$ git add newFunc.go

HowiedeiMac:hello howie$ git commit -m 'merge master and feature'
[master 562ec58] merge master and feature
```

现在在查看一下分支提交历史：

```sh
HowiedeiMac:hello howie$ git log --oneline --graph
*   562ec58 (HEAD -> master) merge master and feature
|\  
| * 4f58ab8 (feature) add new func
* | 0e80f97 do something
|/  
* 94c134b init base
```
虽然合并成功，但是Master已经保存了合并历史，出现开叉了！对于强迫症患者来说肯定是不能接受的。

通过rebase合并分支：

现在将版本退回到合并前,也就是回退一个版本

`git reset --hard head^`

退回去了，现在是位于`master`分支的`init base`提交这里。

先切换回`feature`分支：

在feature分支上执行: `git rebase master`

这句命令的意识是：以`master`为基础，将`feature`分支上的修改增加到`master`分支上，并生成新的版本。

```sh
HowiedeiMac:hello howie$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: add new func
Using index info to reconstruct a base tree...
M       newFunc.go
Falling back to patching base and 3-way merge...
Auto-merging newFunc.go
CONFLICT (content): Merge conflict in newFunc.go
error: Failed to merge in the changes.
Patch failed at 0001 add new func
hint: Use 'git am --show-current-patch' to see the failed patch

Resolve all conflicts manually, mark them as resolved with
"git add/rm <conflicted_files>", then run "git rebase --continue".
You can instead skip this commit: run "git rebase --skip".
To abort and get back to the state before "git rebase", run "git rebase --abort".
```


失败了，原因很简单，两个分支修改个同一个文件，产生了冲突。所以先需要解决冲突：

打开冲突的文件，解决冲突

原文件：
```js
func NewFunc() {
<<<<<<< HEAD
=======
    fmt.Println("add new func")
>>>>>>> add new func
}
修改后：

func NewFunc() {
    fmt.Println("add new func")
}
```
现在通过`add`添加

现在是重点，之前的`rebase`其实只是完成了一半，由于出现冲突而终止，现在冲突解决，可以通过`git rebase —continue`继续完成之前的`rebase`操作。

```sh
HowiedeiMac:hello howie$ git rebase --continue
Applying: add new func
```
`rebase`完成，再查看一下提交历史：

```sh
HowiedeiMac:hello howie$ git log --oneline --graph
* b2593e6 (HEAD -> feature) add new func
* 0e80f97 (master) do something
* 94c134b init base
```
提交记录已经是一条完美的直线。现在切换到主分支master，将feather分支上的提交合并过来。

`git checkout master`

`git merge feature`

```sh
HowiedeiMac:hello howie$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 7 commits.
  (use "git push" to publish your local commits)


HowiedeiMac:hello howie$ git merge feature
Updating 0e80f97..b2593e6
Fast-forward
 newFunc.go | 1 +
 1 file changed, 1 insertion(+)
```

再次查看一下提交历史：

```sh
HowiedeiMac:hello howie$ git log --oneline --graph
* b2593e6 (HEAD -> master, feature) add new func
* 0e80f97 do something
* 94c134b init base
```
问题解决，master上也是一条直线了。

最后你可能希望删除掉feature分支：

```sh
HowiedeiMac:hello howie$ git branch -d feature
Deleted branch feature (was b2593e6).
```