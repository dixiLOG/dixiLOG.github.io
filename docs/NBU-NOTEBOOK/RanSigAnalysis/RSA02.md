# 随机信号的频域分析

<div id="progress-container">
  <div id="progress-bar"></div>
</div>



## 前提：Dirichlet Condition

1. 周期函数
2. 函数连续/只存在第一类断点
3. 函数有有限个极值点
4. 能量有界 (绝对可积)

> 实信号的频谱为复函数，即
>
> $S^{*}(\omega)=S(-\omega)$

---

## 能量谱密度

$$
\int_{-\infty}^{\infty}\Big[s(t)\Big]^{2}\mathrm{d}t=\frac{1}{2\pi}\int_{-\infty}^{\infty}\Big|S(\omega)\Big|^{2}\mathrm{d}\omega
$$

<u>帕萨瓦尔定理</u>得；$\left|S(\omega)\right|^{2}$ 称为 $s(t)$ 的能量谱密度

!!! question "题外话—帕萨瓦尔定理推导"

    将一项 `s(t)` 用 `IFT` 表示

    $$
    \int_{-\infty}^{\infty}\left[s(t)\right]^{2}\mathrm{d}t=\int_{-\infty}^{\infty}s(t)\cdot\left[\frac{1}{2\pi}\int_{-\infty}^{\infty}S(\omega)\mathrm{e}^{\mathrm{j}\omega t}\mathrm{d}\omega\right]\mathrm{d}t
    $$

    交换积分位置

    $$
    =\frac{1}{2\pi}\int_{-\infty}^{\infty}S\left(\omega\right)\cdot\left[\int_{-\infty}^{\infty}s\left(t\right)\mathrm{e}^{\mathrm{j}\omega t}\mathrm{d}t\right]\mathrm{d}\omega
    $$

    积分得到共轭，模一致

    $$
    ={\frac{1}{2\pi}}\int_{-\infty}^{\infty}S(\omega)\cdot S^{*}(\omega)\mathrm{d}\omega={\frac{1}{2\pi}}\int_{-\infty}^{\infty}\left|S(\omega)\right|^{2}\mathrm{d}\omega
    $$

    证毕

---

## 功率信号

> 随机过程时域无限，而幅值有限

$$
\begin{array}{l}{\displaystyle\int_{-\infty}^{\infty}\mid x_{k}^{2}(t)\mid d t\rightarrow\infty}\\ {\displaystyle\operatorname*{lim}_{T\rightarrow\infty}\frac{1}{2T}\int_{-T}^{T}\mid x_{k}^{2}(t)\mid d t<\infty}\end{array}
$$

> 故存在功率谱，称为<u>功率信号</u>

工程上使用【截尾函数】，取一段时间，则满足绝对可积条件，FT 存在

!!! info ""
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Zpc8bwLHqo7RdYx1R9TcT2rhnPf.png)

---

## 功率谱密度 PSD

为了描述随机过程 X 的平均功率在各个频率上的分布情况，即【**单位频带上的平均功率**】

有平均功率

$$
P=\frac{1}{2\pi}\int_{-\infty}^{\infty}G_{X}(\omega)d\omega
$$

其中 $G_{X}(\omega)$ 称为 PSD

经过妙妙推导，有定义式

$$
G_{X}\left(\omega\right)=\operatorname*{lim}_{T\rightarrow\infty}\frac{1}{2T}E[|X_{T}\left(\omega\right)|^{2}]
$$

---

!!! success "平稳随机过程 PSD 的性质"

    **非负实偶 + 绝对可积 + <u>实轴上</u>无极点**

!!! example "例"

    判断下列哪些函数满足平稳过程的功率谱密度的性质?

    $$
    \begin{array}{l l}{{\displaystyle f_{1}(\omega)=\cos3\omega}}&{{\qquad\displaystyle f_{2}(\omega)=\frac{1}{(\omega-1)^{2}+2}}}\\ {{\displaystyle f_{3}(\omega)=\frac{\omega^{2}+1}{\omega^{4}+5\omega^{2}+6}}}&{{\qquad\displaystyle f_{4}(\omega)=\frac{\omega^{2}+4}{\omega^{4}-4\omega^{2}+3}}}\end{array}
    $$

    因为 $f_{1}(\omega)\not\geq0 ；f_{2}(\omega) 非偶；f_{4}(\omega)在实数轴上有极点$

    所以只有 $f_{3}(\omega)$ 满足平稳过程功率谱密度的性质

---

## 维纳—辛钦定理

### 功率谱密度与自相关函数关系

- FT 对 $R(\tau)\Leftrightarrow P_{\xi}(\omega)$
- 即维纳-辛钦定理：实平稳随机过程的自相关函数与功率谱密度构成一对傅里叶变换

> **先决条件 ：实平稳随机过程**

