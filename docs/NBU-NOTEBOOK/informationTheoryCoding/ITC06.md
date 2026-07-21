# ITC06 信道编码

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 信道编码

> 再再见[通信原理：差错控制编码](https://dixilog.github.io/NBU-NOTEBOOK/commuPrinc/cp09/)
> 
> - 信道编码定义与作用
> - 差错图样（错误图样）与汉明距离
> - 信道类型
> - 三种差错控制方式

### **二元线性空间与对偶空间**

> 这一部分上课并未提及，因课后作业涉及而补充

**二元域与四维向量空间**

- **二元域 (Binary Field) F2**：

  - 这是一个只包含两个元素 {0, 1} 的数域
  - **加法规则**： 模2加法，也即“异或” (XOR) 运算。
- **四维向量空间**：

  - 空间中的每一个向量（或点）是一个由4个分量组成的元组 (x1,x2,x3,x4)，其中每个分量 xi 都来自二元域 F2 (即只能是0或1)
  - 这个空间总共包含16个不同的向量

---

- **线性子空间 (Linear Subspace)**：

  - 它是向量空间的一个子集，并且这个子集自身也满足向量空间的两个基本性质： 
  
    1. **加法封闭性**： 子空间内任意两个向量的和仍然在该子空间内
    2. **标量乘法封闭性**： 子空间内任意向量与二元域中任一标量（0或1）的乘积仍在子空间内
- **基 (Basis)**：

  - 一组线性无关的向量，可以通过它们的线性组合生成整个子空间。
  - 子空间的维度 (Dimension) 就是基向量的数量。
- **如何从基生成子空间**：

  - 假设子空间 W 的基是 {v1,v2,...,vk}。
  - 那么 W 中的所有向量都可以表示为：w=a1v1+a2v2+...+akvk，其中系数 ai 属于二元域
  - **例**： 在题目中，子空间 W 的基是 v1=(1,0,0,0) 和 v2=(0,1,0,0)。它的所有向量就是： 
  
    - 0⋅v1+0⋅v2=(0,0,0,0)
    - 0⋅v1+1⋅v2=(0,1,0,0)
    - 1⋅v1+0⋅v2=(1,0,0,0)
    - 1⋅v1+1⋅v2=(1,1,0,0)
  - 所以，子空间 W={(0,0,0,0),(1,0,0,0),(0,1,0,0),(1,1,0,0)}。

---

**对偶空间（正交补）**

- **向量内积 (Dot Product)**：

在$F_2^n$空间中，两个向量的内积定义为：

$$u\cdot v=u_1v_1+u_2v_2+...+u_nv_n\quad(\mathrm{mod~}2)$$

> 计算结果遵循模2加

- **正交 (Orthogonal)**：

  - 如果两个向量 u 和 v 的内积 u⋅v=0，则称它们是正交的
- **对偶空间 (Dual Space) ${W^⊥}$**：

对于一个子空间 W，它的对偶空间(也称正交补) 是由$F^4_2$中所有与W中每一个向量都正交的向量所组成的集合

- **关键性质**： 一个向量如果与子空间 W 的 **所有基向量** 都正交，那么它就与 W 中的所有向量都正交
- **如何求解对偶空间**：

  1. 确定子空间 W 的一组基 {v1,v2,...,vk}
  2. 设一个任意向量为 w=(x1,x2,...,xn)
  3. 建立方程组，让 w 与每一个基向量的内积都为0： w⋅v1=0w⋅v2=0⋮w⋅vk=0
  4. 解出这个关于 x1,x2,...,xn 的线性方程组。所有满足条件的向量 w 就构成了对偶空间 W⊥

  - **例**： 在题目中，要找 W⊥，其中 W 的基是 v1=(1,0,0,0) 和 v2=(0,1,0,0)
  
    - 设任意向量为 w=(x1,x2,x3,x4)
    - w⋅v1=x1⋅1+x2⋅0+x3⋅0+x4⋅0=x1=0
    - w⋅v2=x1⋅0+x2⋅1+x3⋅0+x4⋅0=x2=0
    - 因此，必须满足 x1=0 和 x2=0。而 x3,x4 可以是任意的0或1
    - 所有满足条件的向量为 (0,0,x3,x4)，即： W⊥={(0,0,0,0),(0,0,0,1),(0,0,1,0),(0,0,1,1)}

---

### 有扰离散信道的编码定理

> 因为是开卷而不得不再抄一遍

#### 基本概念

- 差错符号（误码率）

$$P_e=\frac{\text{错误码元数}}{\text{传输总码元数}}=\frac{N_e}{N}$$

- 差错比特（误信率）

$$P_b=\frac{\text{错误比特数}}{\text{传输总比特数}}=\frac{I_e}{I_b}$$

> 若定义每个码元中仅误 1 bit， $P_{b}\le P_{e}$

---

- 信道类型（差错图样类型）

随机差错：错码独立出现

突发差错：脉冲信号引发的集中错码

混合差错：混合随机与突发信道

- 差错控制方式

检错重发【自动重传请求（Automatic Repeat-reQuest，ARQ)】

