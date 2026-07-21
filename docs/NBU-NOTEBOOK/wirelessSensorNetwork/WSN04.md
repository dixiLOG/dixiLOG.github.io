# WSN04 MAC 层

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## MAC层

> 介质访问控制层（Medium Access Control,MAC）

减少或避免节点间的传输冲突

根据底层思想的差异，分为三类：

- 基于竞争的MAC：Contention-based
- 基于预留的MAC：Reservation-based
- Hybrid

---

### 无线信道特点

- 是广播信道
- 多节点同频同传传输会产生冲突
- 需要通过协议协调

---

### 基于竞争的MAC协议

可参考[计网笔记之数据链路层](https://dixilog.github.io/NBU-NOTEBOOK/computerNetwork/CN01/#_8)

- 无协调者
- 随机胜出
- 冲突保留

---

#### CSMA

> 载波监听多路访问（carrier sense multiple access，CSMA）

##### 基本机制与额外机制

- 先侦听后发送机制（listen-before-transmit）
- 随机退避机制（random backoff）
- 二进制指数退避机制（binary exponential backoff）
- （额外|选用）ACK确认机制

---

##### 先侦听后发送

规定先`listen`一段时间（Inter-Frame Spacing，IFS）

这段时间`IFS`应确保大于整个系统最远到达时间

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-77dc87b022.png){: .zoom}

- 可实现当前传输数据不被打断
- 但在同时监听的小概率事件下，出现冲突可能

---

##### 随机退避机制

错开各个等待传输的节点的启动时间

对于`n`个需要传输的节点，在当前传输结束后，把`roll`出的`n`个倒计时随机值赋给它们  
其中的最大值称为竞争窗口大小

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-301899331d.png){: .zoom}

- 可规避等待数据同传冲突
- 但随机数相同时仍会发生冲突

---

##### 二进制指数退避机制

对于产生冲突的所有节点，将竞争大小窗口翻倍，再次重复随机退避机制

- 这需要已经发送数据的节点**仍保持`listen`**
- 可降低随机数相同的概率
- **隐终端问题（无限隔离下space无限远，无解）**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-ca763e381b.png){: .zoom}

---

##### ACK确认机制

引入数据链路层的ACK，使发送端知晓数据成功接收

- 未接收到ACK视为丢帧
- ACK被规定为高优先级(设置一个SIFS<IFS，保证侦听等待的过程中会先收到ACK的信息，以确保ACK的优先级大于数据包的优先级)

---

#### CSMA/CA

- 向下保留`CSMA`的三大机制和`ACK`确认
- 引入`RTS`和`CTS`数据包

##### 四次握手

1. 发送节点获取Auth后广播RTS（Request to Send）
2. 接收节点广播CTS（Clear to Send）
3. 发送节点发送DATA
4. 成功接收，返回ACK

> 相当于A在给B发送数据前先问一手你空不空，B回答空并告诉距离A比较远的节点：不要给我发数据我要跟A通信了

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-b2e895e071.png){: .zoom}

- RTS：抑制发送节点附近的待发送节点

  - 2+2+6+6+4=20字节
  - Frame Control + **Duration** + R Address + T Address + FCS 
- CTS：抑制接收节点附近的待发送节点，是规避隐终端的直接手段

  - 2+2+6+4=14字节
  - Frame Control + **Duration** + R Address + FCS

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-36c8a2355a.png){: .zoom}

---

#### 仍存在的问题

##### 节点如何知晓传输已经结束？

保持侦听( listen | overhear )

> 侦听：对信道信号抽样，观察能量波动

---

##### 持续的侦听利空能耗，能否补救？

**虚拟侦听**(Virtual Sensing)，即传输方主动广播，在NAV阶段关闭侦听

- 在RTS中的**Duration字段**加入剩余时间广播
- 在CTS中的**Duration字段**加入剩余时间广播

**NAV（网络分配向量，Network Allocation Vector）**

用于记录附近节点的剩余时间的表

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-42e14db791.png){: .zoom}

---

##### ~~RTS带(CSMA和CSMA/CA均有)来~~不必要的暴露终端抑制，怎么破？

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-10c99503b6.png){: .zoom}

- 自适应功率控制

若需要使用RTS/CTS机制，则常采用全功率控制—低功率数据传输的策略

在RTS/CTS阶段，节点以较高的（全功率）发送控制信息，以确保隐藏终端能收到控制帧

而在数据传输阶段，节点则降低传输功率，从而缩小干扰范围，使那些虽能听到RTS但不处于数据传输干扰范围的节点（即暴露终端）可以正常发射数据

- 分离信令信道与数据信道
- 增加忙音信道，用于节点的信道判断辅助
- 多址接入(FDMA)

---

### 面向WSN的CSMA修正

