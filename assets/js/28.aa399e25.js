(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{543:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),t("p",[s._v("我们常常在代码发版时,使用git 创建一个tag ,这样一个不可修改的历史代码版本就像被我们封存起来一样,不论是运维发布拉取,或者以后的代码版本管理,都是十分方便的。")]),s._v(" "),t("p",[t("strong",[s._v("git 下打标签其实有2种情况")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("轻量级的：它其实是一个独立的分支,或者说是一个不可变的分支.指向特定提交对象的引用")]),s._v(" "),t("p",[s._v("带附注的：实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证,电子邮件地址和日期，一般我们都建议使用含附注型的标签，以便保留相关信息\n所以我们推荐使用第二种标签形式")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("keyid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -F "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("object"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("…​\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--contains "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--no-contains "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--points-at "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("object"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --no-column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--create-reflog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--sort"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("no-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("merged "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("…​"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -v "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("…​\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"常用速查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用速查"}},[s._v("#")]),s._v(" 常用速查")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("// 查看标签,可加上参数-l"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("列表形式列出） -n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("附加说明"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-l -n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n// 查看符合检索条件的标签 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".*.* \n// 查看对应标签状态 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0 \n// 创建轻量级的标签"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("本地"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0-light \n// 创建带附注的标签"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("推荐"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0 -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这是备注信息"')]),s._v(" \n// 针对特定commit版本SHA创建标签 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0 0c3b62d -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这是备注信息"')]),s._v(" \n// 删除标签"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("本地"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0 \n// 将本地所有标签发布到远程仓库\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags \n// 指定版本发送 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0 \n// 删除远程仓库对应标签（Git版本 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" V1.7.0）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0 \n// 旧版本Git \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/1.0.0\n// 获取远程标签\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin tag "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"标签名称"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h2",{attrs:{id:"创建标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建标签"}},[s._v("#")]),s._v(" 创建标签")]),s._v(" "),t("p",[s._v("在Git中打标签非常简单，首先，切换到需要打标签的分支上：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n* dev\n  master\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后，敲命令"),t("code",[s._v("git tag")]),s._v("下面三种方式创建")]),s._v(" "),t("p",[s._v("1、创建轻量标签\n轻量标签指向一个发行版的分支，其只是一个像某commit的引用，不存储名称时间戳及标签说明等信息。定义方法如下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("版本号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("-light\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2、创建带附注标签\n相对于轻量标签，附注标签是一个独立的标签对象，包含了名称时间戳以及标签备注等信息，同时指向对应的commit。定义方法如下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("版本号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<备注信息>"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3、同时我们也可以像特定的commit添加标签，使用该commit对应的SHA值即可")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("版本号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHA值"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<备注信息>"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v('比如 git tag -a v1.0 0c3b62d -m "Release Edition v1.0" 就是为SHA为0c3b62d的这次提交打了1.0发行版的tag')]),s._v(" "),t("h2",{attrs:{id:"查看标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看标签"}},[s._v("#")]),s._v(" 查看标签")]),s._v(" "),t("p",[s._v("可以用命令"),t("code",[s._v("git tag")]),s._v("查看所有标签：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\nv1.0\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("默认标签是打在最新提交的commit上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？")]),s._v(" "),t("p",[s._v("方法是找到历史提交的commit id，然后打上就可以了：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n12a631b "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, tag: v1.0, origin/master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" merged bug fix "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n4c805e2 fix bug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\ne1e9c68 merge with no-ff\nf52c633 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\ncf810e4 conflict fixed\n5dc6824 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" simple\n14096d0 AND simple\nb17d20e branch "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nd46f35e remove test.txt\nb84166e "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n519219b "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tracks changes\ne43a48b understand how stage works\n1094adb append GPL\ne475afc "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" distributed\neaadf4e wrote a readme "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("比方说要对"),t("code",[s._v("add merge")]),s._v("这次提交打标签，它对应的commit id是"),t("code",[s._v("f52c633")]),s._v("，敲入命令：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v0.9 f52c633\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("再用命令"),t("code",[s._v("git tag")]),s._v("查看标签：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\nv0.9\nv1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("注意，标签不是按时间顺序列出，而是按字母排序的。可以用"),t("code",[s._v("git show")]),s._v("查看标签信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v0.9\ncommit f52c63349bc3c1593499807e5c8e972b82c8f286 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tag: v0.9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: xxx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("xxx@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":56:54 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/readme.txt b/readme.txt\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("可以看到，"),t("code",[s._v("v0.9")]),s._v("确实打在"),t("code",[s._v("add merge")]),s._v("这次提交上。")]),s._v(" "),t("p",[s._v("还可以创建带有说明的标签，用"),t("code",[s._v("-a")]),s._v("指定标签名，"),t("code",[s._v("-m")]),s._v("指定说明文字：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v0.1 -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version 0.1 released"')]),s._v(" 1094adb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("用命令"),t("code",[s._v("git show")]),s._v("可以看到说明文字：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v0.1\ntag v0.1\nTagger: xxx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("xxx@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":48:43 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n\nversion "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" released\n\ncommit 1094adb7b9b3807259d8cb349e7df1d4d6477073 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tag: v0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: xxx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("xxx@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":06:15 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n\n    append GPL\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/readme.txt b/readme.txt\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"删除标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除标签"}},[s._v("#")]),s._v(" 删除标签")]),s._v(" "),t("p",[s._v("如果标签打错了，也可以删除：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v0.1\nDeleted tag "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v0.1'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was f15b0dd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。")]),s._v(" "),t("h2",{attrs:{id:"推送标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送标签"}},[s._v("#")]),s._v(" 推送标签")]),s._v(" "),t("p",[s._v("如果要推送某个标签到远程，使用命令"),t("code",[s._v("git push origin")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo github.com:michaelliao/learngit.git\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v1.0 -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v1.0\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("或者，一次性推送全部尚未推送到远程的本地标签：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo github.com:michaelliao/learngit.git\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v0.9 -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v0.9\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"删除远程标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除远程标签"}},[s._v("#")]),s._v(" 删除远程标签")]),s._v(" "),t("p",[s._v("如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v0.9\nDeleted tag "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v0.9'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was f52c633"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后，从远程删除。删除命令也是push，但是格式如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v0.9\nTo github.com:michaelliao/learngit.git\n - "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deleted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v0.9\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("要看看是否真的从远程库删除了标签，可以登陆GitHub查看。")]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("ul",[t("li",[s._v("命令"),t("code",[s._v("git tag")]),s._v("用于新建一个标签，默认为"),t("code",[s._v("HEAD")]),s._v("，也可以指定一个commit id；")]),s._v(" "),t("li",[s._v("命令"),t("code",[s._v('git tag -a -m "blablabla..."')]),s._v("可以指定标签信息；")]),s._v(" "),t("li",[s._v("命令"),t("code",[s._v("git tag")]),s._v("可以查看所有标签")]),s._v(" "),t("li",[s._v("命令"),t("code",[s._v("git push origin")]),s._v("可以推送一个本地标签；")]),s._v(" "),t("li",[s._v("命令"),t("code",[s._v("git push origin --tags")]),s._v("可以推送全部未推送过的本地标签；")]),s._v(" "),t("li",[s._v("命令"),t("code",[s._v("git tag -d")]),s._v("可以删除一个本地标签；")]),s._v(" "),t("li",[s._v("命令"),t("code",[s._v("git push origin :refs/tags/")]),s._v("可以删除一个远程标签。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);