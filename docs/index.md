---
# comments: true
title: DIXI的个人博客
---


# Welcome to dixi's BLOG~

<div id="progress-container">
  <div id="progress-bar"></div>
</div>




这里是 dixi ，希望你能喜欢这里~~

!!! note "Who am I?"
    - 青龙山外派光明顶发电厂首席技工，智商税拥趸  
    - NBU本科在读（自称 *NBUCETer* ）
    - 重度音乐依赖症，打电话会死星人
    - “坦克动荡2” *<u>20:0</u>* 零封 Laika
    - 喜欢看书，喜欢折腾，喜欢开源

!!! tip "dixiLOG 览揆之辰"
    2024-07-08

??? success "装修&上新流水"

    >2024年7月14日 | COMPLETE&UPDATE  
    > 1.  修补HOME页  
    > 2.  添加 reading-time  
    > 3.  更新“闲言碎语”板块为blog，开始同步[文章](http://dixilog.github.io/blog/)

    ---

    >2027年7月12日 | UPDATE  
    >Build Your Own Blog 装修中...

      - [ ] 网页搭建与发布
      - [ ] 玩转 Materail 
      - [ ] 飞书文档的md迁移 
      - [x] [Markdown 速记](http://dixilog.github.io/build_your_web/markdown%20%E9%80%9F%E8%AE%B0/) [95%]

    ---
    
    >2024年7月8日 | 建站 

!!! question "dixi有话说"
    - 原来以前认为狄更斯的小说味如嚼蜡是由于找错翻译了🤣  
    >路上的人把苍耳带到世界各地，可没有人会拥抱苍耳   
    ---   
    
    - slowroads真好丸😋


!!! quote "打油诗"
    多少桐柳不得问，匆忙梦里寻佳人  
    辗转衾湿茫然顾，恍惚秦皇骊山坟
    
> 联系方式：
> 
> QQ:1444127184  

> 转载请标明出处及作者呦~

---


<!-- Giscus 评论功能 -->
<div id="giscus-container"></div>

<script src="https://giscus.app/client.js"
        data-repo="dixiLOG/dixiLOG.github.io"
        data-repo-id="R_kgDOMSVlpg"
        data-category="Announcements"
        data-category-id="DIC_kwDOMSVlps4CgoIQ"
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
    document.addEventListener("DOMContentLoaded", function() {
        var feedbackSection = document.querySelector('md-feedback'); // 确保选择器正确
        var giscusContainer = document.querySelector('#giscus-container');

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
        var palette = __md_get("__palette");
        var theme = palette && palette.color.scheme === "slate" ? "dark" : "light";
        var giscusScript = document.querySelector("#giscus-container script");
        if (giscusScript) {
            giscusScript.setAttribute("data-theme", theme);
        }

        // 注册主题切换事件
        var paletteToggle = document.querySelector("[data-md-component=palette]");
        if (paletteToggle) {
            paletteToggle.addEventListener("change", function() {
                var newPalette = __md_get("__palette");
                var newTheme = newPalette && newPalette.color.scheme === "slate" ? "dark_dimmed" : "light_high_contrast";
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
                var giscusFrame = document.querySelector("iframe.giscus-frame");
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

