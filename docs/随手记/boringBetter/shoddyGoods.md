# Shoddy Goods

<div id="progress-container">
  <div id="progress-bar"></div>
</div>


## 微信骰子

!!! failure "20260222更新：微信PC端新版本（4.x）已修复该<span style="border-bottom: 1.5px dashed orange;">特性</span> T.T"

一开始是看见pyq有人在吐槽自己的赛博运气，于是来了兴趣

打算在Windows下抓包康康先，可谁知电脑端微信甚至不能收藏骰子表情，也没有动画  
这下反而给了我启发，看来是因为电脑下可操作空间太大给ban掉了，这不是“此地无银三百两”  
我又顺手把手机发给电脑端微信的骰子 ^^转发^^ 给其他人......  
啊现在这个骰子我说是几就是几（bushi

但总不可能一直随身带着电脑，于是将目光转向手机  
很可惜，不行， ^^除了我的手机嘻嘻^^  
尝试下来，除了OPPO，其他都会出现合并转发时多无义框框、动画消失等问题

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

!!! success "经同学提醒，用批处理代替手动键入"
    手搓.bat文件，可至[度盘下载](https://pan.baidu.com/s/1WRNG7liVrlwQWyqvHyuZcw?pwd=1369)

---

## CFOP 

!!! example ""
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/RFDVb0jDao4SxAxi9F0cqWq4njg.png){style="zoom:25%;"}


---

## Win 下 SSH KEY 重配记录

在一次推送时偶遇

```powershell title="powershell"
ssh: connect to host github.com port 22: Connection timed out
```

用管理员终端修改 `.ssh` 的 `config` 文件，改用 `443` 端口，并再次尝试连接

```powershell title="powershell"
ssh -T git@github.com
```

似乎触动了 ssh 的安全保护，拒绝访问

```powershell title="powershell"
Bad owner or permissions on ~/.ssh/config
```

反复修改权限而无果，遂重配 SSH KEY🥲 并记录

> 参考：[Port 22 is blocked, how can I push to Git with SSH?](https://amesbury.it/git/github/2018/05/15/port22-blocked-github.html)| [生成新的 SSH 密钥](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

检查现有 SSH KEY

```powershell title="powershell"
cd ~/.ssh
ls
```

你可能会看到类似以下文件：

- `id_rsa` 和 `id_rsa.pub` （RSA 私钥和公钥），或者 `id_ed25519` 和 `id_ed25519.pub` （ED25519 密钥对）
- `config`（SSH 配置文件）

确定不再需要旧密钥后，可删除指定文件

```powershell title="powershell"
rm -f id_rsa id_rsa.pub config
```

> 或者直接在【文件资源管理器】里右键删除

生成新的 SSH 密钥对（更推荐使用 `ed25519` 算法）

```powershell title="powershell"
ssh-keygen -t ed25519 -C "exampl@email.com"
```

- 系统会提示保存密钥的位置，默认为 `C:\Users\<用户名>\.ssh\id_ed25519`，直接回车接受默认位置即可
- 接着会提示输入密钥密码（可选），你可以设置密码来提高安全性，也可以直接回车跳过

为了使系统记住你的密钥密码（如果设置了密码）以及方便使用 SSH，需启动 ssh-agent 并将新生成的私钥添加进去

检查 ssh-agent 服务状态

```powershell title="powershell"
➜ ~ Get-Service ssh-agent

Status   Name               DisplayName
------   ----               -----------
Stopped  ssh-agent          OpenSSH Authentication Agent
```

若状态为 `Stopped`，则将其设置为自启动并启动服务

```powershell title="powershell"
Set-Service -Name ssh-agent -StartupType Automatic
Start-Service ssh-agent
```

再次检查服务

```powershell title="powershell"
➜ ~  Get-Service ssh-agent

Status   Name               DisplayName
------   ----               -----------
Running  ssh-agent          OpenSSH Authentication Agent
```

最后，获取公钥

```powershell title="powershell"
cat ~/.ssh/id_ed25519.pub
```

复制公钥内容，在 Github 中添加即可

不难注意到，这并没有解决 22 端口无法访问的问题

这一次我尝试直接在目录下右键新建.txt→ 改名为 config→ 添加

``` title="config"
Host github.com
    HostName ssh.github.com
    User git
    Port 443
```

保存关闭后，再次测试 SSH 连接

```powershell title="powershell"
ssh -T git@github.com
Hi dixiLOG! You've successfully authenticated, but GitHub does not provide shell access.
```

问题解决（如果不能，可能需要 Fetch coffee 嘞）

---

## 合并 Commit，保持简洁

利用 Git rebase 将多个 commit 合并为一个（也称为 squash）

> 参考：[Git 合并多个 commit](https://www.cnblogs.com/daodaotest/p/13591937.html) | [工作中是如何使用 Git 的](https://zhuanlan.zhihu.com/p/250493093)

开始之前，使用 `git state` 确保当前分支无冲突，使用 `git log --oneline` 确认合并分支

下面假设需要合并最近的三个 `commit`，终端中执行命令

```powershell
git rebase -i HEAD~3
```

此命令会打开默认的文本编辑器（通常为 `Vim`），显示如下内容：

```powershell
pick 1234567 Commit message add 1
pick 89abcd0 Commit message add 2
pick ef01234 Commit message add 3
```

其中，最上面一行对应的是最早的 `commit`，而最后一行是最新的 `commit`

在打开的编辑器中，保留第一行的 `pick`（表示保留该 `commit`），将后面的 `commit` 行前面的 `pick` 改为 `squash`（或缩写为 `s`），表示将该 `commit` 与上一个 `commit` 合并

```powershell
pick 1234567 Commit message add 1
s 89abcd0 Commit message add 2
s ef01234 Commit message add 3
```

这样操作后，Git 将会把第二和第三个 `commit` 合并到第一个 `commit` 上

保存并退出编辑器（在 Vim 中，输入 `:wq` 然后回车）

接下来 Git 会再次打开编辑器，让你编辑合并后的 `commit` 消息(1)
{ .annotate }

1.  为保证远端仓库的整洁，`commit` 应避免冗杂


如果 rebase 过程中出现冲突，Git 会提示你解决冲突。解决完冲突后，使用以下命令继续：

```powershell
git add <冲突解决后的文件>
git rebase --continue
```

合并完成后，分支历史已经重写。  
如果你的分支已经推送到远程仓库，需要使用 force 推送更新远程分支：

```powershell
git push --force
```

---

