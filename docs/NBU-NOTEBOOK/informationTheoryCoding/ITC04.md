# ITC04 率失真函数

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 率失真函数

信源经过信道、AD与量化，一定会产生失真；同时，信息的传输又容许一定的损耗

信息率失真函数(Rate-Distortion Function)旨在描述最高允许失真度$D$下的最低传信率$R$，或者是$R$一定时的最小失真度$D$

> 用于信源压缩编码量化

数学上定义信息率失真函数为$R(D)$

### 概念与性质

#### 失真函数与平均失真

定义失真函数为

$$d(x_i,y_j)=\begin{cases}0&x_i=y_j\\\alpha&\alpha>0&x_i\neq y_j&\end{cases}$$

若接收端成功译码，则失真度为0，否则给定一个正数，即失真程度

> 取0并不只有一种可能

将失真函数展开，可得到失真矩阵

$$\mathbf{d}=\begin{bmatrix}d(a_1,b_1)&d(a_1,b_2)&\cdots&d(a_1,b_m)\\d(a_2,b_1)&d(a_2,b_2)&\cdots&d(a_2,b_m)\\\vdots&\vdots&&\vdots\\d(a_n,b_1)&d(a_n,b_2)&\cdots&d(a_n,b_m)\end{bmatrix}$$

**数字特征**

- 均方失真

$$d(x_{i},y_{i})=(x_{i}-y_{j})^{2}$$

- 绝对失真

$$d(x_{i},y_{j})=\mid  x_{i}-y_{j}\mid $$

- 相对失真

$$d(x_{i},y_{i})= \frac{\mid x_{i}-y_{i}\mid  }{\mid  x_{i}\mid} $$

- 离散下误码失真

$$d(x_i,y_j)=\delta(x_i,y_j)=\begin{cases}0,&\quad x_i=y_j\\1,&\quad x_i\neq y_j&\end{cases}$$

---

序列失真函数定义为

$$d_{L}(\mathbf{x}_{i},\mathbf{y}_{j})=\frac{1}{L}\sum_{l=1}^{L}d(x_{il},y_{jl})$$

> 从单符号演变为序列，故求平均

---

平均失真表达式

$$\overline{D}=\sum_{i,j}p(x_{i},y_{j})d(x_{i},y_{j})=\sum_{i,j}p(x_{i})p\left(y_{j}\mid x_{i}\right)d(x_{i},y_{j})$$

是失真矩阵的加权和，即失真函数均值

> $p\left(y_{j}\mid x_{i}\right)$为编码方式或者信道，是一种转移矩阵

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-5380067d07.png){: .zoom}

连续同理，将求和换成积分

$$\overline{D}=\int_{\infty}^{\infty}\int_{\infty}^{\infty}p(x,y)d(x,y)dxdy$$

---

#### 信息率失真函数

当信源分布与失真函数确定时，平均失真由$p\left(y_{j}\mid x_{i}\right)$决定，此处视为编码方式（即信道）

那么，当给定${D}$后，找到最小的传信率，这一函数定义为信息率失真函数$R(D)$

不妨将信源编码等效为假想信道（本质上都是转移矩阵）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-cac49c81cf.png){: .zoom}

则将所有满足${\overline{D}}\leq D$的转移概率分布构成一个信道集合$P_D$

$$P_{D}=\left\{p(y_{j}/x_{i}):\overline{D}\leq D\right\}$$

称为D允许试验信道，而允许试验信道中互信息量最小的即为信息率失真函数，即

$$R(D)=\min_{P_{D}}I(X;Y)$$

对于离散无记忆信源，可写作

$$R(D)=\min_{P_{ij}\in P_{D}}\sum_{i=1}^{n}\sum_{j=1}^{m}p(a_{i})p(b_{j}\mid a_{i})\log\frac{p(b_{j}\mid a_{i})}{p(b_{j})}$$

无失真时，${R=H(X)}$；有失真时，${R=R(D)=H(X)-H(X \mid Y)\leq H(X)}$

> 对于信源编码，可视为冗余有损压缩

---

