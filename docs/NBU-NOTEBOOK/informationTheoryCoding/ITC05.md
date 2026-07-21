# ITC05 信源编码

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 信源编码

旨在解决信源符号之间存在相关性，且概率分布不均匀（影响熵）的问题，通过压缩冗余消息提高传输有效性和编码效率

!!! note "本章涉及的编码方法都基于无失真这一前提"
    
### 编码概念

将信源消息分组，依照固定码表，映射成一个码字(codeword)。满足上述过程过程的码组称为分组码，小名块码

对于信源符号

$$\begin{bmatrix}X\\P\end{bmatrix}=\begin{bmatrix}a_1&a_2&\cdots&a_n\\p(a_1)&p(a_2)&\cdots&p(a_n)\end{bmatrix}$$

对于存在`n`种的信源符号取值，如果信源输出序列长度为`L`，则排列组合一下，码表大小为$n^L$



!!! tip "题外话 | 为什么L越大误码率越低"
    
    根据`大数定理`，在大量独立同分布的随机试验中，样本均值会收敛于总体均值，即各种符号出现的频率会趋近于它们各自的概率
    
    以概率1收敛表达式（强大数定理）
    
    $$P(\lim_{n\to\infty}\bar{X}_n=\mu)=1$$
    
    依概率收敛表达式（弱大数定理）
    
    $$\lim_{n\to\infty}P(|\bar{X}_n-\mu|<\epsilon)=1$$
    
    > 一个小问题，为什么俩种收敛的极限与求概率位置不一样呢？这个问题的答案能回答为什么一个是强，一个是弱
    > 
    > Tips：一个是点点收敛，一个是概率表达式求极限的值并不要求每一点都收敛
    
    从而满足符号概率分布匀称
    
    且随着序列长度`L`的增加，非典型序列出现的概率会指数级下降，从而使得编码效率更高，但设备复杂度更高
    
    
    
    同时，复习一下`中心极限定理`
    
    对于独立同分布的一系列随机变量，当`n`足够大时，标准化后的样本均值（或者样本和）服从标准高斯分布，即
    
    $$\frac{\bar{X}_n-\mu}{\sigma/\sqrt{n}}\xrightarrow{d}N(0,1)\quad\mathrm{as~}n\to\infty$$
    
    $$\frac{S_n-n\mu}{\sigma\sqrt{n}}\xrightarrow{d}N(0,1)\quad\mathrm{as~}n\to\infty$$
    
    $$\text{其中}\xrightarrow{d}\text{表示依分布收敛}$$
    
---

#### 编码分类

- 根据码字的长度，可分为定长码与变长码
- 信源符号与码字满足双射，则为非奇异码，否则为奇异码

> 当符号没有被分配码字时，便会出现错码

- 唯一可译码的码字分割过程不具备歧义的可能

唯一可译码的必要条件为克劳夫特不等式（存在性定理）

$$\sum_{i=1}^nm^{-K_i}\leq1$$

> $n、m、K$分别是码字数量、进制数和对应码长

- 唯一可译码分为非即时码（需要通过下一码字判断是否接受完整）与即时码

> 即时码的任何码字都不是其他码字的前缀

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-6cb5af2522.png){: .zoom}

---

#### 码树

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-99539379f2.png){: .zoom}

---

### 无失真编码定理

本节你将会偶遇：香农第一定理（可变长无失真信源编码定理）

> 下面的分析皆假设符号无记忆

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-0fce0d594b.png){: .zoom}

- 信源输出符号序列长度为`L`，对于每个符号都有`n`种可能，所以一次输出一共有$n^L$中可能
- 编码序列长度为$K_L$，每一位的值由进制数`m`所控，如`m=2`时编码符号为`{0 1}`  
故编码符号一共有$M=m^{K_L}$种可能，编码序列所带的总信息量为$K_L\log m$

通过上面的解释，不难得到，单符号所需的平均信息量为

$$\overline{K}=\frac{K_{L}}{L}\log m=\frac{1}{L}\log M$$

从有效性角度分析，我们希望能使$\overline{K}$在不失真的前提下尽可能小