考虑能耗限制，需要将休眠融入其中

涉及俩方面：

- 休眠周期设置
- 休眠同同步设置（全局、局部、异步）

---

#### S-MAC

##### 周期性侦听与休眠

亦称为占空比技术

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-759f7453e2.png){: .zoom}

- 取固定时间为时间帧，采用固定周期性休眠
- 基于虚拟簇（Virtual Cluster）的局部同步

> 局部一起睡，一起醒

---

##### 虚拟簇形成

将侦听阶段划分为 SYNC 与 DATA 阶段，分别用于同步和数据传输

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-20b95b433c.png){: .zoom}

**SYNC 阶段**

- 同步消息（SYNC message）结构可分为节点ID和下一次休眠开始时间，并通过CSMA竞争广播同步消息

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-e63a174562.png){: .zoom}

- 收到广播的节点设置相同的调度表，并继续传播

> 所达最远跳数的范围称为虚拟簇

**DATA 阶段**

即`RTS→LTC→DATA→ACK`阶段

- 虚拟簇内使用`CSMA/CA`进行竞争（这里面包含了虚拟侦听）
- 虚拟簇间通过边界节点传输

**虚拟簇中节点分类**

- 同步节点（synchronizer）
- 跟随节点（follower）
- 边界节点（border），用于簇间信息传递，休眠时间取交集

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-c68302213a.png){: .zoom}



---

#### 进一步改进

##### 侦听（串音）避免

> 旨在减少DATA阶段的能量浪费

其他节点传输时，提前进入休眠以减少功耗浪费

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-a8701949e2.png){: .zoom}

> 听到旁边节点发`CTS`秒睡



---

##### 自适应侦听

> 解决缺乏多跳感知造成的时延问题

如果下一跳节点是你还秒睡，不就要多等一个周期了？

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-3dfc96a9f0.png){: .zoom}

于是乎，RTS/CTS握手时会在下一跳节点睡前让它别睡太死，ACK就给我醒过来

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-15992d8ed5.png){: .zoom}

---

!!! caution "题外话 | 自适应侦听与虚拟侦听的区别"

    > 诶，在CTS休眠，在ACK醒来，这不是和虚拟侦听一模一样吗，有什么区别？

    谬矣！，从宏观与微观俩个角度都能发现差异

    **从宏观上**

    - 自适应侦听面向S-MAC的虚拟簇，动态调整所有节点状态，控制的是占空比
    - 虚拟侦听是CSMA/CA中的低功耗策略，在S-MAC的DATA阶段竞争中发挥作用，它甚至没有SYNC和SLEEP的概念
    - 自适应侦听可以让一坨节点分别找到各自的节奏，但虚拟侦听仅仅是让单个节点小睡一会儿，没有大局观

    > **所以，这俩都不在同一个Vivo上，或者说虚拟侦听包含于自适应侦听**

    **从微观上**

    - 虚拟侦听没有同步操作
    - RTS结束后，虚拟侦听也可以睡，但自适应侦听不行

    **总结一下**

    思想同源，层次不同

    虚拟侦听是面向单节点的瞬时行为优化，S-MAC的侦听避免|自适应侦听是面向虚拟簇的全局调度优化

    因此，可以说虚拟侦听是一个RTS/CTS阶段的微观冲突避免手段，而自适应侦听是一个S-MAC层面的全局调度优化手段，二者并不冲突

---

##### 消息传递机制

> 解决突发性消息传递问题

短时间内有大量数据包需要传输，不可避免带来`RTS/CTS`所引发的**时延&能耗问题**

在ACK后继续DATA，直到传输结束，断开连接

> 类似TCP的短连接，建立连接后数据信道保持一段时间

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-0474b25875.png){: .zoom}

> ACK数据包中包含本次数据传输剩余的时间，防止隐终端问题的产生

---

