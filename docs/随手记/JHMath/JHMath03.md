# 函数篇

<div id="progress-container">
  <div id="progress-bar"></div>
</div>



## 一、一次函数与反比例函数

### （一）k, b 的几何意义与图象性质

#### 1. 核心定义与图象特征

一次函数是描述“匀速变化”最简单的数学模型。它的图象是一条直线，正如我们在物理中学的“匀速直线运动”

（1）定义

形如 $y = kx + b$ ($k, b$ 为常数，<span style="border-bottom: 1.5px dashed orange;">$k \neq 0$</span>) 的函数叫做一次函数
* 当 $b=0$ 时，$y=kx$ 叫<span style="border-bottom: 1.5px dashed orange;">正比例函数</span>（图象必过原点）

（2）k与b的“遥控器”功能

* <span style="border-bottom: 1.5px dashed orange;">k (斜率 Slope)</span>：决定直线的<span style="border-bottom: 1.5px dashed orange;">倾斜程度</span>和<span style="border-bottom: 1.5px dashed orange;">升降趋势</span>
    * $k > 0$：$y$ 随 $x$ 增大而增大（图象从左下到右上，<span style="border-bottom: 1.5px dashed orange;">上坡</span>）
    * $k < 0$：$y$ 随 $x$ 增大而减小（图象从左上到右下，<span style="border-bottom: 1.5px dashed orange;">下坡</span>）
    * $|k|$ 越大：直线越陡峭
* <span style="border-bottom: 1.5px dashed orange;">b (截距 Intercept)</span>：决定直线与 <span style="border-bottom: 1.5px dashed orange;">y轴</span> 的交点位置
    * $b > 0$：交于 y 轴正半轴（$(0, b)$ 在原点上方）
    * $b = 0$：经过原点
    * $b < 0$：交于 y 轴负半轴（$(0, b)$ 在原点下方）

---

#### 2. 深度解析：几何意义的量化

（1）坐标轴围成的面积

直线 $y = kx + b$ 与两坐标轴围成的三角形面积是必考点

* <span style="border-bottom: 1.5px dashed orange;">y轴交点</span>：$A(0, b)$，距离原点 $|b|$
* <span style="border-bottom: 1.5px dashed orange;">x轴交点</span>：令 $y=0$，解得 $x = -\frac{b}{k}$，点 $B(-\frac{b}{k}, 0)$，距离原点 $|\frac{b}{k}|$
* <span style="border-bottom: 1.5px dashed orange;">面积公式</span>：

$$S = \frac{1}{2} \times |OA| \times |OB| = \frac{1}{2} |b| \cdot |\frac{b}{k}| = \frac{b^2}{2|k|}$$

（2）图象的平移规律

函数图象的平移本质是点的坐标变换

* <span style="border-bottom: 1.5px dashed orange;">口诀</span>：“上加下减（常数项），左加右减（自变量）”
* <span style="border-bottom: 1.5px dashed orange;">操作</span>：
    * 将 $y = kx$ 向上平移 $b$ 个单位 $\rightarrow y = kx + b$
    * 将 $y = kx$ 向右平移 $m$ 个单位 $\rightarrow y = k(x-m)$（注意是对 $x$ 进行操作，要把 $k$ 提出来）

---

#### 3. 典型例题

【例1】 读图与计算

已知一次函数 $y = -2x + 4$
(1) 判断图象经过哪些象限？
(2) 求图象与坐标轴围成的三角形面积

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">判象限</span>：
    $\because k = -2 < 0$，图象是“下坡”趋势（经过二、四象限趋势）
    $\because b = 4 > 0$，与 y 轴交于正半轴（经过第一、二象限）
    $\therefore$ 图象经过第一、二、四象限

2. <span style="border-bottom: 1.5px dashed orange;">求面积</span>：
    令 $x=0, y=4 \Rightarrow$ y轴交点 $(0, 4)$
    令 $y=0, -2x+4=0 \Rightarrow x=2 \Rightarrow$ x轴交点 $(2, 0)$
    $S = \frac{1}{2} \times 4 \times 2 = 4$

【例2】 增减性与大小比较

已知点 $A(x_1, y_1)$ 和 $B(x_2, y_2)$ 都在直线 $y = -\frac{1}{3}x + 2$ 上，且 $x_1 < x_2$，试比较 $y_1$ 与 $y_2$ 的大小

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">看 k 值</span>：$k = -\frac{1}{3} < 0$

2. <span style="border-bottom: 1.5px dashed orange;">定性质</span>：函数值 $y$ 随 $x$ 的增大而<span style="border-bottom: 1.5px dashed orange;">减小</span>

3. <span style="border-bottom: 1.5px dashed orange;">下结论</span>：
    $\because x_1 < x_2$
    $\therefore y_1 > y_2$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷，探讨含参直线中的“定点”与“整点”问题*

（1）含参直线的“定点” (Fixed Point)

