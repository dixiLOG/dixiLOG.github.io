# 线代速通

<div id="progress-container">
  <div id="progress-bar"></div>
</div>


> 摘自[ZJU-LALU](https://github.com/yhwu-is/Linear-Algebra-Left-Undone)

## **线性空间**

你会怎么回答？满足加减、数乘的数域？事实上它有相当严谨（长）的定义：

$$\begin{aligned}&\text{设V是一个非空集合,}\bf{F}\text{是一个数域,我们定义两种运算,其中第一个运算是我们} \\&\text{熟知的加法}+.\text{ 在线性空间的定义中,我们要求 }\langle V:+\rangle\text{ 构成 Abel 群,即其中元素}\\&\text{满足如下运算律:}\end{aligned}$$

$$\begin{aligned}&1.(\text{加法结合律})\alpha+(\beta+\gamma)=(\alpha+\beta)+\gamma,\forall\alpha,\beta,\gamma\in V;\\&2.(\text{加法单位元})\exists0\in V\text{使得 }\forall\alpha\in V\text{有 }\alpha+0=0+\alpha=\alpha;\\&3.(\text{逆元})\forall\alpha\in V,\exists\beta\in V,\text{有 }\alpha+\beta=\beta+\alpha=0,\text{记 }\beta=-\alpha;\\&4.(\text{交换律})\forall\alpha,\beta\in V,\alpha+\beta=\beta+\alpha.\end{aligned}$$

$$\begin{aligned}&\text{第二种运算和之前学习的其他代数结构不同,我们需要首先引入一个数域 F,接下}\\&\text{来在 }\mathbf{F}\times V\text{ 上定义取值于 }V\text{ 的数乘运算,即 }\mathbf{F}\times V\text{ 中的每个元素 }(\lambda,\alpha)\mapsto\lambda\alpha\in V\\&\text{并且数乘运算满足以下性质:}\forall\alpha,\beta\in V,\forall\lambda,\mu\in\mathcal{F}\text{ 以及 F 上的乘法单位元 1, 有}\end{aligned}$$

$$\begin{aligned}&1.(\text{数乘单位元})1\cdot\alpha=\alpha;\\&2.\text{ (数乘结合律) }\lambda(\mu\alpha)=(\lambda\mu)\alpha;\\&3.(\text{左分配律})(\lambda+\mu)\alpha=\lambda\alpha+\mu\alpha;\\&4.\text{ (右分配律) }\lambda(\alpha+\beta)=\lambda\alpha+\lambda\beta.\end{aligned}$$

基于此，我们称集合`V`关于上述两种运算在域 **F** 上构成一个线性空间，记作$V(\bf{F})$

> 就像母语，线性空间早在幼儿园阶段就与我们相遇
> 
> 进一步联想，LTI系统是线性的，充要条件是满足齐次性和叠加性

---

## **内积空间**

前面研究的所有空间都是线性空间，只注重于线性结构

忽视了向量的度量性质,如向量的长度、夹角等

但面向投影、正交，向量是必不可少的

于是我们将线性空间推广为内积空间（它以线性空间为基础）

$$\text{内积的引入始于我们曾在高中研究过的 }\mathbb{R}^2\text{ 与 }\mathbb{R}^3\text{ 上的向量点积,范数则是始于向量的长度概念. }\\\text{内积即是点积性质的推广,本质上就是一个函数,它把 }V\text{ 中元素的每个有序}\text{对 }(u,v)\\\text{都映射成一个数 }\langle u,v\rangle\in\mathbf{F},\text{ 并且具有以下性质}:$$

$\begin{aligned}&1.\text{ 正定性:}\forall v\in V,\langle v,v\rangle\geqslant0,\langle v,v\rangle=0\Longleftrightarrow v=0;\\&2.\text{ 第一个位置的加性:}\forall u,v,w\in V,\langle u+v,w\rangle=\langle u,w\rangle+\langle v,w\rangle;\\&3.\text{ 第一个位置的齐性:}\forall\lambda\in\mathbf{F},\forall u,v\in V,\langle\lambda u,v\rangle=\lambda\langle u,v\rangle;\\&4.\text{ 共轭对称性:}\forall u,v\in V,\langle u,v\rangle=\overline{\langle v,u\rangle}.\end{aligned}$、

- **欧几里得空间** 即典型的内积空间

通俗地说，就是我们高中接触的投影

$${\bf u}\cdot {\bf v} = \langle u,v\rangle = uv\cos\theta$$

如果向量是高维的，则有

$$\mathbf{u}\cdot\mathbf{v}=\sum_{i=1}^nu_iv_i \cos\theta_i$$

但上式准确的名称是<点积>

事实上内积要考虑到复数向量空间

$$\langle\mathbf{a},\mathbf{b}\rangle=\sum_{i=1}^na_i\overline{b_i} \cos\theta_i$$

进一步的，我们能顺手得到另一个概念：范数

## **范数**

范数由内积确定，定义为

$$\|v\|=\sqrt{\langle v,v\rangle}$$

准确地说，这是模，范数在低维的特例

如[-1,1]上的连续实值函数构成的向量空间，可定义内积如下：

$$\langle f,g\rangle=\int_{-1}^1f(x)g(x)\mathrm{d}x$$

其范数为

$$\|f\|=\sqrt{\int_{-1}^{1}(f(x))^{2}\mathrm{d}x}$$

---

## **正交与线性扩张**

内积为0则称两向量正交，即

$$\langle u,v\rangle=0$$

正交让我们联想到把一个向量用一组互相正交的向量表示，就像经典物理学中力的分解那样

上面的句子太长了，我们定义为线性扩张，记为

$$\mathrm{span}(S)=\{\lambda_1\alpha_1+\cdots+\lambda_k\alpha_k\mid\lambda_1,\ldots,\lambda_k\in\mathbf{F},\alpha_1,\ldots,\alpha_k\in S,k\in\mathbf{N}_+\}$$

但还不够准确，span并没有对子向量做任何（比如正交）限定

对了，物理受力分析中最常用的方法，就是正交分解

---

## **正交分解**

$$\text{设 }u,v\in V\text{ 且 }v\neq0.\text{ 令 }c=\frac{\langle u,v\rangle}{\|v\|^2},w=u-\frac{\langle u,v\rangle}{\|v\|^2}v.\text{ 则 }\langle w,v\rangle=0\text{ 且 }u=cv+w.$$

任何内积空间中的向量都可以唯一表示为一组正交基向量的线性组合

> 诶，什么是正交基？或者说什么是基？

---

## **基**

对于基，有如下的定义

$$\begin{aligned}&\text{若线性空间 }V(\mathbf{F})\text{ 的有限子集 }B=\{\alpha_1,\alpha_2,\ldots,\alpha_n\}\text{ 线性无关,且 }\mathrm{span}(B)=V,\text{ 则}\\&\text{称 }B\text{ 为 }V\text{ 的一组基,并称 }n\text{ 为 }V\text{ 的维数,记作}\dim V=n.\end{aligned}$$

> 线性空间已经不再陌生，但<线性无关>又是什么？



---

## **线性相关性**

$$\text{设 }V(\mathbf{F})\text{ 是一个线性空间},\alpha_1,\alpha_2,\ldots,\alpha_m\in V,\text{若存在不全为 }0\text{ 的 }\lambda_1,\lambda_2,\ldots,\lambda_m\in\mathbf{F},\text{使得}$$

$$\lambda_1\alpha_1+\lambda_2\alpha_2+\cdots+\lambda_m\alpha_m=0$$

$$\text{成立,则称 }\alpha_1,\alpha_2,\ldots,\alpha_m\text{ 线性相关,否则称线性无关(即系数只能为 }0)$$

!!! quote "题外话 | 极大线性无关组&秩"

    $$\begin{aligned}&\text{设向量组 }S=\{\alpha_1,\alpha_2,\ldots,\alpha_m\}\text{ 张成的线性空间为 }V,\text{ 若存在 }S\text{ 的一个线性无关向}\\&\text{量组 }B=\{\alpha_{k1},\alpha_{k2},\ldots,\alpha_{kr}\},\text{ 使得 }V=\mathrm{span}(B),\text{ 则称 }B\text{ 为 }S\text{ 的一个极大线性无}\\&\text{关组,并称极大线性无关组的长度 }r=r(S)\text{ 为 }S\text{ 的秩}.\end{aligned}$$

    这里关于秩的定义显得有些陌生，让我们从行列式的角度出发

---

## **秩**

先给出非零子式的概念

$$\text{矩阵 }A=(a_{ij})_{n\times n}\text{ 的任意 }k\text{ 行 }i_1<i_2<\cdots<i_k\text{ 行)和任意 }k\text{ 列 }(j_1<j_2<\cdots<j_k\\\text{列)的交点上的 }k^2\text{ 个元素排成的行列式}$$

