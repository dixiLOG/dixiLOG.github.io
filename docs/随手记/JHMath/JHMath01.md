# 代数篇

<div id="progress-container">
  <div id="progress-bar"></div>
</div>



## 一、实数与代数式

### （一）二次根式的性质与运算

#### 1. 核心定义与性质

二次根式是初中代数“分水岭”级别的知识点。它不仅是运算工具，更是考察严密逻辑（非负性）的试金石

#### 2. 定义

一般地，形如 $\sqrt{a}$ ($a \ge 0$) 的式子叫做<span style="border-bottom: 1.5px dashed orange;">二次根式</span>

- <span style="border-bottom: 1.5px dashed orange;">双重非负性</span>：
    1. <span style="border-bottom: 1.5px dashed orange;">被开方数非负</span>：$a \ge 0$（如果不满足，在实数范围内无意义）
    2. <span style="border-bottom: 1.5px dashed orange;">值非负</span>：$\sqrt{a} \ge 0$（即算术平方根是非负数）

!!! info ""
    ![基础函数](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/PixPin_2026-02-09_18-05-32.png){style="zoom: 75%;"}

#### 3. 核心性质（“去根号”的三大法宝）

1. <span style="border-bottom: 1.5px dashed orange;">平方性质</span>：$(\sqrt{a})^2 = a$ ($a \ge 0$)
    - *解读*：根号和平方是“死对头”，碰面就抵消
2. <span style="border-bottom: 1.5px dashed orange;">化简性质（绝对值陷阱）</span>：$\sqrt{a^2} = |a|$
    - *展开写*：

        $$\sqrt{a^2} = \begin{cases} a & (a > 0) \\ 0 & (a = 0) \\ -a & (a < 0) \end{cases}$$

    - *高频易错*：$\sqrt{(-3)^2} \neq -3$，而是 $|-3| = 3$。一定要先判断 $a$ 的正负！
3. <span style="border-bottom: 1.5px dashed orange;">积商法则</span>：
    - 积：$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$ ($a \ge 0, b \ge 0$)
    - 商：$\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$ ($a \ge 0, b > 0$)

---

#### 4. 核心运算规则

（1）加减法：合并同类项

- <span style="border-bottom: 1.5px dashed orange;">原则</span>：只有<span style="border-bottom: 1.5px dashed orange;">最简二次根式</span>的被开方数相同时，才能合并
- <span style="border-bottom: 1.5px dashed orange;">步骤</span>：
    1. <span style="border-bottom: 1.5px dashed orange;">化简</span>：将所有二次根式化为最简形式
    2. <span style="border-bottom: 1.5px dashed orange;">合并</span>：系数相加减，根号部分保持不变
    *例*：$\sqrt{8} + \sqrt{18} = 2\sqrt{2} + 3\sqrt{2} = 5\sqrt{2}$

（2）分母有理化

这是代数运算中的“整容术”，目的是消除分母中的根号

- <span style="border-bottom: 1.5px dashed orange;">基础型</span>（单项式）：

    利用 $\sqrt{a} \cdot \sqrt{a} = a$

    $$\frac{1}{\sqrt{a}} = \frac{1 \cdot \sqrt{a}}{\sqrt{a} \cdot \sqrt{a}} = \frac{\sqrt{a}}{a}$$

- <span style="border-bottom: 1.5px dashed orange;">进阶型</span>（多项式 - <span style="border-bottom: 1.5px dashed orange;">素养卷常考</span>）：
    利用平方差公式 $(x+y)(x-y)=x^2-y^2$ 构造<span style="border-bottom: 1.5px dashed orange;">共轭</span>形式

    $$\frac{1}{\sqrt{a} + \sqrt{b}} = \frac{1 \cdot (\sqrt{a} - \sqrt{b})}{(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b})} = \frac{\sqrt{a} - \sqrt{b}}{a - b}$$

---

#### 5. 典型例题

【例1】 基础化简与取值范围

(1) 若 $\sqrt{x-3}$ 有意义，求 $x$ 的取值范围  
(2) 计算：$\sqrt{12} - \sqrt{3} \times \sqrt{6}$

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

(1) 根据非负性，$x-3 \ge 0 \Rightarrow x \ge 3$  
(2) 原式 $= 2\sqrt{3} - \sqrt{18} = 2\sqrt{3} - 3\sqrt{2}$

!!! warning "注意"
    $\sqrt{3}$ 和 $\sqrt{2}$ 不是同类项，不能继续合并

【例2】 陷阱题：符号的艺术

已知 $a < 2$，化简 $\sqrt{(a-2)^2} + |a-3|$

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. 先处理根号：$\sqrt{(a-2)^2} = |a-2|$
2. 去绝对值符号（这是核心难点）：
    - 因为 $a < 2$，所以 $a-2 < 0$，去绝对值要变号，得 $-(a-2) = 2-a$
    - 因为 $a < 2$，所以 $a-3 < 0$，去绝对值要变号，得 $-(a-3) = 3-a$
3. 原式 $= (2-a) + (3-a) = 5 - 2a$

---

