# ITC03 信道与信道容量

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 信道与信道容量

### 基本概念

| 分类依据 | 信道类型 |
|-|-|
| 用户数量 | 单用户/多用户 |
| 输入输出关系 | 有反馈/无反馈 |
| 与时间关系 | 恒参/随参 |
| 噪声类型 | 随机/突发/混合 |
| 输入输出 | 离散、连续、半离散半连续、波形 |

#### 数学模型

信道输入：$X=(X_1,X_2,\cdots X_i,\cdots),X_i\in\{a_1,\cdots,a_n\}$

信道输出：$Y=(Y_1,Y_2,\cdots Y_j,\cdots),Y_j\in\{b_1,\cdots,b_m\}$

并用转移概率描述信道特征

$$\mathrm{P_{ij}=P(y_j\mid x_i),~i=1,2,...,n;~j=1,2,...,m}$$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-131e89bf2e.png){: .zoom}

> 本课程面向恒参信道与随参无记忆信道

恒参信道（这里指的是无噪声）下，

$$\begin{aligned}&p(\mathbf{Y}/\mathbf{X})=\begin{cases}1,&\mathbf{y}=f(\mathbf{x})\\0,&\mathbf{y}\neq f(\mathbf{x})&\end{cases}\end{aligned}$$

故条件熵为0，互信息量为

$$I(X;Y)=H(X)=H(Y)$$

---

#### 基本信道模型

> 为无记忆信道

- 二进制对称信道（Binary symmetric channel,BSC）

> 无论是随机信号分析还是通信原理皆有所及

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-a69ddd7f62.png){: .zoom}

- 离散无记忆信道（Discrete memoryless channel,DMC）

> 从二维延展至高维

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-804aa24463.png){: .zoom}

- 波形信道（连续）

> 加性高斯信道

噪声与信号相互独立，有结论：

$$H_c(Y\mid X)\overset{.}{\operatorname*{=}}H_c(n)$$

即条件熵等于噪声信源的熵，也将条件熵称为噪声熵

那么，再次审视互信息量的定义式

$$I(X;Y)=H(X)-H(X\mid Y)$$

不难发现为信源熵减去噪声熵，即信息传输率

并由此，引入信道容量的概念

---

#### 信道容量

> 你在通信原理的[信道 - dixi's BLOG](https://dixilog.github.io/NBU-NOTEBOOK/commuPrinc/cp04/#_15)曾与其有一面之缘

信息传输速率为

$${R}=I(X;Y)=H(X)-H(X\mid Y) \: (bit/sym)$$

> 再来一遍

互信息可表示成$[p(x_i),p(y_j \mid x_i )]$的函数

$$\begin{aligned}I(X;Y)&=\sum_{i,j}p(x_{i})p(y_{j}\mid x_{i})\log\frac{p(y_{j}\mid x_{i})}{p(y_{j})}\\&=\sum_{i,j}p(x_{i})p(y_{j}\mid x_{i})\log\frac{p(y_{j}\mid x_{i})}{\sum_{i}p(x_{i})p(y_{j}\mid x_{i})}=I\left[p(x_{i}),p(y_{j}\mid x_{i})\right]\end{aligned}$$

- 当$p(y_j\mid x_i )$确定，即给定信道，则函数存在最大值，视为信道限
- 当$p(x_i)$确定，即信源给定，则函数存在最小值，视为最小传输量

**信道容量定义式**

$$C=\max_{p(x_i)}I(X;Y)$$

第三次实验告诉我们，这是一个上凸函数

> 对于时变信道，采用遍历容量$C_{avg}=E_H(C)$描述信道容量

下面将分析不同信道模型的`C`

---

### 离散单符号信道

#### 无干扰离散信道

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-f9da1998ae.png){: .zoom}

```Plain Text
(a) 即对应最大熵
(b) 存在有损压缩（多个输入映射到一个输出，无法逆向），信道由信息受损的一侧决定
(c) 存在噪声使得输出发生偏差，但偏差确定而无损，信道由信息受损的一侧决定
```

---

#### 对称DMC信道

对称DMC（离散无记忆）信道是指在对称离散无记忆信道中，最简单的信道类型

**特点**

