# 几何篇


<div id="progress-container">
  <div id="progress-bar"></div>
</div>


## 一、四边形性质与判定

### （一）平行四边形的判定体系

#### 1. 核心定义与性质

四边形是平面几何从“静态三角形”走向“动态多边形”的第一步。平行四边形（Parallelogram）作为四边形家族的“始祖”，其地位如同代数中的“方程”

（1）定义

<span style="border-bottom: 1.5px dashed orange;">两组对边分别平行</span>的四边形叫做平行四边形


* 记作：$\square ABCD$

* 几何语言：
    $\because AB \parallel CD, AD \parallel BC$
    $\therefore$ 四边形 $ABCD$ 是平行四边形

（2）核心性质（知一推三）

一旦确认是平行四边形，你可以立即获得以下所有“红利”：

1. <span style="border-bottom: 1.5px dashed orange;">边</span>：对边平行且相等（$AB=CD, AD=BC$）
2. <span style="border-bottom: 1.5px dashed orange;">角</span>：对角相等（$\angle A=\angle C$），邻角互补
3. <span style="border-bottom: 1.5px dashed orange;">对角线</span>：互相平分（$OA=OC, OB=OD$）。这是解决<span style="border-bottom: 1.5px dashed orange;">中点问题</span>的核心模型

---

#### 2. 判定方法库（五大金刚）

判定一个四边形是不是平行四边形，我们有5种武器。在解题时，应根据已知条件灵活选择

| 判定依据    | 具体描述               | 几何语言（简写）                       | 推荐场景                         |
| :---------- | :--------------------- | :------------------------------------- | :------------------------------- |
| <span style="border-bottom: 1.5px dashed orange;">定义法</span>  | <span style="border-bottom: 1.5px dashed orange;">两组对边</span>分别平行   | $AB \parallel CD, AD \parallel BC$     | 已知平行条件较多时               |
| <span style="border-bottom: 1.5px dashed orange;">边判定1</span> | <span style="border-bottom: 1.5px dashed orange;">两组对边</span>分别相等   | $AB=CD, AD=BC$                         | 已知边长数据时                   |
| <span style="border-bottom: 1.5px dashed orange;">边判定2</span> | <span style="border-bottom: 1.5px dashed orange;">一组对边</span>平行且相等 | $AB \parallel CD, AB=CD$               | <span style="border-bottom: 1.5px dashed orange;">最常用</span>！只需证明一组边的关系 |
| <span style="border-bottom: 1.5px dashed orange;">对角线</span>  | <span style="border-bottom: 1.5px dashed orange;">对角线</span>互相平分     | $OA=OC, OB=OD$                         | 涉及中点、中线时                 |
| <span style="border-bottom: 1.5px dashed orange;">角判定</span>  | <span style="border-bottom: 1.5px dashed orange;">两组对角</span>分别相等   | $\angle A=\angle C, \angle B=\angle D$ | 较少使用，仅在全角计算时用       |

!!! bug "易错陷阱：等腰梯形的伪装"

    <span style="border-bottom: 1.5px dashed orange;">问</span>：若 $AB \parallel CD, AD=BC$（一组对边平行，另一组对边相等），它是平行四边形吗？

    <span style="border-bottom: 1.5px dashed orange;">答</span>：<span style="border-bottom: 1.5px dashed orange;">不一定</span>！它可能是<span style="border-bottom: 1.5px dashed orange;">等腰梯形</span>


    > <span style="border-bottom: 1.5px dashed orange;">口诀</span>：平行且相等，必须是<span style="border-bottom: 1.5px dashed orange;">同一组</span>边！

---

#### 3. 典型例题

“一组对边平行且相等”的应用

<span style="border-bottom: 1.5px dashed orange;">如图</span>，在 $\square ABCD$ 中，点 $E, F$ 分别在 $BC, AD$ 上，且 $BE=DF$。求证：四边形 $AECF$ 是平行四边形

<span style="border-bottom: 1.5px dashed orange;">解析</span>：
这道题展示了如何从一个大的平行四边形中“孵化”出一个小的平行四边形

1. <span style="border-bottom: 1.5px dashed orange;">找平行</span>：
    $\because$ 四边形 $ABCD$ 是平行四边形
    $\therefore AD \parallel BC$ （大性质）
    $\therefore AF \parallel EC$ （落在边上也平行）
2. <span style="border-bottom: 1.5px dashed orange;">找相等</span>：
    $\because AD=BC$ 且 $DF=BE$
    $\therefore AD-DF = BC-BE \Rightarrow AF=EC$
3. <span style="border-bottom: 1.5px dashed orange;">下结论</span>：
    $\because AF \parallel EC$ 且 $AF=EC$
    $\therefore$ 四边形 $AECF$ 是平行四边形（<span style="border-bottom: 1.5px dashed orange;">一组对边平行且相等</span>）

!!! tip "解题心法"
    看到四边形证明，优先找“平行且相等”这一对组合，通常比证明两组边都相等要快一倍

---

#### 4. 进阶思维与素养拓展

*本节参考浙江省素养测试卷（复赛）的命题逻辑，重点讲解辅助线构造*

（1）倍长中线法（构造中心对称）

当题目中出现“中点”或“中线”，但无法直接使用中位线时，<span style="border-bottom: 1.5px dashed orange;">构造平行四边形</span>是标准动作


* <span style="border-bottom: 1.5px dashed orange;">模型</span>：$\triangle ABC$ 中，$AD$ 是 $BC$ 边上的中线

* <span style="border-bottom: 1.5px dashed orange;">操作</span>：延长 $AD$ 到 $E$，使 $DE=AD$，连接 $BE, CE$

* <span style="border-bottom: 1.5px dashed orange;">结果</span>：四边形 $ABEC$ 是平行四边形（对角线 $AE, BC$ 互相平分）

* <span style="border-bottom: 1.5px dashed orange;">作用</span>：将分散的边 $AB$ 和 $AC$ 转移到同一个三角形 $\triangle ACE$ 中，便于利用三边关系 $AC-AB < 2AD < AC+AB$ 求解

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q4</span>：涉及直角三角形斜边中线，本质上也是利用了对角线互相平分的逆定理（矩形判定）
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q2</span>：直接考查 $\square ABCD$ 中对角线交点 $O$ 的性质，结合 $BD=10, AC=6$ 求边长范围，这是典型的“对角线模型”应用

（2）坐标系中的平行四边形（存在性问题）

这是中考和竞赛的压轴常客。给定三点 $A, B, C$，找第四点 $D$ 构成平行四边形

- <span style="border-bottom: 1.5px dashed orange;">核心算法</span>：利用“中点坐标公式”
    平行四边形对角线互相平分 $\Rightarrow$ 对角线中点重合

- 若 $AC$ 为对角线：$x_A + x_C = x_B + x_D, \quad y_A + y_C = y_B + y_D$
    <span style="border-bottom: 1.5px dashed orange;">

> 注意</span>：因为未指定哪条是对角线，通常需要分3种情况讨论（分别以 $AB, AC, BC$ 为对角线）

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">逻辑辨析</span>：下列条件能判定四边形是平行四边形的是（ ）

    A. 一组对边平行，另一组对边相等
    B. 一组对边平行，一组对角相等
    C. 一组对边相等，一组对角相等
    D. 对角线互相垂直
    
    >（答案：B。A是等腰梯形；C可能是等腰梯形；D是垂线模型；B可以通过平行证角互补，进而证两组对角相等）*

    2. <span style="border-bottom: 1.5px dashed orange;">作图思考</span>：给你两根长度不等的木条，如何只通过测量中点的方法，摆出一个平行四边形？

    >（提示：将两根木条的中点重叠并固定，连结四个端点即可。原理：对角线互相平分）*

***

### （二）特殊平行四边形的层级关系

#### 1. 核心定义与判定体系

如果说平行四边形是“普通公民”，那么矩形、菱形和正方形就是拥有特权的“贵族”。它们之间的关系不是并列的，而是<span style="border-bottom: 1.5px dashed orange;">包含与进化</span>的关系

