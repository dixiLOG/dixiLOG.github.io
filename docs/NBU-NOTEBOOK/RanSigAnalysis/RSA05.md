# 马尔可夫过程与泊松过程

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

> 区别于【<span style="border-bottom: 1.5px dashed orange;">平稳</span>随机过程】  
> 在概率论的[乘法公式](https://dixilog.github.io/NBU-NOTEBOOK/probabilityTheory/PT01/#_7)中有所提及

- <span style="border-bottom: 1.5px dashed orange;">马尔可夫过程</span>是发展很快、应用很广的一种重要的随机过程，它在信息处理、自动控制、数字计算方法、近代物理、生物（生灭过程）以及公用事业等方面皆有重要的应用
- <span style="border-bottom: 1.5px dashed orange;">独立增量过程</span>是一种特殊的马尔可夫过程，泊松（Poisson）过程和维纳（Wiener）过程是两个最重要的独立增量过程。电子系统中，它们是研究热噪声和散粒噪声的数学基础，具有重要的实用价值。
- 独立随机过程是一种很特殊的随机过程，它的重要应用就是<span style="border-bottom: 1.5px dashed orange;">高斯白噪声</span>。连续时间参数的独立随机过程是一种理想化的随机过程，它在数学处理上具有简单、方便的优点。

<table>
<tr>
<td rowspan="2">时间参数集<br/></td><td colspan="2">状态空间<br/></td></tr>
<tr>
<td>离散<br/></td><td>连续<br/></td></tr>
<tr>
<td>离散<br/></td><td>马尔可夫链<br/></td><td>马尔可夫序列<br/></td></tr>
<tr>
<td>连续<br/></td><td>可列马尔可夫过程<br/></td><td>马尔可夫过程<br/></td></tr>
</table>

---

## 马尔可夫过程

> 后无效性

---

## 马尔可夫序列

若对于任意的 n，随机序列 $\{{\rm X}({\rm n})\}$ 的条件分布函数满足

$$
F_{X}\left(x_{n}\mid x_{n-1},x_{n-2},\cdot\cdot\cdot{},x_{1}\right)=F_{X}\left(x_{n}\mid x_{n-1}\right)
$$

则此随机序列为<span style="border-bottom: 1.5px dashed orange;">马尔可夫序列</span>

对于连续型随机变量，则有概率密度函数

$$
f_{X}\left(x_{n}\mid x_{n-1},x_{n-2},\cdot\cdot\cdot{},x_{1}\right)=f_{X}\left(x_{n}\mid x_{n-1}\right)
$$

---

**性质**

> 了解一下

1. 其<span style="border-bottom: 1.5px dashed orange;">子序列</span>仍为马尔可夫序列
2. 序列的<span style="border-bottom: 1.5px dashed orange;">反方向序列</span>仍为马尔可夫序列

??? quote "这里插个证明，不是说是要记住，单纯留点印象"
    $$
    \begin{aligned}f_X\left(x_n\mid x_{n+1},x_{n+2},\cdots,x_{n+k}\right)&=\frac{f_X\left(x_n,x_{n+1},x_{n+2},\cdots,x_{n+k}\right)}{f_X\left(x_{n+1},x_{n+2},\cdots,x_{n+k}\right)}\\&=\frac{f_X\left(x_{n+k}\mid x_{n+k-1}\right)f_X\left(x_{n+k-1}\mid x_{n+k-2}\right)\cdots f_X\left(x_{n+1}\mid x_n\right)f_X\left(x_n\right)}{f_X\left(x_{n+k}\mid x_{n+k-1}\right)f_X\left(x_{n+k-1}\mid x_{n+k-2}\right)\cdots f_X\left(x_{n+2}\mid x_{n+1}\right)f_X\left(x_{n+}\right.}\\&=\frac{f_X\left(x_{n+1}\mid x_n\right)f_X\left(x_n\right)}{f_X\left(x_{n+1}\right)}=\frac{f_X\left(x_{n+1},x_n\right)}{f_X\left(x_{n+1}\right)}=f_X\left(x_n\mid x_{n+1}\right)\end{aligned}
    $$

3. 此序列的条件数学期望满足

$$
E[X_{n}\mid x_{n-1},\cdots,x_{1}]=E[X_{n}\mid x_{n-1}]
$$

此外，若还满足

$$
E[X_{n}\mid X_{n-1},\cdot\cdot\cdot\,,X_{1}]=X_{n-1}
$$

则称此序列为【鞅】（公平游戏，应用于金融工程之中，但与马序列无显然关联）

4. 后无效性（若现在已知，则未来与过去无关）
5. 多重马尔可夫序列

即多阶序列，如

$$
F_{X}\left(x_{n}\mid x_{n-1},x_{n-2},\cdot\cdot\cdot{},x_{1}\right)=F_{X}\left(x_{n}\mid x_{n-1},x_{n-2}\right)
$$

为 2 重马尔可夫序列

6. 齐次马尔可夫序列

> 与 n 无关的马尔可夫序列

$$
f_{X}\left(x_{n}\mid X_{n-1}=x_{0}\right)=f_{X}\left(x\mid x_{0}\right)
$$

7. 平稳马尔可夫序列

如果一个马尔可夫序列是齐次的，并且所有的随机变量 $\rm{X_{n}}$ 具有相同的概率密度，则称马尔可夫序列为平稳的

8. 切普曼一柯尔莫哥洛夫（Chapman-KoJMoropoB）方程

若一个马尔可夫序列的转移概率密度满足

$$
f_{\chi}\left(x_{n}\mid x_{s}\right)=\int_{-\infty}^{\infty}f_{X}\left(x_{n}\mid x_{r}\right)f_{X}\left(x_{r}\mid x_{s}\right)d x_{r}\,
$$

其中 $n>r>s$ 为任意整数，则称该方程为切普曼一柯尔莫哥洛夫方程

9. 如果一个$\rm n$维矢量随机序列 $\rm\{X(n)\}$ ，既是高斯序列，又是马尔可夫序列，则称它为高斯一马尔可夫序列

---

## 马尔可夫链

!!! success "一步、N 步转移概率矩阵和绝对概率概念及其性质"

> 可浅浅参考的博文：[马尔可夫模型](https://blog.csdn.net/qq_27825451/article/details/100117715)

时间和状态都是 **离散** 的马尔可夫过程称为马尔可夫链，记为

$$
P\left\{X_{m+k}=a_{j}\mid X_{m}=a_{i},X_{m-1}=a_{p},\cdot\cdot\cdot{},X_{1}=a_{q}\right\}=P\left\{X_{m+k}=a_{j}\mid X_{m-1}=a_{i}\mid\cdot\cdot\mid X_{m-1}=0\right\}
$$

**转移概率**

$$
p_{i j}\left(m,m+k\right)=P\left\{X_{m+k}=a_{j}\mid X_{m}=a_{i}\right\}
$$

> 表现为【`m` 时刻下为 `ai` 事件，而 `m+k` 时刻下转移到 `aj` 事件的概率】  

> 下面统统的都是<span style="border-bottom: 1.5px dashed orange;">齐次马链</span>，即与 m 无关

---

### 一步转移概率矩阵

> 即只跳一次，表达式为

$$
\mathbf{P}={\left[\begin{array}{l l r r}{p_{11}}&{p_{12}}&{\cdots}&{p_{1N}}\\ {p_{21}}&{p_{22}}&{\cdots}&{p_{2N}}\\ {\vdots}&{\vdots}&{\vdots}&{\vdots}\\ {p_{N1}}&{p_{N2}}&{\cdots}&{p_{N N}}\end{array}\right]}
$$

很好理解叭

### 一步转移概率矩阵 de 性质

> 似曾相识？

- $0\leqslant p_{i j}\leqslant1$  
- $\sum_{j=1}^{N}p_{i j}=1$ ，即每一行求和为 1

---

### n 步转移概率矩阵

> 与一步相比，是走了 `n` 步转移到 `aj`

$$
p_{i j}\left(n\right)=p_{i j}\left(m,m+n\right)=p\left(X_{m+n}=a_{j}\mid X_{m}=a_{i}\right)\quad,\quad n\geq1
$$

转移概率矩阵为

$$
\mathbf{P}\left(n\right)=\left[\begin{array}{c c c c}{p_{11}\left(n\right)}&{p_{12}\left(n\right)}&{\cdots\cdot}&{p_{1N}\left(n\right)}\\ {p_{21}\left(n\right)}&{p_{22}\left(n\right)}&{\cdots}&{p_{2N}\left(n\right)}\\ {\vdots}&{\vdots}&{\vdots}&{\vdots}\\ {p_{N1}\left(n\right)}&{p_{N2}\left(n\right)}&{\cdots}&{p_{N N}\left(n\right)}\end{array}\right]
$$

当$\ n\!=\!1$时退化回一步转移概率矩阵，另规定

$$
p_{ij}\left(0\right)=p_{ij}\left(m,m\right)=\delta_{ij}=\begin{cases}1,&i=j\\0,&i\neq j&&\end{cases}
$$

### n 步转移概率矩阵 de 性质

- $0\leqslant p_{i j}(n)\leqslant1\;,\;\sum_{j=1}^{N}p_{i j}\;(n)=1$
- $p_{i j}\left(n\right)=p_{i j}\left(l+k\right)=\sum_{r=1}^{N}p_{i r}\left(l\right)p_{r j}\left(k\right),\quad n=l+k$

此乃大名鼎鼎的 `C-K方程`，下面是推导过程

> 咳，这个系重点嘞

???+ question "推导过程"

    > MVP： 【全概公式】
    > 等式左边：
    
    $$
    p_{ij}\left(n\right)=p_{ij}\left(l+k\right)=P\left\{X_{m+l+k}=a_j\mid X_m=a_i\right\}=\frac{\color{red}P\left\{X_m=a_i,X_{m+l+k}=a_j\right\}}{P\left\{X_m=a_i\right\}}
    $$
    
    等式右边：
    
    $$
    {\displaystyle\sum_{r=1}^{N}p_{r j}\left(k\right)p_{i r}\left(l\right)=\sum_{r=1}^{N}P\Big\{X_{m+l+k}=a_{j}\ \big|\ X_{m}=a_{i},X_{m+l}=a_{r}\Big\}\cdot P\Big\{X_{m+l}=a_{r}\ \big| \ X_{m}=a_{i}\Big\}}
    $$
    
    进一步展开条件概率
    
    $$
    =\sum_{r=1}^{N}{\frac{P\left\{X_{m}=a_{i},X_{m+l+k}=a_{j},X_{m+l}=a_{r}\right\}}{P\left\{X_{m}=a_{i},X_{m+l}=a_{r}\right\}}}\cdot{\frac{P\left\{X_{m}=a_{i},X_{m+l}=a_{r}\right\}}{P\left\{X_{m}=a_{i}\right\}}}
    $$
    
    化简一下
    
    $$
    ={\frac{\color{red}\sum_{r=1}^{N}P\{X_{m}=a_{i},X_{m+l}=a_{r},X_{m+l+k}=a_{j}\}}{P\{X_{m}=a_{i}\}}}
    $$
    
    那么左右相等的关键就是，证明
    
    $$
    P\left\{X_{m}=a_{i},X_{m+l+k}=a_{j}\right\}=\sum_{r=1}^{N}P\{X_{m}=a_{i},X_{m+l}=a_{r},X_{m+l+k}=a_{j}\}
    $$
    
    巧了，这就是<span style="border-bottom: 1.5px dashed orange;">全概公式</span>（把所有可能的 `r` 都求了一遍）
    故左右相等，证毕
    
    > 而它的可迭代性又将揭开另一个重要滴性质

- $p_{i j}(n)=\sum_{r=1}^{N}p_{i r}(1)p_{r j}(n-1)=\sum_{r=1}^{N}p_{i r}p_{r j}(n-1)$
- 从矩阵角度，有 $\mathbf{P}(n)=\mathbf{P}(1)\mathbf{P}(n-1)=\cdots=\mathbf{P}^{n}$

> <span style="border-bottom: 1.5px dashed orange;">n 步转移概率矩阵</span>等于一步转移概率矩阵的 `n` 次方

---

### 初始概率与绝对概率

在马尔可夫链中，**初始概率用于定义链的起始分布**，而绝对概率用于描述长期链中任意时刻的事件概率

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/RMS7bPYMioLOhxxR0jvcPEFinYc.png)

!!! success "马氏链的任意有限维分布完全可以由<span style="border-bottom: 1.5px dashed orange;">初始分布</span>和<span style="border-bottom: 1.5px dashed orange;">一步转移概率矩阵</span>所确定"

---

!!! exaple "例 | 概念题"

    > 含有 **反射壁** 的转移概率矩阵
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Ogsabtt0foBWORxSRimcbnaNnKb.png)
    
    质点 S 游动的转移概率矩阵为
    
    $$
    P={\left[\begin{array}{l l l l l l l}{0}&{1}&{0}&{\cdots}&{0}&{0}&{0^{7}}\\ {q}&{0}&{p}&{\cdots}&{0}&{0}&{0}\\ {0}&{q}&{0}&{\cdots}&{0}&{0}&{0}\\ {\vdots}&{\vdots}&{\vdots}&{\ddots}&{\vdots}&{\vdots}&{\vdots}\\ {0}&{0}&{0}&{\cdots}&{0}&{p}&{0}\\ {0}&{0}&{0}&{\cdots}&{q}&{0}&{p}\\ {0}&{0}&{0}&{\cdots}&{0}&{1}&{0}\end{array}\right]}
    $$
    
    > 除了反射壁，还存在吸收壁，其概率转移矩阵为
    >
    > $$
    > \begin{array}{r}{P=\left[\begin{array}{l l l l l l l}{1}&{0}&{0}&{\cdots}&{0}&{0}&{0^{-}}\\ {q}&{0}&{p}&{\cdots}&{0}&{0}&{0}\\ {0}&{q}&{0}&{\cdots}&{0}&{0}&{0}\\ {\vdots}&{\vdots}&{\vdots}&{\ddots}&{\vdots}&{\vdots}&{\vdots}\\ {0}&{0}&{0}&{\cdots}&{0}&{p}&{0}\\ {0}&{0}&{0}&{\cdots}&{q}&{0}&{p}\\ {0}&{0}&{0}&{\cdots}&{0}&{0}&{1}\end{array}\right]}\end{array}
    > $$

---

!!! exaple "例 | 选填"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/MaeJbxHepoWzYvxK8iocM9I6nxc.png)
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/ZyABbaMXHo0Kr1xdUefcRCoenxd.png)

