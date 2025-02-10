# Really Stars

<div id="progress-container">
  <div id="progress-bar"></div>
</div>



## WSL2与docker安装 | docker 项目

因为不想写作业，所以顺便把WSL2和docker装了，顺便收藏一下参考博文

> 俗话说的好，一篇文献有问题，那就多找几篇一起看

懒得整理了，直接贴链接，最好几篇结合着做下去，不然早晚出问题🤣

- [关于WSL2的安装与踩坑](https://whythz.github.io/posts/%E5%85%B3%E4%BA%8EWSL2%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E8%B8%A9%E5%9D%91/)  
- [WSL2运行盘迁移](https://louis-kento.github.io/2024/05/01/win11%E9%85%8D%E7%BD%AEwsl2/)  
- [WSL2&Docker](https://peiyanlu.github.io/vite-press/cli/windows/wsl#%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98)
- [Docker基本介绍](https://blog.csdn.net/joeyoj/article/details/136427362)  
- [Docker Windows 修改默认镜像文件位置](https://zhuanlan.zhihu.com/p/343278599)

---

!!! tip "下面是一些项目"

1. 你的第一个[黑苹果](https://blog.csdn.net/warlack007/article/details/142999189)

> 笔记本配置一般不要轻易尝试，否则运行 6h，删库一分钟

跑不动的可以试试这个：[OSX (macOS) inside a Docker container](https://github.com/dockur/macos?tab=readme-ov-file)


2. 除了直接 RUN，你还需要知道 [docker compose](https://docker-minecraft-server.readthedocs.io/en/latest/)

3. [DPanel—docker desktop](https://dpanel.cc/#/)

4. [docker 清理](https://blog.csdn.net/lsqtzj/article/details/120960306#3%E3%80%81%E6%96%B0%E7%89%88%E6%9C%AC%E6%96%B9%E6%B3%95%C2%A0)

---


## WSL2 串口映射

在 WSL 下连接 USB 端口设备  
> usbipd 使用教程：[windows usbipd 命令 详细介绍](https://blog.csdn.net/sinat_32960911/article/details/143846526)

**安装 usbipd-win**

> 使用 winget 或者 [手动安装](https://github.com/dorssel/usbipd-win/releases/tag/v4.3.0)

**映射 id**

```powershell title="powershell"

# 列举串口
usbipd list
# 激活串口
usbipd bind --busid=<busid>
# 绑定串口
usbipd attach --busid <busid> --wsl

```
!!! example "示例"
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20250210194516.png)


在 `WSL(ubuntu)` 下

```bash title="bash"
# 查看串口信息
dmesg | grep usb    
```

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/O2CnbjBksoHaqcxo06OcowAJn4c.png)

---

## powershell 7.x 美化

oh-my-posh :[Win11 PowerShell 配置 | Nukiyoam's Blog](https://nukiyoam.github.io/blog/posts/windows/powershell/win11-powershell-%E9%85%8D%E7%BD%AE/)

!!! tip "补充"

- VsCode 打开 Powershell 配置文件

```powershell title="powershell"
code $PROFILE
```

- [windows 上 Oh My Posh 中文用户名报错问题解决](https://www.jianshu.com/p/f29cff9a7eec)

```powershell title="powershell"
# 卸载
winget uninstall JanDeDobbeleer.OhMyPosh
# 安装到指定非中文路径
winget install JanDeDobbeleer.OhMyPosh -s winget -l D:\your\path\to\OhMyPosh
```

- [Windows11 下 PowerShell 配置 Git_powershell](https://blog.csdn.net/yanceyxin/article/details/129649164)


---

## 高质量摸鱼 | 学习库

=== "科技杂志"
    - [weekly](https://github.com/ruanyf/weekly?tab=readme-ov-file)：科技爱好者周刊，每周五发布
    - [HELLOGITHUB](https://hellogithub.com/)

=== "ML/语言/算法"
    - [《动手深度学习》](https://zh.d2l.ai/index.html)电子书
    - [Foundations-of-LLMs-ZJU](https://github.com/ZJU-LLMs/Foundations-of-LLMs/tree/main)
    - [Learn PyTorch for Deep Learning](https://www.learnpytorch.io/)
    - [算法入门宝书](https://www.hello-algo.com/) | [算法代码步进可视化](https://staying.fun/zh)
    - [Go 语言入门](https://play-with-go.dev/)
    - [docker 入门](https://dockerlabs.collabnix.com/)

=== "系统架构"
    - [X86/ARM 架构逆向](https://0xinfection.github.io/reversing/)
    - [千行代码操作系统开发实战](https://operating-system-in-1000-lines.vercel.app/zh/)
    - [Linux-tutorial](https://dunwu.github.io/linux-tutorial/)

---

## NO GIT PULL

[一文](https://blog.csdn.net/chuyouyinghe/article/details/141386568)解释为什么要 rebase 而非 merge


---

## Win-UAC 管理员权限防止弹窗

规避管理员弹窗的[四种解决办法](https://blog.csdn.net/onlyfunboy/article/details/118000136)

---

## Linux 终端文件管理—superFile

> 在 Window 下的使用并不十分友好，可能更亲和 Linux😪

访问[项目主页](https://github.com/yorukot/superfile)了解详情

---

## TeXlive 安装与 VS Code 配置

开盖即食的 Window 系统下[论文环境搭建教程](https://mp.weixin.qq.com/s/7SMPcIRlH5DLVT0DDALwaw)

---

## 找到你的 ROADMAP

> 软件开发者的 ROADMAP 启蒙

访问[官网](https://roadmap.sh/roadmaps)查看详情 | 注意内含收费


---