（1）家族进化树

所有的特殊四边形首先必须是<span style="border-bottom: 1.5px dashed orange;">平行四边形</span>

1. <span style="border-bottom: 1.5px dashed orange;">矩形（Rectangle）</span>：
    
* <span style="border-bottom: 1.5px dashed orange;">定义</span>：有一个角是直角的平行四边形
    
* <span style="border-bottom: 1.5px dashed orange;">判定核心</span>：$\angle A = 90^\circ$ 或 <span style="border-bottom: 1.5px dashed orange;">对角线相等</span> ($AC=BD$)

2. <span style="border-bottom: 1.5px dashed orange;">菱形（Rhombus）</span>：
    
* <span style="border-bottom: 1.5px dashed orange;">定义</span>：有一组邻边相等的平行四边形
    
* <span style="border-bottom: 1.5px dashed orange;">判定核心</span>：$AB=AD$ 或 <span style="border-bottom: 1.5px dashed orange;">对角线互相垂直</span> ($AC \perp BD$)

3. <span style="border-bottom: 1.5px dashed orange;">正方形（Square）</span>：
    
* <span style="border-bottom: 1.5px dashed orange;">定义</span>：既是矩形又是菱形的四边形
    
* <span style="border-bottom: 1.5px dashed orange;">判定核心</span>：矩形 + 邻边相等；或者 菱形 + 直角

（2）对角线的“DNA”密码

对角线是区分它们的各种“基因”的关键：

* <span style="border-bottom: 1.5px dashed orange;">平行四边形</span>：互相平分

* <span style="border-bottom: 1.5px dashed orange;">矩形</span>：互相平分 + <span style="border-bottom: 1.5px dashed orange;">相等</span>

* <span style="border-bottom: 1.5px dashed orange;">菱形</span>：互相平分 + <span style="border-bottom: 1.5px dashed orange;">垂直</span>（且平分对角）

* <span style="border-bottom: 1.5px dashed orange;">正方形</span>：互相平分 + <span style="border-bottom: 1.5px dashed orange;">相等</span> + <span style="border-bottom: 1.5px dashed orange;">垂直</span>

---

#### 2. 深度解析：面积公式的“降维打击”

（1）菱形的特殊面积公式

普通平行四边形面积 $S = \text{底} \times \text{高}$
但对于菱形（以及所有对角线互相垂直的四边形），有一个更爽的公式：

$$S_{\text{菱形}} = \frac{1}{2} \times \text{对角线}_1 \times \text{对角线}_2$$


* <span style="border-bottom: 1.5px dashed orange;">原理</span>：对角线把菱形切成了4个全等的直角三角形

* <span style="border-bottom: 1.5px dashed orange;">注意</span>：正方形也是菱形，所以正方形面积 $S = a^2$ 或 $S = \frac{1}{2}d^2$（$d$为对角线长）

（2）判定路径的选择

在证明题中，不要试图一步登天证明正方形

* <span style="border-bottom: 1.5px dashed orange;">路径 A</span>：先证它是矩形 $\rightarrow$ 再证邻边相等

* <span style="border-bottom: 1.5px dashed orange;">路径 B</span>：先证它是菱形 $\rightarrow$ 再证有一个角是直角

> 选哪条？  
> 看已知条件。如果有垂直关系，走菱形路线；如果有垂直平分线，走菱形路线；如果有直角三角形斜边中线，走矩形路线

---

#### 3. 典型例题

【例1】 折叠中的矩形判定

如图，将矩形纸片 $ABCD$ 沿 $AE$ 折叠，使点 $D$ 落在 $BC$ 边上的点 $F$ 处。若 $\angle BAF = 60^\circ$，求 $\angle DAE$ 的度数

<span style="border-bottom: 1.5px dashed orange;">解析</span>：
这是一道经典的“折叠”题，核心是<span style="border-bottom: 1.5px dashed orange;">全等</span>

1. <span style="border-bottom: 1.5px dashed orange;">折叠性质</span>：$\triangle ADE \cong \triangle AFE$
    $\therefore \angle D = \angle AFE = 90^\circ$，$\angle DAE = \angle FAE$

2. <span style="border-bottom: 1.5px dashed orange;">角度计算</span>：
    矩形中 $\angle DAB = 90^\circ$
    $\because \angle BAF = 60^\circ$
    $\therefore \angle DAF = 90^\circ - 60^\circ = 30^\circ$

3. <span style="border-bottom: 1.5px dashed orange;">角平分线</span>：
    $\angle DAE = \frac{1}{2} \angle DAF = 15^\circ$

【例2】 中点四边形

顺次连接任意四边形各边中点，所得的四边形是什么形状？若是连接矩形各边中点呢？

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">任意四边形</span>：利用三角形中位线定理
    连接对角线 $AC, BD$。新四边形的边平行且等于对角线的一半
    $\therefore$ 总是<span style="border-bottom: 1.5px dashed orange;">平行四边形</span>

2. <span style="border-bottom: 1.5px dashed orange;">矩形的中点四边形</span>：
    原四边形是矩形 $\Rightarrow$ 对角线 $AC=BD$
    $\therefore$ 新四边形的邻边相等
    $\therefore$ 是<span style="border-bottom: 1.5px dashed orange;">菱形</span>

!!! tip "结论记忆"
    中点四边形的形状取决于原四边形<span style="border-bottom: 1.5px dashed orange;">对角线</span>的关系（相等 $\to$ 菱形；垂直 $\to$ 矩形）

---

#### 4. 进阶思维与素养拓展

*本节结合“赵爽弦图”模型与素养卷中的面积计算*

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q15</span>：如图，大正方形 $ABCD$ 由四个全等的直角三角形和一个小正方形组成，设 $AF=a, DF=ak \dots$ 若 $\triangle ADE$ 与 $\triangle BEH$ 面积相等，求 $(k-3)(k+2)$
         - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：这道题就是<span style="border-bottom: 1.5px dashed orange;">赵爽弦图</span>的直接应用。它考查了正方形的构造特征，需要学生利用勾股定理和面积法建立等量关系。题目求的是一个整式的值，暗示了不需要解出 $k$ 的具体值，而是进行整体代换
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q10</span>：在 $\square ABCD$ 中，对角线相交于 $O$，$AE \perp BC$ 于 $E$，$BE=2, EC=3$，记 $AB=x, BD=y$，则 $x^2-y^2$ 的值
         - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：虽然题目背景是平行四边形，但涉及垂线和平方差。这里隐含了<span style="border-bottom: 1.5px dashed orange;">勾股定理</span>在非矩形中的推广（射影定理的变形）。需要利用勾股定理在 Rt$\triangle ABE$ 和 Rt$\triangle AEC$ 之间架桥
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q4</span>：在 Rt$\triangle ABC$ 中，$CD$ 为 $AB$ 边上的中线，$CH \perp DB$ 等
         - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：直角三角形斜边中线定理，本质上是<span style="border-bottom: 1.5px dashed orange;">矩形对角线互相平分且相等</span>的一半。看到 Rt$\triangle$ 斜边中点，必须想到这个模型

（1）正方形中的“弦图”模型

在正方形内部嵌入直角三角形，是中考压轴题的常客。最经典的是“赵爽弦图”及其变式

* <span style="border-bottom: 1.5px dashed orange;">核心</span>：利用“大正方形面积 = 小正方形 + 4个直角三角形”建立方程

* <span style="border-bottom: 1.5px dashed orange;">技巧</span>：全等旋转。看到正方形中有 $45^\circ$ 或直角三角形，考虑绕中心旋转 $90^\circ$，将分散的线段拼在一起

（2）动点与最值