当直线的解析式中含有参数 $k$ 时，它往往不是一条固定的线，而是一簇绕着某点旋转的线

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q21</span>：涉及直线 $y = \frac{kx + 2k - 4}{k - 1}$ 经过定点 $P$
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这是高中“直线系”方程的下放  
         > <span style="border-bottom: 1.5px dashed orange;">去分母</span>：$y(k-1) = kx + 2k - 4$  
         > <span style="border-bottom: 1.5px dashed orange;">分离参数 k</span>：$ky - y = kx + 2k - 4 \Rightarrow k(y - x - 2) - (y - 4) = 0$  
         > <span style="border-bottom: 1.5px dashed orange;">令系数为0</span>：要使等式对任意 $k$ 成立，必须 $\begin{cases} y - x - 2 = 0 \\ y - 4 = 0   \end{cases}$
         > <span style="border-bottom: 1.5px dashed orange;">解得</span>：$y=4, x=2$。所以直线恒过定点 $(2, 4)$。这种“分离参数法”是解决动态直线问题的核心技巧

（2）直线上的整点与象限分布

通过函数值的符号来判断点的位置，是代数与几何结合的考点

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q5</span>：已知 $I(x_1, y_1), (x_2, y_2)$ 为一次函数 $y=x-2$ 上的点... 判断 $x_1 x_2 > 0$ 时...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这道题考查对图象分布的细腻理解。$y=x-2$ 过 $(2,0)$ 和 $(0,-2)$。$x_1 x_2 > 0$ 意味着两点横坐标同号（同正或同负）  
         > 若都为负，则两点都在第三象限，$y$ 都为负  
         > 若都为正，可能在第一象限（$x>2$）或第四象限（$0<x<2$）。需要结合 $y$ 的表达式进行严密的分类讨论  
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q7</span>：将长方形钢架 $ABCD$ 按如图放置... 点 $C$ 在直线 $y=mx+n$ 上...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这是一道典型的“代数几何综合”。直线的参数 $m, n$ 不再是抽象数字，而是受到几何图形（钢架总长为16，即周长约束）限制的变量。解题时需将 $C$ 点坐标设出，代入直线方程，利用周长公式建立方程组求解

---

!!! question "自学自测"

    1. <span style="border-bottom: 1.5px dashed orange;">平移陷阱</span>：将直线 $y=2x$ 向右平移 3 个单位，解析式是 $y=2x-3$ 还是 $y=2(x-3)$？
        *（答案：$y=2(x-3) = 2x-6$。“左加右减”是针对 $x$ 本身的）*
    2. <span style="border-bottom: 1.5px dashed orange;">符号判断</span>：若直线 $y=kx+b$ 经过一、二、四象限，则 $k, b$ 的符号是？
        *（答案：经过二、四 $\Rightarrow k<0$；经过一、二 $\Rightarrow$ 交 y 轴正半轴 $\Rightarrow b>0$）*
    3. <span style="border-bottom: 1.5px dashed orange;">面积计算</span>：直线 $y=x-1$ 与坐标轴围成的面积是多少？
        *（答案：$0.5$。交点 $(1,0)$ 和 $(0,-1)$，距离都是 1）*

***

### （二）反比例函数 k 的几何意义

#### 1. 核心定义与图象特征

反比例函数是初中阶段唯一一个“非线性”的函数模型（直到二次函数出现前），它的图象是由两支曲线组成的<span style="border-bottom: 1.5px dashed orange;">双曲线</span>

（1）定义

形如 $y = \frac{k}{x}$ ($k$ 为常数，<span style="border-bottom: 1.5px dashed orange;">$k \neq 0$</span>) 的函数叫做反比例函数
* <span style="border-bottom: 1.5px dashed orange;">变式</span>：$xy = k$ 或 $y = kx^{-1}$
* <span style="border-bottom: 1.5px dashed orange;">定义域</span>：$x \neq 0$（分母不能为0），所以图象永远不会与坐标轴相交

（2）图象分布（象限法则）

* <span style="border-bottom: 1.5px dashed orange;">$k > 0$</span>：图象位于<span style="border-bottom: 1.5px dashed orange;">第一、三象限</span>。在每个象限内，$y$ 随 $x$ 的增大而<span style="border-bottom: 1.5px dashed orange;">减小</span>
* <span style="border-bottom: 1.5px dashed orange;">$k < 0$</span>：图象位于<span style="border-bottom: 1.5px dashed orange;">第二、四象限</span>。在每个象限内，$y$ 随 $x$ 的增大而<span style="border-bottom: 1.5px dashed orange;">增大</span>
* <span style="border-bottom: 1.5px dashed orange;">对称性</span>：图象关于原点 $(0,0)$ 中心对称，也关于直线 $y=x$ 和 $y=-x$ 轴对称

---

#### 2. 深度解析：k 的几何灵魂（面积不变性）

反比例函数的核心不在于计算，而在于<span style="border-bottom: 1.5px dashed orange;">积</span>为定值。这一性质在几何上直接对应“矩形面积”