---

> 俩个不考的重要知识点

- 马氏链的平稳分布

若一个马氏链的概率分布 $P\{X=a_{j}\}=p_{j}$ 满足

$$
p_{j}=\sum_{i\in I}p_{i}p_{i j}\quad,\quad j\in I
$$

$\text{其中 }p_j\geq0,\sum_{j\in I}p_j=1\text{成立。则称}\{p_j\}=\{p_1,p_2,\cdots,p_N\}\text{为该马氏链的平稳分布}$

- 马氏链的便利性

如果一个齐次马氏链对于一切状态 `i` 和 `j`,存在不依赖于 `i` 的极限，即

$$
\operatorname*{lim}_{n\to\infty}p_{i j}\left(n\right)=p_{j}
$$

则称此马氏链具有遍历性。这里的 $p_{i j}(n)$ 为此链的 `n` 步转移概率。

---

!!! exaple "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Qu2NbZrnToEWDJxGsevc1296nrb.png)

---

!!! exaple "例 | 具有吸收壁和反射壁的随机游动"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/LPzZbK0iPo6TfbxyCHmcAO4bn3g.png)
    
    $$
    \pmb{{P}}=\left[\begin{array}{c c c c}{1}&{0}&{0}&{0}\\ {1/3}&{1/3}&{1/3}&{0}\\ {0}&{1/3}&{1/3}&{1/3}\\ {0}&{0}&{1}&{0}\end{array}\right]
    $$