前向纠错（Forward Error Correction，FEC）

混合自动重传（HARQ/HEC）【结合ARQ与FEC】

反馈校验

检错删除（常用于语音传输）

- 纠错码分类

从功能角度：检错码 、纠错码 

对信息序列的处理方法：分组码、卷积码

码元与原始信息位的关系：线性码、非线性码 

差错类型：纠随机差错码、纠突发差错码、介于中间的纠随机/突发差错码。

构码理论：代数码、几何码、算术码、组合码等 

---

#### 码空间与分组码

码空间 (Code Space)是编码理论中的一个基础概念，它指的是一个包含所有合法码字的集合

分组码是包含信息码元（信元`k`）与监督码元（督元，`r`）的编码，用 `(n,k)` 表示。在分组码中，督元仅与本组信元相关（仅仅监督本组，而与其他组无关）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-401e4125cf.png){: .zoom}

信元，这里为消息（message），指原始信息；消息长度`k`表示每个消息向量的维度

对于消息的每一符号（序列）可以取`q`种不同的值（例如，二进制系统中`q=2`），则信元有$q^k$种可能

分组编码器的输出称为（许用）码组，或者码字（Codeword）,码字长度为`n`，则需许用码组$q^n$个

> 分组编码的任务就是从字典中构建出符合要求的码字（许用码组），而其集合称为码空间

---

#### 随机编码

在信息论与编码理论的研究中，随机编码是一种核心的理论构造方法，尤其在证明信道编码定理（如香农第二定理）方面扮演着至关重要的角色。它并非旨在提出一种具体实用的编码方案，而是通过分析随机选择的编码的平均性能，来揭示存在性能优良编码的可能性。

考虑一个`q`进制的`(N,K)`分组码，总共存在$M=q^K$中信元组合，即码本中有`M`个码字

在随机编码的框架下，我们设想一个过程，其中整个码本（即包含 M 个长度为 N 的码字的集合）是通过随机方式生成

也就是说，这个字典（码本）矩阵的维度是`N*M`，每一元素随机取`q`种之一。码集共有$q^{NM}$种可能

那么，可以得到第`m`个码集$\{c\}_m$被选中的概率是

$$P(\left\{\mathbf{c}\right\}_{m})=q^{-NM}$$

每一个码本都会存在对应的差错概率$P_{e}(\{c\}_{m})$

均匀分布下，则所有码空间的码集的平均差错概率为

$$\overline{P_{e}}=\sum_{m=1}^{q^{NM}}P_{e}(\left\{\mathbf{c}\right\}_{m})P(\left\{\mathbf{c}\right\}_{m})=q^{-NM}\sum_{m=1}^{q^{NM}}P_{e}(\left\{\mathbf{c}\right\}_{m})$$

这个平均错误概率是随机编码理论中的一个关键量。如果能够证明其随着码长`N`的增加可以达到任意小的值（在码率低于信道容量的前提下），那么就意味着必然至少存在一个码本，其错误概率小于或等于这个平均值

这为高性能编码的存在性提供了有力的理论依据，即使它没有直接指出如何具体地构造出这样的优良编码

---

#### 信道编码定理

信道编码定理（香农第二定理）为通过带噪声的通信信道进行可靠数据传输设定了根本的理论极限，  
即信道容量内必然存在编码方案，能够使得通信过程中的错误概率达到任意小

到底有多小，误码率的量化就是本节的重点内容

具体来说，平均错误概率存在一个上界，且错误概率能够随着码字长度`N`的增加而指数级减小：

$$\overline{P}_e<e^{-NE(R)}$$

`R(bit/sym)`是编码速率（码率），为每个码元所携带的信息量（你可以理解为熵），$R_b = R_B \times R$