（1）矩形面积模型

设 $P(x, y)$ 是反比例函数 $y = \frac{k}{x}$ 图象上任意一点
* 过点 $P$ 分别作 x轴、y轴的垂线，垂足为 $A, B$
* <span style="border-bottom: 1.5px dashed orange;">结论</span>：矩形 $PAOB$ 的面积为定值 <span style="border-bottom: 1.5px dashed orange;">$|k|$</span>

$$S_{\text{矩形}} = |x| \cdot |y| = |xy| = |k|$$

（2）三角形面积模型

连接 $PO$
* <span style="border-bottom: 1.5px dashed orange;">结论</span>：$\triangle PAO$ 或 $\triangle PBO$ 的面积为定值 <span style="border-bottom: 1.5px dashed orange;">$\frac{1}{2}|k|$</span>

$$S_{\triangle} = \frac{1}{2} \cdot |x| \cdot |y| = \frac{1}{2}|k|$$

!!! note "直观理解"
    无论点 $P$ 在双曲线上怎么滑动，以此点为顶点的矩形面积永远锁死为 $|k|$。这是反比例函数最核心的“不变量”

---

#### 3. 典型例题

【例1】 基础求值

已知反比例函数 $y = \frac{k}{x}$ 的图象经过点 $A(-2, 3)$
(1) 求这个函数的解析式
(2) 若点 $B(1, m)$ 也在图象上，求 $m$ 的值

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">求 k</span>：
    $\because$ 图象过点 $A(-2, 3)$
    $\therefore k = x \cdot y = -2 \times 3 = -6$
    解析式为 $y = -\frac{6}{x}$

2. <span style="border-bottom: 1.5px dashed orange;">求 m</span>：
    $\because B(1, m)$ 在图象上
    $\therefore 1 \cdot m = -6 \Rightarrow m = -6$

【例2】 几何意义的应用

如图，点 $A$ 是反比例函数 $y = \frac{4}{x}$ ($x>0$) 图象上一点，过点 $A$ 作 $AB \perp x$ 轴于点 $B$，连接 $OA$。求 $\triangle OAB$ 的面积

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">识别模型</span>：这是标准的“反比例函数三角形面积”模型

2. <span style="border-bottom: 1.5px dashed orange;">套公式</span>：
    $S_{\triangle OAB} = \frac{1}{2} |k|$

3. <span style="border-bottom: 1.5px dashed orange;">计算</span>：
    $\because k = 4$
    $\therefore S = \frac{1}{2} \times 4 = 2$

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷中“面积变换”与“函数交点”的思想*

（1）“双反”模型与面积差

当一个图中出现两个反比例函数 $y = \frac{k_1}{x}$ 和 $y = \frac{k_2}{x}$ 时，利用面积的不变性可以解决复杂的几何比值问题

* <span style="border-bottom: 1.5px dashed orange;">结论</span>：若点 $A$ 在 $y = \frac{k_1}{x}$ 上，点 $B$ 在 $y = \frac{k_2}{x}$ 上，且 $A, B$ 横坐标相同（或纵坐标相同），则它们构成的图形面积往往与 $|k_1 - k_2|$ 有关

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q21</span>：涉及直线与坐标轴围成的面积及动点问题
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：虽然此题考察一次函数，但其核心思想——<span style="border-bottom: 1.5px dashed orange;">动点运动但面积受约束</span>与反比例函数的 $k$ 值几何意义如出一辙。在处理此类问题时，如果遇到“乘积形式”的变量关系（如 $xy=定值$），即使题目未明确给出反比例函数解析式，也要敏锐地意识到点在双曲线上运动，从而利用反比例函数的性质来辅助定性分析

（2）一次函数与反比例函数的“联立”

当直线 $y = ax + b$ 与双曲线 $y = \frac{k}{x}$ 相交时，交点通常成对出现

* <span style="border-bottom: 1.5px dashed orange;">对称性</span>：若直线经过原点（即正比例函数 $y=ax$），则两个交点 $A(x_1, y_1)$ 和 $B(x_2, y_2)$ 关于原点中心对称
    * 推论：$x_1 = -x_2, y_1 = -y_2$
* <span style="border-bottom: 1.5px dashed orange;">不等式解集</span>：通过观察图象的上下位置关系，直接写出不等式 $ax+b > \frac{k}{x}$ 的解集，而不需要代数硬解

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q13</span>：在平面直角坐标系 $xOy$ 中，点 $B$ 的坐标为 $(8, 6)$，过点 $B$ 分别作 x轴、y轴的垂线... 点 $P$ 在直线 $l$ 上...
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：此题虽然是垂线与坐标几何，但若将 $B$ 点视为反比例函数 $y=\frac{48}{x}$ 上的一点，其围成的矩形面积即为 48。竞赛题常考“过双曲线上一点作切线”或“与直线围成面积”，其本质都是对 $|k|$ 的几何分割与重组

---