!!! success "除了转移概率矩阵的其他表达方式"

- **状态转换图**
- **函数表达式**

!!! info ""
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/PVm1bo3AfoGatNx8TKic9BUHnpd.png)



!!! exaple "例 | 比较重要的一题，特别改编"

    $\begin{aligned}&\text{设}\{X_n,n{\in}T\}\text{是一个马尔可夫链,其状态空}\text{间 }I=\{a,b,c\}\text{,转移矩阵为}\end{aligned}$
    
    $P=\begin{bmatrix}1/2&1/4&1/4\\2/3&0&1/3\\3/5&2/5&0\end{bmatrix}$
    
    $\begin{aligned}&(1)P\{X_{1}=b,X_{2}=c,X_{3}=a,X_{4}=c|X_{0}=c\}\\&(2)P\{X_{n+2}=c|X_{n}=b\}\end{aligned}$
    
    1. 根据马氏链，根据<span style="border-bottom: 1.5px dashed orange;">初始状态与一步转移矩阵</span>可得
    
    $$
    \begin{array}{r l}&{P\{X_{1}=b,X_{2}=c,X_{3}=a,X_{4}=c|X_{0}=c\}}\\ &{~=P\{X_{0}=c,X_{1}=b,X_{2}=c,X_{3}=a,X_{4}=c\}/P\{X_{0}=c\}}\\ &{~=P\{X_{4}=c\Big|X_{3}=a\}\cdot P\{X_{3}=a\Big|X_{2}=c\}\cdot P\{X_{2}=c\Big|X_{1}=b\}}\\ &{~\cdot~P\{X_{1}=b|X_{0}=c\}\cdot P\{X_{0}=c\}/P\{X_{0}=c\}}\\ &{~=P_{a c}\cdot P_{c a}\cdot P_{b c}\cdot P_{c b}}\end{array}
    $$
    
    > 即从初始到终点，每次走一步
    > 这里的初始状态已定，所以不需要全概（见下一个例题）
    >
    > ---
    >
    > 若把 X3 删除，就要把最后改为$P_{c c}^{(2)}\cdot P_{b c} \cdot P_{c b}$
    
    2. 2 步转移矩阵
    
    $$
    \begin{gathered}P^{(2)}=P^2=\begin{bmatrix}\frac{17}{30}&\frac{9}{40}&\frac{5}{24}\\\frac{8}{15}&\frac{3}{10}&\frac{1}{6}\\\frac{17}{30}&\frac{3}{20}&\frac{17}{90}\end{bmatrix}\\P\{X_{n+2}=c|X_n=b\}\\=P_{bc}^{(2)}=\frac{1}{6}\end{gathered}
    $$
    
    ---
    
    【改】
    
    规定初始分布
    
    <table>
    <tr>
    <td>X0<br/></td><td>a<br/></td><td>b<br/></td><td>c<br/></td></tr>
    <tr>
    <td>P(x)<br/></td><td>Pa<br/></td><td>Pb<br/></td><td>Pc<br/></td></tr>
    </table>
    
    求 $P\{X_{2}=b,X_{4}=c\}$
    
    利用全概公式
    
    即分别求从{a b c}开始经过两步到 b，再经过两步到 c 的三种情况概率之和
    
    $=P(a)\cdot P_{a b}^{(2)}\cdot P_{b c}^{(2)}+P(b)\cdot P_{b b}^{(2)}\cdot P_{b c}^{(2)}+P(c)\cdot P_{c b}^{(2)}\cdot P_{b c}^{(2)}$



