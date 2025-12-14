# 通过线性系统
<div id="progress-container">
  <div id="progress-bar"></div>
</div>

!!! quote "先导知识"

    - 线性时不变系统的特点
    - 冲激响应、其性质与卷积
    - 传递函数
    - 系统的稳定性（绝对可积）；物理上极点在虚轴左侧
    - 系统的因果性
    [S&S 笔记—系统](https://dixilog.github.io/NBU-NOTEBOOK/S%26S/S%26S01/#_6)

## 随机信号通过线性系统

### 时域分析

> 都是确定的时间函数

**输出均值**

$$
E[Y(t)]=\int_{0}^{x}{E[X(t-\tau)]h(\tau)d\tau}=\int_{0}^{\infty}{m_{X}(t-\tau)h(\tau)d\tau}=m_{Y}(t)
$$

**输入与输出的互相关**

$$
\begin{array}{l l l}{\displaystyle R_{X Y}(t_{1},t_{2})=E[X(t_{1})Y(t_{2})]=E[X(t_{1})\int_{0}^{\infty}h(u)X(t_{2}-u)d u]}\\ {\displaystyle=\int_{0}^{\infty}h(u)E[X(t_{1})X(t_{2}-u)]d u=\int_{0}^{\infty}h(u)R_{X}(t_{1},t_{2}-u)d u}\end{array}
$$

$$
=R_{X}(t_{1},t_{2})\ast h(t_{2})
$$

同理

$$
\begin{array}{c}{{R_{Y X}(t_{1},t_{2})=E[Y(t_{1})X(t_{2})]=\displaystyle\int_{0}^{\infty}h(u)R_{x}(t_{1}-u,t_{2})d u}}\\ {{=R_{X}(t_{1},t_{2})*h(t_{1})}}\end{array}
$$

**输出自相关**

$$
\begin{array}{l}{R_{Y}(t_{1},t_{2})={E}[Y(t_{1})Y(t_{2})]}\\ {\displaystyle=E[\int_{0}^{\infty}h(u)X(t_{1}-u)d u\int_{0}^{\infty}h(v)X(t_{2}-v)d v]}\\ {\displaystyle=\int_{0}^{\infty}\int_{0}^{\infty}h(u)h(v)E[X(t_{1}-u)X(t_{2}-v)]d u d v}\\ {\displaystyle=\int_{0}^{\infty}\int_{0}^{\infty}h(u)h(v)R_{x}(t_{1}-u,t_{2}-v)d u d v}\\ {\displaystyle=h(t_{1})\ast h(t_{2})\ast R_{X}(t_{1},t_{2})}\end{array}
$$


!!! info "总结互相关与自相关之间的关系"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Jp0Cbg1llof446xyizRckw20nnb.png)

---

### 平稳随机过程通过线性系统

> 前提：输入 **双侧随机信号**  
> 单边信号相当于在 `0` 处有一个阶跃信号，则输出必然<span style="border-bottom: 1.5px dashed orange;">不平稳</span>


!!! info "性质"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/GOhNbz2a3oXOz8xyu4VcCCcVnCf.png)

    - 若输入平稳/宽各态历经，则输出平稳（不论宽严）/宽各态历经

    $\begin{array}{l}{{E[Y(t)]=m_{X}\cdot\int_{0}^{\infty}h(t)d t=m_{X}\cdot H(0)}}\\ {{\displaystyle R_{X Y}\left(\tau\right)=R_{X}\left(\tau\right)*h(\tau)\quad R_{Y X}\left(\tau\right)=R_{X}\left(\tau\right)*h(-\tau)}}\\ {{\displaystyle R_{Y}\left(\tau\right)=R_{X}\left(\tau\right)*h(\tau)*h(-\tau)}}\\ {{\displaystyle R_{Y}\left(\tau\right)=R_{X Y}\left(\tau\right)*h(-\tau)\quad R_{Y}\left(\tau\right)=R_{Y X}\left(\tau\right)*h(\tau)}}\end{array}$

    - 当<span style="border-bottom: 1.5px dashed orange;">输出噪声带宽远大于系统带宽</span>（10 倍），就可当作<span style="border-bottom: 1.5px dashed orange;">白噪声</span>
    - 且能很好的测出系统的冲激响应与输入输出的互相关函数$R_{X Y}$

---

### 频域分析

输入仍为平稳双侧信号

**均值**

$$
\begin{aligned}&m_{Y}=m_{X}\int_{0}^{\infty}h(\tau)d\tau=m_{X}\cdot\int_{0}^{\infty}h(\tau)e^{-j0\tau}d\tau\\&=m_{X}\cdot H\left(0\right)\end{aligned}
$$

