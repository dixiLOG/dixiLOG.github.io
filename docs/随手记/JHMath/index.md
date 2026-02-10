

# JHMath - 初中数学保命手册

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 写在前面

无意中翻到了数学竞赛的卷子，借此机会顺手把初中数学基本知识点整理一下


## 目录



!!! success "Navigation"

    <div class="col-sep-all" markdown="1">
    <center>

    | 章节 | 小节 |
    | :--- | :--- |
    | 一、实数与代数式<br>二、方程与不等式 | 二次根式的性质与运算<br>整式与分式的高阶变形<br>一元二次方程的解法与判别式<br>韦达定理与根系关系<br>方程与不等式的实际应用 |
    | 三、四边形性质与判定<br>四、圆的几何性质<br>五、图形的变化与相似 | 平行四边形的判定体系<br>特殊平行四边形的层级关系<br>垂径定理与圆心角、圆周角<br>点、直线与圆的位置关系<br>圆中的计算<br>相似三角形的判定与性质<br>锐角三角函数<br>几何变换与最值问题 |
    | 六、一次函数与反比例函数<br>七、二次函数 | k, b 的几何意义与图象性质<br>反比例函数 k 的几何意义<br>二次函数的图象与性质<br>二次函数表达式的求法<br>二次函数与几何综合 |
    
    </center>
    </div>



## 核心公式与解题模型速查表

### 一、 代数

#### 1. 必背公式

* <span style="border-bottom: 1.5px dashed orange;">绝对值化简</span>：$\sqrt{a^2} = |a| = \begin{cases} a & (a \ge 0) \\ -a & (a < 0) \end{cases}$
    * *警示*：去根号必有绝对值，去绝对值必看正负
* <span style="border-bottom: 1.5px dashed orange;">乘法公式</span>：
    * 平方差：$(a+b)(a-b) = a^2 - b^2$ （用于分母有理化、共轭构造）
    * 完全平方：$(a \pm b)^2 = a^2 \pm 2ab + b^2$
* <span style="border-bottom: 1.5px dashed orange;">一元二次方程</span>：
    * 求根公式：$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$ （前提：$a \neq 0, \Delta \ge 0$）
    * 韦达定理：$x_1 + x_2 = -\frac{b}{a}, \quad x_1 x_2 = \frac{c}{a}$
    * *推论*：$x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2$

#### 2. 核心思想

* <span style="border-bottom: 1.5px dashed orange;">降次思想</span>：若 $x_1$ 是方程 $x^2 - 3x + 1 = 0$ 的根，则 $x_1^2 = 3x_1 - 1$。遇到高次项直接代换
* <span style="border-bottom: 1.5px dashed orange;">整体思想</span>：看到 $\frac{1}{a} + \frac{1}{b}$，立即通分为 $\frac{a+b}{ab}$
* <span style="border-bottom: 1.5px dashed orange;">隐性约束</span>：
    * 分式分母 $\neq 0$
    * 二次根式被开方数 $\ge 0$
    * 一元二次方程二次项系数 $a \neq 0$
    * 实际问题（人数、长度） $> 0$ 且为整数

---

### 二、 几何

#### 1. 四边形判定树

* <span style="border-bottom: 1.5px dashed orange;">平行四边形</span>：两组对边平行；两组对边相等；<span style="border-bottom: 1.5px dashed orange;">一组对边平行且相等</span>（最常用）；对角线互相平分
* <span style="border-bottom: 1.5px dashed orange;">矩形</span>：平行四边形 + (直角 OR 对角线相等)
* <span style="border-bottom: 1.5px dashed orange;">菱形</span>：平行四边形 + (邻边相等 OR 对角线垂直)
* <span style="border-bottom: 1.5px dashed orange;">正方形</span>：矩形 + 菱形
* <span style="border-bottom: 1.5px dashed orange;">特殊面积</span>：若对角线互相垂直，面积 $= \frac{1}{2} \times d_1 \times d_2$

#### 2. 圆的铁律

* <span style="border-bottom: 1.5px dashed orange;">垂径定理</span>：知二推三（垂直 $\iff$ 平分）。<span style="border-bottom: 1.5px dashed orange;">见弦作垂线，必构直角三角形</span> ($r^2 = d^2 + (\frac{l}{2})^2$)
* <span style="border-bottom: 1.5px dashed orange;">角的关系</span>：圆周角 = $\frac{1}{2}$ 圆心角。同弧等角。直径对直角
* <span style="border-bottom: 1.5px dashed orange;">切线判定</span>：
    * 有交点 $\to$ 连半径，证垂直
    * 无交点 $\to$ 作垂线，证半径

