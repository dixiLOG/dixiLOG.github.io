# WSN03 物理层设计

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 基于RF通信的WSN物理层设计

> 物理层的作用：使用物理信号完成比特流传输

### RF点对点通信框图

**Overview**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-0e09cfc1fe.png){: .zoom}

### 信道编码

传送门：<cite doc-id="Q9lUdl5zoowPiyx7qYjcxb0RnEg" file-type="docx" title="通信原理笔记" type="doc"></cite>

概念回顾：

- 码率 | 码距 | 线性分组码 | 模二加 | 汉明码  
- 生成矩阵 | 监督矩阵 | 纠检错 | 矫正子与错误图样

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-8bd36ed4bc.png){: .zoom}

---

### 调制

分为窄带、扩频(宽带)与超宽带

- 窄带特征：带宽远远小于中频
- 窄带调制：调幅、调频、调相

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-5beffd045f.png){: .zoom}

为解决QPSK跳变对硬件电路高压摆率的压力，增添OQPSK

> 延迟其中一路码元半个周期，使得最多只有`1bit`的变化

---

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-2b2ac62dac.png){: .zoom}

- 直接扩频 DSSS（回忆通信原理）
- 跳频扩频 FHSS

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-faa243f08b.png){: .zoom}

---

- 超宽带

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-02b78a75a2.png){: .zoom}

---

!!! question "Q&A"

    Q：什么是二进制调制？

    A：二进制调制是一种基本的数字调制方式，它使用两种不同的波形分别表示二进制数字 1 和 0。常见的二进制调制方式包括幅移键控（ASK）、频移键控（FSK）和相移键控（PSK）等，这些方式都基于改变载波信号的幅度、频率或相位来区分 1 和 0。

    Q：什么是M进制调制？

    A：M 进制调制是一种更高级的数字调制技术，其中 M=2^n，n 表示每个符号所包含的比特数。例如，当 M=4 时，即 4 进制调制，每个符号可以表示 2 个比特的信息（因为 2^2=4）。

    Q：比较二进制调制与M进制调制，对于设计一个节能的WSN，我们应该选取哪种调制？

    A：在设计一个节能的无线传感器网络（WSN）时，需要综合考虑二进制调制和 M 进制调制的优缺点。二进制调制的电路简单，所需的发射功率较低，且在起振时间较长的情况下，其能量效率较高。而 M 进制调制虽然可以缩短发送时间，降低通信持续时间，但需要更高的发射功率和更复杂的收发机电路，且随着 M 的增加，调制电路与频率合成器的功率消耗会显著增加。因此在大多数情况下二进制调制更适合用于节能的 WSN 设计。

---

### 无线信道

**EM波传播现象**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-59074e87a5.png){: .zoom}

即产生多径效应 <cite doc-id="Q9lUdl5zoowPiyx7qYjcxb0RnEg" file-type="docx" title="通信原理笔记" type="doc"></cite>，表现为

- 多路叠加
- 衰减
- 接收信号/功率为随机变量（过程）

**衰减计算**

> 此事在[无线通信](https://o2ywbvn10e.feishu.cn/docx/HGlTdLtAnoMcz7x1hXpcb1WenRb#share-EaXed2LfYoiHYDxcb6fcxRLYnWb)中亦有记载

令发射信号功率、收发距离和接收信号平均功率分别为

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-72e41f238e.png){: .zoom}

定义路径损耗（Pass Loss）

$$\mathrm{PL}(d)=\frac{P_t}{P_r(d)}$$

用dB表示，有

$$\mathrm{PL}(d)[\mathrm{dB}]=10\mathrm{log}\frac{P_{t}}{P_{r}(d)}=10\mathrm{log}P_{t}-10\mathrm{log}P_{r}(d)=P_{t}[dB]-P_{r}(d)[\mathrm{dB}]$$

> 当用dB表示，则变换为加减

再变换，有

$$PL(d)[\mathrm{dB}]=PL(d_0)[\mathrm{dB}]+10\eta\log_{10}\left(\frac{d}{d_0}\right)$$

其中，

- $PL(d_0)$为参考位置路径损耗（距离$d_0$处的路径损耗）
- $\eta (2\leq \eta \leq 6)$为路径损耗指数，随环境复杂度提高而上升

---

**多径效应/衰落**

衰落是指由于信道的变化导致接收信号的幅度发生随机变化的现象

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-6956ae1289.png){: .zoom}

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-e4c77ea99b.png){: .zoom}

多径下的随机接收功率模型

$$P_r(d)[\mathrm{dB}]=P_t[\mathrm{dB}]-\mathrm{PL}(d)[\mathrm{dB}]$$

$$PL(d)=PL(d_0)[\mathrm{dB}]+10\eta\log_{10}\left(\frac{d}{d_0}\right)+X_{\sigma}（均值为0的高斯随机变量）$$

---

### 信道可靠性指标

- `BER`描述调制信道环境，体现解调误码率
- `PER`描述编码信道环境，体现译码误包率

> 要降低`PER`，需要降低`BER` | 使用更高效的纠检方法

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-c4fe709935.png){: .zoom}

---

#### 给定BER计算PER

假设使用`(n,k)`分组码，一数据帧长度共L bit，且至多可纠`t`个错误

则有分组数$\frac{l}{k}$

那么一个分组仍然出错的概率就是

$$\sum_{i=t+1}^n\binom{n}{i}p_b^i(1-p_b)^{n-i}$$

只要有一个组出错，数据帧被视为出错；则一个数据帧出错的概率为

> 1-P{所有组都不出错}

$$1-(1-\sum_{i=t+1}^n\binom{n}{i}p_b^i(1-p_b)^{n-i})^{l/k}$$

---

!!! success "第三次课后练习题"

    1. 二进制调制所需要的能耗必然比M进制大（×，没有必然联系，甚至小一点 | 但误码率是最低的）
    2. 调频扩频通信不适合WSN（×，WSN调制方式有窄带、扩频和超宽带三种方式）
    3. PL的定义为接收/发送信号功率（×，反了）
    4. OQPSK与QPSK相比，可避免因两比特同时变换造成的信号幅值突变问题（√）
    5. 多径传输中，两个相近的接收天线的瞬时接收功率相近（×，考虑相位引起的波动 | 平均接收功率服从大尺度损耗，是相近的）
    6. 降低BER可以降低PER（√）

---

#### BER的决定性因素

- 接收SNR

  - 包含信道衰减与多径效应
  - 为随机变量
- 调制与解调方法

---

#### 简化的信道模型

> 取随机过程的均值代替瞬时分析

- **圆盘图表单元模型**

存在门限，用于区分`可靠|不可靠通信`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-1003e2bf2b.png){: .zoom}

单位圆图模型（Unit Disk Graph Model）下有误码率

$$p_b^{udg}=\begin{cases}0&\mathrm{if}d\leq r_{comm}\\0.5&\mathrm{if}d>r_{comm}&\end{cases}$$



- **统计信道模型**

添加模糊过渡区间

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-b85ac92be2.png){: .zoom}

---

### 本课程所采纳的物理层标准

> IEEE 802.15.4 物理层标准

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-b1beca97f1.png){: .zoom}

---

