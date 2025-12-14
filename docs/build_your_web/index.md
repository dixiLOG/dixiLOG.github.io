

# 记录从零开始的网站搭建
  
<div id="progress-container">
  <div id="progress-bar"></div>
</div>

> 谁会拒绝创造自己的小小世界呢~~  
  
!!! success "起因"
    在检索学习笔记的过程中发现了很多优质的个人博客网站，再望了一眼自己的飞书笔记库......  
    “Feishu -> githubPage”的想法便油然而生

!!! tip "网站说明——确保你喜欢它"
    配置：Windows 11 | 主题：Material for MkDocs
    基本结构：mkdocs + material + github-pages + vscode | 无 override 覆写 | 无 build |  图床    
    附加内容：
    :   extra.css | extra.js 界面美化  
        blog | statistics plugin  
        giscus 评论模块  
        Google Analytics | firebase 身份验证  
        霞鹜文楷字体

!!! example "必要的准备"
    1.  一台电脑，最好可以科学上网
    2.  一个 github 账号 | 关于2FA，推荐手机谷歌商店下载 Authenticator 并关联 github 账号（需要✈️）[^1]
    3.  Vscode，或其他编辑器，有python/markdown/html相关插件（没有的同学可以用文本编辑器代替😋）  
    4.  Patience

[^1]: github 2FA 设置 [传送门](https://www.cnblogs.com/johnnyzen/p/17880870.html)

!!! warning "叠甲"
    从零开始≠零基础，若无 *helloworld* 基础，则不建议折腾  
    仅<span style="border-bottom: 1.5px dashed orange;">**复述**</span>本博客的搭建路径与思路，做不到面面俱到::>_<::不过会尽可能把相关的文档贴在旁边的  
    是隔了一段时间的网站搭建复盘，so 😂  
    如遇问题，阿弥陀佛🧙‍♀️（GPT > 换个教程 > 找我略略略）



> OK，如果你已经准备好 ~~浪费时间~~ ~~各种折腾~~ 搭建属于自己的博客，那就让我们开始吧！

??? info "TOC"
    - [x] 记录从零开始的网站搭建流程  
          - [x] *conda* 下的虚拟环境构建
          - [x] 用 *mkdocs* 搭建你的网站
          - [x] 用 *github*-*pages* 发布你的网站
          - [x] 用 *material* 优化你的网站
          - [x] 基于 *feishu2md* 的飞书文档迁移
    - [x]  ~~常用语法速查~~ [老年痴呆表](http://dixilog.github.io/build_your_web/markdown%20%E9%80%9F%E8%AE%B0/)


??? quote "所有参考"  
    以下为我在搭建过程中参考的文档，在此列出：  
    :   1. [mkdocs 官方文档_部分中文](https://wdk-docs.github.io/mkdocs-material-docs/)  
        1. [mkdocs 官方文档(recommend)](https://squidfunk.github.io/mkdocs-material/)  
        2. [Shaun's rabbit hole | 网站建设](http://www.cuishuaiwen.com:8000/zh/PROJECT/TECH-BLOG/mkdocs_and_material/)  
        3. [CCnocc 的博客 | 网站建设](https://zjuccnocc.github.io/BlogWriteup/Mkdocs%E4%BD%BF%E7%94%A8Writeup/#_7)  
        4. [yliu-fe 的博客 | 评论模块](https://yliu-fe.github.io/Techs/Notes%20for%20Mkdocs/Comment%20with%20Giscus/)  
        5. [shafish 的博客 | 网站建设](https://shafish.cn/blog/mkdocs/)  
        6. [RonaldLN 的博客 | 修复 blog 下 statistics 显示问题](https://ronaldln.github.io/MyPamphlet-Blog/2023/10/24/mkdocs-material/)  
        7. GPT 老师！！