在矩形或正方形中，利用对称性解决“将军饮马”问题（线段和最小）是必考点

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">判定陷阱</span>：对角线互相垂直的四边形是菱形吗？
        *（答案：错。必须先是平行四边形，或者是“对角线互相垂直平分”。单纯垂直可能是“风筝形”）*
    2. <span style="border-bottom: 1.5px dashed orange;">面积计算</span>：一个菱形的两条对角线长分别为 6 和 8，则这个菱形的边长是多少？面积是多少？
        *（答案：边长 5（勾股定理 $\sqrt{3^2+4^2}$）；面积 24（$0.5 \times 6 \times 8$））*
    3. <span style="border-bottom: 1.5px dashed orange;">逆向思维</span>：若顺次连接四边形 $ABCD$ 各边中点得到的是一个正方形，那么原四边形 $ABCD$ 需要满足什么条件？
        *（答案：对角线互相垂直且相等）*

***

## 二、圆的几何性质

### （一）垂径定理与圆心角、圆周角

#### 1. 核心定义与定理

圆是几何中最完美的图形，它将我们从“直线世界”带入了“曲线世界”。圆的几何性质核心在于<span style="border-bottom: 1.5px dashed orange;">对称性</span>（轴对称与旋转对称）

（1）垂径定理

这是解决圆中计算问题的“核武器”，它构建了<span style="border-bottom: 1.5px dashed orange;">半径</span>、<span style="border-bottom: 1.5px dashed orange;">弦长</span>、<span style="border-bottom: 1.5px dashed orange;">弦心距</span>之间的直角三角形关系


* <span style="border-bottom: 1.5px dashed orange;">定理</span>：垂直于弦的直径平分这条弦，并且平分弦所对的两条弧

* <span style="border-bottom: 1.5px dashed orange;">推论（知二推三）</span>：
    在 ①过圆心 ②垂直于弦 ③平分弦 ④平分优弧 ⑤平分劣弧 这5个条件中，只要知道其中2个（需满足一定限制，如“非直径的弦”），就能推出其余3个

* <span style="border-bottom: 1.5px dashed orange;">代数表达</span>：
    若 $CD$ 是直径，$CD \perp AB$ 于 $E$，则：
    $AE = EB = \frac{1}{2}AB$，$\overset{\frown}{AC} = \overset{\frown}{BC}$

（2）圆心角与圆周角


* <span style="border-bottom: 1.5px dashed orange;">圆心角</span>：顶点在圆心的角

* <span style="border-bottom: 1.5px dashed orange;">圆周角</span>：顶点在圆上，两边都与圆相交的角

* <span style="border-bottom: 1.5px dashed orange;">三大定理</span>：
    1. <span style="border-bottom: 1.5px dashed orange;">同弧所对的圆周角相等</span>（“同弧等角”）
    2. <span style="border-bottom: 1.5px dashed orange;">一条弧所对的圆周角等于它所对圆心角的一半</span>（这是圆中转角的关键，$\angle \text{圆周} = \frac{1}{2} \angle \text{圆心}$）
    3. <span style="border-bottom: 1.5px dashed orange;">直径所对的圆周角是直角</span>（$90^\circ$ 推论）。反之，90°圆周角所对的弦是直径

---

#### 2. 深度解析：基本图形与辅助线

（1）“垂径直角三角形”模型

凡是涉及半径 $r$、弦长 $a$、弦心距 $d$ 的计算，必须构造直角三角形

* <span style="border-bottom: 1.5px dashed orange;">勾股方程</span>：$r^2 = d^2 + (\frac{a}{2})^2$

* <span style="border-bottom: 1.5px dashed orange;">辅助线口诀</span>：<span style="border-bottom: 1.5px dashed orange;">见弦作垂线，连结半径</span>。这一刀下去，立刻出现直角三角形

（2）“隐圆”模型

有些题目表面没有圆，但充满了圆的灵魂

* <span style="border-bottom: 1.5px dashed orange;">定点定长</span>：到定点距离等于定长的点的轨迹是圆

* <span style="border-bottom: 1.5px dashed orange;">定弦定角</span>：若线段 $AB$ 固定，且 $\angle APB$ 大小恒定，则 $P$ 点在圆弧上运动

* <span style="border-bottom: 1.5px dashed orange;">直角对直径</span>：若 $\angle APB = 90^\circ$，则 $P$ 在以 $AB$ 为直径的圆上

---

#### 3. 典型例题

【例1】 垂径定理的计算（“折叠圆”问题）

如图，半径为 5 的 $\odot O$ 中，弦 $AB$ 被直径 $CD$ 垂直平分。若弦 $AB=8$，求 $CD$ 上一点到 $AB$ 的距离（即弦心距）

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">辅助线</span>：连接半径 $OA$

2. <span style="border-bottom: 1.5px dashed orange;">算半弦</span>：$\because$ 直径垂直弦 $\therefore$ $AE = \frac{1}{2}AB = 4$

3. <span style="border-bottom: 1.5px dashed orange;">勾股定理</span>：在 Rt$\triangle OAE$ 中，
    $OE = \sqrt{OA^2 - AE^2} = \sqrt{5^2 - 4^2} = 3$
    <span style="border-bottom: 1.5px dashed orange;">答</span>：弦心距为 3

【例2】 圆周角定理的应用

如图，四边形 $ABCD$ 内接于 $\odot O$，若 $\angle BOD = 100^\circ$，求 $\angle BAD$ 和 $\angle BCD$ 的度数

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">找关系</span>：$\angle BAD$ 和 $\angle BOD$ 对着同一条弧 $\overset{\frown}{BCD}$（劣弧）
    $\therefore \angle BAD = \frac{1}{2} \angle BOD = 50^\circ$

2. <span style="border-bottom: 1.5px dashed orange;">圆内接四边形</span>：$\angle BAD + \angle BCD = 180^\circ$（圆内接四边形对角互补）
    $\therefore \angle BCD = 180^\circ - 50^\circ = 130^\circ$

!!! warning "注意"
    圆心角 $\angle BOD$ 通常指小于 180° 的那个角  
    求 $\angle BCD$ 时，也可以用优弧所对的圆心角 ($360^\circ - 100^\circ = 260^\circ$) 除以 2 得到 $130^\circ$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江省素养测试卷中的“圆”的隐性考法。在八年级试卷中，圆往往以“距离”或“旋转”的面目出现*

（1）“直角三角形斜边中线”即“半径”

在前面的章节（矩形）中我们提到过斜边中线。在圆的视角下，这其实是：<span style="border-bottom: 1.5px dashed orange;">直角三角形的外接圆圆心在斜边中点</span>

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q4</span>：在 Rt$\triangle ABC$ 中，$\angle ACB=90^\circ$，$CD$ 为 $AB$ 边上的中线...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：看到 $CD$ 是中线且 $\triangle ABC$ 是直角三角形，马上反应出 $AD=BD=CD$。这三个点 $A, B, C$ 其实都在以 $D$ 为圆心、$AB$ 为直径的圆上。题目后续的计算（如 $H$ 点位置）可以借助圆的性质来理解

（2）“定点定长”的圆定义应用

当题目中出现“点到原点的距离为定值”时，这就是圆的代数定义

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q3</span>：在平面直角坐标系中，第四象限内点 $P(2, y)$ 到原点的距离为 $\sqrt{10}$
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：$OP = \sqrt{10}$，即 $x^2 + y^2 = 10$。代入 $x=2$，得 $4+y^2=10 \Rightarrow y^2=6$。因在第四象限，$y=-\sqrt{6}$  
         > 这虽然是代数题，但几何背景是点 $P$ 在以原点为圆心，半径为 $\sqrt{10}$ 的圆上
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q6</span>：在 $\triangle ABC$ 中... 以 $A$ 为圆心作弧交 $BC$ 于点 $M, N$...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这是一道明确的<span style="border-bottom: 1.5px dashed orange;">尺规作图与圆</span>结合题。以 $A$ 为圆心意味着 $AM=AN$，构造了等腰三角形 $\triangle AMN$。结合 $BC$ 上的垂线，利用垂径定理（或等腰三角形三线合一）求解线段长

（3）构造辅助圆

