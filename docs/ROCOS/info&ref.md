
# 学习路径一览与相关参考

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

<!-- 引入 Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>

<script>
    // 确保 Firebase 只初始化一次 
    if (!firebase.apps.length) {
        const firebaseConfig = {
            apiKey: "AIzaSyAa66EUv9NGTgQ2MmRrSUzvmWQIh7DAH0w",
            authDomain: "dixilog-cc0be.firebaseapp.com",
            projectId: "dixilog-cc0be",
            storageBucket: "dixilog-cc0be.appspot.com",
            messagingSenderId: "317567263984",
            appId: "1:317567263984:web:58fa672ce564bf554d0e35",
            measurementId: "G-XKHLTS0VXB"
        };
        firebase.initializeApp(firebaseConfig);
    }

    // 强制状态刷新机制 
    const forceAuthCheck = () => {
        firebase.auth().currentUser?.getIdTokenResult()
            .then(result => {
                if (!result?.claims?.user_id) throw new Error("无效凭证");
            })
            .catch(() => {
                console.log('检测到无效凭证，强制跳转...');
                window.location.href = '../login.html';
            });
    };

    // 组合监听方案
    document.addEventListener('DOMContentLoaded', forceAuthCheck); // 初始检查
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') forceAuthCheck(); // 可见时检查
    });
    setInterval(forceAuthCheck, 5000); // 保底5秒检查 [[谨慎使用]]

    // 原始监听保持 
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            console.log('未登录状态，跳转中...');
            window.location.href = '../login.html';
        }
    });
</script>

!!! quote " 哦，你来到了一片知识的荒原,等待你我的开垦"

:   这一节将对后续的学习路径进行说明，并给出相关的学习资料

## 学习路径

> 以代码组为主线，分为 <u>比赛背景与基础知识</u> 、 <u>Client 环境搭建</u> 、 <u> rocos架构熟悉</u>、  
> <u>rocos 实战 —— 以wht老师教学视频(以下称为“wht视频”)为引</u>

### 1. 比赛背景与基础知识  

:   这一部分将介绍比赛背景、比赛规则、比赛流程、比赛工具等相关基础知识，相对比较水货
:   但可能出现部分内容看不懂，这是正常的，可以回过头再来看~

??? abstract "具体而言"
    - 比赛背景与比赛流程介绍
    - 比赛规则解读
    - ~~实验室灯的开关在哪里？~~
    - 让小车跑起来
    - ubuntu下基于sublime-merge的多人代码协作
    - （持续更新）...

### 2. Client 环境搭建

:   有关 Client 环境搭建的部分,新版本的前瞻也会放在这里

??? tip "具体而言"
    - 双系统搭建
    - Client 安装与界面说明
    - 新版本说明
    - （持续更新）...

### 3. rocos架构熟悉

:   使代码与规则对齐颗粒度，是开启代码之旅的基础与关键

??? abstract "具体而言"
    - 数据存储结构
    - lua层下 play-status-task-skill 架构
    - c++层?
    - （持续更新）...

### 4. rocos实战 —— 以wht老师教学视频为引

:   通过wht视频与demo让大家的仿真跑起来


??? tip "具体而言"
    - 策略层——Play与Status的跳转逻辑
    - 技能层——写出优雅（兼顾通用性和鲁棒性）的skill
    - 机器学习？
    - （持续更新）...

## 能想到的学习资料

!!! info "一些参考"
    <div class="flink-list">
        <div class="flink-list-item">
            <a href="https://pan.baidu.com/s/1EhdWpNXY1i0R5pamc0gbxA?pwd=y65p " title="wht视频" target="_blank">
                <div class="flink-item-icon">
                    ![](../rocos_img/baidu.png){ .off-glb }
                </div>
                <div class="flink-item-name heti-skip">wht老师的妙妙视频</div>
                <div class="flink-item-desc">分为技能赛和团体赛 | 录制于23年5月</div>
            </a>
        </div>
        <div class="flink-list-item">
            <a href="https://rocos.readthedocs.io/zh-cn/latest" title="官方wiki" target="_blank">
                <div class="flink-item-icon">
                    ![](../rocos_img/githubwiki.png){ .off-glb }
                </div>
                <div class="flink-item-name heti-skip">官方 WIKI</div>
                <div class="flink-item-desc">都抄的这里O__O "…</div>
            </a>
        </div>
        <div class="flink-list-item">
            <a href="https://rocos.salta.top" title="湖师wiki" target="_blank">
                <div class="flink-item-icon">
                    ![](../rocos_img/Vue.png){ .off-glb }
                </div>
                <div class="flink-item-name heti-skip">湖师 WIKI</div>
                <div class="flink-item-desc"> tql，猛猛学( ˘ω˘ )</div>
            </a>
        </div>
        <div class="flink-list-item">
            <a href="https://rvwy34k2yev.feishu.cn/wiki/X9ASwKfa9ilr8CkqzhcceyCynyc" title="足球机器人参数" target="_blank">
                <div class="flink-item-icon">
                    ![](../rocos_img/feishu.png){ .off-glb }
                </div>
                <div class="flink-item-name heti-skip">Client&硬件环境</div>
                <div class="flink-item-desc"> 对比赛产品的官方说明文档 </div>
            </a>
        </div>
        <div class="flink-list-item">
            <a href="https://space.bilibili.com/298653126?spm_id_from=333.337.search-card.all.click" title="乐博" target="_blank">
                <div class="flink-item-icon">
                    ![](../rocos_img/bilibili.png){ .off-glb }
                </div>
                <div class="flink-item-name heti-skip">ChinaOpenSSL公开课</div>
                <div class="flink-item-desc"> 每看每新 </div>
            </a>
        </div>
        <div class="flink-list-item">
            <a href="https://space.bilibili.com/15068259" title="Mark" target="_blank">
                <div class="flink-item-icon">
                    ![](../rocos_img/turing.avif){ .off-glb }
                </div>
                <div class="flink-item-name heti-skip">Markの主页</div>
                <div class="flink-item-desc"> 比赛总裁判，超级牛人 </div>
            </a>
        </div>
    </div>