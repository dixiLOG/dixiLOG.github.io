# Gemini CLI 摸索笔记

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 写在前面

眼馋 skill（或者说 AI Agent）很久了，但网页 C 端一直没完全放开。最近 Gemini CLI 似乎能用，又刚好领了 Google 三个月 300 刀 API 补贴，干脆边用边记，省得下次又从零抓瞎  
Copilot 其实也支持 skill，但我个人还是偏爱终端流：直接、清爽、少一点 UI 来回切

事实上 Gemini CLI 还处于不断<span style="border-bottom: 1.5px dashed orange;">进步</span>的阶段，且最近一段时间 API 的稳定性很差很差，sad

> 不出意外的话，这篇记录本身也算是一次 skill 实践 🤪

本文按三块来：<span style="border-bottom: 1.5px dashed orange;">环境配置</span>、<span style="border-bottom: 1.5px dashed orange;">CLI 常用命令</span>、<span style="border-bottom: 1.5px dashed orange;">skills 的理解与落地</span>


## 开发环境配置


对于国内同学来说，最大的问题从来不是“会不会敲命令”，而是网络与支付链路  
如果这两个环节不稳定，后面的体验会非常随机，甚至会误判成 CLI 本身故障

### 预备动作

!!! info "关于账号赠金"

     对于 Google One（AI Pro）用户，除了一次性额度外，通常还有每月 10 刀的补贴  
     2.5 系列日常够用，3 pro 用量大时会明显更“烧钱”（API 下基本不够用）

我的 API 开通链路（仅记录思路）：

