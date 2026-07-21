# WSN05 网络层

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 网络层

### 基本概述

- 网络层提供路由功能，为两节点之间构建跳转链路
- 信令上的传输带来额外的功耗与信道开销
- 基于可扩展性（scalability）与健壮性（robustness）设计拓扑结构
- 根据通信需求，分为监控应用与时间/响应应用

### **路由协议分类**

- 以数据为中心的平面结构路由协议（Data-centric）
- 分层的路由协议（Hierarchical）
- 基于地理位置的路由协议（Geographical）
- 基于Qos的路由协议

---

### Data-Centric

**目的**

为汇聚节点的请求提供到达所有节点的路径，为那些符合要求的数据提供到达汇聚节点的路径

> 路由协议可同时满足以上俩点，也可分开设计

**过程**

- 汇聚节点兴趣扩散至所有传感器节点
- 符合要求的数据发送至汇聚节点（数据收集）

**主要的平面结构路由协议**

- Flooding
- Gossiping
- SPIN（Sensor Protocol Information negotiation）
- Directed Diffusion

---

#### Flooding

> 洪泛路由协议，也有叫泛洪的，以英文为准

设定TTL，以MAC广播途径（区别于单播）向所有相邻节点转发数据

**优点**

反应式（reactive routing）路由协议（无报文传输则不触发路由协议），相较于主动式（proactive routing）路由协议，不需要维护拓扑结构信息，不需要路由发现，简单粗暴

**缺点**

- 内爆（implosion）

  - 一个节点的数据包发生多copy
  - 节点可能会接收到相同的copy数据包，导致重复接收和处理而过载
  - 当然，多节点同时向发送节点请求也会引起`implosion`

  ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-055643c49d.png){: .zoom}
- 数据重叠（overlap）

  - 由多个相邻传感器数据引发
  - 收到多个节点的相似信息，造成资源冗余

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-844c332238.png){: .zoom}

- 有效性低

---

!!! success "第五次课后练习题"

    1. `IEEE802.15.4`只定义了物理层和MAC层标准，也定义了三类节点，其中精简功能设备在必要时可充当协调节点（×，只有全功能设备）
    2. `TRAMA`协议与Z-MAC协议均采用了在两跳范围内实现信道预留的方法，但是，Z-MAC的信道预留带来额外开销（×）
    3. Z-MAC采用了混合MAC协议设计，在不同时间上分别执行（×，802.15.4是时分的，Z-MAC以高/低负载划分）
    4. 数据为中心的路由包含汇聚节点兴趣扩散和数据收集两个阶段（√）
    5. 洪泛路由中的内爆问题与数据重叠问题的最大不同点在于：前者由一个传感器的数据引发，而后者由多个相邻传感器数据引发。（√，注意主语，是传感器而非节点）
    6. 洪泛路由中的内爆问题与数据重叠问题的相同点在于：同一个节点可能接收到类似的或相同的多份数据（√）

---

#### Gossiping

> 翻译过来为八卦式传播，很形象了

为解决内爆，规定网络内不允许数据包复制

**数据传递方式**

- 一次随机选一个邻节点MAC单播

  - 需要维护邻节点信息

**时延问题**

随机节点传输带来的额外时间浪费

> 就像传八卦，一次偷偷传一个人，但谁也不知道最后传到谁那里了

---

#### SPIN

> 传感器协议信息协商

**泛洪改进**

- 部分解决`implosion`

  - SPIN是局部协商（异步）的，仍可能在并发下产生重复请求
- 完全规避overlap

**转发规则**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-8fcdf8805f.png){: .zoom}

- 发送节点广播ADV（Advertisement）信号
- 没有接收过的节点返回REQ消息
- DATA传递

> "这个八卦还有谁不知道我单独讲"

**改进**

有`SPIN-EC`、`SPIN-BC`、`SPIN-RL`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-c3be92f7cc.png){: .zoom}

---

#### Directed Diffusion

> 定向扩散
> 
> 利用一次泛洪找到最优路径

**路径建立过程**

- 基于泛洪的兴趣消息扩散
- 梯度建立（路径建立）

  - 这里的梯度就是路由表信息，或者是向量

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-f11a7c1a24.png){: .zoom}

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-c528ffdc01.png){: .zoom}

- 路径增强（路径寻优）
- 数据传输
- 特别的，若原链路断连，将基于消极增强机制重新选路

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-f4bcae8429.png){: .zoom}

