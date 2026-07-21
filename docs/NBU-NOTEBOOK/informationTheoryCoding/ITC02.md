# ITC02 信源与信息熵

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## **信源与信息熵**

- **信源是产生消息（符号）的来源**  
**由于消息的不确定性，信源是产生随机变量、随机序列和随机过程的源**
- **信源的基本特性是具有随机属性和概率统计特性**



### **信源的分类**

**信源有三大类，用概率空间（分布律）描述：**

#### **单符号离散信源**

**离散信源**

**$\begin{bmatrix}X\\P\end{bmatrix}=\begin{bmatrix}a_1&a_2&\cdots&a_n\\p(a_1)&p(a_2)&\cdots&p(a_n)\end{bmatrix}$**

**满足完备性**

$$\sum_ip_i=1$$

**连续信源**

**$\begin{bmatrix}X\\P\end{bmatrix}=\begin{bmatrix}(a,b)\\p_X(x)\end{bmatrix}$**

**$p_X$为概率密度函数，满足$\int_a^bp_X(x)dx=1$**

---

#### **符号序列信源**

**以符号序列为整体的消息**

**$\begin{bmatrix}X\\P\end{bmatrix}=\begin{bmatrix}X=x_1&X=x_2&\cdots&X=x_{n^L}\\p(x_1)&p(x_2)&\cdots&p(x_{n^L})\end{bmatrix}$**

**如**

**$\begin{bmatrix}X\\P\end{bmatrix}=\begin{bmatrix}X=000&X=001&\cdots&X=111\\p_0^3&p_0^2p_1&\cdots&p_1^3\end{bmatrix}$**

- **无记忆信源的联合概率密度等于边缘概率密度之积**
- **离散平稳无记忆信源亦称为独立同分布信源**

---

#### **连续信源**

1. **连续平稳信源（时间离散，幅值连续）**

**连续型随机变量，与时间起点无关（无记忆）**

**$\begin{gathered}p_{x}(x)=p_{X}(x_{1},x_{2},...,x_{N})\\=\prod_{i=1}^Np_X(x_i)\\=\begin{bmatrix}p_X(x)\end{bmatrix}^N\end{gathered}$**

1. **随机波形信源（均连续）**

**一般用平稳遍历的随机过程来描述**

- **采样得到的随机变量之间一般是线性相关的，故随机波形信源也是一种有记忆信源**

---

#### **马尔可夫信源**

**当前时刻符号与前`m`个符号有关，而与此前的符号无关，即**

**$\begin{aligned}& P(X_n=x_n\mid X_{n-1}=x_{n-1},X_{n-2}=x_{n-2},\ldots,X_1=x_1)\\&= P(X_n=x_n\mid X_{n-1}=x_{n-1},X_{n-2}=x_{n-2},\ldots,X_{n-m}=x_{n-m})\mathrm{~for~}n>m\end{aligned}$**

**!!! question "后无效性 OR 记忆性？"**

**随机信号处理告诉我们，马尔可夫链具备后无效性**  
**但高阶马链定义式似乎又意味着记忆性的存在**  
**是否矛盾了？**

**从定义出发，迎刃破解**

无记忆性，实际上是马尔可夫性，即

$$P(X_{n+1}|X_n,X_{n-1},\ldots,X_0)=P(X_{n+1}|X_n)$$

$$\text{给定当前状态 }X_n\text{,未来状态 }X_{n+1}\text{ 的分布不依赖于过去的状态 }X_{n-1},X_{n-2},\ldots.$$

另一方面，后无效性可以描述为

$$P(X_{n+1}|X_n,X_{n-1},\ldots,X_0)=P(X_{n+1}|X_n,X_{n-1},\ldots,X_{n-m+1})$$

这与m阶马链定义完全一致！

得出结论，高阶马尔科夫链不满足标准的一阶马尔科夫性，但它满足后无效性

同时，可以通过构造扩展状态向量将其转换为一阶马尔科夫链