!!! success "第一次小测"

    - 判断题

    1. 距离发射机d处的路径损耗定义为接收信号功率与发射信号功率的比值，该比值在多径传播条件下，是一个随机值（×，定义错误）
    2. CSMA中，当发生冲突时，所有节点均需执行二进制指数退避（×，只有冲突的节点）
    3. CSMA/CA 的四次握手中的RTS起到防止隐终端回题。（×，CTS）
    4. 实现S-MAC虚拟簇之间的数据传递，需要边界节点的中继和转发（√）
    5. S-MAC中的消息传递机制可同时实现能耗的降低和传输时延的缩小（√）

    - 选择题

    1. 以下关于无线传感器网络 WSN 描述正确的是：

       - A. WSN 是物联网的基础，位于网络层。
       - B. 互联网是 WSN 的重要组成部分。
       - C. WSN 采用多跳传输，有利于能耗的减少。
       - D. 以上说法均不正确。

    - **正确答案：C**

    1. 以下关于 WSN 能耗描述错误的是：

       - A. 处于空闲状态的收发机能耗是不可忽略的。
       - B. 提高有效比特数，可降低感应单元的功耗。
       - C. 对于处理单元而言，应该采用联合控制 CPU 频率和电源电压进行能耗的优化。
       - D. 处于发送状态的收发机能耗与发送速率有关。

    - **正确答案：B**

    > 提高有效比特数，无法判断感应单元功耗的增减。因为有效比特数高，单元复杂，耗能可能更多，而有效比特数少，单元简单但是传输速率较低，耗能也有可能更多。

    1. 以下哪个因素不属于造成多径传输的因素：

       - A. 衰减
       - B. 反射
       - C. 折射
       - D. 散射

    - **正确答案：A**

    > 无论有没有多径传输，衰减都是存在的

    1. 统计信道中，可以利用哪一区域加速数据的传递：

       - A. 连接区域
       - B. 隔离区域
       - C. 过渡区域
       - D. 两跳区域节点

    - **正确答案：C**

    1. 关于竞争 MAC 的描述错误的是：

       - A. 对信道的竞争具有不确定性。
       - B. 一个节点的竞争窗口越大，越有利于获得信道的使用权。
       - C. CSMA 中随机退避机制可避免多个等待传输的节点产生冲突。
       - D. 引入占空比技术，可降低竞争 MAC 的能耗。

    - **正确答案：B**

---

#### B-MAC

Berkeley MAC，实现异步休眠调度，消解节点间采用同步休眠带来的开销问题，即

- 周期性发送
- 同步时钟精度差时，需要重复发送SYNC消息

> 需要解决与休眠节点通信的问题

##### 时间帧设计

- **与帧长相同（保证一个周期内一定可唤醒，保证通信时延）**
- 占空比相同
- 休眠时间自由

##### 休眠通信

- 发送方在DATA前使用前导码`preamble`，其长度等于帧长，包含N端接收节点字段反复发送，直到某一段中接收节点苏醒即完成同步

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-0716e2d442.png){: .zoom}

- 接收方在结束`SLEEP`后通过低功耗侦听（Low Power Listening）对信道采样，判断是否需要苏醒侦听
- 使用CSMA传输

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-ee35673744.png){: .zoom}

---

##### 特点

- 节省SYNC过程带来的`cost`，在高负载和高流量的情况下具有良好的性能
- `preamble`会带来额外开销

---

##### STEM

> 稀疏拓扑能源管理，Sparse Topology Energy Management，优化`preamble`

用于缩短`preamble`以降低能耗

- 发送方改为停等
- 接收方增添反馈，反馈被接受后直接进入`DATA`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-57270b9470.png){: .zoom}



---

#### 空闲信道评估方法

> Clear Channel Assessment,CCA
> 
> 广泛运用于WIFI

##### 错误感知的影响

> 类似于发1判0，虚警/漏警

**误以为信道空闲**

- 冲突
- `preamble`重复传输，增加传输时延

**误以为信道忙碌**

- 节点因误判信道有信号而进入侦听阶段，导致能量浪费

---

##### 传统感知方法

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-d2be44558d.png){: .zoom}

---

##### B-MAC感知方法

1. 噪声本底估计值

在数据传输结束（**此时存在IFS帧间隔，只有信道噪声**）后多次采样，并采用滑动平均计算

1. 信道判断

若存在能量远小于噪声本底值的采样值，则认为空闲

---

### 基于预留的MAC协议

> 计划经济，slot 分配

改时间帧为超帧：在预留阶段进行时隙分配；在DATA阶段进行节点间无冲突数据传输

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-62f1b84290.png){: .zoom}

#### 分配基本思路

- 基于簇的预留（选举出协调节点进行分配）
- 基于协议机制的协商预留

---

#### 基于簇结构的预留结构

##### 概念|簇

由相邻节点组成的一个集合，包含簇头与簇节点

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-5fed81bad8.png){: .zoom}

> WSN可视为多个簇组成的网络，簇之间亦可相互通信

##### 簇的形成与Sift

- WSN节点通过CSMA广播竞争出`CH`（能量优先，谁嗓门大，等待时间短就听谁的）
- 其余收到广播的节点称为簇节点，并将信息继续广播（类似虚拟簇，不过这是真的）
- 一段时间后需要重新竞争，轮流当排头（以免簇头能量消耗过大）

**问题：高密度节点下的大量簇头冲突**

于是引入另一种簇头形成方式——**Sift**

- 对于竞争窗口：大随机数大概率，小随机数小概率

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-43da4f63b0.png){: .zoom}

---

#### BMA-MAC

