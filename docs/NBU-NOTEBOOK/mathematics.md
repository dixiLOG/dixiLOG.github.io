# 高数速通

<div id="progress-container">
  <div id="progress-bar"></div>
</div>
线代与高数，都是通信大厦的基石，必要的概念与知识图谱还是需要熟稔于心的

本文的逻辑顺序是：函数、极限与连续，微分，积分，级数，多元函数，微分方程

## 函数、极限与连续

微积分的一切都始于对函数行为的精细刻画，而极限正是描述这种行为的语言

### 函数

首先，我们需要一个载体来描述`AtoB`的映射，并统一`A`（定义域）与`B`（值域）的称呼

$$\begin{aligned}&\text{设}D\text{ 是一个非空实数集,称映射 }f:D\to\mathbb{R}\text{ 为定义在 }D\text{ 上的一个实值函数,}\\& \text{记为 }y=f(x),x\in D \text{。其中}D\text{ 称为定义域。}\end{aligned}$$

### 极限

无论你要求函数值$f(x)$离目标`A`有多近 (任意小的$\epsilon$)，我总能找到一个以$x_0$为中心的足够小的范围 (存在一个 $\delta$)，只要`x`在这个范围内，$f(x)$就能满足你的精度要求

$$\lim_{x\to x_0}f(x)=A\Longleftrightarrow\forall\epsilon>0,\exists\delta>0,\text{ 当 }0<|x-x_0|<\delta\text{时,恒有}\left|f(x)-A\right|<\epsilon$$

- 两个重要极限：`Sa`函数和`叽里咕噜`函数

$$\lim_{x\to0}\frac{\sin x}{x}=1 \quad \lim_{x\to\infty}(1+\frac{1}{x})^x=e$$

### 连续

连续意味着光滑，至少是周期内有限个间断点

$$\text{若}\lim_{x\to x_0}f(x)=f(x_0)\text{,则称函数 }f(x)\text{ 在点 }x_0\text{ 连续}$$

当然，需要满足极限存在这一前提，即左连续等于右连续

$$\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)$$

---

## 导数与微分

导数用于描述瞬时变化量：

$$f^{\prime}(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$$

微分则是希望利用局部线性近似某点值

$$\Delta y=f^{\prime}(x_0)\Delta x+o(\Delta x)$$

### 费马引理

可导函数在极值点的导数为0

### 罗尔中值定理

若定义域内$\exists a,b$，使得`[a,b]`连续，`(a,b)`可导，且有$f(a) = f(b)$，则其中必然有一点，使得

$$f^{\prime}(\xi)=0$$

这是费马引理的推广，同时也是拉格朗日乘子法（偏导为0）的基础

#### 拉格朗日乘子法

将有约束条件转为无约束条件

例如，当

$$\min f(x,y)\quad\mathrm{s.t.}~g(x,y)=0$$

结果不再是令梯度为0的点，即

$$\nabla f(\mathbf{x}_0)=\mathbf{0}$$

是错误的

若希望满足条件，则约束函数与目标函数必须相切，故法向量方向共线，即

$$\nabla f(x,y)=\lambda\nabla g(x,y)$$

这里的系数便是拉格朗日乘子法

所以我们只需要构造拉格朗日函数

$$L(\mathbf{x},\lambda)=f(\mathbf{x})+\lambda g(\mathbf{x})$$

然后解

$$\begin{cases}\nabla_\mathbf{x}L(\mathbf{x},\lambda)=0\\g(\mathbf{x})=0&\end{cases}$$

即可得到结果

![图片展示了拉格朗日乘子法中目标函数与约束函数相切的几何关系。图中有两条曲线，一条是目标函数f(x,y)的等高线，另一条是约束函数g(x,y)的等高线。在交点P处，目标函数的梯度（蓝箭头）与约束函数的梯度（绿箭头）方向共线，即满足$$\\nabla f(x,y)=\\lambda\\nabla g(x,y)$$，表明在满足约束条件g(x,y)=0时，目标函数f(x,y)取得极值。此图直观呈现了拉格朗日乘子法中法向量方向共线的原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/authcode-1ee03debbe.png)

### 拉格朗日中值定理

同样上述条件下，有

$$\frac{f(b)-f(a)}{(b-a)}=f^{\prime}(\xi),\quad\xi\in(a,b)$$

说明了函数的平均变化率一定等于其在某点的瞬时变化率，进而阐述了局部与全体的关系（以点概面）

### 柯西中值定理

将拉格朗日中值定理推广到俩函数，是洛必达法则的引子

$$\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f^{\prime}(\xi)}{g^{\prime}(\xi)},\quad\xi\in(a,b)$$