$$R=\frac{\log M}{N} = \frac{K}{N}$$

`E(R)`为可靠性函数（误差指数），与码率呈负相关

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-3ef333ec9f.png){: .zoom}

所以，只要选择的码率`R`小于信道容量（从而保证 E(R)>0），通过增加码字长度`N`，平均错误概率便可以被控制到任意小的水平，而且是呈诱人的指数下降趋势

---

### 纠错编译码

#### 基本思路

我们自然希望可靠性函数越大越好，很自然地引出增大信道容量`C`，或者减小码率`R`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-9c4e74f9ac.png){: .zoom}

- 增大信道容量`C`

  - 参考香农公式，你应该知道怎么做

  > 算了还是给一个吧$C=B\log(1+\frac{S}{n_0B})$
- 减小码率`R`
- 增大码长`N`

---

#### 译码方法

就是信号估计，分为最大后验和最大似然

> 此事在无线通信亦有记载，让我CV一下偷个懒

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-81b880c814.png){: .zoom}

**需要注意**

- 最大似然与最大后验的联系与差异
- 若信源分布均匀，则二者等价（均匀分布下概率为常数，不影响求最值）

在等价的前提下，对于无记忆信道，由乘法公式与不相关的特性，可得

$$P(r|c_i)=\prod_{j=1}^NP(r_j|c_{ij})$$

为了方便处理，两边取对数，将乘积改为求和

特殊的，若信道还是二进制的，则最大似然译码可简化为最小汉明距离译码，误码性能可由码距描述

> 所以我们从数理推演的角度回答了，通原中直接用码距计算误码率的原因！

脑子里面不自觉出现“最小码距是非零码组的码重”，相比线性分组码也不远啦\~

---

### 线性分组码

> 和通原一模一样，在此直接堆叠概念

若希望用`r`个督元纠错一位错码 ，则`r`至少满足

$2^{r}-1\geq n$ 或 $2^{r}\geq k+r+1$

取等号即为汉明码，即 $\boxed{(n,k)=(2^{r}-1,2^{r}-1-r)}$

- 码组按照`｛k,r｝`方式排列结构的分组码称为【系统码】
- 校正子矩阵结果（也称为伴随式）与错码位置的对应关系【监督关系式】

$$\begin{aligned}&S_1S_2S_3&&\text{错码位置}&&S_1S_2S_3&&\text{错码位置}\\&001&&a_0&&101&&a_4\\&010&&a_1&&110&&a_5\\&100&&a_2&&111&&a_6\\&011&&a_3&&000&&\text{无错码}\end{aligned}$$

#### 生成矩阵和校验矩阵

> 校验矩阵就是监督矩阵

$$\begin{array}{cc}\mathbf{c}~=&\mathbf{m}&\mathbf{G}\\\mathbf{1}\times n&\mathbf{1}\times k&k\times n\\\text{码字}&\text{消息}&\text{生成矩阵}\end{array}$$

将监督关系式改为监督方程

$$\begin{gathered}S_{1}=a_6\oplus a_5\oplus a_4\oplus a_2\\S_{2}=a_6\oplus a_5\oplus a_3\oplus a_1\\{S_3}=a_6\oplus a_4\oplus a_3\oplus a_0\end{gathered}\begin{aligned}\to\begin{cases}a_6\oplus a_5\oplus a_4\oplus a_2=0\\a_6\oplus a_5\oplus a_3\oplus a_1=0\\a_6\oplus a_4\oplus a_3\oplus a_0=0&&\end{cases}\end{aligned}$$

改写成监督矩阵的形式

$$\begin{aligned}{1\cdot a_{6}+1\cdot a_{5}+1\cdot a_{4}+0\cdot a_{3}+1\cdot a_{2}+0\cdot a_{1}+0\cdot a_{0}=0}\\ {1\cdot a_{6}+1\cdot a_{5}+0\cdot a_{4}+1\cdot a_{3}+0\cdot a_{2}+1\cdot a_{1}+0\cdot a_{0}=0}\\ {1\cdot a_{6}+0\cdot a_{5}+1\cdot a_{4}+1\cdot a_{3}+0\cdot a_{2}+0\cdot a_{1}+1\cdot a_{0}=0}\end{aligned}$$

即

$$\mathbf{H}={\left[\begin{array}{l}{1110100}\\ {1101010}\\ {1011001}\end{array}\right]}$$

