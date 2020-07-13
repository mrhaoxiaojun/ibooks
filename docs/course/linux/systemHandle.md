## 命令选项
命令的选项有三种风格：

* 1 UNIX风格， 必须带一个 "-"
* 2 BSD风格 ， 不带 "-"
* 3 GNU风格 ， 带两个"-"

tar命令的早期是支持BSD风格的，后期随着版本更新慢慢支持了UNIX风格，也就是你看到的现在的版本，为了让大家看到更多的选项格式，我在使用tar命令的时候没有带 "-"

## 帮助命令（man、help、info）

* man 帮助
* help 帮助
* info 帮助

**为什么要学习帮助命令**
* Linux 的基本操作⽅式是命令⾏
* 海量的命令不适合“死记硬背” 
* 你要升级你的⼤脑

**man 帮助（manual缩写）**

举例：	

* `man ls 获取ls命令的帮助`
* `man man 获取man命令的帮助，有很多重名的`
* `man 7 man 获取man命令第7章的命令`
* `man -a passwd 不清楚是passwd 是配置、文件还是命令等，可以用-a列出所有情况`
* `man -1 passwd 即获取passwd命令的帮助`

**help 帮助**

shell 命令解释器自带的命令成为内部命令，其他的就是外部命令

如何区分内部、外部命令：
举例：	

* `type cd -> cd is a shell builtin cd是内部命令`
* `type ls -> ls is hashed (/bin/ls) ls则是外部命令`

举例：	

* `help cd	内部命令使用 help **`
* `ls --help 外部命令使用 ** --help`


**info 命令**
info帮助比help更详细，作为help的补充。但info都是英文的。

## 文件名称命令（pwd）
pwd 显示当前的⽬录名称

pwd英文全称应该是Print Working Directory 意思就是说打印出来正在工作的文件夹

## 文件查看命令（ls）
ls 命令可以列出当前目录的内容或指定目录

`ls [options] [files_or_dirs]`

**常⽤参数：**
* `-l ⻓格式显示⽂件`
* `-a 显示隐藏⽂件`
* `-r 逆序显示`
* `-t 按照时间顺序显示`
* `-R 递归显示`
* `-ld 目录和符号链接信息`
* `-S 按从大到小排序`
* `-u 配合-t选项，显示并按atime从新到旧排序`
* `-U 按目录存放顺序显示`
* `-X 按文件后缀排序`

**举例：	man ls	显示ls的帮助**

* `ls	显示当前的目录的文件，等同于ls .`
* `ls / 显示根目录下的文件`
* `ls /root /tmp 显示多个目录下的文件（/root及/tmp目录下）`
* `ls -l 显示当前目录下的长格式文件（包含：权限、文件个数、文件创建的用户、权限组、大小、最后更新时间，以及文件名）`
* `ls -a	显示所有文件，包含隐藏文件(以.开头的就是隐藏文件)`
* `ls -r 文件逆向排序（默认按照文件名首字母）`
* `ls -l -r 按长格式、逆向排序文件。多个命令之间可以合并--，等同于ls -lr`
* `ls -t	按照时间顺序显示`
* `ls -R	递归显示，即显示所有文件夹及文件夹下的文件`

## 文件目录命令（cd）
更改当前的操作⽬录

* `cd /path/to/…. 绝对路径`
* `cd ./path/to/… 相对路径`
* `cd ../path/to/… 相对路径`
* `cd - 切换至上一次的工作目录`

## 文件夹创建命令（mkdir）
mkdir创建目录

**常⽤参数**
* -p 建⽴多级⽬录

**创建多级目录**

不正确
`mkdir /a/b/c/d`

正确
`mkdir -p /a/b/c/d`

`ls -R /a` 可以递归查看多级目录创建情况

## 文件删除命令（rmdir、rm）

`rmdir 删除空目录` (不常用)

`rm -r 可删除非空目录` （常用）

**rm 常⽤参数**
* `-f 删除⽂件不进⾏提示` **（谨慎使用）**
* `-r 删除⽬录（包括⽬录下的所有⽂件）`
注意： rm 命令可以删除多个⽬录，需谨慎使⽤

## 文件创建命令（touch）
touch命令可以用来创建空文件或刷新文件的时间

`touch [OPTION]... FILE...`

**选项说明：**

* -a 仅改变 atime和ctime
* -m 仅改变 mtime和ctime
* -t [[CC]YY]MMDDhhmm[.ss] 指定atime和mtime的时间戳
* -c 如果文件不存在，则不予创建

