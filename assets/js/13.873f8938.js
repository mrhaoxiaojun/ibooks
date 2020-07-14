(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{498:function(t,s,a){t.exports=a.p+"assets/img/git.d657dd94.jpg"},535:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"git-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-简介"}},[t._v("#")]),t._v(" Git 简介")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[t._v("本教程，是小编根据实战经验，借以"),n("a",{attrs:{href:"https://www.liaoxuefeng.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰老师"),n("OutboundLink")],1),t._v("的官方开源博客部分内容为底稿,重新做了增删改，目的为了积累沉淀经验，以最简化的学习教程，和最简化的分享给需要的人")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(498),alt:"git"}})]),t._v(" "),n("p",[t._v("毋庸置疑，Git 是目前最流行、最好用的版本控制系统，在它的基础之上，催生出了 GitHub 和 GitLab 这两个当前最流行的代码托管平台。")]),t._v(" "),n("p",[t._v("很多人可能会问，Git 不就那几个简单的命令吗？有什么难的？还真不是这样，Git 以及 GitHub、GitLab 这些工具虽然上手容易，但要真正在平时的项目协作中用好，还真不像你想的那么简单。")]),t._v(" "),n("p",[t._v("如果不理解 Git 背后的工作原理，当你遇到各种奇怪的命令报错、各种复杂的分支管理场景以及代码冲突时，你往往会束手无策")]),t._v(" "),n("p",[t._v("同时，如果没有掌握使用 GitHub 和 GitLab 进行高效协作的精髓，项目成员就很容易陷入低效和重复劳动的困境，而通过对这些工具的高效使用并结合 DevOps、CI/CD 这些先进理念，团队的生产力和协作效率都可以获得大幅提升")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 官网"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"git-的诞生"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-的诞生"}},[t._v("#")]),t._v(" Git 的诞生")]),t._v(" "),n("p",[t._v("很多人都知道，Linus在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。")]),t._v(" "),n("p",[t._v("Linus虽然创建了Linux，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？")]),t._v(" "),n("p",[t._v("在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过"),n("strong",[t._v("手工方式合并代码")]),t._v("！")]),t._v(" "),n("p",[t._v("为啥不用svn等免费软件，人家嫌弃他们集中式管理速度慢，必须联网...")]),t._v(" "),n("p",[t._v("BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。")]),t._v(" "),n("p",[t._v("Linux社区牛人聚集，开发Samba的Andrew试图破解BitKeeper的协议，人家发现了，于是BitMover公司怒了，要收回Linux社区的免费使用权。")]),t._v(" "),n("p",[t._v("作者没有说好话晚会免费使用权，直接自己用c写了一个分布式版本管理系统，这就是git")]),t._v(" "),n("p",[t._v("牛人就是牛人，一撂蹶子就是干，尿性")]),t._v(" "),n("h2",{attrs:{id:"集中式vs分布式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集中式vs分布式"}},[t._v("#")]),t._v(" 集中式vs分布式")]),t._v(" "),n("p",[t._v("先说集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。")]),t._v(" "),n("p",[t._v("集中式版本控制系统最大的毛病就是必须联网才能工作")]),t._v(" "),n("p",[t._v("和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。")]),t._v(" "),n("p",[t._v("在实际使用分布式版本控制系统的时候，其实很少在两人之间的电脑上推送版本库的修改，因为可能你们俩不在一个局域网内，两台电脑互相访问不了，也可能今天你的同事病了，他的电脑压根没有开机。因此，分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。")]),t._v(" "),n("p",[t._v("Git的优势不单是不必联网这么简单，后面我们还会看到Git极其强大的分支管理，把SVN等远远抛在了后面。")]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("p",[t._v("不管你再linux还是mac OS 还是windows终端上，简单使用的方案就是可以从Git官网直接"),n("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装程序"),n("OutboundLink")],1),t._v("，然后按默认选项安装即可。")]),t._v(" "),n("p",[t._v("属于傻瓜式安装，一般什么问题")]),t._v(" "),n("p",[t._v("安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！")]),t._v(" "),n("p",[t._v("检查一下版本")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.12")]),t._v(".2.windows.1\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("安装完成后，还需要最后一步设置，在命令行输入：")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@example.com"')]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("因为Git是分布式版本控制系统，所以，每个机器都必须自报家门，方便大家提交代码时使用")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[t._v("注意"),n("code",[t._v("git config")]),t._v("命令的"),n("code",[t._v("--global")]),t._v("参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以使用"),n("code",[t._v("--local")]),t._v("对某个仓库指定不同的用户名和Email地址。 git是就近匹配原则")])]),t._v(" "),n("h2",{attrs:{id:"版本库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本库"}},[t._v("#")]),t._v(" 版本库")]),t._v(" "),n("p",[t._v("什么是版本库呢？版本库又名仓库，英文名repository，你可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。")]),t._v(" "),n("p",[t._v("安装官方的命令行指令又以下三种方式")]),t._v(" "),n("h3",{attrs:{id:"创建新版本库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建新版本库"}},[t._v("#")]),t._v(" 创建新版本库")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone http://xx.xxx.xxx.xx/fe-project-demo/test.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" README.md\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README.md\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add README"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h3",{attrs:{id:"已存在的文件夹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#已存在的文件夹"}},[t._v("#")]),t._v(" 已存在的文件夹")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" existing_folder\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin http://xx.xxx.xxx.xx/fe-project-demo/test.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial commit"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("通过"),n("code",[t._v("git init")]),t._v("命令把这个目录变成Git可以管理的仓库")]),t._v(" "),n("p",[t._v("瞬间Git就把仓库建好了，而且告诉你是一个空的仓库（empty Git repository），细心的读者可以发现当前目录下多了一个.git的目录，这个目录是Git来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把Git仓库给破坏了。")]),t._v(" "),n("p",[t._v("如果你没有看到.git目录，那是因为这个目录默认是隐藏的，用"),n("code",[t._v("ls -ah")]),t._v("命令就可以看见。")]),t._v(" "),n("h3",{attrs:{id:"已存在的-git-版本库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#已存在的-git-版本库"}},[t._v("#")]),t._v(" 已存在的 Git 版本库")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" existing_repo\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin http://xx.xxx.xxx.xx/fe-project-demo/test.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin --all\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin --tags\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h2",{attrs:{id:"简单介绍几个常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单介绍几个常用命令"}},[t._v("#")]),t._v(" 简单介绍几个常用命令")]),t._v(" "),n("p",[n("strong",[t._v("清屏")])]),t._v(" "),n("p",[t._v("Mac: "),n("code",[t._v("clear")])]),t._v(" "),n("p",[t._v("Windows: "),n("code",[t._v("cls")])]),t._v(" "),n("p",[n("strong",[t._v("展示文件夹内的内容")])]),t._v(" "),n("p",[t._v("Mac: "),n("code",[t._v("ls -al")])]),t._v(" "),n("p",[t._v("Windows: "),n("code",[t._v("dir")])]),t._v(" "),n("p",[n("strong",[t._v("展示文件内容（比如展示package.json的内容）")])]),t._v(" "),n("p",[t._v("Mac: "),n("code",[t._v("vi package.json")])]),t._v(" "),n("p",[t._v("Windows: "),n("code",[t._v("more package.json")])]),t._v(" "),n("p",[n("code",[t._v("cat /root/a.txt")]),t._v(" 查看某个文件")]),t._v(" "),n("p",[n("code",[t._v("pwd")]),t._v(" 查看当前目录")]),t._v(" "),n("p",[n("code",[t._v("vim /root/a.txt")]),t._v(" 编辑某个文件")]),t._v(" "),n("p",[n("code",[t._v("mv")]),t._v(" 移动某个文件")]),t._v(" "),n("p",[n("code",[t._v("cp")]),t._v(" 拷贝某个文件")]),t._v(" "),n("p",[n("code",[t._v("rm")]),t._v(" 删除某个文件")]),t._v(" "),n("p",[n("code",[t._v("echo")]),t._v(" 输出")])])}),[],!1,null,null,null);s.default=e.exports}}]);