$$\begin{vmatrix}a_{i_1,j_1}&a_{i_1,j_2}&\cdots&a_{i_1,j_k}\\a_{i_2j_1}&a_{i_2j_2}&\cdots&a_{i_2j_k}\\\vdots&\vdots&\ddots&\vdots\\a_{i_kj_1}&a_{i_kj_2}&\cdots&a_{i_kj_k}\end{vmatrix}$$

$$\begin{aligned}&\text{称为矩阵 }A\text{ 的一个 }k\text{ 阶子式,若子式等于 }0\text{ 则称 }k\text{ 阶零子式,否则称非零子式}.\\&\text{当 }A\text{ 为方阵且 }i_t=j_t\mathrm{~}(t=1,2,\ldots,k)\text{ (即选取相同行列)时,称为 }A\text{ 的 }k\text{ 阶主子}\\&\text{式. 若 }i_t=j_t=t(t=1,2,\ldots,k),\text{称为 }A\text{ 的 }k\text{ 阶顺序主子式(取前 }k\text{ 行 }k\text{ 列的左}\\&\text{上角主子式).}\end{aligned}$$

> 可以类比子集的概念

那么，我们可以得到行列式秩的定义式：

$$\text{矩阵 }A\text{ 的非零子式的最高阶数 }r\text{ 称为 }A\text{ 的行列式秩}$$

