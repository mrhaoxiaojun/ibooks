## 网络管理（目录）

• 网络状态查看  
• 网络配置  
• 路由命令  
• 网络故障排除  
• 网络服务管理  
• 常⽤网络配置⽂件  

## 网络状态查看⼯具

net-tools VS iproute
之前用net-tools contos7之后主推iproute  

1. net-tools  
   `• ifconfig`  
   `• route`  
   `• netstat`  

2. iproute2  
   `• ip`  
   `• ss ` 

## 网络状态查看命令

`ifconfig`  

结果
可以看到我的名字是ens33

说明

• eth0 第⼀块⽹卡（网络接⼝）   
• 你的第⼀个网络接⼝可能叫做下⾯的名字   
• eno1 板载⽹卡   
• ens33 PCI-E⽹卡   
• enp0s3 ⽆法获取物理信息的 PCI-E ⽹卡   
• CentOS 7 使⽤了⼀致性网络设备命名，以上都不匹配则使⽤ eth0   

## 网络接⼝命名修改

::: tip 
 本人是虚拟机下安装的contos7，发现`ping www.baidu.com`是ping不同的，网络链接不了，网上给到的资料大多数是修改 网络虚拟编辑器 然后配置`/etc/sysconfig/network-scripts/[网络接口]` 略显复杂，经过测试直接修改网络接口名称就可以，当然修改接口名称的主要作用是为了网卡名称固定之后，方便编写多计算机批量控制脚本 
:::

* **⽹卡命名规则受 biosdevname 和 net.ifnames 两个参数影响  **
* **编辑 `vim /etc/default/grub` ⽂件，增加 biosdevname=0 net.ifnames=0   **
  位置在第六行 
  `RUB_CMDLINE_LINUX="crashkernel=auto spectre_v2=retpoline rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet biosdevname=0 net.ifnames=0"`  
* **更新 grub 命令  **
  `grub2-mkconfig -o /boot/grub2/grub.cfg`  
* **重启  **
  `reboot`
* **说明  **

| biosdevname | net.ifnames | ⽹卡名
|  ----  | ----  | ----  |
| 默认 | 0 | 1 | ens33
| 组合1|  1|  0|  em1
| 组合2|  0|  0|  eth0

* **问题**

我的网卡是ens33，修改biosdevname=0 net_ifnames=0，更新grubs重启，ifconfig的网卡还是ens33，这是什么原因  
>偶尔有这样的情况，需要手动修改 vim /etc/sysconfig/network-scripts/ifcfg-ens33
>将 NAME= 和DEVICE= 两个设置项手动改为eth0 ，保存后重启即可

* **可以查看一下修改后的信息**

root 用户  `ifconfig`   
普通用户 `/sbin/ifconfig`   

```linux
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.175.128  netmask 255.255.255.0  broadcast 192.168.175.255
        inet6 fe80::b5e0:147f:1a08:8d95  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:37:2b:3b  txqueuelen 1000  (Ethernet)
        RX packets 10726  bytes 11322383 (10.7 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2390  bytes 169708 (165.7 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 64  bytes 5568 (5.4 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 64  bytes 5568 (5.4 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

virbr0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 192.168.122.1  netmask 255.255.255.0  broadcast 192.168.122.255
        ether 52:54:00:7c:aa:f9  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```
**名称解释**

* eth0 网卡名称（网络接口名称）
* inet 网卡的ip地址
* netmask 子网页面
* Rx 发送数据包的多少
* Tx 发送数据的个数
* lo 本地的环回
* enther 网卡的mac地址
* virbr0 linux虚拟化的一下网关等

## 查看网络情况

查看⽹卡物理连接情况
`mii-tool eth0`

## 查看网关命令

查看网关  
`route -n`  
使⽤ -n 参数不解析主机名（不加会接卸域名，太慢）

## 网络配置命令

