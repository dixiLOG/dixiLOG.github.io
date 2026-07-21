# 模电速通

<div id="progress-container">
  <div id="progress-bar"></div>
</div>


## 写在前面

笔记无了，也得复习，于是借着PPT光速梳理一遍模电

等推免结束了再细细整理一遍，搬运到博客上

> 希望多长一岁，能有点用 | 最后一次修改：25 年 8 月

---


!!! note "符号规定"
    
    通过字母与下标区分交/直流分量
    
    - 直流量：$I_C$
    - 交流量：$i_c$
    - 交流有效值：$I_b$
    - 总量（包含交直流）：$u_{CE}$
    - 相量（复数表述）：$\dot{U}_{ce}$
    
    
    
## 常用半导体器件

### 基础概念

#### 本征半导体

!!! success "关键词"
    
    本征半导体 | 电子空穴对 | 本征激发
    
    

- 化学成分纯净（九个9，比999还多六个）的半导体晶体，比如四价的硅Si/锗Ge

![图片展示了硅原子和锗原子的电子轨道结构。左侧是硅原子，其最外层轨道上有四个电子，被红色点标注；右侧是锗原子，最外层轨道上也有四个电子，同样用红色点表示。右侧还单独展示了四个电子，标注为“+4”。图片下方文字说明“硅和锗最外层轨道上的四个电子称为价电子”。此图与文档中介绍本征半导体化学成分纯净、通过共价键结构构成的内容相关，直观呈现了硅、锗原子的电子结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a4bbe7f050.png)

- 通过共价键结构构成本征半导体
- 受温度影响，电子热运动随温度上升而变得剧烈，产生电子空穴对，即本征激发
- 在电场作用下电子定向运动，形成电流，具备一定导电能力

![图片展示了本征半导体中电子定向运动形成电流的示意图。图中上方有箭头表示外加电场E方向。下方硅原子结构中，红色球代表电子，蓝色球代表空穴。在电场作用下，电子（红色球）向右移动形成电流，而空穴（蓝色球）向左移动。该图与上文介绍的本征半导体在电场作用下电子定向运动形成电流，具备一定导电能力的内容相呼应，直观呈现了这一过程。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-49dd2ada99.png)

---

#### PN结

!!! success "关键词"
    
    耗尽层 | 电子扩散/漂移 | 单向导通性 | 反向饱和电流
    
    
    
- 单纯的导电能力并不有趣，于是希望通过掺杂和组合build出一个具备良好单向导通性的新结构
- 分别在原有物质中掺入五价、三价杂质，构成自由电子/空穴为多数载流子的新半导体
- 将多子为电子的称为N型半导体（negative），反之为P型半导体

![图片展示了P型和N型半导体的结构。左侧为P型半导体，标注有“多子—空穴”“少子—电子”，其内部有蓝色圆圈代表空穴，红色圆圈代表电子；右侧为N型半导体，标注有“多子—电子”“少子—空穴”，其内部有红色圆圈代表电子，蓝色圆](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a243f89db5.png)

- 将二者拼接在一起，形成PN结。在结合暂态，因多子浓度差，N级电子向P扩散，并在中心形成阻止多子扩散的稳定层（扩散电流=漂移电流），称为耗尽层

![图片展示了P型和N型半导体的结构。左侧为P型半导体，右侧为N型半导体，中间有耗尽层。P型半导体中，空穴（红点）多于电子（蓝点），N型半导体中，电子多于空穴。在耗尽层处，空穴和电子相互抵消形成空间电荷区。图中还标注了内电场E，以及少子漂移电流和多子扩散电流的方向。该图与文档中介绍本征半导体基础概念的内容相关，直观呈现了耗尽层的形成及电流方向。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-ce2dbfcfee.png)

- 通过PN结加不同方向的电压，控制耗尽层宽度来实现单向导通性
- 正向电压下，耗尽层变窄，扩散电流>漂移电流，形成正向电流，呈现低阻性，PN结导通

![图片展示了PN结在正向 addCriterion>向电压下的状态。左侧为P型半导体，右侧为N型半导体，中间是空间电荷区。图中箭头表示内电场E，正向电流从P型半导体流向N型半导体。该图与文档中“正向电压下，耗尽层变窄，扩散电流>漂移电流，形成正向电流，呈现低阻性，PN结导通”的内容相呼应，直观呈现了正向电流的流向和内电场的作用。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-dd4accd98f.png)

- 反向电压下反之，PN结截止，但有少量漂移电流，称为反向饱和电流

---

#### PN结伏安特性曲线

![图片展示了PN结伏安特性曲线。横轴为电压u，纵轴为电流i。曲线分为正偏和反偏两部分，正偏时电流随电压增大而迅速增大；反偏时，电压在一定范围内电流几乎为零，之后电流迅速增大，且有反向饱和电流IS。图中还标注了反向击穿电压UBR、反向饱和电流IS、正偏电流IF（多子扩散）和反偏电流IR（少子漂移）。该图与上下文紧密相关，直观呈现了PN结在不同电压下的电流变化情况。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-bcbd1b15ae.png)

室温下有表达式：

$$i=I_{\mathrm{S}}(\mathrm{e}^{u/_{U_{\mathrm{T}}}}-1)$$

其中，$I_S$为反向饱和电流（与温度T成正比），$U_T=26mV$为温度电压当量

---

#### 极间电容

从上述表述中，不难观察出，加压后耗尽层的变化过程可等效为电容的充放电

那么对于高频信号，就需要关注频率与极间电容带来的时间$\tau$的关系，即结电容效应

- 反向电压下有势垒电容$C_B$，正向下有扩散电容$C_D$

---

### 二极管

#### 二极管伏安特性曲线

!!! success "关键词"
    
    开启/导通电压 | 反向漏电 | 最高工作频率
    
    
    
- 与PN结曲线相比，二极管伏安曲线存在等效串联电阻R（开启电压）
- 二极管的正向压降与温度T成反比

$$\begin{array}{ccc}&\text{硅二极管}&\text{锗二极管}\\\text{开启电压}&0.5\mathrm{V}&0.1\mathrm{V}\\\text{导通电压}&0.6-0.8\mathrm{V}&0.2-0.3\mathrm{V}\\&(\text{取 }0.7\mathrm{V})&(\text{取 }0.3\mathrm{V})\end{array}$$

![图片展示了二极管伏安特性曲线及相关参数示意图。左侧电路图中，二极管与电阻R串联，电压表测二极管两端电压。右侧坐标图中，横轴为电压v，纵轴为电流i，分别标注了PN结特性曲线和二极管特性曲线。图中用箭头标注了导通电压、开启电压Uon、反向漏电等关键参数，还标出了死区、反向击穿电压V(BR)、最大反向工作电压U(R)等参数。该图与上下文紧密相关，直观呈现了二极管伏安特性曲线及参数。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-3bbb07b344.png)

#### 二极管参数

- 最大整流电流$I_F$：二极管长期连续工作时，允许通过的最大正向平均电流值，其值与PN结面积及外部散热条件等有关
- 反向击穿电压$U_{BR}$：热击穿极限
- 最大反向工作电压$U_{R}$：反向安全工作区的电压上限
- 反向电流$I_R$
- 最高工作频率：1N4000系列整流管：3kHz；1N4148开关管：～MHz

---

#### 等效电路

!!! success "关键词"
    
    开关模型 | 微变等效模型 | 钳位
    
    
    
几种closed-form近似模型

- **理想二极管模型**

![图片展示了理想二极管的符号及伏安特性曲线。左侧是理想二极管的电路符号，由一个三角形和两条线组成。右侧是伏安特性曲线，横轴为电压UD（V），纵轴为电流ID，曲线在0V处与横轴相交，之后以直线形式上升，表示当电压大于0V时，电流随电压线性增加。该图与文档中介绍理想二极管模型的内容相关，直观呈现了理想二极管的特性。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-5920600a90.png)

- **开关模型**

较为常用的一种模型

![图片展示了二](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-096fb7d91a.png)

- **折线模型**

串联一个等效电阻

![图片展示了二极管折线模型相关内容。上方公式为“rD = ΔU / ΔI”。下方图（a）是二极管伏安特性曲线，虚线为折线模型。图（c）是折线模型电路图，二极管与电阻串联，标注有电压Vth、电流iD，电阻标为rD。该图片与](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-4050cc63a3.png)

- **微变等效模型**

$$r_\mathrm{d}=\frac{\Delta u_\mathrm{D}}{\Delta i_\mathrm{D}}$$

根据

$i_\mathrm{d}=I_\mathrm{s}(e^{u_\mathrm{D}/U_\mathrm{T}}-1)$，可得切点的等效电阻：

$$r_{\mathrm{d}}=\frac{1}{g_{\mathrm{d}}}=\frac{U_{T}}{I_{\mathrm{D}}} = \frac{26~mV}{I_D~mA}$$

![图片展示了二极管的微变等效模型。上方是二极管伏安特性曲线图，横轴为电压uD，纵轴为电流iD，图中以Q点为切点，标注了ΔuD、ΔiD。下方是对应模型的电路图，左侧为电压源ΔuD，右侧为电流源ΔiD，中间串联一个电阻rD。该图与上下文紧密相关，是对微变等效模型的直观呈现，帮助理解二极管伏安特性的微小变化情况。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-93c3c261bb.png)



---

#### 其他二极管

- **稳压二极管**

利用二极管反向击穿特性实现稳压，此时工作电流满足$I_{Zmin}\leq I_{Z}\leq I_{Zmax}$

![图片展示了稳压二极管的伏安特性曲线。横轴为电压V，纵轴为电流I。曲线呈现非线性特征，电压在0.4V左右时电流迅速上升。图中用虚线标注了稳压二极管的稳定电压VZ，以及工作电流范围IZmin和IZmax。还标出了ΔVZ和ΔIZ，分别代表电压和电流的变化量。该图与上下文紧密相关，直观呈现了稳压二极管工作时的电压电流关系，帮助理解其利用反向击穿特性实现稳压的原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-84adf99c2e.png)

- **发光二极管**

电信号转为光信号，开启电压1.5V以上，电流一般需要若干mA

- **光电二极管**

![图片展示了光电二极管的相关内容。左侧是光电二极管的符号，标注正负极。中间是光电二极管伏安特性曲线，横轴为电压，纵轴为电流，标注了光照强度为200lx和400lx时的曲线。右侧是光电二极管的等效电路图，左侧为电流源，标注电流为I_s=f(E)，右侧为二极管，标注正负极。该图与文档中介绍光电二极管的内容相呼应，直观呈现了其伏安特性及等效电路。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-f960bd5fc2.png)

- **变容二极管**

---

### BJT三极管

#### 结构与类型

- 分为NPN与PNP型
- 发射区（e）掺杂浓度高，基区（b）薄而掺杂浓度低，集电区（c）面积大

![图片展示了NPN型和PNP型BJT三极管的结构与符号。NPN型三极管由发射区（N）、基区（P）、集电区（N）组成，发射极（e）、基极（b）、集电极（c）分别对应符号中的e、b、c；PNP型三极管则由发射区（P）、基区（N）、集电区（P）构成，其发射极、基极、集电极在符号中同样对应e、b、c。该图与上文介绍的NPN与PNP型三极管结构相呼应，直观呈现了其组成。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-3482884359.png)

![图片展示了NPN型三极管的结构示意图及管芯剖面图。示意图中，集电极c、基极b、发射极e标注清晰，集电区面积大、基区薄且掺杂浓度低、发射区掺杂浓度高。管芯剖面图直观呈现了三极管内部结构，与示意图对应。该图与上下文紧密相关，直观呈现了NPN型三极管的结构特点，为理解其工作原理提供了直观参考。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-3a87d10095.png)