#### 信息率失真函数的性质

**定义域与值域**

- $D_{min}=0$

当失真矩阵中每一行至少有一个0时成立，即每个`x`能都被映射

- $R_{max}=R(D_{min}=0)=H(X)$

率失真函数最大值即为信源熵，但还需要满足每列至多一个零，否则`y`没有一一映射`x`  
说明有些`x`是不必要的，$R(0)\leq H(X)$

- $R_{min}=R(D_{max})=0$

传信率不可能为负，这是没有意义的

- $D_{\max}=\min_{R(D)=0}D$

此时的失真为满足条件的`D`中的最小值，这是定义域的上限

可以说，$R(D)$的定义域为

$$D\in[0,D_{\max}]$$

到底如何求上限呢？

传信率为0即互信息量为0，也就是说输入输出相互独立

$$D_{\max}=\min_{p_{ij}}D=\min_{p_{ij}}\sum_{i=1}^{n}\sum_{j=1}^{m}p_{i}p_{ij}d_{ij}=\min_{p_{j}}\sum_{j=1}^{m}p_{j}\sum_{i=1}^{n}p_{i}d_{ij}$$

其中有

$$\sum_{j=1}^mp_j=1$$

不难看出，$D_{max}$就是$\sum_{i=1}^{n}p_{i}d_{ij}$的加权和

而希望让整体最小，就应把所有权重放在$\min_{j\in\{1,...,m\}}\left\{\sum_{i=1}^np_id_{ij}\right\}$上，其余的权重尽量小

极端些，使得仅有这一项，有

$$D_{\max}=\min_{j=1,2,\cdots,m}\sum_{i=1}^{n}p_{i}d_{ij}$$

> 矩阵的`px`\*`d`

---

!!! example "例"
    
    $$\text{设输入输出符号表为}X=Y{\in}\{0,1\},\text{输入概率}\text{分布}p(x)=\{1/3,2/3\},\text{失真矩阵为}$$
    
    $$\mathbf{d}=\begin{bmatrix}d(a_1,b_1)&d(a_1,b_2)\\d(a_2,b_1)&d(a_2,b_2)\end{bmatrix}=\begin{bmatrix}0&1\\1&0\end{bmatrix}$$
    
    求极值下的转移概率
    
    $$\begin{aligned}&\text{当}\mathbf{D}_{\mathrm{min}}=0\text{时,R}(\mathbf{D}_{\mathrm{min}})=\mathbf{H}(X)=\mathbf{H}(1/3,2/3)=0.91\\&\text{比特}/\text{符号,这时信源编码器无失真,所以该编码器的转移概率为}\end{aligned}$$
    
    $$P=\begin{bmatrix}1&0\\0&1\end{bmatrix}$$
    
    $$\text{当}\mathbf{R(D_{max})=0}\text{时}$$
    
    $$\begin{aligned}D_{\mathrm{max}}&=\min_{j\to1,2}\sum_{i=1}^{2}p_{i}d_{ij}\\&-\min_{j=1,2}\{p_{1}d_{11}+p_{2}d_{21},p_{1}d_{12}+p_{2}d_{22}\}\\&=\min_{J^{-1,2}}\left\{\frac{1}{3}\times0+\frac{2}{3}\times1,\frac{1}{3}\times1+\frac{2}{3}\times0\right\}\\&=\min_{j=1,2}\left\{\frac{2}{3},\frac{1}{3}\right\}=\frac{1}{3}\end{aligned}$$
    
    $$此时输出符号概率p(b_1)=0,p(b_2)=1,\text{编码器转移概率为}$$
    
    $$\mathbf{P}=\begin{bmatrix}0&1\\0&1\end{bmatrix}$$
    
---

**下凸性**

设

$${D}={\theta D}_{1}+(1-{\theta}){D}_{2},({0}\leq{\theta}\leq{1})$$

可用凸函数定义证明

$$f(tx_1+(1-t)x_2)\leq tf(x_1)+(1-t)f(x_2)$$

---

**单调递减性与连续性**