$$Y_n=(X_n,X_{n-1},...,X_{n-m+1})$$

---

为了更好的分析高阶马尔可夫信源，规定状态描述的矢量集

$$s_i=(x_{i_1},x_{i_2},\cdots x_{i_m})\quad x_{i_k}\in A=\{a_1,\cdots a_n\}$$

状态表示按照左旧右新的形式排布，类似队列`queue`，右进左出

举个例子，二阶马氏链，含有子集$[0,1]$，若上一状态是0，当前为1  
则状态表示为`01`



> 转移概率、齐次、一步/n步概率矩阵、`c-k`方程的概念与性质见[随机信号分析笔记](https://dixilog.github.io/NBU-NOTEBOOK/RanSigAnalysis/RSA05/#_4)

#### 稳态分布

定义各状态**稳态分布**为状态转移的极限

$$\lim_{k\to\infty}p_{ij}^{(k)}=W_j$$

另有更便于计算的表达式，与转移矩阵有关

$$\sum_iW_iP_{ij}=W_j$$

再通过

$$\sum_{j}W_{j}=1$$

即可解出各稳态分布概率

---

!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-d033a6906d.png){: .zoom}
    
    
    
!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-4b415a2448.png){: .zoom}
    
    
    
!!! tip "题外话—隐马尔可夫"
    
    在实际应用中，某些信源(如语音)的输出是非平稳随机过程，但在一个短时段(也称为“帧”)内是平稳的，而相邻的帧与帧之间的状态可能会发生变化。  
    因而可以看成局部平稳(即具有短时平稳性),而全局是非平稳的随机过程
    
    它在经过抽样和量化后成为时间和取值均为离散的准平稳随机序列，这样的信源可以用隐马尔可夫模型(hidden markov model,HMM)来加以描述。
    
    隐马尔可夫模型应用领域非常广泛，如语音识别、人脸检测、机器人足球、图像去噪、图像识别和 DNA/蛋白质序列分析等。
    
---

### 信息度量

#### 自信息

- **信息量**：对消息中信息的不确定性的量化
- **度量原则**：与种类、重要程度无关，与概率成反比

由定义推演，函数需为负相关，且多个事件同时发生（概率相乘）转为多个信息量相加

因此选对数

- **自信息量定义式**：$I=-\log_{2}\left[p(x)\right] (bit)$ 

> 因此，二进制每个码元 $(0|1)$ 信息量为`1 bit`
> 
> 进一步可得到，M进制每一码元信息量为 $l o g_{2}M$

- **自信息量性质**非负、单调递减、可加
- **联合自信息量**  
$I(x_i,y_j)=-\log p(x_i,y_j)=\log\frac{1}{p(x_i,y_j)}$
- **条件自信息量**  
$I(x_i\mid y_j)=-\log p(x_i \mid y_j)=\log\frac{1}{p(x_i \mid y_j)}$

> 这里的下标是定值
> 
> 即表示分别取X、Y中的一个基本事件（样本点）

---

#### 单符号离散信源熵

平均信息量(面向信源)，记为信息量的统计平均值 H



**你需要先入为主的意识到，熵无非是离散随机变量*函数* 的期望E，或者条件期望**



##### **符号熵表达式**

$$H={\color{red}E[I(X)]}=\sum_{i=1}^{M}p(x_{i})I_{i}=\sum_{i=1}^{M}p(x_{i})\log_{2}{\frac{1}{p(x_{i})}}(\mathrm{bit/符号})$$

> 求所有样本信息量，即随机变量`X`的加权和（均值）

【Jensen 不等式】告诉我们等概时熵最大，在后面的证明中会具体说明这一不等式

---

##### **条件熵**