• `ifconfig <接⼝> <IP地址> [netmask] [⼦⽹掩码 ]`    
• `ifup <接⼝> `    
• `ifdown <接⼝>`    

添加⽹关  

• `route add default gw <⽹关ip>`    
• `route add -host <指定ip> gw <⽹关ip>`    
• `route add -net <指定⽹段> netmask <⼦⽹掩码> gw <⽹关ip>`    

网络命令集合：ip 命令  

ip使用的网络栈ifconfig不支持，所有ip命令可以给一个网关绑定多个ip，但是用ipconfig查不到
• `ip addr ls `    
• `ifconfig`    

• `ip link set dev eth0 up `    
• `ifup eth0`  

• `ip addr add 10.0.0.1/24 dev eth1 `    
• `ifconfig eth1 10.0.0.1 netmask 255.255.255.0`    

• `ip route add 10.0.0/24 via 192.168.0.1 `    
• `route add -net 10.0.0.0 netmask 255.255.255.0 gw 192.168.0.1`    

## 网络故障排除命令

具体参数可用man命令查

• `ping <主机>` ping不通的情况可能是网络中断，或者对方防火墙的问题    
• `traceroute -w 1 <主机>`  检测当前主机到目标主机的网络状况  
• `mtr`  检测当前主机到目标主机的网络状况   
• `nslookup`  查看域名对应的主机是什么       
• `telnet`  检查端口链接状态  
• `tcpdump`  检查数据包  
• `netstat`  检查监听范围 （常用：-n:显示ip地址不显示域名；-t：以tcp的方式截取我们想显示的内容；-p：端口；-l：liction tcp的状态监听）
• `ss`  检查监听范围

## 网络服务管理

网络服务管理程序分为两种，分别为SysV和systemd   
• `service network start|stop|restart`   
查看network的权限
`chkconfig -list network`  
打开权限 
`chkconfig --level 0123456 network on `  

• `systemctl list-unit-files NetworkManager.service   `
• `systemctl start|stop|restart NetworkManger   `
开启和禁用system   
• `systemctl enable|disable NetworkManger   `

## 网络配置⽂件

`ifcfg-eth0` 网卡配置文件不知道名字可以查 `ll /etc/sysconfig/network-scripts/ | grep ifcfg-en`   
`/etc/hosts` 主机相关配置
`/etc/sysconfig/network-scripts` 网卡配置文件
修改完配置想要生效，需要执行 `service network restart`  重启网卡

## 修改主机名（hostname）

永久修改  
`hostnamectl set-hostname centos7.test`  
**注意修改还要修改 /etc/hosts⽂件**  不写系统启动时候会卡住等待，最后超时

## 软件安装（目录）

• 软件包管理器   
• rpm 包和 rpm 命令   
• yum 仓库   
• 源代码编译安装   
• 内核升级   
• grub 配置⽂件   

## 软件包管理器

包管理器是⽅便软件安装、卸载，解决软件依赖关系的重要⼯具   
• CentOS、RedHat 使⽤ yum 包管理器，软件安装包格式为 rpm   
• Debian、Ubuntu 使⽤ apt 包管理器，软件安装包格式为 deb   

## rpm命令安装软件包

rpm 包格式
vim-common-7.4.10-5.el7.x86_64.rpm 
软件名称(vim-common) 软件版本(7.4.10-5) 系统版本(el7) 平台(.x86_64)

rpm 命令常⽤参数   
• -q 查询软件包   
• -i 安装软件包  
• -e 卸载软件包  

缺点，安装包下载的依赖关系需要自己解决，而不是它自己下载依赖

## yum命令安装软件包（推荐）

**rpm 包的问题**

• 需要⾃⼰解决依赖关系   
• 软件包来源不可靠  

**CentOS yum 源 **   
http://mirror.centos.org/centos/7/   

**国内镜像**
https://developer.aliyun.com/mirror/  