**功率谱密度**

$$
\begin{cases}R_{XY}(\tau)=R_X(\tau)*h(\tau)\\G_{XY}(\omega)=G_X(\omega)\cdot H(\omega)&\end{cases}.........\begin{cases}R_{YX}(\tau)=R_X(\tau)*h(-\tau)\\G_{YX}(\omega)=G_X(\omega)\cdot H(-\omega)&\end{cases}
$$

> 注意到$H(-\omega)=H^*(\omega)$(线性时不变下)

不难发现，有

$R_{XY}(\tau)=R_{YX}(-\tau)$

$\begin{aligned}&R_{Y}(\tau)=R_X(\tau)*h(\tau)*h(-\tau)\\&G_{Y}(\omega)=G_X(\omega)\cdot H(\omega)\cdot H(-\omega)=G_X(\omega)\cdot\left|H(\omega)\right|^2\end{aligned}$

**平均功率**

$$
\mathbf{P}_{Y}={\frac{1}{2\pi}}\int_{-\infty}^{\infty}G_{Y}(\omega)d\omega={\frac{1}{2\pi}}\int_{-\infty}^{\infty}G_{X}(\omega)\cdot|H(\omega)|^{2}\,d\omega=R_{Y}(0)
$$

!!! example "例"

    $R_{X}(\tau)=\frac{N_{0}}{2}\delta(\tau)$ ，频域下求经过低通滤波后的输出自相关函数

    $$
    R_{{}_{X}}(\tau)={\frac{N_{0}}{2}}\delta(\tau)\leftrightarrow G_{{}_{X}}(\omega)={\frac{N_{0}}{2}}
    $$

    已知传递函数

    $$
    h(t)=b e^{-b t}\cdot U(t)\leftrightarrow H(\omega)=\frac{b}{b+j\omega}
    $$

    求输出 PSD

    $$
    \therefore\left|H(\omega)\right|^{2}={\frac{b^{2}}{b^{2}+\omega^{2}}}\quad G_{Y}(\omega)=G_{X}(\omega)\cdot|H(\omega)|^{2}={\frac{N_{0}}{2}}\cdot{\frac{b^{2}}{b^{2}+\omega^{2}}}
    $$

    求逆变换

    $$
    \therefore R_{\scriptscriptstyle{Y}}(\tau)=\frac{N_{\scriptscriptstyle0}b}{4}\cdot e^{-b|\tau|}
    $$

---

### 多个随机信号穿过线性系统

> 基于线性叠加，可得均值与自相关

令

$$
Y_{1}(t)=X_{1}(t)*h(t)\quad Y_{2}(t)=X_{2}(t)*h(t)
$$

因为 `X` 平稳，故有

$$
\begin{aligned}&{{m_{X}=m_{X_{1}}+m_{X_{2}}}}\\ &{{{{R}}_{X}(\tau)={{R}}_{X_{1}}(\tau)+{{R}}_{X_{2}}(\tau)+{{R}}_{X_{1}X_{2}}(\tau)+{{R}}_{X_{2}X_{1}}(\tau)}}\end{aligned}
$$

输出均值为

$$
\begin{aligned}&{{E[Y(t)]=(m_{X_{1}}+m_{X_{2}})\displaystyle\int_{0}^{\infty}h(\tau)d\tau=m_{X_{1}}\displaystyle\int_{0}^{\infty}h(\tau)d\tau+m_{X_{2}}\displaystyle\int_{0}^{\infty}h(\tau)d\tau}}\\ & {{=m_{Y_{1}}+m_{Y_{2}}=m_{Y}}}\end{aligned}
$$

输出自相关函数为

$$
{\begin{aligned}&{R_{Y}(\tau)=R_{X}(\tau)*h(\tau)*h(-\tau)}\\ &{\ =[R_{X_{1}}(\tau)+R_{X_{2}}(\tau)+R_{X_{1}X_{2}}(\tau)+R_{X_{2}X_{1}}(\tau)]*h(\tau)*h(-\tau)}\end{aligned}}
$$

输出功率谱密度为

$$
\begin{aligned}&{G_{Y}(\omega)=G_{X}(\omega)\!\cdot\!\mid H(\omega)\mid^{2}}\\ &{ =[G_{X_{1}}(\omega)+G_{X_{2}}(\omega)+G_{X_{1}X_{2}}(\omega)+G_{X_{2}X_{1}}(\omega)]\!\cdot\!\mid H(\omega)\mid^{2}}\end{aligned}
$$