---

#### Data-Centric优缺点

- 自适应
- 无需为节点进行全局寻址（addressing）
- 无需维护网络拓扑

**可扩展性差**

- 节点能耗不均匀，随靠近汇聚节点而增大

> 本质上是节点平等但地理位置不平等造成的，所以需要抽象出簇头

---

### Hierarchical

利用簇设计分层路由结构，降低节点能耗，增强可扩展性

典型协议

- 低功耗自适应分簇协议（Low-Energy Adaptive Clustering Hierarchy,LEACH）
- 门限感知的节能传感器网络协议（Threshold-sensitive Energy Efficient sensor Network protocol,TEEN）

---

#### LEACH

为降低汇聚节点周边节点能耗

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-cad2a6ada6.png){: .zoom}

**特点**

- **簇头与汇聚节点单跳通信**
- 动态簇头选择算法$T(n)=\begin{cases}\frac{P}{1-P[r\:\mathrm{mod}(1/P)]}&\mathrm{if}\: n\in G\\0&\mathrm{otherwise}&\end{cases}$

  - 定义单位时间轮（round）
  - 每一节点n的门限值T，低于门限则被选为簇头

  > P是小于1的常数，r为轮数；这个函数（最大门限值）单调增

**网络建立过程（一轮内）**

- 簇头选择
- 簇头CSMA广播
- 接收节点成簇，以CSMA告知簇头
- 簇头以TDMA分配slot
- 稳态阶段，DATA基于预留的MAC协议传输

---

#### TEEN

为缓解簇头与汇聚节点直接通信带来的高耗能，选择再加亿层代理

> 和传销有啥区别

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-e2f58c4107.png){: .zoom}

- 将大部分数据限制在簇内传输，降低能耗，一定程度解决扩展性问题
- 簇头可进行数据融合
- 需要考虑健壮性（簇头宕掉）
- 成簇、簇头与汇聚节点的通信能耗不可忽视

---

### Geographical

借助局部地理位置信息寻路

#### **roadMap**

1. 确定可行域与可行节点

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-2c81a6452b.png){: .zoom}

1. 确定下一跳节点（基于距离的贪心算法）

   1. 离本节点最近
   2. 离本节点最远（ROC内）
   3. 离目标最近
   4. 离起讫点投影距离最近

---

!!! success "第六次课后练习题"

    1. 在分层路由协议LEACH中，可通过增大门限值增大节点成为簇头的概率（√）
    2. 为了降低簇头的能耗，可使用动态簇头选择，也可通过建立多层的网络结构（√）
    3. 谣传协议可解决数据重叠问题，但需要每个节点知其邻节点信息（×，解决内爆问题）
    4. SPIN协议中通过发送ADV消息，可避免一个节点接收多份相同的数据（重叠问题），但无法避免一份数据的多份复制在网络中传输（内爆问题）（√）
    5. 定向扩散协议中，利用汇聚节点兴趣扩散过程，可建立传感器到汇聚节点的多条路径（√）

---

单纯的基于距离转发有时会陷入local minima，并且没有考虑信道质量

下面介绍一些改进方法与其局限性

#### 改进方法

**基于距离的黑名单转发**

即摒弃一些明显过远的节点

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-8aac0d4d8e.png){: .zoom}

没有考虑信道质量情况

---

**基于绝对接收黑名单转发**

引入PRR(Packet Reception Rate)，选择PRR高于门限的节点转发

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-ee9cf5c491.png){: .zoom}

结果受门限设置影响大

---

**基于最佳PRR的转发**

选择最佳PRR转发

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-7c21afa3d1.png){: .zoom}

每一跳步长过于保守

---

**基于最大PRR\*距离的转发**

将距离归一（求比例）为$\frac{d(A,S)-d(B,S)}{d(A,S)}$，与PRR相乘，  
并取最大值节点

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-d9462c6b13.png){: .zoom}

---

上述的方法仍显naive，下面介绍MECN协议

#### MECN协议

Minimum Energy Communication Network,MECN协议  
旨在利用传感器局部地理信息实现最小能耗通信（发射功率）

- 是一种DV路由算法（其他的比如rip）
- 目的上类似于最短路寻找，比如Dijkstra
- 操作上类似于去边剪枝，把网变成树

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-9d2f887af8.png){: .zoom}