!!! question "自学自测"

    1. <span style="border-bottom: 1.5px dashed orange;">增减性陷阱</span>：反比例函数 $y = -\frac{2}{x}$，当 $x_1 < x_2$ 时，一定有 $y_1 < y_2$ 吗？
        *（答案：不一定。必须强调“在同一象限内”。如果一个在第二象限（正），一个在第四象限（负），结论就反了）*
    2. <span style="border-bottom: 1.5px dashed orange;">面积无关性</span>：在 $y = \frac{6}{x}$ 图象上任取一点作矩形，周长是定值吗？面积是定值吗？
        *（答案：面积是定值（6）；周长不是定值（$2(x+\frac{6}{x})$ 随 $x$ 变化）*
    3. <span style="border-bottom: 1.5px dashed orange;">象限判断</span>：若 $A(1, y_1), B(-2, y_2)$ 在 $y = \frac{k}{x}$ ($k<0$) 上，谁大？
        *（答案：$k<0$ 图象在二、四。$A$ 在第四象限（负），$B$ 在第二象限（正）。所以 $y_2 > y_1$）*

***

## 二、二次函数

### （一）二次函数的图象与性质

#### 1. 核心定义与图象特征

二次函数是初中数学函数学习的“天花板”，它描述了生活中常见的抛物线运动（如投篮、喷泉）。其图象具有完美的对称性

（1）定义

形如 $y = ax^2 + bx + c$ （$a, b, c$ 为常数，<span style="border-bottom: 1.5px dashed orange;">$a \neq 0$</span>）的函数叫做二次函数

* <span style="border-bottom: 1.5px dashed orange;">图象</span>：抛物线（Parabola）
* <span style="border-bottom: 1.5px dashed orange;">三要素</span>：开口方向、对称轴、顶点

（2）系数的“遥控”法则

1. <span style="border-bottom: 1.5px dashed orange;">$a$（开口与胖瘦）</span>：
    * $a > 0$：开口<span style="border-bottom: 1.5px dashed orange;">向上</span>，有最<span style="border-bottom: 1.5px dashed orange;">小</span>值（低谷）
    * $a < 0$：开口<span style="border-bottom: 1.5px dashed orange;">向下</span>，有最<span style="border-bottom: 1.5px dashed orange;">大</span>值（山峰）
    * $|a|$ 越大，开口越小（越陡峭）

2. <span style="border-bottom: 1.5px dashed orange;">$b$（配合 $a$ 控制对称轴）</span>：
    * 对称轴公式：$x = -\frac{b}{2a}$
    * <span style="border-bottom: 1.5px dashed orange;">口诀</span>：“左同右异”
        * 若 $a, b$ 同号，对称轴在 $y$ 轴左侧
        * 若 $a, b$ 异号，对称轴在 $y$ 轴右侧
        * 若 $b = 0$，对称轴就是 $y$ 轴

3. <span style="border-bottom: 1.5px dashed orange;">$c$（$y$ 轴交点）</span>：
    * 图象与 $y$ 轴交于点 $(0, c)$

---

#### 2. 深度解析：顶点的秘密

（1）顶点坐标公式

虽然配方法可以推导，但考场上建议直接背诵公式：

* <span style="border-bottom: 1.5px dashed orange;">顶点坐标</span>：$\left(-\frac{b}{2a}, \frac{4ac - b^2}{4a}\right)$
* <span style="border-bottom: 1.5px dashed orange;">最值</span>：当 $x = -\frac{b}{2a}$ 时，$y_{\text{最值}} = \frac{4ac - b^2}{4a}$

（2）增减性的分界线

对称轴 $x = -\frac{b}{2a}$ 是增减性的分水岭

* 以 $a > 0$（开口向上）为例：
    * 在对称轴<span style="border-bottom: 1.5px dashed orange;">左侧</span>，$y$ 随 $x$ 增大而<span style="border-bottom: 1.5px dashed orange;">减小</span>（下坡）
    * 在对称轴<span style="border-bottom: 1.5px dashed orange;">右侧</span>，$y$ 随 $x$ 增大而<span style="border-bottom: 1.5px dashed orange;">增大</span>（上坡）

---

#### 3. 典型例题

【例1】 识图与性质

已知二次函数 $y = -x^2 + 2x + 3$
(1) 求其图象的开口方向、对称轴和顶点坐标
(2) 当 $x$ 取何值时，$y$ 随 $x$ 的增大而增大？

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">基本属性</span>：
    * $a = -1 < 0$，<span style="border-bottom: 1.5px dashed orange;">开口向下</span>
    * 对称轴：$x = -\frac{2}{2 \times (-1)} = 1$
    * 顶点：把 $x=1$ 代入解析式，$y = -1 + 2 + 3 = 4$。顶点为 $(1, 4)$

2. <span style="border-bottom: 1.5px dashed orange;">增减性</span>：
    因为开口向下，对称轴左侧是“上坡”
    $\therefore$ 当 $x < 1$ 时，$y$ 随 $x$ 的增大而增大