- 输入与输出都对称

  - 如果每一行都是第一行的置换，则输入对称
  - 如果每一列都是第一列的置换，则输出对称

$$\begin{bmatrix}\frac{1}{3}&\frac{1}{3}&\frac{1}{6}&\frac{1}{6}\\\frac{1}{6}&\frac{1}{6}&\frac{1}{3}&\frac{1}{3}\end{bmatrix}$$

- **输入等概分布，输出也是等概分布**

有结论，信源等概分布是最佳分布之一，信道容量为

$$C=\log m-H(Y\mid a_i)=\log m+\sum_{j=1}^mp_{ij}\log p_{ij}$$

> 直观上理解，即均匀分布的信源熵，减去转移矩阵某一行的熵（因为每一行都相同）

因此，BSC的信道容量为

$$1-H(p,1-p)$$

!!! example "例"
    
    已知转移矩阵，求信道容量
    
    $$\mathbf{P}=\begin{bmatrix}1-\varepsilon&\frac{\varepsilon}{n-1}&\cdots&\frac{\varepsilon}{n-1}\\\frac{\varepsilon}{n-1}&1-\varepsilon&\cdots&\frac{\varepsilon}{n-1}\\\vdots&\vdots&\vdots&\vdots\\\frac{\varepsilon}{n-1}&\frac{\varepsilon}{n-1}&\cdots&1-\varepsilon\end{bmatrix}$$
    
    这是一种特殊的强对称信道（满足对称矩阵），错误概率被均匀的分布给其余`n-1`个
    
    $$C=\log n-H(1-\varepsilon,\frac{\varepsilon}{n-1},\cdots,\frac{\varepsilon}{n-1})$$
    
---

##### 级联带来的容量萎缩

求两步转移概率矩阵

$$\begin{aligned}&\mathbf{P^2}=\mathbf{P}_{1}\mathbf{P}_{2}=\begin{bmatrix}1-\varepsilon&\varepsilon\\\varepsilon&1-\varepsilon\end{bmatrix}\begin{bmatrix}1-\varepsilon&\varepsilon\\\varepsilon&1-\varepsilon\end{bmatrix}\\&\left.=\left[\begin{array}{cc}{\left(1-\varepsilon\right)^{2}+\varepsilon^{2}}&{2\varepsilon(1-\varepsilon)}\\{2\varepsilon(1-\varepsilon)}&{\left(1-\varepsilon\right)^{2}+\varepsilon^{2}}\end{array}\right.\right]\end{aligned}$$

有

$$I(X;Y)=1-H(\varepsilon),I(X;Z)=1-H[2\varepsilon(1-\varepsilon)]$$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-08feaa723e.png){: .zoom}

---

#### 准对称DMC信道

转移概率矩阵输入对称而输出不对称，称为准对称`DMC`信道

其最佳分布就是等概分布，即假设信源为均匀分布可求信道容量

!!! example "例"
    
    求信道容量
    
    $$\mathbf{P}=\begin{bmatrix}0.5&0.3&0.2\\0.3&0.5&0.2\end{bmatrix}$$
    
    输入符号两个，设为
    
    $$p(a_{1})=p(a_{2})=0.5$$
    
    输出有符号三个，对每一列加权和，不难计算
    
    $$\begin{cases}p(b_1)=0.5\cdot 0.5+0.3\cdot 0.5=0.4\\p(b_2)=0.3\cdot 0.5+0.5\cdot 0.5=0.4\\p(b_3)=0.2\cdot 0.5+0.2\cdot 0.5=0.2&\end{cases}$$
    
    利用互信息量定义式，得到
    
    $$C=H(Y)-H(Y\mid X)=0.036\:bit/sym$$
    
---

#### 一般DMC信道

也有最佳分布的充要条件

当信道平均互信息达到信道容量时，

输入符号概率集`{p(a(i))}`中每一个符号`a(i)`对输出端`Y`提供相同的互信息量(概率为零的符号除外)，即

$$I(a_i;Y)=C\text{ 对于所有满足}p(a_i)>0\text{条件的}I\\I(a_i;Y)\leq C\text{ 对于所有满足}p(a_i)=0\text{条件的}I$$

> 当通信信道达到最大传输效率（信道容量）时，所有被实际使用的输入符号对接收端的信息贡献必须一碗水端平