**yum 配置⽂件**   
`etc/yum.repos.d/CentOS-Base.repo`  

可以直接去访问国内的[阿里云官方镜像站](https://developer.aliyun.com/mirror/) 按着步骤备份、下载、生成缓存

yum命令常⽤选项

• install 安装软件包   
• remove 卸载软件包   
• list| grouplist 查看软件包   
• update 升级软件包   

## 源代码编译安装软件包

1. wget https://openresty.org/download/openresty-1.15.8.1.tar.gz
   下载软件包，如果不支持wget，请用yum安装
2. tar -zxf openresty-VERSION.tar.gz
   解压tar包
3. cd openresty-VERSION/   
   进入目录
4. ./configure --prefix=/usr/local/openresty
   执行配置文件，并指定安装的路径地址，方便日后管理
5. make -j2 
   使用2个逻辑cpu执行编译，如果没有上下文依赖关系，会加快速度，编译完成，当前目录会出行一个build目录，就是编译好的目录文件
6. make install
   安装，安装的位置就是之前指定的位置

## 升级内核


**1、rpm 格式内核**

查看内核版本  

`uname –r`  

例如升级内核指定版本  

`yum install kernel-3.10.0`

升级已安装的其他软件包和补丁

`yum update`


**2、源代码编译安装内核**

1. 安装依赖包
    根据经验提前下载依赖也可以到时候根据提示挨个下载   
   `yum install gcc gcc-c++ make ncurses-devel openssl-devel elfutils-libelf-devel`


2. 下载并解压缩内核

   去kernel网站看一下最新版本，[https://www.kernel.org](https://www.kernel.org) 用weget下载tar包然后解压

   `tar xvf linux-5.1.10.tar.xz -C /usr/src/kernels`


3. 配置内核编译参数

   `cd /usr/src/kernels/linux-5.1.10/`

   `make menuconfig | allyesconfig | allnoconfig`


4. 使⽤当前系统内核配置

   `cp /boot/config-kernelversion.platform /usr/src/kernels/linux-5.1.10/.config `


5. 查看 CPU

   `lscpu`


6. 编译

   `make -j2 all`


7. 安装内核

   `make modules_install`

   `make install`

## grub 配置⽂件

**grub 是什么**
启动的引导软件

**grub 配置⽂件**

`/etc/default/grub` 修改基本配置

`/etc/grub.d/` 修改更详细的配置

`/boot/grub2/grub.cfg` 不要直接修改它

`grub2-mkconfig -o /boot/grub2/grub.cfg` 修改后执行

使⽤单⽤户进⼊系统（忘记 root 密码）

## 进程管理（目录）

* 进程的概念与进程查看  
* 进程的控制命令  
* 进程的通信⽅式— 信号  
* 守护进程和系统⽇志  
* 服务管理⼯具 systemctl  
* SELinux 简介  

## 进程的概念
进程—运⾏中的程序，从程序开始运⾏到终⽌的整个⽣命周期是可管理的

**C 程序的启动是从 main 函数开始的**

int main(int agrc, char *argv[])

**终⽌的⽅式并不唯⼀，分为正常终⽌和异常终⽌**

* 正常终⽌也分为从 main 返回、调⽤ exit 等⽅式
* 异常终⽌分为调⽤ abort、接收信号等

## 进程的查看命令

**查看命令**
* ps
* pstree
* top

**结论：**
* 进程也是树形结构
* 进程和权限有着密不可分的关系

## 进程的优先级调整

**调整优先级**
* nice 范围从-20 到 19 ，值越⼩优先级越⾼，抢占资源就越多  
* renice 重新设置优先级  

**进程的作业控制**
* jobs  
* & 符号  

## 进程间通信
信号是进程间通信⽅式之⼀，典型⽤法是：终端⽤户输⼊中断命令，通过信号机制停⽌⼀个程序的运⾏。

使⽤信号的常⽤快捷键和命令

`kill -l`

* SIGINT 通知前台进程组终⽌进程 ctrl + c 
* SIGKILL ⽴即结束程序，不能被阻塞和处理 kill -9 pid

## 守护进程

使⽤ nohup 与 & 符号配合运⾏⼀个命令

`nohup tail -f /var/log/messages &`

nohup 命令使进程忽略 hangup（挂起）信号 ; nohup: 忽略输入并把输出追加到"nohup.out"

`ps -ef | grep tail` 关掉终端也可以查看到进程


守护进程(daemon)和⼀般进程有什么差别呢？

不需要终端，开机自动启动


使⽤ screen 命令

screen 进⼊ screen 环境

ctrl+a d 退出 (detached) screen 环境

screen -ls 查看 screen 的会话

screen -r sessionid 恢复会话

后面的略写了，记不住了，有了应用场景才好记住
----

## -------后面略写

## 系统⽇志

常⻅的系统⽇志

* /var/log
* message
* dmesg
* cron
* secure

## 服务管理⼯具systemctl

服务（提供常⻅功能的守护进程）集中管理⼯具

* service
* systemctl

**systemctl 常⻅操作**

systemctl start | stop | restart | reload | enable | disable 服务名称

软件包安装的服务单元 /usr/lib/systemd/system/

**systemctl 的服务配置**

[Unit]  
Requires = 新的依赖服务  
After = 新的依赖服务  

[Service]  

[Install]  
安装到哪个默认启动级别 /lib/systemd/system  
systemctl get-default | set-default  

## 内存与磁盘管理 （目录）

* 内存和磁盘使⽤率查看
* ext4 ⽂件系统
* 磁盘配额的使⽤
* 磁盘的分区与挂载
* 交换分区（虚拟内存）的查看与创建
* 软件 RAID 的使⽤
* 逻辑卷管理
* 系统综合状态查看

## 内存使⽤率查看
常⽤命令介绍

* free
* top

## 磁盘使⽤率的查看

查看命令

* fdisk
* df
* du
* du 与 ls 的区别

### 常⻅⽂件系统

Linux ⽀持多种⽂件系统，常⻅的有

* ext4
* xfs
* NTFS（需安装额外软件）

ext4 ⽂件系统基本结构⽐较复杂

• 超级块  
• 超级块副本  
• i 节点(inode)  
• 数据块(datablock)  

ext4 ⽂件系统深⼊理解

• 执⾏ mkdir 、touch、 vi 等命令后的内部操作  
• 符号链接与硬链接  
• facl  

## 磁盘分区与挂载

常⽤命令

`fdisk` 
`mkfs` 
`parted` 
`mount` 

常⻅配置⽂件

* /etc/fstab
* xfs⽂件系统的⽤户磁盘配额 quota
* mkfs.xfs /dev/sdb1
* mkdir /mnt/disk1
* mount -o uquota,gquota /dev/sdb1 /mnt/disk1
* chmod 1777 /mnt/disk1
* xfs_quota -x -c ‘report -ugibh’ /mnt/disk1 
* xfs_quota -x -c ‘limit -u isoft=5 ihard=10 user1’ /mnt/disk1

## 交换分区

增加交换分区的⼤⼩

• mkswap  
• swapon  
使⽤⽂件制作交换分区

• dd if=/dev/zero bs=4M count=1024 of=/swapfile

## RAID 与软件 RAID 技术

RAID 的常⻅级别及含义

* RAID 0 striping 条带⽅式，提⾼单盘吞吐率
* RAID 1 mirroring 镜像⽅式，提⾼可靠性
* RAID 5 有奇偶校验
* RAID 10 是RAID 1 与 RAID 0 的结合

软件 RAID 的使⽤

## 系统综合状态查询

使⽤ sar 命令查看系统综合状态

使⽤第三⽅命令查看⽹络流量

* yum install epel-release
* yum install iftop
* iftop -P