> 为`(r·n)`的矩阵，每一列为错码位置对应的监督表达式

无错码情况下

$$\begin{bmatrix}1110100\\1101010\\1011001\end{bmatrix}\begin{bmatrix}a_6\\a_5\\a_4\\a_3\\a_2\\a_1\\a_0\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix}$$

码组为`A`。故可简记为

$$H\cdot A^{T}=0^{T}=S^{T}$$

对于典型监督矩阵H，可写作

$$H=\begin{bmatrix}1110&\vdots&100\\1101&\vdots&010\\1011&\vdots&001\end{bmatrix}=[PI_r]$$

将信元矩阵称为`P阵(r·k)`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-188b6e97e8.png){: .zoom}

---

同样可由

$$\begin{array}{c}{{a_{2}=a_{6}\oplus a_{5}\oplus a_{4}}}\\ {{a_{1}=a_{6}\oplus a_{5}\oplus a_{3}}}\\ {{a_{0}=a_{6}\oplus a_{4}\oplus a_{3}}}\end{array}$$

归纳出矩阵表达式

$${\left[\!\!{\begin{array}{l}{a_{2}}\\ {a_{1}}\\ {a_{0}}\end{array}}\!\right]}={\left[\!\!{\begin{array}{l}{\mathbf{1110}}\\ {\mathbf{1101}}\\ {\mathbf{1011}}\\ {\mathbf{1011}}\end{array}}\!\!\right]}{\left[\!\!{\begin{array}{l}{a_{6}}\\ {a_{5}}\\ {a_{4}}\\ {a_{3}}\end{array}}\!\!\right]}=\mathbf{P}\,{\left[\!\!{\begin{array}{l}{a_{6}}\\ {a_{5}}\\ {a_{4}}\\ {a_{3}}\end{array}}\!\!\right]}$$

现希望有【生成矩阵】,要求

$$\mathbf{A}=[a_{6}a_{5}a_{4}a_{3}a_{2}a_{1}a_{0}]=[a_{6}a_{5}a_{4}a_{3}]\cdot\mathbf{G}$$

观察得，将`P`转置后(`Q`阵 ) 左侧添加 (k·k) 的单位阵

$$G=[I_{k}Q]={\left[\begin{array}{l}{1000{\dot{:}}111}\\ {0100{\dot{:}}110}\\ {0010{\dot{:}}101}\\ {0001{\dot{:}}011}\end{array}\right]}$$

此即为典型生成矩阵（左边为单位阵`I`）

> 每一列为该位置符号对应的信元表达式

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-c2b403e5ae.png){: .zoom}

!!! tip "你不得不知道的"
    
    让我们充分理解这一句话
    
!!! quote "G的各行本身就是一个码组"
    
    ∴ 若有$k$个线性无关的码组,则可用其作为生成矩阵 $G$ ,并由它生成其余码组。
    
    这句话中imply两条信息：
    
    1. 生成矩阵的【每一行】都是一个【许用码组】
    
    $$G=[I_{k}Q]={\left[\begin{array}{l}{1000{\dot{:}}111}\\ {0100{\dot{:}}110}\\ {0010{\dot{:}}101}\\ {0001{\dot{:}}011}\end{array}\right]}$$
    
    $$\mathbf{A}=[a_{6}a_{5}a_{4}a_{3}a_{2}a_{1}a_{0}]=[a_{6}a_{5}a_{4}a_{3}]\cdot\mathbf{G}$$
    
    我们知道其是由 单位阵（用于表示信息阵码组）与对应的监督关系式 组成的
    
    ∴每一行当然就是一个许用码组，这就是生成矩阵的意义 | 不信你对照着瞄一眼
    
    $$\begin{aligned}&\text{信息位}&&\text{监督位}&&\text{信息位}&&\text{监督位}\\&\mathbf{a}_{6}\sim\mathbf{a}_{3}&&\mathbf{a}_{2}\mathbf{a}_{1}\mathbf{a}_{0}&&\mathbf{a}_{6}\sim\mathbf{a}_{3}&&\mathbf{a}_{2}\mathbf{a}_{1}\mathbf{a}_{0}\\&0000&&000&&1000&&111\\&0001&&011&&1001&&100\\&0010&&101&&1010&&010\\&0011&&110&&1011&&001\\&0100&&110&&1100&&001\\&0101&&101&&1101&&010\\&0110&&011&&1110&&100\\&0111&&000&&1111&&111\end{aligned}$$
    
    **而把思维逆转过来，这是不是表明，当已知上面的许用码组时，能直接反向解析出生成矩阵呢？**
    
    那么监督矩阵也就信手拈来了
    
    1. 非典型矩阵可通过行列变换变成典型矩阵
    
    结合第一点，我们能得出推断：若所给许用码组构成的生成矩阵并不典型，则可以通过行变换转换为典型
    
    **监督矩阵与生成矩阵的关系总结**
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-c76fad9e11.png){: .zoom}
    
    
    
