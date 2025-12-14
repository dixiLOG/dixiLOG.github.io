# 随机信号的时域分析

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

!!! quote "让随机变量的所有概念随<span style="border-bottom: 1.5px dashed orange;">时间动起来</span>"

## 基本概念

**随机过程**

是 $\mathrm{X}(\mathrm{t},\ \zeta)\ (\mathrm{t}\in\mathrm{T},\ \zeta\in\Omega)$ 在时间进程中处于<span style="border-bottom: 1.5px dashed orange;">不同时刻</span>的<span style="border-bottom: 1.5px dashed orange;">随机变量</span>的<span style="border-bottom: 1.5px dashed orange;">集合</span>

是时间和样本点（样本函数）的 **二元函数**

- 固定时间，为随机变量
- 固定样本点，为样本函数

**样本**

两者都固定下的样本点

**样本空间**

样本的集合

**样本函数**

一个样本函数=一条轨迹

**样本函数空间**

样本函数的集合

**状态空间**

样本函数<span style="border-bottom: 1.5px dashed orange;">值域</span>


!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Y909bsbCooiZ1UxEUrgcDLmrnMe.png)

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/AevxbexNfopLLQxqkfvcUre2nZO.png)

---

## 随机过程 de 分类

1. 按时间和状态的离散/连续，排列组合得四种可能

- 时间区分【过程 or 序列】
- 状态区分【连续 or 离散】

2. 按概率分布或性质

- 按随机过程的概率分布分类有：高斯(正态)过程、瑞利过程、马尔可夫过程、泊松过程、维纳过程等
- 按随机过程统计特性有无平稳性分为：平稳随机过程和非平稳随机过程
- 按随机过程在频域的带宽分为：宽带随机过程和窄带随机过程、白噪声随机过程和色噪声随机过程等

---

## 随机过程 de 概率分布

- 随机过程的一维分布

> 反映任一孤立时刻的概率分布情况

分布函数： $F_{X}\left(x,t\right)=P\{X(t)\leq x\}\left(t\in T\right)$

概率密度：$f_{X}(x;t)={\frac{\partial F_{X}(x;t)}{\partial x}}$

离散下：$f_{Y}(y;t)=\sum_{i=1}^{m}\,p_{i}(t)\delta(y-y_{i})\;\;\;{\mathrm{i}}\in\mathrm{I}=\left\{1,\dots,\mathrm{m}\right\},\;\;p_{i}(t)=P\{Y(t)=y_{i}\}$

- 二维分布

> 反映任意俩个时刻的联合概率分布情况

联合分布函数：$F_{X}(x_{1},x_{2};t_{1},t_{2})=P\{X(t_{1})\leq x_{1};X(t_{2})\leq x_{2}\}\quad t_{1},t_{2}\in T$

联合概率密度： $f_{X}(x_{1},x_{2};t_{1},t_{2})={\frac{\partial^{2}F_{X}(x_{1},x_{2};t_{1},t_{2})}{\partial x_{1}\partial x_{2}}}$

---

## 随机过程 de 性质

同<span style="border-bottom: 1.5px dashed orange;">多维随机变量</span>一样，随机过程 X(t)的 n 维概率分布具有下列主要性质：

$$
\begin{array}{r l}&{F_{X}(x_{1},x_{2},...,-\infty,...,x_{n};t_{1},t_{2},...,t_{i},...,t_{n})=0}\\ &{F_{X}(\infty,\infty,...,\infty;t_{1},t_{2},...,t_{n})=1}\\ &{f_{X}(x_{1},x_{2},...,x_{n};t_{1},t_{2},...,t_{n})\geq0}\end{array}
$$

$$
\begin{array}{r l}&{\displaystyle\int_{-\infty}^{\infty}\cdots\int_{-\infty}^{\infty}f_{X}(x_{1},x_{2},...,x_{n};t_{1},t_{2},...,t_{n})d x_{1}d x_{2}...d x_{n}=1}\\ &{\displaystyle\int_{-\infty}^{\infty}\cdots\int_{-\infty}^{\infty}f_{X}(x_{1},x_{2},...,x_{n};t_{1},t_{2},...,t_{n})d x_{m+1}d x_{m+2}...d x_{n}}\\ &{=f_{X}(x_{1},x_{2},...,x_{m};t_{1},t_{2},...,t_{m})}\end{array}
$$

如果 X(ti),X(t2),...X(tn)统计独立，则有

$$
f_{X}(x_{1},x_{2},...,x_{m};t_{1},t_{2},...,t_{m})\!=f_{ X}(x_{1};t_{1})f_{X}(x_{2};t_{2})...f_{X}(x_{n};t_{n})
$$

---

## 随机过程 de 数字特征

!!! success "抓随机变量！！"

> 注意，一般积分内的 x 都是 EX ，根据<span style="border-bottom: 1.5px dashed orange;">随机变量函数</span>的性质求解

1. 期望—各个时刻的摆动中心

$$
E[X(t)]=\int_{-\infty}^{\infty}x\cdot f_{X}(x,t)dx=m_{X}(t)
$$

!!! info ""

    - ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/KUN2b7y2go70GgxdQwpci65AnIe.jpg)



