# 窄带随机过程

<div id="progress-container">
  <div id="progress-bar"></div>
</div>



> 其实并没有说窄带随机过程 🤣NBU 是这样的

## 单边谱是咋来滴—HT

双边谱 $\rightarrow$ 单边谱 $^{-}\backslash(^{\circ}\_{0})/{}^{-}$ 希尔伯特变换！！


鉴于这一章只有这个知识点，下面将作详细说明

---

## Hilbert Transform 引出

对某一信号，若希望将双边谱改为单边谱，则可以将原频谱的两倍与阶跃信号相乘，即
<a id = "eq1"></a>
$$
{\widetilde{X}}(f)=2\cdot X(f)\cdot U(f)
$$
</a>
时域下的阶跃函数的 `FT` 对为

$$
u(t)\longleftrightarrow\pi\delta(\omega)+\frac{1}{\mathrm{j}\omega}
$$

又由对偶性

$$
F(\mathrm{j}t)\stackrel{\mathrm{FT}}{\longleftrightarrow}2\pi f(-\omega)
$$

得频域阶跃信号的 IFT

$$
u(\omega)\overset{\mathrm{FT}}\longleftrightarrow\left(\pi\delta(t)+\frac{1}{\mathbf{j}(-t)}\right)\cdot\frac{1}{2\pi}=\frac{1}{2}(\delta(t)+j\frac{1}{\pi t})
$$

