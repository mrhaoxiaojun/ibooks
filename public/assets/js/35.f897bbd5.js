(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{549:function(v,_,e){"use strict";e.r(_);var t=e(20),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"网络管理（目录）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络管理（目录）"}},[v._v("#")]),v._v(" 网络管理（目录）")]),v._v(" "),e("p",[v._v("• 网络状态查看"),e("br"),v._v("\n• 网络配置"),e("br"),v._v("\n• 路由命令"),e("br"),v._v("\n• 网络故障排除"),e("br"),v._v("\n• 网络服务管理"),e("br"),v._v("\n• 常⽤网络配置⽂件")]),v._v(" "),e("h2",{attrs:{id:"网络状态查看⼯具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络状态查看⼯具"}},[v._v("#")]),v._v(" 网络状态查看⼯具")]),v._v(" "),e("p",[v._v("net-tools VS iproute\n之前用net-tools contos7之后主推iproute")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("net-tools"),e("br"),v._v(" "),e("code",[v._v("• ifconfig")]),e("br"),v._v(" "),e("code",[v._v("• route")]),e("br"),v._v(" "),e("code",[v._v("• netstat")])])]),v._v(" "),e("li",[e("p",[v._v("iproute2"),e("br"),v._v(" "),e("code",[v._v("• ip")]),e("br"),v._v(" "),e("code",[v._v("• ss")])])])]),v._v(" "),e("h2",{attrs:{id:"网络状态查看命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络状态查看命令"}},[v._v("#")]),v._v(" 网络状态查看命令")]),v._v(" "),e("p",[e("code",[v._v("ifconfig")])]),v._v(" "),e("p",[v._v("结果\n可以看到我的名字是ens33")]),v._v(" "),e("p",[v._v("说明")]),v._v(" "),e("p",[v._v("• eth0 第⼀块⽹卡（网络接⼝）"),e("br"),v._v("\n• 你的第⼀个网络接⼝可能叫做下⾯的名字"),e("br"),v._v("\n• eno1 板载⽹卡"),e("br"),v._v("\n• ens33 PCI-E⽹卡"),e("br"),v._v("\n• enp0s3 ⽆法获取物理信息的 PCI-E ⽹卡"),e("br"),v._v("\n• CentOS 7 使⽤了⼀致性网络设备命名，以上都不匹配则使⽤ eth0")]),v._v(" "),e("h2",{attrs:{id:"网络接⼝命名修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络接⼝命名修改"}},[v._v("#")]),v._v(" 网络接⼝命名修改")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[v._v("本人是虚拟机下安装的contos7，发现"),e("code",[v._v("ping www.baidu.com")]),v._v("是ping不同的，网络链接不了，网上给到的资料大多数是修改 网络虚拟编辑器 然后配置"),e("code",[v._v("/etc/sysconfig/network-scripts/[网络接口]")]),v._v(" 略显复杂，经过测试直接修改网络接口名称就可以，当然修改接口名称的主要作用是为了网卡名称固定之后，方便编写多计算机批量控制脚本")])]),v._v(" "),e("ul",[e("li",[v._v("**⽹卡命名规则受 biosdevname 和 net.ifnames 两个参数影响  **")]),v._v(" "),e("li",[v._v("**编辑 "),e("code",[v._v("vim /etc/default/grub")]),v._v(" ⽂件，增加 biosdevname=0 net.ifnames=0   **\n位置在第六行\n"),e("code",[v._v('RUB_CMDLINE_LINUX="crashkernel=auto spectre_v2=retpoline rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet biosdevname=0 net.ifnames=0"')])]),v._v(" "),e("li",[v._v("**更新 grub 命令  **\n"),e("code",[v._v("grub2-mkconfig -o /boot/grub2/grub.cfg")])]),v._v(" "),e("li",[v._v("**重启  **\n"),e("code",[v._v("reboot")])]),v._v(" "),e("li",[v._v("**说明  **")])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("biosdevname")]),v._v(" "),e("th",[v._v("net.ifnames")]),v._v(" "),e("th",[v._v("⽹卡名")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("默认")]),v._v(" "),e("td",[v._v("0")]),v._v(" "),e("td",[v._v("1")])]),v._v(" "),e("tr",[e("td",[v._v("组合1")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("0")])]),v._v(" "),e("tr",[e("td",[v._v("组合2")]),v._v(" "),e("td",[v._v("0")]),v._v(" "),e("td",[v._v("0")])])])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("问题")])])]),v._v(" "),e("p",[v._v("我的网卡是ens33，修改biosdevname=0 net_ifnames=0，更新grubs重启，ifconfig的网卡还是ens33，这是什么原因")]),v._v(" "),e("blockquote",[e("p",[v._v("偶尔有这样的情况，需要手动修改 vim /etc/sysconfig/network-scripts/ifcfg-ens33\n将 NAME= 和DEVICE= 两个设置项手动改为eth0 ，保存后重启即可")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("可以查看一下修改后的信息")])])]),v._v(" "),e("p",[v._v("root 用户  "),e("code",[v._v("ifconfig")]),e("br"),v._v("\n普通用户 "),e("code",[v._v("/sbin/ifconfig")])]),v._v(" "),e("div",{staticClass:"language-linux line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.175.128  netmask 255.255.255.0  broadcast 192.168.175.255\n        inet6 fe80::b5e0:147f:1a08:8d95  prefixlen 64  scopeid 0x20<link>\n        ether 00:0c:29:37:2b:3b  txqueuelen 1000  (Ethernet)\n        RX packets 10726  bytes 11322383 (10.7 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 2390  bytes 169708 (165.7 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10<host>\n        loop  txqueuelen 1000  (Local Loopback)\n        RX packets 64  bytes 5568 (5.4 KiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 64  bytes 5568 (5.4 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nvirbr0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500\n        inet 192.168.122.1  netmask 255.255.255.0  broadcast 192.168.122.255\n        ether 52:54:00:7c:aa:f9  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br"),e("span",{staticClass:"line-number"},[v._v("8")]),e("br"),e("span",{staticClass:"line-number"},[v._v("9")]),e("br"),e("span",{staticClass:"line-number"},[v._v("10")]),e("br"),e("span",{staticClass:"line-number"},[v._v("11")]),e("br"),e("span",{staticClass:"line-number"},[v._v("12")]),e("br"),e("span",{staticClass:"line-number"},[v._v("13")]),e("br"),e("span",{staticClass:"line-number"},[v._v("14")]),e("br"),e("span",{staticClass:"line-number"},[v._v("15")]),e("br"),e("span",{staticClass:"line-number"},[v._v("16")]),e("br"),e("span",{staticClass:"line-number"},[v._v("17")]),e("br"),e("span",{staticClass:"line-number"},[v._v("18")]),e("br"),e("span",{staticClass:"line-number"},[v._v("19")]),e("br"),e("span",{staticClass:"line-number"},[v._v("20")]),e("br"),e("span",{staticClass:"line-number"},[v._v("21")]),e("br"),e("span",{staticClass:"line-number"},[v._v("22")]),e("br"),e("span",{staticClass:"line-number"},[v._v("23")]),e("br"),e("span",{staticClass:"line-number"},[v._v("24")]),e("br"),e("span",{staticClass:"line-number"},[v._v("25")]),e("br")])]),e("p",[e("strong",[v._v("名称解释")])]),v._v(" "),e("ul",[e("li",[v._v("eth0 网卡名称（网络接口名称）")]),v._v(" "),e("li",[v._v("inet 网卡的ip地址")]),v._v(" "),e("li",[v._v("netmask 子网页面")]),v._v(" "),e("li",[v._v("Rx 发送数据包的多少")]),v._v(" "),e("li",[v._v("Tx 发送数据的个数")]),v._v(" "),e("li",[v._v("lo 本地的环回")]),v._v(" "),e("li",[v._v("enther 网卡的mac地址")]),v._v(" "),e("li",[v._v("virbr0 linux虚拟化的一下网关等")])]),v._v(" "),e("h2",{attrs:{id:"查看网络情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看网络情况"}},[v._v("#")]),v._v(" 查看网络情况")]),v._v(" "),e("p",[v._v("查看⽹卡物理连接情况\n"),e("code",[v._v("mii-tool eth0")])]),v._v(" "),e("h2",{attrs:{id:"查看网关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看网关命令"}},[v._v("#")]),v._v(" 查看网关命令")]),v._v(" "),e("p",[v._v("查看网关"),e("br"),v._v(" "),e("code",[v._v("route -n")]),e("br"),v._v("\n使⽤ -n 参数不解析主机名（不加会接卸域名，太慢）")]),v._v(" "),e("h2",{attrs:{id:"网络配置命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络配置命令"}},[v._v("#")]),v._v(" 网络配置命令")]),v._v(" "),e("p",[v._v("• "),e("code",[v._v("ifconfig <接⼝> <IP地址> [netmask] [⼦⽹掩码 ]")]),e("br"),v._v("\n• "),e("code",[v._v("ifup <接⼝>")]),e("br"),v._v("\n• "),e("code",[v._v("ifdown <接⼝>")])]),v._v(" "),e("p",[v._v("添加⽹关")]),v._v(" "),e("p",[v._v("• "),e("code",[v._v("route add default gw <⽹关ip>")]),e("br"),v._v("\n• "),e("code",[v._v("route add -host <指定ip> gw <⽹关ip>")]),e("br"),v._v("\n• "),e("code",[v._v("route add -net <指定⽹段> netmask <⼦⽹掩码> gw <⽹关ip>")])]),v._v(" "),e("p",[v._v("网络命令集合：ip 命令")]),v._v(" "),e("p",[v._v("ip使用的网络栈ifconfig不支持，所有ip命令可以给一个网关绑定多个ip，但是用ipconfig查不到\n• "),e("code",[v._v("ip addr ls")]),e("br"),v._v("\n• "),e("code",[v._v("ifconfig")])]),v._v(" "),e("p",[v._v("• "),e("code",[v._v("ip link set dev eth0 up")]),e("br"),v._v("\n• "),e("code",[v._v("ifup eth0")])]),v._v(" "),e("p",[v._v("• "),e("code",[v._v("ip addr add 10.0.0.1/24 dev eth1")]),e("br"),v._v("\n• "),e("code",[v._v("ifconfig eth1 10.0.0.1 netmask 255.255.255.0")])]),v._v(" "),e("p",[v._v("• "),e("code",[v._v("ip route add 10.0.0/24 via 192.168.0.1")]),e("br"),v._v("\n• "),e("code",[v._v("route add -net 10.0.0.0 netmask 255.255.255.0 gw 192.168.0.1")])]),v._v(" "),e("h2",{attrs:{id:"网络故障排除命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络故障排除命令"}},[v._v("#")]),v._v(" 网络故障排除命令")]),v._v(" "),e("p",[v._v("具体参数可用man命令查")]),v._v(" "),e("p",[v._v("• "),e("code",[v._v("ping <主机>")]),v._v(" ping不通的情况可能是网络中断，或者对方防火墙的问题"),e("br"),v._v("\n• "),e("code",[v._v("traceroute -w 1 <主机>")]),v._v("  检测当前主机到目标主机的网络状况"),e("br"),v._v("\n• "),e("code",[v._v("mtr")]),v._v("  检测当前主机到目标主机的网络状况"),e("br"),v._v("\n• "),e("code",[v._v("nslookup")]),v._v("  查看域名对应的主机是什么"),e("br"),v._v("\n• "),e("code",[v._v("telnet")]),v._v("  检查端口链接状态"),e("br"),v._v("\n• "),e("code",[v._v("tcpdump")]),v._v("  检查数据包"),e("br"),v._v("\n• "),e("code",[v._v("netstat")]),v._v("  检查监听范围 （常用：-n:显示ip地址不显示域名；-t：以tcp的方式截取我们想显示的内容；-p：端口；-l：liction tcp的状态监听）\n• "),e("code",[v._v("ss")]),v._v("  检查监听范围")]),v._v(" "),e("h2",{attrs:{id:"网络服务管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络服务管理"}},[v._v("#")]),v._v(" 网络服务管理")]),v._v(" "),e("p",[v._v("网络服务管理程序分为两种，分别为SysV和systemd"),e("br"),v._v("\n• "),e("code",[v._v("service network start|stop|restart")]),e("br"),v._v("\n查看network的权限\n"),e("code",[v._v("chkconfig -list network")]),e("br"),v._v("\n打开权限\n"),e("code",[v._v("chkconfig --level 0123456 network on")])]),v._v(" "),e("p",[v._v("• "),e("code",[v._v("systemctl list-unit-files NetworkManager.service")]),v._v("\n• "),e("code",[v._v("systemctl start|stop|restart NetworkManger")]),v._v("\n开启和禁用system"),e("br"),v._v("\n• "),e("code",[v._v("systemctl enable|disable NetworkManger")])]),v._v(" "),e("h2",{attrs:{id:"网络配置⽂件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络配置⽂件"}},[v._v("#")]),v._v(" 网络配置⽂件")]),v._v(" "),e("p",[e("code",[v._v("ifcfg-eth0")]),v._v(" 网卡配置文件不知道名字可以查 "),e("code",[v._v("ll /etc/sysconfig/network-scripts/ | grep ifcfg-en")]),e("br"),v._v(" "),e("code",[v._v("/etc/hosts")]),v._v(" 主机相关配置\n"),e("code",[v._v("/etc/sysconfig/network-scripts")]),v._v(" 网卡配置文件\n修改完配置想要生效，需要执行 "),e("code",[v._v("service network restart")]),v._v("  重启网卡")]),v._v(" "),e("h2",{attrs:{id:"修改主机名（hostname）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改主机名（hostname）"}},[v._v("#")]),v._v(" 修改主机名（hostname）")]),v._v(" "),e("p",[v._v("永久修改"),e("br"),v._v(" "),e("code",[v._v("hostnamectl set-hostname centos7.test")]),e("br"),v._v(" "),e("strong",[v._v("注意修改还要修改 /etc/hosts⽂件")]),v._v("  不写系统启动时候会卡住等待，最后超时")]),v._v(" "),e("h2",{attrs:{id:"软件安装（目录）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件安装（目录）"}},[v._v("#")]),v._v(" 软件安装（目录）")]),v._v(" "),e("p",[v._v("• 软件包管理器"),e("br"),v._v("\n• rpm 包和 rpm 命令"),e("br"),v._v("\n• yum 仓库"),e("br"),v._v("\n• 源代码编译安装"),e("br"),v._v("\n• 内核升级"),e("br"),v._v("\n• grub 配置⽂件")]),v._v(" "),e("h2",{attrs:{id:"软件包管理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件包管理器"}},[v._v("#")]),v._v(" 软件包管理器")]),v._v(" "),e("p",[v._v("包管理器是⽅便软件安装、卸载，解决软件依赖关系的重要⼯具"),e("br"),v._v("\n• CentOS、RedHat 使⽤ yum 包管理器，软件安装包格式为 rpm"),e("br"),v._v("\n• Debian、Ubuntu 使⽤ apt 包管理器，软件安装包格式为 deb")]),v._v(" "),e("h2",{attrs:{id:"rpm命令安装软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm命令安装软件包"}},[v._v("#")]),v._v(" rpm命令安装软件包")]),v._v(" "),e("p",[v._v("rpm 包格式\nvim-common-7.4.10-5.el7.x86_64.rpm\n软件名称(vim-common) 软件版本(7.4.10-5) 系统版本(el7) 平台(.x86_64)")]),v._v(" "),e("p",[v._v("rpm 命令常⽤参数"),e("br"),v._v("\n• -q 查询软件包"),e("br"),v._v("\n• -i 安装软件包"),e("br"),v._v("\n• -e 卸载软件包")]),v._v(" "),e("p",[v._v("缺点，安装包下载的依赖关系需要自己解决，而不是它自己下载依赖")]),v._v(" "),e("h2",{attrs:{id:"yum命令安装软件包（推荐）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum命令安装软件包（推荐）"}},[v._v("#")]),v._v(" yum命令安装软件包（推荐）")]),v._v(" "),e("p",[e("strong",[v._v("rpm 包的问题")])]),v._v(" "),e("p",[v._v("• 需要⾃⼰解决依赖关系"),e("br"),v._v("\n• 软件包来源不可靠")]),v._v(" "),e("p",[v._v("**CentOS yum 源 **"),e("br"),v._v("\nhttp://mirror.centos.org/centos/7/")]),v._v(" "),e("p",[e("strong",[v._v("国内镜像")]),v._v("\nhttps://developer.aliyun.com/mirror/")]),v._v(" "),e("p",[e("strong",[v._v("yum 配置⽂件")]),e("br"),v._v(" "),e("code",[v._v("etc/yum.repos.d/CentOS-Base.repo")])]),v._v(" "),e("p",[v._v("可以直接去访问国内的"),e("a",{attrs:{href:"https://developer.aliyun.com/mirror/",target:"_blank",rel:"noopener noreferrer"}},[v._v("阿里云官方镜像站"),e("OutboundLink")],1),v._v(" 按着步骤备份、下载、生成缓存")]),v._v(" "),e("p",[v._v("yum命令常⽤选项")]),v._v(" "),e("p",[v._v("• install 安装软件包"),e("br"),v._v("\n• remove 卸载软件包"),e("br"),v._v("\n• list| grouplist 查看软件包"),e("br"),v._v("\n• update 升级软件包")]),v._v(" "),e("h2",{attrs:{id:"源代码编译安装软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源代码编译安装软件包"}},[v._v("#")]),v._v(" 源代码编译安装软件包")]),v._v(" "),e("ol",[e("li",[v._v("wget https://openresty.org/download/openresty-1.15.8.1.tar.gz\n下载软件包，如果不支持wget，请用yum安装")]),v._v(" "),e("li",[v._v("tar -zxf openresty-VERSION.tar.gz\n解压tar包")]),v._v(" "),e("li",[v._v("cd openresty-VERSION/"),e("br"),v._v("\n进入目录")]),v._v(" "),e("li",[v._v("./configure --prefix=/usr/local/openresty\n执行配置文件，并指定安装的路径地址，方便日后管理")]),v._v(" "),e("li",[v._v("make -j2\n使用2个逻辑cpu执行编译，如果没有上下文依赖关系，会加快速度，编译完成，当前目录会出行一个build目录，就是编译好的目录文件")]),v._v(" "),e("li",[v._v("make install\n安装，安装的位置就是之前指定的位置")])]),v._v(" "),e("h2",{attrs:{id:"升级内核"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级内核"}},[v._v("#")]),v._v(" 升级内核")]),v._v(" "),e("p",[e("strong",[v._v("1、rpm 格式内核")])]),v._v(" "),e("p",[v._v("查看内核版本")]),v._v(" "),e("p",[e("code",[v._v("uname –r")])]),v._v(" "),e("p",[v._v("例如升级内核指定版本")]),v._v(" "),e("p",[e("code",[v._v("yum install kernel-3.10.0")])]),v._v(" "),e("p",[v._v("升级已安装的其他软件包和补丁")]),v._v(" "),e("p",[e("code",[v._v("yum update")])]),v._v(" "),e("p",[e("strong",[v._v("2、源代码编译安装内核")])]),v._v(" "),e("ol",[e("li",[e("p",[v._v("安装依赖包\n根据经验提前下载依赖也可以到时候根据提示挨个下载"),e("br"),v._v(" "),e("code",[v._v("yum install gcc gcc-c++ make ncurses-devel openssl-devel elfutils-libelf-devel")])])]),v._v(" "),e("li",[e("p",[v._v("下载并解压缩内核")]),v._v(" "),e("p",[v._v("去kernel网站看一下最新版本，"),e("a",{attrs:{href:"https://www.kernel.org",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.kernel.org"),e("OutboundLink")],1),v._v(" 用weget下载tar包然后解压")]),v._v(" "),e("p",[e("code",[v._v("tar xvf linux-5.1.10.tar.xz -C /usr/src/kernels")])])]),v._v(" "),e("li",[e("p",[v._v("配置内核编译参数")]),v._v(" "),e("p",[e("code",[v._v("cd /usr/src/kernels/linux-5.1.10/")])]),v._v(" "),e("p",[e("code",[v._v("make menuconfig | allyesconfig | allnoconfig")])])]),v._v(" "),e("li",[e("p",[v._v("使⽤当前系统内核配置")]),v._v(" "),e("p",[e("code",[v._v("cp /boot/config-kernelversion.platform /usr/src/kernels/linux-5.1.10/.config")])])]),v._v(" "),e("li",[e("p",[v._v("查看 CPU")]),v._v(" "),e("p",[e("code",[v._v("lscpu")])])]),v._v(" "),e("li",[e("p",[v._v("编译")]),v._v(" "),e("p",[e("code",[v._v("make -j2 all")])])]),v._v(" "),e("li",[e("p",[v._v("安装内核")]),v._v(" "),e("p",[e("code",[v._v("make modules_install")])]),v._v(" "),e("p",[e("code",[v._v("make install")])])])]),v._v(" "),e("h2",{attrs:{id:"grub-配置⽂件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grub-配置⽂件"}},[v._v("#")]),v._v(" grub 配置⽂件")]),v._v(" "),e("p",[e("strong",[v._v("grub 是什么")]),v._v("\n启动的引导软件")]),v._v(" "),e("p",[e("strong",[v._v("grub 配置⽂件")])]),v._v(" "),e("p",[e("code",[v._v("/etc/default/grub")]),v._v(" 修改基本配置")]),v._v(" "),e("p",[e("code",[v._v("/etc/grub.d/")]),v._v(" 修改更详细的配置")]),v._v(" "),e("p",[e("code",[v._v("/boot/grub2/grub.cfg")]),v._v(" 不要直接修改它")]),v._v(" "),e("p",[e("code",[v._v("grub2-mkconfig -o /boot/grub2/grub.cfg")]),v._v(" 修改后执行")]),v._v(" "),e("p",[v._v("使⽤单⽤户进⼊系统（忘记 root 密码）")]),v._v(" "),e("h2",{attrs:{id:"进程管理（目录）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程管理（目录）"}},[v._v("#")]),v._v(" 进程管理（目录）")]),v._v(" "),e("ul",[e("li",[v._v("进程的概念与进程查看")]),v._v(" "),e("li",[v._v("进程的控制命令")]),v._v(" "),e("li",[v._v("进程的通信⽅式— 信号")]),v._v(" "),e("li",[v._v("守护进程和系统⽇志")]),v._v(" "),e("li",[v._v("服务管理⼯具 systemctl")]),v._v(" "),e("li",[v._v("SELinux 简介")])]),v._v(" "),e("h2",{attrs:{id:"进程的概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程的概念"}},[v._v("#")]),v._v(" 进程的概念")]),v._v(" "),e("p",[v._v("进程—运⾏中的程序，从程序开始运⾏到终⽌的整个⽣命周期是可管理的")]),v._v(" "),e("p",[e("strong",[v._v("C 程序的启动是从 main 函数开始的")])]),v._v(" "),e("p",[v._v("int main(int agrc, char *argv[])")]),v._v(" "),e("p",[e("strong",[v._v("终⽌的⽅式并不唯⼀，分为正常终⽌和异常终⽌")])]),v._v(" "),e("ul",[e("li",[v._v("正常终⽌也分为从 main 返回、调⽤ exit 等⽅式")]),v._v(" "),e("li",[v._v("异常终⽌分为调⽤ abort、接收信号等")])]),v._v(" "),e("h2",{attrs:{id:"进程的查看命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程的查看命令"}},[v._v("#")]),v._v(" 进程的查看命令")]),v._v(" "),e("p",[e("strong",[v._v("查看命令")])]),v._v(" "),e("ul",[e("li",[v._v("ps")]),v._v(" "),e("li",[v._v("pstree")]),v._v(" "),e("li",[v._v("top")])]),v._v(" "),e("p",[e("strong",[v._v("结论：")])]),v._v(" "),e("ul",[e("li",[v._v("进程也是树形结构")]),v._v(" "),e("li",[v._v("进程和权限有着密不可分的关系")])]),v._v(" "),e("h2",{attrs:{id:"进程的优先级调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程的优先级调整"}},[v._v("#")]),v._v(" 进程的优先级调整")]),v._v(" "),e("p",[e("strong",[v._v("调整优先级")])]),v._v(" "),e("ul",[e("li",[v._v("nice 范围从-20 到 19 ，值越⼩优先级越⾼，抢占资源就越多")]),v._v(" "),e("li",[v._v("renice 重新设置优先级")])]),v._v(" "),e("p",[e("strong",[v._v("进程的作业控制")])]),v._v(" "),e("ul",[e("li",[v._v("jobs")]),v._v(" "),e("li",[v._v("& 符号")])]),v._v(" "),e("h2",{attrs:{id:"进程间通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程间通信"}},[v._v("#")]),v._v(" 进程间通信")]),v._v(" "),e("p",[v._v("信号是进程间通信⽅式之⼀，典型⽤法是：终端⽤户输⼊中断命令，通过信号机制停⽌⼀个程序的运⾏。")]),v._v(" "),e("p",[v._v("使⽤信号的常⽤快捷键和命令")]),v._v(" "),e("p",[e("code",[v._v("kill -l")])]),v._v(" "),e("ul",[e("li",[v._v("SIGINT 通知前台进程组终⽌进程 ctrl + c")]),v._v(" "),e("li",[v._v("SIGKILL ⽴即结束程序，不能被阻塞和处理 kill -9 pid")])]),v._v(" "),e("h2",{attrs:{id:"守护进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#守护进程"}},[v._v("#")]),v._v(" 守护进程")]),v._v(" "),e("p",[v._v("使⽤ nohup 与 & 符号配合运⾏⼀个命令")]),v._v(" "),e("p",[e("code",[v._v("nohup tail -f /var/log/messages &")])]),v._v(" "),e("p",[v._v('nohup 命令使进程忽略 hangup（挂起）信号 ; nohup: 忽略输入并把输出追加到"nohup.out"')]),v._v(" "),e("p",[e("code",[v._v("ps -ef | grep tail")]),v._v(" 关掉终端也可以查看到进程")]),v._v(" "),e("p",[v._v("守护进程(daemon)和⼀般进程有什么差别呢？")]),v._v(" "),e("p",[v._v("不需要终端，开机自动启动")]),v._v(" "),e("p",[v._v("使⽤ screen 命令")]),v._v(" "),e("p",[v._v("screen 进⼊ screen 环境")]),v._v(" "),e("p",[v._v("ctrl+a d 退出 (detached) screen 环境")]),v._v(" "),e("p",[v._v("screen -ls 查看 screen 的会话")]),v._v(" "),e("p",[v._v("screen -r sessionid 恢复会话")]),v._v(" "),e("h2",{attrs:{id:"后面的略写了，记不住了，有了应用场景才好记住"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后面的略写了，记不住了，有了应用场景才好记住"}},[v._v("#")]),v._v(" 后面的略写了，记不住了，有了应用场景才好记住")]),v._v(" "),e("h2",{attrs:{id:"后面略写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后面略写"}},[v._v("#")]),v._v(" -------后面略写")]),v._v(" "),e("h2",{attrs:{id:"系统⽇志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统⽇志"}},[v._v("#")]),v._v(" 系统⽇志")]),v._v(" "),e("p",[v._v("常⻅的系统⽇志")]),v._v(" "),e("ul",[e("li",[v._v("/var/log")]),v._v(" "),e("li",[v._v("message")]),v._v(" "),e("li",[v._v("dmesg")]),v._v(" "),e("li",[v._v("cron")]),v._v(" "),e("li",[v._v("secure")])]),v._v(" "),e("h2",{attrs:{id:"服务管理⼯具systemctl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务管理⼯具systemctl"}},[v._v("#")]),v._v(" 服务管理⼯具systemctl")]),v._v(" "),e("p",[v._v("服务（提供常⻅功能的守护进程）集中管理⼯具")]),v._v(" "),e("ul",[e("li",[v._v("service")]),v._v(" "),e("li",[v._v("systemctl")])]),v._v(" "),e("p",[e("strong",[v._v("systemctl 常⻅操作")])]),v._v(" "),e("p",[v._v("systemctl start | stop | restart | reload | enable | disable 服务名称")]),v._v(" "),e("p",[v._v("软件包安装的服务单元 /usr/lib/systemd/system/")]),v._v(" "),e("p",[e("strong",[v._v("systemctl 的服务配置")])]),v._v(" "),e("p",[v._v("[Unit]"),e("br"),v._v("\nRequires = 新的依赖服务"),e("br"),v._v("\nAfter = 新的依赖服务")]),v._v(" "),e("p",[v._v("[Service]")]),v._v(" "),e("p",[v._v("[Install]"),e("br"),v._v("\n安装到哪个默认启动级别 /lib/systemd/system"),e("br"),v._v("\nsystemctl get-default | set-default")]),v._v(" "),e("h2",{attrs:{id:"内存与磁盘管理-（目录）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存与磁盘管理-（目录）"}},[v._v("#")]),v._v(" 内存与磁盘管理 （目录）")]),v._v(" "),e("ul",[e("li",[v._v("内存和磁盘使⽤率查看")]),v._v(" "),e("li",[v._v("ext4 ⽂件系统")]),v._v(" "),e("li",[v._v("磁盘配额的使⽤")]),v._v(" "),e("li",[v._v("磁盘的分区与挂载")]),v._v(" "),e("li",[v._v("交换分区（虚拟内存）的查看与创建")]),v._v(" "),e("li",[v._v("软件 RAID 的使⽤")]),v._v(" "),e("li",[v._v("逻辑卷管理")]),v._v(" "),e("li",[v._v("系统综合状态查看")])]),v._v(" "),e("h2",{attrs:{id:"内存使⽤率查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存使⽤率查看"}},[v._v("#")]),v._v(" 内存使⽤率查看")]),v._v(" "),e("p",[v._v("常⽤命令介绍")]),v._v(" "),e("ul",[e("li",[v._v("free")]),v._v(" "),e("li",[v._v("top")])]),v._v(" "),e("h2",{attrs:{id:"磁盘使⽤率的查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘使⽤率的查看"}},[v._v("#")]),v._v(" 磁盘使⽤率的查看")]),v._v(" "),e("p",[v._v("查看命令")]),v._v(" "),e("ul",[e("li",[v._v("fdisk")]),v._v(" "),e("li",[v._v("df")]),v._v(" "),e("li",[v._v("du")]),v._v(" "),e("li",[v._v("du 与 ls 的区别")])]),v._v(" "),e("h3",{attrs:{id:"常⻅⽂件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常⻅⽂件系统"}},[v._v("#")]),v._v(" 常⻅⽂件系统")]),v._v(" "),e("p",[v._v("Linux ⽀持多种⽂件系统，常⻅的有")]),v._v(" "),e("ul",[e("li",[v._v("ext4")]),v._v(" "),e("li",[v._v("xfs")]),v._v(" "),e("li",[v._v("NTFS（需安装额外软件）")])]),v._v(" "),e("p",[v._v("ext4 ⽂件系统基本结构⽐较复杂")]),v._v(" "),e("p",[v._v("• 超级块"),e("br"),v._v("\n• 超级块副本"),e("br"),v._v("\n• i 节点(inode)"),e("br"),v._v("\n• 数据块(datablock)")]),v._v(" "),e("p",[v._v("ext4 ⽂件系统深⼊理解")]),v._v(" "),e("p",[v._v("• 执⾏ mkdir 、touch、 vi 等命令后的内部操作"),e("br"),v._v("\n• 符号链接与硬链接"),e("br"),v._v("\n• facl")]),v._v(" "),e("h2",{attrs:{id:"磁盘分区与挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘分区与挂载"}},[v._v("#")]),v._v(" 磁盘分区与挂载")]),v._v(" "),e("p",[v._v("常⽤命令")]),v._v(" "),e("p",[e("code",[v._v("fdisk")]),v._v(" "),e("code",[v._v("mkfs")]),v._v(" "),e("code",[v._v("parted")]),v._v(" "),e("code",[v._v("mount")])]),v._v(" "),e("p",[v._v("常⻅配置⽂件")]),v._v(" "),e("ul",[e("li",[v._v("/etc/fstab")]),v._v(" "),e("li",[v._v("xfs⽂件系统的⽤户磁盘配额 quota")]),v._v(" "),e("li",[v._v("mkfs.xfs /dev/sdb1")]),v._v(" "),e("li",[v._v("mkdir /mnt/disk1")]),v._v(" "),e("li",[v._v("mount -o uquota,gquota /dev/sdb1 /mnt/disk1")]),v._v(" "),e("li",[v._v("chmod 1777 /mnt/disk1")]),v._v(" "),e("li",[v._v("xfs_quota -x -c ‘report -ugibh’ /mnt/disk1")]),v._v(" "),e("li",[v._v("xfs_quota -x -c ‘limit -u isoft=5 ihard=10 user1’ /mnt/disk1")])]),v._v(" "),e("h2",{attrs:{id:"交换分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交换分区"}},[v._v("#")]),v._v(" 交换分区")]),v._v(" "),e("p",[v._v("增加交换分区的⼤⼩")]),v._v(" "),e("p",[v._v("• mkswap"),e("br"),v._v("\n• swapon"),e("br"),v._v("\n使⽤⽂件制作交换分区")]),v._v(" "),e("p",[v._v("• dd if=/dev/zero bs=4M count=1024 of=/swapfile")]),v._v(" "),e("h2",{attrs:{id:"raid-与软件-raid-技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raid-与软件-raid-技术"}},[v._v("#")]),v._v(" RAID 与软件 RAID 技术")]),v._v(" "),e("p",[v._v("RAID 的常⻅级别及含义")]),v._v(" "),e("ul",[e("li",[v._v("RAID 0 striping 条带⽅式，提⾼单盘吞吐率")]),v._v(" "),e("li",[v._v("RAID 1 mirroring 镜像⽅式，提⾼可靠性")]),v._v(" "),e("li",[v._v("RAID 5 有奇偶校验")]),v._v(" "),e("li",[v._v("RAID 10 是RAID 1 与 RAID 0 的结合")])]),v._v(" "),e("p",[v._v("软件 RAID 的使⽤")]),v._v(" "),e("h2",{attrs:{id:"系统综合状态查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统综合状态查询"}},[v._v("#")]),v._v(" 系统综合状态查询")]),v._v(" "),e("p",[v._v("使⽤ sar 命令查看系统综合状态")]),v._v(" "),e("p",[v._v("使⽤第三⽅命令查看⽹络流量")]),v._v(" "),e("ul",[e("li",[v._v("yum install epel-release")]),v._v(" "),e("li",[v._v("yum install iftop")]),v._v(" "),e("li",[v._v("iftop -P")])])])}),[],!1,null,null,null);_.default=r.exports}}]);