特别的，当输入互不相关且至少一个的均值为 0 时，互相关与互谱密度为 0，有

$$
R_{Y}(\tau)==\left[R_{X_{1}}(\tau)+R_{X_{2}}(\tau)\right]*h(\tau)*h(-\tau)
$$

$$
{G_{Y}(\omega)=[G_{X_{1}}(\omega)+G_{X_{2}}(\omega)] \cdot| H(\omega)|^{2}}
$$

---

## 色噪声的产生与白化滤波器

### 输入白噪声产生色噪声

从 s 域分析，构造稳定的 $\mathrm{H}(\mathrm{w})$ ，选 $\left\{\overline{{G_{Y}\left(s\right)}}\quad\overline{{G_{Y}\left(-s\right)}}\right\}$ 中极点位于 s 的左半平面的作为 $\rm H(\rm s)$

!!! example "例"

    设计一稳定的线性系统，使其在具有单位谱的白噪声激励下输出功率谱为:

    $$
    G_{_{Y}}(\omega)\!=\!\frac{25\omega^{2}+49}{\omega^{4}+10\omega^{2}+9}
    $$

    解：

    **转为 s 域**

    $$
    G_{Y}(s)={\frac{49-25s^{2}}{s^{4}-10s^{2}+9}}
    $$

    因式分解

    $$
    G_{Y}(s)=\frac{(7+5s)(7-5s)}{(1-s^{2})(9-s^{2})}
    $$

    分母按照【s】【-s】分类，选择极点都在左半面的，即

    $$
    {\overline{{G_{Y}(s)}}}={\frac{7\pm5s}{(s+1)(s+3)}}=H(s)
    $$

    用$j\omega$表示

    $$
    H(\omega)=\frac{7\pm5j\omega}{(j\omega+1)(j\omega+3)}
    $$

---

### 白化滤波 | 输入任意输出白噪声

依题意得

$$
G_{Y}(\omega)=G_{X}(\omega)\cdot|H(\omega)|^{2}=1
$$

则

$$
\frac{1}{G_{X}(\omega)}=H(\omega)\cdot H(-\omega)
$$

转化到 s 域

$$
{\frac{1}{G_{X}(s)}}={\frac{1}{\overline{G_{X}(s)}}}\cdot{\frac{1}{\overline{G_{X}(-s)}}}=H(s)\cdot H(-s)
$$

选择 ${\frac{1}{\overline{{G_{_{Y}}(s)}}}} \quad {\frac{1}{\overline{{G_{_{Y}}(-s)}}}}$ 中稳定的那个作为 $H(s)$

---

## 白噪通过电子线路|等效噪声带宽

### 白噪声通过线性系统

!!! info "半功率点带宽"
    
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/H3uNbHkv3omqnzxyLYwcCPfOn2b.jpg)

输出的<span style="border-bottom: 1.5px dashed orange;">自相关函数</span>（在频域求）

$$
R_{Y}(\tau)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\frac{N_{0}}{2}\left|H(\omega)\right|^{2}e^{j\omega\tau}d\omega=\frac{1}{2\pi}\int_{0}^{\infty}N_{0}\left|H(\omega)\right|^{2}\cos\omega\tau d\omega
$$

平均功率为 **均方值**

$$
{\bf P}_{Y}=\frac{N_{0}}{2\pi}\int_{0}^{\infty}\left|H\left(\omega\right)\right|^{2}d\omega
$$

> 这里可用<span style="border-bottom: 1.5px dashed orange;">帕萨瓦尔定理</span>求解积分

---

**噪声等效带宽**

$$
\Delta\omega_{e}=\frac{\int_{0}^{\infty}\left|H(\omega)\right|^{2}d\omega}{\left|H(\omega)\right|_{M a x}^{2}}=\frac{\frac{2\pi}{N_{0}}\cdot\mathbf{P}_{Y}}{\left|H(\omega)\right|_{M a x}^{2}}
$$

> 注意，积分从 `0` 开始（本身为双边谱，变为单边谱后，系数 2 与功率上的 1/2 抵消）

!!! example "例 | 半功率点与等效带宽"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/TIb5bvvdkoSXNzxdch9c94jNn62.png)

    > 滤波器阶数越高，半功率点越接近等效带宽
    !!! info ""

        ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/B6Rxb5MsNo8JqWxQeKkc5RoInqd.jpg)

---

### 白噪声通过理想低通、带通系统

> 了解一下，具体公式结论不用记，理解概念

!!! info "低通"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/KU53b0lQHojuRsxV31QcIjs8nQf.png)

**功率谱密度**

