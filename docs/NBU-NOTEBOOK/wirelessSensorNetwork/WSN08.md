# WSN08 应用层

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 应用层

主要支撑应用有三：同步、定时与拓扑管理

### 时间同步

Time Synchronization

!!! quote "Time is everything"



!!! tip "为什么我们如此需要时间"

    - MCU本地需要晶振
    - 传感器的感知、休眠、通信基于定时
    - MAC层协议需要定时
    - 包交换（分组交换）需要`timestamp`

---

#### 时间从何而来

手机上显示的时间为`UTC`（Coordinated Universal Time）

它由`UT1`与`Atomic Time`决定

> 真太阳时、真恒定时、平均太阳时不再赘述

当位于格林威治天文台观测平均太阳时时，便有了GMT（Greenwich Mean Time），或者说`UT0`，继而产生了时区

> 比如北京时间为东八区`GMT+8`

但实际上地球自转轴是在变化的，时区的概念并不准确，我们需要补偿

$$\mathrm{UT1=UT0+tan(1at)*(x*sin(1ong)+y*cos(1ong))}$$

但精度还不够，于是将目光投向微观世界

不难注意到，铯原子在激发频率`9,192,631,770Hz`下会大量跃迁至高能态

将思路逆转，只要仪器接收到大量高能粒子，并将振动`9,192,631,770`次定义为`1`秒

这称为国际原子时间`TAI`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-f7491e5d38.png){: .zoom}

然而，生活中，我们仍希望时间与十二时辰相对应

原子时是永恒不变的，可地球自转在变慢，所以需要`UT1`与`TAI`的折衷

于是有了`UTC`

具体来说，我们需要每隔四年加一秒，即，闰秒🤪

---

> 看完了吗？上面都不考，了解一下，方便吹牛

实际上原子钟对于WSN宛如癞蛤蟆想吃天鹅肉，晶振才是唯一的归宿\~

介绍同步协议之前，我们需要知道它们的使命

- 让传感器节点同步到一个参考时间
- 纠正节点间的相对时间差$\Delta\tau(t)$，自变量`t`为绝对时间，因变量为实际时间

理想状态下二者相等，而实际中

$$\tau_{i}(t)=\alpha_{i}(t)t+\theta_{i}(t)$$

斜率称为时钟漂移（clock drift）

截距称为时钟偏差（clock offset）

**这是低成本时钟的两大参数**

> 让灵魂画师来解释相对时间差是啥

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-051716b25b.png){: .zoom}

---

#### NTP

Network Time Protocol ，实现节点时间同步到`UTC`，适用于传统网络

##### 同步过程

- 引入时间服务器，形成分层结构
- 主次服务器间的同步
- 服务器与主机之间的同步

`NTP`通过两次握手来实现同步传递

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-e1cc4b13ed.png){: .zoom}

##### 两次握手计算时间差

- `i`发送`SYNC`消息，并带上发送时间戳`t1`
- `j`收到后加上接收时间戳`t2`
- `j`等待一段时间后发送`REPLY`，并加上时间戳`t3`
- `i`收到回包后加上`t4`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-5522bea541.png){: .zoom}

令$a=t_2^j-t_1^i\mathrm{~and~}b=t_4^i-t_3^j$

则往返时间为

$$\delta_{ij}=a+b=t_2+t_4-t_1-t_3$$

假设往返时延一致，则

$$t_4^i+\theta_{ij}-t_3^j=t_2^j-(t_1^i+\theta_{ij})$$

得时钟偏差



$$\theta_{ij}=\frac{a-b}{2}=\frac{t_2+t_3-t_1-t_4}{2}$$

> 这一前提是等待时间较短，否则假设就不再成立了

注意，这里只有`i`节点（先手节点）能知道二者时间差，`j`（后手节点）则无法知晓

---

#### TPSN

> Timing-Sync Protocol for Sensor Network ，基于WSN的NTP技术

实现原理分为层次发现和同步阶段两个步骤

##### 层次发现

> 有点像簇组织过程

令时间服务器为汇聚节点，并作为根节点

