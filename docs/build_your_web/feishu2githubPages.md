
# Feishu2GithubPages

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

> 我想，就只差临门一脚啦~

这是我试下来还原度最高且插件仍然有力更新的 feishu2md 方法

参考：[GitHub - Wsine/feishu2md: 一键命令下载飞书文档为 Markdown](https://github.com/Wsine/feishu2md)

!!! abstract "总体思路"
    创建开发 APP，拿到 API → 下载 release 、配置 → 一行指令下载

## 实操
参考：[一日一技 | 我开发的这款小工具，轻松助你将飞书文档转为 Markdown - 少数派](https://sspai.com/post/73386)

### 配置

跟着下图操作即可

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/DZqQbsmLjof0X1x4fMKcf3nPneh.png)

下载 feishu2md 与配置生成完成后，需要打开终端配置文件

1. 通过 `feishu2md config --appId your_id --appSecret your_secret` 命令即可生成该工具的配置文件。
2. 通过 `feishu2md config` 命令可以查看配置文件路径以及是否成功配置

效果如下图所示

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Sq6gbsQvnotlsxxCZRGc2Eu8nfg.png)

---

### 下载

新建文件夹（放置下载的 .md 文件和 图片）并在此目录下打开终端  

```powershell title="关于下载命令，截止 v2.4.0，有"
# 下载单个文档为 Markdown
# 文档链接可以通过 分享 > 开启链接分享 > 互联网上获得链接的人可阅读 > 复制链接 获得
$ feishu2md dl "文档链接"

# 批量下载某文件夹内的全部文档
# 文件夹链接可以通过 分享 > 开启链接分享 > 互联网上获得链接的人可阅读 > 复制链接 获得
$ feishu2md dl --batch -o output_directory "文件夹链接"

# 批量下载某知识库的全部文档为 Markdown
# wiki settings链接可以通过 打开知识库设置获得
$ feishu2md dl --wiki -o output_directory "wiki settings链接"
```

把文件夹放到合适的位置，对 .yml 稍加调整，最后一步我想应该不必多言了

> 还是有一点 bug，比如缩进不规范会导致转 md 失效，代码块注释识别异常  
> 不过无伤大雅，我改就是

!!! note "碎碎念"
    - 对自己硬盘容量有自信的同学可不用图床  
    - 大文件下用 vscode 实时渲染卡顿的同学（比如我）可以用 Typora 代替