这是竞赛级的高阶技巧。当图形中出现“共端点的等线段”（如 $AB=AC=AD$）时，这三点就在同一个圆上，圆心是 $A$

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">定理辨析</span>：平分弦的直径一定垂直于弦吗？
        
    *(答案：不一定。如果弦本身就是直径，那么两条直径互相平分但不一定垂直。必须强调“平分<span style="border-bottom: 1.5px dashed orange;">不是直径</span>的弦”)*
    
    1. <span style="border-bottom: 1.5px dashed orange;">度数陷阱</span>：圆周角是 $30^\circ$，它所对的弧是多少度？弦所对的圆心角是多少度？
        
    *(答案：弧是 $60^\circ$；圆心角是 $60^\circ$)*
    
    1. <span style="border-bottom: 1.5px dashed orange;">直角模型</span>：如图，点 $A, B, C$ 在圆上，若 $\angle C = 90^\circ$，则 $AB$ 是什么？
        
    *(答案：$AB$ 是直径)*

***

### （二）点、直线与圆的位置关系

#### 1. 核心定义与判定依据

判断“位置关系”的本质，就是比较“距离 $d$”与“半径 $r$”的大小。这是将几何直观转化为代数计算的关键一步

（1）点与圆的位置关系

设 $\odot O$ 的半径为 $r$，点 $P$ 到圆心 $O$ 的距离为 $d$

<span style="border-bottom: 1.5px dashed orange;">点在圆外</span> $\iff d > r$

<span style="border-bottom: 1.5px dashed orange;">点在圆上</span> $\iff d = r$ （圆的方程的核心定义）

* <span style="border-bottom: 1.5px dashed orange;">点在圆内</span> $\iff d < r$

> <span style="border-bottom: 1.5px dashed orange;">****</span>

（2）直线与圆的位置关系

设 $\odot O$ 的半径为 $r$，圆心 $O$ 到直线 $l$ 的垂线段长度（即圆心到直线的距离）为 $d$

1. <span style="border-bottom: 1.5px dashed orange;">相离 (Separated)</span>：直线与圆没有公共点
    
* 判定：$d > r$

2. <span style="border-bottom: 1.5px dashed orange;">相切 (Tangent)</span>：直线与圆<span style="border-bottom: 1.5px dashed orange;">只有一个</span>公共点（切点）
    
* 判定：$d = r$
    
* <span style="border-bottom: 1.5px dashed orange;">核心性质</span>：圆心到切点的半径<span style="border-bottom: 1.5px dashed orange;">垂直</span>于切线 ($OA \perp l$)

3. <span style="border-bottom: 1.5px dashed orange;">相交 (Secant)</span>：直线与圆有两个公共点
    
* 判定：$d < r$

（3）切线长定理

从圆外一点 $P$ 引圆的两条切线，切点分别为 $A, B$

* <span style="border-bottom: 1.5px dashed orange;">结论</span>：$PA = PB$，且 $PO$ 平分 $\angle APB$

* <span style="border-bottom: 1.5px dashed orange;">模型</span>：这也叫“冰激凌模型”或“风筝模型”，它是构造全等三角形 (Rt$\triangle PAO \cong Rt\triangle PBO$) 的产物

---

#### 2. 深度解析：切线的判定与辅助线

（1）如何证明一条直线是切线？

这是中考解答题的常见第一问，通常有两种路径：

* <span style="border-bottom: 1.5px dashed orange;">路径 A（有点）</span>：如果直线 $l$ 经过圆上某点 $A$，则<span style="border-bottom: 1.5px dashed orange;">连半径，证垂直</span>
    
* 即证明 $OA \perp l$


* <span style="border-bottom: 1.5px dashed orange;">路径 B（无点）</span>：如果不知道直线与圆的交点，则<span style="border-bottom: 1.5px dashed orange;">作垂线，证半径</span>
    

* 即过圆心 $O$ 作 $OD \perp l$ 于 $D$，证明 $OD = r$

（2）隐形圆的“警戒线”

在动点问题中，如果点 $P$ 到定点 $O$ 的距离恒为定值，点 $P$ 的轨迹就是圆。此时直线与该轨迹的位置关系，往往决定了题目是否有解（例如：直线与圆相切时，往往对应着某个极值状态）

---

#### 3. 典型例题

【例1】 坐标系中的点圆关系

在平面直角坐标系中，$\odot O$ 的圆心在原点，半径为 2。判断点 $P(1, -\sqrt{3})$ 与 $\odot O$ 的位置关系

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">算距离</span>：计算 $P$ 到原点 $O(0,0)$ 的距离 $d$
    $d = \sqrt{1^2 + (-\sqrt{3})^2} = \sqrt{1+3} = \sqrt{4} = 2$

2. <span style="border-bottom: 1.5px dashed orange;">比大小</span>：
    $\because d = 2$，$r = 2$
    $\therefore d = r$
    <span style="border-bottom: 1.5px dashed orange;">答</span>：点 $P$ 在 $\odot O$ 上

【例2】 切线性质的应用

如图，$PA$ 为 $\odot O$ 的切线，$A$ 为切点，$PO$ 交 $\odot O$ 于点 $B$。若 $OA=3, PB=2$，求 $\tan \angle APO$ 的值

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">见切点，连半径</span>：连接 $OA$
    $\because PA$ 是切线，$\therefore OA \perp PA$，即 $\triangle PAO$ 是直角三角形

2. <span style="border-bottom: 1.5px dashed orange;">求边长</span>：
    $OB$ 也是半径，$\therefore OB = OA = 3$
    $PO = PB + OB = 2 + 3 = 5$

3. <span style="border-bottom: 1.5px dashed orange;">勾股定理</span>：
    在 Rt$\triangle PAO$ 中，$PA = \sqrt{PO^2 - OA^2} = \sqrt{5^2 - 3^2} = 4$

4. <span style="border-bottom: 1.5px dashed orange;">求函数</span>：
    $\tan \angle APO = \frac{\text{对边}}{\text{邻边}} = \frac{OA}{PA} = \frac{3}{4}$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养卷，探讨“点到定点距离”的隐圆应用，以及直线位置关系的代数化*

（1）“点在圆上”的代数翻译

当题目给出坐标满足 $x^2 + y^2 = k$ 时，这就是圆的方程

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q3</span>：在平面直角坐标系中，第四象限内点 $P(2, y)$ 到原点的距离为 $\sqrt{10}$
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这就是<span style="border-bottom: 1.5px dashed orange;">【例1】</span>的逆运算。题目本质是说点 $P$ 在以原点为圆心、半径为 $\sqrt{10}$ 的圆上。利用勾股定理（距离公式）$2^2 + y^2 = (\sqrt{10})^2$ 建立方程，瞬间解出 $y^2=6$

（2）直线与圆相切的“临界状态”

在高中数学中，直线与圆相切往往意味着判别式 $\Delta = 0$。在初中竞赛中，这常用于求最值
如果题目问“直线 $y=kx+b$ 与圆有公共点”，则隐含条件是 $d \le r$

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q21</span>：涉及直线 $y=\frac{kx+2k-4}{k-1}$ 经过定点 $P$
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：虽然此题主要考查定点，但直线的解析式中 $k$ 的变化其实是在绕定点旋转。如果题目进一步问“该直线与某个圆的位置关系”，就需要利用 $d$ 与 $r$ 的关系。例如，若直线与以原点为圆心的圆相切，则利用“点到直线的距离公式”（竞赛内容）等于半径来求解 $k$

（3）隐圆中的最值

当点在圆上运动时，它到直线的最远/最近距离是多少？

* <span style="border-bottom: 1.5px dashed orange;">结论</span>：连接圆心作直线的垂线，延长交圆于两点
    
* 最近距离 = $d - r$
    
