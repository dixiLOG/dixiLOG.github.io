# 无聊可期

<div id="progress-container">
  <div id="progress-bar"></div>
</div>


!!! tip "记录一些很无聊的想法，收藏一些很给力的干货 ，take easy~"
    吃灰仓库，毫无格式可言 :fontawesome-solid-plane:

[TOC]

---

## 更优雅的网易云

一开始我只是想把歌词内嵌到任务栏里面，谁知道......

!!! warning "说实话"
    我认为新版本的网易云已经很好看了，没必要再用插件改装   
    当然，你永远无法阻拦一个以折腾为乐的人 :smiling_face_with_tear:

> 插件效果见下

!!! example ""
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/BNCM20241109201208.jpg "插件拉满后")


注意：部分渲染插件会占用CPU 10~20%的资源，甚至是50%

> 传送门：[关于 BetterNCM最全面的介绍以及疑难解答](https://v2e2npdz15.feishu.cn/docx/UZkSd9d46o4fVOxaPNBcGXSenme)

---

## 微信骰子

一开始是看见pyq有人在吐槽自己的赛博运气，于是来了兴趣

打算在Windows下抓包康康先，可谁知电脑端微信甚至不能收藏骰子表情，也没有动画  
这下反而给了我启发，看来是因为电脑下可操作空间太大给ban掉了，这不是“此地无银三百两”  
我又顺手把手机发给电脑端微信的骰子 ^^转发^^ 给其他人......  
啊现在这个骰子我说是几就是几（bushi

但总不可能一直随身带着电脑，于是将目光转向手机  
很可惜，不行， ^^除了我的手机嘻嘻^^
尝试下来，除了OPPO，会出现合并转发时多无义框框、动画消失等问题

!!! warning "损人不利己，最好别用，伤感情；当然抓壮丁另说🤷‍♂️"

---
## 去顽固硬盘

移动硬盘，特别是数据盘，你热插拔试试？:angry:  
但有时候system占进程，或者everything扫盘，这辈子都弹出不了  
最后忍痛关机，非常不优雅

> 但互联网总有良医赐药：[记一次无法弹出移动硬盘的记录](https://elkan1788.github.io/tech/unmountd-mobile-disk-log.html)

下面记录一下对我来说缀好的解决方案，即通过终端软重连：

```powershell title="powershell"
# 进入DiskPart控制台
diskpart
# 列出电脑可用磁盘
list disk
# 选择要重连的磁盘，不要连错了啊！
select disk X
# 移动设备脱机
offline disk
# 重联磁盘
online disk
# 退出DiskPart控制台
exit
```

然后应该就可以正常弹出硬盘了  
也可能和我一样，重连完后还需要等一会儿everything/类似的工具扫盘，扫完亦可弹出

---
## WSL2与docker安装

因为不想写作业，所以顺便把WSL2和docker的装了，顺便收藏一下参考文献

> 俗话说的好，一篇文献有问题，那就多找几篇一起看

懒得整理了，直接贴链接，最好几篇结合着做下去，不然早晚出问题🤣

- [关于WSL2的安装与踩坑](https://whythz.github.io/posts/%E5%85%B3%E4%BA%8EWSL2%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E8%B8%A9%E5%9D%91/)  
- [WSL2运行盘迁移](https://louis-kento.github.io/2024/05/01/win11%E9%85%8D%E7%BD%AEwsl2/)  
- [WSL2&Docker](https://peiyanlu.github.io/vite-press/cli/windows/wsl#%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98)
- [Docker基本介绍](https://blog.csdn.net/joeyoj/article/details/136427362)  
- [Docker Windows 修改默认镜像文件位置](https://zhuanlan.zhihu.com/p/343278599)


---