## 文件复制命令（ep）
复制⽂件和⽬录

`cp [OPTION] SOURCE DEST`

**常⽤参数**
* `-r 复制⽬录`
* `-p 保留⽤户、权限、时间等⽂件属性`
* `-a 等同于 -dpR`

cp 只能复制文件如果需要复制目录的话需要加`-r`

例如：`cp -r /root/etc /text` 

## 文件移动命令（mv）
mv 移动⽂件

* `mv [选项] 源⽂件 ⽬标⽂件`
* `mv [选项] 源⽂件 ⽬录`

移动的过程中，可以改名

`mv /filea.txt /fileb.txt` 同目录改名

`mv /filea.txt /root/tmp/fileb.txt` 移动并改名

`mv /root/a /tmp` 移动文件夹

## 文件通配符
文件通配符可以用来匹配符合条件的多个文件，方便批量管理文件

通配符采有特定的符号，表示特定的含义，此特符号称为元 meta 字符

**⽤途：操作多个相似（有简单规律）的⽂件**

常见的通配符如下：

* `* 匹配任何字符串`
* `？ 匹配1个字符串`
* `[xyz] 匹配xyz任意⼀个字符`
* `[a-z] 匹配⼀个范围`
* `[!xyz] 或 [^xyz] 不匹配`

`ls file*.txt` 匹配前文件下，以file开头的.txt文件

## 文件查看命令(cat、head、tail、wc)

* `cat ⽂本内容显示到终端`
* `head 查看⽂件开头`
* `tail 查看⽂件结尾` (常⽤参数 -f ⽂件内容更新后，显示信息同步更新)
* `wc 统计⽂件内容信息`

more和less 可以了解

`cat /etc/passwd` 

`head -5 /etc/passwd` 查看开头的5行，默认10行

`tail -5 /etc/passwd` 产看文件的后5行，默认10行

`wc /etc/passwd` 查看文件内容的统计信息

## 文件打包命令（tar）
tar 打包命令

`tar [option] 打包路径dist 源路径src`

**常⽤参数**

* c 打包
* x 解包
* f 指定操作类型为⽂件

`tar cf /tmp/etc-backup.bar /etc` 打包

`ls -lh /tmp/etc-backup.bar` 查看打包文件

**压缩和解压缩**

可以使⽤ gzip 和 bzip2 命令单独操作

通常和 tar 命令配合操作

**常⽤参数**

* `-z gzip 格式压缩和解压缩` 快
* `-j bzip2 格式压缩和解压缩` 包体积小

**压缩**

`tar cfz /tmp/etc-backup.tar.gz` 

`tar cfj /tmp/etc-backup.tar.bz2` 

**解压**

`tar xf /tmp/etc-backup.tar -C /root` 解压

`tar xfz /tmp/etc-backup.tar -C /root` 解压gizp

`tar xfz /tmp/etc-backup.tar -C /root`解压bzip2

## ⽂本编辑器(vi)

`man vi` 可以查看到，vim 是一个同vi向上兼容的文本编辑器，vim是最好的编程命令

**四种模式**
* 正常模式 (Normal-mode)
* 插⼊模式 (Insert-mode) 
* 命令模式 (Command-mode) 
* 可视模式 (Visual-mode)

**进⼊其他模式转换命令**
* i I a A o O 进⼊插⼊模式
 > * i insert, 在光标所在处输入
 > * I 在当前光标所在行的行首输入
 > * a append, 在光标所在处后面输入
 > * A 在当前光标所在行的行尾输入
 > * o 在当前光标所在行的下方打开一个新行
 > * O 在当前光标所在行的上方打开一个新行

* v V ctrl+v 进⼊可视化模式
* ： 进⼊命令模式
* esc 从其他模式回到正常模式



### 正常模式

基本操作
* `y 复制`
* `d 剪切`
* `p 粘贴`
* `u 撤销`
* `ctrl + r 重做`
* `x 删除单个字符`
* `r 替换单个字符`
* `G 定位指定的⾏`
* `^ 定位到⾏⾸`
* `$ 定位到⾏尾`

### 命令模式

基本操作
* `:w 写⼊`
* `wq  写入并退出`
* `:q 退出`
* `q！ 不存盘退出，即使更改都将丢失  `
* `:! 执⾏ Shell 命令`
* `:s 替换`
* `/ 查找`
* `:set 设置命令`