看看[维基百科](https://zh.wikipedia.org/wiki/%E6%9D%A1%E4%BB%B6%E7%86%B5)

$$H(X\mid Y)=-\sum_{i,j}p(x_{i},y_{j})\log p(x_{i}\mid y_{j})$$

---

??? note ”如果你忘记了条件期望，看看这里的证明“

基于[概率论之统计特征](https://dixilog.github.io/NBU-NOTEBOOK/probabilityTheory/PT03/#_4)，我们能了解到

- 条件期望$E(X\mid Y)$仍是【随机变量】，随`Y`变化而变化 | 当`Y = y`时确定
- 条件期望有俩种形式，显然条件熵是前者

  - 给定`Y`：$E(X\mid Y)$
  - 给定`Y=y`：$E(X\mid Y=y)$

闭着眼睛写出确定条件的条件期望：

$$E[X\mid Y=y]=\sum_i{\color{red}x_j}P\{X=x_i\mid Y=y\}$$

照猫画虎，试试计算条件熵$H(X\mid Y=y)=H(X\mid y)$

从定义出发，熵是对信息量求期望，即

$$H(X\mid y) = E[I(X\mid y)] = -\sum_{i}p(x_{i}\mid y){\color{red}\log p(x_{i}\mid y)}$$

> 这里的求期望是对信息量，也就是对随机变量函数求期望
> 
> 例如$E(f(X \mid y))=E(log(X \mid y))=\sum_i p(x_i \mid y) log(x_i \mid y)$
> 
> 所以式子中是$\log p(x_{i}\mid y)而非\log p(x_{i})$

再进一步，我们终于要得到条件熵的定义式

$$H(X\mid Y)=E[I(X\mid Y)]=E_Y[I(X\mid Y=y_j)]=\sum_j p(y_j)\cdot H(X\mid y_j)\\ =\sum_jp(y_j)\left[-\sum_ip(x_i\mid y_j)\log p(x_i\mid y_j)\right]$$

> 放在连续域就是二重积分

有乘法公式

$$p(x,y)=p(y) \cdot p(x\mid y)$$

故原式能合并为

$$H(X\mid Y)=-\sum_j\sum_ip(x_i,y_j)\log p(x_i\mid y_j)\xlongequal{简化}-\sum_{i,j}p(x_i,y_j)\log p(x_i\mid y_j)$$

> 好了，了解原理后，还是希望你能记住它\~

---

##### **联合熵**

不难观察得到

  
$H(X,Y)=-\sum_{i,j}p(x_{i},y_{j})\log p(x_{i},y_{j})$

**一个常用恒等式**

$$H(X,Y)=H(X)+H(Y \mid X)$$

或者

$$H(X,Y)=H(Y)+H(X \mid Y)$$

> 土想想，概率上的相乘等于熵（对数）上的相加

---

??? quote "证明"

从联合熵定义出发

$$H(X,Y)=-\sum_{i,j}p(x_{i},y_{j})\log p(x_{i},y_{j})$$

根据条件概率定义

$$p(x,y)=p(x)p(y\mid x)$$

有

$$\log p(x,y)=\log p(x)+\log p(y\mid x)$$

代入得

$$\begin{aligned}H(X,Y)&=-\sum_{i,j}p(x_i,y_j)\left[\log p(x_i)+\log p(y_j\mid x_i)\right]\\&=-\sum_{i,j}p(x_i,y_j)\log p(y)-\sum_{i,j}p(x_i,y_j)\log p(y_j \mid x_i)\\ &=-\sum_{i,j}p(x_i,y_j)\log p(y)+ H(Y \mid X) \end{aligned}$$

对于前一项，进行简单的转化

$$\sum_{i}\sum_{j} p(y_j)p(x_i \mid y_j)\log p(y)\xlongequal{\sum_i p(x_i \mid y) =1}=-H(Y)$$

所以，证毕

---





??? question "题外话 | 奇怪的问题"

为什么边缘概率 $p(x)$ 与条件概率 $p(x\mid y)$ 无必然联系，但单符号熵$H(X)$却一定≥条件熵$H(X \mid Y)$？



- 先采用最朴素的思想

虽然$p(x)$与$p(x|y)$ 有数学上的关系

$$p(x)=\sum_j p(x,y_j)=\sum_{j}p(y_j)p(x|y_j)$$

但不同的y下的条件概率是相对无规律的，可能是集中或分散，与边缘概率没有确定的联系，故无法比较大小

而熵是对概率分布的不确定性进行加权平均的度量，即求期望特征，这是稳定的。那么在存在约束条件（Y）的前提下，条件熵的不确定量一定会变小，于是得到结论。

- 现在来推导

$$H(X)\geq H(X|Y)$$

其实灰常简单，即利用平均互信息的非负性解决问题

$$I(X;Y)=H(X)-H(X\mid Y)=\sum_{x,y}p(x,y)\log\frac{p(x\mid y)}{p(x)} \geq 0$$

> 但，还有问题
> 
> - 啥是互信息？
> - 为什么平均互信息量有非负性？
> 
> 往下看吧\~

---

#### 互信息

!!! info "一图以蔽之"
    
    反复回忆这张图，就会明白一切
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-8ce04e3c05.png){: .zoom}
    
##### 平均互信息量

表示XY的相关性，与熵是同一层概念

$$\mathrm{I(X;Y)=H(X)-H(X\mid Y)}$$

相减意为：给定`Y`后获得关于`X`的信息量，即`X和Y`共同的信息

得到联合熵的又一种表达式：

$$\mathrm{H(XY)=H(X)+H(Y\mid X)=H(X)+H(Y)-I(X;Y)}$$

**定义式**

$$I(X;Y)=H(X)-H(X\mid Y)=\sum_{i,j}p(x_i,y_j)\log\frac{p(x_i\mid y_j)}{p(x_i)}$$



??? quote "推导一下"

代入展开得

$$H(X)-H(X\mid Y)=-\sum_xp(x)\log p(x)+\sum_{x,y}p(x,y)\log p(x\mid y)$$

其中，边缘概率可用联合概率边缘求和得到，即

$$p(x)=\sum_y p(x,y)$$

代入合并同类项即可

$$H(X)-H(X\mid Y)=\sum_{x,y}p(x,y)\left[\log p(x\mid y)-\log p(x)\right]=\sum_{x,y}p(x,y)\log\frac{p(x\mid y)}{p(x)}$$

!!! note "题外话"
    
    在互信息量中，分号有时也代表`条件`的分隔符，如平均条件互信息量
    
    $$I(X;Y=y_0)=\sum_x p(x \mid y_0) \log_2 \frac{p(x \mid y_0)}{p(x)}$$
    
    而平均互信息量也可以表示为
    
    $$I(X;Y)=\sum_y p(y)I(X;Y=y)$$
    
    这与条件熵有异曲同工之妙
    
---

##### 离散信源互信息量

也叫点互信息量，定义为

$$I(x;y)=\log_a\frac{p(x \mid y)}{p(x)},x\in X,y\in Y$$

非常糟糕，因为互信息量与平均互信息量采用了同样的符号I😭

> 可能为负，因为边缘概率与条件概率并无关联

---

##### 平均互信息量的性质

- **非负性**

$$I(X;Y)=H(X)-H(X\mid Y)=\sum_{x,y}p(x,y)\log\frac{p(x\mid y)}{p(x)} \geq 0$$

亦称为`KL散度`非负性

而KL散度非负性证明的关键在于利用 凸函数 与 Jensen 不等式



**KL散度**

对于两个离散概率分布 p(x) 和 q(x),[KL 散度](https://zh.wikipedia.org/wiki/%E7%9B%B8%E5%AF%B9%E7%86%B5)定义为

$$D_\mathrm{KL}(p\|q)=\sum_xp(x)\log\frac{p(x)}{q(x)}$$

> 是不是长得很像

**凸函数**

$$\text{如果函数 }f\text{ 满足对于任意 }x_1,x_2\text{ 以及 }t\in[0,1]$$

$$f(tx_1+(1-t)x_2)\leq tf(x_1)+(1-t)f(x_2)$$

则称`f`为凸函数

> 也许`t=0.5`代入会让你对它更熟悉一些

**Jensen不等式**

对于任意凸函数`f`和随机变量`Z`,有

$$f(E[Z])\leq E[f(Z)]$$

> 看看[维基百科](https://zh.wikipedia.org/wiki/%E7%B0%A1%E6%A3%AE%E4%B8%8D%E7%AD%89%E5%BC%8F)，是你高中就学过的琴生不等式

OK让我们继续

**先证明KL散度的非负性**

令随机变量`T`为

$$T=\frac{q(x)}{p(x)}$$

那么有

$${E}_p\left[T\right]=\sum_xp(x)\frac{q(x)}{p(x)}=\sum_xq(x)=1$$

已知$f(t) = -\log t$为凸函数，有

$$f\left({E}_p[T]\right)\leq{E}_p[f(T)]$$

左边直接代入，即为零，则整理得

$$0\leq\sum_xp(x)\left[-\log\frac{q(x)}{p(x)}\right]$$

得证

再将互信息量改写为

$$I(X;Y)=D_{\mathrm{KL}}(p(x,y)\parallel p(x)p(y))$$

根据非负性，直接得证\~

---

- **互易性**

$$I(X;Y)=I(Y;X)$$

$$\begin{gathered}I(X;Y)=\sum_{x,y}p(xy)\log\frac{p(x\mid y)}{p(x)}\\=\sum_{x,y}p(xy)\log\frac{p(y\mid x)}{p(y)}=I(Y;X)\end{gathered}$$

---

- **极值性**

$$\begin{aligned}&I(X;Y)\leq H(X)\\&I(Y;X)\leq H(Y)\\&当X,Y独立\\&I(X;Y)=0\end{aligned}$$

---

- **凸性**

互信息可表示成$[p(x_i),p(y_j \mid x_i )]$的函数

$$\begin{aligned}I(X;Y)&=\sum_{i,j}p(x_{i})p(y_{j}\mid x_{i})\log\frac{p(y_{j}\mid x_{i})}{p(y_{j})}\\&=\sum_{i,j}p(x_{i})p(y_{j}\mid x_{i})\log\frac{p(y_{j}\mid x_{i})}{\sum_{i}p(x_{i})p(y_{j}\mid x_{i})}=I\left[p(x_{i}),p(y_{j}\mid x_{i})\right]\end{aligned}$$

- 当$p(y_j\mid x_i )$确定，即给定信道，则函数存在最大值，视为信道限
- 当$p(x_i)$确定，即信源给定，则函数存在最小值，视为最小传输量

---

##### 条件互信息量

z一定下，x与y的条件互信息量

$$I(x;y\mid z)=\log_{a}\frac{p(x\mid y,z)}{p(x\mid z)},x\in X,y\in Y,z\in Z$$

---

##### 联合互信息量

x与yz的联合互信息量

$$I(x;y,z)=\log_{a}\frac{p(x\mid y,z)}{p(x)},x\in X,y\in Y,z\in Z$$

> 注意`z`的位置

---

##### 信息不增性

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-7d4b23b6dd.png){: .zoom}

???+ "推导过程"

假设Y条件下X与Z独立，则有

$$I(X;Y,Z)=I(X;Y)+I(X;Z\mid Y)\\I(X;Y,Z)=I(X;Z)+I(X;Y\mid Z)$$

> 同理的，把X遮住，联想概率的乘法公式即可

两项作差

$$I(X;Z)=I(X;Y)+I(X;Z\mid Y)-I(X;Y\mid Z)$$

因为独立，中间项为0，所以

$$I(X;Z)\leq I(X;Y)$$

!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-28f5a0c6aa.png){: .zoom}
    
    
    
    
    
---

#### 相对熵

定义为在同一概率空间上的两个[概率测度](https://zh.wikipedia.org/wiki/%E6%A6%82%E7%8E%87%E6%B5%8B%E5%BA%A6)的Kullback_Leibler距离，亦称为前面的KL散度

$$D_\mathrm{KL}(p\|q)=\sum_xp(x)\log\frac{p(x)}{q(x)}$$

- 非负性
- 非互易性

**相对熵的意义**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-f3965e59bd.png){: .zoom}

---

#### 熵的性质

> 有所重复

- 非负性

$$H(X)=H(p_1,p_2,\cdots,p_n)\geq0$$

- 确定性
- 对称性

$$H(X)=H(p_1,p_2,\cdots,p_n)=H(p_n,p_{n-1},\cdots,p_1)$$

- 香农辅助定理

$$H(p_1,p_2,p_3)=-\sum_ip_i\log p_i\leq-\sum_ip_i\log q_i$$

- 最大熵定理

等概最大

$$H(X)\leq H(\frac{1}{M},\frac{1}{M},\cdots\frac{1}{M})=\log M$$

- 条件熵小于无条件熵

前已证明

$$H(Y \mid X)\leq H(Y)$$

- 扩展性

$$\lim_{\varepsilon\to0}H_{n+1}(p_1,\cdots,p_n-\varepsilon,\varepsilon)=H_n(p_1,\cdots,p_n)$$

- 可加性

$$H(X,Y)=H(X)+H(Y\mid X)$$

X、Y独立下

$$H(X,Y)=H(X)+H(Y)$$

- 递增性

若以一事件拆分成更小的若干个概率和不变的事件，则熵增

$$\begin{aligned}&H_{n+m-1}(p_1,p_2,\cdots,p_{n-1},{\color{red}q_1,q_2,\cdots,q_m})=H_n(p_1,p_2,\cdots,p_{n-1},{\color{red}p_n})+p_nH_m(\frac{q_1}{p_n},\frac{q_2}{p_n},\cdots,\frac{q_m}{p_n})\end{aligned}$$

---

### 离散序列信源的熵

#### 无记忆序列熵

##### 序列熵

定义序列符号数为L，则

$$H({\bf X})=H(X_L,X_{L-1},...,X_1)=H({ X^L})=-\sum_{i=1}^{n^{L}}p(x_{i})\log p(x_{i})$$

> 粗体表示序列，大写表示随机变量，小写表示符号
> 
> 下标表示指针，上标表示序列缩写|只保留最高位

独立同分布下，序列的熵为L个符号熵之和，即

$$H({\bf X})=LH(X)(bit/序列)$$

##### **消息熵**

平均符号熵为序列熵均值，即

$$H_{L}(\mathbf{X})=\frac{1}{L}H(\mathbf{X})\xlongequal{i.i.d.}H(X)(bit/sym)$$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-164c167b7b.png){: .zoom}