$$
GY(\omega)=\begin{cases}\frac{N_0A^2}{2},0\lhd\omega|<\frac{\Delta\omega}{2}\\0,\text{其他}\end{cases}\quad FY(\omega)=\begin{cases}N_0A^2,0<\omega<\frac{\Delta\omega}{2}\\0,\text{其他}\end{cases}
$$

**自相关函数**

$$
\begin{aligned}RY(\tau)&=\frac{1}{2\pi}\int_{0}^{\infty}F_{Y}(\omega)\cos\omega\tau d\omega=\frac{1}{2\pi}\int_{0}^{\Delta\omega/2}N_{0}A^{2}\cos\omega\tau d\omega\\&=\frac{N_{0}A^{2}\Delta\omega}{4\pi}\cdot\frac{\sin\frac{\Delta\omega\tau}{2}}{\frac{\Delta\omega\tau}{2}}\end{aligned}
$$

**平均功率**

$$
\mathbf{P}Y=E[Y^2(t)]=\frac{N_0A^2\Delta\omega}{4\pi}
$$

**相关时间**

$$
\tau_0=\int_0^\infty\rho Y(\tau)d\tau=\int_0^\infty\frac{\sin\frac{\Delta\omega\tau}2}{\frac{\Delta\omega\tau}2}d\tau=\frac\pi{\Delta\omega}=\frac1{2\Delta f}
$$

> 与半功率带宽/等效噪声带宽成反比

---

****


!!! info "带通"
    
    > 注意窄带的概念

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/BqRUbMSUOodBMax7VLWc0hbenxh.png)

**功率谱密度**

> 取值区间变

$$
GY(\omega)=\begin{cases}\frac{N0A^2}{2},&\quad\omega_0-\frac{\Delta\omega}{2}<\mid\omega\mid<\omega_0+\frac{\Delta\omega}{2}\\0,&\quad\text{其他}\end{cases}
$$

$$
FY(\omega)=\begin{cases}N_0A^2,&\quad\omega_0-\Delta\frac{\omega}{2}<\omega<\omega_0+\frac{\Delta\omega}{2}\\0,&\quad\text{其他}\end{cases}
$$

**自相关函数**

> 两倍

$$
\begin{aligned}&R_{Y}(\tau)=\frac{1}{2\pi}\int_{0}^{\infty}F_{Y}(\omega)\cos\omega\tau d\omega=\frac{1}{2\pi}\int_{\omega_{0}-\frac{\Delta\omega}{2}}^{\omega_{0}+\frac{\Delta\omega}{2}}N_{0}A^{2}\cos\omega\tau d\omega\\&=2\left[\frac{N_{0}A^{2}\Delta\omega}{4\pi}\cdot\frac{\sin\frac{\Delta\omega\tau}{2}}{\frac{\Delta\omega\tau}{2}}\right]\cdot\cos\omega0\tau=a(\tau)\cdot\cos\omega0\tau\\&=2R_Y(\text{低通})(\tau)\cdot\cos\omega_0\tau\end{aligned}
$$

**平均功率**

> 两倍

$$
\mathbf{P}_Y=E[Y^2(t)]=\frac{N_0A^2\Delta\omega}{4\pi}\cdot2
$$

**相关时间**

与低通一样。反应包络起伏 **梯度**

---

## 线性系统输出随机信号概率分布

!!! success "一个结论"

    **当输入信号等效噪声带宽远远大于系统的带宽时，输出近似高斯分布**

---

