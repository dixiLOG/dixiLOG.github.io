# ITC07 加密编码

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 加密编码

### DES

DES (Data Encryption Standard) 是一种对称密钥分组密码 (Symmetric-key block cipher) 算法。DES对固定长度的数据块（64位）进行操作，并使用一个固定长度的对称密钥（56位有效位）。

DES的核心结构是一种费斯妥网络 (Feistel Network)。这种结构将数据块分成左右两半，并通过多轮迭代处理，每一轮使用不同的子密钥。

- 对半分，16轮迭代
- 每一轮经历右半部分符号扩展（32→48）、字密钥异或、S盒替换（8个，6→4变换）、P盒置换、与左半部分异或并交换

---

### RSA

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-80ee1f89b3.png){: .zoom}

![](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/20260721-information-theory-coding-authcode-16f6d17686.png){: .zoom}