!!! tip "题外话"
    
    准对称DMC信道可根据列划分成若干个对称DMC信道
    
    再利用对称信道输入等概率，则输出等概率的性质
    
    可表明准对称信道中各个等概信源的$I(a_i;Y)$相同
    
    进一步推得此时达到信道容量，有最佳分布
    
    即证明了准对称DMC信道的最佳分布是等概分布
    
    
    
    
    
    > 证明过程略，看不懂
    > 
    > ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-6732576703.png){: .zoom}
    > 
    > ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-d226244ea1.png){: .zoom}
    > 
    > ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-3d048e1bcc.png){: .zoom}
    
    信道表达式为
    
    $$C=\max_{p(a_i)}I(X;Y)=\max_{p(a_i)}\sum_{i}p(a_{i})I(a_{i};Y)$$
    
    $p(a_i)\text{与}I(a_i;Y)\text{负相关}$，故上凸函数有最大值
    
    > 无具体表达式，故仅从定性角度分析，最佳分布亦不唯一
    
---

### 离散序列信道

> 回忆[离散序列信源熵](https://o2ywbvn10e.feishu.cn/docx/AY6FdVwDRoXgTYxbwH2cdw6unEf#share-LsWQdXulloiQP5xHmQWcbClvnvL)

对于离散无记忆信道（DMC）来说，信道的输出仅依赖于当前输入，与其他时刻的输入/输出无关

因此，长度为 *L* 的序列的转移概率为各时刻转移概率的乘积

$$p(\mathbf{Y}\mid \mathbf{X})=p(Y_1\cdots Y_L\mid X_1\cdots X_L)=\prod_{l=1}^Lp(Y_l\mid X_l)$$

若信道是平稳的，则每个时刻的转移概率相同，记为 $p(y∣x)$。此时，整个序列的转移概率可简化为单次转移概率的 $L$ 次乘积

$$p(\mathbf{Y}\mid\mathbf{X})=p^L(y\mid x)=\left[p(y\mid x)\right]^L=\underbrace{p(y\mid x)\cdotp(y\mid x)\cdots p(y\mid x)}_{L\text{次}}$$

照猫画虎，也能得到无记忆序列的互信息量

$$\begin{aligned}I(\mathbf{X};\mathbf{Y})&=H(X^{L})-H(X^{L}\mid Y^{L})=\sum p(\mathbf{X}\mathbf{Y})\log\frac{p(\mathbf{X}\mid \mathbf{Y})}{p(\mathbf{X})}\\&=H(Y^{L})-H(Y^{L}\mid X^{L})=\sum p(\mathbf{X}\mathbf{Y})\log\frac{p(\mathbf{Y}\mid \mathbf{X})}{p(\mathbf{Y})}\end{aligned}$$

**特点**

- 信道无记忆下，序列互信息量比单符号之和小

$$I(\mathbf{X};\mathbf{Y})\leq\sum_{i=1}I(X_{i};Y_{i})$$

土想想，序列间符号若存在相关性，则信息量必然减小，即

$$I(\mathbf{X};\mathbf{Y})=H(\mathbf{Y})-H(\mathbf{Y}\mid \mathbf{X})\leq\sum_{i=1}^LH(Y_i)-\sum_{i=1}^LH(Y_i\mid X_i)=\sum_{i=1}^LI(X_i;Y_i)$$

- 反之，信源无记忆下，序列平均互信息量就比符号互信息量之和大

$$I(\mathbf{X};\mathbf{Y})\geq\sum_{i=1}I(X_{i};Y_{i})$$

因为输出符号可能包含多个输入符号的信息（如码间干扰），导致联合条件熵减小（噪声引入的不确定性，部分会被接收端作为有效信息误捕获）

$$H(\mathbf{X}\mid \mathbf{Y})\leq\sum_{i=1}^LH(X_i\mid Y_i)$$

从而

$$I(\mathbf{X};\mathbf{Y})=H(\mathbf{X})-H(\mathbf{X}\mid \mathbf{Y})\geq\sum_{i=1}^LH(X_i)-\sum_{i=1}^LH(X_i\mid Y_i)=\sum_{i=1}^LI(X_i;Y_i)$$

- 均无记忆时,信源独立同分布(i.i.d.)，信道平稳（转移概率相同）

$$\begin{aligned}&C_{L}=\max_{P_{\mathrm{X}}}I(\mathbf{X};\mathbf{Y})=\max_{P_{\mathrm{X}}}\sum_{l=1}^{L}I(X_{l};Y_{l})\\&=\sum_{l=1}^{L}\max_{P_{x}}I(X_{l};Y_{l})=\sum_{l=1}^{L}C(l)\end{aligned}$$

当信道平稳时，

$$C_L=LC_1$$

当信源和信道均无记忆时，该上界可达；否则，互信息可能因相关性或记忆性而低于此值，即

$$I(X;Y)\leq LC_1$$

下面以BSC二次扩展信道为例

---

##### BSC二次扩展信道

二次扩展信道 是指将原始信道独立使用两次（L=2），形成一个等效的扩展信道

由于信道无记忆，扩展信道的转移概率为各次传输概率的乘积：

$$p(\mathbf{y}\mid \mathbf{x})=p(y_1\mid x_1)\cdotp(y_2\mid x_2)$$

从而得到转移概率矩阵

$$\mathbf{P}=\begin{bmatrix}(1-p)^2&p(1-p)&p(1-p)&p^2\\p(1-p)&(1-p)^2&p^2&p(1-p)\\p(1-p)&p^2&(1-p)^2&p(1-p)\\p^2&p(1-p)&p(1-p)&(1-p)^2\end{bmatrix}$$

由于信道对每次传输对称，最优输入分布为 $P_X(0)=P_X(1)=1/2$，因此信道容量为

$$C_\text{二次扩展}=2\cdot C_\mathrm{BSC}=2(1-H(p))$$

---

##### 独立并联信道

> 暂时先了解一下

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-4c00046578.png){: .zoom}