2. 均方值、方差与均方差

**均方值**

$$
E[X^{2}(t)]=\int_{-\infty}^{\infty}x^{2}f_{X}(x,t)d x
$$

**方差**

$$
D[X(t)]=E\{[X(t)-m_{X}(t)]^{2}\}=\int_{-\infty}^{\infty}[x-m_{X}(t)]^{2}\cdot f_{X}(x,t)d x=\sigma_{X}^{2}(t)
$$

**均方差**

$$
\sqrt{D[X(t)]}=\sqrt{\sigma_{X}{}^{2}(t)}=\sigma_{X}\left(t\right)
$$



3. 离散下

均值： $m_{Y}(t)=\sum_{i=1}^{m}y_{i}p_{i}(t)$

均方值： $\varphi{_Y}^{2}(t)=E[Y^{2}(t)]=\sum_{i=1}^{m}{y_{i}}^{2}\,p_{i}(t)$

方差： ${\sigma_{X}}^{2}(t)=D[Y(t)]=\sum_{i=1}^{m}[y_{i}-m_{Y}(t)]^{2}\;p_{i}(t)$

4. 自相关函数、自协方差函数与自相关

> 任意俩个状态之间的<span style="border-bottom: 1.5px dashed orange;">相关性</span>，反映过程内部快慢

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/ViwLboRI9o2BrpxSXHfcujAWnqg.png)

**自相关函数定义**

$$
R_{X}(t_{1},t_{2})=E[X(t_{1})X(t_{2})]=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}x_{1}\cdot x_{2}\cdot f_{X}(x_{1},x_{2};t_{1},t_{2})d x_{1}x_{2}
$$

> **离散下**
>
> $$
> R_{X}(t_{1},t_{2})=\sum_{k_{1}\in\varepsilon_{y}}\sum_{k_{2}\in\varepsilon_{y}}k_{1}k_{2}\cdot P\{Y(t_{1})=k_{1},Y(t_{2})=k_{2}\}
> $$

**自协方差函数**

$C_{X}\left(t_{1},t_{2}\right)=R_{X}(t_{1},t_{2})-m_{X}(t_{1})\cdot m_{X}(t_{2})$

$t_{1}=t_{2}=t$ 时， $R_{X}(t,t)=E[X^{2}(t)]\Leftarrow$ 过程的均方值

$C_{X}\left(t,t\right)=D[X(t)]=\sigma_{X}^{2}\left(t\right)\Leftarrow$ 过程的方差

**相关系数**

$$
\rho_X(t_1,t_2)=\frac{C_X(t_1,t_2)}{\sigma_X(t_1)\sigma_X(t_2)}...........................\begin{cases}\sigma_X(t_1)\neq0\\\sigma_X(t_2)\neq0&\end{cases}
$$

!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/T3OJbOICmorC6yxJqdKcvHsSnWh.png)

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Gzqab9ckpo2TTyxfBvkcFsHhnTf.png)

    - 修改题目条件，改为每隔 0.5s 抛一次

    则二维分布列与相关函数发生变化，从俩种可能 $\rightarrow$ 四种

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Kn45bnkYqoGYtyxfgLicpktJnWA.png)

---

!!! example "例"

    $$
    \begin{aligned}&\text{ 设随机过程}\{X(t)=\mathrm{e}^{-tt},t>0\},\text{ 其中,随机变量 }\xi\sim U(0,1),\text{ 试求:}\\&(1)该过程的均值函数m(t);\\&(2)该过程的自相关函数R(s,t);\\&(3)该过程的一维概率密度f_{t}(x).\end{aligned}
    $$

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/IuyTbzCN7ojz38xxeEecOXE3nsh.png)

    > 求随机过程的概率密度函数,就是已知 `X` 的 `f(x)`,求 `Y`
    > 只不过是换个符号,例如已知 U,求 X

---

## 随机过程 de 特征函数

**一维特征函数**

同样的，加个 `t`

$$
Q_X(\mu,t)=E[e^{juX(t)}]=\int_{-\infty}^\infty e^{jux}f_X(x\mathrm{~;}t)dx
$$

有逆变换

$$
f_X(x,t)=\frac{1}{2\pi}\int_{-\infty}^\infty Q_X(u,t)\cdot e^{-j\mu x}d\mu
$$

n 阶原点矩

$$
E[X^n(t)]=(-j)^n\cdot\frac{\partial^nQ_X(\mu,t)}{\partial\mu^n}|_{\mu=0}
$$

---

**二维特征函数**

$$
\begin{gathered}Q_X(u_1,u_2;t_1,t_2)=E\left[\exp[ju_1X(t_1)+ju_2X(t_2)]\right]\\=\int_{-\infty}^\infty\int_{-\infty}^\infty e^{ju_1x_1+ju_2x_2}\cdot f_X(x_1,x_2;t_1,t_2)dx_1dx_2\end{gathered}
$$

逆变换

$$
f_X(x_1,x_2;t_1,t_2)=\frac{1}{\left(2\pi\right)^2}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}Q_X(u_1,u_2;t_1,t_2)\cdot e^{-j(u_1x_1+u_2x_2)}du_1du_2
$$