---

#### 有记忆序列熵

##### 序列熵

> 加上条件

$$\begin{aligned}H(\mathbf{X})&=H(X_{1})+H(X_{2}\mid X_{1})+\cdots+H(X_{L}\mid X_{1}\cdots X_{L-1})\\&=\sum_{i=1}^{L}H(X_{i}\mid X^{i-1})\end{aligned}$$

##### 消息熵

$$H_{L}(\mathbf{X})=\frac{1}{L}H(\mathbf{X})=\frac{1}{L}\sum_{i=1}^{L}H(X_{i}\mid X^{i-1})$$



!!! example "例"
    
    记离散有记忆信源：$\begin{bmatrix}X&P\end{bmatrix}=\begin{bmatrix}a_1&a_2&a_3\\\frac{11}{36}&\frac{4}{9}&\frac{1}{4}\end{bmatrix}$
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-4c255fbb61.png){: .zoom}
    
    单符号消息熵为
    
    $$H_1({\bf X})=-\sum_a p(a)\log p(a) = 1.543 \: bit/sym $$
    
    双符号消息熵为
    
    $$H_{2}(\mathbf{X})=\frac{1}{2}H(\mathbf{X})=\frac{1}{2}H(X^2) =\frac{1}{2}H(X_1,X_2)=0.5[H(X_1)+H(X_2 \mid X_1)]$$
    
    其中
    
    $$H(X_2 \mid X_1)=-\sum_{i,j} p(x_i,x_j)\log p(x_j \mid x_i)=-\sum_{i,j} p(x_i)\cdot p(x_j \mid x_i)\log p(x_j \mid x_i)=0.872\: bit/sym$$
    
    所以
    
    $$H_{2}(\mathbf{X})=1.21 \: bit/sym$$
    
    > 消息熵变小了，因为存在相关性，信息量减少
    