---

### 连续信道

#### 连续单符号加性信道

高斯分布的[微分熵](https://o2ywbvn10e.feishu.cn/docx/AY6FdVwDRoXgTYxbwH2cdw6unEf#share-F4cNdjpZ4ooaT3xK22tc4X8PnGU)

$$\begin{aligned}H_{c}(X)=\frac{1}{2}\log(2\pi e\sigma^2)\end{aligned}$$

输入X和输出Y均为连续随机变量（实数域），噪声是零均值、方差为 $σ^2$ 的加性高斯噪声（AWGN）

$$Y=X+N$$

连续信道的互信息量定义为

$$I(X;Y)=H_c(Y)-H_c(Y|X)$$

则信道容量为

$$C=\max_{p_X(x)}I(X;Y)=\max_{p_X(x)}[H_c(Y)]-H_c(Y|X)$$

因为噪声的不相关，条件熵分布由噪声分布决定，有

$$H_c(Y|X)=H_c(N)=\frac{1}{2}\log(2\pi e\sigma^2)$$

那么信道容量可改写为

$$C=\max_{p_X(x)}\left[H_c(Y)\right]-\frac{1}{2}\log2\pi e\sigma^2$$

何时取到最大呢？

> 根据最大熵定理 ，在给定方差约束下，高斯分布具有最大微分熵

也就是说，当$X\sim\mathcal{N}(0,P_{s})$时，取到最大值（功率受限为$P_s$）

$$H_c(Y)=\frac{1}{2}\log2\pi eP_o$$

其中，$P_o=P_s+\sigma^2$

代入信道容量公式，得

$$C=\frac{1}{2}\log2\pi eP_o-\frac{1}{2}\log2\pi e\sigma^2=\frac{1}{2}\log\frac{P_o}{\sigma^2}=\frac{1}{2}\log\left(1+\frac{P_s}{\sigma^2}\right)$$

换个马甲

$$C = \frac{1}{2}\log(1+SNR)$$

邦邦，你刚刚推导出了香农公式（离散版），也称为香农第二定理



!!! tip "题外话 | 香农限"
    
    我们平时所求的香农限的对象是服从零均值高斯分布的噪声
    
    而在非高斯噪声信道中，信道容量是大于香农限的。以零均值加性噪声为例，容量上下限为
    
    $$\frac{1}{2}\mathrm{log}\left(1+\frac{S}{\sigma^2}\right)\leqslant C\leqslant\frac{1}{2}\mathrm{log}2\pi\mathrm{e}P_o-H_c(n)$$
    
    这说明在功率受限的条件下，非高斯噪声信道的容量要大于高斯的  
    因为在高斯分布下噪声熵最大
    
    但我们仍然以香农公式为上限，因为
    
    - 更保守
    - 易于计算
    
    
    
---

#### 多维无记忆加性连续信道

信道输入随机序列$X=X_1X_2...X_\mathrm{L}$，输出随机序列$Y=Y_1Y_2...Y_\mathrm{L}$，加性信道有$y=x+n$，其中$n{=}n_1n_2...n_\mathrm{L}$是均值为零的高斯噪声

而连续单符号多维无记忆高斯加性信道，可等价成L个独立的并联高斯加性信道，即

$$I(X;Y)\leq\sum_{l=1}^{L}I(X_{l};Y_{l})\leq \sum_{l=1}^{L}\frac{1}{2}\log(1+\frac{P_{s_{l}}}{\sigma_{l}^{2}})$$

则信道表达式为（要求输入i.i.d，且服从零均值高斯分布）

$$C=\max_{p(x)}I(X;Y)=\sum_{l=1}^{L}\frac{1}{2}\log(1+\frac{P_{s_{l}}}{\sigma_{l}^{2}})$$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-d59889daa2.png){: .zoom}