**实现步骤**

- 确定物理邻节点

  - 每个传感器节点周期性广播自身地理位置信息
- 计算每个邻节点的中继区域（与区域内的节点直接通信是不划算的）

  - 计算平面上任何一点(x,y)与A直接通信的功率$P_t(A\to(x,y))=c\cdot T\cdot d_{A\to(x,y)}^\eta$T为门限功率
  - 计算通过邻节点中继通信的总功率$P_t(A\to C\to(x,y))=c\cdot T\cdot d_{A\to c}^\eta+c\cdot T\cdot d_{c\to(x,y)}^\eta$
  - 构建高能效子图

  ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-cc15118cea.png){: .zoom}

---

### QoS路由

面向服务质量的路由协议，旨在通过资源分配等手段对数据流进行管理，以期同时保证吞吐量、抖动、丢包率的高满意度

不仅考虑功耗，还反映链路质量

> **吞吐量 Throughput**
> 
> 单位时间内成功通信的数据量（bps）
> 
> **抖动 Jitter**
> 
> 时延的变化

#### MCPF

> 最小代价路径转发，Minimum Cost Path Forwarding,MCPF

**设计理念**

- 目标函数为成本函数（cost）
- cost是时延与功耗的函数
- 引入节点成本域的概念，即节点到`sink`节点的最小总成本
- 转发规则基于成本域

**成本域构建过程**

- 从汇聚节点开始向外ADV广播`cost`
- 接收节点计算收到的cost与当前传输cost之和
- 与此前记录值（若有）比较，取minima
- 更新数据，重复第一步，作为发送节点广播ADV

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-1a147a0878.png){: .zoom}

---

!!! success "第二次小测"

    - 判断题

    1. 对于CSMA/CA中的虚拟侦听，可起到休眠的作用，休眠时长由`NAV`值确定，其中`CTS`中的`NAV`值比`RTS`中的`NAV`值短（√）
    2. 簇结构对于WSN来说具有重要的作用，可用于MAC协议设计，也可用于路由协议设计，在LEACH协议中，一个周期内随着轮数的递增，所有节点的门限值也随之增加（×，并不是所有，已经成为簇头的节点不再增加）
    3. 提高WSN中（使用CSMA）成簇的概率，可加大竞争窗口中较小随机数发生的概率（×，Sift中应该让小随机数小概率发生）
    4. B-MAC避免了S-MAC中用于休眠调度同步所带来的开销，但固定长度的前导码采样带来了额外的能耗，可通过改进前导码发送模式缓解能耗问题（√）
    5. 泛洪协议中的数据重叠问题由不同节点感知相似数据引起，可通过SPIN协议中的协商机制（ADV消息和REQ消息的交换）得以解决（√）
    6. Z-MAC和IEEE802.15.4均采用混合MAC设计方法，前者使用时分的方式对竞争MAC和预留MAC进行混合（×，基于高/低负载区分）

    - 选择题

    1. 以下S-MAC中的哪一技术可实现降低功耗？

       - A. 自适应侦听
       - B. 自适应侦听与串音避免
       - C. 串音避免与消息传递
       - D. 空比与自适应侦听

    - **正确答案：C（自适应侦听主要考虑时延）**

    1. 以下关于数据为中心的平面路由说法正确的是

       - A. 数据为中心路由中，汇聚节点需要指明某个传感器进行数据收集
       - B. 该路由协议设计中，可采用基于簇的网络结构
       - C. LEACH路由协议属于该类协议
       - D. 该类路由协议中，靠近汇聚节点的传感器节点能耗过大，易成为网络的性能瓶颈

    - **正确答案：D**

    1. 以下关于路由协议说法错误的是

       - A. QoS路由不但可实现高能效的数据转发，也可满足其他性能指标要求，比如时延
       - B. 平面路由协议的一大共性是可扩展性问题
       - C. 地理路由中，基于可行域的数据转发是一种最优的数据转发
       - D. MCPF协议中，节点不需要指定下一跳接收节点实现最小代价路径转发

    - **正确答案：C**

    1. 以下地理路由协议不考虑信道质量的是

       - A. 基于距离的黑名单
       - B. 基于绝对接收的黑名单
       - C. 基于最佳PRR转发
       - D. 基于最佳PRR× 距离转发

    - **正确答案：A**

---