* 最远距离 = $d + r$

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">概念辨析</span>：直线 $l$ 上有一点 $A$ 到圆心距离等于半径，直线 $l$ 一定是切线吗？
        
     *(答案：不一定。必须是圆心到直线的“垂直距离”等于半径。点 $A$ 必须是垂足。如果 $OA$ 不垂直于 $l$，则 $l$ 是割线)*
    
    2. <span style="border-bottom: 1.5px dashed orange;">切线数量</span>：过圆内一点能做多少条切线？过圆上一点呢？过圆外一点呢？
        
     *(答案：0条；1条；2条)*
    
    3. <span style="border-bottom: 1.5px dashed orange;">计算自检</span>：$\odot O$ 半径为 5，圆心到直线 $l$ 的距离为 3，则直线被圆截得的弦长是多少？
        
     *(答案：8。利用垂径定理构造直角三角形，半弦长=$\sqrt{5^2-3^2}=4$，全长=8)*

***

### （三）圆中的计算

#### 1. 核心定义与公式

这一节是将几何“量化”的关键。圆的计算核心在于“比例”——无论是弧长还是扇形面积，本质上都是圆的一部分，这个“部分”的大小由圆心角 $n^\circ$ 决定

（1）弧长公式

设 $\odot O$ 半径为 $R$，圆心角为 $n^\circ$

* <span style="border-bottom: 1.5px dashed orange;">公式</span>：

$$l = \frac{n \pi R}{180}$$


> <span style="border-bottom: 1.5px dashed orange;">记忆法</span>：周长是 $2\pi R$。圆心角 $n^\circ$ 占 $360^\circ$ 的比例是 $\frac{n}{360}$
  $\therefore l = 2\pi R \times \frac{n}{360} = \frac{n \pi R}{180}$

（2）扇形面积公式

扇形是“弯曲的三角形”

* <span style="border-bottom: 1.5px dashed orange;">公式 A（角度制）</span>：

$$S_{\text{扇}} = \frac{n \pi R^2}{360}$$

> *记忆：面积 $\pi R^2$ 乘以比例 $\frac{n}{360}$*

* <span style="border-bottom: 1.5px dashed orange;">公式 B（弧长制 - 强烈推荐）</span>：

$$S_{\text{扇}} = \frac{1}{2} l R$$

> *记忆：类比三角形面积公式 $\frac{1}{2} \times \text{底} \times \text{高}$。这里弧长 $l$ 是“底”，半径 $R$ 是“高”。当已知弧长 $l$ 而不知道圆心角 $n$ 时，用这个公式秒杀*

（3）弓形面积 (Segment Area)

弓形由弦和弧围成。没有直接公式，必须使用“割补法”

* <span style="border-bottom: 1.5px dashed orange;">公式</span>：$S_{\text{弓形}} = S_{\text{扇形}} \pm S_{\triangle}$
  
* 当圆心角小于 $180^\circ$ 时（劣弧），用减法
  
* 当圆心角大于 $180^\circ$ 时（优弧），用加法

---

#### 2. 深度解析：不规则图形的“整形手术”

（1）“割补法”求阴影面积

在考试中，阴影部分往往是不规则的（比如花瓣形、月牙形）

* <span style="border-bottom: 1.5px dashed orange;">策略</span>：<span style="border-bottom: 1.5px dashed orange;">和差法</span>
  将不规则图形转化为：$S_{\text{规则1}} - S_{\text{规则2}}$ 或 $S_{\text{规则1}} + S_{\text{规则2}}$
  常见的“规则图形”包括：扇形、三角形、正方形、矩形

（2）旋转中的面积不变性

当一个图形旋转时，其扫过的区域往往也是扇形或环形

* <span style="border-bottom: 1.5px dashed orange;">关键</span>：找到旋转中心和旋转角。所有对应点扫过的路径都是同心圆弧

---

#### 3. 典型例题

【例1】 基础公式应用

已知扇形的圆心角为 $120^\circ$，半径为 3，求扇形的弧长和面积

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">求弧长</span>：
    $l = \frac{120 \times \pi \times 3}{180} = \frac{360\pi}{180} = 2\pi$

2. <span style="border-bottom: 1.5px dashed orange;">求面积（方法一：角度公式）</span>：
    $S = \frac{120 \times \pi \times 3^2}{360} = \frac{1}{3} \times 9\pi = 3\pi$

3. <span style="border-bottom: 1.5px dashed orange;">求面积（方法二：弧长公式）</span>：
    $S = \frac{1}{2} l R = \frac{1}{2} \times 2\pi \times 3 = 3\pi$
    *显然方法二更快！*

【例2】 弓形面积（割补法）

如图，在 $\odot O$ 中，半径 $OA=2$，$\angle AOB=90^\circ$，求弦 $AB$ 与弧 $AB$ 围成的弓形面积

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">分解</span>：$S_{\text{弓}} = S_{\text{扇形OAB}} - S_{\triangle OAB}$

2. <span style="border-bottom: 1.5px dashed orange;">算扇形</span>：
    $S_{\text{扇}} = \frac{90 \pi \times 2^2}{360} = \frac{1}{4} \times 4\pi = \pi$

3. <span style="border-bottom: 1.5px dashed orange;">算三角形</span>：
    Rt$\triangle OAB$ 中，$OA=OB=2$
    $S_{\triangle} = \frac{1}{2} \times OA \times OB = \frac{1}{2} \times 2 \times 2 = 2$

4. <span style="border-bottom: 1.5px dashed orange;">做差</span>：
    $S_{\text{弓}} = \pi - 2$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷中的“面积变换”与“几何计算代数化”思想*

（1）几何构造中的面积比

在复杂的几何构造中，面积计算往往不是直接套公式，而是利用<span style="border-bottom: 1.5px dashed orange;">相似比</span>或<span style="border-bottom: 1.5px dashed orange;">全等转化</span>

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q6</span>：如图，在 $\triangle ABC$ 中... 以 $A$ 为圆心作弧交 $BC$ 于点 $M, N$...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这是一道尺规作图背景下的计算题。虽然最终可能考查线段长，但在作图过程中隐含了扇形的存在。如果题目进阶一步询问“作图痕迹（弧线）扫过的扇形面积”，你需要立刻识别出圆心角 $\angle BAC$ 和半径 $AM$。此外，根据报告分析，此类题目常涉及<span style="border-bottom: 1.5px dashed orange;">面积比等于相似比的平方</span>这一核心结论，在处理与圆相关的相似图形面积时尤为重要

（2）动态轨迹覆盖的面积

当线段或图形运动时，扫过的面积通常需要通过积分思想（微元法）理解，但在初中阶段，我们将其转化为<span style="border-bottom: 1.5px dashed orange;">“大扇形 - 小扇形”</span>（环形）或<span style="border-bottom: 1.5px dashed orange;">“矩形 + 扇形”</span>（跑道形）

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q16</span>：涉及图形变换与阴影部分面积
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：对于此类阴影面积问题，素养测试卷倾向于考查<span style="border-bottom: 1.5px dashed orange;">几何变换的不变量</span> 。通常需要通过<span style="border-bottom: 1.5px dashed orange;">平移</span>或<span style="border-bottom: 1.5px dashed orange;">旋转</span>，将分散的阴影部分拼凑成一个完整的扇形或规则多边形。例如，将分散在三个角的小扇形通过旋转拼成一个半圆

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">公式混淆</span>：扇形面积公式中分母是 180 还是 360？
        
     *(答案：360。弧长公式分母是 180，因为约分了 $2\pi R$ 中的 2)*
    
    2. <span style="border-bottom: 1.5px dashed orange;">单位换算</span>：计算时 $\pi$ 要取 3.14 吗？
        
     *(答案：除非题目明确要求“精确到0.1”或“取$\pi \approx 3.14$”，否则保留 $\pi$ 即可，这样既准确又省事)*
    
    3. <span style="border-bottom: 1.5px dashed orange;">圆锥侧面</span>：一个圆锥母线长为 5，底面半径为 3，它的侧面展开图（扇形）的圆心角是多少？
        
     *(答案：利用“扇形弧长 = 底面周长”。$l = 2\pi \times 3 = 6\pi$。$6\pi = \frac{n \pi \times 5}{180} \Rightarrow n = 216^\circ$)*

***

## 三、图形的变化与相似

### （一）相似三角形的判定与性质