---

##### 性质

> 序列长度变大，概率均值变小，信息熵递减收敛，最终确定

- $H(X_L\mid X^{L-1})\text{ 是L的单调非增函数}$
- $H_L(\mathbf{X})\geq H(X_L\mid X^{L-1})$
- $H_L(\mathbf{X})\text{ 是L的单调非增函数}$  
$H_0(X)\geq H_1(X)\geq H_2({\bf X})\cdots\geq H_\infty({\bf X})$
- 极限信息量：$\text{当}L\to\infty时，消息熵的极限为条件熵的极限$  
$H_\infty(\mathbf{X})=\lim_{L\to\infty}H_L(\mathbf{X})=\lim_{L\to\infty}H(X_L\mid X^{L-1})$

---

因为序列中首尾相关性弱，可认为当前状态只和前m个状态有关，即m阶马链

#### 马氏链极限熵

对于n阶齐次遍历马链

> 不做推导，直给结论

$$H(X_{m+1}\mid X_{m},\cdots X_{1})=H_{\infty}(\mathbf{X})=\sum_{i}p(s_{i})H(X\mid s_{i})$$

> s为状态，p(s)为[稳态概率](https://o2ywbvn10e.feishu.cn/docx/AY6FdVwDRoXgTYxbwH2cdw6unEf#share-XkHEdrq3noykoHxkI5pcGWjqnJd)

可理解为：求给定状态下的条件熵，并加权平均



!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-6c3a99bb94.png){: .zoom}
    
    以某一状态为例
    
    | s1状态下的**X** | 0 | 1 |
    |-|-|-|
    | p(x) | 0.9 | 0.1 |
    
    ∴$H(X\mid s_1)=-0.1 \log 0.1 -0.9 \log 0.9  = H(0.9,0.1)$
    