具体来说，有定长/变长编码定理



!!! tip "题外话 | 香农第一定理"
    
    存在性定理：任何信息源都有一个内在的信息量（熵），这是无失真压缩的极限。我们可以设计编码方案，  
    使得每个信源符号的平均码长无限接近其熵，但不可能小于熵
    
---

#### 定长编码定理

希望找到无失真译码的最小信息率

令无记忆平稳信源平均符号熵为$\mathbf{H_L(X)}$。当`L`足够大时，必然可使译码差错几乎无失真

前提条件：

$$\overline{K}=\frac{K_L}{L}\log m\geq H_L(\mathbf{X})+\varepsilon$$

能达到差错率要求

$$P_e\leq\frac{\sigma^2(\mathbf{X})}{L\varepsilon^2}$$

> 其中：$\sigma^{2}(\mathbf{X})=E\{[I(\mathbf{x}_{i})-H(\mathbf{X})]^{2}\}$，I为信息量

特殊的，若单符号平均信息量恰好为平均符号熵，即

$$\overline{K}=H_L(\mathbf{X})$$

则处于临界状态，无法确定是否失真

---

#### 编码效率

$$\eta=\frac{H_L(\mathbf{X})}{\overline{K}}\leq 1$$

代入最小信息量，得到最佳编码效率

$$\eta=\frac{H_{_L}(\mathbf{X})}{H_{_L}(\mathbf{X})+\varepsilon},\quad\varepsilon>0$$



!!! example "例"
    
    有离散无记忆信源概率空间
    
    $$\begin{bmatrix}X\\P\end{bmatrix}=\begin{bmatrix}a_1&a_2&a_3&a_4&a_5&a_6&a_7&a_8\\0.4&0.18&0.1&0.1&0.07&0.06&0.05&0.04\end{bmatrix}$$
    
    可得信源熵为
    
    $$H(X)=-\sum_{i}^{8}p_{i}\log p_{i}=2.55~bit/sym$$
    
    - 要求最佳编码效率为`90%`
    
    若取`L=1`
    
    $$\overline{K}=2.55\div90\%=2.8~bit/sym$$
    
    则有
    
    $$\eta=\frac{H(X)}{H(X)+\varepsilon}=0.90,\quad\Rightarrow\varepsilon=0.28$$
    
    方差为自信息量的均方值与均值平方之差
    
    $$\sigma^{2}(X)=D[I(x_{i})]=\sum_{i=1}^{8}p_{i}(\log p_{i})^{2}-[H(X)]^{2}=7.82(bit)^{2}$$
    
    
    
    - 若要求译码错误概率$\delta \leq 10^{-6}$
    
    $$L \geq \frac{\sigma^2(\mathbf{X})}{P_e \varepsilon^2} = \frac{7.82}{0.28^2 \times 10^{-6}}=9.8 \times 10^7 \approx 10^8$$
    
    > 定长编码下，有效性与可靠性不可兼得
    
#### 变长编码定理

大概率符号采用短码，小概率则反之，进而通过降低平均码长提高编码效率，其译码错误概率在理论上是`0`

平均码长为各个序列的码长加权和

$$\overline{K}=\sum_ip(a_i)K_i$$

- 对于单符号无记忆信源，用`m`进制进行变长编码，则一定存在

$$\frac{H(X)}{\log m}\leq\overline{K}<\frac{H(X)}{\log m}+1$$

- 对于离散平稳无记忆序列，平均符号熵为$H_L(X)$，则必定有

$$H_L(\mathbf{X})\leq\overline{K}<H_L(\mathbf{X})+\varepsilon$$

为了衡量编码方法到最佳码之间的差距，定义剩余度为

$$\gamma=1-\eta=1-\frac{H_{L}(X)}{\frac{K_{L}}{L}\log m}=1-\frac{H_{L}(X)}{\overline{K}}$$



