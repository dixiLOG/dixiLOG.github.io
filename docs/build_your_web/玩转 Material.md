

# 玩转 Material

<div id="progress-container">
  <div id="progress-bar"></div>
</div>


> 看似最简单实则最折磨的一步(╯﹏╰)  

其实[官方文档](https://squidfunk.github.io/mkdocs-material/tutorials/blogs/basic/)能解决 80% 的问题，但第一次 face 可能会迷失方向  
所以我会先尝试为“设置”模块—— mkdocs.yml 写一份尽可能详细的说明书  
让您能够游刃有余的在官方文档中找到自己所需  
当然，我也会给出自己的配置方案，您可以在我的基础上修改（不建议）

## 关于 mkdocs.yml ，我们能做些什么？

### 字段树

```text
mkdocs.yml
├─ site_author
├─ site_name
├─ site_url
├─ site_description
├─ repo_name
├─ repo_url
├─ copyright
├─ nav
│  └─ 您的项目结构
├─ theme
│  ├─ 主题配置
│  └─ features
├─ plugins
├─ markdown_extensions
├─ extra
├─ extra_javascript
└─ extra_css
```

### 字段解释

#### 站点信息

:   site_author：站点作者

:   site_name：站名

:   site_url：站点地址，如 `https://dixilog.github.io/`

:   site_description：站点描述，用于搜索引擎附栏 / 收藏介绍

:   repo_name：您的 github 仓库名称

:   repo_url：您的 github 地址

:   copyright：版权声明，不是很懂，建议百度

---

#### nav——导航树

> mkdocs 初始化时会自主渲染 nav 下每一路径的文档

!!! abstract "关于 nav"
    除了配置 blog 插件对应文件夹下文档，其余都需要先在导航树中说明，方可成功渲染  
    配置格式为“栏目 + 子文档”

^^下面以我的 nav 为例进行说明^^

1. 一级缩进为总栏目，如“Home”“NBU-NOTEBOOK”等，栏目下可有任意子栏目
2. 在 nav 中的顺序即为网址排序
3. 每一栏目下必须有一个 index.md，而第一栏目下的为网站先导页，即 HOME 页
4. 渲染后的 ==栏目名== 受 nav 配置控制，==文档名== 一般就是标题

```yaml title="mkdocs.yml"
# 导航树配置
nav:
  - Home: 
    - index.md
    - Build Your Own Blog: 
      - build_your_web/index.md
      - build_your_web/access your github.io.md
      - build_your_web/玩转 Material.md
      - build_your_web/feishu2githubPages.md
    - build_your_web/markdown 速记.md
  - NBU-NOTEBOOK: 
      - NBU-NOTEBOOK/index.md
      - NBU-NOTEBOOK/S&S.md
  - 随手记[TODO]:
      - 随手记/index.md
  - Chronic Study[TODO]:
      - Chronic Study/index.md
  - NBU_ROCOS:
      - ROCOS/index.md
      - ROCOS/info&ref.md
  - 闲言碎语:
      - blog/index.md
```

对应的目录树（部分）

```
docs
├─ index.md
│
├─ build_your_web
│  ├─ access your github.io.md
│  ├─ feishu2githubPages.md
│  ├─ index.md
│  ├─ markdown 速记.md
│  └─ 玩转 Material.md
│
├─ NBU-NOTEBOOK
│  ├─ index.md
│  └─ S&S.md
│
├─ 随手记
│  └─ index.md
│
├─ Chronic Study
│  └─ index.md
│
├─ ROCOS
│  ├─ index.md
│  └─ info&ref.md
│
└─ blog
   ├─ .authors.yml
   ├─ index.md
   └─ posts
```

熟悉之后就可以在自己构思的网站框架基础上搭建目录环境并配置 nav 啦~


---

#### 我们还能做些什么？



=== "theme 基础配置"

    > 这一部分和 [Setup](https://squidfunk.github.io/mkdocs-material/setup/) 部分对应 
 
    ^^name^^：主题名称，这里填 material(当然，您也可以换成您喜欢的)  
    ^^favicon^^：网站图标  
    ^^language^^：语言  
    ^^font^^：字体，包括正文与代码  
    ^^palette^^：亮暗色模式配置  
    ^^icon^^：用到的 icon，如 logo、注释等(1)
    { .annotate }

    1. [icon 检索](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/#search)传送门
     
    ??? tip "可选 icon"  
        <center>

        | Icon name <br/>  | Purpose<br/>                                                                                             |
        | ---------------- | -------------------------------------------------------------------------------------------------------- |
        | `logo`<br/>      | 左上角的 LOGO<br/>                                                                                       |
        | `menu`<br/>      | Open drawer<br/>                                                                                         |
        | `alternate`<br/> | Change language<br/>                                                                                     |
        | `search`<br/>    | Search icon <br/> |
        | `share`<br/>     | Share search<br/>                                                                                        |
        | `close` <br/>    | Reset search,  dismissannouncements<br/>                                                                 |
        | `top`<br/>       | Back-to-top button<br/>                                                                                  |
        | `edit`<br/>      | Edit current page<br/>                                                                                   |
        | `view`<br/>      | View page source<br/>                                                                                    |
        | `repo`<br/>      | Repository icon<br/>                                                                                     |
        | `previous`<br/>  | Previous page in footer, hide search on mobile<br/>                                                      |
        | `next`<br/>      | Next page in footer<br/>                                                                                 |

        </center>

    ??? example "我的配置"  
        ```yaml title="mkdocs.yml"
        name: material # 主题名称
        _# custom_dir: overrides # 自定义文件夹，对于个别页面，如果您不想使用主题的默认样式，可以在这里进行修改，使用里面的文件覆盖主题的默认文件。具体可以参考material官方文档_
        favicon: img/favicon.ico  # 网站图标
        language: zh # 语言
        font: # 字体，大概率不需要换
            text: Roboto
            code: Roboto Mono
        palette:
        - media: "(prefers-color-scheme: light)" # 浅色
            scheme: default
            primary: light green
            accent: orange
            toggle:
            icon: material/lightbulb-variant
            name: Switch to dark mode
        - media: "(prefers-color-scheme: dark)" # 深色
            scheme: slate
            primary: blue grey
            accent: amber
            toggle:
            icon: material/lightbulb-variant-outline
            name: Switch to light mode
        icon: # 一些用到的icon
            logo: logo
            previous: fontawesome/solid/angle-left
            next: fontawesome/solid/angle-right
            repo: fontawesome/brands/git-alt 
            annotation: material/chevron-right-circle
        ```
=== "features"

    关于网站基础功能（features），material 为我们提供了大量选择  
    下面将说明我们具体能改些什么，同时给出传送门，如有需求即可前往查询配置（其实是懒得打  
    非面面俱到，只挑自己会的 🤷‍♂️  

    <div class="grid cards" markdown>

    -   :art:{ .lg .middle } **更改配色**

        ---

        - 主题色、强调色和亮暗色模式的配色  
        - 自定义颜色

        [:octicons-arrow-right-24: Changing the colors](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors)

    -   :material-format-font:{ .lg .middle } **更改字体**

        ---

        常规字体 | 自定义字体

        [:octicons-arrow-right-24: Changing the fonts](https://squidfunk.github.io/mkdocs-material/setup/changing-the-fonts/)

    -   :earth_asia:{ .lg .middle } **更改语言**

        ---

        默认语言 | 多语言选择 | 自定义翻译

        [:octicons-arrow-right-24: Changing the language](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/)

    -   :simple-icon:{ .lg .middle } **更改图标**

        ---

        网页 LOGO | 导航栏图标 | 按钮 icon

        [:octicons-arrow-right-24: Changing the logo and icons](https://squidfunk.github.io/mkdocs-material/setup/changing-the-logo-and-icons/)
    -   :material-navigation-variant:{ .lg .middle } **导航栏设置**

        ---

        跳转快速加载 | URL 锚点追踪 | 导航栏位置  
        左侧导航栏折叠/展开 |  导航修剪   
        index 页设置 | 目录集成  
        目录跟踪 | 快速返回 | 页面宽度  

        [:octicons-arrow-right-24: Setting up navigation](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/)
    -   :smiling_face_with_3_hearts:{ .lg .middle } **强迫症补齐**

        ---

        [:octicons-arrow-right-24: 啥也没有](#)

    </div>
=== "plugins"

    除了基础设定，material 还提供了一些 [plugins](https://squidfunk.github.io/mkdocs-material/plugins/) 以提高幸福度  
    对于我使用的 ^^search、blog 和 statistics^^ 插件见后  

    至于其他插件，，目前没用过也没需求，不会捏 😋  
    可以自己折腾一下，到这里其实应该能看出官网写的是很很清晰惹
=== "markdown_extensions"
    
    mkdocs 的一大特色便是富文本下 md 文件的静态渲染，其中 pyMarkdown 功不可没

    用法可见我的 [pyMarkdown 速记](http://127.0.0.1:8000/build_your_web/markdown%20%E9%80%9F%E8%AE%B0/)(1) ，而这里与 [Reference](https://squidfunk.github.io/mkdocs-material/reference/) 对应说明配置  
    { .annotate }

    1. 建议全部配置结束后再去折腾:pinching_hand:

    ##### 您可以增加

    <div class="grid cards" markdown>

    -   [高亮块](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - admonition
            - pymdownx.details
            - pymdownx.superfences
        ```

    -   [注释块](https://squidfunk.github.io/mkdocs-material/reference/annotations/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - attr_list
            - md_in_html
            - pymdownx.superfences
        ```

    -   [按钮](https://squidfunk.github.io/mkdocs-material/reference/buttons/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - attr_list
        ```

    -   [代码块](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
          - pymdownx.highlight:
            anchor_linenums: true
            line_spans: __span
            pygments_lang_class: true
          - pymdownx.inlinehilite
          - pymdownx.snippets
          - pymdownx.superfences
        theme:
            features:
              - content.code.copy
        ```

    -   [分栏](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - pymdownx.superfences
            - pymdownx.tabbed:
                alternate_style: true
            theme:
                features:
                  - content.tabs.link
        ```

    -   [表格](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - tables
        ```

    -   [diagram](https://squidfunk.github.io/mkdocs-material/reference/diagrams/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - pymdownx.superfences:
            custom_fences:
              - name: mermaid
                class: mermaid
                format: !!python/name:pymdownx.superfences.fence_code_format
        ```

    -   [脚注](https://squidfunk.github.io/mkdocs-material/reference/footnotes/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - footnotes
        ```

    -   [强调格式](https://squidfunk.github.io/mkdocs-material/reference/formatting/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - pymdownx.critic
            - pymdownx.caret
            - pymdownx.keys
            - pymdownx.mark
            - pymdownx.tilde
        ```

    -   [grid](https://squidfunk.github.io/mkdocs-material/reference/grids/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - attr_list
            - md_in_html
        ```

    -   [表情](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - attr_list
            - pymdownx.emoji:
                emoji_index: !!python/name:material.extensions.emoji.twemoji
                emoji_generator: !!python/name:material.extensions.emoji.to_svg
        ```

    -   [图片](https://squidfunk.github.io/mkdocs-material/reference/images/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - attr_list
            - md_in_html
        ```

    -   [列表](https://squidfunk.github.io/mkdocs-material/reference/lists/)

        ---
        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - def_list
            - pymdownx.tasklist:
                custom_checkbox: true
        ```

    -   [公式](https://squidfunk.github.io/mkdocs-material/reference/math/)

        ---
        ```js title="docs/javascripts/mathjax.js"
        window.MathJax = {
            tex: {
                inlineMath: [["\\(", "\\)"]],
                displayMath: [["\\[", "\\]"]],
                processEscapes: true,
                processEnvironments: true
            },
            options: {
                ignoreHtmlClass: ".*|",
                processHtmlClass: "arithmatex"
            }
        };

        document$.subscribe(() => { 
            MathJax.startup.output.clearCache()
            MathJax.typesetClear()
            MathJax.texReset()
            MathJax.typesetPromise()
        })
        ```
        ```js title="docs/javascripts/katex.js"
        document$.subscribe(({ body }) => { 
            renderMathInElement(body, {
                delimiters: [
                { left: "$$",  right: "$$",  display: true },
                { left: "$",   right: "$",   display: false },
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true }
                ],
            })
        })
        ```

        ```yaml title="mkdocs.yml"
        markdown_extensions:
            - pymdownx.arithmatex:
                generic: true

        extra_javascript:
            - javascripts/mathjax.js
            - https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js
            - javascripts/katex.js
            - https://unpkg.com/katex@0/dist/katex.min.js
            - https://unpkg.com/katex@0/dist/contrib/auto-render.min.js
            
        extra_css:
            - https://unpkg.com/katex@0/dist/katex.min.css
        ```

    </div>


=== "其他字段"

    extra：其他设置，如 analytics 分析，页脚设置

    extra_javascript | extra_css ：额外的 js 文件和 css 文件，用于自添加 
---



## 我的配置

### .yml 配置

比较凌乱（因为当初复制粘贴的时候看不懂），只是参考，推荐大家基于官方文档慢慢配置

```yaml
_# 项目信息_
_# 站点作者_
site_author: dixi  
_# 站名_
site_name: dixi's BLOG
_# 站点地址_
_# site_url: https://localhost:8000/_
site_url: https://dixilog.github.io/

site_description: >**-** _# 项目描述_
  Welcome to dixi's BLOG. Ad infinitum, ad aeternum progredi.
_# 代码仓库信息_
repo_name:  dixiLOG _# 仓库名称_
repo_url: https://github.com/dixiLOG/dixiLOG.github.io.git _# 仓库地址_
_# 版权信息_
copyright: Copyright &copy; 2024 | powered by dixiLOG | All rights reserved.
_# 导航树配置_
nav:
  - Home: 
    - index.md
    - Build Your Own Blog: 
      - build_your_web/index.md
      - build_your_web/access your github.io.md
      - build_your_web/玩转 Material.md
      - build_your_web/feishu2githubPages.md
    - build_your_web/markdown 速记.md
  - NBU-NOTEBOOK: 
      - NBU-NOTEBOOK/index.md
      - NBU-NOTEBOOK/S&S.md
  - 随手记[TODO]:
      - 随手记/index.md
  - Chronic Study[TODO]:
      - Chronic Study/index.md
  - NBU_ROCOS:
      - ROCOS/index.md
      - ROCOS/info&ref.md
  - 闲言碎语:
      - blog/index.md

_# 主题配置_
theme:
  name: material _# 主题名称_
  _# custom_dir: material/overrides # 自定义文件夹，对于个别页面，如果您不想使用主题的默认样式，可以在这里进行修改，使用里面的文件覆盖主题的默认文件。具体可以参考material官方文档_
  _# logo: static/images/logo.png # logo 图片  _
  favicon: img/favicon.ico  _# 网站图标_
  language: zh _# 语言_
  font: _# 字体，大概率不需要换_
    text: Roboto
    code: Roboto Mono
  palette:
  - media: "(prefers-color-scheme: light)" _# 浅色_
    scheme: default
    primary: light green
    accent: orange
    toggle:
      icon: material/lightbulb-variant
      name: Switch to dark mode
  - media: "(prefers-color-scheme: dark)" _# 深色_
    scheme: slate
    primary: blue grey
    accent: amber
    toggle:
      icon: material/lightbulb-variant-outline
      name: Switch to light mode
  icon: _# 一些用到的icon_
    logo: logo
    previous: fontawesome/solid/angle-left
    next: fontawesome/solid/angle-right
    repo: fontawesome/brands/git-alt 
    annotation: material/chevron-right-circle
  _# 功能_
  features:
    _# - header.autohide # 自动隐藏头部_
    - navigation.instant _# 导航栏快速跳转_
    - navigation.tabs _# 导航栏多标签_
    - navigation.sections _# 开启后左侧导航栏不折叠_
    - navigation.tracking _# 导航栏URL跟踪_
    - navigation.footer _# 底部导航栏_
    - search.highlight _# 搜索结果高亮_
    _# - navigation.expand # 导航栏展开_
    - navigation.indexes _# 提供概述页面_
    - toc.follow _# 目录跟随_
    _# - navigation.tabs # 顶级索引被作为tab_
    _# - navigation.tabs.sticky # 导航栏始终可见_
    _# - toc.integrate # 目录集成左边栏_
    - navigation.top _# 快速回到顶部_
    - content.code.annotate _# 代码注解_
    - content.tooltips _# 工具提示_
    - search.suggest _# 搜索建议_
    - search.share _# 搜索结果分享_
    - content.code.copy _# 复制代码按钮_
    - navigation.instant.prefetch _# 预加载_
    - navigation.instant.progress _# 进度条_
    _# - content.action.edit_
    _# - content.action.view_

_# 插件配置_
plugins:
- search: _# 搜索_
    lang: 
      - en
      - zh  _# 中文搜索支持_
- tags _# 标签功能 插件_
_# - meta-descriptions:_
_#     export_csv: false_
_#     quiet: false_
_#     enable_checks: false_
_#     min_length: 50_
_#     max_length: 160_
_#     trim: false # 元描述插件_
- statistics: _# 统计功能插件 _
    page_template: "page_template/page_statistics.html"
    words_per_minute: 200
- blog: _# 博客功能插件_
    blog_dir: blog
    _# blog_toc: true_
    post_date_format: full
    archive_toc: true
    categories_toc: true
    archive_name: DIXI的碎碎念流水
    _# archive_date_format: MMMM_
    category_name: DIXI的碎碎念分类
    _# categories_allowed:_
      _# - 口水鸡  #书 电影_
      _# - 豆腐脑  #输出观点_
      _# - 碎碎念  #随笔_
    pagination_per_page: 15 _# 每页文章数_
    _# post_excerpt: required # 文章摘要,和下面的配合食用，但不知道为什么我不能开启这一句_
    post_excerpt_separator: <!-- more -->
    pagination_format: "$link_first $link_previous ~2~ $link_next $link_last"   _# 页码格式_
    _# pagination_keep_content: true   # 保留分页内容_
    _# draft_if_future_date: true # 草稿发布日期大于当前日期则发布为草稿_
    post_readtime: false   _# 关闭阅读时间_
    _# post_readtime_words_per_minute: 300_

_# - git-revision-date-localized:_
_#     enable_creation_date: true # 启用创建日期_
_#     enable_last_updated_date: true # 启用最后更新日期_
_#     fallback_to_build_date: false # 启用日期，如果没有git信息，则使用构建日期_
_#     format: "%Y-%m-%d" # 日期格式化_
_#     locale: zh_CN # 语言_

_# mk扩展配置_
markdown_extensions:
  - toc:      _# 目录_
      permalink: true
      toc_depth: 4
      title: Contents
  _# - meta_
  - abbr
  - tables
  - def_list
  - attr_list
  - md_in_html
  - sane_lists
  - admonition
  - pymdownx.keys
  - pymdownx.mark _#支持高亮标记文本
  - pymdownx.tilde
  - pymdownx.critic
  - pymdownx.details
  - pymdownx.snippets
  - pymdownx.magiclink
  - pymdownx.superfences
  - pymdownx.inlinehilite
  - markdown.extensions.attr_list
  - pymdownx.smartsymbols
  - pymdownx.arithmatex
  - pymdownx.caret
  - footnotes
  
  - pymdownx.betterem:     _# 改进的强调_
      smart_enable: all
  - pymdownx.emoji:
      emoji_index: **!!python/name:material.extensions.emoji.twemoji**
      emoji_generator: **!!python/name:material.extensions.emoji.to_svg**
  - pymdownx.tabbed:      _# 标签页_
      alternate_style: true 
  - pymdownx.tasklist:    _# 任务列表_
      custom_checkbox: true
  - pymdownx.highlight:    _# 代码高亮_
      anchor_linenums: true
  - pymdownx.arithmatex:  _# 数学公式_
      generic: true
  - pymdownx.superfences:    _# diagrams | 流程图_
      custom_fences:
      - name: mermaid
        class: mermaid
        format: **!!python/name:pymdownx.superfences.fence_code_format**

_# 其他配置_
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/dixiLOG
      name: 我滴GitHub
  analytics:
    provider: google
    property: G-WNP42HF8NE
    feedback:
      title: Looking for your feedback!
      ratings:
        - icon: material/thumb-up-outline 
          name: This page was helpful
          data: 1
          note: >**-**
           O(∩_∩)O谢谢啦~
        - icon: material/thumb-down-outline
          name: This page could be improved
          data: 0
          note: >**-** 
            嘿呀嘿呀，努力搬砖...

_# 额外的js文件和css文件_
extra_javascript:
  _# 自定义js文件，一定要放在最后面，不然会覆盖掉主题的js文件_
  _# - https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js   _
  _# - https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js_
  - javascripts/extra.js
  - https://imgbb.com/upload.js
  - javascripts/katex.js
  - https://unpkg.com/katex@0/dist/katex.min.js
  - https://unpkg.com/katex@0/dist/contrib/auto-render.min.js
  - javascripts/mathjax.js
  - https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js

  _# - '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'_
extra_css:
  - stylesheets/extra.css
  - https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css
  - https://unpkg.com/katex@0/dist/katex.min.css
```

---

> 到此基本配置结束  
> 后面的功能就是选做啦

### giscus 评论模块

[这篇教程](https://yliu-fe.github.io/Techs/Notes%20for%20Mkdocs/Comment%20with%20Giscus/)说的已然是非常清楚，我就不照搬了  
如果教程的方法 OK ，那就不需要往下看啦

!!! failure "BUG"
    我发现本地渲染下正常而托管发布后评论模块不显示

没找到原因，于是我换了个思路  
因为我并没有每篇都需要加评论的需求（实际上只有 HOME 页），干脆就改成了 HTML 嵌入


??? success "在需要的页面中添加"
    ```html hl_lines="5-6 8" title=".md"
    <!-- Giscus 评论功能 -->
    <div id="giscus-container"></div>

    <script src="https://giscus.app/client.js"
            data-repo="..."
            data-repo-id="..."
            data-category="Announcements"
            data-category-id="..."
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="0"    
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="preferred_color_scheme"
            data-lang="zh-CN"
            crossorigin="anonymous"
            async>
    </script>

    <script>
        document.addEventListener("DOMContentLoaded", **function**() {
            **var** feedbackSection = document.querySelector('md-feedback'); // 确保选择器正确
            **var** giscusContainer = document.querySelector('#giscus-container');

            if (feedbackSection && giscusContainer) {
                // 调试输出
                console.log('Feedback section found:', feedbackSection);
                console.log('Giscus container found:', giscusContainer);

                // 确保 feedbackSection 在页面中
                if (feedbackSection.parentNode) {
                    feedbackSection.parentNode.appendChild(giscusContainer); // 尝试 appendChild
                }
            } else {
                console.log('Feedback section or Giscus container not found.');
            }

            // 设置初始主题
            **var** palette = __md_get("__palette");
            **var** theme = palette && palette.color.scheme === "slate" ? "dark" : "light";
            **var** giscusScript = document.querySelector("#giscus-container script");
            if (giscusScript) {
                giscusScript.setAttribute("data-theme", theme);
            }

            // 注册主题切换事件
            **var** paletteToggle = document.querySelector("[data-md-component=palette]");
            if (paletteToggle) {
                paletteToggle.addEventListener("change", **function**() {
                    **var** newPalette = __md_get("__palette");
                    **var** newTheme = newPalette && newPalette.color.scheme === "slate" ? "dark_dimmed" : "light_high_contrast";
                    // 主题颜色
                    // | 'light'
                    // | 'light_high_contrast'
                    // | 'light_protanopia'
                    // | 'dark'
                    // | 'dark_high_contrast'
                    // | 'dark_protanopia'
                    // | 'dark_dimmed'
                    // | 'transparent_dark'

                    // 更新 Giscus 评论主题
                    **var** giscusFrame = document.querySelector("iframe.giscus-frame");
                    if (giscusFrame) {
                        giscusFrame.contentWindow.postMessage(
                            { giscus: { setConfig: { theme: newTheme } } },
                            "https://giscus.app"
                        );
                    }

                });
            }
        });
    </script>
    ```
高亮的三行改成自己的即可

---

### Google Analytics & firebase 身份认证

首先您需要注册一个 [Google Analytics](https://analytics.google.com/ ) 的账号并创建一个与网站绑定的数据流，最终得到一个 ID，就在下图的框框里

![](static/GM74btDk6oy0jKxxCngchbOlnMc.png){: .zoom}

如果有问题，可以看看 [support.google.com](https://support.google.com/analytics/answer/9304153?hl=zh-Hans#zippy=) 或者其他类似的帮助文档

然后在 extra 字段配置即可

```yaml title="mkdocs.yml"
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX
```

后续网站上所有的操作都会被记录下来了

---

下面是基于 firebase 的身份认证，对于一个开源的项目来说并没有啥意义，但做都做了就记录一下咯:man_tipping_hand:  
原理十分简单，即用第三方平台管理账号密码，并监视被保护页，遇到未登录用户跳转至登陆页面

同样的，您需要先拥有一个与网页绑定的 [firebase](https://firebase.google.com/?hl=zh-cn) 账号

![](static/F1U4b7WJuoaWnrxKtB8c1KpDnXc.png){: .zoom}

如果是第一次登陆，则无任何项目，所以下一步就是创建一个新的项目

找到"创建项目"，输入您的名称，继续

![](static/MOo1bGEKPoBqvzx18ClcU68Mnlg.png){: .zoom}

勾选 Analytics，继续

![](static/WXB5bG07QoMgoXxNg1CcjRYqnGg.png){: .zoom}

选择账号，创建项目

![](static/WckwbLayTokbVpxeZ8YcVeUwn0g.png){: .zoom}

转完圈圈，选择网页创建新的应用

![](static/H4fUbYkvcogs25xp5wBc9cSgnee.png){: .zoom}

输入名称，^^ 勾选 hosting^^ ，创建即可

![](static/Fc9vbpsAroshBix2j9FcHFQWnAi.png){: .zoom}

![](static/XGPmbAFdHo54HnxNiZpcWH8onKe.png){: .zoom}

进入应用的设置界面下拉，得到配置段

![](static/YZvWbC2aXoXTEzxH1pic0sVnnL7.png){: .zoom}

左边导航栏选择 Authentic 进入后即可开始配置

![](static/MbaqbvLtQohk1IxsvM5cDaOMnzh.png){: .zoom}

---

**下面是我的配置**

选择电子邮件/密码登陆，创建一个用户

![](static/DBBlb0zZso8c00xYWcUcKsiRnnd.png){: .zoom}

设置为只登陆（因为是身份认证）

![](static/TXGGb4JSBo3tAKxOBkQcWh4Vnwd.png){: .zoom}

---

**接着配置网页端**


??? "在需要保护页面所在目录下新建 login.html"
    ```html title="login.html"
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: url('rocos_img/zmbz.png') no-repeat center center fixed; /* 替换为您的本地图像路径 */
                background-size: cover;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                animation: backgroundAnimation 10s infinite alternate;/* 背景动画 */
            }

            /* 背景动画，渐隐和缩放效果 */
            @keyframes backgroundAnimation {
                0% {
                    opacity: 0.8;
                    transform: scale(1);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.05);
                }
                100% {
                    opacity: 0.8;
                    transform: scale(1);
                }
            }

            #login-form {
                background: rgba(204, 224, 217, 0.98); /* 调整背景颜色的透明度 */
                border-radius: 10px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.22); /* 增强阴影效果 */
                padding: 30px;
                width: 100%;
                max-width: 350px;
                text-align: center;
                animation: formAnimation 2s ease-in-out; /* 登录表单的进入动画 */
                transition: transform 0.1s ease-out; /* 添加平滑过渡 */
                transform-style: preserve-3d; /* 保留 3D 变换效果 */
            }

            _/* 表单动画，淡入效果 */_
            @keyframes formAnimation {
                0% {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            #login-form h2 {
                margin-bottom: 20px;
                color: #333;
                font-size: 24px;
                transform: translateZ(20px); /* 增加 Z 轴位移以显示厚度 */
            }

            #login-form input {
                width: calc(100% - 20px);
                padding: 15px;
                margin: 10px 0;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
                box-sizing: border-box;
                transition: box-shadow 0.3s ease; /* 输入框焦点动态效果 */
                transform: translateZ(10px); /* 增加 Z 轴位移以显示厚度 */
            }
            #login-form input:focus {
                box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
            }

            #login-form button {
                width: 100%;
                padding: 15px;
                font-size: 16px;
                border: none;
                border-radius: 5px;
                background-color: #414b56;
                color: #fff;
                cursor: pointer;
                transition: background-color 0.3s ease, transform 0.3s ease; /* 按钮的动态效果 */
                transform: translateZ(10px); /* 增加 Z 轴位移以显示厚度 */
            }
            #login-form button:hover {
                background-color: #e7d362;
                transform: translateZ(10px) translateY(-2px);
            }
            #login-form p {
                margin-top: 15px;
                font-size: 14px;
                color: #555;
                transform: translateZ(10px); /* 增加 Z 轴位移以显示厚度 */
            }
            #login-form a {
                color: #007bff;
                text-decoration: none;
                transform: translateZ(10px); /* 增加 Z 轴位移以显示厚度 */
            }
            #login-form a:hover {
                text-decoration: underline;
            }

            /* 添加一些漂浮的装饰元素 */
            .floating-element {
                position: absolute;
                background-color: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                animation: floatingAnimation 6s infinite ease-in-out;
            }

            @keyframes floatingAnimation {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-15px);
                }
                100% {
                    transform: translateY(0);
                }
            }

            /* 定义不同大小和位置的漂浮元素 */
            .floating-element:nth-child(1) {
                width: 80px;
                height: 80px;
                bottom: 10%;
                left: 10%;
                animation-duration: 4s;
            }

            .floating-element:nth-child(2) {
                width: 50px;
                height: 50px;
                top: 20%;
                right: 20%;
                animation-duration: 7s;
            }

            .floating-element:nth-child(3) {
                width: 100px;
                height: 100px;
                top: 40%;
                left: 50%;
                animation-duration: 5s;
            }
        </style>
    </head>
    <body>
        <!-- 漂浮的装饰元素 -->
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        <div class="floating-element"></div>

        <form id="login-form" onsubmit="return login();">
            <h2>Login</h2>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        
        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
        <script>
            **const** firebaseConfig = {
                apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
                authDomain: "XXXXXXXXXXXXXXXXXX",
                projectId: "XXXXXX",
                storageBucket: "XXXXXXXXXXXXXXXXXX",
                messagingSenderId: "XXXXXXXXX",
                appId: "XXXXXXXXXXXXXX",
                measurementId: "XXXXXXXXXXXXXXXX"
            };
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }

            **function** login() {
                **const** email = document.getElementById("email").value;
                **const** password = document.getElementById("password").value;

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((userCredential) **=>** {
                        window.location.href = '../ROCOS'; // 登录成功后跳转到受保护内容的入口页面
                    })
                    .catch((error) **=>** {
                        **const** errorMessage = error.message;

                        if (errorMessage.includes("INVALID_LOGIN_CREDENTIALS")) {
                            alert("邮箱或密码填写错误，请重试");
                        } else if (errorMessage.includes("EMAIL_NOT_FOUND")) {
                            alert("该邮箱不存在，请检查输入或注册新账户");
                        } else if (errorMessage.includes("USER_DISABLED")) {
                            alert("此用户账户已被禁用");
                        } else {
                            alert(`登录失败: ${errorMessage}`);
                        }
                        window.location.href = '../'; // 可根据需要删除或修改这行
                    });

                return false; _// 阻止表单提交_
            }

            firebase.auth().onAuthStateChanged((user) **=>** {
                if (user) {
                    window.location.href = '../ROCOS'; // 已登录用户直接跳转到受保护内容的入口页面
                }
            });

            // 添加鼠标移动事件监听器
            document.addEventListener("mousemove", **function** (e) {
                **const** loginForm = document.getElementById("login-form");
                **const** rect = loginForm.getBoundingClientRect();
                **const** x = e.clientX - rect.left - rect.width / 2;
                **const** y = e.clientY - rect.top - rect.height / 2;

                **const** rotateX = -(y / rect.height) * 15; // 根据鼠标位置计算旋转角度
                **const** rotateY = (x / rect.width) * 15;

                loginForm.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        </script>
    </body>
    </html>
    ```

内容多是因为添加了一些花里胡哨的功能，如卡片跟随倾角，周期动画

在需要保护的界面中添加监视

```html title=".md"
<!-- 引入 Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>

<script>
    // 确保 Firebase 只初始化一次
    if (!firebase.apps.length) {
        **const** firebaseConfig = {
            apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
            authDomain: "XXXXXXXXXXXXXXXXXX",
            projectId: "XXXXXX",
            storageBucket: "XXXXXXXXXXXXXXXXXX",
            messagingSenderId: "XXXXXXXXX",
            appId: "XXXXXXXXXXXXXX",
            measurementId: "XXXXXXXXXXXXXXXX"
        };
        firebase.initializeApp(firebaseConfig);
    }

    // 监听用户登录状态
    firebase.auth().onAuthStateChanged((user) **=>** {
        if (user) {
            // 输出调试信息
            console.log('User already logged in, redirecting...');
            // alert('您已登录，为您自动跳转~');
        } else {
            // 输出调试信息
            console.log('User not logged in, redirecting to login.html');
            window.location.href = '../login.html'; // 未登录用户跳转到登录页
        }
    });
</script>
```

如此，当未登录用户点击时就会跳转 login.html

![](static/QvP1b6xo0ohFd3x1GTScAL5cnoh.png){: .zoom}

而成功登陆之后，即可根据 cookie 自动登陆

---

### 基于 blog 插件的博客模块

在根目录下打开 powershell

```powershell title="powershell"
mkdir blog
cd blog
touch .authors.yml
mkdir posts
```

写入作者信息

```yaml title=".authors.yml"
authors:
    dixi:
        name: dixi        # Author name
        description: 略略略😋 # Author description
        avatar: /img/favicon.ico 
```
而 posts 下放置文章

字段不多解释，具体见 [Built-in blog plugin](https://squidfunk.github.io/mkdocs-material/plugins/blog/)

```yaml title="我的 mkdocs.yml"
- blog: _# 博客功能插件_
    blog_dir: blog
    _# blog_toc: true_
    post_date_format: full
    archive_toc: true
    categories_toc: true
    archive_name: DIXI的碎碎念流水
    _# archive_date_format: MMMM_
    category_name: DIXI的碎碎念分类
    _# categories_allowed:      # 允许的分类_
      _# - 口水鸡  #书 电影_
      _# - 豆腐脑  #输出观点_
      _# - 碎碎念  #随笔_
    pagination_per_page: 15 _# 每页文章数_
    _# post_excerpt: required # 文章摘要,和下面的配合食用，但不知道为什么我不能开启这一句_
    post_excerpt_separator: <!-- more -->
    pagination_format: "$link_first $link_previous ~2~ $link_next $link_last"   _# 页码格式_
    _# pagination_keep_content: true   # 保留分页内容_
    _# draft_if_future_date: true # 草稿发布日期大于当前日期则发布为草稿_
    post_readtime: false   _# 关闭阅读时间_
    _# post_readtime_words_per_minute: 300_
```
!!! success "使用"
    ```markdown title=".md"
    ---
    draft: false
    date: 2022-12-31
    categories:
        - 碎碎念
    authors:
        - dixi
    ---

    # title
    ```



### 基于 statistics 插件的阅读时长计算

参考：[mkdocs-statistics-plugin](https://pypi.org/project/mkdocs-statistics-plugin/)

![](static/LO7pbg6rsoMCC1xVplgc2xdSnoh.png){: .zoom}

添加插件
```yaml title="mkdocs.yml"
plugins: 
   - statistics: # 统计功能插件 
```

具体字段见[参考文档](https://pypi.org/project/mkdocs-statistics-plugin/)

---

为解决 ^^Blog 下字体遮挡问题^^ ，需修改显示格式

参考：[statistics 修复 blog 显示问题](https://ronaldln.github.io/MyPamphlet-Blog/2023/10/24/mkdocs-material/)

在根目录下打开终端

```powershell title="powershell"
mkdir page_template
cd page_template
touch page_statistics.html
```

```html title="page_statistics.html"
<div markdown="1" style="margin-top: -30px; font-size: 0.75em; opacity: 0.7;">
&nbsp;

:material-circle-edit-outline: 约 {{ words }} 个字 {% if code_lines != 0 %} • :fontawesome-solid-code: {{ code_lines }} 行代码 {% endif %}{% if read_time %}:material-clock-time-two-outline: {% if read_time == 0 %}预计阅读时间不到 1 分钟{% else %}预计阅读时间 {{ read_time }} 分钟{% endif %}{% endif %}
    
---
</div>
```

```yaml title="mkdocs.yml"
plugins: 
   - statistics: # 统计功能插件
        page_template: "page_template/page_statistics.html"
```

---

### 霞鹜文楷字体

参考：[如何在 Mkdocs 里自定义字体(霞鹜文楷)](https://blog.csdn.net/m0_63203517/article/details/131946304)


```yaml title="mkdocs.yml"
extra_css:
  - https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-tc-webfont@1.0.0/style.css
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css
```

```css  title="extra.css"
_/* 自定义字体 */_
body {
      font-family: "LXGW WenKai", sans-serif;
      /* Lite version */
      /* font-family: "LXGW WenKai Lite", sans-serif; */
      /* TC version */
      /* font-family: "LXGW WenKai TC", sans-serif; */
      /* Screen version */
      /* font-family: "LXGW WenKai Screen", sans-serif; */
    }
_/* 按钮字体 */_
button.md-top {
    font-family: LXGW WenKai; _/* 修改字体 */_
    font-size: 16px; _/* 修改字体大小 */_
    font-weight: bold; _/* 修改字体粗细 */_
    color: #374148; _/* 修改字体颜色 */_
  }
```

两个地方上下对应，区别见[参考文档](https://blog.csdn.net/m0_63203517/article/details/131946304)

---

### 一些简单的功能

#### 鼠标模拟烟花 + 样式

??? example "js | css"
    ```javascript title="extra.js"
    var CURSOR;

    Math.lerp = (a, b, n) => (1 - n) * a + n * b;

    const getStyle = (el, attr) **=>** {
        try {
            return window.getComputedStyle
                ? window.getComputedStyle(el)[attr]
                : el.currentStyle[attr];
        } catch (e) {}
        return "";
    };

    class Cursor {
        constructor() {
            this.pos = {curr: null, prev: null};
            this.pt = [];
            this.create();
            this.init();
            this.render();
        }

        move(left, top) {
            this.cursor.style["left"] = `${left}px`;
            this.cursor.style["top"] = `${top}px`;
        }

        create() {
            if (!this.cursor) {
                this.cursor = document.createElement("div");
                this.cursor.id = "cursor";
                this.cursor.classList.add("hidden");
                document.body.append(this.cursor);
            }

            var el = document.getElementsByTagName('*');
            for (**let** i = 0; i < el.length; i++)
                if (getStyle(el[i], "cursor") == "pointer")
                    this.pt.push(el[i].outerHTML);

            document.body.appendChild((this.scr = document.createElement("style")));
            // 这里改变鼠标指针的颜色 由svg生成
            this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.5'/></svg>") 4 4, auto}`;
        }

        refresh() {
            this.scr.remove();
            this.cursor.classList.remove("hover");
            this.cursor.classList.remove("active");
            this.pos = {curr: null, prev: null};
            this.pt = [];

            this.create();
            this.init();
            this.render();
        }

        init() {
            document.onmouseover  = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
            document.onmouseout   = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
            document.onmousemove  = e => {(this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = {x: e.clientX - 8, y: e.clientY - 8}; this.cursor.classList.remove("hidden");};
            document.onmouseenter = e => this.cursor.classList.remove("hidden");
            document.onmouseleave = e => this.cursor.classList.add("hidden");
            document.onmousedown  = e => this.cursor.classList.add("active");
            document.onmouseup    = e => this.cursor.classList.remove("active");
        }

        render() {
            if (this.pos.prev) {
                this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
                this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
                this.move(this.pos.prev.x, this.pos.prev.y);
            } else {
                this.pos.prev = this.pos.curr;
            }
            requestAnimationFrame(() => this.render());
        }
    }

    (() => {
        CURSOR = new Cursor();
        // 需要重新获取列表时，使用 CURSOR.refresh()
    })();

    // 生成随机颜色
    function randomColor() {
        const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // 生成烟花效果
    function createFirework(x, y) {
        const fireworkContainer = document.createElement('div');
        fireworkContainer.classList.add('fireworks');
        fireworkContainer.style.left = `${x}px`;
        fireworkContainer.style.top = `${y}px`;
        document.body.appendChild(fireworkContainer);

        for (let i = 0; i < 25; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.backgroundColor = randomColor();
            firework.style.width = '5px';
            firework.style.height = '5px';
            firework.style.left = `${Math.random() * 80 - 50}px`;
            firework.style.top = `${Math.random() * 80 - 50}px`;
            firework.style.animation = `firework 1s ease-out forwards, fall 1s ${Math.random() * 0.5}s forwards`;
            fireworkContainer.appendChild(firework);
        }

        setTimeout(() => {
            fireworkContainer.remove();
        }, 300);
    }
    // 监听单击事件
    document.addEventListener('click', (event) => {
        const x = event.clientX;
        const y = event.clientY + window.scrollY;
        createFirework(x, y);
    });
    ```

    ```css  title="extra.css"
    _/* 鼠标样式 */_
    #cursor {
        position: fixed;
        width: 16px;
        height: 16px;
        _/* 这里改变跟随的底色 */_
        background: rgb(209, 181, 116);
        border-radius: 10px;
        opacity: 0.4;
        z-index: 10086;
        pointer-events: none;
        transition: 0.15s ease-in-out;
        transition-property: background, opacity, transform;
    }
    
    #cursor.hidden {
        opacity: 0;
    } */
    
    #cursor.hover {
        opacity: 0.001;
        transform: scale(2.5);
        -webkit-transform: scale(2.5);
        -moz-transform: scale(2.5);
        -ms-transform: scale(2.5);
        -o-transform: scale(2.5);
    }
    
    #cursor.active {
        opacity: 0.01;
        transform: scale(0.5);
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        -ms-transform: scale(0.5);
        -o-transform: scale(0.5);
    }
    _/* 烟花容器 */_
    .fireworks {
        position: absolute;
        pointer-events: none;
        z-index: 9999;
    }

    .firework {
        position: absolute;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        transform: scale(0);
        animation: firework 1s ease-out forwards;
    }

    @keyframes firework {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }

    _/* 重力动画 */_
    @keyframes fall {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(50px);
            opacity: 0;
        }
    }
    ```

---

#### 图片放大

??? example "js | css"
    ```javascript title="extra.js"
    // 监听图片放大事件
    document.querySelectorAll('.zoom').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('image-zoom-large');
        })
    });
    ```

    ```css  title="extra.css"
    /* 图片放大start */
    .shadow {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .zoom {
    transition: transform ease-in-out 0.5s;
    cursor: zoom-in;
    }

    .image-zoom-large {
    transform: scale(1.5);
    cursor: zoom-out;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 100;
    position: relative;
    }
    /* 图片放大end*/
    ```

```markdown title="使用"
![](#) =={: .zoom}==
```

---

#### 上方进度条

![](static/FmzxbD7tfoTQAbxxEW5ckT2onVh.png){: .zoom}

??? example "js | css"
    ```javascript    title="extra.js"
        // 监听滚动条事件
        document.addEventListener('scroll', function () {
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / docHeight) * 100;
            const progressBar = document.getElementById('progress-bar');
            progressBar.style.width = `${scrolled}%`;
        });
    ```


    ```css    title="extra.css"
        /* 进度条样式 */
        /* 整体 */
        #progress-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(0, 0, 0, 0.1);
        z-index: 9999;
        }

        #progress-bar {
        height: 100%;
        width: 0;
        background: #ccd938;
        transition: width 0.25s;
        }
    ```


```markdown hl_lines="3-5" title=".md"
# title

<div id="progress-container">
<div id="progress-bar"></div>
</div>

<!-- 后续内容 -->
```

---

> 至此，理论上博客就已竣工，剩下的就是无穷的软装了:toilet: