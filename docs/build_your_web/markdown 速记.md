


# Markdown 速记

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

!!! note "这是一个Markdown速查表"

---

## markdown基本语法 {: #基本语法 }

>下面是一些常用的markdown操作记录。详细内容请点击 ***[这里](https://markdown.com.cn/basic-syntax/)***

=== "标题" 

    ```
    # 这是一级标题
    ## 这是二级标题
    ### 这是三级标题
    ```

=== "强调"

    ```
    *斜体*  
    **粗体**  
    ***斜体加粗***  
    --- 分隔符  
    ~~删除线~~  
    <u>下划线</u>     
    ```

=== "引用"
    > 引用内容  
    > 引用内容（跨行需要空两格）

=== "列表"

    ```
    1. 有序列表
         - [x] 无序列表
             - [ ] 缩进
    2. 有序列表
    ```

    3. 有序列表
         - [x] 无序列表
              - [ ] 缩进
    4. 有序列表

=== "代码"

    `单行代码`

    ```text title="代码块标题"
        ```text title="代码块标题"  
        多行代码块  
        ```
    ```

    ```python
    print("hello world")
    ```

=== "链接"

    ```
    ***[链接名称](链接地址 "悬停label")***
    <直链>
    ```
    ***<u>[博客地址](https://dixilog.github.io/ "my blog")</u>***

    <https://dixilog.github.io>

=== "图片"

    ```
    [![图片名称](图片地址 "悬停label")](超链接地址)
    ```

=== "表格"
    
     ```
     | 表头1 | 表头2 | 表头3 |
     | :--- | :---: | -----:|
     | 单元格 <br>  换行 | 单元格2222222 | 单元格333333 |
     | `左对齐` | **居中** | 右对齐 |
     ```
     <center>

     | 表头1 | 表头2 | 表头3 |
     | :--- | :---: | -----:|
     | 单元格 <br>  换行 | 单元格2222222 | 单元格333333 |
     | `左对齐` | **居中** | 右对齐 |

    </center>
=== "脚注"
    
     ```
     Here's a simple footnote.[^1]

     [^1]: 这是你的脚注。
     ```
    
     Here's a simple footnote.[^1]

     [^1]: 这是你的脚注🤣

-----

-----

## python—markdown

> display basic usage of markdown in python  
> details click <u>***[here](https://blog.csdn.net/P_LarT/article/details/55819896?ops_request_misc=&request_id=&biz_id=102&utm_term=python%20markdown&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-4-55819896.nonecase&spm=1018.2226.3001.4187)***</u>

### 缩写

```text title="缩写格式,也可作英文注释"
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

```

Example：The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

---

### 标题tag

```text title="标题tag，用于文件内跳转"
# 标题1{: #title1 }

[name_yourself](#title1)
```

Example:[跳转到基本语法部分](#基本语法)

>可能出现单点无效的情况，需要再次单击

---

### 段落缩进

```text title="冒号 + tab "
dixi
:   dixiLOG
    a magic bolg  
    :   what c i say?  
        amazing!
```

dixi
:   dixiLOG
    a magic bolg  
    :   what c i say?  
        amazing!

---

### 高亮块

>可能是使用最多的部分

```text title="格式"
!!! type "name"
    content
```
!!! info "info"
    这里是info块

!!! success "success"
    这里是success块

!!! tip "tip"
    这里是tip块

!!! quote "quote"
    这里是quote块

!!! note "note"
    这里是note块

!!! abstract "abstract"
    这里是abstract块

!!! question "question"
    这里是question块

!!! example "example"
    这里是example块

!!! warning "warning"
    这里是warning块

!!! failure "failure"
    这里是failure块

!!! bug "bug"
    这里是bug块

!!! danger "danger"
    这里是danger块

---

### 折叠与分栏

```text title="折叠格式"
??? type "name"
    content
```

```text title="分栏格式"
=== "name1"
    content

=== "name2"
    content
```

=== "分栏1"
    ??? danger "danger"
        这里是danger块

=== "分栏2"  
    !!! danger "danger"
        这里是danger块

---

## 目录生成
```text title="就一行"
[TOC]
```
!!! success "渲染结果"
    [TOC]