**当发射结正偏，集电结反偏时**：

- e极中大量的电子冲进b区，与少量空穴结合，成为$I_B$
- 剩下的大部分电子没刹住车，又因为反偏，耗尽层很宽，电子穿过形成$I_C$
- $I_E=I_C+I_B \quad I_C = \beta I_B$

![图片展示 addCriterion addCriterion](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-2cbba8393f.png)

---

#### 共射特性曲线

!!! success "关键词"
    
    输入/输出特性曲线 | 三种导通状态与依据 
    
    
    
- **输入特性曲线**

![图片展示了BJT三极管的输入特性曲线及相关参数。左侧是电路图，标注有基极电流iB、发射极电压uBE、集电极电压uCE、集电极电流iC。右侧是iB随uBE变化的曲线图，uCE=0V时曲线陡峭，uCE>1V时曲线平缓。图中还标注了硅管和锗管的死区电压（0.5V、0.1V）和导通压降（0.7V、0.3V）。该图与上下文紧密相关，直观呈现了输入特性曲线的形状及硅锗管参数，帮助理解基极电流iB随发射结电压u addCriterion](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-c50553a874.png)

- 描述基极电流$i_B$随发射结电压的变化，与PN结类似
- 当CE两端加压导通后，$i_B$被分流而减小，特性曲线右移（但不多）



- **输出特性曲线**

> 注意c极输出电流达mA级

![图片展示了BJT三极管的输入](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-21af25bfff.png)

- 描述在$i_B$确定下,$i_C$随$u_{CE}$的变化
- 根据两个PN结的导通状态，可划分为饱和、放大、截止三个区域，可起到开关/放大的作用
- 饱和分为临界饱和（集电结零偏）与深度饱和（CE压降小，类似开关通路）

---

#### 主要参数

- **电流放大倍数**

  - 共射放大倍数$\beta \in(50,300)$
  - 共基放大倍数$\alpha \in(0.95,0.995)$

  > 注意，对于交流放大倍数，有$\beta=\frac{\Delta i_{C}}{\Delta i_{B}}=\frac{i_{C2}-i_{C1}}{i_{B2}-i_{B1}}$
- **极间反向电流**

  - 集电结反向饱和电流$I_{CBO}$
  - 穿透电流$I_{CEO} = (1+\beta)I_{CBO}$，越小越好；与温度强相关
- **特征频率**

  - $f_T$时$\beta=1$
- **安全工作区（极限参数）**

  - $i_C, u_{CE},P_{CM}$都存在额定值

![图片展示了BJT三极管的输出特性曲线，横轴为集电极 - 发射极电压v_{CE}，纵轴为集电极电流i_{C}。图中用不同颜色和线条表示了不同集电极电流i_{C}的特性曲线，标注了过流区、过压区、过损区、安全工作区等区域。其中，过流区对应i_{C}超过额定值I_{CM}的情况，过压区对应v_{CE}超过V_{(BR)}_{CEO}的情况，过损区对应集电极功率P_{CM}超过额定值的情况。该图与上下文介绍的BJT三极管安全工作区（极限参数）内容相关，直观呈现了极限参数对应区域。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b30f28e972.png)

---

#### 温度的影响

- 输入特性曲线左移，输出特性曲线抬高

![图片展示了温度对晶体管输入和输出特性的影响。左图是温度对 addCriterion图片内容](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-c206b24824.png)

#### 总结

![图片为黑色背景，上方用红色字体标注了三个状态名称。（](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-76117c1dca.png)

---

### 场效应管

- 分为结型（就是BJT的那个junction）场效应管与MOS管
- 有源（Source）漏（Drain）栅（Gate）极
- 与BJT的流控放大电流相比，场效应管采用压控电流（VCCS）

#### 结型场效应管

- 分为N沟道与P沟道，除了特性相反别无二致

![图片展示了N沟道耗尽型结型场效应管的结构示意图。图中标识了源极S、漏极D、栅极G及耗尽层。源极和漏极分别连接N型沟道的两端，栅极通过P型掺杂区与N型沟道接触。耗尽层位于N型沟道两侧，由P型掺杂区形成。该图与文档中介绍结型场效应管的内容相关，直观呈现了其内部结构，帮助理解其工作原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-64591d4aaa.png)

- 沟道本身是开放的（耗尽型），需要通过$U_{GS}$（加负压）控制耗尽层宽度，从而控制$i_D$
- 当$u_{DS}$加压时，耗尽层呈楔形

![图片中](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-4d2147c822.png)

##### 特性曲线

- 转移特性曲线近似公式

$$I_\mathrm{D}=I_\mathrm{DSS}(1-\frac{U_\mathrm{GS}}{\mathrm{U}_\mathrm{GS(off)}})^2$$

<grid>
<column width-ratio="0.700000">
![图片展示了结型场效应管的特性曲线。左侧为转移特性曲线，横轴为栅源电压UGS，纵轴为漏源电流ID，U_DS=15V，曲线呈抛物线形。右侧为输出特性曲线，横轴为U_DS，纵轴为ID，U_DS为常数，UGS分别为0、-](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-aec28770a1.png)
</column>
<column width-ratio="0.300000">
![图片展示了结型场效应管的输出特性曲线。横轴为漏源电压U_{DS}，纵轴为漏极电流I_{D}。图中有多条曲线，每条曲线对应不同的栅源电压U_{GS}，从-1V到-7V。曲线分为可变电阻区、预夹断轨迹、恒流区与夹断区。当U_{DS} < U_{GS} - U_{GS(off)}时，等效为不同电阻；当U_{DS} = U_{GS} - U_{GS(off)}时为预夹断；当U_{DS}足够大时，I_{D}仅与U_{GS}有关，有最大值I_{DSS}，对应U_{GS} =](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b3aa886f89.png)
</column>
</grid>

- 分为可变电阻区、恒流区与夹断区
- 当$u_{\mathrm{DS}}<u_{\mathrm{GS}}-u_{\mathrm{GS(off)}}$时（可以理解为夹断了），等效为不同的电阻
- 当相等时为预夹断
- 当DS两端足够大时，$i_D$仅与$u_{GS}$有关
- $i_D$有最大值$i_{DSS}$，对应GS两端电压为0

---

#### MOS管

- 绝缘栅型，通过栅极电压调控沟道的导通能力，从而控制漏源间电流的大小
- 分为N沟道与P沟道，每种沟道又分为增强型（本没有沟道需要开启）和耗尽型
- B极一般与S短接

![图片展示了N沟道增强型MOS场效应管的结构示意图。左侧为结构图，P型衬底上嵌有N+型区域，中间有SiO2绝缘层，栅极G、源极S、漏极D及衬底引线B通过引线连接。右侧是该管的电路符号，D、G、S分别对应漏极、栅极、源极，B为衬底引线。此图与文档中介绍MOS管结构的内容相关，直观呈现了N沟道增强型MOS管的内部组成。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-9271720ede.png)

**特性曲线**

- 增强型NMOS类似BJT，耗尽型NMOS类似结型场效应管，不再赘述，单纯放图

<grid>
<column width-ratio="0.500000">
![图片展示了增强型NMOS管的转移特性曲线及相关公式。在一定uDS下，栅 - 源电压uGS与漏极电流iD之间的关系为iD = f(uGS) |uDS = const，公式为iD = ID0( uGS / UGS(th) - 1)²，其中ID0是uGS = 2UGS(th)时的漏极电流。图中以uGS为横坐标，iD为纵坐标，展示了不同uGS值对应的iD变化情况，如vDS = 5V时，uGS = 2V时iD为0，uGS = 4V时iD约为50μA等。该图与上下文介绍的增强型NMOS管特性曲线内容相关。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b6db4d4c08.png)
![图片展示了增强型NMOS管输出特性（漏极特性）曲线图，表示漏极电流iD与漏-源电压uD S之间的关系。图中曲线分别对应不同栅-源电压vGS（2.5V、4.0V、5.0V、5.5V、6.5V）的值。曲线分为可变电阻区、放大区（恒流区、饱和区）和截止区（夹断区）。其中，vDS = vGS - VT时，对应放大区。该图与上文介绍增强型NMOS管特性曲线的内容相呼应，直观呈现了其特性。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e9bb8363f2.png)
</column>
<column width-ratio="0.500000">
![图片展示了N沟道耗尽型MOS管特性曲线，图中给出了不同栅源电压（vGS）时的漏极电流（iD）与漏源电压（vDS）](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-021afb5220.png)
</column>
</grid>

### 场效应管主要参数

- **跨导** $g_\mathrm{m}=\Delta i_\mathrm{D}/\Delta u_\mathrm{GS}~mS$
- **饱和漏极电流** $I_{DSS}$
- **夹断电压** $U_P$：耗尽型参数
- **开启电压** $U_T$：增强型
- **直流输入电阻** $R_{GS}$：$10^7\sim10^9 \Omega$
- **极间电容、DS/GS击穿电压，最大允许耗散功率**

---

#### 总结

认识三种N沟道管子即可

<grid>
<column width-ratio="0.500000">
![图片为表1 - 2，展示了各类场效应管的符号和特性曲线。表格分为种类、符号、转移特性、漏极特性四列。结型N沟道耗尽型场效应管，符号为G、D、S，转移特性曲线中U_p为负值，漏极特性曲线中U_GS=0V时I_D为负值；结型P沟道耗尽型场效应管，符号为G、D、S，转移特性曲线中U_p为正值，漏极特性曲线中U_GS=0V时I_D为正值；绝缘栅型N沟道增强型场效应管，符号为G、D、S、B，转移特性曲线中U_T为正值，漏极特性曲线中U_GS=U_T时I_D为 addCriterion图片id](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-5f4f905084.png)
</column>
<column width-ratio="0.500000">
![图片展示了绝缘栅极型场效应管的种类、符号、转移特性及漏极特性。分为N沟道耗尽型、增强型和P沟道耗尽型三种。N沟道耗尽型的转移特性曲线为上升型，漏极特性曲线在UGS=0V时有明显变化；增强型转移特性曲线为下降型，漏极特性曲线在UGS=UT时有明显变化；P沟道耗尽型转移特性曲线为上升型，漏极特性曲线在UGS=0V时有明显变化。该图与上文介绍场效应管主要参数的内容相呼应，直观呈现了不同类型的场效应管特性。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-886a6075a3.png)
</column>
</grid>

- 场效应管（FET）噪声系数比BJT小，不取电流

---

## 基本放大电路

### 概念与指标

- 放大电路，就是将微小信号（电压/电流/功率）放大指定的倍数（dB）
- 对于每一级，都要尽可能保证高输入阻抗（对前级的影响小），低输出阻抗（带负载能力强），并具备指定需求（倍数、频带）下的高保真放大能力

![图片展示了放大电路示意图，信号源（含内阻）通过电阻Rs与放大电路相连，放大电路输出端接负载RL。图中用红色箭头标注了信号源、输入阻抗、输出阻抗、负载等关键部分。该图与文档中放大电路概念与指标的内容相关，直观呈现了放大电路的基本结构，帮助理解输入阻抗、输出阻抗等指标在电路中的位置和作用。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-f8faaa64c8.png)

![图片展示了基本放大电路的示意图。左侧为信号源，标注有电压Us和电阻Rs，信号源输出电压Ui经输入电阻Ri进入放大电路。放大电路右侧输出电压Uo，经负载电阻RL输出电流Io。电路中还标注了输入电流Ii和输出电流Io。该图与文档中放大电路概念与指标的内容相关，直观呈现了放大电路的基本结构，帮助理解输入输出参数等概念。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-9066b26958.png)