---

### 连续信源的熵与互信息

#### 幅度连续的单个符号信源熵

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-d3e58603d4.png){: .zoom}



---

#### 最大熵定理

不同功率约束条件意味着不同的最大熵；无约束则不存在最大熵

- 均匀分布|幅值约束于[a,b]

当$p_{X}(x){=}1/(\mathrm{b-a})$时，$H_c(X)=log(b-a)$

- 高斯分布 | 与均值无关，只与方差有关

$$p(x)=\frac{1}{\sqrt{2\pi\sigma^{2}}}e^{\frac{-(x-m)^{2}}{2a^{2}}}$$

$$\begin{aligned}H_{c}(X)&=-\int_{-\infty}^{\infty}p(x)\log[\frac{1}{\sqrt{2\pi\sigma^{2}}}e^{\frac{-(x-m)^{2}}{2\sigma^{2}}}]dx\\&=\log\sqrt{2\pi\sigma^2e}=\frac{1}{2}\log(2\pi e\sigma^2)\end{aligned}$$

---

### 冗余度

表示给定信源在实际发出消息时所包含的多余信息

来自于信源符号间的相关性&分布的不均匀性

$$\gamma=1-\eta=1-\frac{H_{\infty}(X)}{H_{m}(X)}$$

$\eta$为信息效率

绝对冗余度

$$\gamma_{abs}=C-I(X;Y)$$

相对冗余度

$$\gamma_{rel}=\frac{\gamma_{abs}}{C}\cdot 100\%$$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-e136501569.png){: .zoom}

---