#### 6. 进阶思维与素养拓展

*本节内容源自浙江省素养测试卷分析，旨在提升对代数结构的认知*

!!! abstract "参考试题"
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q1</span>：考查 $(1-2\sqrt{3})(3+\sqrt{3}) \dots$ 的混合运算。这道题提醒我们，即使是最基础的乘法分配律，在根号介入后也容易出现符号错误，是检验计算基本功的试金石
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q12</span>：考查分式 $\frac{5-5\sqrt{3}+\sqrt{2}-\sqrt{6}}{\sqrt{6}-\sqrt{2}}$ 的化简。这道题不能死算，分子中的 $5(1-\sqrt{3})$ 与 $\sqrt{2}(1-\sqrt{3})$ 暗示了“分组分解”的思想，分母有理化时需要灵活运用平方差公式

（1）巧用“共轭”构造

在处理复杂分式时，简单的通分往往计算量巨大，而利用共轭结构可以“降维打击”

<span style="border-bottom: 1.5px dashed orange;">挑战题</span>：计算 $\frac{1}{\sqrt{2}+1} + \frac{1}{\sqrt{3}+\sqrt{2}} + \dots + \frac{1}{\sqrt{100}+\sqrt{99}}$

!!! tip "思路点拨"
    不要直接通分！观察每一项 $\frac{1}{\sqrt{n+1}+\sqrt{n}}$  
    利用分母有理化：

    $$\frac{1}{\sqrt{n+1}+\sqrt{n}} = \frac{\sqrt{n+1}-\sqrt{n}}{(\sqrt{n+1}+\sqrt{n})(\sqrt{n+1}-\sqrt{n})} = \sqrt{n+1}-\sqrt{n}$$

    原式变为裂项相消的形式：

    $$(\sqrt{2}-1) + (\sqrt{3}-\sqrt{2}) + \dots + (\sqrt{100}-\sqrt{99})$$

    中间项全部抵消，只剩头尾：$\sqrt{100} - 1 = 10 - 1 = 9$

（2）复合二次根式（双重根号）

虽然教材不要求，但竞赛和自招中常出现 $\sqrt{A \pm 2\sqrt{B}}$ 的形式  
<span style="border-bottom: 1.5px dashed orange;">核心思想</span>：将其配成完全平方式 $\sqrt{(\sqrt{x} \pm \sqrt{y})^2}$

- 公式：若 $x+y=A, xy=B$，则 $\sqrt{A \pm 2\sqrt{B}} = |\sqrt{x} \pm \sqrt{y}|$

---



!!! question "自学自测"
    1. $\sqrt{(-5)^2}$ 的值是多少？是 $\pm 5$ 吗？
    2. $\sqrt{x^2+1}$ 一定有意义吗？为什么？
    3. 试图化简：$\frac{2}{\sqrt{5}-\sqrt{3}}$（提示：分子分母同时乘 $\sqrt{5}+\sqrt{3}$）

---

### （二）整式与分式的高阶变形

#### 1. 核心定义与公式

整式乘除与因式分解是代数运算的“逆过程”，如同“拼乐高”与“拆乐高”。而分式则是代数中的“除法”，核心在于“结构的统一”

（1）乘法公式（三大金刚）

熟练掌握以下公式的正向与逆向使用（因式分解）：

1. <span style="border-bottom: 1.5px dashed orange;">平方差公式</span>：$(a+b)(a-b) = a^2 - b^2$
    - *逆用*：$a^2 - b^2 = (a+b)(a-b)$
2. <span style="border-bottom: 1.5px dashed orange;">完全平方公式</span>：$(a \pm b)^2 = a^2 \pm 2ab + b^2$
    - *逆用*：$a^2 \pm 2ab + b^2 = (a \pm b)^2$
3. <span style="border-bottom: 1.5px dashed orange;">十字相乘法（Cross-Multiplication）</span>：
    虽然教材可能标为选学，但这<span style="border-bottom: 1.5px dashed orange;">是解一元二次方程的灵魂</span>，必须掌握！
    - 形式：$x^2 + (p+q)x + pq = (x+p)(x+q)$
    - *口诀*：首尾分解，交叉相乘，和为中间

$$_{a_2}^{a_1}\times_{b_2}^{b_1}\to a_1b_2+a_2b_1.$$

（2）分式的基本性质

$$\frac{A}{B} = \frac{A \cdot M}{B \cdot M} \quad (M \neq 0)$$

- <span style="border-bottom: 1.5px dashed orange;">通分</span>：异分母加减 $\to$ 找最简公分母 $\to$ 同分母
- <span style="border-bottom: 1.5px dashed orange;">约分</span>：分子分母因式分解 $\to$ 约去公因式 $\to$ 最简分式

---

#### 2. 深度解析

（1）“整体”的艺术

在代数变形中，不要总是盯着单一的 $x$ 或 $y$，而要将 $x+y$、$xy$ 甚至 $x^2-3x$ 看作一个整体字母 $A$