#### 1. 核心定义与判定

如果说全等三角形是“复印”，那么相似三角形就是“缩放”。它们形状相同，但大小不一定相同

（1）定义

对应角相等、对应边成比例的两个三角形叫做相似三角形

* <span style="border-bottom: 1.5px dashed orange;">相似比</span> ($k$)：对应边的比值
    
* 若 $k=1$，则两个三角形全等

* <span style="border-bottom: 1.5px dashed orange;">记法</span>：$\triangle ABC \sim \triangle DEF$
    
* <span style="border-bottom: 1.5px dashed orange;">注意</span>：字母顺序必须对应（点 $A$ 对点 $D$），否则比例式全错

（2）判定三招（简化版）

在证明题中，我们极少用定义去证，而是用判定定理：
1. <span style="border-bottom: 1.5px dashed orange;">两角判定（AA，最常用）</span>：
    如果有两个角分别相等，那么这两个三角形相似
    
* *应用*：只要有平行线（同位角/内错角相等）或公共角，优先想这一条
2. <span style="border-bottom: 1.5px dashed orange;">两边一角（SAS）</span>：
    如果两组对应边的比相等，并且相应的夹角相等，那么这两个三角形相似
    
* *注意*：必须是<span style="border-bottom: 1.5px dashed orange;">夹角</span>！如果是“两边及其中一边的对角”，则无法判定
3. <span style="border-bottom: 1.5px dashed orange;">三边判定（SSS）</span>：
    如果三组对应边的比相等，那么这两个三角形相似

---

#### 2. 深度解析：经典模型库

（1）“A”字型与“8”字型（X型）

这是相似中最基础的骨架

* <span style="border-bottom: 1.5px dashed orange;">A字型</span>：

    
* <span style="border-bottom: 1.5px dashed orange;">平行A字</span>：$DE \parallel BC \Rightarrow \triangle ADE \sim \triangle ABC$
    
* <span style="border-bottom: 1.5px dashed orange;">斜A字</span>（共角模型）：$\angle ADE = \angle C$（而非 $\angle B$）$\Rightarrow \triangle ADE \sim \triangle ACB$（注意对应点反了）

* <span style="border-bottom: 1.5px dashed orange;">8字型（X型）</span>：

    
* <span style="border-bottom: 1.5px dashed orange;">平行8字</span>：$AB \parallel CD \Rightarrow \triangle ABE \sim \triangle DCE$
    
* <span style="border-bottom: 1.5px dashed orange;">斜8字</span>（蝴蝶模型）：$\angle A = \angle D \Rightarrow \triangle ABE \sim \triangle DCE$

（2）母子相似（射影定理模型）

在直角三角形中作斜边上的高，会产生三个相似三角形

* <span style="border-bottom: 1.5px dashed orange;">模型</span>：Rt$\triangle ABC$ 中，$\angle ACB=90^\circ, CD \perp AB$

* <span style="border-bottom: 1.5px dashed orange;">结论</span>：$\triangle ADC \sim \triangle CDB \sim \triangle ACB$

* <span style="border-bottom: 1.5px dashed orange;">公式（射影定理）</span>：
    1. $CD^2 = AD \cdot BD$ （高是两段投影的比例中项）
    2. $AC^2 = AD \cdot AB$
    3. $BC^2 = BD \cdot AB$

---

#### 3. 典型例题

【例1】 判定与计算

如图，在 $\triangle ABC$ 中，$D$ 是 $AB$ 上一点，$\angle ACD = \angle B$。若 $AD=2, BD=3$，求 $AC$ 的长

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">找模型</span>：这是典型的“斜A字”共角模型

2. <span style="border-bottom: 1.5px dashed orange;">证相似</span>：
    $\because \angle A = \angle A$ （公共角）
    $\angle ACD = \angle B$ （已知）
    $\therefore \triangle ACD \sim \triangle ABC$

3. <span style="border-bottom: 1.5px dashed orange;">列比例</span>：
    $\frac{AC}{AB} = \frac{AD}{AC}$

4. <span style="border-bottom: 1.5px dashed orange;">算结果</span>：
    $AB = AD + BD = 2 + 3 = 5$
    $AC^2 = AD \cdot AB = 2 \times 5 = 10$
    $\therefore AC = \sqrt{10}$

【例2】 面积比的应用

两个相似三角形的相似比为 2:3，其中较小三角形的面积为 8，求较大三角形的面积

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">用性质</span>：<span style="border-bottom: 1.5px dashed orange;">相似三角形的面积比等于相似比的平方</span>

2. <span style="border-bottom: 1.5px dashed orange;">列方程</span>：
    设较大面积为 $S$
    $\frac{8}{S} = (\frac{2}{3})^2 = \frac{4}{9}$

3. <span style="border-bottom: 1.5px dashed orange;">解</span>：
    $4S = 72 \Rightarrow S = 18$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷中的“旋转相似”与“面积比”的高阶应用*

（1）面积比的平方效应

在复杂几何题中，直接求线段长可能很困难，但利用面积比倒推相似比往往有奇效

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q6</span>：在 $\triangle ABC$ 中... 作 $AE$ 交 $BC$ 于点 $F$... 若 $S_{\triangle ABF} : S_{\triangle AEC}$...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这道题的核心在于识别图形中的相似成分。如果涉及到面积比，第一时间反应出 $S_1 : S_2 = k^2$。反之，如果知道了面积比是 1:4，那么对应边长比就是 1:2。这在处理被分割的几何图形时是解题的突破口
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q18</span>：涉及折叠与面积为 20 的三角形
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：折叠往往产生全等或相似。当题目给出“剪两个大小一样的三角形”时，暗示了全等；而剩余部分与原图的关系往往涉及相似。利用面积关系列方程时，记得平方比的性质

（2）旋转相似（手拉手模型）

当两个相似三角形共用一个顶点，且旋转一定角度时，会形成“手拉手”模型，这是竞赛常客

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q14</span>：如图，在等腰 Rt$\triangle ABC$ 中，直角顶点与 $AB$ 中点 $D$ 重合，$\angle F = 30^\circ$... 延长 $DC$ 交 $EF$ 于点 $G$...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这是一道极具挑战性的<span style="border-bottom: 1.5px dashed orange;">旋转相似</span>题。虽然题目中有 $30^\circ$ 和 $90^\circ$ 等特殊角，但核心在于识别出 $\triangle ADE$ 与 $\triangle BDC$（或类似结构）在旋转过程中的关系。此类题目通常需要证明 $\triangle ADG \sim \triangle BDE$ 之类的隐含相似，或者利用旋转前后线段夹角不变来求解

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">陷阱辨析</span>：$\triangle ABC$ 和 $\triangle DEF$ 中，$\angle A = \angle D$，$\frac{AB}{DE} = \frac{BC}{EF}$，它们相似吗？
        
     *(答案：不一定。这是“两边及其中一边的对角”，不是SAS。除非角是直角或钝角，否则存在两种可能)*
    
    2. <span style="border-bottom: 1.5px dashed orange;">性质记忆</span>：若相似比 $k=3$，则周长比是多少？面积比是多少？
        
     *(答案：周长比是 3；面积比是 9)*
    3. <span style="border-bottom: 1.5px dashed orange;">模型识别</span>：如图，平行四边形 $ABCD$ 中，$E$ 是 $BC$ 延长线上一点，$AE$ 交 $CD$ 于 $F$，图中有几对相似三角形？
        
     *(答案：3对。$\triangle ADF \sim \triangle ECF$（8字型）；$\triangle ECF \sim \triangle EBA$（A字型）；$\triangle ADF \sim \triangle EBA$（传递性）)*

***

### （二）锐角三角函数

#### 1. 核心定义与特殊角

三角函数是初中数学中唯一将“角度”与“线段比值”联系起来的工具。它告诉我们：<span style="border-bottom: 1.5px dashed orange;">只要角确定，边长的比值就确定</span>，与三角形的大小无关

（1）定义（Rt△中的比值）