求偏导，可得其<span style="border-bottom: 1.5px dashed orange;">相关函数</span>，即

$$
R_X\left.(t_1,t_2)=-\frac{\partial^2Q_X\left(u_1,u_2;t_1,t_2\right)}{\partial u_1\partial u_2}\right|_{u_1=u_2=0}
$$

---

**n 维特征函数**

正逆变换

$$
Q_X(u_1,...,u_n;t_1,...,t_n)=E\left[\exp[ju_1X(t_1)+...+ju_nX(t_n)]\right]=\int_{-\infty}^\infty...\int_{-\infty}^\infty e^{ju_1x_1+...+ju_nx_n}f_X(x_1,...,x_n;t_1,...,t_n)dx_1...dx_n
$$

$$
\begin{aligned}&f_X(x_1,\cdots,x_n;t_1,\cdots,t_n)\\&=\frac{1}{\left(2\pi\right)^n}\int_{-\infty}^\infty\cdots\int_{-\infty}^\infty Q_X(u_1,\cdots,u_n;t_1,\cdots,t_n)e^{-j(u_1x_1+\cdots+u_nx_n)}du_1\cdots du_n\end{aligned}
$$

---

**离散**

$$
Q(u;t)=\sum_ie^{jux_i}P\{X(t)=x_i\}
$$

$$
Q(u_1,u_2;t_1,t_2)=\sum_j\sum_ie^{ju_1x_i+ju_2x_j}P\{X(t_1)=x_i;X(t_2)=x_j\}\quad(t_1,t_2)\in T
$$

---

## 平稳随机过程及其统计特征

> **不随时间的推移而变化，时不变的**

### 严平稳过程

设有随机过程{ X(t) , t ∈T}，若对于任意 n 和任意 t1<t2<…<tn， $t_i\in\mathsf{T}$ 时刻的 n 个状态的 n 维概率密度，<span style="border-bottom: 1.5px dashed orange;">其不随时间平移 </span>$\Delta$<span style="border-bottom: 1.5px dashed orange;"> 而变化</span>

1. **一维概率密度函数** 与时间无关
2. **二维概率密度函数** 只与 t1、t2 的时间间隔，时间差$\tau$有关， 而与“时间起点”无关

---

### 宽平稳随机过程

- **满足均方收敛**
- **均值$E[X(t)]$为常数，与 t 无关**
- **自相关系数 $R_{X}(t_{1},t_{2})$ 只与时间间隔 $\tau$ 有关**

!!! example "例 | 会推 | 一定记住答案"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/VZtpbAcceoowp8x2z87cKLdYn5g.png)

---

### 自相关函数性质

!!! success "自相关函数的性质"

    - **零点非负，实偶函数**

    !!! info ""

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/PVWbbiWnpoKPYdx4FNycyk7gnpe.png)

    同理可得

    $C_{X}\left(\tau\right)=C_{X}\left(-\tau\right)$

    <span style="border-bottom: 1.5px dashed orange;">自协方差函数</span>在 $\tau=0$ 上也具有最大值

    此外，还有

    - 周期平稳过程的 `R` 也为周期函数，且周期一致，即$R_{X}(\tau+T)=R_{X}(\tau)$
    - 若平稳过程 X(t) 含有一个周期分量，那么 $\mathsf{R}_\mathsf{X}(\mathsf{t})$ 也可能含有一个同周期的周期分量
    - 若平稳过程不含有任何周期分量，则  $\lim_{|\tau|\to\infty}R_{_X}(\tau)=R_{_X}(\infty)=m_{_X}^2\quad\text{(直流分量平方)}$
    - 若非周期平稳过程含有均值，则自相关有 $R_{x}\left(\tau\right)=C_{x}\left(\tau\right)+{m_{x}}^{2}$
    - 平稳过程自相关函数中不会含有<span style="border-bottom: 1.5px dashed orange;">阶跃因子</span>

    !!! info ""

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/TfolbW8FEoKZdbxZLqccUrFknIf.png)

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/U7Yyb9dGooBSQbx0vP5cEKRXn4c.png)

---

!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Ml0wbdOBDoiVRmxpPPycFPBvnlc.png)

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/HmR1bridXovPoTx1VAacEEnhnKg.png)

!!! example "例 | 通信原理中 DSBのPSD 推导"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/RQPfbvAbKoOPDxxZ9OGcASXCnwh.png)

---

## 俩个随机过程的联合统计特性

### 一些同理的概念

- $\mathsf{n}+\mathsf{m}$ 维联合分布函数

$$
\begin{array}{r l}&{F_{X T}\left(x_{1},...,x_{n};y_{1},...,y_{m};t_{1},...,t_{n},t_{1}^{\prime},...,t_{m}^{\prime}\right)}\\ &{\ =P\{X(t_{1})\leq x_{1},...,X(t_{n})\leq x_{n},Y(t_{1}^{\prime})\leq y_{1},...,Y(t_{m}^{\prime})\leq y_{m}\}}\end{array}
$$

- $\mathsf{n}+\mathsf{m}$ 维联合概率密度