- **电压放大倍数** $\dot{A}_{\mathrm{uu}}=\dot{U}_{O}/\dot{U}_{\mathrm{I}}$
- **输入阻抗** ：从入口两端看进去的等效电阻$r_i=\frac{\dot{U}_i}{\dot{I}_i}$
- **输出阻抗** ：

  - 戴维宁等效，加压求流法（前级电源置零，电压源开路，电流源短路，保留受控源）$R_o=\frac{\dot{U}} {\dot{I}}$
- **通频带**
- **THD（总谐波失真）** ：$THD=\frac{\sqrt{H_2^2+H_3^2+\ldots+H_n^2}}{H_1}\times100\%$
- **最大不失真输出幅度**
- **效率** ：$\eta=\frac{P_{\mathrm{om}}}{P_{\mathrm{v}}}$（最大输出功率/电源视在功率）

---

### Q点

即静态工作点。合理的静态工作点可以提高管子效率，并规避失真（影响动态参数）

**静态参数**：$I_{BQ},I_{CQ},U_{CEQ}$

![图片展示了 addCriterion addCriterion](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a7f7ed3ab0.png)

**常见的两种共射放大电路**

- 输入信号源短接，大电容开路看Q点（问就是肌肉记忆了）

![图片展示了两种共射放大电路。左侧为直接耦合共射放大电路，电路中有Rb1、Rb2、Rc、R1等电阻，以及电源VCC，输入信号源u1，输出信号uO，还标注了Q点参数公式。右侧为阻容耦合共射放大电路，电路中增加了C1、C2电容，其余元件与左侧电路类似，同样标注了Q点参数公式。该图与上下文介绍的共射放大电路类型相关，直观呈现了两种电路结构及Q点参数计算。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-10b0ba63be.png)

### 图解法

#### 直流通路与交流通路

> 为微变等效电路奠基

<grid>
<column width-ratio="0.500000">
![图片展示了直流通路与交流通路的定义及处理方式。直流通路在直流电源作用下，直流电流流经的通路，电容视为开路，电感视为短路，交流信号源视为短路但需保留其内阻（若有的话）。交流通路在输入信号作用下，交流信号流经的通路，大电容（如耦合电容）视为短路，无内阻的直流电源（如VBB、VCC）视为短路。该图与上下文紧密相关，是对直流通路与交流通路概念的直观说明，为后续微变等效电路的建立奠定基础。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-fe505b8bb1.png)
</column>
<column width-ratio="0.500000">
![图片展示了阻容耦合共射极放大电路及其直流通路和交流通路。左侧为阻容耦合共射极放大电路，包含电源、耦合电容、基极电阻、集电极电阻、负载电阻和晶体管。右侧是其直流通路，去除了耦合电容。底部文字说明直流电源内阻为零，耦合电容隔直通交，直流电源和耦合电容对交流相当于短路。该图与上文介绍的放大电路直流通路相关，直观呈现了电路结构，为后续交流负载线等分析打下基础。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-18459882d8.png)
</column>
</grid>

容易得到共射放大的输入输出特性表达式

- $u_{\mathrm{BE}}=V_{\mathrm{BB}}-i_{\mathrm{B}}R_{\mathrm{b}}$
- $u_{\mathrm{CE}}=V_{\mathrm{CC}}-i_{\mathrm{C}}R_{\mathrm{c}}$

thus 能画出负载线

![图片展示了共射放大电路的交流通路及输入输出特性。电路中包含电源VBB、基极电阻Rb、集电极电阻Rc、晶体管T等元件。下方是输入回路负载线和输出回路负载线，以及对应的输入输出特性曲线。输入回路负载线为直线，输出回路负载线为折线。Q点位于输入回路负载线与输出回路负载线的交点，标注有静态时交流输入为零。该图与上下文紧密相关，直观呈现了交流负载线的形成及Q点位置，为后续非线性失真分析等奠定基础。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-95ce09428e.png)

而输入信号便在Q点上下震荡：

![图片展示了共射放大电路的输入输出特性。图（a）中，横轴为基极电压u_{BI}，纵轴为基极电流i_{B}，虚线为输入信号u_{i}，实线为基极电流i_{B}，Q点位于虚线与实线交点。图（b）为交流负载线图，横轴为集电极电压u_{CE}，纵轴为集电极电流i_{C}，虚线为输入信号u_{o}，实线为集电极电流i_{C}，Q点位于虚线与实线交点。该图与上下文关系紧密，直观呈现了共射放大电路的输入输出特性，为后续分析奠定了基础。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-7a00b25f6f.png)

> 是通信电子线路中丙类功放的阉割版

---

#### 非线性失真分析

- **截止失真**

Q点过低，信号底部低于开启电压，$i_B$底部失真，$u_{CE}$顶部失真

<grid>
<column width-ratio="0.500000">
![图片展示了交流信号波形，左侧为红色的i_b波形，右侧为蓝色的u_be波形。i_b波形呈现正负 自动生成](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-d13775979d.png)
</column>
<column width-ratio="0.500000">
![图片image addCriterion图片展示了NPN管截止失真时的输出uo波形。上方为输入信号波形，下方为输出uo波形，呈现顶部失真现象。输出uo波形顶部被削平，底部有尖角。右侧标注“NPN管截止失真时的输出uo波形。uo波形顶部失真”，并有“uo=uce”标识。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e02d2824f6.png)
</column>
</grid>

- **饱和失真**

Q点过高，以致于$i_C$顶部冲进饱和区，无法做到线性跟随，甚至削平

- 输出信号表现为削底（但没有截止失真那么明显）

![图片展示了共射放大电路的输入输出特性曲线。左侧为输入特性曲线，横轴为基极电流i_b，纵轴为基极电压u_{BE}，曲线与直线I_{BQ}相交于Q点，Q点处有虚线标注。右侧为输出特性曲线，横轴为集电极电压u_{CE}，纵轴为集电极电流i_c，曲线与水平线I_{CQ}相交于Q点，Q点处有虚线标注，还标注了饱和失真。该图与上下文关系紧密，直观呈现了共射放大电路的输入输出特性，帮助理解Q点位置及失真情况。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-f6b6cb54aa.png)

- **交越失真**

  - 一般出现在功放管没加二极管钳位/运放SR不够时
- **注意Rb、Rc、VCC、β对Q点的影响**

<grid>
<column width-ratio="0.500000">
![图片展示了改变Rb、VCC对Q点位置的影响。左侧图中，改变Rb，保持VCC、Rc、β不变，Rb增大Q点下移，Rb减小Q点上上移；右侧图中，改变VCC，保持Rb、Rc、β不变，升高VCC，直流负载线平行右移，动态工作范围增大，但管子的动态功耗也增大。该图与上下文紧密相关，直观呈现了Rb、VCC变化对Q点位置的影响，为理解Q点位置变化提供了可视化参考。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-27f14c55ef.png)
对第二点持异议，Q点应该还在红线上，向右平移而非往右上跑
</column>
<column width-ratio="0.500000">
![图片展示了直流通路中交流负载线的变化情况。左侧图2.4.9（c）标注“改变Rc，保持Rb，VCC，β不变”，负载线由红色变为蓝色，Q点从Q1移动到Q2；右侧图2.4.9（d）标注“改变β，保持Rb，Rc，VCC不变”，负载线由红色变为蓝色，Q点从Q1移动到Q2。图片与上下文紧密相关，直观呈现了改变Rc和β时，负载线及Q点位置的变化，帮助理解Q点对交流负载线的影响。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-2e9ce4cc3c.png)
</column>
</grid>

#### 交流负载线

交流通路下，Rc与负载并联，斜率发生变化

![图片展示了直流通路与交流通路的负载线。左侧标注“直流负载线”“交流负载线”，右侧绘有负载线。负载线有红色、蓝色、绿色三种，其中红色负载线标注“静态工作点”，并有Q点标识。图片下方有“特征”内容，显示交流负载线斜率为-1/R'，R' = R_L || R_c。还标注了“注意”：交流负载线是有交流输入信号时工作点的运动轨迹，空载时与直流负载线重合。该图与文档中交流负载线部分内容对应，直观呈现了负载。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b860b4078b.png)

### 微变等效电路

- 交流小信号下，可以在Q附近用直线段近似地将三极管等效为一个线性电路

> 具体的H等效参数模型这里不作赘述，通信电子线路里面已有

简化后可得三极管简化模型

![图片展示了交流小信号下三极管的微变等效电路。电路中，b端输入电流i_b，e端输入电压v_be，r_be为输入电阻，c端输出电流i_c，v_ce为输出电压。b、c端标注有正负极性，e端标注有负极性。该电路是上文介绍的三极管简化模型，用于交流小信号分析，是理解三极管放大电路工作原理的基础。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-664bd247e1.png)

对于小功率三极管：$r_{be}=300+(1+\beta)\frac{26(mV)}{I_E(mA)}(\Omega)$

- 注意内阻问题，此时的放大倍数是正常计算后的输入阻抗的分压

![图片展示了当信号源有内阻时的放大电路相关知识。左侧文字说明了放大倍数定义，包括电压放大倍数（A_u）和电压源内阻（R_s）的放大倍数（A_us），并给出公式A_us = R_i / (R_s + R_i) * A_u。右侧是放大电路示意图，信号源内阻为R_s，放大�� addCriterion图片展示了当信号源有内阻时的放大电路相关知识。左侧文字说明了放大倍数定义，包括电压放大倍数（A_u）和电压源内阻（R_s）的放大倍数（A_us），并给出公式A_us = R_i / (R_s + R_i) * A_u。右侧是放大电路示意图，信号源内阻为R_s，信号源输出电压为U_s，放大电路输出电压为U_o，负载电阻为R_L。该图片与上下文紧密相关，是对上下文中放大电路知识的直观呈现，帮助理解信号源内阻对放大电路放大倍数的影响。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-9e5f51b4e8.png)

- 输入输出阻抗不再赘述，见后面的总结

---

### 分压偏置电路