所以对[原式](#eq1)做逆变换，得时域谱

$$
\begin{array}{c}{{\tilde{x}(t)=2\cdot x(t)*\displaystyle\frac{1}{2}(j\displaystyle\frac{1}{\pi t}+\delta(t))}}\\ {{=x(t)+j(x(t)*\displaystyle\frac{1}{\pi t})}}\end{array}
$$

其中，将 `x(t)*1/πt` 定义为希尔伯特变换，即

$$
\hat{x}(t)=x(t)*\frac{1}{\pi t}
$$

那么单边解析信号又可写为

$$
\tilde{x}(t)=x(t)+j\hat{x}(t)
$$

$$
\hat{s}(t)=s(t)\ast\frac{1}{\pi t}=\frac{1}{\pi}\int_{-\infty}^{\infty}\frac{s(\tau)}{t-\tau}d\tau=H[s(t)]
$$

> 自此，继 FT/LT/ZT 后，多了一个 HT

---

## HT 性质

!!! success "HT 性质"

    1. **线性变换**

    考虑希尔伯特变换在频域的表现，即做 FT

    这里不得不考虑 $\frac{1}{\pi t}$ 的 FT

    再次使用对偶性，得到

    $$
    \frac{1}{\pi t}=\frac{j}{2\pi}\frac{2}{j t}\stackrel{\mathrm{FT}}{\longleftrightarrow}2\pi\cdot\frac{j}{2\pi}s g n(-\omega)=-j s g n(\omega)
    $$

    整理一下

    $$
    \frac{1}{\pi t}\overset{\underset{\mathrm{FT}}{}}{\longleftrightarrow}-j s g n(\omega)
    $$

    > sgn 是符号函数 | 这个$\mathrm{H}(\mathrm{w})$很有用喔

    $$
    \text{可以看成}s(t)\text{通过一个}h(t)=\frac{1}{\pi t}\text{的线性滤波器}
    $$

    2. **正交滤波器**

    > 基于移项法的 SSB 调制，就是这里来的

    我们刚刚得到了$\mathrm{H}(\mathrm{w})$，进一步再把符号函数化简，可得

    $$
    {\hat{S}}(\omega)=-j\,\mathrm{sgn}(\omega)\cdot S(\omega)
    $$

    或者表达为

    $$
    {\hat{S}}(\omega)=\left\{\!\!\begin{array}{l l}{-j S(\omega),}&{\omega>0}\\ {j S(\omega),}&{\omega<0}\\ {j S(\omega),}&{\omega<0}\end{array}\right.=\left\{\!\!\begin{array}{l l}{S(\omega)e^{-j\frac{\pi}{2}},}&{\omega>0}\\ {}\\ {S(\omega)e^{j\frac{\pi}{2}},}&{\omega<0}\end{array}\right.
    $$

    即移项

    3. **两次 HT===倒相器**

    > 不知是哪个小天才想到再做一次 HT 的

    时域上

    $$
    {\hat{\hat{s}}}(t)=H\left[H[s(t)]\right]={\hat{s}}(t)*{\frac{1}{\pi t}}=s(t)*{\frac{1}{\pi t}}*{\frac{1}{\pi t}}
    $$

    频域上

    $$
    S_{\wedge \wedge}(\omega)=[-j\operatorname{sgn}(\omega)]\cdot[-j\operatorname{sgn}(\omega)]\cdot S(\omega)=-S(\omega)
    $$

    于是得

    $$
    H\left[H[s(t)]\right]=-s(t)
    $$

    4. **IHT**

    基于第三点，我们发现

    $$
    -H\left[\hat{s}(t)\right]=s(t)
    $$

    诶，再做一次 HT 并取负，这不就是逆变换吗

    > 那我做四次 HT 是不是也算 IHT 啊

---

## 常见 HT

> 也就是 cos 和 sin 啦

先说结论

$$
\begin{aligned}&{H[\cos\Omega t]=\mathrm{sgn}(\Omega)\cdot\sin\Omega t}\\ &{H[\sin\Omega t]=-\mathrm{sgn}(\Omega)\cdot\cos\Omega t}\end{aligned}
$$

> 其实，和【求导】没啥区别（考虑其正交滤波器的特性，移动 π 不就是换了一下嘛）

??? question "推导过程"

    $$
    H[\cos\Omega t]=\frac{1}{\pi}\int_{-\infty}^{\infty}\frac{\cos\Omega(t+\tau)}{-\tau}d\tau
    $$

    这里根据卷积的性质上下 +t 得到，便于后续拆项
    拆项得

    $$
    \frac{1}{\pi}\bigg[\!-\cos\Omega t\int_{-\infty}^{\infty}\frac{\cos\Omega\tau}{\tau}d\tau+\sin\Omega t\int_{-\infty}^{\infty}\frac{\sin\Omega\tau}{\tau}d\tau\bigg]
    $$

    显然，第一项为奇函数，积分为 0；第二项为偶函数，故

    $$
    H[\cos\Omega t]=\frac{2}{\pi}\cdot\sin\Omega t\cdot\int_{0}^{\infty}\frac{\sin\Omega\tau}{\tau}d\tau
    $$

    又有 sinc 函数的积分

    $$
    \int_{0}^{\infty}{\frac{\sin a x}{x}}d x={\binom{{\frac{\pi}{2}},a>0}{-{\frac{\pi}{2}},a<0}}
    $$

    所以

    $$
    H\left[\cos\Omega t\right]=\operatorname{sgn}(\Omega)\cdot\sin\Omega t=\left\{\!\!\begin{array}{l l}{\sin\Omega t,\quad}&{\Omega>0}\\ {-\sin\Omega t,}&{\Omega<0}\end{array}\!\!\right.
    $$

    对其再 HT 一次，得

    $$
    H\cdot H[\cos\Omega t]=\operatorname{sgn}(\Omega)\cdot H[\sin\Omega t]=-\cos\Omega t
    $$

    把符号函数移项，得 sin 函数的 HT

    $$
    H[\sin\Omega t]=-\operatorname{sgn}(\Omega)\cdot\cos\Omega t={\left\{\begin{array}{l l}{-\cos\Omega t,}&{\Omega>0}\\ {\cos\Omega t,}&{\Omega<0}\end{array}\right.}
    $$

    **买一送一**

    $$
    H[a(t)\cos\omega_{0}t]=a(t)\sin\omega_{0}t
    $$

    $$
    H[a(t)\sin\omega_{0}t]=H\cdot H[a(t)\cos\omega_{0}t]=-a(t)\cos\omega_{0}t
    $$

    其中，a(t) 为低频限带信号

    $$
    A(\omega)=\left\{\!\!\begin{array}{l l}{A(\omega),\quad}&{|\;\omega\;|<\frac{\Delta\omega}{2}<\omega_{0}}\\ {0,\quad}&其他\end{array}\right.
    $$

---

!!! example "例 | 需要记住的结论"

    - 偶函数的希尔伯特变换为奇函数;
    - 奇函数的希尔伯特变换为偶函数。

    证明：

    以第一个为例

    已知 HT 变换

    $$
    {\hat{X}}(\omega)=-{j}\mathrm{sgn}(\omega)X(\omega)
    $$

    则

    $$
    {\hat{X}}(-\omega)=-j s g n(-\omega)X(-\omega)=j s g n(\omega)X(\omega)=-{\hat{X}}(\omega)
    $$

    故

    $$
    x(t)=-x(-t)
    $$