$$
{\begin{array}{r l}&{f_{X Y}(x_{1},...,x_{n};y_{1},...,y_{m};t_{1},...,t_{n},t_{1}^{\prime},...,t_{m}^{\prime})}\\ &{={\frac{\partial^{n+m}F_{X T}\left(x_{1},...,x_{n};y_{1},...,y_{m};t_{1},...,t_{n},t_{1}^{\prime},...,t_{m}^{\prime}\right)}{\partial x_{1}...\partial x_{n}\partial y_{1}...\partial y_{m}}}}\end{array}}
$$

- 独立

$$
\begin{array}{r l}&{f_{X Y}\!\left(x_{1},...,x_{n};y_{1},...,y_{m};t_{1},...,t_{n},t_{1}^{\prime},...,t_{m}^{\prime}\right)}\\ &{\,={\bigl.}f_{X}\!\left(x_{1},...,x_{n};t_{1},...,t_{n}\right)\cdot{\bigl.}f_{Y}\!\left(y_{1},...,y_{m};t_{1}^{\prime},...,t_{m}^{\prime}\right)}\end{array}
$$

- 联合严平稳

> 即不随时间变化

$$
\begin{array}{r l}&{f_{X Y}\left(x_{1},...,x_{n};y_{1},...,y_{m};t_{1},...,t_{n},t_{1}^{\prime},...,t_{m}^{\prime}\right)}\\ &{\,=\,f_{X Y}\left(x_{1},...,x_{n};y_{1},...,y_{m};t_{1}+\Delta t,...,t_{n}+\Delta t,t_{1}^{\prime}+\Delta t,...,t_{m}^{\prime}+\Delta t\right)}\end{array}
$$

---

### 正交与互相关

**正交**

$$
R_{X Y}(t_{1},t_{2})=0
$$

**互不相关**

$$
C_{X Y}\left(t_{1},t_{2}\right)=0
$$

> 若仅在同一时刻 t 存在 $C_{X Y}\left(t,t\right)=0$
> 则称两个过程在同一时刻的状态互不相关

### 联合平稳

**两个平稳随机过程** 的<span style="border-bottom: 1.5px dashed orange;">互相关函数</span>是仅与 $\tau$ 有关的函数，即

$$
R_{X Y}\left(t_{1},t_{2}\right)=E[X(t_{1})Y(t_{2})]=R_{X Y}(\tau),\tau=t_{2}-t_{1}
$$

则称之为<span style="border-bottom: 1.5px dashed orange;">联合宽平稳</span>

> 若两个过程中存在不是平稳的，则一定不是  
> 若是联合宽平稳，则两者一定为平稳随机过程

- 互相关系数

$$
\rho_{X Y}(\tau)=\frac{C_{X Y}(\tau)}{\sigma_{X}\sigma_{Y}}=\frac{R_{X Y}(\tau)-m_{X}m_{Y}}{\sigma_{X}\sigma_{Y}}
$$

!!! success "联合平稳随机过程的性质"

    - 互相关函数 `R` 与互协方差函数 `C`<span style="border-bottom: 1.5px dashed orange;">不再是偶函数</span>
    - $R_{X Y}(\tau)=0$ , $\forall\,\tau$ 表示两个平稳过程正交
    - $R_{X Y}\left(0\right)=0$ 两个平稳过程所有同一时刻的状态正交
    - $C_{{X Y}}(\tau)=0$ , $\forall\,\tau$ 表示两个平稳过程互不相关
    - $C_{X Y}\left(0\right)=0$ 两个平稳过程所有同一时刻的状态互不相关

!!! example "例"

    $$
    \begin{gathered}\text{已知随机过程 }X(t)\text{ 和 }Y(t)\text{ 独立且各自平稳,自相关函数为 }R_X(\tau)=2e^{-|\tau|}\cos\omega_0\tau\text{ 与}\\R_Y(\tau)=9+\exp(-3\tau^2)\text{ 。令随机过程 }Z(t)=AX(t)Y(t)\text{,其中 }A\text{ 是均值为 2,方差为9 的}\\\text{随机变量,且与}X(t)\text{和}Y(t)\text{相互独立。求过程}Z(t)\text{的均值、方差和自相关函数。}\end{gathered}
    $$

    **均值：**

    $$
    \begin{aligned}E\left[Z(t)\right]=E\left[AX(t)Y(t)\right]=E\left[A\right]E\left[X(t)\right]E\left[Y(t)\right]=2E\left[X(t)\right]E\left[Y(t)\right]\end{aligned}
    $$

    $$
    m_{X}^{2}=R_{X}(\infty)=\lim_{\tau\to\infty}2e^{-|\tau|}\cos\omega_{0}\tau=0\text{,即}m_{X}=0\text{,所以有:}E[Z(t)]=0
    $$

    $$
    E\left[A^2\right]=D\left[A\right]+E^2\left[A\right]=9+4=13
    $$

    **自相关函数：**

    $$
    \begin{aligned}R_z(t+\tau,t)&=E\left[A^{2}X(t+\tau)Y(t+\tau)X(t)Y(t)\right]\\&=E\left[A^{2}\right]E\left[X(t+\tau)Y(t+\tau)X(t)Y(t)\right]\\&=13E\left[X(t+\tau)X(t)\right]E\left[Y(t+\tau)Y(t)\right]\\&=13R_X(\tau)R_Y(\tau)=26e^{-|\tau|}(9+e^{-3\tau^2})\cos\omega_0\tau\end{aligned}
    $$

    **方差：**

    $$
    D\left[Z(t)\right]=R_z(0)=260
    $$

