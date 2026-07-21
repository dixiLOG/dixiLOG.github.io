# WSN06 传输层

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 传输层

先通过[计网笔记](https://dixilog.github.io/NBU-NOTEBOOK/computerNetwork/CN01/#_4)简单回顾一下传输层协议作用

- 拥塞控制
- 可靠传输
- 多路复用（基于套接字Sockets/端口）

上述作用也是WSN中传输层的使命

但是传统的端到端传输（TCP）中的握手与挥手需要较大的内存与能量支撑，且在WSN中，对于突发事件检测，只需收集一定的数据即可（事件到汇聚节点的可靠性），故需做出修正

---

### 典型传输层协议

- 可靠多段传输（Reliable Multi-Segment Transport,RMST）

  - 实现端到端的可靠性
  - 实现多路复用
- 拥塞检测与避免（Congestion Detection and Avoidance,CODA）

  - 拥塞控制
- 事件到汇聚节点的可靠传输(Event-to-Sink Reliable Transport,ESRT）

  - 事件到汇聚节点的可靠性
  - 拥塞控制

---

### RMST

基于[定向扩散](https://o2ywbvn10e.feishu.cn/docx/SsZodPCB6oGkOxxwesZcRH96nHd#share-YlzLd0OqEoCi47x3AzncplSXnKd)路由协议的类似端到端传输的传输层协议，分为无缓存模式(non-caching mode)和缓存模式(caching mode)

#### 无缓存模式

- 端到端传输，timeout后sink节点会向传感器发送NACK包，使之重传
- 不需要中间节点进行配合

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-26a7ed9ab0.png){: .zoom}

#### 有缓存模式

- 指定一些中间节点为缓存节点，timeout后无需回溯至传感器，而是直接在缓存节点进行差错恢复
- 具体而言，缓存节点会向上一缓存节点发送NACK要求其重传

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-5d34214db7.png){: .zoom}

#### 评价

- 保证了端到端传输可靠
- 缓存模式下减小了重传代价



- 需要更多的缓存资源
- 过犹不及，WSN网络并不需要数据流的100%可靠传输
- 未考虑拥塞控制

---

### CODA

望文生义一下，就是用于拥塞避免的

拥塞又分为本地拥塞与网络拥塞。前者由个别路由器的拥塞引起，而后者往往牵扯到全网的宕机（一般是传输速率设置过大而导致链路的死锁）

> 假设传输过程绝对不丢包

#### **本地拥塞**

病因多为路由、网络拓扑特征，可基于缓存充盈度和信道负载情况判断

**开环逐跳背压机制**

- 拥塞节点发送抑制消息给上游节点
- 上游节点减速绕路

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-3db440e8ad.png){: .zoom}

#### **网络拥塞**

节点发送数据包速率过快

需收集所有传感器节点的本地拥塞检测信息，分析估计并调整发送数据包速率的临界值

**闭环多信源管理**

> 本地节点不需要做拥塞检测，由源节点控速即可

当速率超过既定门限值后，源节点与汇聚节点不断交互DATA与ACK

若闭环断开，则降速

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-1c3e7ef561.png){: .zoom}

#### 评价

- 提供全局（端到端）的拥塞控制



- 没考虑可靠性问题

---

### ESRT

<callout emoji="😀">
**重点在此**
</callout>

`RMST`与`CODA`都只完成了一部分任务，那么就有聪明的小朋友问了，是不是存在一种协议，在兼顾拥塞控制与可靠传输的同时，还更适合WSN体质（针对突发事件检测）呢？

有的兄弟，就是下面的`ESRT`

`ESRT`**不要求每个节点的数据都可靠传输，而只需收集到一定量的数据来分析事情发生与否**

具体而言，`ESRT`的关键指标归一化可靠性由两变量的比值量化，即

$$\eta=\frac{\text{给定时间接收到的数据包数量}}{\text{检测某一事件所需要的数据包数量}}$$

我们希望$\eta$在`1`附近即可，即

$$\eta\in[1-\epsilon,1+\epsilon]$$

上报频率$f$影响可靠性，并有如下图所示的定性关系

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-c671911690.png){: .zoom}

受上报频率的影响（由小变大），网络经历五个状态

> 上报次数高于一定门限则造成网络拥塞
> 
> 可靠性随上报频率先增加后减小

- 报告次数太少，收包次数远小于预期，虽不造成拥塞但可靠性低

$$(\mathrm{NC,LR})\quad f \leq f_{\mathrm{max}}\mathrm{~and~}\eta<1-\epsilon \quad \text{No Congestion,Low Reliability}$$

- 增加报告次数直到$\eta$在`1`附近，此时网络处于理想状态

$$(\mathrm{OOR})\quad f \leq f_{\mathrm{max}}\mathrm{~and~}1-\epsilon <\eta<1+\epsilon \quad \text{Optical Operating Region}$$

- 可以没必要的状态🤣

$$(\mathrm{NC,HR})\quad f \leq f_{\mathrm{max}}\mathrm{~and~}\eta>1+\epsilon \quad \text{No Congestion,High Reliability}$$

- 上报频率超过门限，出现拥塞，但仍不影响可靠性

$$(\mathrm{C,HR})\quad f > f_{\mathrm{max}}\mathrm{~and~}\eta>1 \quad \text{Congestion,High Reliability}$$

- 宕掉惹

$$(\mathrm{C,LR})\quad f > f_{\mathrm{max}}\mathrm{~and~}\eta<1 \quad \text{Congestion,Low Reliability}$$

> 注意，令人满意的网络应同时观察上报频率（求导正负）和归一化可靠性俩个指标
> 
> 换句话说，仅仅当$\eta=1$并不能说明什么

---

#### 控制过程

Sink节点通过评估网络所处状态（拥塞信息与$\eta$），通过控制源节点的上报频率$f$，反馈调整网络状态，直至`OOR`

1. 汇聚节点识别网络状态

   1. 拥塞检测

      1. 信道负载情况
      2. 缓存充盈度
   2. 归一化可靠度$\eta$
2. 增加/减小$f$

---

#### 评价

- 提出了事件到汇聚节点的可靠性这一革命性概念
- 基于自适应（Ada）的思想，通过既定规则迭代收敛
- 实现高效的拥塞控制



- 传感器节点没有分层，相对效率较低

---

!!! success "第七次课后练习题"

    1. 在MCPF中，每个节点只需要一次广播ADV消息，即可建立成本域（×，获得最小cost一般不仅仅只要一次）
    2. 对于MCPF,在数据包转发过程中,若链路成本出现变化，将有可能使得数据包无法转发（√）
    3. 在`RMST`协议中，通过在传感器节点设置缓存，可降低实现可靠传输的开销（√）
    4. 在`CODA`协议中，为减轻局部拥塞，需减小信源发送速率（×，可基于**开环逐跳背压机制**绕过拥塞区域）
    5. 在`ESRT`协议中，若归一化可靠性值低于`1`，需增加上报频率（×，存在两种可能）
    6. 在`ESRT`协议中，一个归一化可靠性值一般对应两种网络状态（√）

---