- <span style="border-bottom: 1.5px dashed orange;">降次打击</span>：如果你知道 $x^2 - 3x + 1 = 0$，求 $2x^2 - 6x + 5$ 的值
    - 观察：$2x^2 - 6x = 2(x^2 - 3x)$
    - 移项得 $x^2 - 3x = -1$
    - 代入：$2(-1) + 5 = 3$。不需要解出 $x$ 的具体值！

（2）分式裂项

这是处理长串分式相加的绝技（俗称“连锁反应消消乐”）

- <span style="border-bottom: 1.5px dashed orange;">核心模型</span>：$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$
- *原理*：通分的逆运算。$\frac{1}{n} - \frac{1}{n+1} = \frac{n+1 - n}{n(n+1)} = \frac{1}{n(n+1)}$

---

#### 3. 典型例题

【例1】 提公因式与公式法的混合使用

分解因式：$ax^3 - 9axy^2$

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">第一步：提</span>（公因式）
    观察各项都有 $ax$，提出得 $ax(x^2 - 9y^2)$
2. <span style="border-bottom: 1.5px dashed orange;">第二步：套</span>（公式）
    括号内 $x^2 - (3y)^2$ 符合平方差公式
3. <span style="border-bottom: 1.5px dashed orange;">结果</span>：$ax(x+3y)(x-3y)$

!!! warning "避坑"
    分解要彻底！分解到不能再分为止

【例2】 分式的化简求值

先化简，再求值：$(\frac{3}{x-1} + 1) \cdot \frac{x+2}{x^2-1}$，其中 $x=2$

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">括号内通分</span>：
    $\frac{3}{x-1} + \frac{x-1}{x-1} = \frac{3+x-1}{x-1} = \frac{x+2}{x-1}$
2. <span style="border-bottom: 1.5px dashed orange;">除法变乘法</span>（分子分母颠倒，同时因式分解）：
    原式 $= \frac{x+2}{x-1} \cdot \frac{(x+1)(x-1)}{x+2}$
3. <span style="border-bottom: 1.5px dashed orange;">约分</span>：
    消去 $(x+2)$ 和 $(x-1)$
    结果 $= x+1$
4. <span style="border-bottom: 1.5px dashed orange;">代入</span>：
    当 $x=2$ 时，原式 $= 2+1=3$

---

#### 4. 进阶思维与素养拓展

*本节融合了“素养测试卷”中对代数结构的高阶考查要求*

!!! abstract "参考试题"
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q16</span>：已知 $(x+\sqrt{x^2+2025})(y+\sqrt{y^2+2025})=2025$，求 $x+y$。这是典型的<span style="border-bottom: 1.5px dashed orange;">共轭构造</span>题型。解题关键在于构造 $(x-\sqrt{x^2+2025})$，利用平方差公式将复杂的根式方程转化为简单的对称关系
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q8</span>：给定递归公式 $y_k = \frac{1}{1-y_{k-1}}$，求 $y_{2024}$。这道题考查的是分式变形中的<span style="border-bottom: 1.5px dashed orange;">周期性规律</span>。学生需要通过前几项的计算（$y_1, y_2, y_3, y_1 \dots$）发现循环节，而非盲目计算

（1）对称式与倒数模型

在九年级代数题中，经常出现 $x + \frac{1}{x}$ 这种结构。它是连接一次方与高次方的桥梁

- <span style="border-bottom: 1.5px dashed orange;">基本变形</span>：

    $$(x + \frac{1}{x})^2 = x^2 + 2 \cdot x \cdot \frac{1}{x} + \frac{1}{x^2} = x^2 + \frac{1}{x^2} + 2$$

    即：$x^2 + \frac{1}{x^2} = (x + \frac{1}{x})^2 - 2$

- <span style="border-bottom: 1.5px dashed orange;">挑战题</span>：已知 $x + \frac{1}{x} = 3$，求 $\frac{x^4 + 1}{x^2}$ 的值
    <span style="border-bottom: 1.5px dashed orange;">思路</span>：
    1. 观察分子分母次数，利用除法将分式拆开：
        $\frac{x^4}{x^2} + \frac{1}{x^2} = x^2 + \frac{1}{x^2}$
    2. 利用倒数模型公式：
        $x^2 + \frac{1}{x^2} = 3^2 - 2 = 7$

（2）为韦达定理铺路

在之后的“一元二次方程”章节中，你会遇到 $x_1, x_2$ 为方程两根的情况。现在就要熟练掌握以下分式变形：

$$\frac{1}{a} + \frac{1}{b} = \frac{a+b}{ab}$$

$$\frac{b}{a} + \frac{a}{b} = \frac{b^2 + a^2}{ab} = \frac{(a+b)^2 - 2ab}{ab}$$