$${R}({D})=\min_{{p}_{i}\in{P}_{0}}{I}({X};{Y})\leq\min_{{p}_{i}\in{P}_{0}}{I}({X};{Y})={R}({D}^{\prime})$$

---

##### 性质结论

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-2fe7373e20.png){: .zoom}

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-25ec510288.png){: .zoom}

---

#### 率失真函数与信道容量比较

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-8c2c0661ce.png){: .zoom}

---

#### 参量法求率失真函数解析式

参数法的核心思想是引入一个参数（通常是拉格朗日乘子 S），将求解R(D)这个带有约束的优化问题，转化为求解一个不带约束的优化问题

通过改变参数 S 的值，可以得到一系列的 (D,R) 对，从而描绘出R(D)曲线

令信源`U`及其分布为

$$P[U]=\begin{bmatrix}u_1&u_2&\ldots&u_r\\p(u_1)&p(u_2)&\ldots&p(u_r)\end{bmatrix}$$

假设信宿`V`，并有失真函数

$$d(u_i,v_j),i=1,\cdots,r,j=1,\cdots,s$$

已知率失真函数表达式为

$$R(D)=\min_{P_{D}}I(X;Y)$$

互信息量展开为

$$I(U;V)=\sum_{i=1}^r\sum_{j=1}^sp(u_i)p(v_j\mid u_i)\log\frac{p(v_j\mid u_i)}{p(v_j)}=\sum_{i=1}^r\sum_{j=1}^sp(u_i)p(v_j|u_i)\log\frac{p(v_j\mid u_i)}{\sum_{i=1}^rp(u_i)p(v_j\mid u_i)}$$

**约束条件为**

- 条件概率归一性

$$\sum_{j=1}^sp(v_j\mid u_i)=1$$

- 满足D允许失真信道

$$D=\sum_{i=1}^r\sum_{j=1}^sp(u_i)p(v_j\mid u_i)d(u_i,v_j)$$

引入拉格朗日乘子$S、\mu_i$

$$\frac{\partial}{\partial p(v_j\mid u_i)}[I(U;V)-SD-\mu_i\sum_{j=1}^sp(v_j\mid u_i)]=0$$

求偏导令其为零，一顿小鸡炖蘑菇得到

$$p(u_i)\log\frac{p(v_j|u_i)}{p(v_j)}-Sp(u_i)d(u_i,v_j)-\mu_i=0$$

左右同除信源，并取指数得

$$\frac{p(v_j|u_i)}{p(v_j)}=\exp\left(Sd(u_i,v_j)+\frac{\mu_i}{p(u_i)}\right)$$

左右同乘信宿，得

$$p(v_j|u_i)=p(v_j)\exp\left(Sd(u_i,v_j)+\frac{\mu_i}{p(u_i)}\right)$$

> 注意，上面两步的前提是，信源与信宿分布不为零

为了计算方便，令$\lambda_i=\exp\left(\frac{\mu_i}{p(u_i)}\right)$，整理得

$$p(v_j\mid u_i)=\lambda_ip(v_j)\exp\left(Sd(u_i,v_j)\right)$$

- 求$\lambda_i$

两边对`j`求和

$$1=\sum_{j=1}^sp(v_j)\lambda_i\exp(Sd(u_i,v_j))$$

得到表达式

$$\lambda_i=\frac{1}{\sum_{j=1}^sp(v_j)\exp(Sd(u_i,v_j))}\quad(i=1,2,\ldots,r)$$



- 求$p(v_j)$

$$p(v_j)=\sum_{i=1}^rp(u_i)p(v_j|u_i)=\sum_{i=1}^rp(u_i)[p(v_j)\lambda_i\exp(Sd(u_i,v_j))]$$

左右同时除$p(v_j)$

$$1=\sum_{i=1}^rp(u_i)\lambda_i\exp(Sd(u_i,v_j))\quad(j=1,2,\ldots,s)$$

再将$\lambda_i$关于`S`的表达式代入，得

$$1=\sum_{i=1}^rp(u_i)\frac{\exp(Sd(u_i,v_j))}{\sum_{k=1}^sp(v_k)\exp(Sd(u_i,v_k))}$$