---

## 一些其他过程

- 独立过程

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/MPh5bXx9zojbvvxODlTcRrQFnse.png)

- 二阶矩过程

> 平稳随机过程一定是二阶矩过程

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Moh1bsB8LoAsOexVVuJcyIVengD.png)

- **平稳过程**

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/AQHLbfaFCoPm2yxgAIRc8UuUnuh.png)

- **独立增量过程**

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/WRW4b6nD0o7azWxxGPocJPwPnwd.png)

- 平稳独立增量过程

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/LYUgb3hhMoz81dxm3cRcSk38nOb.png)

- 正交增量过程

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/TWlnb2rtooYN9yx4Vkpcc2bunhe.png)

- **马尔可夫过程**

> 后无效性，未来只与现在有关，而与过去无关

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/U0L1b1m7loE2BFxzciecUQhXneg.png)

- **高斯过程**

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/G8tib6cmRoq8v9xJlDscMaYHnUh.png)

- 维纳过程

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/JAFIb8LHoo9i2RxVvs1cLKvRnJc.png)

---

## 复随机过程

> 主要区别：共轭
>
> $$
> {\dot{Z}}(t)=Z(t)-m_{Z}(t)
> $$

### **复随机变量**

$$
Z=X+j Y
$$

- 期望

$$
m_{Z}=E[Z]=E[X]+j\cdot E[Y]=m_{X}+j\cdot m_{Y}
$$

- 方差

$$
D[Z]=E[(X-m_{X})^{2}]+E[(Y-m_{Y})^{2}]=E[\mid\dot{Z}\mid^{2}]=D[X]+D[Y]
$$

- 协方差

$$
C_{Z_1Z_2}=E[\left(Z_1-m_{Z_1}\right)^*\cdot\left(Z_2-m_{Z_2}\right)]=E[\dot{Z_1}\cdot\dot{Z_2}]=C_{X1X2}+C_{Y1Y2}+j(C_{X1Y2}-C_{Y1X2})
$$

- 独立

$$
f_{X_{1}Y_{1}X_{2}Y_{2}}(x_{1},y_{1},x_{2},y_{2})=f_{X_{1}Y_{1}}(x_{1},y_{1})\cdot f_{X_{2}Y_{2}}(x_{2},y_{2})
$$

- 互不相关

$$
C_{Z_{1}Z_{2}}=E[(Z_{1}-m_{Z_{1}})^{*}(Z_{2}-m_{Z_{2}})]=0
$$

- 正交

$$
R_{z_{1}z_{2}}=E[Z_{1}^{*}\cdot Z_{2}]=0
$$

---

### 复随机过程与其数字特征

同理，有

$$
\mathbf{Z(t)}=\mathbf{X(t)}+\mathbf{j}\mathbf{Y(t)}
$$

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/H3YAb8Zw2omQ1oxTZz3cIflsnQe.png)

---

!!! success "复随机平稳条件"

     $\begin{array}{l}{{m_{Z}(t)=m_{X}+j\cdot m_{Y}=m_{Z}}}\\ {{R_{Z}(t,t+\tau)=R_{Z}(\tau)}}\end{array}$

---

### 联合复随机平稳过程

!!! success "联合复随机平稳<span style="border-bottom: 1.5px dashed orange;">充要</span>条件"

    俩复随机过程平稳，且 $R_{Z_{1}Z_{2}}(t,t+\tau)=R_{Z_{1}Z_{2}}(\tau)$

- 互相关函数

$$
R_{Z_{1}Z_{2}}(t,t+\tau)=E[Z_{1}^{*}(t)\cdot Z_{2}(t+\tau)]
$$

- 互协方差函数

$$
C_{Z}\left(t,t+\tau\right)=E\{\left[Z\left(t\right)-m_{Z}\left(t\right)\right]^{*}\cdot\left[Z\left(t+\tau\right)-m_{Z}\left(t+\tau\right)\right]\}
$$

- 互不相关

$$
C_{z_{1}z_{2}}(t,t+\tau)=0
$$

- 正交

$$
R_{Z_{1}Z_{2}}(t,t+\tau)=0
$$

!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/ZLyhbcPVdolM2JxqpRKcUrFCnoO.png)


