# Awesome Finds

<div id="progress-container">
  <div id="progress-bar"></div>
</div>



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

## f.lux&久坐提醒

保护眼睛,就找[f.lux 使用手册](https://blog.csdn.net/weixin_44591166/article/details/108792990)

---

## V2rayforLinux

> 终于来了！

[release 下载转送门](https://github.com/2dust/v2rayN/releases?page=1)

```powershell title="powershell"
# 基于自身架构的安装包选型[x86_64 or arm]
uname -m
```

> 参考：[linux也能用上v2rayN](https://sharemarco.blogspot.com/2024/11/v2raynlinux-linux-linuxv2rayn.html)

在下载目录下

```powershell title="powershell"
# 添加执行权限
chmod +x v2rayN
# tun模式下启动
sudo ./v2rayN
```

后续配置与 Windows 下几乎无差

> ubuntu 下默认 firefox 浏览器需要调整浏览器代理设置，方可实现外部访问

---

## 不想学概率论？

通过交互式演示理解经典概率论定理：[看见概率论](https://probability.visualized.fun/)

---

## 你的 github 通缉令

专业的 GitHub 数据分析与可视化工具：[GitHub Insights Pro](https://github-insights-pro.toolsnav.top/)

---

## 本地测速

访问官网：[MySpeed](https://myspeed.dev/)

也可以作为 [docker 练手项目](https://cloud.tencent.com/developer/article/2451399)

---

## Markdown2PPT

将 markdown 文档转换成干净、专业的幻灯片

> 访问 [Moffee 项目主页](https://github.com/BMPixel/moffee)了解更多

??? example "示例文档"
    ```markdown title="moffeeのdemo.md"
        # moffeeのdemo

        @(layout=centered)

        ## 知晓关于 moffee 的一切

        ~~只挑我会的~~

        ===
        <->

        by **dixi**   
        2025-03-02

        ## 如何食用？


        1. 所见即所得，打开你的编译器对照🫡
        2. 近乎直觉，如果你习惯 `md` 语法的话[^1]
        3. 比较质朴。需要花哨的出门左转 [Slidev](https://cn.sli.dev/guide/)
        4. 可以通过高超的 `CSS` 技巧弥补，  
        但使用 `moffee` 的初衷不就是<u>简单</u>吗？




        [^1]:https://moffee.readthedocs.io/en/latest/syntax/

        @(layout=centered)


        ## 先说问题

        - 无法修改主题
        - 无法修改字体大小
        - 图片必须使用图床链接
        - 使用`<->`修改布局后，脚注无法正常显示
        - 其布局逻辑决定你的内容不得留白太多，  
        否则富文本巨丑
        - 高亮块内不能放置图片
        - 代码块不换行

        ## 可选配置

        可在文档开头以
        ```
        ---
        layout: centered|content
        background-image: url("https://placehold.co/600x400")
        color: white
        ---
        ```
        的形式设置全局配置



        或者用

        `@(layout=content,color=#FFFFFF, background-image='url("https://placehold.co/600x400")')`

        对某一页设置局部配置

        - 二级及以下文字颜色、背景与文字居中是唯三能动手的地方了😂



        ## 比如说

        这个`600x400`就是背景图片，你的图片也应该是这一比例。

        @(theme=robo, layout=centered, background-image='url("https://placehold.co/600x400")')

        ## 常见句法(Syntax)

        > 这一张PPT是为了告诉你具体有些啥，毕竟年轻人眼睛/脑子都不是很利索🤣👇



        ===

        **格式语法**

        - `# titleName`+`@(layout=centered)`：首页/章节封面
        - `##` 节标题
        - `###` 子节标题（以此类推）
        - 粗体、斜体、高亮
        - 有序、无序列表、引用
        - 链接、图片、表格
        - 代码块、公式、脚注
        - 高亮块（支持`note|danger|warning|tip`）


        <->

        **布局语法**

        - `---`：强制分页
        - `<->`：水平布局
        - `===`：堆叠布局（优先级更高）



        ### 示例

        ==Markdown== is all you need! Elements like $tex$ and `code` are rendered with elegant style.

        ===
        !!! note "note"

            1.  **粗体**|`代码块` |*斜体* | ==高亮== 与脚注[^1]
            2. > 我是引用
        
            - 
            ```python
            print("Hello, world!")
            ```
            - $\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}$


            | Feature | Benefit |
            |---------|---------|
            | Easy    | Saves time |
            | Flexible| Adaptable  |

        <->
        !!! danger "danger"

            moffee automatically breaks pages and chooses titles based on context.

        !!! warning "warning"

            moffee automatically breaks pages and chooses titles based on context.

        !!! tip "tip"
            
            moffee automatically breaks pages and chooses titles based on context.

        !!! 随意

            moffee automatically breaks pages and chooses titles based on context.
        <->

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/202502092115.svg)
            
        ===


        [^1]:生存还是死亡🤔





        # 结语

        勉强能用，期待更新

        @(layout=centered)
    ```

??? success "效果"
    ![Alt text](moffeeのdemo.pdf){ type=application/pdf style="min-height:75vh;width:100%" }



觉得过于单调？试试 [Slidev：专为开发者的演示工具](https://cn.sli.dev/)！

---

## ABDM 下载器

IDM 的平替，小而美

> 访问 [AB Download Manager 官网](https://abdownloadmanager.com/)了解更多

---

## ~~CLUT—TAB~~ 快速切换网页标签

!!! danger "已失效"
    ~~进一步解放鼠标/触摸板 🤪 但键位资源也是日趋紧张~~

    > ~~访问 [Cycle Last Used Tabs 插件主页](https://chrome.google.com/webstore/detail/clut-cycle-last-used-tabs/cobieddmkhhnbeldhncnfcgcaccmehgn?hl=zh-cn)了解更多~~

目前改用[QuickKey](https://fwextensions.github.io/QuicKey/)作为平替，其 ++alt+z++ 切换最近打开的两个Tab与我之前的设置不谋而合~

---

## MinerU

高质量的 MD2PDF 工具

> 访问[官网](https://mineru.net/)或者[项目主页](https://github.com/opendatalab/MinerU)了解详情  
> 安装包可至[度盘](https://pan.baidu.com/s/15uTZOgbbEREFkdKE2JCH0A?pwd=1369)下载

---

## stretchly

多端休息提醒工具，个人体验良好

> 访问[官网](https://hovancik.net/stretchly/)或者[项目主页](https://github.com/hovancik/stretchly)了解详情  
> 安装包可至[度盘](https://pan.baidu.com/s/11diYKmbQnn17oeuI1zQlbg?pwd=1369)下载

---

## 在线二维码生成

灵活实用的自定义[二维码设计网站](https://qrframe.kylezhe.ng/)

> 想玩点不一样的？试试[双链二维码](https://dualqrcode.com/)

---

## 聊聊天气与太空

值得一看：缅因大学的[全球气象统计与可视化网址](https://climatereanalyzer.org/)  

也许你想知道所有卫星眼里的地球？看看 [Keep Track](https://keeptrack.space/)

---

## 开发者备忘录

天生就应该住在收藏夹吃灰的 [CHEATSHEET](https://cheatsheets.zip/)

白嫖不易，记得去[主页](https://github.com/Fechin/reference) Star⭐~

---

## 懒蛋简历制作

海投简历配不上尊贵的 latex 模板？

试试 [Reactive Resume](https://rxresu.me/)，一键出片

---

## 矢量图 Enough

常用的 `icon` 库

- [iconfont](https://www.iconfont.cn/)
- [Phosphor](https://phosphoricons.com/)
- [Lucide](https://lucide.dev/icons/)
- [unDraw](https://undraw.co/)

---

## 数据库 Enough

常用的检索数据库

- [Data Commons](https://datacommons.org/)：谷歌开源，问答式数据检索
- [Our World in Data](https://ourworldindata.org/)：优雅可视化
- [联合国数据](https://data.un.org/)：官方数据

---
## 素材库 Enough

免费无版权的素材库

- [Pexels](https://www.pexels.com/)
- [Unsplash](https://unsplash.com/)
- [Pixabay](https://pixabay.com/zh/)
- [影视飓风](https://www.ysjf.com/material)

---

## 你的 Notion 头像

> 比如我的头像

去 [Notion Faces](https://faces.notion.com/)，说不定就遇上未来的工作头像了

---

## PDFMathTranslate

优雅的学术 PDF 翻译工具

> 访问[例程网址](https://pdf2zh.com/)或者[项目主页](https://github.com/Byaidu/PDFMathTranslate)了解详情

---

## Windows/Office 激活

dddd

> 访问[官网](https://kms.cx/)了解详情

---

## How to say：中国特色？

你需要一个专业的[特色翻译库](http://210.72.20.108/index/index.jsp)

---

## 古典诗词典籍

需要一个典雅蕴藉的古诗词网站？去看看[唐韵](https://www.chinesepoems.org/)

---

## Linux终端下的天气预报

这是[wego项目主页](https://github.com/schachmat/wego?tab=readme-ov-file)

不会配置？看看这篇：[通过 Wego 获取航站楼天气预报](https://cn.linux-terminal.com/?p=3666)

> 关于API，[OpenWeatherMap](https://openweathermap.org/)也不失为一种选择

---

## AI-Engineering-Hub

各种各样的 AI 工程项目，值得一看

> 访问[项目主页](https://github.com/patchy631/ai-engineering-hub/tree/main)了解详情

!!! tip "此外，它还提供数据科学的 tutorial PDF"
    ![](https://raw.githubusercontent.com/patchy631/ai-engineering-hub/main/resources/join_ddods.png)

---

## ETool

快捷键不够用了？试试[ETool](https://www.etool.site/)

当知识库话术、不常用命令、繁琐的启动配置都可以优雅的通过拼音缩写而不是"WEB→CSDN"的时候  
想想都令人心潮澎湃啊~

> 火柴 + pixpin + simpleTex + ETool，钱就要花在刀把上🤣

---

## 全球TV

前往[TVGarden](https://tv.garden/)，你甚至能听见格林兰岛的摇滚乐   
> 当然南极还不行

---

## 真のCookbook

如何煮出一个perfect egg？  
访问[How To Cook](https://cook.aiursoft.cn/)，获得纯粹的程序式Cookbook

> 妈妈再也不用担心我看不懂菜谱了🤣

---

## ML-Visuals

常见的ML解释框图，发布在[Google](https://docs.google.com/presentation/d/11mR1nkIR9fbHegFkcFq8z9oDQ5sjv8E3JJp1LfLGKuk/edit?slide=id.p#slide=id.p)上

> 或者访问项目的[github主页](https://github.com/dair-ai/ml-visuals)

---

## 小手一抖，Cursor就有

!!! bug "消失的标题，这是替身攻击"

无痛 cursor 续杯

快去给 [free-vip](https://github.com/yeongpin/cursor-free-vip) 点星星叭~

---

## 为repo生成tutorial

当你迷失在开源项目的第一个`.py`中时，不妨试试[PocketFlow](https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge)吧~

> 默认为gemini API，是免费的，如果你有Google账号的话  