---

**用角频率**$\omega$**表示**

$$
\begin{aligned}&P_\xi(\omega)=\int_{-\infty}^\infty R(\tau)e^{-j\omega\tau}d\tau\\&R(\tau)=\frac{1}{2\pi}\int_{-\infty}^{\infty}P_{\xi}(\omega)e^{j\omega\tau}d\omega\end{aligned}
$$

这里的$P_\xi(\omega)=G_X(\omega)$

---

**用频率**$f$**表示**

$$
\begin{aligned}P_\xi(f)&=\int_{-\infty}^\infty R(\tau)e^{-j2\pi f\tau}d\tau\\R(\tau)&=\int_{-\infty}^\infty P_\xi(f)e^{j2\pi f\tau}df\end{aligned}
$$

---

**典型变换**

$$
\begin{aligned}&1\Leftrightarrow2\pi\delta(\omega)\\&\cos(\omega_0\tau)\Leftrightarrow\pi[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)]\\&\sin(\omega_0\tau)\Leftrightarrow j\pi[\delta(\omega+\omega_0)-\delta(\omega-\omega_0)]\end{aligned}
$$

---

!!! example "例"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/UILHbpc2KoiNYfxj3EPcg9Xlnuh.png)

!!! example "例 | 部分分式展开"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/NkxLbcJD7oJqVqx2Ik0czxRKn3d.png)

---

## 单边谱（物理功率谱）

> 用$F_X(\omega)$表示

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/A5zbb8ldhodWaKxZXCSczEs3nQf.png)

---

## 互谱密度

定义 $\mathbf{P}_{X Y}$ 中的被积函数为

$$
G_{X Y}(\omega)=\operatorname*{lim}_{\tau\to\infty}\frac{1}{2T}E[X_{\tau}^{*}(\omega)Y_{\tau}(\omega)]
$$

且<u>交换顺序下共轭相等</u>，即

$$
G_{X Y}(\omega)=G_{Y X}^{}\mathrm{}^{*}(\omega)
$$

---

### 互谱密度与与互相关函数的关系

为一对 FT

$$
G_{X Y}\left(\omega\right){\leftrightarrow}R_{X Y}\left(\tau\right)
$$

> 注意 XY 有先后顺序


!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/DjqibP5F0opOubx4H1lcEFSYnlh.png)

---

!!! success "互谱的性质"

    1. $G_{\scriptscriptstyle{X Y}}(\omega)=G_{_{Y X}}^{*}(\omega)=G_{_{Y X}}(-\omega)$ 为$\omega$复函数
    2. 互谱密度的实部$\begin{cases}\mathrm{Re}[G_{XY}(\omega)]\\\mathrm{Re}[G_{YX}(\omega)]\end{cases}$为$\omega$偶函数
    3. 互谱密度的虚部$\begin{cases}\mathrm{Im}[G_{XY}(\omega)]\\\mathrm{Im}[G_{YX}(\omega)]\end{cases}$为$\omega$奇函数
    4. 正交下 : $\left\{\begin{array}{l}{{R_{X Y}(\tau)=0}}\\ {{R_{Y X}(\tau)=0}}\end{array}\right.\Rightarrow:\cdot\left\{\begin{array}{l l}{{G_{X Y}(\omega)=0}}\\ {{G_{Y X}(\omega)=0}}\end{array}\right.$
    5. 互不相关下： $G_{_{X Y}}(\omega)=G_{_{Y X}}(\omega)$

!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/PJvVbaSpCo9ozSxAXBMctvnXnve.png)

    > 注意复随机过程  
    > 我想你应该是知道<u>自相关函数</u>里面的参数是怎么看的吧（把 t 去掉）

---

!!! success "差不多，但一定会考的课后【4-7】，快来做做吧！"

    !!! example "例"
        
        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/TvkLbugoCoD90DxSZ6wcxJxlnUb.png)

---

## 白噪声

功率谱密度为常数（功率无限大），均值为零

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/SLvmbnmBTo9EYBxnWHEc8j3Gnjc.png)

自相关系数

$$
\rho_{s}(\tau)=\frac{R_{s}(\tau)}{R_{s}(0)}=\left\{1,\begin{array}{l l}{\quad\tau=0}\\ {\quad\tau\neq0}\end{array}\right.
$$

> 白噪声 **互不相关**  
> 这说明白噪声过程的样本随时间起伏极快，相当于好多个冲激函数

---

### 带限白噪声

1. 低通滤波器

!!! info ""

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/G0iobSK2fo4JToxO8cacZ8k0nVg.png)

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/SiDbb1MRlo63K3xIpA0c9wCjn0w.png)