【例2】 系数符号判断

如图，抛物线 $y = ax^2 + bx + c$ 开口向上，对称轴在 $y$ 轴右侧，且经过原点。判断 $a, b, c$ 的符号

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">$a$</span>：开口向上 $\Rightarrow a > 0$

2. <span style="border-bottom: 1.5px dashed orange;">$c$</span>：经过原点 $(0,0) \Rightarrow c = 0$

3. <span style="border-bottom: 1.5px dashed orange;">$b$</span>：对称轴在右侧（$x > 0$），即 $-\frac{b}{2a} > 0$。因为 $a > 0$，所以 $-b > 0 \Rightarrow b < 0$（验证“左同右异”）

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷，重点讲解“二次模型最值”与“特殊点求值”*

（1）实际问题中的“最值模型”

这是中考压轴题的常客。将几何图形（如围栏面积、利润问题）转化为二次函数，利用顶点求最大/最小值

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q17</span>：老李想用长为 68m 的栅栏，借助房屋外墙围成一个长方形羊圈... 求面积最大值（思维拓展）
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这是一道经典的<span style="border-bottom: 1.5px dashed orange;">建模题</span>  
         > 设垂直墙的边长为 $x$，则平行墙的边长为 $70-2x$（考虑到门宽）  
         > 面积模型：$S = x(70-2x) = -2x^2 + 70x$  
         > 这是一个开口向下的二次函数。求最大值即求顶点坐标：$x = -\frac{70}{2(-2)} = 17.5$ 时，面积最大。解题关键在于<span style="border-bottom: 1.5px dashed orange;">建立函数关系式</span>并利用<span style="border-bottom: 1.5px dashed orange;">配方法或公式</span>求极值

（2）动点问题的函数图象

当几何图形中的点运动时，生成的面积或线段长往往是分段函数，其中可能包含二次函数片段

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届/九届复赛 Q20</span>：涉及矩形中动点 $P$ 沿边运动，生成的 $y=PA-PE$ 或面积图象
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：此类题目考查<span style="border-bottom: 1.5px dashed orange;">读图能力</span>。图象的拐点（转折点）通常对应几何图形的特殊位置（如顶点、垂足）。如果图象是曲线，通常意味着函数关系是二次的（例如面积 $S = \frac{1}{2} \cdot \text{底} \cdot \text{高}$，底和高都含 $x$）；如果图象是直线，则是一次函数

（3）特殊赋值法

在判断 $2a+b$ 或 $a+b+c$ 的符号时，不要死算系数，要学会“代数”
* 令 $x=1$，得 $y = a+b+c$。看图象在 $x=1$ 时的点是在 $x$ 轴上方还是下方
* 令 $x=-1$，得 $y = a-b+c$

---

!!! question "自学自测"

    1. <span style="border-bottom: 1.5px dashed orange;">最值判断</span>：函数 $y = 2(x-3)^2 + 5$ 的最小值是多少？
        *(答案：$a=2>0$，开口向上有最小值。当 $x=3$ 时，最小值是 $y=5$)*
    2. <span style="border-bottom: 1.5px dashed orange;">增减性</span>：对于 $y = -x^2$，当 $x = -2$ 到 $x = -1$ 变化时，$y$ 是增大还是减小？
        *(答案：对称轴是 $y$ 轴 ($x=0$)，开口向下。在左侧 ($x<0$) 是增函数，所以 $y$ 增大)*
    3. <span style="border-bottom: 1.5px dashed orange;">对称性</span>：若抛物线经过 $(1, 5)$ 和 $(3, 5)$，对称轴是哪条直线？
        *(答案：两点纵坐标相同，关于对称轴对称。对称轴 $x = \frac{1+3}{2} = 2$)*

***

### （二）二次函数表达式的求法

#### 1. 核心方法：待定系数法的三副面孔

求二次函数表达式（解析式），本质上就是求出 $a, b, c$ 等未知系数。为了避免陷入繁琐的方程组计算，我们必须根据题目给出的条件，灵活选择以下三种形式中的一种

（1）一般式

* <span style="border-bottom: 1.5px dashed orange;">公式</span>：$y = ax^2 + bx + c$ ($a \neq 0$)
* <span style="border-bottom: 1.5px dashed orange;">适用场景</span>：已知图象上<span style="border-bottom: 1.5px dashed orange;">任意三个点</span>的坐标
* <span style="border-bottom: 1.5px dashed orange;">策略</span>：将三个点的坐标代入，解三元一次方程组（计算量最大，非必要不推荐）

（2）顶点式（核心推荐）

* <span style="border-bottom: 1.5px dashed orange;">公式</span>：$y = a(x - h)^2 + k$
* <span style="border-bottom: 1.5px dashed orange;">适用场景</span>：已知<span style="border-bottom: 1.5px dashed orange;">顶点坐标</span> $(h, k)$ 或<span style="border-bottom: 1.5px dashed orange;">对称轴</span> $x=h$、<span style="border-bottom: 1.5px dashed orange;">最值</span> $y=k$
* <span style="border-bottom: 1.5px dashed orange;">策略</span>：直接代入 $h, k$，只剩下一个未知数 $a$，再找任意一个点代入求 $a$ 即可

