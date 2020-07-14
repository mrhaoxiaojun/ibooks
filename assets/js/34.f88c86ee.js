(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{551:function(v,_,e){"use strict";e.r(_);var t=e(20),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"命令选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令选项"}},[v._v("#")]),v._v(" 命令选项")]),v._v(" "),e("p",[v._v("命令的选项有三种风格：")]),v._v(" "),e("ul",[e("li",[v._v('1 UNIX风格， 必须带一个 "-"')]),v._v(" "),e("li",[v._v('2 BSD风格 ， 不带 "-"')]),v._v(" "),e("li",[v._v('3 GNU风格 ， 带两个"-"')])]),v._v(" "),e("p",[v._v('tar命令的早期是支持BSD风格的，后期随着版本更新慢慢支持了UNIX风格，也就是你看到的现在的版本，为了让大家看到更多的选项格式，我在使用tar命令的时候没有带 "-"')]),v._v(" "),e("h2",{attrs:{id:"帮助命令（man、help、info）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令（man、help、info）"}},[v._v("#")]),v._v(" 帮助命令（man、help、info）")]),v._v(" "),e("ul",[e("li",[v._v("man 帮助")]),v._v(" "),e("li",[v._v("help 帮助")]),v._v(" "),e("li",[v._v("info 帮助")])]),v._v(" "),e("p",[e("strong",[v._v("为什么要学习帮助命令")])]),v._v(" "),e("ul",[e("li",[v._v("Linux 的基本操作⽅式是命令⾏")]),v._v(" "),e("li",[v._v("海量的命令不适合“死记硬背”")]),v._v(" "),e("li",[v._v("你要升级你的⼤脑")])]),v._v(" "),e("p",[e("strong",[v._v("man 帮助（manual缩写）")])]),v._v(" "),e("p",[v._v("举例：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("man ls 获取ls命令的帮助")])]),v._v(" "),e("li",[e("code",[v._v("man man 获取man命令的帮助，有很多重名的")])]),v._v(" "),e("li",[e("code",[v._v("man 7 man 获取man命令第7章的命令")])]),v._v(" "),e("li",[e("code",[v._v("man -a passwd 不清楚是passwd 是配置、文件还是命令等，可以用-a列出所有情况")])]),v._v(" "),e("li",[e("code",[v._v("man -1 passwd 即获取passwd命令的帮助")])])]),v._v(" "),e("p",[e("strong",[v._v("help 帮助")])]),v._v(" "),e("p",[v._v("shell 命令解释器自带的命令成为内部命令，其他的就是外部命令")]),v._v(" "),e("p",[v._v("如何区分内部、外部命令：\n举例：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("type cd -> cd is a shell builtin cd是内部命令")])]),v._v(" "),e("li",[e("code",[v._v("type ls -> ls is hashed (/bin/ls) ls则是外部命令")])])]),v._v(" "),e("p",[v._v("举例：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("help cd\t内部命令使用 help **")])]),v._v(" "),e("li",[e("code",[v._v("ls --help 外部命令使用 ** --help")])])]),v._v(" "),e("p",[e("strong",[v._v("info 命令")]),v._v("\ninfo帮助比help更详细，作为help的补充。但info都是英文的。")]),v._v(" "),e("h2",{attrs:{id:"文件名称命令（pwd）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件名称命令（pwd）"}},[v._v("#")]),v._v(" 文件名称命令（pwd）")]),v._v(" "),e("p",[v._v("pwd 显示当前的⽬录名称")]),v._v(" "),e("p",[v._v("pwd英文全称应该是Print Working Directory 意思就是说打印出来正在工作的文件夹")]),v._v(" "),e("h2",{attrs:{id:"文件查看命令（ls）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件查看命令（ls）"}},[v._v("#")]),v._v(" 文件查看命令（ls）")]),v._v(" "),e("p",[v._v("ls 命令可以列出当前目录的内容或指定目录")]),v._v(" "),e("p",[e("code",[v._v("ls [options] [files_or_dirs]")])]),v._v(" "),e("p",[e("strong",[v._v("常⽤参数：")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("-l ⻓格式显示⽂件")])]),v._v(" "),e("li",[e("code",[v._v("-a 显示隐藏⽂件")])]),v._v(" "),e("li",[e("code",[v._v("-r 逆序显示")])]),v._v(" "),e("li",[e("code",[v._v("-t 按照时间顺序显示")])]),v._v(" "),e("li",[e("code",[v._v("-R 递归显示")])]),v._v(" "),e("li",[e("code",[v._v("-ld 目录和符号链接信息")])]),v._v(" "),e("li",[e("code",[v._v("-S 按从大到小排序")])]),v._v(" "),e("li",[e("code",[v._v("-u 配合-t选项，显示并按atime从新到旧排序")])]),v._v(" "),e("li",[e("code",[v._v("-U 按目录存放顺序显示")])]),v._v(" "),e("li",[e("code",[v._v("-X 按文件后缀排序")])])]),v._v(" "),e("p",[e("strong",[v._v("举例：\tman ls\t显示ls的帮助")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ls\t显示当前的目录的文件，等同于ls .")])]),v._v(" "),e("li",[e("code",[v._v("ls / 显示根目录下的文件")])]),v._v(" "),e("li",[e("code",[v._v("ls /root /tmp 显示多个目录下的文件（/root及/tmp目录下）")])]),v._v(" "),e("li",[e("code",[v._v("ls -l 显示当前目录下的长格式文件（包含：权限、文件个数、文件创建的用户、权限组、大小、最后更新时间，以及文件名）")])]),v._v(" "),e("li",[e("code",[v._v("ls -a\t显示所有文件，包含隐藏文件(以.开头的就是隐藏文件)")])]),v._v(" "),e("li",[e("code",[v._v("ls -r 文件逆向排序（默认按照文件名首字母）")])]),v._v(" "),e("li",[e("code",[v._v("ls -l -r 按长格式、逆向排序文件。多个命令之间可以合并--，等同于ls -lr")])]),v._v(" "),e("li",[e("code",[v._v("ls -t\t按照时间顺序显示")])]),v._v(" "),e("li",[e("code",[v._v("ls -R\t递归显示，即显示所有文件夹及文件夹下的文件")])])]),v._v(" "),e("h2",{attrs:{id:"文件目录命令（cd）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件目录命令（cd）"}},[v._v("#")]),v._v(" 文件目录命令（cd）")]),v._v(" "),e("p",[v._v("更改当前的操作⽬录")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("cd /path/to/…. 绝对路径")])]),v._v(" "),e("li",[e("code",[v._v("cd ./path/to/… 相对路径")])]),v._v(" "),e("li",[e("code",[v._v("cd ../path/to/… 相对路径")])]),v._v(" "),e("li",[e("code",[v._v("cd - 切换至上一次的工作目录")])])]),v._v(" "),e("h2",{attrs:{id:"文件夹创建命令（mkdir）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件夹创建命令（mkdir）"}},[v._v("#")]),v._v(" 文件夹创建命令（mkdir）")]),v._v(" "),e("p",[v._v("mkdir创建目录")]),v._v(" "),e("p",[e("strong",[v._v("常⽤参数")])]),v._v(" "),e("ul",[e("li",[v._v("-p 建⽴多级⽬录")])]),v._v(" "),e("p",[e("strong",[v._v("创建多级目录")])]),v._v(" "),e("p",[v._v("不正确\n"),e("code",[v._v("mkdir /a/b/c/d")])]),v._v(" "),e("p",[v._v("正确\n"),e("code",[v._v("mkdir -p /a/b/c/d")])]),v._v(" "),e("p",[e("code",[v._v("ls -R /a")]),v._v(" 可以递归查看多级目录创建情况")]),v._v(" "),e("h2",{attrs:{id:"文件删除命令（rmdir、rm）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件删除命令（rmdir、rm）"}},[v._v("#")]),v._v(" 文件删除命令（rmdir、rm）")]),v._v(" "),e("p",[e("code",[v._v("rmdir 删除空目录")]),v._v(" (不常用)")]),v._v(" "),e("p",[e("code",[v._v("rm -r 可删除非空目录")]),v._v(" （常用）")]),v._v(" "),e("p",[e("strong",[v._v("rm 常⽤参数")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("-f 删除⽂件不进⾏提示")]),v._v(" "),e("strong",[v._v("（谨慎使用）")])]),v._v(" "),e("li",[e("code",[v._v("-r 删除⽬录（包括⽬录下的所有⽂件）")]),v._v("\n注意： rm 命令可以删除多个⽬录，需谨慎使⽤")])]),v._v(" "),e("h2",{attrs:{id:"文件创建命令（touch）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件创建命令（touch）"}},[v._v("#")]),v._v(" 文件创建命令（touch）")]),v._v(" "),e("p",[v._v("touch命令可以用来创建空文件或刷新文件的时间")]),v._v(" "),e("p",[e("code",[v._v("touch [OPTION]... FILE...")])]),v._v(" "),e("p",[e("strong",[v._v("选项说明：")])]),v._v(" "),e("ul",[e("li",[v._v("-a 仅改变 atime和ctime")]),v._v(" "),e("li",[v._v("-m 仅改变 mtime和ctime")]),v._v(" "),e("li",[v._v("-t [[CC]YY]MMDDhhmm[.ss] 指定atime和mtime的时间戳")]),v._v(" "),e("li",[v._v("-c 如果文件不存在，则不予创建")])]),v._v(" "),e("h2",{attrs:{id:"文件复制命令（ep）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件复制命令（ep）"}},[v._v("#")]),v._v(" 文件复制命令（ep）")]),v._v(" "),e("p",[v._v("复制⽂件和⽬录")]),v._v(" "),e("p",[e("code",[v._v("cp [OPTION] SOURCE DEST")])]),v._v(" "),e("p",[e("strong",[v._v("常⽤参数")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("-r 复制⽬录")])]),v._v(" "),e("li",[e("code",[v._v("-p 保留⽤户、权限、时间等⽂件属性")])]),v._v(" "),e("li",[e("code",[v._v("-a 等同于 -dpR")])])]),v._v(" "),e("p",[v._v("cp 只能复制文件如果需要复制目录的话需要加"),e("code",[v._v("-r")])]),v._v(" "),e("p",[v._v("例如："),e("code",[v._v("cp -r /root/etc /text")])]),v._v(" "),e("h2",{attrs:{id:"文件移动命令（mv）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件移动命令（mv）"}},[v._v("#")]),v._v(" 文件移动命令（mv）")]),v._v(" "),e("p",[v._v("mv 移动⽂件")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("mv [选项] 源⽂件 ⽬标⽂件")])]),v._v(" "),e("li",[e("code",[v._v("mv [选项] 源⽂件 ⽬录")])])]),v._v(" "),e("p",[v._v("移动的过程中，可以改名")]),v._v(" "),e("p",[e("code",[v._v("mv /filea.txt /fileb.txt")]),v._v(" 同目录改名")]),v._v(" "),e("p",[e("code",[v._v("mv /filea.txt /root/tmp/fileb.txt")]),v._v(" 移动并改名")]),v._v(" "),e("p",[e("code",[v._v("mv /root/a /tmp")]),v._v(" 移动文件夹")]),v._v(" "),e("h2",{attrs:{id:"文件通配符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件通配符"}},[v._v("#")]),v._v(" 文件通配符")]),v._v(" "),e("p",[v._v("文件通配符可以用来匹配符合条件的多个文件，方便批量管理文件")]),v._v(" "),e("p",[v._v("通配符采有特定的符号，表示特定的含义，此特符号称为元 meta 字符")]),v._v(" "),e("p",[e("strong",[v._v("⽤途：操作多个相似（有简单规律）的⽂件")])]),v._v(" "),e("p",[v._v("常见的通配符如下：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("* 匹配任何字符串")])]),v._v(" "),e("li",[e("code",[v._v("？ 匹配1个字符串")])]),v._v(" "),e("li",[e("code",[v._v("[xyz] 匹配xyz任意⼀个字符")])]),v._v(" "),e("li",[e("code",[v._v("[a-z] 匹配⼀个范围")])]),v._v(" "),e("li",[e("code",[v._v("[!xyz] 或 [^xyz] 不匹配")])])]),v._v(" "),e("p",[e("code",[v._v("ls file*.txt")]),v._v(" 匹配前文件下，以file开头的.txt文件")]),v._v(" "),e("h2",{attrs:{id:"文件查看命令-cat、head、tail、wc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件查看命令-cat、head、tail、wc"}},[v._v("#")]),v._v(" 文件查看命令(cat、head、tail、wc)")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("cat ⽂本内容显示到终端")])]),v._v(" "),e("li",[e("code",[v._v("head 查看⽂件开头")])]),v._v(" "),e("li",[e("code",[v._v("tail 查看⽂件结尾")]),v._v(" (常⽤参数 -f ⽂件内容更新后，显示信息同步更新)")]),v._v(" "),e("li",[e("code",[v._v("wc 统计⽂件内容信息")])])]),v._v(" "),e("p",[v._v("more和less 可以了解")]),v._v(" "),e("p",[e("code",[v._v("cat /etc/passwd")])]),v._v(" "),e("p",[e("code",[v._v("head -5 /etc/passwd")]),v._v(" 查看开头的5行，默认10行")]),v._v(" "),e("p",[e("code",[v._v("tail -5 /etc/passwd")]),v._v(" 产看文件的后5行，默认10行")]),v._v(" "),e("p",[e("code",[v._v("wc /etc/passwd")]),v._v(" 查看文件内容的统计信息")]),v._v(" "),e("h2",{attrs:{id:"文件打包命令（tar）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件打包命令（tar）"}},[v._v("#")]),v._v(" 文件打包命令（tar）")]),v._v(" "),e("p",[v._v("tar 打包命令")]),v._v(" "),e("p",[e("code",[v._v("tar [option] 打包路径dist 源路径src")])]),v._v(" "),e("p",[e("strong",[v._v("常⽤参数")])]),v._v(" "),e("ul",[e("li",[v._v("c 打包")]),v._v(" "),e("li",[v._v("x 解包")]),v._v(" "),e("li",[v._v("f 指定操作类型为⽂件")])]),v._v(" "),e("p",[e("code",[v._v("tar cf /tmp/etc-backup.bar /etc")]),v._v(" 打包")]),v._v(" "),e("p",[e("code",[v._v("ls -lh /tmp/etc-backup.bar")]),v._v(" 查看打包文件")]),v._v(" "),e("p",[e("strong",[v._v("压缩和解压缩")])]),v._v(" "),e("p",[v._v("可以使⽤ gzip 和 bzip2 命令单独操作")]),v._v(" "),e("p",[v._v("通常和 tar 命令配合操作")]),v._v(" "),e("p",[e("strong",[v._v("常⽤参数")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("-z gzip 格式压缩和解压缩")]),v._v(" 快")]),v._v(" "),e("li",[e("code",[v._v("-j bzip2 格式压缩和解压缩")]),v._v(" 包体积小")])]),v._v(" "),e("p",[e("strong",[v._v("压缩")])]),v._v(" "),e("p",[e("code",[v._v("tar cfz /tmp/etc-backup.tar.gz")])]),v._v(" "),e("p",[e("code",[v._v("tar cfj /tmp/etc-backup.tar.bz2")])]),v._v(" "),e("p",[e("strong",[v._v("解压")])]),v._v(" "),e("p",[e("code",[v._v("tar xf /tmp/etc-backup.tar -C /root")]),v._v(" 解压")]),v._v(" "),e("p",[e("code",[v._v("tar xfz /tmp/etc-backup.tar -C /root")]),v._v(" 解压gizp")]),v._v(" "),e("p",[e("code",[v._v("tar xfz /tmp/etc-backup.tar -C /root")]),v._v("解压bzip2")]),v._v(" "),e("h2",{attrs:{id:"⽂本编辑器-vi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⽂本编辑器-vi"}},[v._v("#")]),v._v(" ⽂本编辑器(vi)")]),v._v(" "),e("p",[e("code",[v._v("man vi")]),v._v(" 可以查看到，vim 是一个同vi向上兼容的文本编辑器，vim是最好的编程命令")]),v._v(" "),e("p",[e("strong",[v._v("四种模式")])]),v._v(" "),e("ul",[e("li",[v._v("正常模式 (Normal-mode)")]),v._v(" "),e("li",[v._v("插⼊模式 (Insert-mode)")]),v._v(" "),e("li",[v._v("命令模式 (Command-mode)")]),v._v(" "),e("li",[v._v("可视模式 (Visual-mode)")])]),v._v(" "),e("p",[e("strong",[v._v("进⼊其他模式转换命令")])]),v._v(" "),e("ul",[e("li",[v._v("i I a A o O 进⼊插⼊模式")])]),v._v(" "),e("blockquote",[e("ul",[e("li",[v._v("i insert, 在光标所在处输入")]),v._v(" "),e("li",[v._v("I 在当前光标所在行的行首输入")]),v._v(" "),e("li",[v._v("a append, 在光标所在处后面输入")]),v._v(" "),e("li",[v._v("A 在当前光标所在行的行尾输入")]),v._v(" "),e("li",[v._v("o 在当前光标所在行的下方打开一个新行")]),v._v(" "),e("li",[v._v("O 在当前光标所在行的上方打开一个新行")])])]),v._v(" "),e("ul",[e("li",[v._v("v V ctrl+v 进⼊可视化模式")]),v._v(" "),e("li",[v._v("： 进⼊命令模式")]),v._v(" "),e("li",[v._v("esc 从其他模式回到正常模式")])]),v._v(" "),e("h3",{attrs:{id:"正常模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正常模式"}},[v._v("#")]),v._v(" 正常模式")]),v._v(" "),e("p",[v._v("基本操作")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("y 复制")])]),v._v(" "),e("li",[e("code",[v._v("d 剪切")])]),v._v(" "),e("li",[e("code",[v._v("p 粘贴")])]),v._v(" "),e("li",[e("code",[v._v("u 撤销")])]),v._v(" "),e("li",[e("code",[v._v("ctrl + r 重做")])]),v._v(" "),e("li",[e("code",[v._v("x 删除单个字符")])]),v._v(" "),e("li",[e("code",[v._v("r 替换单个字符")])]),v._v(" "),e("li",[e("code",[v._v("G 定位指定的⾏")])]),v._v(" "),e("li",[e("code",[v._v("^ 定位到⾏⾸")])]),v._v(" "),e("li",[e("code",[v._v("$ 定位到⾏尾")])])]),v._v(" "),e("h3",{attrs:{id:"命令模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[v._v("#")]),v._v(" 命令模式")]),v._v(" "),e("p",[v._v("基本操作")]),v._v(" "),e("ul",[e("li",[e("code",[v._v(":w 写⼊")])]),v._v(" "),e("li",[e("code",[v._v("wq 写入并退出")])]),v._v(" "),e("li",[e("code",[v._v(":q 退出")])]),v._v(" "),e("li",[e("code",[v._v("q！ 不存盘退出，即使更改都将丢失")])]),v._v(" "),e("li",[e("code",[v._v(":! 执⾏ Shell 命令")])]),v._v(" "),e("li",[e("code",[v._v(":s 替换")])]),v._v(" "),e("li",[e("code",[v._v("/ 查找")])]),v._v(" "),e("li",[e("code",[v._v(":set 设置命令")])])]),v._v(" "),e("h3",{attrs:{id:"可视模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可视模式"}},[v._v("#")]),v._v(" 可视模式")]),v._v(" "),e("p",[v._v("三种进⼊可视模式的⽅式")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("v 字符可视模式")])]),v._v(" "),e("li",[e("code",[v._v("V ⾏可视模式")])]),v._v(" "),e("li",[e("code",[v._v("ctrl+v 块可视模式")])]),v._v(" "),e("li",[e("code",[v._v("配合 d 和 I（⼤写 i ） 命令可以进⾏块的便利操作")])])]),v._v(" "),e("p",[e("a",{attrs:{href:"http://www.yunweipai.com/archives/33875.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("更多请移步-运维派"),e("OutboundLink")],1)]),v._v(" "),e("h2",{attrs:{id:"⽤户管理常⽤命令（useradd、userdel、passwd、usermod、chage）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⽤户管理常⽤命令（useradd、userdel、passwd、usermod、chage）"}},[v._v("#")]),v._v(" ⽤户管理常⽤命令（useradd、userdel、passwd、usermod、chage）")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("useradd [option] user")]),v._v(" 新建用户")]),v._v(" "),e("li",[e("code",[v._v("userdel [option] user")]),v._v("删除⽤户")]),v._v(" "),e("li",[e("code",[v._v("passwd [option] user")]),v._v(" 修改⽤户密码")]),v._v(" "),e("li",[e("code",[v._v("usermod [option] 修改后 修改前")]),v._v("修改⽤户属性")]),v._v(" "),e("li",[e("code",[v._v("chage [option] user")]),v._v("修改⽤户属性")])]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("useradd user1 创建user1用户，不指定用户组的情况自动创建一个同名用户组")])]),v._v(" "),e("li",[e("code",[v._v("tail -10 /etc/passwd 用户会北京记录到这个文件中")])]),v._v(" "),e("li",[e("code",[v._v("tail -10 /etc/shadow 用户密码相关也会有一条记录")])]),v._v(" "),e("li",[e("code",[v._v("userdel -r user1 删除用户（添加-r是为了删除用户关系，不保留家目录和相关的配置文件的记录）")])]),v._v(" "),e("li",[e("code",[v._v("useradd w0")])]),v._v(" "),e("li",[e("code",[v._v("passwd w0 修改用户密码")])]),v._v(" "),e("li",[e("code",[v._v("usermod -d /home/w1 w0 修改用户的家目录")])])]),v._v(" "),e("h2",{attrs:{id:"⽤户组管理命令（groupadd、groupdel）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⽤户组管理命令（groupadd、groupdel）"}},[v._v("#")]),v._v(" ⽤户组管理命令（groupadd、groupdel）")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("groupadd 新建⽤户组")])]),v._v(" "),e("li",[e("code",[v._v("groupdel 删除⽤户组")])])]),v._v(" "),e("p",[v._v("例：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("groupadd gourp1 添加一个用户组")])]),v._v(" "),e("li",[e("code",[v._v("useradd user1")])]),v._v(" "),e("li",[e("code",[v._v("usermod -g group1 user1 修改user1的用户组为group1")])]),v._v(" "),e("li",[e("code",[v._v("id user1 查看用户信息")])]),v._v(" "),e("li",[e("code",[v._v("useradd -g group2 user2 新建用户是设置组别")])]),v._v(" "),e("li",[e("code",[v._v("groupdel group1 删除用户组")])])]),v._v(" "),e("h2",{attrs:{id:"⽤户切换命令（su、sudo）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⽤户切换命令（su、sudo）"}},[v._v("#")]),v._v(" ⽤户切换命令（su、sudo）")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("su 切换⽤户 (su - USERNAME 使⽤ login shell ⽅式切换⽤户)")])]),v._v(" "),e("li",[e("code",[v._v("sudo 以其他⽤户身份执⾏命令")])]),v._v(" "),e("li",[e("code",[v._v("visudo 设置需要使⽤ sudo 的⽤户（组）")])])]),v._v(" "),e("p",[v._v("例: 给用户赋予命令权限")]),v._v(" "),e("p",[e("code",[v._v("visudo")])]),v._v(" "),e("p",[e("code",[v._v("user1 ALL=/sbin/shutdown -c")])]),v._v(" "),e("p",[v._v("然后去普通user1用户\n"),e("code",[v._v("sudo shutdown -c")])]),v._v(" "),e("h2",{attrs:{id:"⽤户配置⽂件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⽤户配置⽂件"}},[v._v("#")]),v._v(" ⽤户配置⽂件")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/etc/passwd ⽤户配置⽂件")])])]),v._v(" "),e("p",[v._v("user: x :1001:1001::/home/user:/bin/bash")]),v._v(" "),e("p",[v._v("user:密码登陆验证 x:user_id:group_id:注释:家目录:用户登录命令解释器")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/etc/shadow ⽤户密码相关配置⽂件")])])]),v._v(" "),e("p",[v._v("user ：加密过的密码 ：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/etc/group ⽤户组配置⽂件")])])]),v._v(" "),e("p",[v._v("组名称：是否密码验证：group_id：其他组设置")]),v._v(" "),e("h2",{attrs:{id:"文件权限表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件权限表示"}},[v._v("#")]),v._v(" 文件权限表示")]),v._v(" "),e("p",[e("strong",[v._v("查看⽂件权限")])]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("- r w - - - - - - - 1 root root 1523 sep 28 12:05 anaconda-ks.cfg \n类型 权限 所属⽤户和组 ⽂件名\n\n第一个字符：表示类型\n第234字符：表示对用户的权限\n第567字符：表示对所属用户组的权限\n第8910字符：表示除了用户和用户组外，其他用户对这个文件的权限\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br")])]),e("p",[e("strong",[v._v("⽂件类型")])]),v._v(" "),e("ul",[e("li",[v._v("- 普通⽂件")]),v._v(" "),e("li",[v._v("d ⽬录⽂件")]),v._v(" "),e("li",[v._v("b 块特殊⽂件")]),v._v(" "),e("li",[v._v("c 字符特殊⽂件")]),v._v(" "),e("li",[v._v("l 符号链接")]),v._v(" "),e("li",[v._v("f 命名管道")]),v._v(" "),e("li",[v._v("s 套接字⽂件")])]),v._v(" "),e("p",[e("strong",[v._v("字符权限表示⽅法")])]),v._v(" "),e("ul",[e("li",[v._v("r 读")]),v._v(" "),e("li",[v._v("w 写")]),v._v(" "),e("li",[v._v("x 执⾏")])]),v._v(" "),e("p",[e("strong",[v._v("数字权限的表示⽅法")])]),v._v(" "),e("ul",[e("li",[v._v("r = 4")]),v._v(" "),e("li",[v._v("w = 2")]),v._v(" "),e("li",[v._v("x = 1")])]),v._v(" "),e("p",[e("strong",[v._v("⽂件权限的表示⽅法")])]),v._v(" "),e("p",[v._v("-rw-r-xr-- 1 userame groupname mtime filename")]),v._v(" "),e("ul",[e("li",[v._v("rw- ⽂件属主的权限")]),v._v(" "),e("li",[v._v("r-x ⽂件属组的权限")]),v._v(" "),e("li",[v._v("r-- 其他⽤户的权限")])]),v._v(" "),e("p",[v._v("创建新⽂件有默认权限，根据 umask 值计算，属主和属组根据当前进程的⽤户来设定")]),v._v(" "),e("h2",{attrs:{id:"文件⽬录权限表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件⽬录权限表示"}},[v._v("#")]),v._v(" 文件⽬录权限表示")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("x 进⼊⽬录")])]),v._v(" "),e("li",[e("code",[v._v("rx 显示⽬录内的⽂件名")])]),v._v(" "),e("li",[e("code",[v._v("wx 修改⽬录内的⽂件名")])])]),v._v(" "),e("h2",{attrs:{id:"权限修改命令-chmod、chown、chgrp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限修改命令-chmod、chown、chgrp"}},[v._v("#")]),v._v(" 权限修改命令(chmod、chown、chgrp)")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("chmod 修改⽂件、⽬录权限")])])]),v._v(" "),e("div",{staticClass:"language-linux line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("加或减权限\nchmod u+x /tmp/testfile\nchmod u-rx /tmp/testfile修改属主的权限\nchmod g-rx /tmp/testfile 修改属组的权限\nchmod o+rx /tmp/testfile 修改其他用户权限\nchmod a=rwx /tmp/testfile 修改所有\n\nchmod 755 /tmp/testfile 数字权限设置\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br"),e("span",{staticClass:"line-number"},[v._v("8")]),e("br")])]),e("ul",[e("li",[e("code",[v._v("chown 更改属主、属组")])])]),v._v(" "),e("div",{staticClass:"language-linux line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("chown :group1 /test \n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("ul",[e("li",[e("code",[v._v("chgrp 可以单独更改属组，不常⽤")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);