!!! example "例 | 求概率分布、期望"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/HnkabYzmuoTggRxkRcicGiOdnIe.png)
    
    已知初始分布矩阵，求两步转移矩阵再相乘
    
    $$
    \begin{aligned}P^{2}&=P\cdot P\\&=\begin{bmatrix}0.5&0.5&0\\0&0.5&0.5\\0.5&0&0.5\end{bmatrix}\cdot\begin{bmatrix}0.5&0.5&0\\0&0.5&0.5\\0.5&0&0.5\end{bmatrix}\\&=\begin{bmatrix}0.25&0.5&0.25\\0.25&0.25&0.5\\0.5&0.25&0.25\end{bmatrix}\end{aligned}
    $$
    
    即得 X(2)的概率分布
    
    $$
    \begin{aligned}[p\{x(2)\}]&=[p\{x(0)\}]\cdot P^2\\&=[1,0,0]\cdot\begin{bmatrix}0.25&0.5&0.25\\0.25&0.25&0.5\\0.5&0.25&0.25\end{bmatrix}\\&=\begin{bmatrix}0.25&,&0.5&,&0.25\end{bmatrix}\end{aligned}
    $$
    
    【改—求期望】
    
    $$
    E[X(2)]=0*0.25+1*0.5+0.25*2=1
    $$