### 泰勒展开

就像一个满足狄利克雷条件的周期函数可以用傅里叶级数叠加表示，只要函数足够光滑（有足够多阶导数），我们就可以在某一点附近，用一个与原函数在该点具有相同各阶导数值的多项式来近似它

$$f(x)=\sum_{n=0}^N\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_N(x)$$

因其非线性特性，除了高精度近似，也可用在非线性器件分析，比如混频器/放大器带来的非线性失真

---

## 积分

不定积分，是求导的逆运算

$$\text{若 }F^{\prime}(x)=f(x)\text{,则}\int f(x)dx=F(x)+C$$

定积分，按照黎曼积分的定义，是分割、近似、求和，再取极限的过程

$$\int_a^bf(x)dx=\lim_{\lambda\to0}\sum_{i=1}^nf(\xi_i)\Delta x_i$$

> 一些应用
> 
> - PDF与CDF
> 
> $$F(x)=\int_{-\infty}^{x}p(\xi)d\xi$$
> 
> - 正交与相关性
> - 能量与功率
> 
> $$P=\operatorname*{lim}_{T\to\infty}\frac{1}{T}\int_{-T/2}^{T/2}|s(t)|^{2}dt$$

**牛顿-莱布尼茨公式**

信手而用的公式

$$\int_a^bf(x)dx=F(b)-F(a)\text{,其中 }F^{\prime}(x)=f(x)$$

---

## 级数

从连续到离散

### 数项级数

收敛充要条件：其部分和序列的极限存在，即

$$\lim_{n\to\infty}S_n=S$$

收敛必要条件：

$$\lim_{n\to\infty}u_n=0$$

> 正项级数，有
> 
> - 比较判别法
> - 极限比较判别法：$\lim_{n\to\infty}\frac{u_n}{v_n}=L\left(0<L<\infty\right)$
> - 比值判别法：$\lim_{n\to\infty}\frac{u_{n+1}}{u_n}=\rho$
> - 根植判别法：$\lim_{n\to\infty}\sqrt[n]{u_{n}}=\rho$

### 交错级数

#### 绝对收敛与条件收敛

$$\begin{aligned}&\text{若级数}\sum|u_n|\text{收敛,则称级数}\sum u_n\text{绝对收敛}\\&\text{若}\sum u_n\text{收敛而}\sum|u_n|\text{发散,则称级数}\sum u_n\text{条件收敛}\end{aligned}$$

---

## 多元函数

有偏导、全可微的概念

- 可微=连续，偏导数存在
- 所有偏导数在某点的邻域内存在且连续=可微

### **判断极值**

通过Hessian矩阵的正定性判断临界值类型

- **正定矩阵**

$$\text{一个实对称矩阵 }A\in\mathbb{R}^{n\times n}\text{ 称为 正定矩阵,如果对任意非零向量 }x\text{,都有}:$$

$$x^TAx>0$$

**正定矩阵的特性**

1. 对称
2. 特征值都为正（作为评判依据）
3. 可逆
4. 任意正定矩阵都可以进行 Cholesky 分解：$A=LL^T$，L为下三角矩阵

---

- **Hessian Matrix**

在多元函数里，Hessian 矩阵是由 **所有二阶偏导数** 组成的方阵，对于n维实函数，可定义为

$$\begin{gathered}H(f)=\begin{bmatrix}\frac{\partial^2f}{\partial x_1^2}&\frac{\partial^2f}{\partial x_1\partial x_2}&\cdots&\frac{\partial^2f}{\partial x_1\partial x_n}\\\frac{\partial^2f}{\partial x_2\partial x_1}&\frac{\partial^2f}{\partial x_2^2}&\cdots&\frac{\partial^2f}{\partial x_2\partial x_n}\\\vdots&\vdots&\ddots&\vdots\\\frac{\partial^2f}{\partial x_n\partial x_1}&\frac{\partial^2f}{\partial x_n\partial x_2}&\cdots&\frac{\partial^2f}{\partial x_n^2}\end{bmatrix}\end{gathered}$$

在 **优化问题** 中，如果目标函数的 Hessian 在某点正定，就能保证它是一个局部极小点

在 **凸优化** 里，如果目标函数的 Hessian **全局正定**（对所有点都正定），那么函数就是 **严格凸函数** ，其极小点唯一

---

- **损失函数临界值判断**