形成树结构，层次与跳数相对应（第`i`层代表离汇聚节点`i`跳）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-1651ba87ee.png){: .zoom}

> 这一结构与D-MAC类似

##### 同步阶段

- 根目录发起同步通知（不包含时间戳），即`time_sync`数据包
- 子节点随后基于随机退避发送`synchronization_pulse`给父节点，即第一次握手
- 同时这一报文也起到`time_sync`的作用向下传递
- 下一时刻，父节点返回`ACK`（第二次握手），同时再下一级子节点与该节点第一次握手
- 如此往复，直至遍历树

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-ad15913ede.png){: .zoom}

**TPSN评价**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-e05120bdbf.png){: .zoom}

#### 同步影响因素

- $t_{send}$：发送时延
- $t_{acc}$：接入时延
- $t_{prop}$：传播时延
- $t_{recv}$：接收时延

除了传播时延，其余都存在随机性

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-743c179ff1.png){: .zoom}

此外，CSMA、多径效应也都会使得链路时延具有不对称性

**故`NTP`不适用于WSN网络**

---

!!! success "第九次课后练习题"

    1. 描述低成本时钟的两大参数是什么?

    - 斜率称为时钟漂移（clock drift）
    - 截距称为时钟偏差（clock offset）

    1. 使用NTP协议进行时间同步，假设节点i后动同步时刻为`0.1ms`,节点`i`在`0.3ms`时刻接收到同步数据包，再经过`1ms`（绝对时间`1.3ms`）后，向节点`i`发送答复数据包，节点`i`在`1.2ms`接收到该答复数据包：两节点间的时钟差值是多少?数据包往返时间是多少?

    - 时钟差值：(0.3+1.3-0.1-1.2)/2=0.15ms
    - 往返时间：0.3+1.2-0.1-1.3=0.1ms

    1. `TPSN`使用与`NTP`类似的同步思想进行全网节点的时间同步，其中`time_sync`数据包、`synchronization_pulse`和`ACK`的作用分别是什么?

    - 根目录发起同步通知，即`time_sync`数据包
    - 子节点随后基于随机退避发送`synchronization_pulse`给父节点，即第一次握手
    - 同时这一报文也起到`time_sync`的作用向下传递
    - 下一时刻，父节点返回`ACK`（第二次握手），同时再下一级子节点与该节点第一次握手

---

#### RBS

很多时候，WSN的传感器并不`care`绝对时间，而仅需要知晓与周边的相对差值

参考广播同步(Reference-Broadcast Synchronization)，旨在找出节点之间的时间差值

- 没有统一的时间服务器，也不纠正自身时间，而只记录相对时间差值（此处区别于NTP或者TPSN）

具体来说，广播节点宣布同步开始，各个节点记录接收时间，再各自通信对比，即得相互时间差值

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-2fe08fa88a.png){: .zoom}

如此一来，除了传播时延$t_{prop}$与接收时延$t_{recv}$会影响同步精度，其他时延因为都被考虑进去（因为仅需要知道相对时间而不做矫正）则不会干扰精度

> 注意，广播节点因为是组织者，不能参与同步，无法同步



![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-714dd146bf.png){: .zoom}

- 广播域内的事件排序：汇聚节点基于时差进行先后排序
- 跨广播域的事件排序：通过转换节点变基

> 若上图中`7`节点想要知道与`1`节点的时间关系，可借助`4`节点
> 
> 先记录`1`相对`4`的时间差，再把这个时间轴放在`7`节点的参考系上即可



**优缺点**

- 更高精度的同步
- 发射复杂度为$O(n^2)$（需要互相传），开销大
- 广播节点不能参数同步

---

#### ACS

> 从这一协议开始，将实际时间建模为Linear Model，即建立在线性延迟的前提上

自适应时钟同步(Adaptive Clock Synchronization)，为减少节点间因数据交换带来的开销

在`RBS`中，需要两两交流信息，过于繁琐（复杂度为$O(n^2)$）

将思路逆转，如果每个节点先将自身拟合出的线性模型参数告知于广播节点，  
广播节点整理打表后再广播出去，可将发射复杂度降为$O(n)$