!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/OZ9rbBoU6orq4WxtBj1cUKJ2n2V.png)

---

## 独立增量过程

设有一个随机过程 $X(t),t\in T$,如果对任意的时刻 $0\leqslant t_0<t_1<t_2<\cdots<t_n<b$

过程的增量$X(t_1)-X(t_0)、X(t_2)-X(t_1)、\cdots、X(t_n)-X(t_{n-1})$是相互独立的随机变量

则称$X(t)$为<span style="border-bottom: 1.5px dashed orange;">独立增量过程，又称为可加过程</span>

> 是一种特殊的马尔科夫过程

其中，以<span style="border-bottom: 1.5px dashed orange;">泊松过程与维纳过程</span>(布朗运动过程)最为典型，广泛应用于计数问题，故又称为计数过程

> [0-1 分布][二项分布][泊松分布]是用于描述绘独立增量过程的三种常见分布

### 计数过程的定义

某事件$A$在$[t_{0},t)$内出现的总次数所组成的过程$\{X(t),t\geqslant t_{0}\geqslant0\}$称为计数过程

计数过程满足：

1. $X(t)>0$
2. 若存在 $\boldsymbol{t}_{1},\boldsymbol{t}_{2}$ 且 $t_{2}>t_{1}$ , 则 $X\left(t_{2}\right)\geq X\left(t_{1}\right)$
3. 当 $t_{2}>t_{1}$ 时, $X\left(t_{2}\right)-X\left(t_{1}\right)$ 代表在时间间隔$(t_{2},t_{1})$内事件$A$出现的次数

---

## 泊松过程

!!! success "泊松过程分布表达式"

满足下列条件:

1. $X(0)=0$
2. 独立增量过程，不同时刻之间独立
3. (平稳性)在任一长度为 `t` 的区间中，事件 `A` 发生的次数服从参数$\lambda>0$的泊松分布
   即对任意$s,t\geq0$,有

$$
P\{X(t+\tau)-X(\tau)=n\}=\frac{(\lambda t)^{n}}{n!}e^{-\lambda t},\quad n=0,1,\cdots
$$

进一步得

$$
P\{X(t)=n\}=\frac{(\lambda t)^{n}}{n!}e^{-\lambda t},\quad n=0,1,2,\cdots
$$

> 与泊松分布相比，多了 `t`

---

$$
\text{对于充分小的 }\Delta t,\text{在}[t,t+\Delta t)\text{ 内出现事件一次的概率为}\\P_{1}\left(t,t+\Delta t\right)=P\left\{X\left(t,t+\Delta t\right)=1\right\}=\lambda\Delta t+0\left(\Delta t\right)
$$

> 即发生两次及以上的概率为无穷小（计数过程）  
> 注意，`t` 是连续的（可以有 0.5），而 n 是离散的