（3）交点式（两根式）

* <span style="border-bottom: 1.5px dashed orange;">公式</span>：$y = a(x - x_1)(x - x_2)$
* <span style="border-bottom: 1.5px dashed orange;">适用场景</span>：已知图象与 <span style="border-bottom: 1.5px dashed orange;">x轴</span> 的两个交点坐标 $(x_1, 0)$ 和 $(x_2, 0)$
* <span style="border-bottom: 1.5px dashed orange;">策略</span>：代入 $x_1, x_2$，再找任意一个点代入求 $a$
* <span style="border-bottom: 1.5px dashed orange;">注</span>：这是韦达定理在函数中的变体，计算效率极高

---

#### 2. 深度解析：如何选择最优解法？

在考场上，<span style="border-bottom: 1.5px dashed orange;">选对公式</span>比“算得快”更重要

* <span style="border-bottom: 1.5px dashed orange;">看到“顶点”、“最高点”、“最低点”、“对称轴”</span> $\rightarrow$ <span style="border-bottom: 1.5px dashed orange;">秒选顶点式</span>
    * 比如：抛物线顶点是 $(1, 3)$，设 $y = a(x-1)^2 + 3$
* <span style="border-bottom: 1.5px dashed orange;">看到“与x轴交于...”</span> $\rightarrow$ <span style="border-bottom: 1.5px dashed orange;">秒选交点式</span>
    * 比如：经过 $(1, 0)$ 和 $(3, 0)$，设 $y = a(x-1)(x-3)$
* <span style="border-bottom: 1.5px dashed orange;">什么特殊特征都没有，只给三个普通点</span> $\rightarrow$ <span style="border-bottom: 1.5px dashed orange;">含泪选一般式</span>

---

#### 3. 典型例题

【例1】 已知顶点求解析式

已知抛物线的顶点坐标为 $(1, -4)$，且经过点 $(2, -3)$。求该二次函数的表达式

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">设</span>：因为知道顶点，设顶点式 $y = a(x-1)^2 - 4$

2. <span style="border-bottom: 1.5px dashed orange;">代</span>：将点 $(2, -3)$ 代入
    $-3 = a(2-1)^2 - 4$
    $-3 = a - 4$
    $a = 1$

3. <span style="border-bottom: 1.5px dashed orange;">答</span>：表达式为 $y = (x-1)^2 - 4$（即 $y = x^2 - 2x - 3$）

【例2】 几何建模求表达式

用长为 12米的铝合金条制成一个矩形窗框，求窗框面积 $S$ 与宽度 $x$ 之间的函数关系式

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">找关系</span>：周长 $= 2(\text{长} + \text{宽}) = 12 \Rightarrow \text{长} + \text{宽} = 6$

2. <span style="border-bottom: 1.5px dashed orange;">表述长</span>：$\text{长} = 6 - x$

3. <span style="border-bottom: 1.5px dashed orange;">列式</span>：
    $S = \text{长} \times \text{宽} = x(6-x) = -x^2 + 6x$

4. <span style="border-bottom: 1.5px dashed orange;">确定范围</span>：边长必须为正，即 $x>0$ 且 $6-x>0$，得 $0 < x < 6$
    <span style="border-bottom: 1.5px dashed orange;">答</span>：$S = -x^2 + 6x$ ($0 < x < 6$)

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷，探讨从“几何图形”中抽象出函数表达式的能力*

（1）几何最值问题的建模

在压轴题中，函数表达式往往不是直接给出的，而是需要你自己“造”出来

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q17</span>：老李用 68m 栅栏借助外墙围羊圈，留 2m 门，求面积最大值
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这道题的核心第一步就是<span style="border-bottom: 1.5px dashed orange;">求表达式</span>  
         > 设垂直墙边长为 $x$  
         > 篱笆总长约束：$L_{\text{平行}} + 2x = 68 + 2$（门宽省下的篱笆相当于总长增加了）  
         > 得到 $L_{\text{平行}} = 70 - 2x$  
         > 构造函数：$S = x(70 - 2x)$  
         > 这本质上就是利用<span style="border-bottom: 1.5px dashed orange;">一般式</span>（展开后）或<span style="border-bottom: 1.5px dashed orange;">交点式</span>（直接利用零点 $0$ 和 $35$）来建立模型

（2）图形变换后的表达式