> **Bit-Map-Assisted MAC**

 分为簇组织阶段与簇稳定阶段，稳定阶段分为预留与DATA俩阶段

- 组织阶段（Set-up），簇头要求能量超过门限
- 预留阶段，每一节点告知簇头自己哪一slot需要传数据（0011000...，形成`bit-map`）
- DATA阶段按需传输，传输结束后进入Idle（空间挂起状态）

> 一段时间后，簇将重新组织

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-77961ebe85.png){: .zoom}

---

#### TRAMA协议

对于隐终端与暴露终端，节点传输时需要且仅需要考虑两跳邻节点

因而一个可以与其两跳邻节点协商的协议应运而生  
即Traffic Adaptive Media Access Protocol

> **TRAMA是一种两跳邻节点发现机制（NP: Neighbor Protocol）**

TRAMA 的核心是通过周期性广播来发现一跳和两跳邻节点，在两跳范围内为某个时隙分配使用权

**周期性广播**

- 每个节点会定期广播自己的一跳邻节点信息，这些信息帮助其他节点了解谁是它们的直接邻居

**广播时隙**

- 在一些特定的时隙（称为`signaling`时隙）中，节点会随机选择一个时隙进行广播
- 这种随机选择可以避免冲突，确保广播信息能够成功传输

**广播结果**

- 每个节点通过接收其他节点的广播，可以获取 **一跳邻节点** 和 **两跳邻节点** 的信息

**确定时隙归属**

- 使用 **自适应选举机制（adaptive election algorith，AEA）** 来决定哪个节点可以使用某个时隙
- 时隙的归属通过优先级计算来确定

  - 公式：

    - $ p(u, t) = h(u \oplus t)$
    - `u`是节点的 ID
    - `t`是某个时隙的编号
    - `h`是一个预先设计好的函数，用于计算节点对某个时隙的优先级
- 优先级最高的节点会获得该时隙的使用权，从而完成时隙的分配

**调度交换机制——增加slot调度灵活性**

- 分配的slot无数据传输需求，则通知其他节点

---

!!! success "第四次课后练习题"

    1. 在占空比技术中，假设帧长为1秒，休眠时长为0.3秒，那么占空比是多少?（70%）
    2. 在S-MAC中，节点是否共享一个休眠调度时间表?（是的）
    3. 在S-MAC中，使用自适应侦听后，数据报文在一个时间帧内可传输几跳?（两跳）
    4. 在B-MAC中，节点间可有不同的休眠调度表，如何在两个节点间进行数据传输?（发送前导码实现异步休眠调度）
    5. 在B-MAC中，当一个节点在传输前导码过程，若数据接收节点在期间唤醒。那么前导码的发送是可以即刻终止并开始数据传输的。（×，添加`stem`后才能实现）
    6. 在B-MAC中，信道噪声采样发生在当前传输结束后的帧间隔内,可有效反映噪声真实情况。（√）
    7. 采用Sift协议中的“小随机数小概率”，可提高建簇的成功率（√）

---

### 基于竞争与预留的MAC比较

> 小小的总结

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-ae6c664c71.png){: .zoom}

---

### 混合介质访问

#### Z-MAC

- 两跳范围内进行时隙预留（思路与TRAMA不同）
- 已预留的slot在idle状态下可被竞争使用
- 高负载使用预留MAC | 低负载使用竞争MAC

##### 两跳范围内的时隙预留

分两跳邻节点发现机制（簇组织）和时隙预留分配两个阶段

- **两跳邻节点发现机制**

每个节点知悉其两跳范围内的所有节点

> 因为冲突在两跳内产生

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-1ce1484fd5.png){: .zoom}

- **时隙预留机制**

  - 预留节点向所有一跳节点广播 request
  - 所有一跳节点回复 grant
  - 向两跳邻节点广播 release（让两跳都知晓slot占用，避免冲突|类比竞争下的隐终端问题）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-c617a5e3f6.png){: .zoom}

- **高负载预留，低负载竞争**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-6784663c5f.png){: .zoom}

---

#### IEEE 802.15.4

- 一种标准化的、低速率的无线网络标准
- 对无线网络的物理层与MAC层的操作进行了定义
- MAC类型为时分混合MAC：不同时间段使用不同的MAC协议
- 将超帧分为`CAP`与`CFP`

  - CAP: contention access period

    - CSMA/CA
  - CFP: contention free period

    - 基于簇结构的TDMA（星状、网状、树状）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-9dfffd4eaf.png){: .zoom}

- 网络节点分三类

  - 网络协调器

    - 全功能设备
    - 簇头，分配时隙
  - 全功能设备

    - 实现路由与数据转发
  - 精简功能设备

    - 不能路由
    - 不能充当网络协调器

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-a48e2557e6.png){: .zoom}

---