!!! example "例"

    $$
    \begin{gathered}\text{设有复随机过程 }\xi(t)=\sum_{k=1}^N\eta_ke^{i\omega_kt}\text{,其中}\eta_k\left(1|\leq k\leq N\right)\text{是相互独立的}\\\text{随机变量,且服从正态分布 }N(0,\sigma_k^2)\mathrm{,}\omega_k\text{ 为常数。试求 }\xi(t)\text{ 的均值函数和相关函数。}\end{gathered}
    $$

    注意，利用独立可拆，均值为 0 求解

    $$
    \begin{aligned}E[\xi(t)]&=E[\sum\eta_k\cdot e^{jw_kt}]\\&=\sum E[\eta_k]\cdot e^{jw_kt}\\&=0\end{aligned}
    $$

    关于相关函数，n 维矩阵，除了对角线为方差，其余相乘后因为独立 + 均值为 0→ 都为 0

    $$
    \begin{aligned}R_\xi(t,t+\tau)&=E[\sum\eta_ke^{\mathrm{j}w_kt}\cdot\sum\eta_l\cdot e^{\mathrm{j}w_l(t+\tau)}]\\&=E[\sum[\eta_k^2]e^{\mathrm{j}w_kt}+0]\\&=\sum E[\eta_k^2]\cdot e^{\mathrm{j}w_kt}\\&=\sum\sigma_k^2e^{\mathrm{j}w_kt}\end{aligned}
    $$

---

## 随机过程的微分&积分

### 随机序列的收敛

1. **处处收敛（every where）**

$$
\begin{aligned}&\zeta_1:x_1(1),x_1(2),\cdots,x_1(n)\to x_1\\&\zeta_2:x_2(1),x_2(2),\cdots,x_2(n)\to x_2,\quad(x_1,x_2,x_3)\in X\\&\zeta_3:x_3(1),x_3(2),\cdots,x_3(n)\to x_3\end{aligned}
$$

记作

$$
\operatorname*{lim}_{n\to\infty}X(n)=X
$$

或者

$$
\{X(n)\}\xrightarrow{e}X
$$

2. **以概率 1 收敛（almost every where）**

> 几乎处处收敛

$$
P\{\operatorname*{lim}_{n\to\infty}X(n)=X\}=1
$$

简记

$$
\{X(n)\}\xrightarrow{a.e}X
$$

3. **依概率收敛**

$$
\operatorname*{lim}_{n\rightarrow\infty}P\{|X(n)-X|\geq\varepsilon\}=0
$$

简记

$$
\{X(n)\}\xrightarrow{P}X
$$

4. **依分布收敛**

> 分布函数收敛

$$
\operatorname*{lim}_{n\rightarrow\infty}F_{n}(x)=F(x)
$$

简记

$$
\{X(n)\}\xrightarrow{d}X
$$

5. 均方收敛

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/AJwIb2yDVo5jSbx8tGXctztnnym.png)

!!! tip "5 种收敛模式之间的关系"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/SXdgbnZ06oDkCBxk2OAcNRBDnRf.png)

---

### 随机过程的连续性

> 可导必连续

**随机过程处处连续**

$$
\lim_{\Delta t\to0}x_\zeta(t+\Delta t)=x_\zeta(t),.................\forall\zeta\in\Omega
$$

**均方连续**

$$
\operatorname*{lim}_{\Delta t\to0}E\{[X(t+\Delta t)-X(t)]^{2}\}=0
$$

则称该二阶矩过程具有均方连续性简称过程 m.s 连续，表示为

$$
l\cdot i\cdot m X(t+\Delta t)=X(t)\quad t\in T
$$

**充要条件**

- 当且仅当其自相关函数 $R_{X}(t_{1},t_{2})\quad t_{1}=t_{2}=t$ 在 `T` 上连续，则 `X` 均方连续

∵ $\mathrm{\Delta}\cdot\mathrm{\Delta}t_{1}=t_{2}=t$

∴ 上面的充要条件也可表示为: $\operatorname{Rx}(\tau)$ 在 $\tau=0$ 点连续是均方连续的充要

> 证明略，看都看不懂 🤪

---

**性质**

- 若平稳过程 X(t) 的$R_{X}(\tau)$在 `0` 处连续，则$R_{X}(\tau)$在所有 `T` 上也连续
- 均方连续的随机过程的期望也连续，<span style="border-bottom: 1.5px dashed orange;">极限与期望可互换</span>

$$
l\cdot i\cdot m\;X(t+\Delta t)=X(t)\Longrightarrow\operatorname*{lim}_{\Delta t\rightarrow0}E[X(t+\Delta t)]=E[X(t)]
$$

!!! success "平稳随机过程的均方连续准则"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/L3tbbasqFoUhNdxjVpyc9FkZnTe.png)

    即：宽平稳过程 $\{X(t);t\in(-\infty,+\infty)\}$ 均方连续的充分必要条件为：自相关函数$R_{X X}(\tau)$ 在点 $\tau=0$ 处连续

---

### 随机过程的微分

**均方导数**

满足

$$
\operatorname*{lim}_{\Delta t\rightarrow0}E\left\{\left[\frac{X(t+\Delta t)-X(t)}{\Delta t}-X^{\prime}(t)\right]^{2}\right\}=0
$$

或者

$$
l\cdot i\cdot m{\frac{X(t+\Delta t)-X(t)}{\Delta t}}=X^{\prime}(t)
$$

则有过程 X 的均方导数

$$
X^{\prime}(t)={\frac{d X(t)}{d t}}
$$

---

**均方可微的充要条件**

在 `T` 上存在二阶偏导