平移抛物线是中考的高频考点，核心在于<span style="border-bottom: 1.5px dashed orange;">顶点移动</span>

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q20</span>：涉及 $\triangle ABC$ 向左平移
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：虽然此题是三角形平移，但原理相通。若将问题改为“将抛物线 $y=ax^2$ 向左平移 1 个单位”，我们只需关注顶点从 $(0,0)$ 移到了 $(-1,0)$  
         > 新表达式直接写为 $y = a(x+1)^2$  
         > <span style="border-bottom: 1.5px dashed orange;">口诀</span>：<span style="border-bottom: 1.5px dashed orange;">左加右减，上加下减</span>。注意左右是加减在 $x$ 的括号里（$(x+m)$），上下是加减在常数项 $k$

---

!!! question "自学自测"

    1. <span style="border-bottom: 1.5px dashed orange;">方法选择</span>：已知抛物线经过 $(0,0), (2,0), (3,5)$，设成什么形式最快？
        *（答案：交点式。因为 $(0,0)$ 和 $(2,0)$ 都是与 x轴的交点。设 $y = ax(x-2)$）*
    2. <span style="border-bottom: 1.5px dashed orange;">平移规律</span>：把 $y = 2x^2$ 向右平移 3 个单位，再向下平移 5 个单位，解析式是什么？
        *（答案：$y = 2(x-3)^2 - 5$）*
    3. <span style="border-bottom: 1.5px dashed orange;">常数项含义</span>：已知二次函数经过点 $(0, -3)$，那么 $c$ 是多少？
        *（答案：$c = -3$。图象与 y轴交点即为 $(0, c)$）*

***

### （三）二次函数与几何综合

#### 1. 核心方法：坐标几何化的翻译

这是初中数学的“压轴题”高发区。核心在于打破代数与几何的壁垒，把“图形的形状”翻译成“坐标的方程”

（1）线段长的坐标表示

在平面直角坐标系中，计算几何图形的边长或高，通常转化为坐标差

设 $A(x_1, y_1)$，$B(x_2, y_2)$

* <span style="border-bottom: 1.5px dashed orange;">铅垂距离（竖直）</span>：若 $x_1 = x_2$，则 $AB = |y_1 - y_2|$（上减下）
    * *应用*：求三角形的高、铅垂线段长
* <span style="border-bottom: 1.5px dashed orange;">水平距离（横向）</span>：若 $y_1 = y_2$，则 $AB = |x_1 - x_2|$（右减左）
* <span style="border-bottom: 1.5px dashed orange;">任意距离</span>：$AB = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$（勾股定理）

（2）面积的最大值模型（铅垂高法）

对于斜放在坐标系中的三角形 $\triangle ABC$，直接求底和高很困难

* <span style="border-bottom: 1.5px dashed orange;">割补策略</span>：过中间点作 $x$ 轴的垂线（铅垂高 $h$），将三角形切割成左右两部分
* <span style="border-bottom: 1.5px dashed orange;">公式</span>：

  $$S = \frac{1}{2} \cdot h \cdot |x_B - x_C|$$

  （$h$ 为铅垂线段长，即上方抛物线点纵坐标减去下方直线点纵坐标）
* <span style="border-bottom: 1.5px dashed orange;">最值原理</span>：因为 $h$ 通常是关于 $x$ 的二次函数（$y_{\text{抛}} - y_{\text{直}}$），所以利用二次函数顶点公式可求 $S$ 的最大值

---

#### 2. 深度解析：特殊图形的存在性

“是否存在一点 $P$，使得...” 这类问题，本质上是解方程

（1）等腰三角形的存在性

若 $\triangle ABC$ 为等腰三角形，需分三种情况讨论（“三圆法”）：

1. $AB = AC$（以 $A$ 为圆心，$AB$ 为半径画圆）

2. $BA = BC$（以 $B$ 为圆心，$BA$ 为半径画圆）

3. $CA = CB$（$AB$ 的垂直平分线）

* <span style="border-bottom: 1.5px dashed orange;">操作</span>：列出距离平方相等的方程，解 $x$

（2）平行四边形的存在性

若 $A, B, C, D$ 四点构成平行四边形，利用<span style="border-bottom: 1.5px dashed orange;">对角线中点重合</span>最快

* <span style="border-bottom: 1.5px dashed orange;">公式</span>：$x_A + x_C = x_B + x_D$，且 $y_A + y_C = y_B + y_D$（假设 $AC, BD$ 为对角线）
* <span style="border-bottom: 1.5px dashed orange;">注意</span>：如果不确定谁是对角线，通常有 3 种可能的坐标

---

#### 3. 典型例题

【例1】 面积最大值（铅垂法）

如图，抛物线 $y = -x^2 + 4x$ 与 $x$ 轴交于 $O, A$ 两点。$P$ 是抛物线在第一象限上的动点。求 $\triangle OPA$ 面积的最大值

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">求坐标</span>：令 $y=0$，解得 $x_1=0, x_2=4$，即 $A(4, 0)$

2. <span style="border-bottom: 1.5px dashed orange;">设动点</span>：设 $P(t, -t^2+4t)$，其中 $0 < t < 4$

3. <span style="border-bottom: 1.5px dashed orange;">找底高</span>：
    * 底边 $OA = 4$（在 $x$ 轴上）
    * 高 $h = P$ 点的纵坐标 $= -t^2+4t$