- 当各个子信道的噪声方差相同时，很容易得到

$$C=\frac{L}{2}\mathrm{log}\left(1+\frac{P_s}{\sigma^2}\right)\quad \mathrm{bit}/L\text{ 维自由度}$$

- 当方差不同时，需要借助注水法的思想进行功率分配，以期传输率达到（接近）信道容量

##### 基于注水法的功率分配

假设总平均功率受限于`P`

$$\text{目标:在功率总量 }P\text{ 的约束下,如何分配各信道功率 }\{P_l\}\text{ 以最大化 }C?$$

我们需要将约束问题转为无约束优化问题 ~~不然用自己的脑袋遍历嘛~~ 

于是采用[拉格朗日乘子法](https://zhuanlan.zhihu.com/p/440297403)求解

$$\mathcal{L}(P_1,\ldots,P_L,\lambda)=\sum_{l=1}^L\frac{1}{2}\log\left(1+\frac{P_{sl}}{\sigma_l^2}\right)+\lambda\left(\sum_{l=1}^LP_{sl}-P\right)$$

对每个$P_{sl}$求偏导并令其为`0`

$$\frac{\partial \mathcal{L}(P_{s{1}},P_{s{2}},\cdots P_{s{L}})}{\partial P_{s{l}}}=0,l=1,2,\cdots,L$$

整理得到

$$\frac{1}{2(P_l+\sigma_l^2)}+\lambda=0,\quad l=1,2,\ldots,L$$

解得

$$P_l+\sigma_l^2=-\frac{1}{2\lambda}=\nu$$

**这表明当每一信道的信道功率与噪声功率之和相同时，信道容量最大化**

令常数$\nu$为“水位”（water level）

由总功率约束，可得水位表达式

$$\nu=\frac{P+\sum_l{\sigma_l}^2}{L}$$

进一步，得到各个子信道的功率分配量化

$$P_{sl}=\nu-\sigma_l^2=\frac{P+\sum_{i=1}^L\sigma_i^2}{L}-\sigma_l^2$$

信道容量为

$$C=\frac{1}{2}\sum_{l}\log\left(1+\frac{P_{l}}{\sigma_{l}^{2}}\right),\quad\sum_{l}P_{l}=P,\quad P_{l}\geqslant0$$

这一思想很形象的称为注水法

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-1b8611696f.png){: .zoom}

> 注意，噪声信道超过水位则抛弃