!!! quote "说人话"

    泊松分布描述的是单位时间或单位区域内随机事件的计数, 假设以下条件满足 :
    
    1. **独立性**：事件的发生在不同时段内相互独立
    2. **均匀性**：事件发生的概率在相同时间段内保持恒定
    3. **不可分性**：事件在极短的时间间隔内至多发生一次

---

### 统计特征

> 记住均值、方差和相关函数的结果  
> 做到【应推尽推】🤌

> 核心是利用 **泰勒级数**

**期望**

???+ question "求泊松过程的期望"

    由离散随机变量期望定义与概率分布函数得
    
    $$
    E\left[X\left(t\right)\right]=\sum_{k=0}^{\infty}{k\cdot P\left\{X\left(t\right)=k\right\}}=\sum_{k=0}^{\infty}{k\frac{\left(\lambda t\right)^{k}}{k!}e^{-\lambda t}}=e^{-\lambda t}\sum_{k=0}^{\infty}{k\frac{\left(\lambda t\right)^{k}}{k!}\left(\lambda e^{-\lambda t}\right)}.
    $$
    
    已知 `e` 的麦克劳林级数为
    
    $$
    e^{x}=\sum_{n=0}^{\infty}{\frac{x^{n}}{n!}}=1+x+{\frac{x^{2}}{2!}}+{\frac{x^{3}}{3!}}+\cdots+{\frac{x^{n}}{n!}}+\cdots
    $$
    
    故需将求和项转化。不难观察到原式在 `k=0` 下为 `0`，可从第一项开始求和，即
    
    $$
    e^{-\lambda t}\sum_{k=0}^{\infty}k{\frac{\left(\lambda t\right)^{k}}{k!}}=e^{-\lambda t}\sum_{\color{red}k=1}^{\infty}k{\frac{\left(\lambda t\right)^{k}}{k!}}
    $$
    
    为保证与 e 级数形式一致，令$j=k-1$，有
    
    $$
    e^{-{\lambda t}}\sum_{k=1}^{\infty}k{\frac{({\lambda t})^{k}}{k!}}\,{\frac{k=j+1}{\cdots}}\,e^{-{\lambda t}}\sum_{j=0}^{\infty}(j+1){\frac{({\lambda t})^{j+1}}{(j+1)!}}={\lambda t}e^{-{\lambda t}}\sum_{j=0}^{\infty}{\frac{({\lambda t})^{j}}{j!}}={\lambda t}e^{-{\lambda t}}
    $$

故最后得泊松过程期望为

$$
\lambda t
$$

进一步，过程增量 $[X(t_{2})-X(t_{1})]$ 期望为

$$
E{\Big[}X{\big(}t_{2}{\big)}-X{\big(}t_{1}{\big)}{\Big]}=\sum_{k=0}^{\infty}k P{\Big\{}X{\big(}t_{1},t_{2}{\big)}=k{\Big\}}=\lambda{\big(}t_{2}-t_{1}{\big)}
$$

**均方值与方差**

> 同样的，往往先算均方值

???+ question "求泊松过程的均方值与方差"

    根据定义有
    
    $$
    E\left[X^{2}\left(t\right)\right]=\sum_{k=0}^{\infty}k^{2}\cdot P\left\{X^{2}\left(t\right)=k^{2}\right\}=\sum_{k=0}^{\infty}k^{2}\cdot{\frac{\left(\lambda t\right)^{k}}{k!}}e^{-\lambda t}
    $$
    
    $k^{2}$ 为二阶，为与阶乘相消，考虑转为 $k^{2}\to k(k-1)$ 。则可对原式加一项减一项
    
    > 结合期望的推导逻辑，此处不再赘述
    
    $$
    \begin{array}{c}{{\displaystyle\sum_{k=0}^{\infty}k^{2}\cdot\frac{\left(\lambda t\right)^{k}}{k!}e^{-\lambda t}=e^{-\lambda t}\left[\displaystyle\sum_{k=0}^{\infty}k\left(k-1\right)\frac{\left(\lambda t\right)^{k}}{k!}+\displaystyle\sum_{k=0}^{\infty}k\cdot\frac{\left(\lambda t\right)^{k}}{k!}\right]}}\\ {{=e^{-\lambda t}\left[\left(\lambda t\right)^{2}\displaystyle\sum_{k=2}^{\infty}\frac{\left(\lambda t\right)^{k-2}}{\left(k-2\right)!}+\lambda t\displaystyle\sum_{k=1}^{\infty}\frac{\left(\lambda t\right)^{k-1}}{\left(k-1\right)!}\right]}}\end{array}
    $$

最后有

$$
\lambda^{2}t^{2}+\lambda t
$$

则方差为

$$
D\Big[X\left(t\right)\Big]=E\Big[X\left(t\right)^{2}\Big]-E^{2}\Big[X\left(t\right)\Big]=\lambda^{2}t^{2}+\lambda t-\Big(\lambda t\Big)^{2}=\lambda t
$$