1. 准备稳定美国节点，可用 [scamalytics](https://scamalytics.com/) 做纯净度检查  
2. 准备虚拟信用卡与 USDT 充值渠道（注意平台合规与风控）  
3. 小额开卡（注意地址位置与格式）和充值（先验证链路，不要一上来大额）  
4. Google 绑卡（这里节点一定是那个美国节点）通过后，再去 [AI studio](https://aistudio.google.com/api-keys) 创建项目（这一步必做，用于登陆认证）并申请付费层级  
5. 核对模型定价与能力差异，参考 [Google API 文档](https://ai.google.dev/gemini-api/docs/models?hl=zh-cn)；不同订阅的权限可参见 [Gemini 应用帮助](https://support.google.com/gemini/answer/16275805)

在安装前建议确认：

1. 已创建项目并拿到项目 ID（形如 `gen-lang-client-xxxx`）  
2. 如需 API 计费，已在 [Billing](https://console.cloud.google.com/billing) 绑定结算账号  
3. 可用网络环境已准备  
4. 在 [API Dashboard](https://console.cloud.google.com/apis/dashboard) 启用：
     1. Gemini for Google Cloud API
     2. Generative Language API
     3. Gemini Cloud Assist API

!!! quote "入门参考"

     可以先看这篇前两节：[Gemini-CLI安装与使用完全指南：从注册到运行](https://goodgan.github.io/2025/08/22/gemini-cli-tutorial/)

---

### 终端安装（PowerShell 7）

安装本体很简单，照着[官方文档](https://geminicli.com/docs/get-started/installation/)做即可，其实就是一行命令：

```bash title="powershell"
npm install -g @google/gemini-cli
```

真正耗时的是前置校验（Node、账号、代理、认证路径）

!!! quote "可直接丢给 AI 的检查提示词"

     期望在 Win11 PowerShell 下安装 Gemini CLI，在执行 `npm install -g @google/gemini-cli` 前需要确保环境满足运行条件，请给出检查全过程命令与结果

紧接的是认证问题，即我们需要终端网络走代理端口

环境变量建议直接写到<span style="border-bottom: 1.5px dashed orange;">用户变量</span>（非 PATH）：

- `GEMINI_API_KEY`（可选）  
- `GOOGLE_CLOUD_PROJECT`（必填）  
- `HTTP_PROXY`（必填）  
- `HTTPS_PROXY`（必填）

其中两个 PROXY 端口保持一致，按你的代理工具配置来

!!! example ""
     ![添加环境变量](https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/202602261534.png "添加用户环境变量")


> 有些教程让你只在应用内设代理，但似乎没那么靠谱

> 图文补充可看：[Gemini Cli的安装、配置、使用、卸载教程](https://cloud.tencent.com/developer/article/2594397)

最后在终端检查代理是否生效：

```bash title="powershell"
Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings" | Select-Object ProxyServer, ProxyEnable

Get-ChildItem Env: | Where-Object {$_.Name -like "*PROXY*"}
```

如果回显里 `ProxyEnable = 1` 且两个环境变量都在，认证一般就能正常走通

---

### 嵌入 VS Code

如果你不想频繁 `@xx文件`，又希望直接看 diff，建议接入 VS Code

1. 设置里搜索 `proxy`，把 `Http: Proxy` 设为 `http://127.0.0.1:xxxx`  
2. 把 `Http: Proxy Support` 设为 `override`  
3. 安装 `Gemini CLI Companion` 插件  
4. 在 VS Code 终端启动 Gemini，执行 `/ide status`，看到绿灯即成功

!!! warning "易踩雷"

     首次启动 Gemini 建议用<span style="border-bottom: 1.5px dashed orange;">非管理员模式</span>，否则可能碰到权限问题

## CLI 的基本使用

先把最常用命令摸熟，再去玩花活。全部命令可以查 [官方命令文档](https://geminicli.com/docs/reference/commands/)

以下是我认为必要的命令与理解：

- `/init`：初始化仓库，生成 `GEMINI.md` 并写入 memory  
- `/memory`：管理记忆（有全局与项目两层）
     - `show`：查看当前记忆
     - `add`：追加记忆
     - `refresh`：从源文件刷新
     - `list`：列出生效中的 `GEMINI.md`
- `/skills`：管理技能（装、卸、启、停、重载）
     - `list [nodesc] [all]`
     - `link <path> [--scope user|workspace]`
     - `disable <name>`
     - `enable <name>`
     - `reload`
- `/auth`、`/about`、`/status`：认证与会话状态  
- `/model`：切模型（新模型高峰期可能 `503 high demand`）  
- `/resume`：会话管理（加载、删除、切换）  
- `/chat`：保存/恢复对话上下文（不改项目文件）  
- `/compress`：压缩上下文，控 token  
- `/clear`：清屏并清理上下文  
- `/rewind`：回退 n 步（需在 `/settings` 开启）

!!! tip "区分"

     `/resume` 更像“会话容器管理”；  
     `/chat save` 更像“当前分叉点打存档”。我的理解是，因为 resume 不便管理，所以遇到方案岔路，可以通过 ckpt 保存对话

***


## skills 的使用

!!! quote "什么是 Agent？"
     LLM 使用一系列工具往复循环的执行直到满足既定目标（Tools in a loop to achieve a goal）

往回看，RAG 基于<span style="border-bottom: 1.5px dashed orange;">知识图谱</span>让 Agent 称为垂直领域的专家， MCP 作为<span style="border-bottom: 1.5px dashed orange;">扩展坞</span>延伸了 Agent 的手脚，Claude Code让 Agent 嵌入本地生态以拥有更强的自主性

而 skills，本质上就是 Agent 的<span style="border-bottom: 1.5px dashed orange;">可复用操作规范</span>

某种意义上，skills 像菜谱：发挥空间有，但不能乱炖

!!! tip "为什么要约束 Agent？"

     当下大多数 Agent 更适合做<span style="border-bottom: 1.5px dashed orange;">精密翻译</span>，而非创造垃圾  
     所以先约束，再提效，通常比“全自动放飞”更稳

这里关于[去除写作AI味](https://baoyu.io/blog/2026-02-14/remove-ai-writing-flavor)的一个例子能直观感受到 skill 的作用

这里还有一篇博文，以自动整理文档图片命名为引介绍了 skill 的基本规范：[Gemini CLI 也能用 Skills 了，我用它解放了 Obsidian 的图片整理](https://mp.weixin.qq.com/s/WXJZ1otbGe6xD0TjgqKOKQ)  

同时，[菜鸟教程](https://www.runoob.com/ai-agent/skills-agent.html)也有一个比较全面而偏向硬核的介绍，包含了技能的开发与使用

若希望找轮子，不妨上 [Agent Skills Marketplace](https://skillsmp.com/zh/search) 找找