在 Rt△ABC 中，$\angle C = 90^\circ$，$\angle A$ 的对边为 $a$，邻边为 $b$，斜边为 $c$

1. <span style="border-bottom: 1.5px dashed orange;">正弦 (sin)</span>：$\sin A = \frac{\text{对边}}{\text{斜边}} = \frac{a}{c}$

2. <span style="border-bottom: 1.5px dashed orange;">余弦 (cos)</span>：$\cos A = \frac{\text{邻边}}{\text{斜边}} = \frac{b}{c}$

3. <span style="border-bottom: 1.5px dashed orange;">正切 (tan)</span>：$\tan A = \frac{\text{对边}}{\text{邻边}} = \frac{a}{b}$

（2）特殊角的三角函数值（背诵必修）

这是一张必须印在脑子里的表。考试时没时间推导

| $\alpha$      | $30^\circ$           | $45^\circ$           | $60^\circ$           |
| :------------ | :------------------- | :------------------- | :------------------- |
| $\sin \alpha$ | $\frac{1}{2}$        | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ |
| $\cos \alpha$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$        |
| $\tan \alpha$ | $\frac{\sqrt{3}}{3}$ | $1$                  | $\sqrt{3}$           |


* <span style="border-bottom: 1.5px dashed orange;">规律记忆</span>：
    
* $\sin$ 随角度增大而增大（分母都是2，分子是 $\sqrt{1}, \sqrt{2}, \sqrt{3}$）
    
* $\cos$ 随角度增大而减小（正好反过来）
    
* $\tan$ 随角度增大而增大（特立独行）

---

#### 2. 深度解析：关系与应用

（1）同角三角函数的关系

在同一个三角形中，同一个角的三个函数值不是独立的

1. <span style="border-bottom: 1.5px dashed orange;">平方关系</span>：$\sin^2 A + \cos^2 A = 1$
    
* *原理*：勾股定理 $a^2 + b^2 = c^2$ 两边同除以 $c^2$

2. <span style="border-bottom: 1.5px dashed orange;">商数关系</span>：$\tan A = \frac{\sin A}{\cos A}$

3. <span style="border-bottom: 1.5px dashed orange;">互余关系</span>：$\sin A = \cos(90^\circ - A)$
    
* *例子*：$\sin 30^\circ = \cos 60^\circ$

（2）坡度与坡角

在实际应用（如修路、筑坝）中，常用“坡度”来描述倾斜程度

* <span style="border-bottom: 1.5px dashed orange;">坡度 (Slope, $i$)</span>：垂直高度 $h$ 与水平宽度 $l$ 的比

    $$i = \frac{h}{l} = \tan \alpha$$


* <span style="border-bottom: 1.5px dashed orange;">坡角 ($\alpha$)</span>：坡面与水平面的夹角

---

#### 3. 典型例题

【例1】 基础计算

在 Rt△ABC 中，$\angle C = 90^\circ$，$AC=8$，$AB=10$。求 $\sin A, \cos B, \tan A$ 的值

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">勾股定理求第三边</span>：
    $BC = \sqrt{AB^2 - AC^2} = \sqrt{10^2 - 8^2} = 6$

2. <span style="border-bottom: 1.5px dashed orange;">套公式</span>：
    
* $\sin A = \frac{BC}{AB} = \frac{6}{10} = \frac{3}{5}$
    
* $\cos B = \frac{BC}{AB} = \frac{6}{10} = \frac{3}{5}$ （验证了互余关系）
    
* $\tan A = \frac{BC}{AC} = \frac{6}{8} = \frac{3}{4}$

【例2】 特殊角的混合运算

计算：$2\sin 30^\circ - \tan 45^\circ + \sqrt{(1-\tan 60^\circ)^2}$

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">代入数值</span>：
    原式 $= 2 \times \frac{1}{2} - 1 + |1 - \sqrt{3}|$

2. <span style="border-bottom: 1.5px dashed orange;">去绝对值</span>：
    $\because 1 < \sqrt{3}$，$\therefore 1 - \sqrt{3} < 0$
    $\therefore |1 - \sqrt{3}| = \sqrt{3} - 1$

3. <span style="border-bottom: 1.5px dashed orange;">合并</span>：
    原式 $= 1 - 1 + \sqrt{3} - 1 = \sqrt{3} - 1$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷中的“坡比”与“几何计算”思想*

（1）坡比的几何代数化

在几何综合题中，给出“坡比”往往是为了暗示直角三角形的三边比例，从而设未知数 $k$ 进行计算

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q4</span>：在 Rt△ABC 中... 斜坡 CD 的坡比为 3:1，若 CH=3...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：看到“坡比 3:1”，立刻反应出 $\tan \angle DCH = \frac{DH}{CH} = \frac{1}{3}$（注意坡比通常指垂直:水平，题目中若指 CD 的倾斜角需仔细审题，此处通常指 $\tan$ 值）。题目给出 $CH=3$，则 $DH=1$。这种“给比值=给线段长”的转化是解题关键

（2）非特殊角的处理（构造法）

如果遇到 $15^\circ, 75^\circ, 105^\circ$ 怎么办？

* <span style="border-bottom: 1.5px dashed orange;">策略</span>：不要硬算，要<span style="border-bottom: 1.5px dashed orange;">构造</span>

* <span style="border-bottom: 1.5px dashed orange;">模型</span>：在 $30^\circ$ 的直角三角形旁边补一个等腰三角形
    
* 例如：Rt△ABC 中 $\angle B=30^\circ$，延长 $CB$ 到 $D$ 使 $BD=AB$，连接 $AD$。则 $\angle D = 15^\circ$
    
* 这样可以将非特殊角转化为特殊角线段的和差计算

（3）直线斜率与正切

在平面直角坐标系中，直线 $y=kx+b$ 的<span style="border-bottom: 1.5px dashed orange;">斜率 $k$</span> 本质上就是倾斜角 $\alpha$ 的正切值

* <span style="border-bottom: 1.5px dashed orange;">结论</span>：$k = \tan \alpha$

* <span style="border-bottom: 1.5px dashed orange;">应用</span>：若直线 $y = \sqrt{3}x + 2$，则倾斜角为 $60^\circ$（因为 $\tan 60^\circ = \sqrt{3}$）

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">增减性</span>：$\sin 20^\circ$ 和 $\sin 40^\circ$ 哪个大？$\cos 20^\circ$ 和 $\cos 40^\circ$ 哪个大？
        
     *(答案：$\sin 40^\circ > \sin 20^\circ$；$\cos 20^\circ > \cos 40^\circ$。正弦增，余弦减)*
    
    2. <span style="border-bottom: 1.5px dashed orange;">范围陷阱</span>：$\tan \alpha$ 的值可以是 100 吗？$\sin \alpha$ 呢？
        
     *(答案：$\tan \alpha$ 可以是任意实数，所以 100 可以。$\sin \alpha$ 必须在 0 到 1 之间（锐角），所以不行)*
    
    3. <span style="border-bottom: 1.5px dashed orange;">逆运算</span>：已知 $\tan A = 1$，求 $\angle A$。已知 $2\cos A = 1$，求 $\angle A$
        
     *(答案：$\angle A = 45^\circ$；$\cos A = 0.5 \Rightarrow \angle A = 60^\circ$)*

***

### （三）几何变换与最值问题

#### 1. 核心定义与性质

几何变换是图形的“运动”。在初中阶段，我们主要研究<span style="border-bottom: 1.5px dashed orange;">全等变换</span>（刚体运动），即图形的形状和大小不发生改变，只改变位置

（1）三大基本变换

1. <span style="border-bottom: 1.5px dashed orange;">平移 (Translation)</span>：
    
* <span style="border-bottom: 1.5px dashed orange;">定义</span>：将图形沿某个方向移动一定的距离
    
* <span style="border-bottom: 1.5px dashed orange;">性质</span>：对应点连线平行（或共线）且相等
    
* <span style="border-bottom: 1.5px dashed orange;">应用</span>：将分散的条件（如两条不相邻的线段）“搬运”到一起，构成平行四边形或全等三角形