同理得到过程增量的均方值与方差(就是 $t\rightarrow t_{2}-t_{1}$ )

$$
\begin{array}{c}{E\left\{\left[X\left(t_{2}\right)-X\left(t_{1}\right)\right]^{2}\right\}=\lambda^{2}\left(t_{2}-t_{1}\right)^{2}+\lambda\left(t_{2}-t_{1}\right)}\\ {D\left[X\left(t_{2}\right)-X\left(t_{1}\right)\right]=\lambda\left(t_{2}-t_{1}\right)}\end{array}
$$

**相关函数与协方差**

???+ question "求泊松过程的相关函数与协方差"

    根据定义，有
    
    $$
    R_{X}(s,t)=E[X(s)X(t)]
    $$
    
    **令`s<t`,则加一项减一项`X(s)`**
    
    $$
    \begin{aligned}&{=E[X(s)(X(t)-X(s)+X(s))]}\\ &{=E[X(s)(X(t)-X(s))]+E[(X(s))^{2}]}\end{aligned}
    $$
    
    独立增量过程，可拆，得
    
    $$
    \begin{array}{c}{{=E[X(s)]E[(X(t)-X(s))]+E[(X(s))^{2}]=\lambda s\lambda(t-s)+\lambda s+(\lambda s)^{2}=\lambda s}}\\ {{=\lambda^{2}s t+\lambda s}}\end{array}
    $$
    
    若 `s>t` 则第二项换为 $\lambda t$

故得出结论

$$
\boxed{R_{X}(s,t)=\lambda^{2}s t+\lambda\operatorname*{min}(s,t)}
$$

得到协方差 `C` 为

$$
C_{X}(s,t)=\lambda\operatorname*{min}(s,t)
$$

---

!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/QVUTbXZMko7tNRxdmNgccVion1f.png)

!!! example "例 | 曾经考过"

    !!! success "记住结论就好"
    
    设 $X_{1}(t)$ 和 $X_{2}(t)$ 是分别具有参数 $\lambda_{1}$ 和 $\lambda_{2}$ 的相互独立的泊松过程, 证明：
    
    $Z(t)=X_{1}(t)-X_{2}(t)$ 不是泊松过程
    
    $Y(t)=X_{1}(t)+X_{2}(t)$ 是具有参数 $\lambda_{1}+\lambda_{2}$ 的泊松过程
    
    **第一问**
    
    $$
    \begin{aligned}&{E[Z\left(t\right)]=E\left(X_{1}\left(t\right)-X_{2}\left(t\right)\right)=E X_{1}\left(t\right)-E X_{2}\left(t\right)=(\lambda_{1}-\lambda_{2})t}\\ &{D[Z\left(t\right)]=D X_{1}(t)+D X_{2}(t)=(\lambda_{1}+\lambda_{2})t}\end{aligned}
    $$
    
    由于$E Z(t)\neq D Z(t)$，故$Z(t)$不是泊松过程
    
    **第二问**
    
    > 完全的面向定义
    >
    > - $x(0){=}0$  
    > - 独立增量过程  
    > - 满足泊松分布（利用 $(1+x)^{n}$ 展开式）  
    !!! info ""
    
        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/HQKibol0OohtgdxVRNScBEsun3b.png)

---

## 泊松过程的应用

!!! example "例 | 泊松过程的定义"

    令 `X(t)` 表示$[0,t]$时间段内迁入某地区的<span style="border-bottom: 1.5px dashed orange;">居民户数</span>,每户居民的人口数分布如下:
    
    $$
    \begin{array}{cccc}\text{每户人口数}&2&3&4\\\text{分布概率}&1/4&1/2&1/4\end{array}
    $$
    
    $$
    \text{令Y(t)表示}[0,t]\text{ 时间段内迁入某地区的居民人口数}\\ \text{试判断}\{\mathrm{X}(\mathbf{t}),\mathbf{t}>\mathbf{0}\},\{\mathrm{Y}(\mathbf{t}),\mathbf{t}>\mathbf{0}\}\text{ 是否是泊松过程}
    $$
    
    > 对于车站人流量、排队、人口迁移，都是【不可分】的(因为极短时间内多户同时迁入的概率趋于零)
    
    故显然,`X(t)` 满足泊松过程的定义要求
    
    但是,对于 $\bf Y(t)$ ,在时间段内 $[\mathbf{t},\mathbf{t}+\mathbf{h}],h\rightarrow0$
    
    若 $p\{X(t+h)-X(t)=1\}=\lambda h$
    
    > 我 ~~猜猜看~~ 推断是极短时间内，只可能迁入一户，故短时间迁入一户的概率就是均值
    
    那么计算其【不可分性】，即在很短时间内，同时迁入俩人以上的概率为<span style="border-bottom: 1.5px dashed orange;">高阶无穷小</span>
    
    而实际上有
    
    $$
    \begin{aligned}&{p\{Y(t+h)-Y(t)=2\}=\frac{1}{4}\lambda h}\\& {p\{Y(t+h)-Y(t)=3\}=\frac{1}{2}\lambda h}\\ &{p\{Y(t+h)-Y(t)=4\}=\frac{1}{4}\lambda h}\end{aligned}
    $$
    
    故 $\{\mathbf{Y}(\mathbf{t}),\mathbf{t}>=\mathbf{0}\}$ 不是泊松过程