损失函数可基于泰勒展开得近似结果：

$$f(x_0+\Delta x)\approx f(x_0)+\nabla f(x_0)^T\Delta x+\frac{1}{2}\Delta x^TH(x_0)\Delta x$$

H矩阵就是Hessian Matrix

如果该点偏导为0，则有

$$f(x_0+\Delta x)\approx f(x_0)+\frac{1}{2}\Delta x^TH(x_0)\Delta x$$

所以，当H为正定（所有特征值为正）时，为凸函数，这是极小值

通常情况下，H的特征值有正有负，为鞍点

---

## 向量分析

### 梯度、散度与旋度

$$\begin{aligned}&\text{梯度(Gradient): }\nabla f=(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z})\text{。作用于标量场 }f\text{,得到一个向量场,指向标量场增长最快的方向}\\&\text{散度(Divergence): }\nabla\cdot\mathbf{F}=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\text{。作用于向量场 F}=(P,Q,R)\text{,得为无源场}\\&\text{旋度(Curl): }\nabla\times\mathbf{F}=(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y})\text{。作用于向量场 F}\end{aligned}$$

---

## 常微分/差分方程

$$\begin{aligned}&\text{概念}&&\text{解释}\\&\text{响应区间}&&0^+>>\infty\\&起始状态&&\mathrm{0}\\&\text{初始条件}&&\text{0 用于决定齐次解的系数}\\&齐次解y_n&&\text{数学角度:方程右边为0的解}\\&\text{特解}y_p&&\text{数学角度;通过给定特定的初始条件或边界条件来确定出唯一解}\\&\text{通解}&&\text{数学角度:包含所有可能解的一个最一般的形式:}y_n+y_p\\&零输入响应y_{zi}&&\text{信号角度;系统的原始储能;齐次解的一部分}\\&\text{零状态响应}y_{zs}&&\text{信号角度:仅由激励决定的方程的解:另一部分齐次解 }+\text{特解}\\&\text{完全响应}&&y_{zi}+y_{zs}\\&强迫响应y_{F}&&与输入激励同一特征根的响应,等同于特解\\&自由响应y_f&&\text{完全响应减去 }y_F\text{,即齐次解}\\&稳态响应y_{ss}&&\text{趋于无穷时保留的分量,约等于强迫响应}\\&\text{瞬态响应}y_{tr}&&\text{趋于无穷时衰减为0的分量,约等于自由响应(极点在s平面左半边)}\\&\text{冲激响应}h(t)&&\delta(t)\text{经过系统的作用而产生的响应}\\&\text{阶跃响应}g(t)&&u(t)\text{经过系统的作用而产生的响应}\end{aligned}$$

### 微分方程

![图片展示了微分方程的通用形式和解的组成。通用形式为a_n * d^n y(t) / dt^n + … + a_1 * dy(t)](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/authcode-ae1e3d4acd.png)

#### **齐次解形式**

$$\begin{aligned}&\text{根类型}&&\text{概的表示}&&\text{齐次解表达式}\\&\text{实根}&&r&&Ce^{rt}\\&\text{重实根}&&r\text{ 重数 }k&&(C_1+C_2t+\cdots+C_kt^{k-1})e^{rt}\\&\text{共轭复根}&&r=\alpha\pm j\beta&&e^{\alpha t}(C_1\cos\beta t+C_2\sin\beta t)\\&\text{重复复根对}&&\text{重数 }k&&e^{\alpha t}(A_0+A_1t+\cdots+A_{k-1}t^{k-1})\cos\beta t+\text{同理}\sin\end{aligned}$$

#### **特解形式**

$$\begin{aligned}&\text{输入类型 }x\left(t\right)&&\text{特解形式 }y_{\mu}\left(t\right)&&\text{说明}\\&\text{常数 }A&&K&&\text{若特征极无0}\text{重根}\\&\text{多项式 }At^n&&K_0+K_1t+\cdots+K_nt^n&&\text{若包含极需乘 }t^k\\&\text{增数 }Ae^{\lambda t}&&Ke^{\lambda t}&&\text{若 }\lambda\text{ 是特征根, 采 }t^k\\&\text{正弦余弦 }A\cos\omega t&&K_1\cos\omega t+K_2\sin\omega t&&\text{同样考虑特征根}\\&\text{多项式}\times\text{指数 }t^ne^{\lambda t}&&P(t)e^{\lambda t},P(t)\text{ 为 }n\text{ 次多项式}&&\text{根据重根乘 }t^k\end{aligned}$$