!!! example "例"
    
    有一并联高斯加性信道，各子信道噪声方差为
    
    $$\sigma_{1}^{2}=0.1,\sigma_{2}^{2}=0.2,\sigma_{3}^{2}=0.3,\sigma_{4}^{2}=0.4,\sigma_{5}^{2}=0.5\\\sigma_{6}^{2}=0.6,\sigma_{7}^{2}=0.7,\sigma_{8}^{2}=0.8,\sigma_{9}^{2}=0.9,\sigma_{10}^{2}=1.0$$
    
    分别求$P=5,1$时的信道容量
    
    先求出水位
    
    $$\nu=\frac{P+\sum_{l}\sigma_{l}^{2}}{L}=1.05$$
    
    则各信道分配功率为
    
    $$0.95，0.85，0.75，0.65，0.55，0.45，0.35，0.25，0.15，0.05$$
    
    代入信道容量公式
    
    $$C=\max_{p(x)}I(X;Y)=\frac{1}{2}\sum_{l=1}^{L}\log(1+\frac{P_{s_{l}}}{\sigma_{l}^{2}})$$
    
    解得
    
    $$C=6.1bit/10 \text{维自由度}$$
    
    
    
    当`P=1`时
    
    $$\nu=\frac{P+\sum_{l=1}^{10}\sigma_l^2}{L}=0.65$$
    
    发现后四个通道噪声功率超出水位，只取前6个重新计算水位
    
    $$\nu=\frac{P+\sum_{l=1}^6\sigma_l^2}{L}=0.517$$
    
    同理，关闭第六个，只取前五个，得$\nu=0.5$
    
    最终得到
    
    $$C=2.4bit/10\text{维自由度}$$
    
    
    
---

#### **限时限频限功率加性高斯白噪声信道**

> 好长的名字

连续可视为无穷长序列，其平均互信息量为

$$I[x(t);y(t)]=\lim_{L\to\infty}I(X;Y)$$

信道容量为

$$C_t=\max_{p_{\mathbf{X}}(\mathbf{x})}\left[\lim_{t_B\to\infty}\frac{1}{t_B}I(\mathbf{X};\mathbf{Y})\right]bit/s$$

> 介就是信道带宽

限时限频(B)高斯白噪声过程可分解$L＝2Bt_B$维统计独立的随机序列 ，即前面的

$$C=\frac{1}{2}\sum_{l=1}^{L}\log(1+\frac{P_{s{l}}}{{\sigma_{l}}^{2}})$$

其中

$$\sigma_l^2=P_n=\frac{N_0\cdot B\cdot t_B}{2Bt_B}=\frac{N_0}{2}$$

$$P_{sl}=\frac{P_St_B}{2Bt_B}=\frac{P_S}{2B}$$

则信道容量为

$$C=\frac{L}{2}\log(1+\frac{P_{S}}{N_{0}B})=Bt_{B}\log(1+\frac{P_{S}}{N_{0}B})$$

那么单位时间的带宽就是

$$C_t=\lim_{t_B \rightarrow \infty}\frac{C}{t_B}=B\log(1+SNR)$$

**这是啥？香农公式！**



##### 香农限

这就不得不再次提及[通信原理](https://dixilog.github.io/NBU-NOTEBOOK/commuPrinc/cp04/#_17)了

- 当带宽`B`一定时，$C_t$与$SNR $成对数关系，即

$$P_S\uparrow 或者N_0\downarrow,则C_t \to\infty$$

- 当信号功率$P_S$一定时，$C_t$是带宽B的函数，且存在上界

因为$\frac{S}{N_0B}\to0$，有$\ln(1+x)\approx x$。利用换底公式与一阶泰勒展开，可得

$$\begin{aligned}\mathrm{C_t}&=B\log_2(1+\frac{P_S}{N_0B})\xrightarrow{}B\frac{P_S}{N_0B}\frac{1}{\ln2}\\&=\frac{P_S}{N_0\ln2}\approx1.44\frac{P_S}{N_0}\quad[\mathrm{bit/s}]\end{aligned}$$

> $\ln2$是换底公式多出来的

从上面的近似中，我们可从两个维度分析定义香农限

1. 单纯增加带宽也会引入更大的噪声，边际收益收敛于$1.44\frac{P_S}{N_0}$，这个极大值被称为香农限
2. 考虑无差错传输的信道容量最小值：1bps，可得$\frac{P_S}{N_0}$最小为$\ln2=-1.6dB $,这个极小值也称为香农限
3. 上述两个角度都在描述香农限，本质上是一致的
4. $\frac{P_S}{N_0}$并不是信噪比，而是`归一化信噪比`、`SNR–带宽乘积`或者`单位带宽信噪比`

> 这下知道为什么信噪比还有负的了吧\~

---