在求得信宿分布后，即可反推$\lambda_i$和$p(v_j\mid u_i)$

- 求平均失真$D(S)$

代代代入即可

$$D(S)=\sum_{i=1}^r\sum_{j=1}^sp(u_i)p(v_j)\lambda_i\exp(Sd(u_i,v_j))d(u_i,v_j)$$

此时可用`D`表达`S`

- 求率失真函数$R(S)$

$$R(S)=SD(S)+\sum_{i=1}^r\mu_i=SD(S)+\sum_{i=1}^rp(u_i)\log\lambda_i$$

最后再用`D`带掉`S`即可

**注意，上述方法仅限于单段曲线，若存在多段则需具体分析**

> 比如课后`4-7`多段表达式，需要注意信宿分布，零点后直接通过`q`（对称信道：[0.5 0.5 0]）反算$\lambda$



!!! example "例"
    
    $$\begin{aligned}&\text{设输入、输出符号集为 }U=V=\{0,1\}\text{,输入概率密度分布为}\\&p(0)=p,p(1)=1-p,\text{且 }0<p\leqslant\frac{1}{2},\text{失真矩阵为}\\&d=\begin{bmatrix}d(u_1,v_1)&d(u_1,v_2)\\\\d(u_2,v_1)&d(u_2,v_2)\end{bmatrix}=\begin{bmatrix}0&1\\1&0\end{bmatrix}\end{aligned}$$
    
    $$\text{求信息率失真函数}R(D)$$
    
    - 确定$R(D)$定义域
    
    很容易得到
    
    $$D_{\min}=\sum_{i=1}^{2}p(u_{i})\bullet\{\min_{j}d(u_{i},v_{j})\}=0$$
    
    $$\begin{aligned}D_{\mathrm{max}}&=\min_{j}\left\{\sum_{i=1}^{2}p(u_{i})\cdot d(u_{i},v_{j})\right\}\\&=\min_{j}\{p(u_{1})d(u_{1},v_{1})+p(u_{2})d(u_{2},v_{1});p(u_{1})d(u_{1},v_{2})+p(u_{2})d(u_{2},v_{2})\}\\&=\operatorname*{min}_{j}\{p(0)\bullet0+p(1)\bullet1;p(0)\bullet1+p(1)\bullet0\}\\&=\min_{j}\{p(1);p(0)\}\\&=p\end{aligned}$$
    
    所以定义域为
    
    $$D\in(0,p)$$
    
    - 求$\lambda_i$
    
    通过
    
    $$1=\sum_{i=1}^rp(u_i)\lambda_i\exp(Sd(u_i,v_j))\quad(j=1,2,\ldots,s)$$
    
    可以得到齐次方程
    
    $$\begin{cases}\lambda_1p(0)\exp\{Sd(u_1,v_1)\}+\lambda_2p(1)\exp\{Sd(u_2,v_1)\}=1\\\\\lambda_1p(0)\exp\{Sd(u_1,v_2)\}+\lambda_2p(1)\exp\{Sd(u_2,v_2)\}=1&\end{cases}$$
    
    化简得
    
    $$\begin{cases}\lambda_1p+\lambda_2(1-p)\exp(S)=1\\\\\lambda_1p\exp(S)+\lambda_2(1-p)=1&\end{cases}$$
    
    解得
    
    $$\lambda_{1}=\frac{1}{p[1+\exp(S)]}\\\lambda_{2}=\frac{1}{(1-p)[1+\exp(S)]}$$
    
    - 求$p(v_j)$
    
    通过
    
    $$\lambda_i=\frac{1}{\sum_{j=1}^sp(v_j)\exp(Sd(u_i,v_j))}\quad(i=1,2,\ldots,r)$$
    
    又可以得到齐次方程
    
    $$\begin{cases}p(v_1)\exp\{Sd(u_1,v_1)\}+p(v_2)\exp\{Sd(u_1,v_2)\}=\frac{1}{\lambda_1}\\\\p(v_1)\exp\{Sd(u_2,v_1)\}+p(v_2)\exp\{Sd(u_2,v_2)\}=\frac{1}{\lambda_2}&\end{cases}$$
    
    化简得
    
    $$\begin{cases}p(v_1)+p(v_2)\exp(S)=\frac{1}{\lambda_1}\\\\p(v_1)\exp(S)+p(v_2)=\frac{1}{\lambda_2}&\end{cases}$$
    
    解得
    
    $$p(v_{1})=\frac{p-(1-p)\exp(S)}{1-\exp(S)}\\p(v_{2})=\frac{(1-p)-p\exp(S)}{1-\exp(S)}$$
    
    - 求平均失真$D(S)$
    
    $$D(S)=\sum_{i=1}^r\sum_{j=1}^sp(u_i)p(v_j)\lambda_i\exp(Sd(u_i,v_j))d(u_i,v_j)$$
    
    代入已知条件，可得
    
    $$D(S)=\lambda_{1}pp(v_{2})\exp(S)+\lambda_{2}(1-p)p(v_{1})\exp(S)$$
    
    解得
    
    $$D(S)=\frac{\exp(S)}{1+\exp(S)}$$
    
    可解出参量
    
    $$S=\log\frac{D}{1-D}$$
    
    - 求率失真函数$R(S)$
    
    $$R(S)=SD(S)+\sum_{i=1}^r\mu_i=SD(S)+\sum_{i=1}^rp(u_i)\log\lambda_i$$
    
    代入得
    
    $$\begin{aligned}R(D)&=\sum_{i=1}^{2}p(u_{i})\log\lambda_{i}+SD\\&=p(u_{1})\log_{\lambda_{1}}+p(u_{2})\log_{\lambda_{2}}+\mathrm{SD}\\&=p\mathrm{log}\lambda_{1}+(1-p)\mathrm{log}\lambda_{2}+\mathrm{SD}\end{aligned}$$
    
    展开并整理得到
    
    $$R(D)=\begin{cases}H(p,1-p)-H(D,1-D)&\quad0\leqslant D\leqslant p\leqslant\frac{1}{2}\\0&\quad D\geqslant p&\end{cases}$$
    
    > 抄都抄得累死了🥲
    
    ```MATLAB
    % 率失真函数计算——参量法计算
    % 仅适合单段函数，多段需找信宿分布零点
    %% 1. 信源分布与失真函数
    clear;clc;
    syms S D p;
    Pu = [0.4 0.4 0.2];
    N = length(Pu);
    dij = [0 1 1;
       1 0 1;
       1 1 0];
    Wn = exp(S * dij);
    %% 2. 计算labmda(S)
    % sum_i Pu*lambda*Wn = 1 , j=1,2
    % A * lambda = ones([3,1]);
    A = Pu .* Wn.';
    lambda = simplify(A \ ones([N,1]));
    %% 3. 计算Pv
    % sum_j Pv*Wn = 1/lambda
    % Wn * Pv = 1./lambda
    Pv = simplify(Wn \ (1./lambda));
    %% 4. 计算Pij
    % Pij = lambda * Pv * Wn
    Pij = simplify(lambda .* Pv.' .* Wn);
    %% 5. 计算D(S)
    % DS = sum_i sum_j Pu Pv lambda Wn dij
    % DS = Pu.' .* Pv.' .* lambda .* Wn .* dij 
    DS = simplify(sum(Pu.' .* Pv.'.* lambda .* Wn .* dij,'all'));
    %% 6. 计算R(S)
    % RS = S*DS + sum_i Pu * ln lambda
    RS = simplify(S*DS + Pu * log(lambda));
    %% 7. 反解S 
    S_sol = simplify(solve( DS == D, S));
    %% 8. 用D表达
    lambda_D = simplify(subs(lambda,S,S_sol));
    Pv_D = simplify(subs(Pv,S,S_sol));
    Pij_D =simplify(subs(Pij,S,S_sol));
    RD = simplify(subs(RS,S,S_sol));
    ```
    
---