- <span style="border-bottom: 1.5px dashed orange;">意义</span>：将复杂的式子转化为只有“和 $(a+b)$”与“积 $(ab)$”的形式。这是未来解决压轴题的关键基本功

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">变号陷阱</span>：化简 $\frac{a}{a-b} - \frac{b}{b-a}$
        - *提示*：分母 $b-a = -(a-b)$，负负得正，中间符号变加号
    2. <span style="border-bottom: 1.5px dashed orange;">完全平方</span>：已知 $a+b=5, ab=3$，求 $a^2+b^2$
        - *提示*：$(a+b)^2 - 2ab$
    3. <span style="border-bottom: 1.5px dashed orange;">定义域</span>：若分式 $\frac{|x|-1}{x+1}$ 的值为0，则 $x$ 的值是多少？
        - *提示*：分子为0且分母<span style="border-bottom: 1.5px dashed orange;">不为</span>0。$|x|=1 \Rightarrow x=\pm 1$，但 $x \neq -1$，所以只能是 $x=1$

---

## 二、方程与不等式

### （一）一元二次方程的解法与判别式

#### 1. 核心定义与公式

一元二次方程是初中代数的核心枢纽，向上承接整式运算，向下开启二次函数的大门。其标准形式与解的结构具有高度的对称美

（1）定义

等号两边都是整式，只含有一个未知数（一元），并且未知数的最高次数是2（二次）的方程，叫做<span style="border-bottom: 1.5px dashed orange;">一元二次方程</span>

- <span style="border-bottom: 1.5px dashed orange;">一般形式</span>：$ax^2 + bx + c = 0$
- <span style="border-bottom: 1.5px dashed orange;">严格约束</span>：<span style="border-bottom: 1.5px dashed orange;">$a \neq 0$</span>。这是该定义的“生命线”，若 $a=0$，方程即退化为一元一次方程

（2）解法体系

1. <span style="border-bottom: 1.5px dashed orange;">直接开平方法</span>：
    适用于 $(x+m)^2 = n$ ($n \ge 0$) 的形式
    - 解：$x+m = \pm\sqrt{n}$
2. <span style="border-bottom: 1.5px dashed orange;">因式分解法（首选）</span>：
    适用于方程左边易于分解，右边为0的情形
    - 原理：若 $A \cdot B = 0$，则 $A=0$ 或 $B=0$
    - 工具：提公因式、平方差、完全平方、<span style="border-bottom: 1.5px dashed orange;">十字相乘</span>
3. <span style="border-bottom: 1.5px dashed orange;">配方法</span>：
    这是推导求根公式的源头，也是二次函数化简的核心
    - 步骤：移常数项 $\to$ 二次项系数化1 $\to$ 两边同加一次项系数一半的平方 $\to$ 以此配成完全平方式
4. <span style="border-bottom: 1.5px dashed orange;">公式法（万能钥匙）</span>：
    当无法轻易因式分解时使用
    - <span style="border-bottom: 1.5px dashed orange;">求根公式</span>：

      $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

      （前提：$b^2 - 4ac \ge 0$）

（3）根的判别式

我们将 $\Delta = b^2 - 4ac$ 称为一元二次方程的根的判别式。它在不解方程的情况下判定根的性质：

- $\Delta > 0 \iff$ 方程有两个<span style="border-bottom: 1.5px dashed orange;">不相等</span>的实数根
- $\Delta = 0 \iff$ 方程有两个<span style="border-bottom: 1.5px dashed orange;">相等</span>的实数根
- $\Delta < 0 \iff$ 方程<span style="border-bottom: 1.5px dashed orange;">没有</span>实数根

---

#### 2. 深度解析

（1）配方法的几何意义

配方法本质上是“拼图”。将 $x^2 + px$ 补上 $(\frac{p}{2})^2$，在几何上相当于把一个缺角的矩形拼成一个正方形

- <span style="border-bottom: 1.5px dashed orange;">代数核心</span>：它将“分散”的 $x$（二次项和一次项）收敛到一个完全平方式 $(x+\frac{p}{2})^2$ 中，从而利用开方运算降次

（2）判别式 $\Delta$ 的“法官”角色

为什么是 $b^2-4ac$？

在求根公式 $x = \frac{-b \pm \sqrt{\Delta}}{2a}$ 中，$\Delta$ 位于根号内部

- 实数范围内，负数不能开平方，所以 $\Delta < 0$ 无解
- 0的平方根只有一个（0本身），所以 $\pm\sqrt{0}$ 导致两个根重合，即 $x_1=x_2=-\frac{b}{2a}$

---

#### 3. 典型例题

【例1】 灵活选择解法

解方程：  
(1) $x(x-2) + x - 2 = 0$  
(2) $x^2 - 4x + 1 = 0$

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

(1) <span style="border-bottom: 1.5px dashed orange;">因式分解法</span>（观察公因式）：

- 变形：$x(x-2) + 1 \cdot (x-2) = 0$
- 提公因式：$(x-2)(x+1) = 0$
- 解得：$x_1 = 2, x_2 = -1$

!!! warning "避坑"
    千万不要展开去括号！那是在绕远路

(2) <span style="border-bottom: 1.5px dashed orange;">公式法/配方法</span>（十字相乘无效）：

- 识别系数：$a=1, b=-4, c=1$
- 判别式：$\Delta = (-4)^2 - 4 \times 1 \times 1 = 12 > 0$
- 代入公式：$x = \frac{-(-4) \pm \sqrt{12}}{2 \times 1} = \frac{4 \pm 2\sqrt{3}}{2} = 2 \pm \sqrt{3}$
- 结果：$x_1 = 2+\sqrt{3}, x_2 = 2-\sqrt{3}$