##### 广播域内的同步过程

- 广播节点连续等距广播`m`个参考数据包，供各个节点通过线性回归，拟合出时间参数（时钟漂移）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-fe9e02422c.png){: .zoom}

- 每一个接收节点将时钟漂移与线上某一时间点打包发送给广播节点
- 广播节点根据本地时钟漂移值，计算与各个节点的相对漂移差值
- 广播节点广播计算结果与每个节点某一时间点（使得可计算出与其他节点的差值，从而节省通信开销）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-462c3a5e40.png){: .zoom}

---

#### Tiny- and Mini-Sync Protocols

小型/微型同步协议，用于估计节点间的漂移值与偏差值

通过N组握手对节点相对时延（线性相关）进行约束

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-45e2805c51.png){: .zoom}

- 计算简单，开销小
- 同步精度不高

  - 可通过调整握手次数与握手时延增加精度

---

#### RDP

基于速率的扩散协议（Rate-based Diffusion Protocol），希望使得所有节点的时钟同步到均值上

- 节点周期性广播各自时间信息
- 邻节点调整各自时钟

$$c_{i}^{t+1}=c_{i}^{t}-\sum_{j\neq i}r_{ij}(c_{i}^{t}-c_{j}^{t})$$

- 其中，扩散率应满足对称关系，即$r_{ij}=r_{ji}$



- 可实现全网同步，使得TDMA在WSN中使用
- 需要频繁的通信
- 未考虑发送时延和接入时延等参数造成的影响

---

!!! success "第十次课后练习题"

    1. `NTP`同步过程中，每个节点在将同步数据包插入MAC队列时，都需记录插入时间（×，启动同步时记录）
    2. `RBS`同步具有更高的同步精度是因为其不受接入时延和传播时延的影响（×）
    3. `RBS`中，一个广播域内、具有相似接收时延的节点间能实现更高精度的时间同步（√）
    4. 小型/微型同步协议可利用节点间的一次数据交换来估计相对漂移和相对偏差（×，至少两组握手）
    5. 小型/微型同步协议中，一次握手的时延长度不会影响相对漂移的估计精度（×，越短越好）

---

### 定位

在WSN中，让每一个节点都装配一个GPS是过于奢侈的。我们将部分拥有GPS的节点称为信标（Beacon），其他节点则通过相对距离计算绝对位置

根据测距算法的不同，分为基于测距的定位与非测距的定位

---

#### 测距技术

希望能测量两点距离与方位，类似于极坐标

**主要的测距技术**

- 基于接收信号强度（Received Signal Strength,RSS）
- 基于到达时间（ToA）
- 基于到达时间差（TDoA）
- 基于到达角（AOA）

---

##### RSS

基于对数正态阴影衰落模型，有

$$P_r(d)=P_t-PL(d_0)-10\eta\log_{10}\left(\frac{d}{d_0}\right)$$

则可通过测量接收信号功率获取距离

- 存在阴影衰落

$$PL(d)=PL(d_0)[\mathrm{dB}]+10\eta\log_{10}\left(\frac{d}{d_0}\right)+X_\sigma$$

> 可基于大数定理，取多次接收的均值

- 存在非视距传播（NLoS）

---

##### ToA

分为被动测量与主动测量（从子节点的视角考虑）

**被动测量**

- 接收节点利用信标节点发送的信号来计算两者的距离

**主动测量**

- 由传感器节点发送一个测距数据包，信标节点立即返回一个回复
- 利用往返时间来估算距离

**其中，被动测量需要**

- 双方同步
- 需要得到精确的发送时间

**影响测距精度的主要因素**

- 计时设备的准确性
- 时间同步精度
- 多径效应带来的小尺度衰落
- 非视距传输

单纯的ToA对于RF来说不太适合（除非有算法补偿），而更适合水声通信这种慢波

---

##### TDoA

测量多个不同信号的到达时间差

**多信号源于不同发送节点**

Multi-node TDoA

Beacon同时/分别（需要信标节点间/信标与接收节点间同步）向接收节点发送信号，一组接收可得一组双曲线（时间差转为距离差），两组双曲线即可定位一点

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-de69672e5b.png){: .zoom}