- 加入偏置与负反馈电阻$R_e$以对抗温漂带来的Q点上移（[BJT温度影响](https://o2ywbvn10e.feishu.cn/docx/QqtxdxgWVoAs3uxso04c8pFAnFh#share-XQ2UdK7f2oXM2OxO3s0cApMen5d)）
- 对于直流信号来说，温度上升后，Ic变大，则Ie也变大，E点电位上升，BE两端电位下降（B点偏置认为稳定），由输入特性曲线得，Ib减小，从而抑制Ic

![图片展示了标题“](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-8d29b093f2.png)

- 抓住主要矛盾：$U_B\approx\frac{R_{b2}}{R_{b1}+R_{b2}}V_{cc}$，后面的Q点参数都好求

![图片展示了分压偏置电路中Q点参数的计算公式。上方黄色框内为基极电压U_B的计算公式，即U_B约等于R_b2除以R_b1加R_b2再乘以Vcc。下方紫色框内是集电极电流I_C的计算公式，I_C约等于I_E，等于U_E除以R_e，也等于(U_B减U_BE)除以R_e。蓝色框内是基极电流I_B的计算公式，I_B等于I_C除以β。绿色框内是集电极-发射极电压U_CE的计算公式，U_CE等于Vcc减I_CR_C减I_ER_e。最下方蓝色框内是U_BE约等于0.7V。这些公式与上下文介绍的分压偏置电路Q点参数计算相关。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-61f20f83c2.png)

- 精确Q点计算（没啥印象）

![图片展示了分 addCriterion图片描述专家](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-4819a5ac9c.png)

- 去掉旁路电容$C_E$后

![图片展示了分压偏置共射放大电路去掉旁路电容CE后的等效电路。左侧为原电路图，右侧是去掉CE后的等效电路图，箭头标注了各电流方向。等效电路中，输入信号ui经Rb1、Rb2分压后加至基极，发射极有Rb、rbe、Re等元件，集电极有Rc、RL等元件。图片下方蓝色框内文字“去掉CE后，Au变小”表明去掉旁路电容后，电压增益Au会减小，与上下文讨论电路设计思路中关于去掉旁路电容后Q点参数变化的内容相呼应。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e8aeed4d03.png)

#### 电路设计思路

1. $I_c \approx 1,2mA$
2. 空载下$U_{CEQ} \approx 0.5V_{CC}$，负载下小于（交流负载线）
3. $R_c \approx 2K \quad R_E \text{比较小}$
4. $R_1,R_2$几十KΩ，需要保证$I_{R_2}>>I_B$

### BJT放大电路

一图以蔽之，自己推一遍

![图片展示了三种BJT放大电路的类型及特点。上方文字说明了共射、共集、共基电路的特点，如共射电路电压增益大、共集电路适用于信号跟随等。下方分别以电路图形式呈现了共射、共集、共基电路，各电路图中标注了、集电极、发射极等标注清晰，还标注了输入电阻、输出电阻等参数。该图与上下文紧密相关，是对BJT放大电路设计思路中电路类型及特点的直观呈现。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-00e52faeb1.png)

### 场效应管放大电路

**基本接法**

![图片展示了场效应管放大电路的三种接法。左侧为共源接法，标注“共源uGS->iD”，输入信号从栅极g输入，输出信号为d�������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������� addCriterion](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-92c1dd4447.png)

#### 基本电路与Q点

压控电源流的特性使得栅极电流忽略不计，进而有$U_{\mathrm{GS}}=V_{\mathrm{GG}}$

1. **基本共源放大电路**

![图片展示了基本共源放大电路的图解法与解析法。图解法中，直流负载线方程为uDS = VDD - iDRd，因UGS = VGG，可得IDQ和UDSQ。解析法给出uDS = VDD - iDRd和iD = ID0(UGS/UGS(th) - 1)²的方程。电路图中，T为场效应管，Rg、Rd为电阻，VGG为偏置电压，uI为输入信号，uO为输出信号。下方有iD和uDS的图像，Q点位于交点。该图与上下文介绍的基本共源放大电路内容紧密相关，直观呈现了电路工作原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-2fb9ced377.png)

1. **自给偏压放大电路**

存在一个负偏

![图片展示了自给偏压放大电路的电路图及Q点计算公式。电路图中，(a)图是自给偏压放大电路，(b)图是其简化版。图中包含场效应管、电源、电阻、电容等元件。Q点计算公式为：U_{GSQ} = -I_{DQ}R_{S}，U_{DSQ} = V_{DD} - I_{DQ}(R_{d} + R_{S})，I_{DQ} = I_{DSS}(1 - \\frac{U_{CSQ}}{U_{GS(off)}})^{2}。该图与上下文介绍的自给偏压放大电路相关，用于说明电路结构及Q点计算方法。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-6b6057679f.png)

1. **分压偏置放大电路**

大电阻$R_{g3}$减小分流，类似电压跟随，仅提供电平

![图片展示了分压偏置放大电路的电路图及Q点计算公式。电路图中，场效应管、电阻、电容等元件组成放大电路，标注了输入信号ui、输出信号uo等。公式部分，通过已知UGS(th)计算UGSQ、IDQ、UDSQ，可解出Q点参数。底部文字说明该电路产生的栅源电压可正可负，适用于所有场效应管电路，还标注了为增加R1～数MΩ的提示。此图与上下文介绍的分压偏置放大电路内容紧密相关，是对电路工作原理的直观呈现。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-9c901ec632.png)

---

#### 微变等效电路

![图片 addCriterion图片展示了场效应管放大电路及其微变等效电路 addCriterion图片展示了场效应管放大电路及其微变等效电路。图(a)是场效应管放大电路，标注有栅极（g）、源极（s）、漏极（d）等端口，以及输入电压Ugs。图(b)是其微变等效电路，将场效应管简化为压控电流源g_mUgs，串联r_ds电阻，Ugs addCriterion图片展示了场效应管放大电路及其微变等效电路。图(a)是场效应管放大电路，标注有栅极（g）、源极（s）、漏极（d）等端口，以及输入电压Ugs。图(b)是其微变等效电路，将场效应管简化为压控电流 addCriterion addCriterion图片展示了场效应管放大电路及其微变等效电路。图(a)是场效应管放大电路，标注有栅极（g）、源极 addCriterion图片展示了场效应管放大电路及其微变等效电路。图(a)是场效应管放大电路，标注有栅极（g）、源极（s）、漏极（d）等端口，以及输入电压Ugs。图(b)是其微变等效电路，将场效应管简化为压控电流源g_mUgs，串联r_ds电阻，Ugs为输入电压，Uo为输出电压。图片与上下文的关系是，上下文介绍了场效应管放大电路的输入与输出电压、放大倍数、输入阻抗、输出阻抗等参数，此图直观呈现了电路结构，辅助理解相关参数。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-ae068e7a7f.png)

**跨导计算**

$$g_m=\frac{\partial i_D}{\partial u_{GS}}|_{u_{DS}}=\begin{cases}\frac{2}{U_{GS(th)}}\sqrt{I_{DO}I_{DQ}}&\text{n沟增强}\\\frac{-2}{U_{GS(off)}}\sqrt{I_{DSS}I_{DQ}}&\text{n沟耗尽,J}&\end{cases}$$

##### 共源放大电路

<grid>
<column width-ratio="0.500000">
![图片展示了共源放大电路的微变等效电路图。电路中，栅极输入端有Rg1、Rg2、Rg3等电阻，栅极输入电压为Ugs，输出端有Rd、RL等电阻，输出电流为id，输出电压为Ugs。图中还标注了输入阻抗Ri、输出阻抗Ro、跨导gm等参数，以及id、Ugs、Rd、RL等变量。该图与文档中共源放大电路内容相关，直观呈现了电路结构及参数，辅助理解输入与输出电压、放大倍数、输入阻抗、输出阻抗等计算公式。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-2a9e4d3dba.png)
</column>
<column width-ratio="0.500000">
![图片展示了 addCriterion<qa:image></qa>](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-88d1b4c331.png)
</column>
</grid>

输入与输出电压：

$$\dot{U}_i=\dot{U}_{gs} \quad \dot{U}_o=-g_m\cdot\dot{U}_{gs}\cdot(R_D\parallel  R_L)$$

放大倍数：

$$\dot{A}_u=\frac{\dot{U}_o}{\dot{U}_i}=-g_m\cdot R_L^{\prime}$$

输入阻抗：

$$R_i=R_{g3}+R_{g1}\parallel R_{g2}$$

输出阻抗：

$$R_O=R_D$$

---

##### 共漏放大电路

![图片展示了共漏放大电路的分析电路图。上方电路图中，VDD为电源，Rg1、Rg2、Rg3为偏置电阻，C1、C2为耦合电容，RL为负载电阻，Ri为输入电阻，Ro为输出电阻。下方电路图中，VDD、Rg1、Rg2、Rg3、C1、C2、RL、Ri、Ro等元件位置与上方相同，但Vgs、Vs、Ri、Ro旁有标注，Vgs旁有g_m符号，Vs旁有g_mVgs符号。该图与上下文共同呈现共漏放大电路的结构与参数分析。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-94aaaa84b5.png)

**微变参数**

$$\begin{aligned}&\dot{U}_{\mathrm{i}}=\quad\dot{U}_{\mathrm{gs}}+g_{\mathrm{m}}\dot{U}_{\mathrm{gs}}(R_{s}\|R_{\mathrm{L}})\\&\dot{U}_{\mathrm{o}}=\quad g_{\mathrm{m}}\dot{U}_{\mathrm{gs}}(R_{S}\|R_{\mathrm{L}})\\&\dot{A}_{u}=\quad\frac{\dot{U}_{\mathrm{o}}}{\dot{U}_{\mathrm{i}}}\quad=\frac{g_{\mathrm{m}}(R_{S}\|R_{\mathrm{L}})}{1+g_{\mathrm{m}}(R_{S}\|R_{\mathrm{L}})}\quad\approx 1\end{aligned}$$

$$R_{\mathrm{i}}=R_{\mathrm{g3}}+(R_{\mathrm{g1}}\parallel R_{\mathrm{g2}})$$

$$R_o=\frac{\dot{U}_o}{\dot{I}_o}=\frac{1}{\frac{1}{R_S}+g_m}=R_S\parallel\frac{1}{g_m}$$

---

### 派生电路

- **复合管，以T1为准**

![图片中展示了复合管的结构。图中以T1为准，分别标注了T1和T2的电流方向，T1的电流为i_{b addCriterion图片位于文档“派生电路”部分，是复合管结构的示意图。图中以T1为准，分别标注了T1和T2的电流方向，T1的电流为i_{b11}（i_{b12}），T2的电流为i_{b21}（i_{b22}）。图中还 addCriterion图片位于文档“派生电路”部分，是复合管结构的示意图。图中以T1为准，分别标注了T1和T2的电流方向，T1的电流为i_{b11}（i_{b12}），T2的电流为i_{b21}（i_{b22}）。图 addCriterion图片位于文档“派生电路”部分，是复合管结构的示意图。图 addCriterion图片位于文档“派生电路”部分，是复合管结构的示意图。图中以T1为准，分别标注了T1和T2的电流方向，T1的电流为i_{b11}（i_{b12}），T2的电流为i_{b21}（i_{b22}）。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-1b9ab8438d.png)

![图片中展示了复合管放大电路及其微变等效电路，包括电路图（a）和等效电路图（b）。电路图中，T1和T2为复合管，Rb、Rc、Rl、C1、C2为相关元件，u1和uo为输入和输出电压。等效电路中突出显示了β1、β2、rbe1、rbe2等参数。下方公式计算了复合管放大电路交流参数，表明复合管放大电路的电压增益与β、rbe等参数相关。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-ee443c7d6e.png)

![图片展示了复合管放大电路及其等效电路。图（a）是复合管放大电路，由T1和T2组成，有输入信号ui、输出信号uo、电源Vcc等。图（b）是其等效电路，标注了各电流、电压参数。下方公式表明复合管输入电阻比单管大，输出电阻与单管相同。该图与上下文紧密相关，是对复合管放大电路结构及等效电路的直观呈现，帮助理解其工作原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-9b516635f6.png)

---

## 多级放大电路

### 耦合方式

- **直接耦合**

  - 放大缓慢变换的信号
  - 无电容，便于集成化
  - Q点影响，温漂逐级累积
- **阻容耦合**

  - 各级独立（计算Q点时）
  - 温漂较小
  - 不适合集成，不适合缓变信号
- **变压器耦合**

  - 阻抗变换
  - 高频放大
  - 笨重
- **光电耦合**

  - 电隔离

### 多级放大

- 后级的输入阻抗作为前级的负载
- 前级的输出阻抗作为后级的信号源阻抗

![图片展示了多 addCriterion图片位于介绍多级放大电路耦合方式相关内容之后，用于说明多级放大电路中阻容耦合的特点。图中电路包含两个放大级，标注了各级的输入输出电压及阻抗，如输入电压Vi1、Vi2，输出电压Vo1、Vo2，以及各级的输入输出阻抗Ri1、Ri2，Ri11、Ri12，Ri21、Ri22。下方文字总结了阻容耦合的特点：后级的输入阻抗是前级的负载，前级的输出阻抗是后级的信号源阻抗。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-f3ff209acc.png)



!!! example "例"
    
    ![图片展示了多级放大电路的电路图。左侧为输入级，有信号源US、电阻RS、电容C1、电阻R1、晶体管T1、电阻RE1等元件；中间为中间级，有电容C2、电阻R2、晶体管T2、电阻RC2等元件；右侧为输出级，有电容C3、电阻RL、晶体管T2、电阻RE2等元件。各元件参数标注清晰，如R1为1MΩ、C1为电容、US为信号源等。该图与上文多级放大电路耦合方式的内容相关，直观呈现了电路结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-75c7aac7a1.png)
    
    ![图片展示了多级放大电路的耦合方式。电路由三部分组成，左侧为输入级，有信号源US、电阻RS、电容C1、电容C2、电阻R1、电阻RE1、电容C3、电阻R2、电阻R3、电容C4、电阻RC2、电阻RL等元件；中间为中间级，有晶体管Q1、晶体管Q2；右侧为输出级，有晶体管Q3。各部分间通过耦合电容C1、C2、C3、C4连接，电路中还标注了电流i_b1、i_b2、i_b3，以及电压U_i、U_o等。该图与上文多级放大电路耦合方式的计算公式等内容相呼应。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b945b6128d.png)
    
    $$R_i=R_1\parallel [r_{be1}+(1+\beta)R_{L1}^{\prime}]$$
    
    $$R_o=R_{o2}=R_{C2}$$
    
    $$\dot{A}_{us1}=\frac{R_i}{R_i+R_s}\cdot\dot{A}_{u1}\quad\dot{A}_{u1}=\frac{(\beta+1)R_{L1}^{\prime}}{r_{be1}+(\beta+1)R_{L1}^{\prime}}$$
    
    $$\dot{A}_{u2}=-\frac{\beta R_{L2}^{\prime}}{r_{be2}}$$
    
    $$\dot{A}_{us}=\dot{A}_{us1}\times\dot{A}_{u2}$$
    
### 长尾式差分放大

为克服温漂而生

![图片](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-1a11999e53.png)

#### Q点计算

- $U_{BQ}=0V$
- $I_{\mathrm{Re}}=\frac{-0.7V-(-V_{\mathrm{EE}})}{R_{\mathrm{o}}}$
- $I_{\mathrm{CQ1}}=I_{\mathrm{CQ2}}=I_{\mathrm{CQ}}\approx I_{EQ}=\frac{1}{2}I_{\mathrm{Re}}$
- $I_{\mathrm{BQ1}}=I_{\mathrm{BQ2}}=\frac{I_{\mathrm{CQ}}}{\beta}$
- $U_{\mathrm{CEQ1}}=U_{\mathrm{CEQ2}}=V_{\mathrm{CC}}-I_{\mathrm{CQ}}R_{\mathrm{C}}-(-0.7)$

通过完全一样的参数和$R_e$（自带两倍功效）实现共模抑制，即：$u_{0}=(u_{\mathrm{C1}}+\Delta u_{\mathrm{C1}})-(u_{\mathrm{C2}}+\Delta u_{\mathrm{C2}})=0$

> 共模抑制比：$\mathrm{CMRR}=20\log_{10}(\frac{\mathrm{A_d}}{\mathrm{A_c}})$，越大越好

#### 等效模型

![图片展示了长尾式差分放大电路的等效模型。上方电路图中，输入信号ui1d、ui2d分别通过Rb1、Rb2加到T1、T2基极，集电极分别有Rc1、Rc2，发射极有Re，还有VCC、VEE电源。下方是等效电路，将T1、T2基极信号源等效为电流源，发射极电阻等效为内阻，集电极电阻等效为外阻，直观呈现了信号传输与放大过程中的等效关系。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-245f2de28e.png)

#### 四种常见组态

- 指标仅与输出方式有关
- 为进一步抑制漂移，可将Re换成恒流源，并增加调零电路（e极增加Rw）

![图片展示了长尾式差分放大电路的电流源电路部分，并进行电路分析。电路中包含三极管T3，以及电阻R1、R2、R3等。分析得出IC3≈IE3≈常\[公式\]，即IC3≈IE≈常数。该图片与上文介绍长尾式差分放大电路的内容相关，是对电路中电流关系的数学描述，帮助理解电路工作原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-682dbdcaa7.png)

- **双入双出**

![图片展示了双入双出长尾式差分放大电路的电路图。电路中包含两个晶体管T1和T2，分别连接有基极电阻Rb、集电极电阻Rc和发射极电阻Re。T1的发射极与T2的基极通过Re连接，T2的发射极接地。T1的集电极与T2的集电极分别通过Rc与电源VCC连接，T1的集电极还通过Rc与负载RL连接。左侧有差分输入信号源，右侧有输出信号vO1和vO2。该图与上文介绍的双入双出长尾式差分放大电路的内容相呼应，直观呈现了电路结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-5eac0427cd.png)

**差模放大倍数**

$$A_\mathrm{d}=-\frac{\beta(R_\mathrm{c}\parallel {R_\mathrm{L}}/{2})}{R_b+r_\mathrm{be}}$$

**共模放大倍数**

$$A_{c}=0$$

**输入阻抗**

$$R_\mathrm{i}=2(R_b+r_\mathrm{be})$$

**输出阻抗**

$$R_{\mathrm{o}}=2R_{\mathrm{c}}$$

- **双入单出**

<grid>
<column width-ratio="0.500000">
![图片展示了双入单出长尾式差分放大电路的电路图。电路中，T1和T2为晶体管，T1的基极通过Rb1与输入信号v11相连，T2的基极通过Rb2与输入信号v12相连。T1和T2的集电极分别通过Rc与电源VCC和地相连，发射极通过Re与地和电源VEE相连，发射极间有RL。该电路用于差分放大，可进一步抑制漂移，与上下文介绍的双入单出长尾式差分放大电路结构相呼应。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-f37c9ad7c7.png)
</column>
<column width-ratio="0.500000">
![图片展示了������](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-da5a2f997f.png)
</column>
</grid>

**差模放大倍数**

$$A_\mathrm{d}=-\frac{\beta(R_\mathrm{c}\parallel R_\mathrm{L})}{2(R_\mathrm{b}+r_\mathrm{be})}$$

**共模放大倍数**

> 共模下需要考虑$R_e$

$$A_{c}=\frac{\Delta u_{\mathrm{OC}}}{\Delta u_{\mathrm{IC}}}=-\frac{\beta(R_{c}\parallel R_{L})}{R_{b}+r_{bc}+2(1+\beta)R_{c}}\approx-\frac{R_{L}^{\prime}}{2R_{c}}$$

共模抑制比为

$$\begin{aligned}K_{CMR}&=\left|\frac{A_{\mathrm{d}}}{A_{\mathrm{c}}}\right|\\&=-\frac{R_{b}+r_{be}+2(1+\beta)R_{e}}{2(R_{b}+r_{be})}\end{aligned}$$

**输入阻抗**

$$R_\mathrm{i}=2(R_b+r_\mathrm{be})$$

**输出阻抗**

$$R_{\mathrm{o}}=R_{\mathrm{c}}$$

- **单入双出**

需要先进行信号的分解，将单端等效为双端输入

对于输入的任意俩信号，都可以分出差模信号与共模信号

$$u_{\mathrm{Id}}=u_{\mathrm{I1}}-u_{\mathrm{I2}}$$

$$u_{\mathrm{Ic}}=(u_{11}+u_{12})/2$$

![图片为单入单出电路的示意图，展示了输入信号uI的波形。图中uI1和uI2分别代表输入信号的两个不同电平，二者在时间 addCriterion图片](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-64d09d524f.png)

![图片展示了长尾式差分放大电路单入单出时的动态参数计算。电路中有两个晶体管T1](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-83dfaf4e9f.png)



- **单入单出**

$$\Delta u_o=A_cu_{Ic}+A_du_{Id}$$

![图片展示了单端输入单端输出的长尾式差分放大电路及相关公式。电路中T1、T2为晶体管，Rc、Rb、Re等为电阻，Ri、Ro为输入、输出电阻。公式包括差分放大电路的输出电压公式、差分放大倍数A_d](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-082c17f868.png)

---

!!! example "例"
    
    ![图片是例题2，给出多级放大电路参数，求u1。电路中T1、T2为晶体管，Rb、Rc、Rl等为电阻，Vcc、Vee为电源。已知β1=β2=100，rbe=2kΩ，Rb=1kΩ，Rc=10kΩ，RL=5.1kΩ，Vcc=12V，ICQ=0.5mA。uO=3.5V（万用表测）。解题中计算出UcQ1=2.36V，ΔuO=0.64V，ΔuI=-11.4mV。图片与上下文紧密相关，通过具体数值和计算过程，展示了长尾式差分放大电路中求u1的计算方法。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-8d820adfd4.png)
    
---

## 集成运放

### 特点

- 对称
- 多管子少电阻
- 直接耦合
- 三极管构建恒流/恒压源
- 由输入、输出、放大、偏置电路构成

![图片展示了集成电路放大器内部组成原理图，包括差分输入级、电压放大级、输出级、，以及偏置电路。图中还标注了对输入级、中、输出级的要求，如输入级要求减小零点漂移、提高KCMR、输入阻抗大；中级要求放大倍数大；输出级要求提高带负载能力、输出电流大。偏置电路为各级设置合适的工作点。该图与文档中介绍集成运放特点的内容相关，直观呈现了集成运放的内部结构及各部分功能。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-8865466fd6.png)

---

### 电流源

- **镜像**

$$\begin{aligned}I_{\mathbf{R}}&=\frac{V_{\mathrm{CC}}-U_{\mathrm{BE}}}{R}\quad\text{(常数)}\\&=I_{\mathrm{C}}+2I_{B}=I_{\mathrm{C}}+2\frac{I_{C}}{\beta}=\frac{2+\beta}{\beta}I_{\mathrm{C}}\end{aligned}$$

![图片展示了威尔逊电流源 addCriterion源电路图。电路中，T0、T1为晶体管，R为电阻，+VCC为电源。图中标注了电流方向和数值，如IR、IC0、IC1、IB0、IB1、2IB等。该图与文档中介绍威尔逊电流源的内容相关，直观呈现了威尔逊等式中电流关系，帮助理解威尔逊电流源在电路中的工作原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-4184688fe5.png)

进一步优化：

$$I_{C1}=\frac{\beta^2+\beta}{\beta^2+\beta+2}I_R$$

![图片展示了威尔逊电流源电路。电路中，+VCC电源通过电阻R与T2管的基极相连，T0、T1、T2均为三极管，T0、T1的发射极相连，T2的发射极与T0、T1的基极相连。各三极管的基极、发射极分别标注有电流I_B0、I_B1、I_B2、I_C0、I_C1。该电路用于进一步优化威尔逊电流源，使I_C与I_R更接近，是文档中介绍电流源相关内容的电路示例。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-71f68bf4db.png)

**威尔逊电流源**

$I_{\mathrm{C}}\text{与}I_{\mathrm{R}}$更接近了



![图片展示了威尔逊电流源电路。电路中，T0、T1、T2为三极管，T0、T1基极相连，T2基极与T1集电极相连，T2集电极接地。T0、T1发射极分别接电阻R，T2发射极接电源Vcc。T0、T1发射极电流分别为IC0、IC1，T2发射极电流为IC2，T2基极电流为IB2，T0、T1基极电流均为2IB。该电路用于构建更接近威尔逊电流源的电路，是威尔逊电流源电路的示例。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-112e6b9016.png)

- **比例**

$$I_{C1}\approx\frac{R_{e0}}{R_{e1}}I_{R}$$

![图片展示了了 addCriterion文档中介绍微电流源相关内容时，给出了一张电路图。图中电源为+VCC，有电阻R、T0、T1等元件，标注了I_R、I_C0、I_C1、I_E0、I_E1、I_B0、I_B1等电流。T0、T1为晶体管，R_{e0}、R_{e1}为电阻。该图直观呈现了微电流源电路结构，与上下文介绍的微电流源公式相呼应，帮助理解其工作原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-92c65da37b.png)

- **微电流源**

$$I_{C1}\approx\frac{U_T}{R_e}\ln(\frac{I_R}{I_{C1}})$$

![图片展示了威尔逊电流源 addCriterion源电路图。图中包含电源+Vcc、电阻R、晶体管T0和T1、](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-8bc31ec869.png)

---

### 典型集成运放

<grid>
<column width-ratio="0.500000">
![图片展示了集成运放的电路结构，分为输入级、中间级和输出级。输入级由T1 - T4管构成，T10、T1](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-23b104c78e.png)
</column>
<column width-ratio="0.500000">
![图片展示了集成运放的内部电路结构。输入电路部分，T1、T2、T3、T4组成共集一共基复合差动输入电路，T5、T6、T7、R1、R2、R3组成镜像电流源，作为差动输入级的有源负载。中间级T16和T17是复合管组成的共射放大电路，T13管作集电极有源负载。输出级T14和T18、T19管组成互补输出级，T15与R4、R5组成电压源提供静态偏置，D1、D2为过流保护电路。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-4aa9857535.png)
</column>
</grid>

![图片展示了集成运放的等效电路。左侧为输入等效电路，包含两个电流源IIO/2、IIO、IIB、IIB，以及电压源UIO、电阻r_id等；中间是简化等效电路，有电压源u1、电流源A_oo、r_id等；下方是输出等效电路，有电压源A_oe、A_od、r_o等；最右侧是理想运放等效电路，标注了A_od、K_CMR、r_id、f_C、S_R等参数均为无穷大，r_o、U_IO、I_IB、I_IO等参数均为0。该图与文档中介绍集成运放特点的内容相关，直观呈现了其等效电路结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-be659c430a.png)

### 运放常用指标

> 分别从输入、偏置、放大、输出去考虑

- 输入阻抗、偏置电流（共模抑制比）
- 压摆率
- 增益带宽积（开环差模增益、带宽）
- 输出阻抗、带载能力、失调电压

---

### 常见类型

- 高精度（共模抑制比高）
- 低功耗
- 高速（大压摆率，高带宽[高频敏感、鲁棒性差]）
- 高阻（采样保持电路、带通滤波器）
- 大功率、高压



推挽输出，加二极管避免交越失真

![图片展示了在运放输出端的 addCriterion端加一级射极输出器或互补输出级的电路图。图（a）为加射极输出 addCriterion输出器电路，运放A的输出经T管、RL电阻后输出；图（b）为加互补输出级电路，运放A的输出经T1、T2管、D1、D2二极管后输出。该图与上下文紧密相关，上下文提到“在运放的输出端加一级射极输出器或互补输出级”，此图直观呈现了这两种加法措施的电路结构，帮助理解其工作原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a26ba6eeec.png)

---

## 频响

考虑高频下带来的极间电容

### 滤波与波特图

**低通/高通**



<grid>
<column width-ratio="0.500000">
$$\dot{A}_u=\frac{\dot{U}_\mathrm{o}}{\dot{U}_\mathrm{i}}=\frac{\frac{1}{j\omega C}}{R+\frac{1}{j\omega C}}=\frac{1}{1+j\omega RC}$$
$$\dot{A}_u=\frac{1}{1+j\frac{f}{f_H}}$$
![图片展示了RC电路的电路图。图中 自动生成 addCriterion图片位于文档中“滤波与波特图”部分，是对RC电路的电路图展示。图中R表示电阻，C表示电容，U₁和U₀分别标注了输入和 addCriterion图片位于文档中“滤波与波特图”部分，是对RC电路的电路图展示。图中R表示电阻，C表示电容，U₁和U₀分别标注了输入和输出电压，箭头指向对应电压。该图与上下文内容紧密相关，直观呈现了RC电路结构，为后续分析低通、高通滤波器的频率响应等奠定基础。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b07aabfadb.png)
![图片展示了低通滤波器的1 的波特图，横轴 addCriterion addCriterion](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-2f4b522337.png)
</column>
<column width-ratio="0.500000">
$$\begin{aligned}\dot{A}_{u}&=\frac{\dot{U}_{0}}{\dot{U}_{1}}=\frac{R}{R+\frac{1}{j\omega C}}=\frac{1}{1+\frac{1}{j\omega RC}}\\&=\frac{j\omega RC}{1+j\omega RC}\end{aligned}$$
$$\dot{A}_u=\frac{1}{1+\frac{f_L}{jf}}\quad=\frac{j\frac{f}{f_L}}{1+j\frac{f}{f_L}}$$
![图片展示了RC低通滤波电路的电路图。图中有两个电压源，上方为正极，下方为负极，分别标有U_i和U_o。电路中串联了一个电阻R和一个电容C，电阻R连接在U_i和U_o之间，电容C与U_i相连。该电路图与文档中关于RC低通滤波电路的描述相呼应，直观呈现了电路结构，为理解低通滤波原理提供可视化参考。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-3f7559e98b.png)
![图片是一幅波特图，展示了幅值和相位随频率变化的关系。横坐标为频率f，纵坐标上方为20lg|Au|/dB，下方为φ。图中红色折线代表幅值变化，从0dB在0.1fL处下降至-3dB，再在10fL处保持不变；橙色折线代表相位变化，从+90°在0.1fL处下降至+45°，再在10fL处保持不变。该图与上文关于低通/高通滤波器的幅值和相位变化分析相呼应，直观呈现了频率变化对幅值和相位的影响。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b53a8415ab.png)
</column>
</grid>



!!! example "例"
    
    注意负号说明相位倒π
    
    ![图片展示了放大电路的波特图�� addCriterion 自动生成](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e48c275486.png)
    
---

### 再探放大电路

![图片展示了 addCriterion<qa:image_id>image1</qa:image_id>展示了根据高频下极间电容影响画出的 addCriterion<qa:image_id>image1</qa:image_id>展示了根据高频下极间电容影响画出的图片内容](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-5c54c32d10.png)

简化为

$$f_\beta=\frac{1}{2\pi r_{_br_e}(C_\pi+C_\mu)}$$

![图片展示了三极管放大电路的交流等效电路。电路中，b点与b'点通过电阻r'bb'相连，b'点与e点通过电阻r'b'e和电容C'π相连，e点与c点通过电流源gm和电容C'π相连。各点标注有电压符号，如b点标注Ube，b'点标注Ub'e，e点标注Ue。该电路是上文放大电路内容的简化模型，用于分析放大电路的频率响应等特性。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-5201d80b6c.png)

### 单管放大分析

> **由此得到该电路的带宽**

![图片展示了单管放大电路在不同频段时电容的作用及电路简化情况。高频段时，只有C′π、C′gs起作用，C1、C2、Ce等耦合旁路电容视为短路；中频段时，C′π、C′gs视为开路，C1、C2、Ce均视为短路；低频段时，C1、C2、Ce起作用，C′π、C′gs等视为开路。图中还标注了各电容、电阻及信号源、负载等元件，直观呈现了电容在各频段的等效电路。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-aa7003dc1c.png)

<grid>
<column width-ratio="0.333333">
低频下
$$f_L=\frac{1}{2\pi(R_c+R_L)C}$$
</column>
<column width-ratio="0.333333">
高频下
$f_H=\frac{1}{2\pi RC_\pi^{\prime}}$$R=r_{b^{\prime}e}//[r_{bb^{\prime}}+R_{s}//R_{b}]$
</column>
<column width-ratio="0.333333">
![图片展示了单管放大电路的波特图，包括幅值和相位随频率变化的曲线。幅值曲线在0.1fL处开始上升，fL处达到13dB，之后保持不变，fH处再次下降；相位曲线在0.1fL处开始下降，fL处降至-90°，fH处降至-270°。该图与上文单管放大电路的带宽分析相关，直观呈现了电路在不同频率下的幅值和相位变化情况。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-ceff270870.png)
</column>
</grid>

FET（场效应管）同理

![图片展示了场效应管（FET）放大器的等效电路及频响分析。左侧为FET放大器电路图，标注有信号源、栅极电阻、源极电阻、负载电阻等。右侧是等效电路图，标注了栅极、源极、漏极等。下方有中频段、低频段、高频段的公式及频率表达式，如中频段R_L' = R_d // R_L，低频段f_L = 1 / 2πC(R_d + R_L)，高频段f_H = 1 / 2πR_g C'_gs。该图与上下文关于FET同理的分析内容相呼应，直观呈现了FET放大器的频响特性。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-0d7109fa67.png)

!!! example "例"
    
    ![图片展示了例题中放大电路的交流等效电路，包括晶体管、电阻、电容等元件。电路中，交流信号源u1经Rb1、Rb2、Rc等元件，通过晶体管T，经Rc、Rl等元件，最终输出uo。下方有时间常数法计算公式，用于计算各电容单独作用时的时间常数τ，只保留起主要作用的τ，如τ1、τ2、τe等，选取最小的τe。该图与上文例题中放大电路频率响应计算相关，用于辅助理解电路频率响应分析。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-58e70beea2.png)
    
---

### 多级放大截止频率

$$f_L\approx1.1\sqrt{\sum_{k=1}^nf_{Lk}^2}$$

$$\frac{1}{f_H}\approx1.1\sqrt{\sum_{k=1}^n\frac{1}{f_{Hk}^2}}$$

![图片展示了多级放大截止频率分析中的关键步骤。1. 利用分频段法，求每一级放大电路RC回路的时间常数τ，然后写出截止频率。2. 当回路中有多个电容时，利用时间常数法，分别计算每个电容单独作用时的时间常数τ，然后取起主要作用的时间常数τ。图片中还用红色箭头和黄色框突出标注了“其它C短路、电压源短路、电流源开路”这一内容，强调在计算电容单独作用时间常数时的处理方式，与上下文关于多级放大截止频率分析的步骤紧密相关。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-2d4ba5c22e.png)

### 负反馈稳定与裕度

自激振荡原因：相位位移超过180°，而仍在通频带内

![图片为波特图，展示了放大器增益（20lg|A|/dB）与频率（f/Hz）的关系。图中红色区域标注了通p1、10f p1、10^3f p1等频率点，以及-20dB/十倍频程、-40dB/十倍频程等增益值。在通频带以内，即f ≤ f p1时，其附加相移小于45°，引入负反馈；而在通频带以外，如在f p1频率上，附加相移达-180°，是正反馈。这说明放大器在通频带以内是负反馈，但在通频带以外的某一频率上，原负反馈变成正反馈，可能导致自激。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-fd3f26a5cf.png)

#### 平衡条件

$$\begin{aligned}|\dot{A}\dot{F}|&=1\\\angle\dot{A}\dot{F}&=(2n+1)\pi\end{aligned}$$

所以三阶RC才会产生自激

**波特图判定**

![图片展示了AF的Bode图，用于波特图判定。图中上方为20lg|AF|曲线，下方为相位φ曲线。判据为20lg|AF|=0时φ=±(2n+1)π，即当φ=±(2n+1)180°时，20lg|AF|≥0dB为自激，<0dB为不自激。还指出fc<f0时为不自激。该图与上文波特图判定内容对应，直观呈现了AF的幅值和相位随频率变化的情况，帮助理解自激与不自激的判定条件。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-104d44f8d4.png)

#### 稳定裕度

![图片展示了放大器稳定裕度的两种标准。增益裕度Gm，当AF附加相移Δφ(f) = ±(2n+1)π时，其对应的环路增益即为Gm，图中要求Gm ≤ -10dB。相位裕度φm，在20lg|AF| = 0dB时，(f = fc)，φm = 180° - |φ(fc)|，图中要求φm ≥ 45°。该图与上文介绍的稳定裕度内容相关，直观呈现了增益裕度和相位裕度的计算条件及要求。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e19cc7506d.png)

**消除方法**

- 缩减带宽

![图片展示了RC addCriterion简单滞后补偿法的波特图。图中红色折线代表放大器的幅频特性，标注有-20 dB/十倍频、-40 dB/十倍频等。黑色折线为相频特性，标注有φm = 45°。图中还标注了fH1、fH2、fH3等截止频率。文字说明将补偿电容连接在前级输出电阻和本级输入电阻都比较大的回路（即最小的fHk回路），目的是使上限截止频率下移。该图与上文介绍的消除自激振荡方法中滞后补偿法的内容相关，直观呈现了补偿电容对波特图的影响。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-df46db280f.png)

![图片展示了补偿电路及相关等效电路。左侧是包含晶体管T1、T2、电阻Rb、Rc、电容C的电路图，右侧是两个运算放大器A1、A2的电路图，以及等效电路图，其中包含电阻R01、R12、电容C、C12。图片下方文字说明“该两个电路可以等效成”，表明左侧电路与右侧电路及其等效电路在功能上有相似之处，可能是用于说明补偿电路的等效原理，与文档中RC滞后补偿内容相关。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-fcc3eb0cc8.png)

- RC滞后补偿

![图片展示了RC零](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-42b48498cc.png)

![图片展示了密勒效应补偿法和相位超前补偿法的电路及波特 addCriterion图片内容](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a283bb78a2.png)

---

## 反馈

### 基本概念

- 开环/闭环
- 正/负反馈
- 直流/交流反馈

![图片展示了三种反馈类型电路。左侧为直流负反馈电路，输入信号u1经R1、R2反馈到运放负输入；A�� addCriterion图片展示了三种反馈类型电路。左侧为直流负反馈电路，输入信号u1经R1、R2反馈到运放负输入端，R1、R2构成串联反馈网络。中间是交流负反馈电路，输入信号u1经R1、C���� addCriterion图片展示了三种反馈类型电路。左侧为直流负反馈电路，输入信号u1经R1、R2](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-aabce8e484.png)

**开环增益、反馈系数、闭环增益与环路增益**

![图片展示了负反馈放大电路的方块图表示，包含净输入、开环增益、反馈系数、闭环增益和环路增益等概念。净输入为基本放大电路输入信号与反馈信号之差；开环增益是基本放大器增益；反馈系数是反馈网络增益；闭环增益是负反馈电路增益；环路增益是反馈系数与开环增益的乘积。图中还标注了基本放大电路和反馈网络，箭头 addCriterion图片位于介绍负反馈放大电路方块图表示的上下文，是对该内容的直观呈现，帮助理解负反馈放大电路中各增益参数的含义及其在电路中的位置关系。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-4090c9ded8.png)

**反馈系数与反馈深度的关系**

![图片展示了反馈增益的计算公式及反馈深度的讨论。公式中，反馈增益A_f等于输出信号变化率与输入信号变化率之比，也可表示为A_f等于A除以1加AF。中频时A_f等于A除以1加AF。反馈深度为1加AF的绝对值，表示反馈的强弱，为实数。讨论1中，当1加AF大于1时，反馈为负反馈；小于1时，为正反馈；等于1时，无反馈。该图与上下文紧密相关，是对反馈增益计算及反馈深度讨论的数学表达。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-7579c06fdc.png)

### 基本组态

四种组态与判别方法

<grid>
<column width-ratio="0.500000">
![图片展示了四种反馈组态的名称及对应英文缩写。左侧为中文名称，分别为电压串联负反馈、电压并联负反馈、电流串联负反馈、电流并联负反馈；右侧为英文缩写，分别为series-shunt、shunt-shunt、series-series、shunt-series。该图片与文档中“反馈基本组态”部分内容相关，是对四种反馈组态名称及英文缩写的直观呈现，帮助读者更清晰地记忆和理解这些反馈组态。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-5a31b6f67c.png)
</column>
<column width-ratio="0.500000">
![图片展示了反馈基本 addCriterion addCriterion基本组态相关内容。左侧“RL短接”处，红色标注“uO = 0”，蓝色文字“反馈消失”“反馈存在”；中间“电压”“电流”对应“RL短接”；右侧“输入与反馈信号连接点”处，蓝色文字“同一点”“不同点”，红色文字“并联”“串联”。该图与上文四种组态与判别方法的内容相关，直观呈现了RL短接、反馈、连接点等关键信息。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-50fb48f845.png)
![图片展示了四种运算放大器组态电路。上方从左至右分别为电压串联、电流串联、电流并联组态，电路中包含运算放大器A、电阻R1、R2等元件，标注了输入输出电流、电压等参数。下方从左至右分别是电流](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-7c4b69bb54.png)
</column>
</grid>

![图片展示了电压负反馈电路的两种组态。左侧为电压串联负反馈，输入信号从输入端输入，经放大器放大后，输出信号通过反馈网络反馈到输入端，反馈信号与输入信号相减。右侧为电压并联负反馈，输入信号从输入端输入，经放大器放大后，输出信号通过反馈网络反馈到输入端，反馈信号与输入信号相减。该图与上下文介绍的反馈基本组态内容相关，直观呈现了两种反馈组态的电路结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-00bfd61f02.png)

![图片展示了电流反馈放大器的两种组态电路。左侧为电流串联负反馈，输入信号经放大器后，输出电流I_o通过负载电阻R_L，反馈信号为U_f，反馈系数为F_ui。右侧为电流并联负反馈，输入信号经放大器后，输出电流I_o通过负载电阻R_L，反馈信号为I_f，反馈系数为F_ii。该图与上文介绍的反馈基本组态内容相呼应，直观呈现了电流反馈放大器的两种组态形式。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a91114fe19.png)

总结表，注意下标

![图片为表6.3.1，标题为“四种组态负反馈放大电路的比较”。表格展示了电压串联式、电压并联式、电流串联式、电流并联式四种组态的输出信号、反馈信号、开环电路的放大。如电压串联式输出信号为Uo，反馈信号为Uf，开环电路的放大倍数为电压放大倍数Auu，反馈系数为Fuu。该表与上下 addCriterion图片](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-8b6bfcb456.png)

#### F与A计算

![图片为文档中“反馈基本组态”部分的插图，背景为黑色，文字为蓝色。内容为三个步骤：（1）正确判断反馈组态；（2）求解反馈系数；（3）利用F求解。该图片与上文“反馈基本组态”内容紧密相关，是对反馈基本组态计算步骤的总结，为后续F与A计算提供明确的步骤指引。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e74da4603d.png)

![图片展示了串联反馈和并联反馈的电路图，用于说明计算反馈增益F时去除X_i和基本放大电路影响的原理。串联反馈图中，输入信号U_i经放大器后，反馈信号U_f与输入信号U_i相减，再经放大器放大后输出。并联反馈图中，输入信号U_i经放大器后，反馈信号U_f与输入信号U_i相加，再经放大器放大后输出。图片与上下文紧密相关，直观呈现了反馈网络的两种组态，帮助理解计算F时去除X_i和基本放大电路影响的必要性。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-aeebbbe74a.png)

<grid>
<column width-ratio="0.500000">
![图片展示了电压串联负反馈电路及相关内容。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-f873a4eaa5.png)
$$\dot{A}_{uuf}=\dot{A}_{uf}=\frac{\dot{U}_{0}}{\dot{U}_{i}}\approx\frac{\dot{U}_{0}}{\dot{U}_{f}}=\frac{1}{\dot{F}_{uu}}$$
![图片展示了电压并联负反馈电路及相关公式。电路中，输入信号经R反馈到输入端，输出端有RL负载。左侧公式显示电流反馈系数为1/R，即 1/R，表明反馈系数与R成反比。右侧电路图中，R用红色框突出显示，箭头指向表明反馈信号方向。该图与上文电压并联负反馈内容对应，直观呈现了反馈电路结构及反馈系数计算原理。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-eab026f418.png)
$$\dot{A}_{uif}=\frac{\dot{U}_0}{\dot{I}_i}\approx\frac{\dot{U}_0}{\dot{I}_f}=\frac{1}{\dot{F}_iu}$$
$$\dot{A}_{usf}=\frac{\dot{U}_0}{\dot{U}_s}\approx\frac{\dot{U}_0}{\dot{I}_fR_s}=\frac{1}{\dot{F}_{uu}}\bullet\frac{1}{R_s}$$
</column>
<column width-ratio="0.500000">
![图片展示了电流串联负反馈电路。左侧文字说明了反馈系数计算公式，分别为Uf = RIo、Fr = Uf / Io = R。右侧电路图中，运算放大器A的输出端通过RL与负载相连，反馈支路由R构成，R与负载RL串联后与运算放大器输出端并联。该图与上文电流串联负反馈内容对应，直观呈现了电路结构，辅助理解反馈系数计算。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-796a630854.png)
$$\begin{aligned}&\dot{A}_{iuf}=\frac{\dot{I}_{0}}{\dot{U}_{i}}\approx\frac{\dot{I}_{0}}{\dot{U}_{f}}=\frac{1}{\dot{F}_{ui}}\\&\dot{A}_{uf}=\frac{\dot{U}_{0}}{\dot{U}_{i}}\approx\frac{\dot{I}_{0}R_{L}}{\dot{U}_{f}}=\frac{R_{L}}{\dot{F}_{ui}}\end{aligned}$$
![图片展示了电流并联负反馈电路及相关计算公式。左侧方框内有公式，左侧为电流反馈系数计算公式，右侧为反馈系数计算公式，均与电阻R1、R2相关。右侧电路图中，运算放大器A的输入端有标注，输出端连接负载RL，RL两端有电压Uo，RL与R1、R2组成反馈网络，R1、R2用红色框突出显示。该图与上文电流并联负反馈内容对应，直观呈现了电路结构及关键参数。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e76c621103.png)
$$\dot{A}_{iif}=\frac{\dot{I}_0}{\dot{I}_i}\approx\frac{\dot{I}_0}{\dot{I}_f}=\frac{1}{\dot{F}_{ii}}$$
$$\dot{A}_{usf}=\frac{\dot{U}_0}{\dot{U}_s}\approx\frac{\dot{I}_0R_L}{\dot{I}_fR_s}=\frac{1}{\dot{F}_{ii}}\bullet\frac{R_L}{R_s}$$
</column>
</grid>

### 负反馈对放大电路性能的影响

- 放大倍数衰减

![图片展示了深度负 addCriterion addCriterion](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-bc049909ea.png)

- 串联负反馈增加输入阻抗，并联反之，倍数皆为`1+AF`
- 电流负反馈增加输出阻抗，电压反之，倍数皆为`1+AF`
- 频带展宽，上下限均为倍数为`1+AF`

![图片是一幅幅值对频率的对数坐标图，横轴为频率f（Hz），纵轴为20lg|A|（dB）。图中有两条曲线，蓝色曲线代表放大倍数A，红色曲线代表增益的幅值。图中还标注了频率的上下限，分别为f_Lf、f_L、f_H、f_Hf。该图与文档中“频带展宽，上下限均为倍数为1+AF”内容相关，直观呈现了放大电路在不同频率下的增益变化情况。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-c705ac45ba.png)

![图片展示了如何引入负反馈的内容，分为10个步骤。步骤1为稳定工作点，引入直流负反馈；步骤2为改善动态特性，引入交流负反馈；步骤3为减小输出电阻，引入电压负反馈；步骤4为增大输出电阻，引入电流负反馈；步骤5为增大输入电阻，引入串联负反馈；步骤6为减小输入电阻，引入电流串联负反馈；步骤7为u→i，引入电压并联负反馈；步骤8为i→u，引入电流并联负反馈；步骤9为i→i，引入电流串联负反馈；步骤10为u→u，引入电压串联负反馈。这些步骤与上文介绍的负反馈对放大电路性能的影响相呼应，为引入不同类型的负反馈提供了具体操作指引。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b66354900a.png)

---

## 运放运算

不再赘述

---

## 波形发生与信号变换

### 正弦波发生

正反馈，震荡条件

$$\begin{vmatrix}\dot{A}\dot{F}\end{vmatrix}=1\\\angle\dot{A}\dot{F}=2n\pi$$

![图片展示了正弦振荡电路的组成与分类。组成方面为放大电路、反馈网络、选频网络、稳幅环节；分类按选频网络的组成分为RC、LC、石英晶体振荡电路，其中RC对应低频，LC对应高频。图片与上下上文内容紧密相关，是对正弦振荡电路组成与分类的总结，帮助理解正弦振荡电路](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-7a71e6979e.png)

#### RC文氏桥

> **增益为3**

![图片展示了RC桥式正弦波振荡电路。电路中包含运放A、电阻R、电容C、热敏电阻Rf、二极管等元件。电路连接部分说明了稳幅环节，当Uo较大时，Rf↓或R1↑，使Au=3。还给出了两种稳幅方法：方法1是热敏电阻（负温度系数）替换Rf，方法2是热敏电阻（正温度系数）替换R1。电路反馈、选频网络部分指出，当f=f0=1/2πRC时，|F|Max=1/3，φ=0。放大电路部分说明是同相放大电路，Au=1+Rf/R1略大于3。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-88e03059eb.png)

#### LC震荡

<grid>
<column width-ratio="0.500000">
![图片展示了LC并联谐振回路的频率特性。左侧电路图中，L、C并联，有电阻R。右侧电路图中，R被绿色圆圈标注，说明考虑了L的电阻。下方公式计算阻图计算出：阻抗Z = (jωC (R + jωL)) / (1 / jωC + R + jωL)，当R << ωL时，简化为1 / (jωC) jωL / (R + j(ωL - 1 / ωC))。该图与](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a3d1da05fe.png)
![图片展示了LC选频放大电路及其相关特性。电路中包含晶体管T、电感L、电容C、电阻R等元件。右侧有幅值和相位随频率变化的曲线图，展示了不同Q值（Q值大、Q值小）时的阻抗Z和相位φ随频率f的变化情况，其中Q值大时曲线峰值更明显，相位变化更剧烈。该图与上下文介绍的LC震荡电路相关，直观呈现了LC电路的选频特性。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-14a61140e2.png)
</column>
<column width-ratio="0.500000">
![图片展示了LC振荡电路的品质因数Q、谐振频率f0、阻抗Z、相位φ等关键参数的计算公式，以及品质因数Q值大小对电路的影响。其中，品质因数Q = ω0L/R = 1/ω0RC，反映R的损耗大小（几十~几百）。还给出了谐振时ω0L - 1/ω0C = 0的条件。下方有两幅图，左图是Z值随频率变化的曲线，Q值大时曲线峰值高，Q值小时峰值低；右图是φ值随频率变化的曲线，Q值大时曲线在0°附近，Q值小时曲线在90°附近。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-7c7cca8794.png)
</column>
</grid>

#### 变压器反馈

<grid>
<column width-ratio="0.500000">
电感反馈
![图片 addCriterion图片展示了电感反馈式正弦波振荡电路的电路构成及工作原理。电路中包含电源、电容、电感、晶体管等元件。上方标注了振荡频率公式f0 = 1 / (2π√L'C)，其中L为L1 + L L2 + 2M。下方说明当C采用可变电容时，可获得调节范围较宽的振荡频率，对高频率信号具有较大电抗，输出电压波形中常含高次谐波。该图与上下中上文介绍的电感反馈式正弦波振荡电路内容相。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-6b3de962f5.png)
</column>
<column width-ratio="0.500000">
电容反馈
![图片展示了电容反馈式正弦波振荡电路，即哈特莱振荡器的电路图及相关信息。电路中包含电感L、电容C1、C2、C3，以及晶体管T等元件。左侧标注有输入信号ui，右侧有输出信号uf。电路构成及工作原理、振荡频率和起振条件等内容被突出显示，振荡频率公式为f0 = 1 / (2π√LC')，其中C' = C1C2 / (C1 + C2)。该图与文档中介绍的电容反馈式正弦波振荡电路内容相契合，直观呈现了电路结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-6155285117.png)
</column>
</grid>

#### 石英晶体震荡

> **参见通信电子线路**

![图片介绍了石英晶体振荡电路的相关知识。左侧展示了石英晶体的外形、结构及符号，等效电路为RC文氏桥。右侧是石英晶体的频率特性曲线，标注了串联谐振频率fs和并联谐振频率fp。还列出了模拟晶体机械振动惯性和摩擦损耗的参数L和R，以及静态电容C0、晶体弹性电容C的数值范围，还给出了串联谐振和并联谐振频率的计算公式。该图与上下文紧密相关，是对石英晶体振荡电路的详细说明。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-b10dda438c.png)

---

### 比较器

#### 单限比较

![图片展示了单 addCriterion单限比较器的电路与电压传输特性。电路中，运放A的同相输入端接参考电压U_REF，反相输入端接输入电压u_I，输出端经R电阻连接负载。电压传输特性图中，当u_I < U_T时，u_O = -U_L；当u_I > U_T时，u_O = +U_L。图中还标注了虚断成立、叠加原理等关键信息，以及U_T = -R_2/R_1 * U_REF的计算公式，与上下文介绍的单限比较器工作原理相呼应。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-1115e360ed.png)

#### 滞回比较器

![图片展示了反相滞回比较器电路及相关计算公式。电路中包含运放、电阻R1、R2、R、Dz等元件，UREF为参考电压，UZ为反馈电压。文字说明了单限比较器工作在开环状态，干扰会使输出状态改变，希望电路具有滞回特性。通过叠加原理，推导出当uI = UT时，存在2个阈值电压U_T的计算公式。该图与上下文紧密相关，是对上文介绍的滞回比较器相关内容的直观呈现与公式支撑。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-d6ea173206.png)

#### 窗口比较器

![图片展示了单限比较器、滞回比较器和窗口比较器的工作原理及电路图。单限比较器在输入单向变化时输出只跳变一次，电路中A1、A2为运放，D1、D2为二极管。滞回比较器输入单向变化输出跳变二次，电路中A1、A2为运放，D1、D2为二极管，有UHL和UHR两个阈值电压。窗口比较器输入单向变化输出跳变二次，电路中A1、A2为运放，D1、D2为二极管，有UHL和UHR两个阈值电压。右侧为传输特性图，直观呈现了三种比较器的输出状态。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-e1f6db5561.png)

### 非正弦波发生

#### 方波发生器

> 滞回比较器+ RC电路

![图片展示了7.3.1矩形波发生电路的电路。电路是一个滞回比较器，图中给出了U_{T+}和U_{T-}的计算公式。电路分析部分，设初始时u_{C}=0，u_{O}=U_{Z}，并列出3个步骤：1. R_{3}对C充电；2. � addCriterion充电到U_{T+}后，R_{3}对C放电；3. 放到U_{T-}后，R_{3}对C充电。右侧电路图中，有R_{1}、R_{2}、R_{3}、R_{4}、C、A、D_{z}等元件，还标注了u_{N}](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-a42183a8aa.png)

三要素法解周期

$x(t)=x(\infty)+[x(0^+)-x(\infty)]e^{-t/\tau}$，$\tau = R_{eq}C ~|~ \frac{L}{R_{eq}} $

![图片展示了方波发生器的波形 addCriterion形参数计算。左侧文字说明输出电压为 ±Uz，脉冲幅度为 2Uz，脉冲周期 T = T1 + T2。右侧是方波波形图，标注了 Uc、Uo、Uz、UT+、UT-等电压点。下方公式计算 T1、T2，最终得出 T = 2R3C ln(2R1 + R2) / R2，频率 f = 1 / T，占空比 q = T2 / T = 1 / 2。该图与文档中方波发生器内容相关，直观呈现了方波参数计算过程。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-ed6ee3b855.png)

![图片展示的是锯齿波发生电路及其波形图。电路中包含运放A、电容C、电阻R1、R](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-dc73052381.png)

---

#### 三角波

> 方波 + 积分电路

![图片展示了改进的方波发生电路，包含同相滞回比较器A1、反相积分电路A2及相关元器件。电路中R1、R2、R3、R4、R5、C、U1、U2、U3、U4、U5、U6、U7、U8、U9、U10、U](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-3bbb70492c.png)

---

#### 锯齿波发生电路

![图片展示的是锯齿波发生电路的电路图及波形图。电路中包含两个运放A1、A2，多个电阻（R、R1 - R5）、电容C、二极管D1 - D2、稳压管Dz等元件。当D1通路的电阻很小时，电路会产生如图所示的锯齿波波形，波形图中展示了uO、uC随时间t的变化情况，包括uO的三角波形和uC的锯齿波形。该电路图与上下文介绍的锯齿波发生电路内容相契合。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-019cd6bedf.png)

---

### 其他电路

#### 精密整流电路

![图片展示了精密整流电路的原理及波形。电路中包含半波精密整流部分，由电阻R、电容C、二极管D1、D2和运放A1组成；反相加法器部分，由电阻R、电容C、二极管D2和运放A2组成。左侧图示了半波精密整流原理，u1正半周时D1截止、D2导通，u1负半周时D1导通、D2截止。右侧图展示了精密整流波形，u0波形为单向脉冲波。该图与文档中介绍的精密整流电路内容相契合，直观呈现了其工作原理和波形特点。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-bf04ed29c5.png)

#### VCO

![图片展示了方波发生器电路图，包含积分器和滞回比较器。左侧为积分器，由A1运放、R1、R2、C等组成；右侧为滞回比较器，由A2运放、R3、R4、D、Dz等构成。图中还标注了周期T、积分起始值、积分终止值等参数，如T≈T1，积分起始值为-Ur，积分终止值为Ur，以及Ur的计算公式。该图与文档中方波发生器内容相关，直观呈现了其电路结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-042292c56e.png)

---

## 功放

> 见通信电子线路

![图片展示了消除交越失真的OCL电路的工作原理。左侧电路图中，利用二极管的U_{F}抵消三极管的U_{ON}，并有R_{1}、R_{3}、R_{2}等元件标注。右侧电路图中，增加R_{2}以调整电压大小，同样标注有R_{1}、R_{2}等元件。下方是电压倍增电路U_{BE} multiplier，公式为U_{CE} = (R_{1} + R_{2}) / R_{2} U_{BE}，并有R_{1}、R_{2}等元件标注。该图与上下文介绍的消除交越失真的OCL电路工作原理相关，直观呈现了电路结构。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-ec944709b2.png)

## 直流电源

![图片展示了电子电路中直流电源的构成及工作原理。220V 50Hz的交流电经电源变压器变为合适的交流电压，再经整流电路变为脉动的直流电压，滤波电路将脉动直流电压转变为平滑的直流电压，最后稳压电路清除电网波动及负载变化影响，保持输出电压稳定。图中还标注了各环节的电压变化情况，直观呈现了从交流电到直流电的转换过程。](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-164127-authcode-5daa10b96b.png)