【例2】 含参方程的判别式

已知关于 $x$ 的方程 $kx^2 - 2x + 1 = 0$ 有实数根，求 $k$ 的取值范围

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

这是一道经典的<span style="border-bottom: 1.5px dashed orange;">易错题</span>

1. <span style="border-bottom: 1.5px dashed orange;">分类讨论</span>：
    - 当 $k=0$ 时，方程变为 $-2x+1=0$，解得 $x=0.5$，有实根。符合题意
    - 当 $k \neq 0$ 时，这是二次方程。有实根意味着 $\Delta \ge 0$
      $\Delta = (-2)^2 - 4(k)(1) = 4 - 4k \ge 0 \Rightarrow k \le 1$
      此时范围是 $k \le 1$ 且 $k \neq 0$
2. <span style="border-bottom: 1.5px dashed orange;">综上所述</span>：
    $k$ 的取值范围是 $k \le 1$

!!! warning "注意"
    题目只说了“方程”，没说“一元二次方程”，所以必须考虑 $k=0$ 的退化情况（一次方程）。若题目明确指出是“一元二次方程”，则 $k \neq 0$ 必须写进答案

---

#### 4. 进阶思维与素养拓展

*本节针对浙江省素养测试中常见的“隐性约束”与“整数根”问题*

!!! abstract "参考试题"
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q12</span>：关于 $x$ 的方程 $(k+1)x^2-2kx+k-5=0$ 有两个实数根，求 $k$ 的范围
        - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：这道题完美诠释了<span style="border-bottom: 1.5px dashed orange;">隐性约束</span>。除了判别式 $\Delta \ge 0$ 之外，必须保证二次项系数 $k+1 \neq 0$。漏掉这个条件是这类题失分的头号原因
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q19</span>：关于 $x$ 的一元二次方程 $kx^2-(2k+4)x+k-6=0$ 有两个不相等的实数根
        - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：同样考查含参方程。解题时需注意“两个不相等实数根”对应 $\Delta > 0$，同时结合 $k \neq 0$ 进行综合判断

（1）隐性约束：$a \neq 0$ 的陷阱

在处理含参二次方程 $(m-1)x^2 + \dots = 0$ 时，永远把 $m-1 \neq 0$ 作为第一行代码写在草稿纸上

- <span style="border-bottom: 1.5px dashed orange;">真题警示</span>：若方程有<span style="border-bottom: 1.5px dashed orange;">两个</span>实数根，则不仅要求 $\Delta > 0$，还隐含了“二次项系数不为0”

（2）整数根问题

竞赛或压轴题常考：若关于 $x$ 的方程 $x^2 + mx + n = 0$ 的根都是整数，求 $m, n$ 的关系

- <span style="border-bottom: 1.5px dashed orange;">思路</span>：
    1. <span style="border-bottom: 1.5px dashed orange;">判别式 $\Delta$ 必须是完全平方数</span>。因为 $x = \frac{-m \pm \sqrt{\Delta}}{2}$，若 $\sqrt{\Delta}$ 不是整数，$x$ 就不可能是整数（除非 $m$ 也是同类无理数，但初中通常假设 $m,n$ 为整数）
    2. 利用十字相乘法的逆运算：$x^2 + (p+q)x + pq = 0$，则 $m=p+q, n=pq$

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">概念辨析</span>：方程 $ax^2 + bx + c = 0$ 一定有两个根吗？（答案：不一定，看 $\Delta$ 和 $a$）
    2. <span style="border-bottom: 1.5px dashed orange;">解法选择</span>：方程 $(x-3)^2 = 4(x-3)$ 最快的解法是什么？（答案：移项提公因式，千万别两边同除以 $x-3$，会丢根）
    3. <span style="border-bottom: 1.5px dashed orange;">逆向思维</span>：若 $x=1$ 是方程 $x^2 + mx + 2 = 0$ 的一个根，试求 $m$ 和另一个根。（答案：代入求 $m=-3$，另一个根为2）

---

### （二）韦达定理与根系关系

#### 1. 核心定义与定理

韦达定理（Vieta's Formulas）被誉为“代数桥梁”，它在不解方程的情况下，直接建立了<span style="border-bottom: 1.5px dashed orange;">根</span>与<span style="border-bottom: 1.5px dashed orange;">系数</span>之间的数量关系

（1）韦达定理

如果一元二次方程 $ax^2 + bx + c = 0$ ($a \neq 0$) 的两个实数根分别是 $x_1, x_2$，那么：

1. <span style="border-bottom: 1.5px dashed orange;">两根之和</span>：$x_1 + x_2 = -\frac{b}{a}$
2. <span style="border-bottom: 1.5px dashed orange;">两根之积</span>：$x_1 \cdot x_2 = \frac{c}{a}$


（2）逆定理（构造方程）

