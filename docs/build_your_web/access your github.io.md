

# 网站搭建与发布

<div id="progress-container">
  <div id="progress-bar"></div>
</div>


!!! tip "通关此副本需要掌握的知识点"
    1. 环境管理意识与虚拟环境的搭建，可以是 python venv 或者本节所述 conda
    2. 一点点的 powershell 命令，主要是会{==复制粘贴==}
    3. 一点点的网页前端知识，主要是会{==复制粘贴==}
    4. github 仓库创建与 git 基本指令

## conda 下的虚拟环境构建

!!! info "可以跳过"
    如果您已经是 conda 熟练工，或者您不需要隔离/不需要在本地运行，大可不必浪费时间



!!! example "环境隔离的原因"
    您也不像您的 base 环境和恒河水一样丰富多 error 吧 :smiling_face_with_tear:

### 关于 conda | venv

相关的安装 | 学习帖

=== "conda"

    1. [Anaconda 卸载与重新安装](https://blog.csdn.net/qq_44961737/article/details/131897115) ~~别问为什么是重装~~
    2. [在 powershell 使用 conda 命令](https://blog.csdn.net/m0_57170739/article/details/134833229)
    3. [conda 常用命令](https://blog.csdn.net/chenxy_bwave/article/details/119996001) 当然，您也可以用 anaconda 的 GUI 进行管理

=== "venv"
    - [ venv 创建虚拟环境](https://blog.csdn.net/qq_42951560/article/details/124224972)


### 环境实操

下面以 conda 为例创建 mkdocs 依赖环境

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/KdH0brzzeo9MtCxco3lcSZIHnPc.png)

复制下面命令检查 conda 配置，若正常输出则此前安装成功

```powershell title="powershell"
conda config --show
```

---

1. 创建环境

观察现有虚拟环境

```powershell title="powershell"
conda env list
```

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/ZFSVbbrTQoTS1xxkP3Ic5EY1ng9.png)

此时应只有 base 环境

```powershell title="创建环境 | env_name 写自己的名字 | python 版本没有特别要求"
conda create -n env_name python=3.10
```

build 结束后，再次 `conda env list` 即可看见自己新创建环境

---

2. 进入环境

```powershell title="powershell"
conda activate env_name
```

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/O03zbHuVQoUdYjxa4NtcJ10Pnwf.png)

前带环境名称即为成功进入

!!! warning "别忘记先进子环境再 `pip install`"
    

## 用 mkdocs 搭建您的网站

### 依赖安装

这里是其中一个可能出问题的地方，如果后续出现报错，很有可能就是漏包了   
下面列出用到的所有依赖，可按需下载(1)
  { .annotate }

1.  - 我没有改 channel ，所以直接带了阿里云的镜像，如果 ^^速度不对头^^ 可自行调整  
    - 在下包之前，需要确认已有 pip  

=== "说明"

    ```powershell title="powershell"
    # 添加 mkdocs
    pip install mkdocs -i https://mirrors.aliyun.com/pypi/simple/
    # 添加 material 主题
    pip install mkdocs-material -i https://mirrors.aliyun.com/pypi/simple/ 
    # 添加 python-markdown 扩展
    pip install pymdown-extensions -i https://mirrors.aliyun.com/pypi/simple/ 
    # 添加字数统计插件
    pip install mkdocs-statistics-plugin -i https://mirrors.aliyun.com/pypi/simple  
    # 添加jieba，用于修复中文搜索问题，但需覆写，后续不再涉及
    pip install jieba -i https://mirrors.aliyun.com/pypi/simple/
    # 添加图片放大插件
    pip install mkdocs-glightbox -i https://mirrors.aliyun.com/pypi/simple/
    ```
=== "纯享复制版"

    ```powershell title="powershell"
    pip install mkdocs -i https://mirrors.aliyun.com/pypi/simple/
    pip install mkdocs-material -i https://mirrors.aliyun.com/pypi/simple/ 
    pip install pymdown-extensions -i https://mirrors.aliyun.com/pypi/simple/ 
    pip install mkdocs-statistics-plugin -i https://mirrors.aliyun.com/pypi/simple  
    pip install jieba -i https://mirrors.aliyun.com/pypi/simple/
    pip install mkdocs-glightbox -i https://mirrors.aliyun.com/pypi/simple/
    ```
    

### 项目本地部署

选择一个目录用于存放您的项目，并在该目录下打开 powershell ，进入虚拟环境，或者直接 cd  
例如我存放的位置是 `D:\dixiLOG\`

接着输入指令 `mkdocs new project_name` 创建项目，就会获得如下的目录树

```text
project_name
├── docs
│   └── index.md
└── mkdocs.yml
```

其中，mkdocs.yml 为 config 文件，docs 文件夹下存储笔记

接着进入项目并启动服务器

```powershell title="powershell"
cd project_name
mkdocs server
```

可以看见

```powershell
Prefix dict has been built successfully.
INFO    -  Documentation built in 1.55 seconds
INFO    -  [15:58:19] Watching paths for changes: 'docs', 'mkdocs.yml'
INFO    -  [15:58:19] Serving on http://127.0.0.1:8000/
```

说明启动成功。在浏览器打开 `127.0.0.1:8000` 即可打开网站，即 `index.md`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Aakhbdy42oSqcXx66g8cj743neb.png)


!!! tip "tip"
    当出现问题想要查看 log 时可以用 `mkdocs server -- verbose` 启动本地服务器，并查看 powershell 窗口信息

之后我们就可以优雅的用三行代码开启服务器啦

```powershell hl_lines="1-2" title="powershell" 
cd D:\dixiLOG\demo\
conda activate dixiLOG
mkdocs server -- verbose
```

记得把工程路径和环境名称改成自己的

### HAVE A TRY

或许您希望能让您的网站更有活力一些，那就先尝试换一个主题吧~

打开 `mkdocs.yml` ，添加

```yaml title="mkdocs.yml"
theme:
  name: material #主题名称
```

如果没报错，您已经看见了世界上最美丽的主题——material ！O(∩_∩)O

hold on，让我们把最复杂的配置留到最后 ~~复制粘贴~~ ，先解决 easy 的网站托管发布问题吧

??? abstract "可能有用"
      我准备了一个[release版本](https://github.com/dixiLOG/dixiLOG.github.io/releases/tag/web)，包含最基础的配置，您在下载后可随意折腾  
      但玩弄之后还是建议跟着后面的配置说明，从零开始按需复制到自己的工程上喔O(∩_∩)O(1)
      { .annotate }

      1.  年久失修，鬼知道有啥bug :material-emoticon-confused-outline:

## 用 github-pages 发布您的网站

!!! info "总体思路"
    创建远程与本地仓库 → 把本地内容复制到本地仓库目录 → 推送到远程仓库 → 编译渲染发布  
    当然，也可创建远程仓库 → 关联工程文件与远程仓库 → 推动到远程仓库 → 编译渲染发布

在您的 Github 上创建一个名为 `<您的用户名>.github.io` 的仓库，比如 `dixiLOG.github.io`

修改 Settings->Actions->General 选项与图示一致，尤其注意蓝框部分

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/CJEYbwAOfoXRY2x22zXcxF4BnEc.png)

接着找个记得住的位置 `git clone`，再把 docs 文件夹和 mkdocs.yml 复制到这一本地仓库

??? tip "关于仓库关联方式"
    仓库最好能用 ssh 连接而非 HTTPS ，不然网速降下来 push 是很很痛苦的  
    但需要配置过 ssh 密钥，具体见[传送门](https://blog.csdn.net/weixin_42310154/article/details/118340458)

### 举个例子

我把仓库和工程放在目录下，以方便搬运，即

```text
dixiLOG
├─ dixiLOG.github.io  //本地仓库
│  ├─ .git
│  ├─ mkdocs.yml
│  ├─ README.md   //如果您需要的话，可自行添加
│  └─ docs
└─ demo
   ├─ mkdocs.yml
   └─ docs
```

先不急着 push

下一步，仓库目录下 powershell  输入神秘代码

```powershell title="powershell"
mkdir .github
cd .github
mkdir workflows
cd workflows
touch PublishMySite.yml
```

这时的仓库结构变为

```text hl_lines="4-6"
dixiLOG
├─ dixiLOG.github.io
│  ├─ .git
│  ├─ .github
│  │  └─ workflows
│  │     └─ PublishMySite.yml
│  ├─ mkdocs.yml
│  ├─ README.md  
│  └─ docs
└─ demo
   ├─ mkdocs.yml
   └─ docs
```

打开 PublishMySite.yml 复制粘贴一下

```yaml title="PublishMySite.yml"
name: publish site
on: # 在什么时候触发工作流
  push: # 在从本地main分支被push到GitHub仓库时
    branches:
      - main
  pull_request: # 在main分支合并别人提的pr时
    branches:
      - main
jobs: # 工作流的具体内容
  deploy:
    runs-on: ubuntu-latest # 创建一个新的云端虚拟机 使用最新Ubuntu系统
    steps:
      - uses: actions/checkout@v2 # 先checkout到main分支
      - uses: actions/setup-python@v2 # 再安装Python3和相关环境
        with:
          python-version: 3.x
      - run: pip install mkdocs-material # 使用pip包管理工具安装mkdocs-material
      - run: pip install mkdocs-statistics-plugin    # 附加statistics插件，这句不加则github报错
      - run: pip install mkdocs-glightbox # 附加图片放大插件，这句不加则github可能报错
      - run: mkdocs gh-deploy --force # 使用mkdocs-material部署gh-pages分支
```

保存退出，**推送到仓库** ，再如下图修改 Pages 选项，大功告成 ヾ(o◕∀◕)ﾉヾ  

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/SmRwbyfMSoxi9FxkQUEcKGZMnvb.png)

> 不出意外的话，互联网上又多了一个博客:men_with_bunny_ears_partying:

后续在修改本地仓库内容并推送后即可完成更新