2. <span style="border-bottom: 1.5px dashed orange;">旋转 (Rotation)</span>：
    
* <span style="border-bottom: 1.5px dashed orange;">定义</span>：绕着一个定点转动一定角度
    
* <span style="border-bottom: 1.5px dashed orange;">性质</span>：对应点到旋转中心的距离相等；对应点与旋转中心连线的夹角等于旋转角
    
* <span style="border-bottom: 1.5px dashed orange;">模型</span>：“手拉手”模型（共顶点的等腰/等边三角形）

3. <span style="border-bottom: 1.5px dashed orange;">轴对称 (Reflection)</span>：
    
* <span style="border-bottom: 1.5px dashed orange;">定义</span>：沿着一条直线折叠重合
    
* <span style="border-bottom: 1.5px dashed orange;">性质</span>：对应点连线被对称轴垂直平分
    
* <span style="border-bottom: 1.5px dashed orange;">应用</span>：解决“距离之和最小”问题的核心工具

---

#### 2. 经典模型：将军饮马

这是解决“线段和最小”问题的万能钥匙。核心思想是<span style="border-bottom: 1.5px dashed orange;">化折为直</span>——利用两点之间线段最短

（1）基础模型（定直线+两定点）


* <span style="border-bottom: 1.5px dashed orange;">问题</span>：在直线 $l$ 上找一点 $P$，使 $PA+PB$ 最小

* <span style="border-bottom: 1.5px dashed orange;">策略</span>：
    1. 作点 $A$ 关于直线 $l$ 的对称点 $A'$
    2. 连接 $A'B$ 交直线 $l$ 于点 $P$
    3. 此时 $PA+PB = A'P+PB = A'B$（最小值）

* <span style="border-bottom: 1.5px dashed orange;">原理</span>：两点之间，线段最短

（2）进阶模型（平移+造桥）


* <span style="border-bottom: 1.5px dashed orange;">问题</span>：如图，要在河岸 $l_1, l_2$ 之间架一座桥 $MN$（$MN \perp l$，长度固定为 $d$），从 $A$ 到 $B$ 的路径 $A \to M \to N \to B$ 最短

* <span style="border-bottom: 1.5px dashed orange;">策略</span>：
    1. 既然桥长 $MN$ 固定，我们先忽略它
    2. 将点 $A$ 向下平移距离 $d$ 到达 $A'$（相当于把河岸抽干，两岸合拢）
    3. 连接 $A'B$，与岸边的交点即为桥的位置
    4. 最短路径 $= AB' + d$

---

#### 3. 典型例题

【例1】 将军饮马基础应用

在平面直角坐标系中，点 $A(1, 2)$，点 $B(3, 1)$。在 $x$ 轴上找一点 $P$，使 $PA+PB$ 最小

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">作对称</span>：作点 $A$ 关于 $x$ 轴的对称点 $A'(1, -2)$

2. <span style="border-bottom: 1.5px dashed orange;">连直线</span>：连接 $A'B$

3. <span style="border-bottom: 1.5px dashed orange;">算距离</span>：
    $A'B = \sqrt{(3-1)^2 + (1-(-2))^2} = \sqrt{2^2 + 3^2} = \sqrt{13}$
    $\therefore$ 最小值为 $\sqrt{13}$

【例2】 旋转构造全等

如图，点 $P$ 是等边 $\triangle ABC$ 内一点，若 $PA=3, PB=4, PC=5$，求 $\angle APB$ 的度数

<span style="border-bottom: 1.5px dashed orange;">解析</span>：
这是著名的<span style="border-bottom: 1.5px dashed orange;">费马点</span>相关问题，需要通过旋转构造

1. <span style="border-bottom: 1.5px dashed orange;">旋转</span>：将 $\triangle ABP$ 绕点 $B$ 逆时针旋转 $60^\circ$ 得到 $\triangle CBP'$

2. <span style="border-bottom: 1.5px dashed orange;">构造</span>：
    
* 连接 $PP'$。$\triangle BPP'$ 是等边三角形（$BP=BP'=4, \angle PBP'=60^\circ$）
    
* $\therefore PP' = 4$

3. <span style="border-bottom: 1.5px dashed orange;">勾股逆定理</span>：
    在 $\triangle PCP'$ 中，三边为 $3, 4, 5$（$P'C=AP=3, PP'=4, PC=5$）
    $\therefore \triangle PCP'$ 是直角三角形，$\angle PP'C = 90^\circ$

4. <span style="border-bottom: 1.5px dashed orange;">求角</span>：
    $\angle APB = \angle CP'B = \angle CP'P + \angle PP'B = 90^\circ + 60^\circ = 150^\circ$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷，重点讲解“多动点”与“变换组合”的高阶应用*

（1）平移中的最值（从静态到动态）

当题目中涉及两个动点，且这两个动点之间的相对位置固定（如定长线段移动）时，利用平移将其中一个动点转化为定点

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q20</span>：在等边 $\triangle ABC$ 中... 当等边 $\triangle ABC$ 向左平移 1 个单位长度后，点 $D, E, F$ 的对应点分别为 $G, H, M$。求 $DH+DM$ 的最小值
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这道题是<span style="border-bottom: 1.5px dashed orange;">将军饮马</span>与<span style="border-bottom: 1.5px dashed orange;">平移</span>的结合
         >  <span style="border-bottom: 1.5px dashed orange;">难点</span>：点 $D$ 和点 $M$ 分别属于两个不同的三角形（一个是原图，一个是平移后的图）
         > <span style="border-bottom: 1.5px dashed orange;">破局</span>：利用平移向量。将线段 $DM$ 中的点 $M$ 反向平移回原三角形，或者将 $D$ 平移到新三角形中。本质上，就是利用平移将“异面”的线段转化到同一个平面几何模型中，最终转化为“点 $D'$ 到点 $M$ 的距离最小”，即线段长

（2）旋转中的相似与全等

旋转变换常用于解决“共顶点”问题

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q14</span>：在等腰 Rt$\triangle ABC$ 中，直角顶点与 $AB$ 边的中点 $D$ 重合，$\angle F=30^\circ$，延长 $DC$ 交 $EF$ 于点 $G$...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：此题虽然没有直接问最值，但涉及了复杂的图形重叠。核心在于识别<span style="border-bottom: 1.5px dashed orange;">旋转中心</span>（通常是共用顶点）。解题时，尝试将图形绕中心旋转，看哪些线段重合，哪些角相等。这种“手拉手”模型（两个相似三角形共顶点旋转）在竞赛中经常用于证明三点共线或求线段比例

（3）坐标系中的折叠（轴对称）

在代数背景下考查几何变换，通常涉及点的坐标关于直线 $y=kx+b$ 的对称

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q18</span>：在梯形纸片 $ABCD$ 中... 分别沿 $AE, DE$ 方向剪两个大小一样的三角形纸片...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：剪纸问题本质是<span style="border-bottom: 1.5px dashed orange;">轴对称</span>。题目中“大小一样”暗示全等。通过折叠（轴对称），可以将不规则的剩余部分转化为规则图形，或者利用对称性找到线段的数量关系

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">作图思考</span>：如何在三角形内找一点，使它到三个顶点的距离之和最小？（费马点）
        
     *(提示：利用【例2】的旋转法，将距离和转化为一条折线，拉直即为最短)*
    
    2. <span style="border-bottom: 1.5px dashed orange;">模型辨析</span>：将军饮马问题中，如果点 $A, B$ 在直线 $l$ 的异侧，还需要作对称吗？
        
    *(答案：不需要。直接连接 $AB$ 即可。作对称是为了把同侧的点“变”到异侧去)*
    
    3. <span style="border-bottom: 1.5px dashed orange;">变换性质</span>：将点 $A(2, 3)$ 向左平移 1 个单位，再关于 $x$ 轴对称，最终坐标是多少？
        
     *(答案：平移后 $(1, 3)$，对称后 $(1, -3)$)*

***
