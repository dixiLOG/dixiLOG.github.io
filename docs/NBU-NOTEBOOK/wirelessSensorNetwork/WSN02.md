# WSN02 设计影响因子

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## **WSN 设计の影响因子**

```Plain Text
传输介质
硬件约束
容错性
可拓展性
拓扑结构
生产成本
功耗
```

### **传输介质**

#### **射频（RF）通信**

- 频率范围：3k\~300GHz
- 频率越高，衰减越快

> 功率与距离、频率的关系：$P_r = \frac{P_T \cdot G_T \cdot G_R }{(4\pi d)^2} \cdot \frac{c^2}{f^2}$

- 只适用于地上



**ISM频段（Industrial, Scientific, and Medical）**

- 免许可，全球通用 | 易造成干扰

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-4d8845ae9c.png){: .zoom}

---

#### **水下通信介质**

1. **声波**

- 适用于水下传感器网络： 30 – 300Hz
- 波长更长更适合水下环境 

1. **红外线**

- 免许可，成本低
- 可用于水下短距离通信
- 适用于视距传输，具有抗干扰的优点

1. **光波（激光）**

- 水下传播产生散射，适合短距离传输

---

#### **磁感应通信**

> 适用于地下

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-5b729301eb.png){: .zoom}



---

### **硬件约束**

能量有限，存储运算能力有限，需节能高效，延年益寿

- **多跳**
- **休眠**

> ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-8faadcbb6a.png){: .zoom}

---

### **系统容错性（Robust）**

部分传感器失能而仍能维持功能的能力

**容错原因**

- 网路末梢易故障
- 传感器常选择休眠而不工作🤣

**提高容错性方法**

- 降低节点失效性
- 代替、大面积部署
- 算法补偿

---

### **可扩展性（Scalable）**

高并发接入节点下有较好拥塞控制的能力（反例则是死锁）

- 密集部署（容错性）不得不面对的问题
- 受硬件约束大
- 通过算法补偿

---

### **网络拓扑结构**

传感器连接结构图

- **常见结构有：星状(star) | 网状(Mesh) 拓扑**
- **是动态变换的**

  - 周期性休眠
  - down掉
- **部署阶段**

  - 预部署、部署阶段（网络启用）
  - 部署后（post-deployment）阶段（动态变化，需维护）
  - 重新部署阶段（无法 fix，reload）

---

### **生产成本**

**最重要的，dddd，所以不说**

---

### **功耗**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-7f0cac142e.png){: .zoom}

#### **传感功耗**

1. 感知功耗（固定）
2. ADC功耗（采样|量化）

   - 采样率$F_s$
   - 量化有效比特位数 | 分辨率 $ENOB$（Effective Number of Bits）

   > 二者相关性弱

$$P_s\propto F_s\bullet2^{ENOB}$$

#### **数据处理功耗**

有表达式

$$E_{p}=N\cdot C\cdot v_{dd}^{2}+v_{dd}(I_{0}e^{\frac{v_{dd}}{n}\cdot v_{T}})(N/f)$$

其中

- N：$T_{CLK}$
- C：开关电容
- $I_0$：漏电流
- $v_T$：门限电压

**可变的两个参数**

- f：**CLK频率**
- $v_{dd}$：**电源电压**
- 有正相关性，需做动态电压调节（DVS）

$$\frac{K(v_{dd}-v_{th})^a}{v_{dd}}\geq f$$

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-0fb509a515.png){: .zoom}

#### **通信功耗**

- **发送功耗**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-bcbe52c450.png){: .zoom}

$$E_{tx}=(P_{LO}+P_{PA})t_{tx}$$

> 功放功率$P_{PA}$可控，与发射时间$t_{TX}$负相关，故也需要做动态规划寻找最优解

- **接收能耗**

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-ef7ffef269.png){: .zoom}

$$E_{\mathrm{rx}}=(P_{\mathrm{LO}}+P_{\mathrm{RX}})t_{\mathrm{rx}}$$

参数不能改变

- **转换能耗**

$$E_{sw}=P_{LO}\times t_{sw}$$

- **启动能耗**

$$E_{st}=P_{LO}\times t_{st}$$

- **空闲挂起(idle)**

空闲功耗不低

- **休眠**



!!! example "例"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-e39d36ef22.png){: .zoom}

---

!!! success "第二次课后练习题"

    1. 对于水下WSN而言，可使用激光进行远距离通信（×，水下近距离）
    2. WSN 容错性的要求与部署的环境有关，室内环境一般要求较高的容错性（×，室内不需要那么高）
    3. 降低感知功耗可选择增加ADC模块分辨率（×，降低）
    4. 对于处理器功耗而言，为支持一特定CPU频率，存在一个最小的电源电压Vdd（√）
    5. 发送功耗中，数据传输速率影响功放PA的输出功率（√）

---

### WSN 网络协议体系引入

<table><colgroup><col/><col/></colgroup><thead><tr><th>三大<u>垂直</u>平面</th><th>三大<u>支撑</u>应用</th></tr></thead><tbody><tr><td><ul><li>能量管理平面</li><li>移动管理平台</li><li>任务管理平台</li></ul></td><td><ul><li>定位平面</li><li>同步平面</li><li>拓扑管理平面</li></ul></td></tr></tbody></table>

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/wireless-sensor-network-20260721-173359-authcode-56006486f7.png){: .zoom}

---

!!! quote "让我们从物理层开始\~"



