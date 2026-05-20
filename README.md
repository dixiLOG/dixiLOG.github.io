# 这是 DIXILOG 的 README

## 项目概述

这是一个基于 `MkDocs + Material for MkDocs` 搭建的个人站点，内容包括课程笔记、随手记录、推免经验、阅读沉淀与博客文章，发布到 GitHub Pages：

[https://dixilog.github.io/](https://dixilog.github.io/)

## 当前内容分区

- `docs/NBU-NOTEBOOK/`：课程笔记主区，现包含计算机网络、概率论、信号与系统、随机信号分析、通信原理、数字信号处理等内容。
- `docs/随手记/`：碎片化记录区，含 `无聊可期`、`十万个为什么`、`初中数学保命手册`、`学车记` 等。
- `docs/changheji/`：长河集，收录读书报告、长期文字与工具实践，如 `GeminiCLI`。
- `docs/Flysheet/`：推免经验整理，包含时间线、材料系统、导师选择、复盘与感受。
- `docs/blog/`：更轻量、更私人一点的博客文章。
- `docs/ROCOS/`：机器人队内资料与相关技术记录。
- `docs/build_your_web/`：建站过程与 MkDocs/Material 使用记录。

## 技术栈与功能

- 文档框架：`mkdocs==1.6.1`
- 主题：`mkdocs-material==9.6.4`
- 博客与信息流：`mkdocs-blog-plugin`、`mkdocs-rss-plugin`
- 交互增强：`glightbox`、评论区、阅读统计、创建/修改时间展示
- 内容能力：Mermaid、数学公式、代码高亮、搜索、打印导出

依赖列表见 `requirements.txt`。

## 本地预览

```bash
pip install -r requirements.txt
mkdocs serve
```

默认本地地址通常是 `http://127.0.0.1:8000/`。

## 目录结构

```text
.
├─ docs/
│  ├─ index.md
│  ├─ NBU-NOTEBOOK/
│  ├─ 随手记/
│  ├─ changheji/
│  ├─ Flysheet/
│  ├─ blog/
│  ├─ ROCOS/
│  └─ build_your_web/
├─ mkdocs.yml
├─ requirements.txt
└─ README.md
```