**多信号源于同一发送节点**

用两种不同类型的信号向接收节点发送测距信息

- 以RF定基准起始时间（认为是几乎瞬间到达），再通过声波计算距离

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-af917ba028.png){: .zoom}

$$d_{AB}=S_{us}(t_{us}-t_{delay}-t_{rf})$$

**特点**

- LOS下，可获得较高的测量精度
- 在非视距条件下，导致较大的误差
- 基于多信号TDOA的测距技术，需使用额外的发射机和接收机

---

##### AoA

均匀线阵，得到远场下相位与距离的关系函数

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-7fd9b6cf1a.png){: .zoom}

**影响因素**

- 多径效应
- 非视距传播
- 散射

---

#### 无噪下的理论定位技术

有基于距离的定位与基于到达角的定位

##### 基于距离的定位

三边定位技术，Trilateration

> 三点异线，否则不能定位

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-9baabb954f.png){: .zoom}

---

!!! success "第十一次课后练习题"

    1. 多次测量RSS值，可提高测距精度，这对多径环境和非视距传输均有效。（×，对NLOS无效）
    2. 主动模式`TOA`测距中，需要传感器和信标节点时间同步（×，主动模式不需要）
    3. 节点`TDOA`测距中，假如多个信标节点时间不同步，测距将受影响（×，不一定）
    4. 影响AoA测角的主要因素包括多径传播，但不包括非视距传输（×，包括`NLOS`）
    5. 理论上（测量值可靠），对于三边定位，当待估计传感器与两个信标节点位于一直线上时，只需要测量其到两个信标距离即可定位（√）

---

##### 基于到达角的定位

三角定位，通过两个信标的到达角确定节点位置

> 同样的，信标间不相似

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-9b193637fb.png){: .zoom}

---

#### 有噪下基于距离的ML多边定位

> 针对噪声干扰下接收信号的偏差问题，利用似然函数做距离估计

从概率角度出发，评估平面上每一点的概率，找出最大点

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-67249e0d17.png){: .zoom}



> 从[无线通信](https://o2ywbvn10e.feishu.cn/docx/HGlTdLtAnoMcz7x1hXpcb1WenRb#share-EUIzdJjjaoqhsRxGMVTcEdAGnth)抄一遍来

ML（Maximum Likelihood）估计

- 算法思路简单，无需先验概率，仅依赖似然函数
- 在噪声满足高斯分布时性能较好
- 当$\mathrm{H^TH}$条件不好，接近奇异时，容易放大噪声，精度较低
- 对于离散符号空间，复杂度随星座阶数成指数增长

ML估计基于观测数据在给定参数下有概率最大的思想

$$\hat{\mathbf{x}}_{\mathrm{ML}}=\arg\max_{\mathbf{x}}p(\mathbf{y}\mid\mathbf{x})$$

假设噪声为零均值高斯分布，则

$$p(\mathbf{y}\mid\mathbf{x})\propto\exp\left(-\frac{1}{2\sigma^2}\|\mathbf{y}-\mathbf{H}\mathbf{x}\|^2\right)$$

那么估计实质上等价于求最小平方误差

$$\hat{\mathbf{x_{ML}}}=\arg\min_{\mathbf{x}}\|\mathbf{y}-\mathbf{H}\mathbf{x}\|^{2}$$

通俗的说，就是假设一个值，使得差值平方最小，则该值就是我们的估计值

而差值平方最小，正是LS问题！而最小二乘估计的解析解为

$$\hat{\mathbf{x}}_{\mathrm{ML}}=(\mathbf{H}^{T}\mathbf{H})^{-1}\mathbf{H}^{T}\mathbf{y}$$

其中：

- $\mathbf{H}^T\mathbf{H}\text{:是一个 }n\times n\text{ 的对称矩阵,称为“Gram矩阵”,在行满秩的情况下是可逆的}$
- $(\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T:\text{被称为伪逆矩阵,记作 H}^\dagger$



例如，对于定位，有

$$\begin{aligned}&\max_{x_{s},y_{s}}f(x_{s},y_{s})&&=\max_{x_{s},y_{s}}-\frac{\Delta A^{2}+\Delta B^{2}+\Delta C^{2}+\Delta D^{2}}{2\sigma^{2}}\\&&&=\min_{x_{s},y_{s}}\Delta A^{2}+\Delta B^{2}+\Delta C^{2}+\Delta D^{2}\\&&&=\min_{x_{s},y_{s}}\left(\tilde{d}_{SA}-d_{SA}\right)^{2}+\left(\tilde{d}_{SB}-d_{SB}\right)^{2}+\left(\tilde{d}_{SC}-d_{SC}\right)^{2}+\left(\tilde{d}_{SD}-d_{SD}\right)^{2}\end{aligned}$$

---

#### 定位协议

##### AdHoc-LOS

- 原子多边定位法，i.e. ML

  - TOA/RSS
- 迭代多边定位法

  - 将已定位的节点感染为坐标

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-ed8d93fe58.png){: .zoom}

- 合作多边定位法（自行百度，学校不教有用的东西）

---

#### 基于非测距的定位

##### 凸位置估计

这一方法基于可通信背后的`R、θ`约束，得到节点间交叠区域，取几何中心（或MSE最小）

> 交叠数量越多，精度越高

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-996971f338.png){: .zoom}