$$
R_{X}(\tau)=\frac{1}{2\pi}\cdot\int_{-\Omega/2}^{\Omega/2}G_{0}e^{j\omega\tau}d\omega=\frac{\Omega G_{0}}{2\pi}\cdot\frac{\sin(\Omega\tau/2)}{(\Omega\tau/2)}
$$

> 回忆$E\mathrm{Sa}\left(\frac{\omega_0t}{2}\right)\quad|\quad\frac{2\pi E}{\omega_0}\left[u\left(\omega+\frac{\omega_0}{2}\right)-u\left(\omega-\frac{\omega_0}{2}\right)\right]$  
> 求解 Sa 函数过零点小技巧  
> 转化成 $Sa(\frac{\pi t}{周期})$ 分母的 `周期` 就是过零点  
> 频域越窄，时域越宽，这一点在通信原理已有所分析

2. 带通滤波器

!!! info ""
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/DRehb82J9oDbLFxqd5xc45aUneg.png)

    > 频谱搬移，乘 cos

---

## 色噪声

> 非<u>白噪声</u>，歪比巴卜

---


!!! example "例 | 特征函数 | 了解一下"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/AiPMbNT77oKRVmxWfOKcoUGjnAc.png)

!!! example "例 | 维纳辛钦定理"

    已知一平稳过程 ${X}(t)$ 的相关函数为

    $$
    R_{_X}(\tau)=\exp(-2\left|\tau\right|)\cos\tau+1
    $$

    求其功率谱密度及平均功率

    解：

    $$
    \begin{array}{c}{{R_{\scriptscriptstyle X}(0)=\exp(-2\vert0\vert)\cos0+1\!=\!1\!+\!1=\!2=P_{\scriptscriptstyle X}}}\\ {{\because\,e^{-a\vert t\vert}\leftrightarrow\displaystyle\frac{2a}{\omega^{2}+a^{2}}}}\end{array}
    $$

    $$
    \begin{gathered}\therefore S_{X}(\omega)=F[R_{X}(\tau)]=F[\exp(-2|\tau|)\cos\tau+1]\\=\frac{1}{2\pi}\{\frac{4}{\omega^{2}+4}\otimes\pi[\delta(\omega+1)+\delta(\omega-1)]\}+2\pi\delta(\omega)\\=\frac{2}{\left(\omega+1\right)^{2}+4}+\frac{2}{\left(\omega-1\right)^{2}+4}+2\pi\delta(\omega)\end{gathered}
    $$

!!! example "例 | 部分分式展开"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/QCTEbkDoPon56xxCpQicWyCOnHd.png)

!!! example "例 | 联合平稳判断"

    讨论（加性）单频干扰：实平稳随机过程$\mathrm{X}(\mathrm{t})$受到加性的独立正弦分量$\mathrm{Z(t)=}\mathrm{Acos}\left(\,\omega_{0}\mathrm{t}{+}\Theta\right)$ 的干扰，$\Theta \sim \mathrm{U}[0,2\pi)$

    求：

    - 受扰后的信号${\rm Y}\left(\rm{t}\right)$的相关函数;
    - 信号${\rm X}\left(\rm{t}\right)$和${\rm Y}\left(\rm{t}\right)$是否联合平稳?若是 求${\rm Y}\left(\rm{t}\right)$的功率谱与${\rm G}_{XY}\left(\rm{t}\right)$

    求均值与自相关

    $$
    E[Z(t)]=AE[\cos(\omega_{0}t+\Theta)]=0
    $$

    $$
    \begin{aligned}R_{Z}(t+\tau,t)&=E\left[A\cos(\omega_{0}t+\omega_{0}\tau)+\Theta)A\cos(\omega_{0}t+\Theta)\right]\\&=\frac{1}{2}A^{2}\cos\omega_{0}\tau\end{aligned}
    $$

    对于 $Y(t)=X(t)+Z(t)$，有

    $$
    \begin{aligned}&R_{Y}(t+\tau,t)=E\left\{[X(t+\tau)+Z(t+\tau)][X(t)+Z(t)]\right\}\\&=R_{X}(t+\tau,t)+R_{XZ}(t+\tau,t)+R_{ZX}(t+\tau,t)+R_{Z}(t+\tau,t)\\&=R_{X}(t+\tau,t)+R_{Z}(t+\tau,t)\\&=R_{X}(\tau)+\frac{1}{2}A^{2}\cos\omega_{0}\tau\end{aligned}
    $$

    同理得

    $$
    R_{XY}(t+\tau,t)=E\left\{X(t+\tau)[X(t)+Z(t)]\right\}=R_{X}(\tau)
    $$

    满足条件，则<u>联合平稳</u>

    容易得到 PSD 为

    $$
    S_Y(\omega)=S_X(\omega)+\frac{\pi A^2}{2}[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)]
    $$

    $$
    S_{_{XY}}(\omega)=S_{_X}(\omega)
    $$