!!! example "例"
    
    $$\text{考虑一个(6,3)线性分组码,其生成矩阵 }\mathbf{G}=\begin{bmatrix}1&1&1&0&1&0\\1&1&0&0&0&1\\0&1&1&1&0&1\end{bmatrix}$$
    
    $$\begin{aligned}&(1)\text{将该码系统化处理后,计算系统码码集,并列出映射关系。}\\&(2)\text{计算系统码的校验矩阵 }H\text{。若收码 }r=\begin{bmatrix}100110\end{bmatrix},\text{检验它是否为许用码组。}\\&(3)\text{根据系统码生成矩阵,画出编码器电原理图。}\end{aligned}$$
    
    - 行变换求出标准生成矩阵
    - 通过$\bf n=k \cdot G$求出系统码字（许用码组）
    
    $$\begin{array}{cccc}\text{信}\text{息}&\text{码}\text{字}&\text{系统码字}\\\mathrm{000}&\mathrm{000000}&\mathrm{000000}\\\mathrm{001}&\mathrm{011101}&\mathrm{001011}\\\mathrm{010}&\mathrm{110001}&\mathrm{010110}\\\mathrm{011}&\mathrm{101000}&\mathrm{011101}\\\mathrm{100}&\mathrm{111010}&\mathrm{100111}\\\mathrm{101}&\mathrm{100111}&\mathrm{101100}\\\mathrm{110}&\mathrm{001011}&\mathrm{110001}\\\mathrm{111}&\mathrm{010110}&\mathrm{111010}\end{array}$$
    
    - 求出校验矩阵（监督矩阵）
    
    $$\boldsymbol{G}=\begin{bmatrix}1&0&0&1&1&1\\0&1&0&1&1&0\\0&0&1&0&1&1\end{bmatrix}=\begin{bmatrix}\boldsymbol{I}_3\mid \boldsymbol{P}\end{bmatrix},\boldsymbol{H}=\begin{bmatrix}\boldsymbol{P}^T\mid \boldsymbol{I}_{n-k}\end{bmatrix}=\begin{bmatrix}1&1&0&1&0&0\\1&1&1&0&1&0\\1&0&1&0&0&1\end{bmatrix}$$
    
    - 通过生成矩阵，可用信元表示督元
    
    $$\begin{aligned}&c_2=m_2+m_1\\&c_1=m_2+m_1+m_0\\&c_0=m_2+m_0\end{aligned}$$
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-eea65736c1.png){: .zoom}
    
---

#### 校正子与错误图样

- 错误图样（错码矩阵）

显示哪里错了

$$B-A=E=\begin{bmatrix}e_{_{n-1}}e_{_{n-2}}\cdots e_{_1}e_{_0}\end{bmatrix}(模2)\\e_i=\begin{cases}\mathbf{0},&\text{当}b_i=a_i&\text{若}\mathbf{e}_i=0,\text{表示该接收码元无错}\\\mathbf{1},&\text{当}b_i\neq a_i&\text{若}\mathbf{e}_i=1,\text{表示该接收码元有错}&&\end{cases}$$

- 校正子（也称为伴随式）

> 就是前面的`S`,指出哪个错了

若接收码组为`B`，则此码组的校正子为

$$S=H B^{T}=H(A+E)^{T}=H A^{T}+H E^{T}=0+H E^{T}$$

所以

$$S=H E^{T}=E H^{T}$$

故得到译码完整步骤：计算S，找出错误码位置，纠正

- 由接收到的码组 $B$ 计算 ： $S=B\cdot H^{\intercal}$ ;
- 由 $S$ 找到错误图样 $E$ ;
- 由公式 $A=B+E$ 得到译码器译出的码组。

> 注意到，伴随式`S`维度是`r*1`，即`n-k`个方程，但`E`中有`n`个未知数，必然不是双射，而是存在多解