!!! example "例"
    
    有离散无记忆信源，分布为
    
    $$\begin{bmatrix}X\\P\end{bmatrix}=\begin{bmatrix}a_1&a_2\\3/4&1/4\end{bmatrix}$$
    
    则信源熵为
    
    $$H(X)=\frac{1}{4}\log4+\frac{3}{4}\log\frac{4}{3}=0.811~bit/syms$$
    
    - $L=1$
    
    平均码长为$\overline{K}=1$
    
    编码效率为：
    
    $$\eta = \frac{H(X)}{\overline{K}}=0.811$$
    
    信息效率为：
    
    $$R=0.811~bit/二元码符号$$
    
    - $L=2$
    
    编码方式为
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-146ee80b96.png){: .zoom}
    
    $$\begin{aligned}\overline{K_{2}}&=\frac{9}{16}\times1+\frac{3}{16}\times2+\frac{3}{16}\times3+\frac{1}{16}\times3\\&=\frac{27}{16}\text{ 二元码符号/信源序列}\end{aligned}$$
    
    $$\overline{K}=\frac{\overline{K_2}}{2}=\frac{27}{32} ~二元码符号/信源符号$$
    
    编码效率：
    
    $$\eta_2=\frac{32\times0.811}{27}=0.961$$
    
    信息效率：
    
    $${R}_2{=}0.961\text{比特}/\text{二元码符号}$$
    
    同样的编码效率，定长需要$10^7$才能保证低误码错误概率下达到相同的编码效率，而变长编码可以做到无失真
    
    可见，变长编码的发明极大地推动了信源压缩编码的发展
    
---

### 香农编码

香农编码构建的码树利用按概率排序与递归划分保证前缀特性，即唯一即时性（看不懂就GPT一下）

#### 方法论

- 按$p(a_i)$降序排列
- 计算自信息量$-\log p(a_i)$
- 向上取整（并不是最优），得到码长$K_i$
- 计算排序后的累加概率$P_i$
- 取$P_i$二进制的$K_i$位，即得到符号的码字



!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-e9ae129d20.png){: .zoom}
    
    平均码长为
    
    $$\overline{K}=\sum_{i=1}^7p(a_i)K_i=3.14\text{ 码元/符号}$$
    
    信息效率（编码效率）为
    
    $$R=\frac{H(X)}{\overline{K}}=\frac{2.61}{3.14}=0.831\text{ 比特/码元}$$
    
---

### 限失真编码定理

> 香农第三定理：保真度准则下的信源编码定理，了解一下

这一定理研究的是在允许一定失真度（保真度准则）的前提下，对信源进行编码所能达到的理论压缩极限。

对于连续信源，其信息量通常是无穷大的，因此不可能进行完全无失真的压缩编码。此时，必须引入失真，进行限失真编码。无失真编码可以视为限失真编码在失真度为零时的特例

与无失真编码相比较，需要把平均符号熵改成率失真函数，即

$$R(D)\leq\overline{K}<R(D)+\varepsilon$$

文字表述为：

当信息率$R>R(D)$时，总能找到一种编码方法，使得$\overline{K}$满足上述式子



!!! caution "限失真信源编码定理只证明了最优编码是存在的，但并没有给出构造这种最优编码的具体方法"
    
---

### 哈夫曼编码

> [维基百科：哈夫曼编码](https://zh.wikipedia.org/wiki/%E9%9C%8D%E5%A4%AB%E6%9B%BC%E7%BC%96%E7%A0%81)

哈夫曼编码是一种用于无损数据压缩的贪心算法(Greedy Algorithm)。它根据字符出现的频率来构造最优前缀码，使得平均编码长度最短

- 与香农码一样，哈夫曼编码是一种前缀码(Prefix Code)，即任何一个字符的编码都不是另一个字符编码的前缀
- 编码结果不唯一（甚至你很难和答案一致）
- 多进制需要补零

#### 方法论

> 这里与课本有别，更倾向于代码实现逻辑，意会即可

1. 按$p(a_i)$升序排列（优先队列/最小堆）
2. 为每个字符创建一个叶节点
3. 从优先队列中取出两个概率最低的节点A、B
4. 创建一个新的内部节点，其概率为A和B之和
5. 将A和B作为新节点的子节点（通常会按照大小排列，但实则无所谓）
6. 将新创建的内部节点放回优先队列中，重复步骤，直到只剩下根节点
7. 从哈夫曼树的根节点开始遍历，对左/右子树分别添0/1
8. 当到达一个叶节点时，从根节点到该叶节点的路径上形成的 ''和 1 序列就是该叶节点对应字符的哈夫曼编码

> 注意，左右子树的分布与0/1分配没有硬性要求，但需要在计算中保持固定

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-b4ca222725.png){: .zoom}

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-747e721750.png){: .zoom}