### 可视模式

三种进⼊可视模式的⽅式
* `v 字符可视模式`
* `V ⾏可视模式`
* `ctrl+v 块可视模式`
* `配合 d 和 I（⼤写 i ） 命令可以进⾏块的便利操作`

[更多请移步-运维派](http://www.yunweipai.com/archives/33875.html)

## ⽤户管理常⽤命令（useradd、userdel、passwd、usermod、chage）

* `useradd [option] user` 新建用户
* `userdel [option] user`删除⽤户
* `passwd  [option] user` 修改⽤户密码
* `usermod [option] 修改后 修改前`修改⽤户属性
* `chage  [option] user`修改⽤户属性

例：
* `useradd user1 创建user1用户，不指定用户组的情况自动创建一个同名用户组`
* `tail -10 /etc/passwd 用户会北京记录到这个文件中`
* `tail -10 /etc/shadow  用户密码相关也会有一条记录`
* `userdel -r user1 删除用户（添加-r是为了删除用户关系，不保留家目录和相关的配置文件的记录）`
* `useradd w0`
* `passwd w0 修改用户密码`
* `usermod -d /home/w1 w0 修改用户的家目录`

## ⽤户组管理命令（groupadd、groupdel）

* `groupadd 新建⽤户组`
* `groupdel 删除⽤户组`

例：
* `groupadd gourp1 添加一个用户组`
* `useradd user1 `
* `usermod -g group1 user1 修改user1的用户组为group1`
* `id user1 查看用户信息`
* `useradd -g group2 user2 新建用户是设置组别`
* `groupdel group1 删除用户组`

## ⽤户切换命令（su、sudo） 
* `su 切换⽤户 (su - USERNAME 使⽤ login shell ⽅式切换⽤户)`
* `sudo 以其他⽤户身份执⾏命令`
* `visudo 设置需要使⽤ sudo 的⽤户（组）`

例: 给用户赋予命令权限

`visudo`

`user1 ALL=/sbin/shutdown -c`

然后去普通user1用户
`sudo shutdown -c`


## ⽤户配置⽂件
* `/etc/passwd ⽤户配置⽂件`

user: x :1001:1001::/home/user:/bin/bash

user:密码登陆验证 x:user_id:group_id:注释:家目录:用户登录命令解释器

* `/etc/shadow ⽤户密码相关配置⽂件`

user ：加密过的密码 ：

* `/etc/group ⽤户组配置⽂件`

组名称：是否密码验证：group_id：其他组设置

## 文件权限表示

**查看⽂件权限**
```
- r w - - - - - - - 1 root root 1523 sep 28 12:05 anaconda-ks.cfg 
类型 权限 所属⽤户和组 ⽂件名

第一个字符：表示类型
第234字符：表示对用户的权限
第567字符：表示对所属用户组的权限
第8910字符：表示除了用户和用户组外，其他用户对这个文件的权限
```
**⽂件类型**
* \- 普通⽂件
* d ⽬录⽂件
* b 块特殊⽂件
* c 字符特殊⽂件
* l 符号链接
* f 命名管道
* s 套接字⽂件

**字符权限表示⽅法**
* r 读 
* w 写 
* x 执⾏

**数字权限的表示⽅法**
* r = 4 
* w = 2
* x = 1

**⽂件权限的表示⽅法**

-rw-r-xr-- 1 userame groupname mtime filename
* rw- ⽂件属主的权限
* r-x ⽂件属组的权限
* r-- 其他⽤户的权限

创建新⽂件有默认权限，根据 umask 值计算，属主和属组根据当前进程的⽤户来设定

## 文件⽬录权限表示

* `x 进⼊⽬录`
* `rx 显示⽬录内的⽂件名`
* `wx 修改⽬录内的⽂件名`

## 权限修改命令(chmod、chown、chgrp)

* `chmod 修改⽂件、⽬录权限`
```linux
加或减权限
chmod u+x /tmp/testfile
chmod u-rx /tmp/testfile修改属主的权限
chmod g-rx /tmp/testfile 修改属组的权限
chmod o+rx /tmp/testfile 修改其他用户权限
chmod a=rwx /tmp/testfile 修改所有

chmod 755 /tmp/testfile 数字权限设置
```
* `chown 更改属主、属组`
```linux
chown :group1 /test 
```
* `chgrp 可以单独更改属组，不常⽤`