!!! example "例"

    设电话总机每分钟接到电话呼叫数 $X(t)$ 是具有强度为 λ 的泊松过程，求
    
    (1)求两分钟内接到 3 次呼叫的概率
    
    (2)求第二分钟内收到第 3 次呼叫的概率(一共就 3 次)
    
    (3)两分钟内收到呼叫的平均数
    
    > 回顾一下
    >
    > $P\{X(t+\tau)-X(\tau)=n\}=\frac{(\lambda t)^{n}}{n!}e^{-\lambda t},\quad n=0,1,\cdots$
    >
    > $P\{X(t)=n\}=\frac{(\lambda t)^{n}}{n!}e^{-\lambda t},\quad n=0,1,2,\cdots$
    
    !!! success "填空题"
    
    > 抓住泊松过程不同增量内是独立的
    
    (1) $P\left(X\left(t+2\right)-X\left(t\right)=3\right)=\frac{\left(2\lambda\right)^{3}}{3!}\mathrm{e}^{-2\lambda}=\frac{4}{3}\lambda^{3}\mathrm{e}^{-2\lambda}$
    
    (2)$P=\sum_{k=0}^2P(X(1)-X(0)=k,X(2)-X(1)=3-k)=\sum_{k=0}^2P\left(X\left(1\right)-X\left(0\right)=k\right)P\left(X\left(2\right)-X\left(1\right)=3-k\right)$
    
    (3) 平均次数, 即求均值 : $E[X(2)]=2\lambda$



!!! example "例"

    顾客到达某商店服从参数 $\lambda=4$ 人/小时的泊松过程,
    
    已知商店上午 $9:00$开门, 试求到${9:30}$ 时
    
    仅到 `1` 位顾客，而 $11:30$ 时总计已到达 `5` 位顾客的概率
    
    > 注意如何基于独立性质拆分
    
    设$X\left(t\right)$表示在时间$t$时到达的顾客数
    
    $$
    \begin{aligned}&P\left(X\left(0.5\right)=1,X\left(2.5\right)=5\right)\\&=P\left(X\left(0.5\right)=1,X\left(2.5\right)-X\left(0.5\right)=4\right)\\&=P\left(X\left(0.5\right)=1\right)P\left(X\left(2\right)=4\right)\\&=\frac{\left(4\times0.5\right)^1}{1!}e^{-4\times0.5}\cdot\frac{\left(4\times2\right)^4}{4!}e^{-4\times2}\\&\approx0.0155\end{aligned}
    $$
    
    【改】
    
    $$
    \begin{aligned}&\text{求11:30到达人数>9:30到达人数的概率}\\&\text{等效为【9:30-11:30内无人到达的概率】}\end{aligned}
    $$


!!! example "例"

    已知寻呼台在时间区间$(0,t)$内收到的呼唤次数$\{\mathrm{N}\left(t\right),t\geq0\}$是 `poisson过程`,平均每分钟收到 `2` 次呼唤
    
    (1) 求 2 分钟内收到 3 次呼唤的概率
    
    (2) 已知时间区间[0,3)内收到 5 次呼唤,求时间区间[0,2)内收到 3 次呼唤的概率
    
    拆成独立的时间间隔
    
    $(1)P\{N(t+2)-N(t)=3\}=P\{N(2)=3\}={\frac{4^{3}}{3!}}e^{-4}={\frac{32}{3}}e^{-4}$
    
    $(2)P\{N(2)-N(0)=3|N(3)-N(0)=5\}=P\{N(2)=3|N(3)=5\}$
    
    $\begin{gathered}=\frac{P\{N\left(2\right)=3,N\left(3\right)=5\}}{P\{N\left(3\right)=5\}}=\frac{P\{N\left(2\right)=3,N\left(3\right)-N\left(2\right)=2\}}{P\{N\left(3\right)=5\}}\\=\frac{P\left\{N\left(2\right)=3\right\}\bullet P\left\{N\left(3\right)-N\left(2\right)=2\right\}}{P\left\{N\left(3\right)=5\right\}}=\frac{4^{3}e^{-4}\bullet\frac{2^{2}}{2!}e^{-2}}{\frac{6^{5}}{\pi!}e^{-6}}=\frac{80}{243}\end{gathered}$
