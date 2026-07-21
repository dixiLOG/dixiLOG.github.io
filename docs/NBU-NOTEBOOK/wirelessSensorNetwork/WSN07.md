# WSN07 跨层设计

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## WSN跨层设计  

面向特定场景，摒弃搭积木式的模块化设计，转而另起高楼

### 分层设计优缺点

#### 优点

- 模块解耦，独立开发，并通过标准化接口耦合
- 便于协议迭代开发演进

#### 缺点

- 引入额外的交流开销，性能受限
- 泛化与特例化是一对矛盾

#### 层间协作的必要性

- **物理层对网络网的约束**

  - 实际通信范围并不是标准的理想圆盘形状
  - 汇聚节点的位置使得网络如流水一般，往往是非对称的
- **MAC层对传输层和网络层的约束**

  - 基于竞争的MAC易导致局部拥塞
  - 基于CSMA广播的泛洪路由带来时延与距离不成比例的数据扩散

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-807c694326.png){: .zoom}

- **跨层设计有两两跨层协议（pairwise cross-layering）、一体化跨层协议（cross-layer protocol；XLP）**

---

### 两两跨层协议

> 事实上即使是搭积木，跨层协作也是常见的，因为现实并不理想

常见的跨层协议有

- MAC层与网络层跨层设计
- MAC层与应用层跨层设计
- 物理层与网络层跨层设计
- 物理层与传输层跨层设计（课程没提及）

> 下面分别作案例介绍，其中的大部分你已见过

#### MAC层与网络层跨层设计

##### [自适应侦听](https://o2ywbvn10e.feishu.cn/docx/SsZodPCB6oGkOxxwesZcRH96nHd#share-PGSydxbpUoTyeyxeRm6cCDqTnxh)

!!! abstract "回顾一下"

    于是乎，RTS/CTS握手时会在下一跳节点睡前让它别睡太死，ACK就给我醒过来

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-b1d1387edd.png){: .zoom}

    这里的下一跳节点就是网络层路由结果

---

##### **DMAC**

利用数据采集树（Data Gathering Tree）在一帧内传递数据，基于顺序依次唤醒休眠调度，相当于S-MAC plus

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-298824c807.png){: .zoom}

---

##### **Anycast路由**

- **不指定下一跳节点，从而达到最优解**
- 距离决定优先级，在可行域内，随距Sink节点距离越近，优先级越高
- 不是基于距离的贪婪转发，更像是竞争转发（能收到CTS说明信道质量较好）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-61ab18de03.png){: .zoom}

---

#### MAC与应用层跨层设计

##### **CC-MAC**

> Correlation-based Collaborative MAC

基于稀疏采样的思想，对于物理相邻的相关性强的节点群，只取其一  
进而大大降低网络拓扑复杂度，降本增效🤪

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-74ebe859c0.png){: .zoom}