$$
\left.\frac{\partial^{2}R_{X}\left(t_{1},t_{2}\right)}{\partial t_{1}\partial t_{2}}\right|_{t_{1}=t_{2}=t}
$$

**求导与期望**

求导与求期望可以交换顺序，即

$$
E[\frac{d X(t)}{d t}]=\frac{d E[X(t)]}{d t}
$$

**求导与自相关函数**

导数的自相关=自相关函数的二阶偏导，即

$$
R_{Y}(t_{1},t_{2})=R_{X^{\prime}}(t_{1},t_{2})={\frac{\partial^{2}R_{X}(t_{1},t_{2})}{\partial t_{1}\partial t_{2}}}
$$

---

!!! success "对平稳随机过程来说"

    > 期望为常数，自相关系数只与$\tau$有关

    1. **期望**

    $$
    E[X^{\prime}(t)]=E[\frac{d X(t)}{d t}]=\frac{d E[X(t)]}{d t}=\frac{d (常数)}{d t}=0
    $$

    2. **自相关函数**

    $$
    R_{X^{\prime}}(t_{1},t_{2})=\frac{\partial^{2}R_{X}(t_{1},t_{2})}{\partial t_{1}\partial t_{2}}=-\frac{d^{2}R_{X}(\tau)}{d\tau^{2}}
    $$

    **得到<span style="border-bottom: 1.5px dashed orange;">平稳随机过程均方可导</span>的条件**

    $$
    R^{\prime\prime}(\tau)\text{在}\tau=0\text{处存在}\\R^{\prime}(\tau)\text{在}\tau=0\text{处连续}
    $$

    特别对于实平稳过程，

    若实平稳过程过程 $X(t)$ 在 $t\in T$ 上均方可导, 则有 : $R^{\prime}(0)=0$

    !!! example "例"

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/GvB5btHDQoL1MexTNEOcc2SZnzc.png)

---

> 积分略

---

## 高斯过程

> 高斯过程的一些定义，了解一下了解一下

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/B2pEbbaYWof2VrxED9kcN3IenRg.png)

---

### 一些性质

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/EDvpbds6KobfBhx0Y0OciXYinhS.png)

---

## 各态历经性

基于<span style="border-bottom: 1.5px dashed orange;">各态历经性（遍历性）</span>用【时间平均值】代替【统计平均值】 ，以减少计算量

这必须在【平稳】的前提下进行

!!! success "宽各态历经过程的定义计算与物理意义"

    ### 宽各态历经过程的定义

    若一个特征的【时间平均】，以概率 1 收敛其【统计平均】

    则称此特征具有【各态历经性】

    > 对于一个平稳随机过程 X，满足【均值与自相关】都具有<span style="border-bottom: 1.5px dashed orange;">各态历经性</span>

    $$
    \begin{array}{r c l}{{a}}&{{=}}&{{\overline{{{a}}}}}\\ {{R\left(\tau\right)}}&{{=}}&{{\overline{{{R\left(\tau\right)}}}}}\end{array}
    $$

    具体有

    $$
    \begin{array}{l}{\overline{{a}}=\overline{{x(t)}}=\displaystyle\operatorname*{lim}_{T\rightarrow\infty}\frac{1}{T}\int_{-T/2}^{T/2}x(t)d t=m_{X}}\\ {\overline{{R(\tau)}}=\displaystyle\operatorname*{lim}_{T\rightarrow\infty}\frac{1}{T}\int_{-T/2}^{T/2}x(t)x(t+\tau)d t}\end{array}
    $$

    !!! info ""

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/DCdhbo0CpojCE9xX6sIcIV6qnyf.png "物理意义")

---

**性质**

> 了解一下

- 各态历经性一定是平稳随机过程，反之不一定
- 平稳随机过程 **均值** 具有各态历经性的<span style="border-bottom: 1.5px dashed orange;">充要条件</span>

$$
\lim_{\tau\to\infty}\frac{1}{T}\int_0^{2\tau}(1-\frac{\tau}{2T})\cdot[R_X(\tau)-m_X^2]d\tau=0
$$

- 平稳随机过程 **自相关函数** 具有各态历经性的<span style="border-bottom: 1.5px dashed orange;">充要条件</span>

$$
\lim_{T\to\infty}\frac{1}{T}\int_0^{2T}(1-\frac{\tau_1}{2T})\cdot[B(\tau_1)-{R_X}^2(\tau)]d\tau_1=0\\\text{式中}B(\tau_1)=E[X(t+\tau+\tau_1)X(t+\tau_1)X(t+\tau)X(t)]R_X(\tau)=E[X(t+\tau)X(t)]
$$

- 高斯平稳随机过程具有各态历经性的充分条件

$$
\int_{0}^{\infty}\left|R_{x}\left(\tau\right)\right|d\tau<\infty
$$

---

!!! success "第一道大题 の 真题"