4. <span style="border-bottom: 1.5px dashed orange;">列函数</span>：
    $S = \frac{1}{2} \times \text{底} \times \text{高} = \frac{1}{2} \times 4 \times (-t^2+4t) = -2t^2 + 8t$

5. <span style="border-bottom: 1.5px dashed orange;">求最值</span>：
    配方得 $S = -2(t-2)^2 + 8$
    $\therefore$ 当 $t=2$ 时，面积最大值为 8

【例2】 等腰三角形的存在性

在抛物线 $y = x^2$ 上是否存在点 $P$，使得 $\triangle PAB$ 是以 $AB$ 为腰的等腰三角形？已知 $A(-1, 1), B(1, 1)$

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">分析边长</span>：$A, B$ 关于 $y$ 轴对称，$AB$ 平行于 $x$ 轴，长度为 2

2. <span style="border-bottom: 1.5px dashed orange;">分类讨论</span>：
    * 情况一：$PA = AB = 2$
      即 $P$ 到 $A(-1, 1)$ 的距离为 2
      列方程：$(x+1)^2 + (x^2-1)^2 = 2^2$
    * 情况二：$PB = AB = 2$
      同理列方程

3. <span style="border-bottom: 1.5px dashed orange;">解方程</span>：解出符合题意的 $x$ 值即为 $P$ 点横坐标

---

#### 4. 进阶思维与素养拓展

*本节结合浙江素养测试卷，探讨几何约束下的最值与动点问题*

（1）几何约束下的二次优化

有些几何最值问题，表面看是几何题，列出式子后发现是二次函数最值

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q17</span>：用 68m 栅栏围羊圈，面积 $S = x(70-2x)$
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：这是一道教科书级的<span style="border-bottom: 1.5px dashed orange;">几何建模</span>题。几何图形的“面积”天然就是一个二次函数（长$\times$宽）。解题的关键在于准确找出自变量的取值范围（如边长 $>0$），并在范围内求顶点的纵坐标。如果顶点在范围外，则需根据增减性取端点值

（2）动点函数图象（分段二次函数）

动点在多边形边上运动时，不同阶段的面积表达式不同，构成了“分段函数”

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q20</span>：点 $P$ 沿折线运动，图象显示 $y$ 随 $x$ 变化的趋势（有直线也有曲线）
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：
         > 如果图象是<span style="border-bottom: 1.5px dashed orange;">抛物线的一部分</span>，说明几何量之间是二次关系（如 $\triangle$ 面积随底边变化，高也随底边变化）  
         > 如果图象是<span style="border-bottom: 1.5px dashed orange;">直线</span>，说明是一次关系（如矩形一边固定，另一边变化）  
         > <span style="border-bottom: 1.5px dashed orange;">破题点</span>：观察图象的“最高点”或“拐点”。这些点往往对应几何图形中的特殊位置（如 $P$ 点到达顶点，或 $P$ 点经过垂足）。利用特殊点的几何特征算出具体的数值，反求解析式

（3）坐标系中的直角三角形

存在性问题中，直角三角形的处理技巧

!!! abstract "参考试题"
    
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q21</span>：涉及坐标系中的垂线构造
         - <span style="border-bottom: 1.5px dashed orange;">素养点拨</span>：若在抛物线上找点 $P$ 使 $\angle APB = 90^\circ$
         > <span style="border-bottom: 1.5px dashed orange;">法一（勾股）</span>：$PA^2 + PB^2 = AB^2$（计算量大）
         > <span style="border-bottom: 1.5px dashed orange;">法二（相似/斜率）</span>：构造“一线三等角”模型（K字型相似），或者利用 $k_{PA} \cdot k_{PB} = -1$（高中知识下放，若填空题可用）
        - <span style="border-bottom: 1.5px dashed orange;">法三（几何法）</span>：点 $P$ 在以 $AB$ 为直径的圆与抛物线的交点上

---

!!! question "自学自测"

    1. <span style="border-bottom: 1.5px dashed orange;">距离误区</span>：点 $A(1, 5)$ 和 $B(1, -2)$ 的距离是多少？是 $5-2=3$ 吗？
        *(答案：错。是 $5 - (-2) = 7$。坐标差要取绝对值或上减下)*
    2. <span style="border-bottom: 1.5px dashed orange;">铅垂高</span>：直线 $y=x$ 上方有一个点 $P(2, 4)$，求 $P$ 点到直线的铅垂距离
        *(答案：$P$ 点纵坐标为 4，直线上对应横坐标 $x=2$ 时的纵坐标为 2。铅垂距离 $= 4 - 2 = 2$)*
    3. <span style="border-bottom: 1.5px dashed orange;">形状判断</span>：若 $A, B, C$ 三点满足 $AB^2 + BC^2 = AC^2$，则 $\triangle ABC$ 是什么形状？
        *(答案：直角三角形，且 $\angle B = 90^\circ$)*