`handwriting`时建议采用伪淘汰赛支架（Tournament Bracket），更为清晰

> 如果你上课没走神，应该明白我在说什么

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-d4edef2f51.png){: .zoom}

---

### 算术编码

> 实际上是香农-费诺-埃利亚斯编码 (Shannon-Fano-Elias Coding) ，与正统的算术编码有所差异

算术编码 (Arithmetic Coding) 是一种熵编码（非分组码）方法，用于无损数据压缩。与哈夫曼编码为每个符号分配一个固定的、可变长度的二进制码字不同，算术编码将整个输入消息映射到一个位于区间 `[0, 1)` 内的唯一浮点数（或者说，一个足够精确的二进制分数）

- 非分组码，不是为单个符号或固定大小的符号块生成独立的码字，而是将整个消息视为一个单元进行编码
- 所需参数少，不需要大码表
- 通常能比哈夫曼编码获得更高的压缩率，尤其是在符号概率分布不均匀
- 很容易地与自适应概率模型结合
- 但背负更高的计算复杂度，同时浮点数精度必然引入失真

#### 方法论

> [知乎[什么是算术编码]](https://zhuanlan.zhihu.com/p/390684936)

**很难描述，只可意会🤣**

> 有点像套娃版十三折线编码？

- 依据消息中逐个符号的概率，通过迭代地、按比例地细化并收缩一个初始的单位数值区间 `[0,1)`，最终将整个信息序列唯一地映射并浓缩为此区间内的一个高精度特定点或极小范围
- 首先，根据消息中各个符号的出现概率，将初始的 `[0, 1)` 区间划分为对应各个符号的子区间
- 然后，依据消息中实际出现的符号序列，逐个选择相应的子区间，并将其作为下一次划分的新区间
- 每处理一个符号，当前区间就按比例缩小，最终得到的极小区间内的任何一个数值都能够代表整个原始消息
- 解码时，使用相同的概率模型和接收到的编码数值，通过逆向重复区间划分和符号识别的过程，即可精确地恢复出原始消息序列

**若`S=abda`**

<grid>
<column width-ratio="0.500000">
![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-96e7aa0187.png){: .zoom}
</column>
<column width-ratio="0.500000">
![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-952b16ab62.png){: .zoom}
</column>
</grid>

最终取左区间（弹道偏左🤪），即`23/64`，二进制为`0.010111`，码长为7，故结果码字为`0101110`

信源熵为

$$H(X)=-[P(a)\log P(a) + P(b) \log P(b) + P(c)\log P(c) + P(d)\log P(d)]\\=-\frac{1}{2}\log\frac{1}{2}-\frac{1}{4}\log\frac{1}{4}-2\times\frac{1}{8}\log\frac{1}{8}=1.75\text{bit/sym}$$

编码效率为

$$\eta=\frac{1.75}{7/4}=100\%$$

- 消息序列的概率$p(S)$为每个符号的概率乘积
- 码长为$L=\left\lceil\log\frac{1}{p(S)}\right\rceil$
- 尾数若不为0，则最后一位进位
- 编码效率$\eta = \frac{H(X)}{\bar{L}}$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-d3bcc0ca6f.png){: .zoom}



> 这里直接求自信息量而非熵，因为一共就一个序列

---

**译码过程**

- 初始在[0,1)区间，判断区间对应符号
- 减去符号对应区间左端点（累积概率），变为该符号对应区间
- 重复上面的步骤

> 绝知此事要躬行



!!! quote "LZ编码、游程编码等编码方式，课程不再介绍，自行百度"
    
---

