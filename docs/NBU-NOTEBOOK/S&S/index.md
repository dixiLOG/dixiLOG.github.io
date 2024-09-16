# 信号与系统

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

!!! quote "蒋刚毅说:"
      信号变换的本质是拉普拉斯变换  
      
<center>^^用拉氏变换解决微分方程，Z 变换解决差分方程^^</center>


> 参考文章[传送门](https://www.zhihu.com/question/21064916)

> B站视频[传送门](https://www.bilibili.com/video/BV1g94y1Q76G)



## 划重点（抓瞎版）
 
LT 和 ZT 各至少出一道超级大题，其余以小计算题形式出现    
基本逃不开课后习题，但有个别不在布置范围内，学有余力应刷尽刷    
注意，以下“例题”为课后习题  

| 章节 | 考点 | 注意点 |
| :---: | :---- | :---|
| **第一章** <br>  信号概念 | 1. 离散 / 连续 信号图<br/>2. 冲激函数的性质（尤其是 $ \delta(f(t)) $ 的变换 ）<br/>3. 信号基础变换--平移/反褶/比例变换<br/>4. 奇分量/偶分量 | 1. 在 FT 中 F(jw)的余弦量（实部）的逆变换为 f(t)的偶分量<br/>2. 看 ==1-5 1-11== |
| **第二章** <br>  LTI | 1. 线性/时不变/因果的判定<br/>2. 解微分/差分方程 的 齐次解$y_n$/特解$y_p$/自由响应$y_f$/强迫响应$y_F$以及$y_{zi} ,y_{zs},y_{ss}$<br/>3. 利用线性 / 微积分性质求响应｛起始状态对应零输入，激励对应零状态｝<br/>4. 求冲激响应与阶跃响应<br/>5. 卷积/卷积和计算与电路上的应用｛注意利用性质，如一导一积，或直接用 s 域求解｝<br/>6. 框图 | 1. 离散下慎用 Z 变换，正确率不高，如 ==2-12==<br/>2. ==2-16 2-17== 典型求卷积积分/卷积和，注意积分限<br/>3. **注意时移特性！！是整体的！！**<br/>4. 看 ==2-9== |
| **第三章** <br>  FS/FT | 1. 傅里叶级数的三角/复数指数形式以及其转化、奇谐/偶谐<br/>2. **FT 的性质** 正逆变换 / 熟练掌握 **矩形波、三角波**转换 <br/>3. 三角信号调制，周期信号 的 FT 表达式，卷积<br/>4. 理想低通滤波器<br/>5. 求 LTI 响应 | 1. FS 中三角形式$\sum_{n=1}^{+\infty}$,指数形式$\sum_{n=-\infty}^{+\infty}$<br/>2. 考前过一遍 FS 典型信号 <br/>3. <br/>![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/EzeAbGKDQozNgfxedBWcKmEUnDh.png)<br/>4. 时域 **微分定理** 可以用画图解决 见 ==3-15  3-16==<br/> 5. ==3-23== 周期信号的 FT 表达典型例题<br/>6.    <br/>![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/HC9TbrNfWoc16FxuA7CcOzN2nBg.png)<br/><br/>7. ==3-25== 解 LTI |
| **第四章** <br>  抽样、调制与解调 | 1. 最低抽样频率 $f_s$ 奈奎斯特频率，$T_s$ 奈奎斯特间隔选择/判断/求解<br/>2. 调幅与解调 | ==5-1 5-2 5-10 5-11== 一共就没几道题 |
| **第五章** <br>  LT | 1. 单/双边拉氏变换、ROC<br/>2. 基于**性质和典型变幻**下的正变换、部分分式展开法逆变换，卷积｛初值/终值定理｝<br/>3. 系统函数 ，**频响（三角信号、阶跃信号、强迫响应）求****稳态响应**<br/>4. 解微分方程，电路等效计算<br/>5. 零极点图、幅频相频特性曲线手绘、框图 | $ s = \sigma+j\omega $ <br/>1. **记得写 ROC**<br/>2. 微分性质 / 周期性质 / 初值终值定理<br/>3. 注意三角*t 后的逆变换<br/>4. **注意时移特性!!**  见 ==6-3 a== <br/>5. ==6-8== 电路典型<br/>6. ==6-19 6-20 6-21== 解 LTI/H(s) 典型 <br/>7. ==6-27 / 6-30==(求初始条件)框图典型 |
| **第六章** <br>  ZT | 1. 单/双边 Z 变换、ROC<br/>2. 基于**性质和典型变幻**下的正变换、部分分式展开法逆变换，卷积｛初值/终值定理｝<br/>3. 系统函数 ，频响（三角信号、阶跃信号、强迫响应）**求****稳态响应**<br/>4. 解差分方程<br/>5. 零极点图、幅频相频特性曲线手绘、框图 | $ z = e^{sT} $ <br/>1. **记得写 ROC**<br/>2. 微分性质 / 周期性质 / 初值终值定理<br/>3. 注意三角*$r^n$<br/>4. **注意时移特性!!** <br/>5. ==7-7(3)== 求差分方程｛配凑法解三角｝<br/>6. ==7-20 7-21== 初值定理+零极点图+系统函数+幅频特性曲线<br/>7. ==7-28== 框图 |





## 三大变换常见变换对与性质集总

=== "FT"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/DvoEbBEtaofo4NxFwH2cMMAEnle.png)  
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Hb3nbsyIOobo6fxlMyZcdOqgnwe.png)  
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/Nk0fbLAJJopJIzx5eGFcRuhsnhc.png)

=== "LT"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/BoCBbQgURo8VXMxDJdHcchWXnuf.png)
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/XiLRb8IIqoWxajxCyw1cHzWHnGc.png)

=== "ZT"

    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/BfSCb2Z2TousJOxWVUncuOrOn2e.png)  
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/HIxRbNlsho5S5vxQcWYcTcdYn8f.png)  
    ![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/O78ObQErLoqxR9xi8eecbqCunHd.png)  

---


## 知识框架（抄来的）

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/FXb5bAAPOo7JTxxzOCoc5b4UnGh.png)