在矩阵中，关于秩有以下结论：

- $\text{矩阵的秩=行秩=列秩}$
- $\text{矩阵 }A\text{ 的秩 }r(A)=r\Longleftrightarrow A\text{ 的行列式的秩为 }r$

---

## **正交基**

在基的基础上，我们进一步约束，要求向量组之间两两正交（正交一定是线性无关的）

> 所以我们的物理题全倚仗正交基惹🫡

再进一步的，我们联想到单位向量（就像坐标系、单位圆那样），引申出标准正交基

## **标准正交基**

$$\text{如果一个向量组的每个向量范数都是 1 且与其他向量正交则称这个向量组是标准正}\text{交(规范正交)的}$$

> 这里的范数=1等效为单位向量

---

OK，现在再让我们回到通信领域

## 概念|正交

1. [信号与系统](https://dixilog.github.io/NBU-NOTEBOOK/S%26S/S%26S03/)告诉我们，正交即乘积积分为0，且自身平方积分收敛（功率有限）

$$\begin{cases}\int_{t_1}^{t_2}g_1(t)g_2(t)dt=0\\\\\int_{t_1}^{t_2}g_i^2(t)dt=k_i&i=1,2&\end{cases}$$

1. [随机信号处理](https://dixilog.github.io/NBU-NOTEBOOK/RanSigAnalysis/RSA01/?h=%E6%AD%A3%E4%BA%A4#_9)告诉我们，正交即自相关函数为0

$$R_{XY}(t_1,t_2)=E[XY]=0$$

1. 刚刚的线代知识告诉我们，线性无关组内积为零则正交

> 仔细看看，他们在本质上没有区别

---

我们已经体验过正交分解带来的乐趣。现在需要考虑的是，既然物理领域可迁移，是否也能迁移到信号领域呢？

换句话说，能否构造一个类似于内积空间的<信号空间>，使得能用<一组标准正交基信号>（二维下是IQ调制）去表示数字调制结果，并用标准正交基为轴，将信号描绘在空间内（二维下是星座图）呢？

> 其实我已经说出答案了🤣下面直接给出定义，不再赘述

## 概念|信号空间

- 某种调制方式的所有波形信号构成的空间
- 能找到一组标准正交基信号，得到空间中的任意波形

  - 正交：$\underset{-\infty}{\operatorname*{\operatorname*{\overset{\infty}{\operatorname*{\operatorname*{\int}}}}}}\varphi(t)\psi(t)dt=0$
  - 标准：$\underset{-\infty}{\operatorname*{\operatorname*{\overset{+\infty}{\operatorname*{\operatorname*{\int}}}}}}\varphi^{2}(t)dt=1$

调制信号集合为

$$S=\{s_1(t),s_2(t),...,s_M(t)\}$$

其中的每一sample可表示为

$$s_i(t)=\sum_{j=1}^Ns_{ij}\phi_j(t)$$

> s是一个只含0与1的矩阵，M进制下标准正交基信号数量为$\log M$

---

> 下面内容主要包含特征值、条件数、矩阵分解与协方差矩阵的概念

## 矩阵的逆

$$\begin{aligned}&\text{设 }A\subset\mathbf{M}.(\mathbf{F}).\text{ 若存在 }B\subset\mathbf{M}.(\mathbf{F})\text{ 按格 }AB=BA=I\\&\text{ 则称矩阵 }A\text{ 可逆,并把 }B\text{ 称为 }A\text{ 的逆矩阵,记作 }B=A^{-1}\end{aligned}$$

不可逆矩阵也被称为奇异矩阵，该矩阵的行列式（每个方阵对应的唯一标量值）为0

- $\text{设 }A,B\in{M}_n(\mathbf{F}),\text{ 则 }AB=I\Longleftrightarrow A\text{ 与 }B\text{ 互为逆矩阵}$
- $\text{可逆矩阵 A 的逆矩阵唯一}$
- 逆的计算：$\mathbf{A}^{-1}=\frac{1}{\det(\mathbf{A})}\mathrm{adj}(\mathbf{A})$，其中`adj`为伴随矩阵（原矩阵的代数余子式矩阵的转置）

---

## 特征值与特征向量

先介绍线性变换下的特征值与特征向量的定义

$$\begin{aligned}&\text{设 }\sigma\text{ 是线性空间 }V(\mathbf{F})\text{ 上的一个线性变换。如果行在数 }\lambda<\mathbf{F}\text{ 和非零向量 }\xi<V\text{ 使}\\&\text{得 }\sigma(\xi)=\lambda\xi\text{，则称数 }\lambda\text{ 为 }\sigma\text{ 的一个特征值,并称非零向量 }\xi\text{ 为 }\sigma\text{ 属于其特征值 }\lambda\text{的特征向量}\end{aligned}$$

进一步的，得到矩阵下的特征值与特征向量的定义

$$\begin{aligned}&\text{设矩阵 }A\in\mathbf{M}_n(\mathbf{F}),\text{ 如果存在数 }\lambda\in\mathbf{F}\text{ 和非零向量 }X\in\mathbf{F}^n\text{ 使得 }AX=\lambda X,\text{ 则称}\\&\text{数}\lambda\text{ 为 }A\text{ 的一个特征值,称非零向量 }X\text{ 为 }A\text{ 属于其特征值 }\lambda\text{ 的特征向量}.\end{aligned}$$

很抽象，让我们展开表达式品味一下

$$\begin{bmatrix}a_{11}&a_{12}&\ldots&a_{1n}\\a_{21}&a_{22}&\ldots&a_{2n}\\\ldots&\ldots&\ldots&\ldots\\a_{n1}&a_{n2}&\ldots&a_{nn}\end{bmatrix}\begin{bmatrix}x_1\\x_2\\\ldots\\x_n\end{bmatrix}=\lambda\begin{bmatrix}x_1\\x_2\\\ldots\\x_n\end{bmatrix}=\begin{bmatrix}\lambda x_1\\\lambda x_2\\\ldots\\\lambda x_n\end{bmatrix}$$

搬运一句网上的评论，特征向量不过就是线性变换中空间中的方向不变的向量罢了，变换了多少就把它叫特征值。

求特征向量，将定义式改写为

$$\mathbf{A}\mathbf{X}-\lambda\mathbf{I}\mathbf{X}=(\mathbf{A}-\lambda\mathbf{I})\mathbf{X}=\mathbf{0}$$

因为特征向量非零，故括号内必须是奇异的（将非零向量映射到零向量）

于是得到其行列式也必须为0，即特征方程的定义

$$\det(\mathbf{A}-\lambda\mathbf{I})=0$$

展开为特征多项式

$$p(\lambda)=\det(\mathbf{A}-\lambda\mathbf{I})$$

所得根就是矩阵（方阵）的特征值

- $\text{一个 }n\times n\text{ 的矩阵将有 }n\text{ 个特征值(计入重数,可能包含复数)}$

得到特征值后，回代方程之中求齐次线性方程组，得到向量 **`X`** ，实际上是$\left(\mathbf{A}-\lambda\mathbf{I}\right)$的核（零空间）

> 特征值向量并非唯一，通常找的是该零空间中一组基向量



!!! note "从矩阵角度看核空间与像空间"

    对于一个$m\times n$的矩阵

    - $\text{核空间(Null Space):所有满足 }A\mathbf{x}=\mathbf{0}\text{ 的向量 }\mathbf{x}\in\mathbb{R}^n\text{ 构成的于空间,反映了矩阵“丢弃”的方向}$

    $$\ker(A)=\{\mathbf{x}\in\mathbb{R}^n\mid A\mathbf{x}=\mathbf{0}\}$$

    - $\begin{aligned}&\text{像空间(Column Space/Range):矩阵 }A\text{ 的所有列向量所张成的子空间,等价于 }\{A\mathbf{x}\mid\mathbf{x}\in\mathbb{R}^n\}.\\&\text{反映了矩阵“能产生”的所有输出}\end{aligned}$

    $$\mathrm{Col}(A)=\mathrm{span}\{\text{列}_1(A),\text{ 列}_2(A),\ldots,\text{列}_n(A)\}=\{A\mathbf{x}\mid\mathbf{x}\in\mathbb{R}^n\}$$

    - 它们的维度（ **零度** nullity 与 **秩** rank）满足

    $$\underbrace{\dim\left(\ker(A)\right)}_{\mathrm{nullity}}+\underbrace{\dim\left(\mathrm{Col}(A)\right)}_{\mathrm{rank}}=n$$



**寻找特征值和特征向量的目的是，通过观察其在特定方向上的更简单作用（缩放）来理解矩阵 A 的复杂作用**

### 特征值的性质

- 矩阵A的所有特征值之和等于矩阵A的迹(trace)，即矩阵主对角线元素之和
- 矩阵 A 的所有特征值之积等于矩阵 A 的行列式，即$\det(\mathbf{A})=\prod\lambda_i$
- 对称矩阵的特征值都是实数，且总能找到一组完整的正交特征向量
- 对于三角矩阵，主对角线元素就是特征值
- 如果$\lambda$是可逆矩阵$\mathbf{A}$的一个特征值，那么$1/\lambda$是其逆矩阵$\mathbf{A}^{-1}$的一个特征值（并且对应的特征向量相同）

---

## 相似性

矩阵相似性描述了两个矩阵在何种意义上是“相同”的

> 面对一个非常复杂的矩阵，若能找到一个基，使得其相似为另一个非常简单的矩阵（对角矩阵），就能非常高效的获得特征值信息了

如果存在一个可逆的矩阵`P`，使得

$$\mathbf{B}=\mathbf{P}^{-1}\mathbf{AP}$$

则称`A`与`B`相似，`P`被称为基变换矩阵

- 相似的矩阵意味着相同的特征值、行列式、迹、秩
- 相似具有自反性（与自身相似）、对称性、传递性，是一种等价关系

---

## 矩阵分解

矩阵分解是将一个矩阵分解为多个更简单、结构更清晰的矩阵的乘积

有特征值分解与奇异值分解（和奇异矩阵无一丝联系），前者是后者的特例

> 参考：[EVD与SVD](https://blog.csdn.net/zpalyq110/article/details/86751064)

### 特征值分解

Eigenvalue decomposition,EVD，也称为谱分解，是一个将矩阵分解为其特征值与特征向量的过程

假设存在一个`n×n`的满秩矩阵`A`

先求得其特征值

$$\lambda_{1},\lambda_{2}...,\lambda_{n}$$

以及对应的特征向量

$$x_{1},x_{2},...x_{n}$$

整理为矩阵

$$U=[\mathbf{x_1,x_2,...,x_n}]\\\Lambda=\begin{bmatrix}\lambda_1&&\\&\lambda_2&\\&&\lambda_3\end{bmatrix}$$

`U` 中每一元素为一个特征值的对应列向量

可得目标矩阵的特征值分解

$$A=U\Lambda U^{-1}$$

为了使`U`的逆存在，每一列应是线性不相关的，否则是不满秩的

比如，对于矩阵

$$A=\begin{bmatrix}4&2\\1&3\end{bmatrix}$$

可分解为

$$A=U\Lambda U^{-1}=\begin{bmatrix}2&-1\\1&1\end{bmatrix}\cdot\begin{bmatrix}5&0\\0&2\end{bmatrix}\cdot\frac{1}{3}\begin{bmatrix}1&1\\-1&2\end{bmatrix}$$

分解出特征值与其向量，意义为

![图片展示了特征值分解中特征值与其对应特征向量的含义。左侧为特征值，分别为λ1 = 5和λ2 = 2；中间对应特征向量，分别为v1 = \[2, 1\]和v2 = \[-1, 1\]；右侧是含义，分别说明在对应方向上，矩阵A将向量放大了5倍和2倍。该图与上文介绍特征值分解的意义相呼应，直观呈现了特征值分解中特征值与特征向量的几何意义。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/authcode-df6545a568.png)

对于对称矩阵（比如协方差矩阵），基于正交性，EVD可简化为

$$\mathbf{A}=\mathbf{P\Lambda P}^{T}$$

$\mathbf P$是正交矩阵

$$\bf P^T=P^{-1}$$

---

### 奇异值分解

singular value decomposition，SVD，旨在解决矩阵非方阵、或部分方阵无法`EVD`的问题

表达式为

$$\mathbf{A_{m\times n}}=\mathbf{U_{m\times m}}\mathbf{\Sigma_{m\times n}}\mathbf{V_{n\times n}}^T$$

意为旋转—缩放—再旋转，并表明任何线性映射都能分解为这一过程

三者分别为左奇异向量矩阵（$\mathbf{AA}^T$的特征值向量）、对角矩阵（奇异值$\sigma_i=\sqrt{\lambda_i}$）和右奇异向量矩阵

> 具体例子见[参考博文](https://blog.csdn.net/zpalyq110/article/details/86751064)

奇异值分解有以下作用：

- A 的秩等于其非零奇异值的数量 
- 奇异值降序排列，由于其开根的特点，下降速度非常快，可通过仅保留前k个最大的奇异值（就像90%能量带宽）得到最佳k秩近似。这对于降噪、图像压缩至关重要
- 右奇异向量给出了主成分方向，适用于PCA
- 求解LS问题
- 计算伪逆矩阵

---

## 条件数

条件数是衡量矩阵（或与矩阵相关的问题）对输入数据扰动的敏感程度的健壮性指标

用于量化线性系统$\mathbf{A}\mathbf{x}=\mathbf{b}$的解对`A、b`扰动的敏感性

通过奇异值分解，我们得到

$$\mathbf{A_{m\times n}}=\mathbf{U_{m\times m}}\mathbf{\Sigma_{m\times n}}\mathbf{V_{n\times n}}^T$$

其中，奇异值矩阵中的各个奇异值的大小决定了扰动程度

过大/过小的奇异值都会使敏感度大大增加

于是有条件数定义

$$\kappa(\mathbf{A})=\sigma_{\max}/\sigma_{\min}$$

> 也可以是最大特征值与最小特征值的比值，一样的

- 低条件数意味着矩阵是良态的 (well-conditioned)
- 高条件数意味着矩阵是病态的 (ill-conditioned)
- 理想值为`1`

当矩阵是奇异的，意味着最小奇异值为0，则这个矩阵是非常坏的，也可以说是不可逆的

常见的解决方法便是在对角线上加上一个数，即对角加载，从而降低条件数

---

## 协方差矩阵

协方差矩阵是多元统计分析中的核心工具，用于描述数据集中多个变量之间的线性和依赖关系

> 此事在[随机信号分析](https://dixilog.github.io/NBU-NOTEBOOK/probabilityTheory/PT03/#_11)中亦有记载

协方差

$$C_{X}=E[(X-EX)(X-EX)^{\mathrm{T}}]$$

零均值下有

$$C_{X}=E[XX^{\mathrm{T}}]$$

即均方值，或者说自相关函数

> 都串起来了，所以ta很重要

展开为

$$\left.\left[\begin{array}{llll}D[X_1]&C_{12}&\cdots&C_{1n}\\C_{21}&D[X_2]&\cdots&C_{2n}\\\vdots&\vdots&&\vdots\\C_{n1}&C_{n2}&\cdots&D[X_n]\end{array}\right.\right]$$

- 对称矩阵；对角线为方差，其余为互协方差
- 半正定性（非负性）：对于任意的向量`u`，都有$\mathbf{u}^T\mathbf{C}\mathbf{u}\geq0$
- 协方差矩阵总是能进行EVD分解的，且正交性使得无需求逆

---

## 信号估计

> 本小节服务于均衡技术

对于信道输出信号

$$y(t)=x(t)\otimes f^{*}(t)+n_{b}(t)$$

在经过离散抽样与简化后，写为

$$\mathbf{y}=\mathbf{H}\mathbf{x}+\mathbf{n}$$

$\mathbf{H}$是信道矩阵，$\mathbf{x}$为需要恢复（估计）的原始符号向量，$\mathbf{n}$是加性白噪

当我们希望评价估计的误差时，一般求平方差，即

$$\|\mathbf{x}-\hat{\mathbf{x}}\|^2=\sum_i\left(x_i-\hat{x}_i\right)^2$$

> 希望你没有忘记范数的概念

经典估计分为似然估计与后验估计（aka 贝叶斯估计），而后者又`MAP`与`MMSE`俩类



!!! tip "题外话 | 似然函数与信道转移概率"

    似然函数描述给定一个参数，观察到某一输出的结果概率有多大

    $$L(\theta;y)=p(y\mid\theta)$$

    而转移概率是输入与输出的关系

    $$P(y\mid x)$$

    两者在数学上都是条件概率分布，但面向对象不同，需要注意区分



---

### 最大似然估计

ML（Maximum Likelihood）估计

- 算法思路简单，无需先验概率，仅依赖似然函数
- 在噪声满足高斯分布时性能较好
- 当$\mathrm{H^TH}$条件不好，接近奇异时，容易放大噪声，精度较低
- 对于离散符号空间，复杂度随星座阶数成指数增长

ML估计基于观测数据在给定参数下有概率最大的思想

$$\hat{\mathbf{x}}_{\mathrm{ML}}=\arg\max_{\mathbf{x}}p(\mathbf{y}\mid\mathbf{x})$$

假设噪声为零均值高斯分布，则

$$p(\mathbf{y}\mid\mathbf{x})\propto\exp\left(-\frac{1}{2\sigma^2}\|\mathbf{y}-\mathbf{H}\mathbf{x}\|^2\right)$$

那么估计实质上等价于求最小平方误差

$$\hat{\mathbf{x_{ML}}}=\arg\min_{\mathbf{x}}\|\mathbf{y}-\mathbf{H}\mathbf{x}\|^{2}$$

通俗的说，就是假设一个值，使得差值平方最小，则该值就是我们的估计值

而差值平方最小，正是LS问题！而最小二乘估计的解析解为

$$\hat{\mathbf{x}}_{\mathrm{ML}}=(\mathbf{H}^{T}\mathbf{H})^{-1}\mathbf{H}^{T}\mathbf{y}$$

其中：

- $\mathbf{H}^T\mathbf{H}\text{:是一个 }n\times n\text{ 的对称矩阵,称为“Gram矩阵”,在行满秩的情况下是可逆的}$
- $(\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T:\text{被称为伪逆矩阵,记作 H}^\dagger$



!!! tip "题外话 | 后验概率"

    > 就像提到北京就离不开长城，提到先验概率就不得不顺便说说后验概率

    我们知道带有某个参数（均值、方差）的联合概率分布可表示为似然函数与先验分布的乘积，即参数估计

    $$p(x;\theta)=p(x\mid\theta)p(\theta)$$

    **我们这里讨论信号估计，则需要换成**

    $$p(y;x)=p(y\mid x)p(x)$$

    意为先从先验中“抽出”一个参数，然后用这个参数来生成数据，这就是联合分布

    而这个联合分布，就是未归一化的后验概率，根据贝叶斯公式，后验概率为

    $$p(\theta\mid x)=\frac{p(x\mid\theta)p(\theta)}{p(x)}$$

    或者说

    $$p(x\mid y)=\frac{p(y\mid x)p(x)}{p(y)}$$

---

### 最大后验估计

> Maximum a Posteriori，MAP

在ML的基础上，引入先验分布。当先验分布服从实际分布，性能上会得到显著提升

> 若发送信道均匀分布，则二者全等

$$\hat{\mathbf{x}}_{\mathrm{MAP}}=\arg\max_{\mathbf{x}}p(\mathbf{x}\mid\mathbf{y})=\arg\max_{\mathbf{x}}p(\mathbf{y}\mid\mathbf{x})p(\mathbf{x})$$

妙妙变化后有

$$\hat{\mathbf{x}}_{\mathrm{MAP}}=\arg\min_{\mathbf{x}}\left[\|\mathbf{y}-\mathbf{H}\mathbf{x}\|^{2}-\lambda\ln p(\mathbf{x})\right]$$

> $\lambda$是与噪声方差有关的常数

- 先验分布的找寻是困难的
- 通常很难得到解析解

---

###  最小均方误差估计

Minimum Mean Square Error，从贝叶斯角度，将估计值定义为后验均值

$$\hat{\mathbf{x}}_{\mathrm{MMSE}}=\mathbb{E}[\mathbf{x}\mid\mathbf{y}]$$

展开为

$$\hat{\mathbf{x}}_{\mathrm{MMSE}}=\int\mathbf{x}\cdot p(\mathbf{x}\mid\mathbf{y})d\mathbf{x}$$

假设发射信号与噪声都是高斯的，有解析解

$$\hat{\mathbf{x}}_{\mathrm{MMSE}}=\left(\mathbf{H}^{T}\mathbf{H}+\frac{\sigma_{b}^{2}}{\sigma_{x}^{2}}\mathbf{I}\right)^{-1}\mathbf{H}^{T}\mathbf{y}$$

- 对于高斯模型有解析解，但需要知道噪声方差于符号功率