!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/T4Emb3yCEoyorMxVZnDczrMonTJ.png "原题")

    ---

    【扩 1】

    修改题目，除了 $\phi$ 为匀分布之外，增添条件： $\alpha$ 服从标准高斯分布$N(0,1)$，且互相独立

    证明：

    - `X(t)` 平稳
    - `X(t)` 不具有各态历经性

    1. 容易推得

    $$
    m_x(t)=E[X(t)]=E[\alpha\cos(\omega_0t+\Phi)]=E[\alpha]\cdot E[\cos(\omega_0t+\Phi)]=0\cdot\cos(\omega_0t)=0
    $$

    $$
    R_X(t,t+\tau)=E[\alpha^2]\cdot E[\cos(\omega_0t+\Phi)\cos(\omega_0(t+\tau)+\Phi)]=1\cdot\frac{1}{2}\cdot cos\omega_0\tau
    $$

    $$
    R_X(0)=0.5<\infty
    $$

    故平稳

    2. 容易推得

    $$
    \overline{x(t)}=\lim_{T\to\infty}\frac{1}{T}\int_{-T/2}^{T/2}\alpha cos(\omega_0t+\phi)dt=\lim_{T\to\infty}\frac{\alpha}{\omega_0T}sin(\omega_0t+\phi)|_{-T/2}^{T/2}\xlongequal{w_0=2\pi/T}0
    $$

    > 而关于自相关函数的时间平均，易观察到有 $\alpha^{2}$ 没有消去，故与 **统计平均不相等**

    则不具有各态历经性

    ---

    【扩 2】

    修改题目，$a,\omega_{0}$ 为常数，问

    - $\phi$ 在什么条件下，随机变量 `X` 是平稳的

    1. 均值为常数

    $$
    E[X(t)]=A\cdot E[cos(wt+\phi)]=A\cdot E[coswtcos\phi-sinwtsin\phi]=A\cdot\{coswtE[cos\phi]-sinwtE[sin\phi]\}
    $$

    要求为常数，与 `t` 无关，故

    $$
    E[c o s\phi]=E[s i n\phi]=0
    $$

    $$
    m_{X}=0
    $$

    2. 自相关函数

    $$
    R_{X}(\tau)=R_{X}(t,t+\tau)=\frac{A^{2}}{2}E[c o s w\tau+c o s(2w t+w\tau+2\phi)]
    $$

    同理可得

    $$
    E[c o s2\phi]=E[s i n2\phi]=0
    $$

    $$
    R_{X}(t)=\frac{A^{2}}{2}c o s w\tau
    $$

    - $\phi$ 在什么条件下，`X` 具有各态历经性

    求均值的时间平均值

    $$
    \overline{{x(t)}}=\operatorname*{lim}_{T\rightarrow\infty}\frac{1}{T}\int_{-T/2}^{T/2}A c o s(w t+\phi)d t=0=m_{X}
    $$

    求自相关的时间平均值

    $$
    R_{X}(\tau)=\lim_{T\to\infty}\frac{1}{T}\int_{-T/2}^{T/2}A^2cos(wt+\phi)cos(wt+w\tau+\phi)dt=\frac{A^2}{2}cosw\tau+\frac{A^2}{2T}\lim\int cos(2wt+w\tau+2\phi)dt
    $$

    好巧，后面积分项为 0

    故满足平稳，即具有各态历经

    > 写成明确的表达式
    !!! info ""

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/YysEbSw1bo4lgxxEx0scHTXQnCc.jpg)
        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/JWAtb2AA3oa1W4x42XJcdML4nYc.jpg)

---

!!! example "综合例"

    $\begin{aligned}&\text{随机过程}X\left(t\right)=Acos(t)+Bsin(t),\text{ 其中}A\text{和}B\text{独立同标准高斯分布,}\\&\text{且}X(t)\text{的均方导数为}Y(t)=X^{^{\prime}}(t),\text{ 求:}\end{aligned}$

    $X(t)\text{的期望,方差和自相关函数}$

    $X(t)\text{是否各态历经?给出理由}$

    $Y(t)\text{的自相关系数}$

    $Y(t)\text{的一维概率密度}$

    $X(t)\text{和}Y(t)\text{是否联合平稳?给出理由}$

    1. 因独立，易得

    ${E[X(t)]=E[A\cos(t)+B\sin(t)]=E[A]\cos(t)+E[B]\sin(t)=0}$

    $\mathrm{Var}(X(t))=E[X(t)^2]-(E[X(t)])^2=E[X(t)^2]=E[(A\cos(t)+B\sin(t))^2]=cos^2(t)+sin^2(t)=1$

    $R_{X}(t_{1},t_{2})=E[X(t_{1})X(t_{2})]=\cos(t_{1})\cos(t_{2})+\sin(t_{1})\sin(t_{2})=\cos(t_{1}-t_{2})$

    2. 均值相等，但自相关函数多了 A 和 B，故不具有各态历经性
    3. $R_{Y}(\tau)=-\frac{d^{2}R_{X}\left(\tau\right)}{d\tau^{2}}=-\frac{d^{2}\cos\tau}{d\tau^{2}}=\cos\tau$
    4. 线性相加后，Y 仍为标准高斯过程 $f_{Y}\left(y\right)=\frac{1}{\sqrt{2\pi}}\exp\left(-\frac{y^{2}}{2}\right)$
    5. 显然联合平稳（当然你也可以代入计算）