---

##### 近似三角形内点协议

> 三点面积约束，同样通过多个三角形的重叠区域估计定位

**三角形内判断依据：**

- 一个点在三角形内部时，不存在一个方向，能使其到三点距离同时增大或同时减小
- 距离与RSS正相关
- 可通过邻节点RSS模拟节点向此方向移动

**具体步骤：**

- 信标交换（节点互换RSS）
- PIT（Point in Triangulation）检验，判断是否在三角形内
- APIT汇聚，取重叠区域
- 质心位置计算

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-6640f181ba.png){: .zoom}

---

!!! success "第三次小测"

    - **判断题**

    1. 在CODA中，为减轻本地级拥塞，发送节点必须降低降速（×）
    2. 传输层协议RMST实现了端到端的可靠传输，以缓存资源减轻重传代价（√）
    3. 时间同步协议 RBS 的同步精度高于NTP，原因在于其不受传播时延和接收时延的影响（×）
    4. ESRT中，当归一化可靠性远大于`1`时，须减少传感器上报频率（√）
    5. S-MAC中的自适应侦听是一种联合调度与路由协议，属于MAC层和网络层的跨层协议（√）
    6. XLP中，在未知PRR条件下，若需利用信道系数较高的长距离信道，传输启动中RTS数据包不能包含下一跳接收节点（√，Anycast）
    7. `TPSN`同步协议中，由汇聚节点广播的`time_sync`报文具有`NTP`同步协议中的`SYNC`报文的作用。报文中均含有发送时间（×，TPSN的`time_sync`仅起到通知作用，不包含发送时间）

    - **选择题**

    1. 以下哪一组时钟漂移和时钟偏差所代表的时钟与标准时钟差值最大的是：

       - A. 1 10
       - B. 0.8 50
       - C. 1.05 20
       - D. 1.1 -50

    - **正确答案：B**

    1. 以下关于NTP和TPSN描述错误的是：时间

       - A. NTP是为因特网设计的时钟同步协议，目标是将因特网中的主机同步到UTC

       - B. NTP中发起Reply（即接收 SYNC 消息）的节点，将获取两个同步节点间的时间差
       - C. WSN中使用NTP，无法实现因特网中的同步精度
       - D. TPSN中是一种将NTP同步思想应用于WSN的协议

    - **正确答案：B**

    1. NTP 同步过程中，节点1在`t=5`时刻发送`SYNC`消息，节点`2`接收该`SYNC`消息时刻为`t=3`；`5`秒后，节点`2`回复`Reply`消息，节点`1`在`t=10`时刻接收到该Reply。那么，节点1和2的时钟差值是：：

    - A. -1.5
    - B. -2
    - C. 0
    - D. -3.5
    - **正确答案：B**