!!! quote "估计过程"

    某一区域的信源信号服从高斯分布

    $$f_{S}(s)=\frac{1}{\sqrt{2\pi}\sigma_{s}}e^{-\frac{s^{2}}{2\sigma_{s}^{2}}}$$

    任意俩传感器之间的相关系数

    $$\rho_{i,j}=\frac{E(S_{i}S_{j})}{\sqrt{Var(S_{i})Var(S_{j})}}=e^{\left(-d_{i,j}/\theta_{1}\right)^{\theta_{2}}}$$

    $$\begin{aligned}&\theta_1和\theta_2,就是用来“调节”相关系数随距离d_{i,j}衰减快慢的两个超参数\\&可以根据具体的传感器布置、环境特性或者实测数据来拟合这两个值\end{aligned}$$

    每一个节点的信息携带加性噪声

    $$X_i=S_i+N_i$$

    汇聚节点收到其中一个放大后的数据

    $$Y_{i}=\sqrt{\frac{P_{E}}{\sigma_{S}^{2}+\sigma_{N}^{2}}}X_{i}$$

    采用MMSE（最小均方误差）对单信道进行估计

    $$Z_{i}=\frac{E(S_{i}Y_{i})}{E({Y_{i}}^{2})}Y_{i}$$

    对实际值取均值进行信源估计

    $$\hat{S}=(Z_{1}+Z_{2}+\ldots+Z_{M})/M$$

    求得对信源的平均均方估计误差

    $$D_{E}(M)=E\left[\left(S-\hat{S}\right)^{2}\right]$$

    展开

    $$\begin{aligned}D_{E}(M)&=\sigma_{S}^{2}-\frac{\sigma_{S}^{4}}{M\left(\sigma_{S}^{2}+\sigma_{N}^{2}\right)}\left(2\sum_{i=1}^{M}\rho_{(s,i)}-1\right)\\&+\frac{\sigma_{S}^{6}}{M^{2}\left(\sigma_{S}^{2}+\sigma_{N}^{2}\right)^{2}}\sum_{i=1}^{M}\sum_{j\neq i}^{M}\rho_{(i,j)}\end{aligned}$$

    不难注意到，若希望减小误差，可使得

    - 上报传感器数量`M`增多
    - 传感器与信源相关性$\rho_{(s,i)}$增大
    - 传感器间相关性$\rho_{(i,j)}$减小

      - 差异越大的节点意味着能获得更多的信息，趋同的节点则没有意义

    > 相当于传八卦，传的人越多证明不是空穴来风。传的是关于同一件事的正确性更高。每个人传的角度不一样能有更多信息。

    应用层计算估计结果并规划节点空间分配

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-85466d5df7.png){: .zoom}

---

#### 网络层与物理层

- 基于接收的黑名单转发
- 基于最佳PRR \* 距离的转发

---

### 一体化跨层协议设计

XLP（X-layer protocol）和杂种一样，集百家之长

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-8a9f04f841.png){: .zoom}

#### 内容与实现

具体包含

- 传输启动
- 启动判决
- 接收节点竞争
- 拥塞控制
- 基于角度的路由
- 等等

下面介绍部分

#### 传输启动

`MAC层`，广播RTS（包含当前和汇聚节点地理信息），很CSMA

- 先侦听后发送
- 随机退避机制
- 但是不指定下一跳节点

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-1b65926128.png){: .zoom}

---

#### 启动判决

接收节点在收到`RTS`后判断是否满足转发条件

- 是否位于可行域
- 还有以下条件

$$\mathcal{I}=\begin{cases}1,&\mathrm{if}\begin{cases}\xi_{RTS}\geq\xi_{Th}&\text{接收RTS的SNR值}\\\lambda_{relay}\leq\lambda_{relay}^{Th}&\text{中继的输入速率}\\\beta\leq\beta^{\max}&\text{中继的缓存充盈度}\\E_{rem}\geq E_{rem}^{\min}&\text{中继的剩余能量}\\0,&\text{otherwise.}&\end{cases}&\end{cases}$$

从上到下分别为`物理层`、`传输层`、`传输层`、`物理层`

---

#### 接收节点竞争

多个待选节点转发需要通过`CTS`竞争

采用`Anycast`路由

`为网络层`+`MAC层`

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-6c2cb06ace.png){: .zoom}

> 没有接收到CTS的原因
> 
> - 可行域中无节点/无满足节点
> - CTS冲突

---

#### 基于角度的路由

当可行域内没有节点条件下（没有收到`CTS`）启动，作为补偿

在不可行域中矮子里头拔将军

选择偏离角尽可能小的节点（竞争窗口更小）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-a7d8461803.png){: .zoom}

---

!!! success "第八次课后练习题"

    1. `Anycast`根据节点路径远近，设置了不同的信道访问优先级，因而是一种MAC层与网络层的跨层协议（√）
    2. `XLP`协议中的传输启动需要发送RTS，其指明了下一跳转发节点（×，并没有指明）
    3. `XLP`协议基于接收节点竞争，给离汇聚节点更近的节点更高优先级，因此没有考虑实际信道（×，能收到RTS隐含信道质量）
    4. `XLP`协议中若没有收到CTS回复，则就说明可行域内无节点（×，也可能是无满足节点/CTS冲突）
    5. `XLP`协议中，基于接收节点竞争要求获知节点地理位置，而基于角度的路由则无需考虑地理位置（×，角度的计算需要地理位置）

---