如果你知道两个数 $m, n$ 的和是 $S$ ($S=m+n$)，积是 $P$ ($P=mn$)，那么这两个数 $m, n$ 是方程 $x^2 - Sx + P = 0$ 的两个根

- *口诀*：$x^2 -$ (和)$x +$ (积) $= 0$

---

#### 2. 深度解析

（1）为什么要先看判别式？

韦达定理生效的前提是<span style="border-bottom: 1.5px dashed orange;">方程必须有实数根</span>

- <span style="border-bottom: 1.5px dashed orange;">陷阱</span>：题目问“若 $x_1, x_2$ 是方程的两根...”，你必须先检查 $\Delta = b^2 - 4ac \ge 0$。如果 $\Delta < 0$，根都不存在，谈何之和、之积？

（2）对称美的暴力美学

韦达定理最擅长处理<span style="border-bottom: 1.5px dashed orange;">关于根的对称代数式</span>

- 常见变形模具（必须背诵）：
    - $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$
    - $\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1x_2}$
    - $(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2$ （差的平方）

---

#### 3. 典型例题

【例1】 基础求值（不解方程）

已知 $x_1, x_2$ 是方程 $2x^2 + 3x - 4 = 0$ 的两个根，求 $x_1^2 + x_2^2$ 的值

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">提取系数</span>：$a=2, b=3, c=-4$
2. <span style="border-bottom: 1.5px dashed orange;">检查判别式</span>（虽非必须但推荐养成习惯）：$\Delta = 3^2 - 4(2)(-4) = 25 > 0$，根存在
3. <span style="border-bottom: 1.5px dashed orange;">韦达定理</span>：
    $x_1 + x_2 = -\frac{3}{2}$  
    $x_1 x_2 = \frac{-4}{2} = -2$
4. <span style="border-bottom: 1.5px dashed orange;">代数变形</span>：
    $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$  
    $= (-\frac{3}{2})^2 - 2(-2)$  
    $= \frac{9}{4} + 4 = \frac{25}{4}$

【例2】 逆向应用与参数求解

已知关于 $x$ 的方程 $x^2 - (k+1)x + k + 2 = 0$ 的两根平方和为 6，求 $k$ 的值

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">列式</span>：
    $x_1 + x_2 = k+1$  
    $x_1 x_2 = k+2$  
    $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = (k+1)^2 - 2(k+2) = 6$
2. <span style="border-bottom: 1.5px dashed orange;">解关于 $k$ 的方程</span>：
    $k^2 + 2k + 1 - 2k - 4 = 6$  
    $k^2 - 3 = 6 \Rightarrow k^2 = 9 \Rightarrow k = \pm 3$
3. <span style="border-bottom: 1.5px dashed orange;">生死判决</span>（检查 $\Delta$）：
    - 当 $k=3$ 时，方程为 $x^2 - 4x + 5 = 0$，$\Delta = 16 - 20 = -4 < 0$（舍去！）
    - 当 $k=-3$ 时，方程为 $x^2 + 2x - 1 = 0$，$\Delta = 4 - (-4) = 8 > 0$（保留）
    - <span style="border-bottom: 1.5px dashed orange;">答案</span>：$k = -3$

---

#### 4. 进阶思维与素养拓展

*本节直击浙江素养卷的核心考法：<span style="border-bottom: 1.5px dashed orange;">非对称式</span>与<span style="border-bottom: 1.5px dashed orange;">降次打击</span>*

!!! abstract "参考试题"
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q11</span>：已知 $x_1, x_2$ 是方程 $x^2+mx-3=0$ 的两根，且 $\frac{1}{x_1}+\frac{1}{x_2}=-7$
        - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：考查韦达定理的<span style="border-bottom: 1.5px dashed orange;">通分变形</span>。将 $\frac{1}{x_1}+\frac{1}{x_2}$ 转化为 $\frac{x_1+x_2}{x_1x_2}$，直接代入系数求解，避免了解方程的繁琐
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q11</span>：若 $x_1, x_2$ 是方程 $3x^2-x-1=0$ 的两根，求 $(3x_1^2+x_2)(\frac{2}{x_1}+\frac{2}{x_2})$ 的值
        - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：这道题是<span style="border-bottom: 1.5px dashed orange;">降次打击</span>的经典案例。直接求根是无理数，代入计算极其困难。利用 $3x_1^2 = x_1+1$ 将高次项降为一次项，瞬间化繁为简
    - <span style="border-bottom: 1.5px dashed orange;">第八届复赛 Q19</span>：已知 $p, q$ 为实数且 $q>7$，方程 $x^2-13x+m=0$ 的两根为 $p, q$，求 $\frac{p}{q}+\frac{q}{p}$ 的值
        - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：考查对称式变形 $\frac{p^2+q^2}{pq} = \frac{(p+q)^2-2pq}{pq}$

（1）“降次”思想

当题目要求的值包含高次项（如 $x_1^3$ 或 $x_1^2$），且式子不对称（例如 $2x_1^2 + 3x_2$）时，单纯用韦达定理会非常繁琐  
<span style="border-bottom: 1.5px dashed orange;">必杀技</span>：因为 $x_1$ 是根，所以 $ax_1^2 + bx_1 + c = 0$，即 $ax_1^2 = -bx_1 - c$

【竞赛级例题】

已知 $x_1, x_2$ 是方程 $x^2 - 4x + 1 = 0$ 的两个根，求代数式 $x_1^2 - 3x_1 + x_2$ 的值

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">观察</span>：式子中 $x_1$ 是平方，且系数不匹配（$x_1^2$ 和 $-3x_1$），$x_2$ 是单独的。这既不对称，也不是完全平方式
2. <span style="border-bottom: 1.5px dashed orange;">降次（关键步骤）</span>：
    因为 $x_1$ 是根，代入方程得：$x_1^2 - 4x_1 + 1 = 0$  
    移项得：$x_1^2 = 4x_1 - 1$
3. <span style="border-bottom: 1.5px dashed orange;">代换</span>：
    将求值式中的 $x_1^2$ 换掉：  
    原式 $= (4x_1 - 1) - 3x_1 + x_2$  
    $= x_1 - 1 + x_2$  
    $= (x_1 + x_2) - 1$
4. <span style="border-bottom: 1.5px dashed orange;">收尾</span>：
    由韦达定理 $x_1 + x_2 = 4$  
    原式 $= 4 - 1 = 3$

!!! tip "素养点拨"
    这种“把根代回方程”的操作，是解决一切“不对称、高次数”问题的金钥匙

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">符号陷阱</span>：方程 $x^2 - 5x - 6 = 0$ 的两根之和是 $-5$ 还是 $5$？（答案：$5$。公式是 $-b/a$）
    2. <span style="border-bottom: 1.5px dashed orange;">存在性</span>：若 $x_1, x_2$ 满足 $x_1+x_2=2, x_1x_2=3$，这样的实数 $x_1, x_2$ 存在吗？（答案：不存在。$\Delta = 2^2 - 4 \times 3 < 0$）
    3. <span style="border-bottom: 1.5px dashed orange;">倒数和</span>：如果不解方程，你能口算出 $x^2 - 3x + 1 = 0$ 的 $\frac{1}{x_1} + \frac{1}{x_2}$ 吗？（答案：$3$）

---

### （三）方程与不等式的实际应用

#### 1. 核心定义与建模思想

应用题是许多同学的噩梦，但本质上它只是<span style="border-bottom: 1.5px dashed orange;">翻译</span>工作：将现实世界的中文描述翻译成数学符号语言

（1）数学建模四步曲

1. <span style="border-bottom: 1.5px dashed orange;">设</span>：选好主角。通常问什么设什么（直接设元），有时也设中间量（间接设元）
2. <span style="border-bottom: 1.5px dashed orange;">列</span>：这是最难的一步。寻找<span style="border-bottom: 1.5px dashed orange;">等量关系</span>（用于列方程）或<span style="border-bottom: 1.5px dashed orange;">不等关系</span>（用于列不等式）
    - *关键词捕捉*：“共”、“是”、“比...多”、“超过”、“不低于”
3. <span style="border-bottom: 1.5px dashed orange;">解</span>：利用之前的计算技能求解
4. <span style="border-bottom: 1.5px dashed orange;">验</span>（关键！）：双重检验
    - <span style="border-bottom: 1.5px dashed orange;">数学检验</span>：是否是分式方程的增根？
    - <span style="border-bottom: 1.5px dashed orange;">实际检验</span>：<span style="border-bottom: 1.5px dashed orange;">是否符合常理</span>？（人数不能是小数，线段长不能是负数，车速不能超光速）

---

#### 2. 深度解析：核心模型库

初中阶段主要涉及以下三类<span style="border-bottom: 1.5px dashed orange;">黄金模型</span>：

（1）传播与增长模型

- <span style="border-bottom: 1.5px dashed orange;">场景</span>：细胞分裂、流感传播、经济增长
- <span style="border-bottom: 1.5px dashed orange;">公式</span>：

    $$a(1+x)^n = b$$

    - $a$：初始量
    - $x$：平均增长率
    - $n$：增长次数（通常考2次，对应一元二次方程）
    - $b$：终止量

（2）销售利润模型

- <span style="border-bottom: 1.5px dashed orange;">场景</span>：商场打折、涨价
- <span style="border-bottom: 1.5px dashed orange;">核心逻辑</span>：<span style="border-bottom: 1.5px dashed orange;">单价变动影响销量</span>。通常是“一升一降”
- <span style="border-bottom: 1.5px dashed orange;">公式</span>：

    $$\text{总利润} = (\text{单件售价} - \text{进价}) \times \text{销售数量}$$

    - *难点*：设涨价 $x$ 元，销量通常减少 $kx$ 件。此时总利润方程为：$(Profit + x)(Volume - kx) = Target$

（3）几何图形模型

- <span style="border-bottom: 1.5px dashed orange;">场景</span>：修建花园、裁剪纸盒、围栏问题
- <span style="border-bottom: 1.5px dashed orange;">核心逻辑</span>：利用面积公式建立等量关系

---

#### 3. 典型例题

【例1】 增长率问题

某市房价两年前为 10000 元/平，现在涨到了 12100 元/平。求这两年的年平均增长率

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">设</span>：年平均增长率为 $x$
2. <span style="border-bottom: 1.5px dashed orange;">列</span>：
    - 第一年：$10000(1+x)$
    - 第二年：$10000(1+x)^2$
    - 方程：$10000(1+x)^2 = 12100$
3. <span style="border-bottom: 1.5px dashed orange;">解</span>：
    $(1+x)^2 = 1.21$  
    $1+x = \pm 1.1$  
    $x_1 = 0.1 = 10\%, \quad x_2 = -2.1$
4. <span style="border-bottom: 1.5px dashed orange;">验</span>：增长率不能为负数（题目背景是“涨”），舍去 $x_2$  
    <span style="border-bottom: 1.5px dashed orange;">答</span>：年平均增长率为 10%

【例2】 围栏与墙（面积问题）

如图，利用一面墙（墙长 25米），用 50米 长的篱笆围成一个矩形场地，面积为 300 平方米。求矩形的长和宽

<span style="border-bottom: 1.5px dashed orange;">解析</span>：

1. <span style="border-bottom: 1.5px dashed orange;">设</span>：垂直于墙的边长为 $x$ 米
2. <span style="border-bottom: 1.5px dashed orange;">列</span>：
    - 平行于墙的边长 = 总篱笆 - 2 $\times$ 垂直边 = $50 - 2x$
    - 面积方程：$x(50 - 2x) = 300$
3. <span style="border-bottom: 1.5px dashed orange;">解</span>：
    $50x - 2x^2 = 300$  
    $x^2 - 25x + 150 = 0$  
    $(x-10)(x-15) = 0$  
    解得 $x_1 = 10, x_2 = 15$
4. <span style="border-bottom: 1.5px dashed orange;">验</span>（易错点）：
    - 当 $x=10$ 时，平行墙的边长 $= 50 - 20 = 30$ 米。<span style="border-bottom: 1.5px dashed orange;">30 > 25（墙长），墙不够长</span>！舍去
    - 当 $x=15$ 时，平行墙的边长 $= 50 - 30 = 20$ 米。$20 < 25$，符合题意  
    <span style="border-bottom: 1.5px dashed orange;">答</span>：垂直边长 15米，平行边长 20米

---

#### 4. 进阶思维与素养拓展

*本节引用浙江素养测试卷 Q17 命题思路，探讨“实际约束”与“最值”的结合*

!!! abstract "参考试题"
    - <span style="border-bottom: 1.5px dashed orange;">第九届复赛 Q17</span>：老李想用长为 $68m$ 的栅栏，再借助房屋的外墙围成一个长方形羊圈，面积为 $600m^2$，且在边 $BC$ 上留一个 $2m$ 宽的门
        - <span style="border-bottom: 1.5px dashed orange;">素养考点</span>：这是标准的<span style="border-bottom: 1.5px dashed orange;">几何面积建模</span>。难点在于“留门”对边长的影响（相当于栅栏变长了），以及解出方程后需要根据“外墙足够长”或题目隐含的几何限制（如边长必须为正）进行<span style="border-bottom: 1.5px dashed orange;">验根</span>

（1）隐性边界

在【例2】中，你已经看到了“墙长”这个隐形杀手。在素养测试中，这种约束会更隐蔽

- <span style="border-bottom: 1.5px dashed orange;">素养卷真题 Q17 变式</span>：如果围栏还要留一个门（宽 2m），怎么列方程？
    - <span style="border-bottom: 1.5px dashed orange;">思路</span>：留门意味着“省下了篱笆”
    - 平行墙边长 = (篱笆总长 + 门宽) - 2 $\times$ 垂直边
    - 方程：$x(L_{total} + 2 - 2x) = S$

（2）方案决策：不等式的力量

当题目问“哪种方案更合算”或“至少需要多少”时，方程无能为力，必须请出<span style="border-bottom: 1.5px dashed orange;">不等式</span>

- <span style="border-bottom: 1.5px dashed orange;">模型</span>：
    - 方案 A 费用：$y_A = k_1x + b_1$
    - 方案 B 费用：$y_B = k_2x + b_2$
    - 若选 A 合算，则列 $y_A < y_B$，解出 $x$ 的范围

---



!!! question "自学自测"
    1. <span style="border-bottom: 1.5px dashed orange;">常识检验</span>：解关于人数的方程，得 $x=12.5$，这个解对吗？（不对，人数必须是正整数）
    2. <span style="border-bottom: 1.5px dashed orange;">单位陷阱</span>：题目中一边是“万元”，一边是“元”，列方程时需要做什么？（统一单位，比如都化为元）
    3. <span style="border-bottom: 1.5px dashed orange;">双根取舍</span>：在抛物线飞行物体落地问题中（高度 $h=0$），解出 $t_1=0, t_2=5$，两个根的物理意义分别是什么？（$t_1$是起飞前，$t_2$是落地时）