#### 3. 相似与变换

* <span style="border-bottom: 1.5px dashed orange;">基本模型</span>：A字型（平行/共角）、8字型（平行/蝴蝶）、母子相似（射影定理）
* <span style="border-bottom: 1.5px dashed orange;">面积比</span>：相似比为 $k$，周长比为 $k$，<span style="border-bottom: 1.5px dashed orange;">面积比为 $k^2$</span>
* <span style="border-bottom: 1.5px dashed orange;">将军饮马</span>：
    * 定直线+两定点：作对称，化折为直
    * 定长线段平移：先平移“桥”，再连线

#### 4. 三角函数（特殊角）

| 角度    | $30^\circ$   | $45^\circ$   | $60^\circ$   |
| :------ | :----------- | :----------- | :----------- |
| <span style="border-bottom: 1.5px dashed orange;">sin</span> | $1/2$        | $\sqrt{2}/2$ | $\sqrt{3}/2$ |
| <span style="border-bottom: 1.5px dashed orange;">cos</span> | $\sqrt{3}/2$ | $\sqrt{2}/2$ | $1/2$        |
| <span style="border-bottom: 1.5px dashed orange;">tan</span> | $\sqrt{3}/3$ | $1$          | $\sqrt{3}$   |

---

### 三、 函数

#### 1. 一次函数 $y=kx+b$

* $k$：斜率（正上负下）
* $b$：$y$ 轴截距
* <span style="border-bottom: 1.5px dashed orange;">面积</span>：与坐标轴围成面积 $S = \frac{b^2}{2|k|}$

#### 2. 反比例函数 $y=\frac{k}{x}$

* <span style="border-bottom: 1.5px dashed orange;">几何意义</span>：图象上任一点向两轴作垂线，矩形面积 $= |k|$，三角形面积 $= \frac{1}{2}|k|$
* <span style="border-bottom: 1.5px dashed orange;">大小比较</span>：必须限制在“同一象限”内比较

#### 3. 二次函数 $y=ax^2+bx+c$

* <span style="border-bottom: 1.5px dashed orange;">开口</span>：$a>0$ 向上（最小值），$a<0$ 向下（最大值）
* <span style="border-bottom: 1.5px dashed orange;">对称轴</span>：$x = -\frac{b}{2a}$ （左同右异）
* <span style="border-bottom: 1.5px dashed orange;">顶点</span>：$(h, k)$，直接设 $y=a(x-h)^2+k$
* <span style="border-bottom: 1.5px dashed orange;">交点</span>：与 $x$ 轴交点距离 $= \frac{\sqrt{\Delta}}{|a|}$

---

### 四、 必要的思想

#### 1. 动点与存在性

* <span style="border-bottom: 1.5px dashed orange;">等腰三角形存在性</span>：两圆一线（两圆心+一垂直平分线）
* <span style="border-bottom: 1.5px dashed orange;">直角三角形存在性</span>：直径圆（以定线段为直径画圆）
* <span style="border-bottom: 1.5px dashed orange;">平行四边形存在性</span>：对角线中点重合 ($x_1+x_3=x_2+x_4$)

#### 2. 面积最值（铅垂法）

* <span style="border-bottom: 1.5px dashed orange;">公式</span>：$S = \frac{1}{2} \cdot h_{\text{铅垂}} \cdot x_{\text{水平宽}}$
* <span style="border-bottom: 1.5px dashed orange;">操作</span>：用上方抛物线解析式减去下方直线解析式得到 $h$，配方求最大值

#### 3. “隐圆”出现征兆

* <span style="border-bottom: 1.5px dashed orange;">定点定长</span>：到定点距离等于定长 $\to$ 圆
* <span style="border-bottom: 1.5px dashed orange;">定弦定角</span>：对着定线段的张角不变 $\to$ 弧
* <span style="border-bottom: 1.5px dashed orange;">直角</span>：对着定线段的角是 $90^\circ$ $\to$ 以线段为直径的圆



---

## 数学素养水平测试卷快照


!!! tips "竞赛卷子"
    <center>
    ![801](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/801.png){style="zoom: 75%;"}
    ![802](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/802.png){style="zoom: 75%;"}
    ![901](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/901.png){style="zoom: 75%;"}
    ![902](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/902.png){style="zoom: 75%;"}
    </center>