### 差分方程

![图片展示了差分方程的通用形式及解的组成。通用形式为a_ny\[n\] + a_{n-1}y\[n - 1\] + … + a_0y\[n - N\] = b_mx\[n\] + … + b_0x\[n - M\]，其中y\[n\]为输出序列，\[n\]为输入序列。解的组成部分则为y\[n\] = y_h\[n\] + y_p\[n\]，表明解由齐次解y_h\[n\]和特解y_p\[n\]两部分构成。该图片与上下文紧密相关，是对差分方程内容的总结呈现。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/authcode-8f8a2a40b5.png)

#### **齐次解形式**

$$\begin{aligned}&特征根类型&&根的表示r&&&&齐次解表达式\\&实根&& r &&&&Cr^{n}\\&重实根&&r,重数k&&&&(C_1+C_2n+\cdots+C_kn^{k-1})r^n\\&\text{共轭复根 }&& r=\rho e^{\pm j\theta} &&&& \rho^n(C_1\cos(n\theta)+C_2\sin(n\theta))\end{aligned}$$

#### **特解形式**

$$\begin{aligned}&\text{输入类型 }x[n]&&\text{特解形式 }y_p[n]&&\text{说明}\\&\text{常数 }A&&K&&\text{若特征根无 1,则直接尝试}\\&\text{多项式 }n^k&&K_0+K_1n+\cdots+K_kn^k&&\text{若 1 是特征根需乘 }n^k\\&\text{指数 }A\cdot r^n&&Kr^n&&\text{若 }r\text{ 是特征根则乘 }n^k\\&\text{正弦余弦 }\cos(\omega n)&&K_1\cos\omega n+K_2\sin\omega n&&\text{同样考虑根与 }e^{j\omega}\text{ 的关系}\end{aligned}$$

![图片为](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/authcode-d2d2d67f02.png)

![图片为表2 -2，标题为“常见信号的对应特解形式”。表格展示了不同输入信号对应的特解形式。输入为1时，特解为D；输入为n^K（1不是特征根）时，特解为D_Kn^K +...�� addCriterion+D_{K-1}n^{K-1}+⋯D_1n+D_0；输入为n^K（1是L重特征根）时，特解为(D_Kn^K+D_{K addCriterion+D_{K-1}n^{K-1}+⋯D_1n+D_0)n^L；输入为a^n（α不是特征根）时，特解为Da^n；输入为a^n（α是K重特征根）时，特解为(D_Kn^K+D_{K-1}](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/authcode-1170791236.png)

---

## 杂七杂八的

### 斯特林公式和伽马分布

#### Stirling's Fomula

$$n!\sim\sqrt{2\pi n}\left(\frac{n}{e}\right)^n\quad(n\to\infty)$$

对数下有

$$\ln(n!)\approx n\ln n-n$$

推导过程可见[阶乘的近似——斯特林公式推导过程](https://www.longluo.me/blog/stirlings-formula/)【函数逼近、泰勒展开、沃里斯乘积】，也可以用伽马函数推导，这里不再赘述

可用于中心二项系数的近似

$$\binom{2n}{n}\sim\frac{2n!}{{ n!}^2}\sim\frac{4^n}{\sqrt{\pi n}}$$

#### 伽马函数

$$\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}dt.$$

分部积分可得其递推性质

$$\Gamma(z+1)=z\Gamma(z)$$

对于正整数`n`，有

$$\Gamma(n+1)=n!$$

#### 伽马分布

伽马分布在随机过程、排队论、信道功率建模（如Nakagami 分布的关联）等通信场景中广泛出现

若$X\sim\Gamma(\alpha,\theta)(\alpha>0\text{为形状参数,}\theta>0\text{为尺度参数)}$，则PDF为

$$f_X(x)=\frac{1}{\Gamma(\alpha)\theta^\alpha}x^{\alpha-1}e^{-x/\theta},\quad x>0$$

一些性质

![图片展示了伽马分布的矩母函数、均值与方差、累积分布函数等内容。矩母函数公式为M_X(t) = (1 - θt)^{-α}，推导中将e^tx与指数核合并得到形似伽马积分。均值为αθ，方差为αθ^2。累积分布函数通过不完全伽马函数表示，当α=k∈N时，有显式形式F_X(x) = 1 - e^{-x/θ} ∑(x/θ)^m / m!，m从0到k-1。这些内容与文档中对伽马分布性质的介绍紧密相关。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/authcode-1ff5d238d2.png)