每一次都这样计算的话，过于繁琐，会导致机魂不悦🤪于是用空间换时间，选择打表（标准阵列译码表）



!!! example "例 | 标准阵列译码表"
    
    (5,2)系统线性码，设收码为`10101`，构造标准阵列译码表，并估计发码
    
    $$G=\begin{bmatrix}1&0&1&1&1\\0&1&1&0&1\end{bmatrix}$$
    
    通过生成矩阵，可知所有许用码组{01101,10111,11010}
    
    监督矩阵为
    
    $$\bf{H}=\begin{bmatrix}1&1&1&0&0\\1&0&0&1&0\\1&1&0&0&1\end{bmatrix}$$
    
    通过每一列即可得到校验子矩阵，即伴随式`S`与对应的错误图样`E`
    
    从许用码组与`E`可反推禁用码组
    
    | S | E | 01101 | 10111 | 11010 |
    |-|-|-|-|-|
    | 111 | 10000 | 11101 | 00111 | 01010 |
    | 101 | 01000 | 11101 | 00111 | 01010 |
    | 100 | 00100 | 00101 | 11111 | 10010 |
    | 010 | 00010 | 01111 | **10101** | 11000 |
    | 001 | 00001 | 01100 | 10110 | 11011 |
    
    所以应纠正为`10111`
    
    
    
#### 最小码距与检纠能力的关系

- 最小码距$d_{0}$：所有 许用码组 之间码距的最小值  
对于线性码，最小码距等于非全零码的最小重量，即 $d_{0}=w_{0}$
- 能检查出`e`个错码，需要 $d_{0}\geq e+1$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-086de35515.png){: .zoom}

> 上图可以检查出的错码为｛0,1,2｝

- 能纠正`t`个错码，需要 $d_{0}\geq2t+1$ ，即圆不重合

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-5bceb2be76.png){: .zoom}

- 同时纠正`t`个错码与检查`e`个错码。需要 $d_{0}\geq e+t+1$ $(e>t)$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-6d2f6af5b0.png){: .zoom}

- 最小码距的上限为

$$d_{\min}\leq(n-k+1)$$

取等号下称为极大最小距离码（DMC）

---

### 完备码与汉明码

若希望用`r`个督元纠错一位错码 ，则`r`至少满足

$2^{r}-1\geq n$ 或 $2^{r}\geq k+r+1$

取等号即为完备码。最常见的完备码类型为汉明码，即 $\boxed{(n,k)=(2^{r}-1,2^{r}-1-r)}$

---

### 循环码

**定义**

【任一】许用码组循环移位后仍为【许用码组】

**特点**

- 同一【循环圈】(类比数电有限状态机里面的循环)的【码重】相等
- 全0、全1自成循环圈

#### 循环码的一般表达

码多项式A(x)

$$A(x)=a_{n-1}x^{n-1}+a_{n-2}x^{n-2}+\cdots+a_{1}x+a_{0}$$

> 用于表达循环码组

用码多项式表达循环码，即

$$\boxed{x^i\cdot A(x)\equiv A^{\prime}(x)\quad(\text{模}(x^n+1))}$$

`i`为左移位数，`n`为码长

若一循环码组 $A(x)=x^{6}+x^{5}+x^{2}+1$ , 其码长$n=7$，现给定 $i=3$ , 则

$$\begin{aligned}&x^3\cdot A(x)=x^3(x^6+x^5+x^2+1)=x^9+x^8+x^5+x^3\\&=x^5+x^3+x^2+x\quad(\text{模}(x^7+1))\end{aligned}$$

!!! success "结论"
    
    一个长为`n`的循环码的码多项式 都是按模 $(x^{n}+1)$ 运算的一个余式
    
    
    
    基于生成矩阵每一行都是许用码组的特性，叠加循环码的左移亦许用特征
    
    我们惊喜的发现，只要找到一个码组，长成
    
    $$g=[0_{1\times k-1}\ ,\ \ 1\ ,\ \ r_{1\times r-1}]$$
    
    接着依次往左位移，最后行交换不就得到`G(x)`了嘛？即
    
    
    
    又或者，循环码的生成多项式 $g(x)$ 应该是 $(x^{n}+1)$ 一个 $(n-k)$ 次因子
    
    
    
    有点懵？看个例题就明白！
    
!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-e4857fa93e.png){: .zoom}
    
---