!!! example "例"

    设平稳随机过程$\mathrm{X}(\mathrm{t})$的功率谱密度$G_{X}(\omega)=2\beta$通过一线性系统后,输出$Y(t)=\int_{-\infty}^{t}e^{-2(t-\lambda)}\cdot X(\lambda)d\lambda$

    求: $(1)\:{\rm Y}({\rm t})$ 的平均功率, $\rm{(2)}\:\rm{Y(t)}$ 的一维概率密度

    1. 求平均功率 $R_{Y}(0)$ ,即求 $G_{Y}(\omega)=|{ H}(\omega)|^{2}G_{X}(\omega)$

    从$Y(t)=\int_{-\infty}^{t}e^{-2(t-\lambda)}\cdot X(\lambda)d\lambda$注意到

    $$
    h(\tau)=e^{-2\tau}
    $$

    故其 PSD 为

    $$
    H(\omega)=\frac{1}{j\omega+2}
    $$

    则

    $$
    G_{Y}(\omega)=|H(\omega)|^{2}G_{X}(\omega)=\frac{2\beta}{\omega^{2}+4}
    $$

    求逆变换

    $$
    R_{Y}(\tau)=\frac{2\beta}{2\pi}\int_{-\infty}^{+\infty}\frac{1}{\omega^{2}+4}e^{j\omega\tau}d\omega
    $$

    求平均功率

    $$
    R_{Y}(0)=\frac{\beta}{2\pi}\int_{-\infty}^{+\infty}\frac{1}{\frac{\omega^{2}}{2}+1}d\frac{\omega}{2}=\frac{\beta}{2\pi}\cdot\arctan\frac{\omega}{2}|_{-\infty}^{+\infty}=\frac{\beta}{2}
    $$

    2. 求概率密度函数

    > 高斯白噪声经过系统后仍然是高斯的，故只需要求出均值与方差

    $$
    R_{X}(\tau)=2\beta\delta(\tau)
    $$

    则均值为 0，即

    $$
    m_{X}=0
    $$

    所以

    $$
    m_{Y}=m_{X}*h(\tau)=0
    $$

    进一步得到方差

    $$
    \sigma_{Y}^{2}=R_{Y}\left(0\right)=\frac{\beta}{2}
    $$

    最后得到结果

    $$
    f_{Y}(y;t)=\frac{1}{\sqrt{\pi\beta}}e^{-\frac{y^{2}}{\beta}}
    $$

---

!!! example "必考大题"

    仿<span style="border-bottom: 1.5px dashed orange;">例 4.4</span>，改$X(t)=\alpha\cos(\omega_{0}t+\phi),\phi\sim U(0,2\pi)$

    冲激响应与频响函数：$h(t)=be^{-bt}\cdot U(t)\leftrightarrow H(\omega)=\frac{b}{b+j\omega}$

    $(1)\quad R_Y(\tau)\quad(2)\text{输出的平均功率}\quad(3)R_{XY}(\tau)\quad R_{YX}(\tau)$

    **均值**

    $$
    E[X(t)]=0
    $$

    **自相关**

    $$
    R_{X}(\tau)=E[X(t)X(t+\tau)]={\frac{\alpha^{2}}{2}}\cos\omega\tau
    $$

    > 顺便 ~~预习~~ 复习一下平稳的条件

    功率谱密度

    $$
    G_{X}(\omega)=\frac{\alpha^{2}}{2}\pi\big[\delta(\omega+\omega_{0})+\delta(\omega-\omega_{0})\big]
    $$

    已知系统函数

    $$
    H(\omega)={\frac{b}{j\omega+b}}
    $$

    所以得到 PSD

    > 这里利用冲激函数性质

    $$
    \begin{array}{c}{{G_Y(\omega)={\displaystyle\frac{b^{2}}{\omega^{2}+b^{2}}}\cdot{\frac{\alpha^{2}}{2}}\pi\big[\delta(\omega+\omega_{0})+\delta(\omega-\omega_{0})\big]={\displaystyle\frac{b^{2}}{\omega_{0}^{2}+b^{2}}}\cdot{\frac{\alpha^{2}}{2}}\pi\big[\delta(\omega+\omega_{0})+\delta(\omega+\omega_{0})\big]}}\\ {{={\displaystyle\frac{\alpha^{2}b^{2}}{2(\omega_{0}^{2}+b^{2})}}\cos\omega_{0}\tau}}\end{array}
    $$

    所以平均功率为

    $$
    R_{Y}(0)=\frac{\alpha^{2}b^{2}}{2(\omega_{0}^{2}+b^{2})}
    $$

    再计算互相关函数

    $$
    \begin{aligned}&{R_{X Y}(\tau)=R_{X}(\tau)*h(\tau)}\\ &{R_{Y X}(\tau)=R_{X}(\tau)*h(-\tau)}\end{aligned}
    $$

    放到频域上，结合冲激函数的性质，再逆变换即可。最后有

    $$
    \begin{array}{l}{{\displaystyle R_{X Y}(\tau)=\frac{\alpha^{2}}{4}\big[\frac{b}{-j\omega+b}e^{-j\omega_{0}\tau}+\frac{b}{j\omega+b}e^{j\omega_{0}\tau}\big]}}\\ {{\displaystyle R_{Y X}(\tau)=\frac{\alpha^{2}}{4}\big[\frac{b}{j\omega+b}e^{-j\omega_{0}\tau}+\frac{b}{-j\omega+b}e^{j\omega_{0}\tau}\big]}}\end{array}
    $$

    用$R_{X Y}(\tau)=R_{Y X}(-\tau)$，不难验证其正确

    > 不一样就是你对 ¯\\_(ツ)\_/¯

