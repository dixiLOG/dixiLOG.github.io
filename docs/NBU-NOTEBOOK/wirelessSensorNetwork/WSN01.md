# WSN01 绪论

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 划重点

<readonly-block type="isv"></readonly-block>

**题型分布：**

- 单选\*20（2分）
- 判断\*10（1分）
- 填空\*10（1分）
- 简答

---

基于笔记而非课本，笔记没有的一定不考

> 重点一定考，不做要求一定不考

<table><colgroup><col/><col/><col/></colgroup><thead><tr><th>章节</th><th>重点</th><th>不做要求</th></tr></thead><tbody><tr><td vertical-align="middle"><b>绪论</b></td><td><ul><li>传感器、传感器网络的组成与特点</li><li>发展阶段</li><li>与物联网的关系</li></ul></td><td></td></tr><tr><td vertical-align="middle"><b>设计因子</b></td><td><ul><li>传输介质与应用场合</li><li>容错性、可扩展性</li><li>功耗</li></ul></td><td><ul><li>拓扑结构</li><li>生产成本</li></ul></td></tr><tr><td vertical-align="middle"><b>物理层</b></td><td><ul><li>调制—OQPSK</li><li>无线信道<ul><li>多径效应</li><li>路径损耗</li></ul></li><li>简化的信道模型</li><li>WSN网络体系引入</li></ul></td><td><ul><li>RF通信基本模块框架</li><li>信道编码</li></ul></td></tr><tr><td vertical-align="middle"><b>MAC</b></td><td><ul><li>ALL</li><li>Everthing</li></ul></td><td></td></tr><tr><td vertical-align="middle"><b> 网络层</b></td><td><ul><li>以<u>数据</u>为中心的<u>平面结构</u>路由协议<ul><li>SPIN</li></ul></li><li><u>分层</u>的路由协议<ul><li>LEACH</li><li>TEEN</li></ul></li><li>基于<u>地理位置</u>的路由协议<ul><li>改进方法</li><li>MECN—中继区域</li></ul></li><li>QoS<ul><li>成本域</li><li>MCPF</li></ul></li></ul></td><td></td></tr><tr><td vertical-align="middle"><b>传输层</b></td><td><ul><li>设计目标</li><li>TCP于WSN的限制</li><li>ESRT</li></ul></td><td><ul><li>拥塞及丢包问题</li><li>传输层目标</li><li>传输层挑战要考TCP为什么不适用于WSN，别的不考</li></ul></td></tr><tr><td vertical-align="middle"><b>跨层设计</b></td><td><ul><li>两两跨层</li><li>一体化跨层<ul><li>接收节点竞争</li></ul></li></ul></td><td></td></tr><tr><td vertical-align="middle"><b>同步</b></td><td><ul><li>时间漂移与时间偏差</li><li>NTP</li><li>TPSN（影响因素）</li></ul></td><td><ul><li>Tiny- and Mini-Sync Protocols</li></ul></td></tr><tr><td vertical-align="middle"><b>定位</b></td><td><ul><li>测距部分<ul><li><latex>d_{AB}=S_{us}(t_{us}-t_{delay}-t_{rf})<br/></latex></li></ul></li><li>AHLoS<ul><li>迭代多边定位法</li></ul></li><li>近似三角形内点协议</li></ul></td><td><ul><li>RSS测距难点</li></ul></td></tr></tbody></table>



---

## **绪论**

<callout emoji="🙋">
#### 与计网的差异
计网：大范围计算机组网
WSN：小范围传感器（更底层）组网
</callout>

<callout emoji="🙋">
#### 为什么需要 WSN ？
组建物联网( Internet of Things，IoT)
应用层 | 网络层 | **感知层** 
应用：
- RFID 仓库管理
- 智慧农业
- 车辆网
</callout>

### **传感器**

#### **功能**

- 数据源
- 路由/转发

---

#### **硬件组成**

1. **基本部件**

- 传感单元
- 处理单元
- 无线通信单元
- 能量（供电）单元

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-16425eae35.png){: .zoom}



1. **额外部件**

- Power Generater ：供能装置
- Location Finding System：定位系统
- Mobilizer：移动装置

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-391a233652.png){: .zoom}

---

#### **传感器分类**

- **低端平台**

处理、存储、通信范围有限

- **高端平台**

---

### **传感器网络**

#### **组成**

- **传感器：** 感知数据与传递数据
- **汇聚节点（sink）：** 汇聚覆盖区域内的监测数据 | 用户与传感器节点间的桥梁
- **用户（任务管理节点）**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-0dd5c83cbd.png){: .zoom}

#### **特点**

- 双向传输
- 自组织（ad-hoc）
- 多跳（multi-hop）

---

### **WSN主要特征**

> 总结一下

#### **传感器节点的特征**

- 电源能量有限
- 通信范围有限
- 计算和存储能力有限

#### **传感器网络的特征**

- 无基础设施（如基站）
- 自组织进行数据传输
- 节点密集分布，数据之间具有相关性（可压缩编码|降维）
- 能量有限，易坏，需具备容错性
- 采用多跳传输
- 节点基本上是固定不动的

---

### **发展阶段**

**第一阶段： 传统的传感器系统（20世纪70年代）**

- 传感器节点只能用于收集信息和报告信息，彼此间不能通信

**第二阶段：无线传感网节点集成化（20世纪80-90年代）**

- 传感器节点同时具备感知、计算、通信能力
- 开启了现代无线传感网的先河

**第三阶段：多跳自组织网(21世纪初至今)**

- 自组织组网，多跳传输，节点低功耗

---

!!! success "第一次课后练习题"

    1. 传感器和传感器网络位于物联网架构体系中的网络层（×，感知层）
    2. 组成传感器硬件的供能装置是必需的模块（×，能量单元）
    3. 因特网是WSN中重要的组成部分，因为它实现汇聚节点与用户的连接（×，主要构成是三节点）
    4. 传感器节点由于能量限制，其与汇聚节点之间的通信一般采用多跳的方式（√）
    5. WSN 的最新发展阶段是ad-hoc组网形式（√）

---

