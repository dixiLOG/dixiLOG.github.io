---
# comments: true
title: DIXI的个人博客
---

<style>
  .md-content__inner {
    margin-top: 0.55rem !important;
  }

  .md-content__inner > .md-typeset > p:first-of-type {
    display: none;
  }

  .md-content__inner > div > div[style*="margin-top: -30px"] {
    display: none !important;
  }

  .dixihome {
    --dixi-ink: color-mix(in srgb, var(--md-default-fg-color) 92%, #1f2a22 8%);
    --dixi-muted: color-mix(in srgb, var(--md-default-fg-color) 62%, transparent);
    --dixi-line: color-mix(in srgb, var(--md-default-fg-color) 13%, transparent);
    --dixi-paper: color-mix(in srgb, var(--md-default-bg-color) 94%, #f2eedf 6%);
    --dixi-paper-strong: color-mix(in srgb, var(--md-default-bg-color) 86%, #f2eedf 14%);
    --dixi-green: color-mix(in srgb, var(--md-primary-fg-color) 80%, #51613f 20%);
    --dixi-orange: color-mix(in srgb, var(--md-accent-fg-color) 82%, #b76b24 18%);
    position: relative;
    margin: 0 0 2rem;
    color: var(--dixi-ink);
    --dixi-spot-x: 78%;
    --dixi-spot-y: 8%;
  }

  .dixihome * {
    box-sizing: border-box;
  }

  .dixihome a {
    color: inherit;
  }

  .dixihome-profile {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    padding: 1.15rem 1.1rem;
    border: 1px solid var(--dixi-line);
    border-radius: 0.7rem;
    background:
      radial-gradient(ellipse at var(--dixi-spot-x) var(--dixi-spot-y), color-mix(in srgb, var(--dixi-orange) 13%, transparent), transparent 12rem),
      linear-gradient(135deg, color-mix(in srgb, var(--dixi-green) 7%, transparent), transparent 38%),
      linear-gradient(180deg, color-mix(in srgb, #f7f3e8 18%, transparent), transparent 68%),
      var(--dixi-paper);
  }

  .dixihome-profile::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 0.2rem;
    background: linear-gradient(90deg, var(--dixi-green), var(--dixi-orange));
  }

  .dixihome-me {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.9rem;
    align-items: center;
  }

  .dixihome-avatar {
    width: 4.3rem;
    height: 4.3rem;
    border: 2px solid color-mix(in srgb, var(--dixi-green) 38%, transparent);
    border-radius: 50%;
    background: var(--md-default-bg-color);
    object-fit: cover;
    padding: 0.18rem;
    box-shadow: 0 0.35rem 1.2rem color-mix(in srgb, var(--dixi-green) 12%, transparent);
  }

  .dixihome-label {
    display: block;
    margin-bottom: 0.22rem;
    color: var(--dixi-green);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .dixihome-title {
    margin: 0;
    font-size: clamp(1.55rem, 4vw, 2.35rem);
    line-height: 1.16;
  }

  .dixihome-title strong {
    color: var(--dixi-green);
    font-weight: 800;
  }

  .dixihome-lead {
    margin: 0.72rem 0 0;
    color: var(--dixi-muted);
    line-height: 1.8;
  }

  .dixihome-tags {
    position: relative;
    min-height: 7.8rem;
    margin: 0.9rem 0 0;
    padding: 0;
    list-style: none;
    isolation: isolate;
  }

  .dixihome-tags li {
    display: inline-flex;
    position: absolute;
    left: var(--tag-x);
    top: var(--tag-y);
    align-items: center;
    justify-content: center;
    width: auto;
    max-width: min(18rem, 72%);
    margin: 0;
    padding: 0.22rem 0.68rem;
    border: 1px solid var(--dixi-line);
    border-radius: 999px;
    background: color-mix(in srgb, var(--md-default-bg-color) 82%, transparent);
    color: color-mix(in srgb, var(--dixi-ink) 75%, transparent);
    box-shadow: 0 0.25rem 0.8rem color-mix(in srgb, var(--dixi-green) 8%, transparent);
    font-size: 0.76rem;
    white-space: nowrap;
    transform: translate(calc(var(--swim-x, 0px) + var(--scatter-x, 0px)), calc(var(--swim-y, 0px) + var(--scatter-y, 0px))) rotate(var(--tag-rot, 0deg));
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
    will-change: transform;
  }

  .dixihome-tags li::before {
    display: none !important;
  }

  .dixihome-tags li:nth-child(1) {
    --tag-x: 0%;
    --tag-y: 0%;
  }

  .dixihome-tags li:nth-child(2) {
    --tag-x: 47%;
    --tag-y: 5%;
  }

  .dixihome-tags li:nth-child(3) {
    --tag-x: 18%;
    --tag-y: 33%;
  }

  .dixihome-tags li:nth-child(4) {
    --tag-x: 59%;
    --tag-y: 36%;
  }

  .dixihome-tags li:nth-child(5) {
    --tag-x: 5%;
    --tag-y: 68%;
  }

  .dixihome-tags li:nth-child(6) {
    --tag-x: 42%;
    --tag-y: 70%;
  }

  .dixihome-tags li:nth-child(7) {
    --tag-x: 69%;
    --tag-y: 69%;
  }

  .dixihome-tags li:nth-child(8) {
    --tag-x: 61%;
    --tag-y: 19%;
  }

  .dixihome-tags li.is-lit {
    border-color: color-mix(in srgb, var(--dixi-orange) 55%, transparent);
    background: color-mix(in srgb, var(--md-default-bg-color) 70%, var(--dixi-orange) 10%);
    color: var(--dixi-ink);
    box-shadow: 0 0.35rem 1rem color-mix(in srgb, var(--dixi-orange) 16%, transparent);
  }

  .dixihome-route {
    display: grid;
    gap: 0.45rem;
  }

  .dixihome-route a {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.7rem;
    align-items: center;
    padding: 0.62rem 0;
    border-bottom: 1px dashed var(--dixi-line);
    text-decoration: none !important;
    transition: color 0.18s ease, transform 0.18s ease;
  }

  .dixihome-route a:hover {
    color: var(--dixi-green);
    transform: translateX(3px);
  }

  .dixihome-route span {
    color: var(--dixi-muted);
    font-size: 0.82rem;
    line-height: 1.55;
  }

  .dixihome-route b {
    font-weight: 700;
  }

  .dixihome-arrow {
    color: var(--dixi-orange);
    font-size: 1rem;
    transition: transform 0.18s ease;
  }

  .dixihome-route a:hover .dixihome-arrow,
  .dixihome-map a:hover .dixihome-arrow {
    transform: translateX(0.18rem);
  }

  .dixihome-section-title {
    margin: 1.45rem 0 0.35rem;
    color: var(--dixi-ink);
    font-size: 1.08rem;
  }

  .dixihome-section-note {
    margin: 0 0 0.7rem;
    color: var(--dixi-muted);
    font-size: 0.86rem;
  }

  .dixihome-map {
    border-top: 1px solid var(--dixi-line);
  }

  .dixihome-map a {
    display: grid;
    grid-template-columns: 2.15rem minmax(0, 1fr) auto;
    gap: 0.72rem;
    align-items: start;
    padding: 0.86rem 0.15rem;
    border-bottom: 1px solid var(--dixi-line);
    text-decoration: none !important;
    transition: color 0.18s ease, background 0.18s ease, padding-inline 0.18s ease;
  }

  .dixihome-map a:hover {
    padding-inline: 0.45rem 0.15rem;
    background: color-mix(in srgb, var(--dixi-paper-strong) 72%, transparent);
    color: var(--dixi-green);
  }

  .dixihome-index {
    color: var(--dixi-orange);
    font-size: 0.78rem;
    font-weight: 800;
    line-height: 1.65;
  }

  .dixihome-map strong {
    display: block;
    margin-bottom: 0.16rem;
  }

  .dixihome-map span {
    display: block;
    color: var(--dixi-muted);
    font-size: 0.86rem;
    line-height: 1.65;
  }

  .dixihome-journal {
    margin-top: 1.25rem;
  }

  .dixihome-note {
    padding: 1.05rem 1.1rem 1.15rem;
    border: 1px solid var(--dixi-line);
    border-radius: 0.58rem;
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--dixi-paper-strong) 72%, transparent), transparent 42%),
      color-mix(in srgb, var(--md-default-bg-color) 94%, transparent);
  }

  .dixihome-note h3 {
    margin: 0 0 0.85rem;
    font-size: 1.05rem;
  }

  .dixihome-updates {
    position: relative;
    display: grid;
    gap: 0.8rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .dixihome-updates::before {
    content: "";
    position: absolute;
    left: 5.35rem;
    top: 0.2rem;
    bottom: 0.2rem;
    width: 1px;
    background: linear-gradient(180deg, var(--dixi-green), color-mix(in srgb, var(--dixi-orange) 65%, transparent));
    opacity: 0.42;
  }

  .dixihome-update {
    position: relative;
    display: grid;
    grid-template-columns: 4.75rem minmax(0, 1fr);
    gap: 1.15rem;
    align-items: start;
    margin: 0;
    padding: 0;
  }

  .dixihome-update::before {
    content: "";
    position: absolute;
    left: 5.14rem;
    top: 0.55rem;
    width: 0.45rem;
    height: 0.45rem;
    border: 2px solid var(--dixi-green);
    border-radius: 50%;
    background: var(--md-default-bg-color);
    z-index: 1;
  }

  .dixihome-date {
    color: var(--dixi-orange);
    font-size: 0.78rem;
    font-weight: 800;
    line-height: 1.4;
  }

  .dixihome-update-body {
    min-width: 0;
    padding-bottom: 0.25rem;
  }

  .dixihome-update-body strong {
    display: block;
    margin-bottom: 0.18rem;
    color: var(--dixi-ink);
  }

  .dixihome-update-body > span {
    display: block;
    color: var(--dixi-muted);
    line-height: 1.68;
  }

  .dixihome-update-body a,
  .dixihome-archive-item a {
    color: var(--dixi-orange);
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: color-mix(in srgb, var(--dixi-orange) 42%, transparent);
    text-decoration-thickness: 0.08em;
    text-underline-offset: 0.18em;
    transition: color 0.18s ease, text-decoration-color 0.18s ease;
  }

  .dixihome-update-body a:hover,
  .dixihome-archive-item a:hover {
    color: var(--dixi-green);
    text-decoration-color: color-mix(in srgb, var(--dixi-green) 58%, transparent);
  }

  .dixihome-badge {
    display: inline-flex;
    margin-left: 0.35rem;
    padding: 0.05rem 0.42rem;
    border: 1px solid color-mix(in srgb, var(--dixi-green) 28%, transparent);
    border-radius: 999px;
    color: var(--dixi-green);
    font-size: 0.68rem;
    font-weight: 700;
    line-height: 1.35;
    vertical-align: 0.08rem;
  }

  .dixihome-archive {
    margin-top: 1rem;
    border-top: 1px dashed var(--dixi-line);
    padding-top: 0.8rem;
  }

  .md-typeset .dixihome-archive details {
    border: 1px solid var(--dixi-line);
    border-radius: 0.55rem;
    background: color-mix(in srgb, var(--md-default-bg-color) 92%, transparent);
    box-shadow: none;
    overflow: hidden;
  }

  .md-typeset .dixihome-archive summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    padding: 0.75rem 0.9rem;
    min-height: auto;
    border: 0;
    background: color-mix(in srgb, var(--dixi-paper-strong) 78%, transparent);
    color: var(--dixi-ink);
    cursor: pointer;
    list-style: none;
  }

  .md-typeset .dixihome-archive summary::before {
    display: none !important;
  }

  .md-typeset .dixihome-archive summary:hover {
    background: color-mix(in srgb, var(--dixi-paper-strong) 88%, var(--dixi-orange) 5%);
  }

  .md-typeset .dixihome-archive summary::-webkit-details-marker {
    display: none;
  }

  .md-typeset .dixihome-archive summary::after {
    content: "展开";
    color: var(--dixi-orange);
    font-size: 0.78rem;
    font-weight: 700;
  }

  .md-typeset .dixihome-archive details[open] summary::after {
    content: "收起";
  }

  .dixihome-archive-list {
    display: grid;
    gap: 0.75rem;
    margin: 0;
    padding: 0 0.9rem 0.9rem;
  }

  .dixihome-archive-item {
    display: grid;
    grid-template-columns: 6.4rem minmax(0, 1fr);
    gap: 0.8rem;
    padding-top: 0.72rem;
    border-top: 1px solid color-mix(in srgb, var(--dixi-line) 70%, transparent);
  }

  .dixihome-archive-date {
    color: var(--dixi-orange);
    font-size: 0.76rem;
    font-weight: 800;
    line-height: 1.45;
  }

  .dixihome-archive-item ul {
    margin: 0;
    padding-left: 1rem;
  }

  .dixihome-archive-item li {
    margin: 0.15rem 0;
    color: var(--dixi-muted);
    line-height: 1.62;
  }

  .dixihome-afterword {
    display: grid;
    gap: 0.8rem;
    margin-top: 1.05rem;
  }

  .dixihome-scrap {
    position: relative;
    overflow: hidden;
    padding: 0.95rem 1rem;
    border: 1px solid var(--dixi-line);
    border-radius: 0.58rem;
    background:
      linear-gradient(90deg, color-mix(in srgb, var(--dixi-green) 5%, transparent), transparent 34%),
      color-mix(in srgb, var(--md-default-bg-color) 94%, transparent);
  }

  .dixihome-scrap::before {
    display: none;
  }

  .dixihome-scrap::after {
    content: attr(data-mark);
    position: absolute;
    right: 0.85rem;
    top: 0.62rem;
    color: color-mix(in srgb, var(--dixi-orange) 26%, transparent);
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1;
    pointer-events: none;
  }

  .dixihome-scrap:nth-child(2)::before {
    background: var(--dixi-orange);
  }

  .dixihome-scrap:nth-child(2) {
    background:
      linear-gradient(90deg, color-mix(in srgb, var(--dixi-orange) 5%, transparent), transparent 34%),
      color-mix(in srgb, var(--md-default-bg-color) 94%, transparent);
  }

  .dixihome-scrap h3 {
    margin: 0 0 0.55rem;
    font-size: 0.96rem;
  }

  .dixihome-scrap p {
    margin: 0;
    color: var(--dixi-muted);
    line-height: 1.78;
  }

  .dixihome-poem p {
    text-indent: 0;
  }

  .dixihome-contact {
    display: grid;
    gap: 0.4rem;
  }

  .dixihome-contact a,
  .dixihome-contact span {
    display: inline-flex;
    width: fit-content;
    max-width: 100%;
    color: var(--dixi-muted);
    line-height: 1.55;
    overflow-wrap: anywhere;
  }

  .dixihome-contact a:hover {
    color: var(--dixi-green);
  }

  .dixihome-progress {
    position: sticky;
    top: 3rem;
    height: 0.14rem;
    margin: 0 0 0.8rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--md-default-fg-color) 7%, transparent);
    overflow: hidden;
    z-index: 2;
  }

  .dixihome-progress span {
    display: block;
    width: var(--dixi-progress, 0%);
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--dixi-green), var(--dixi-orange));
    transition: width 0.08s linear;
  }

  @media (prefers-reduced-motion: reduce) {
    .dixihome-tags li,
    .dixihome-route a,
    .dixihome-map a,
    .dixihome-arrow,
    .dixihome-progress span {
      transition: none !important;
    }
  }

  @media (min-width: 76.25em) {
    .dixihome-profile {
      grid-template-columns: minmax(0, 1.35fr) minmax(14rem, 0.65fr);
      align-items: center;
    }
  }

  @media (max-width: 36em) {
    .dixihome-profile,
    .dixihome-note {
      margin-inline: -0.1rem;
      padding-inline: 0.85rem;
    }

    .dixihome-me {
      grid-template-columns: 1fr;
    }

    .dixihome-avatar {
      width: 3.8rem;
      height: 3.8rem;
    }

    .dixihome-map a {
      grid-template-columns: 1.8rem minmax(0, 1fr) auto;
      gap: 0.55rem;
    }

    .dixihome-tags {
      min-height: 10.4rem;
    }

    .dixihome-tags li {
      max-width: 86%;
      white-space: normal;
    }

    .dixihome-tags li:nth-child(2),
    .dixihome-tags li:nth-child(4),
    .dixihome-tags li:nth-child(7),
    .dixihome-tags li:nth-child(8) {
      --tag-x: 36%;
    }

    .dixihome-updates::before {
      left: 0.2rem;
    }

    .dixihome-update {
      grid-template-columns: 1fr;
      gap: 0.25rem;
      padding-left: 1.2rem;
    }

    .dixihome-update::before {
      left: 0;
    }

    .dixihome-archive-item {
      grid-template-columns: 1fr;
      gap: 0.25rem;
    }
  }
</style>

<div class="dixihome-progress" aria-hidden="true">
  <span></span>
</div>

<section class="dixihome">
  <div class="dixihome-profile">
    <div>
      <div class="dixihome-me">
        <img class="dixihome-avatar" src="https://cdn.jsdelivr.net/gh/dixiLOG/blogStatic/%E4%B8%AA%E4%BA%BA%E5%A4%B4%E5%83%8F_4x.png" alt="dixi 的头像">
        <div>
          <span class="dixihome-label">WHO AM I</span>
          <h1 class="dixihome-title">这里是 <strong>dixi</strong></h1>
        </div>
      </div>

      <p class="dixihome-lead">
        NBU 本科在读（自称 <em>NBUCETer</em>）
      </p>

      <ul class="dixihome-tags" aria-label="个人标签">
        <li>青龙山外派光明顶发电厂首席技工</li>
        <li>智商税拥趸</li>
        <li>重度音乐依赖症</li>
        <li>打电话会死星人</li>
        <li>坦克动荡2 20:0 零封 Laika</li>
        <li>喜欢看书</li>
        <li>喜欢折腾和开源</li>
        <li>公众号单篇推文阅读量 14k+</li>
      </ul>
    </div>

    <nav class="dixihome-route" aria-label="快速引导">
      <a href="NBU-NOTEBOOK/">
        <span><b>第一次来找笔记</b><br>课程内容从这里进，计网、信号、概率论、通信原理都在里面。</span>
        <span class="dixihome-arrow">→</span>
      </a>
      <a href="Flysheet/">
        <span><b>正在准备推免</b><br>材料系统、时间线、导师选择和经历复盘放在 Flysheet。</span>
        <span class="dixihome-arrow">→</span>
      </a>
      <a href="随手记/">
        <span><b>想随便逛逛</b><br>问题记录、奇怪发现、经验小结和碎片想法都在随手记。</span>
        <span class="dixihome-arrow">→</span>
      </a>
    </nav>
  </div>

  <h2 class="dixihome-section-title">ROADMAP</h2>

  <div class="dixihome-map">
    <a href="NBU-NOTEBOOK/">
      <span class="dixihome-index">01</span>
      <span>
      <strong>NBU-NOTEBOOK</strong>
      <span>课程笔记主区，覆盖通信、信号、概率论、计算机网络等内容。</span>
      </span>
      <span class="dixihome-arrow">→</span>
    </a>
    <a href="随手记/">
      <span class="dixihome-index">02</span>
      <span>
      <strong>随手记</strong>
      <span>零散但真诚的知识碎片、经验小结和日常问题整理。</span>
      </span>
      <span class="dixihome-arrow">→</span>
    </a>
    <a href="changheji/">
      <span class="dixihome-index">03</span>
      <span>
      <strong>长河集</strong>
      <span>读书、项目、报告与一些更偏长期沉淀的文字。</span>
      </span>
      <span class="dixihome-arrow">→</span>
    </a>
    <a href="ROCOS/">
      <span class="dixihome-index">04</span>
      <span>
      <strong>NBU_ROCOS</strong>
      <span>机器人、队内资料和相关技术记录。</span>
      </span>
      <span class="dixihome-arrow">→</span>
    </a>
    <a href="Flysheet/">
      <span class="dixihome-index">05</span>
      <span>
      <strong>推免 Flysheet</strong>
      <span>围绕保研过程的经验、时间线与信息整理。</span>
      </span>
      <span class="dixihome-arrow">→</span>
    </a>
    <a href="blog/">
      <span class="dixihome-index">06</span>
      <span>
      <strong>闲言碎语</strong>
      <span>更轻一点、更私人一点的博客文章与情绪切片。</span>
      </span>
      <span class="dixihome-arrow">→</span>
    </a>
  </div>

  <div class="dixihome-journal">
    <article class="dixihome-note">
      <h3>上新</h3>
      <ol class="dixihome-updates">
        <li class="dixihome-update">
          <span class="dixihome-date">2026<br>05.20</span>
          <span class="dixihome-update-body">
            <strong>首页改版，随手记与博客同步上新 <span class="dixihome-badge">SITE&amp;DOCS</span></strong>
            <span>基于最新提交整理首页样式，并补入 <a href="https://dixilog.github.io/随手记/learnDriving/">学车记</a>、<a href="https://dixilog.github.io/随手记/whywhy/electionTips/">选举办法</a> 等新内容。</span>
          </span>
        </li>
        <li class="dixihome-update">
          <span class="dixihome-date">2026<br>03.11</span>
          <span class="dixihome-update-body">
            <strong>十万个为什么补进“就业黑话” <span class="dixihome-badge">DOCS</span></strong>
            <span><a href="https://dixilog.github.io/随手记/whywhy/offerTerms/">就业黑话</a> 单独成篇，继续整理求职场景里常见但不直说的表达。</span>
          </span>
        </li>
        <li class="dixihome-update">
          <span class="dixihome-date">2026<br>02.26</span>
          <span class="dixihome-update-body">
            <strong>长河集与随手记继续扩容 <span class="dixihome-badge">DOCS</span></strong>
            <span>新增 <a href="https://dixilog.github.io/changheji/GeminiCLI/">GeminiCLI</a>，并在随手记补入 <a href="https://dixilog.github.io/随手记/JHMath/">初中数学保命手册</a>。</span>
          </span>
        </li>
        <li class="dixihome-update">
          <span class="dixihome-date">2025<br>12.23</span>
          <span class="dixihome-update-body">
            <strong>推免 Flysheet 持续补写 <span class="dixihome-badge">FLYSHEET</span></strong>
            <span>围绕院校选择、复盘经验与朋辈感受继续补档，推免线内容从时间线扩展到更细的经验层。</span>
          </span>
        </li>
        <li class="dixihome-update">
          <span class="dixihome-date">2025<br>12.14</span>
          <span class="dixihome-update-body">
            <strong>推免 Flysheet V0.1 上线 <span class="dixihome-badge">NEW</span></strong>
            <span>首次集中整理推免路径，补入时间线、经验感悟、信息搜集与导师选择等一整套入口。</span>
          </span>
        </li>
      </ol>

      <div class="dixihome-archive">
        <details>
          <summary>
            <span>展开查看更多历史装修</span>
          </summary>
          <div class="dixihome-archive-list">
            <div class="dixihome-archive-item">
              <span class="dixihome-archive-date">2025<br>02.10-03.11</span>
              <ul>
                <li><a href="https://dixilog.github.io/随手记/boringBetter/">无聊可期</a>、<a href="https://dixilog.github.io/随手记/whywhy/">十万个为什么</a> 与 <a href="https://dixilog.github.io/NBU-NOTEBOOK/commuPrinc/">通信原理笔记</a> 先后补入。</li>
                <li>页尾社交链接、课程笔记入口与站点骨架在这一阶段逐步补齐。</li>
              </ul>
            </div>
            <div class="dixihome-archive-item">
              <span class="dixihome-archive-date">2025<br>02.11-02.13</span>
              <ul>
                <li>优化鼠标单击与页面滚动样式。</li>
                <li><a href="https://dixilog.github.io/随手记/whywhy/">十万个为什么</a> 与 <a href="https://dixilog.github.io/changheji/">长河集</a> 上新。</li>
              </ul>
            </div>
            <div class="dixihome-archive-item">
              <span class="dixihome-archive-date">2025<br>02.08-02.10</span>
              <ul>
                <li>增加创建/修改时间显示与 404 页面。</li>
                <li>调整博客 icon，修复图片显示问题，添加板块封面。</li>
                <li>原 Chronic Study 更名为 <a href="https://dixilog.github.io/changheji/">长河集</a>，开辟 <a href="https://dixilog.github.io/changheji/bookReport/">荒唐言</a>。</li>
              </ul>
            </div>
            <div class="dixihome-archive-item">
              <span class="dixihome-archive-date">2024<br>11.09</span>
              <ul>
                <li>增添个性化地址栏和“上一次看到”跳转功能。</li>
                <li>同步部分文章至 <a href="http://dixilog.github.io/blog/">闲言碎语</a>。</li>
              </ul>
            </div>
            <div class="dixihome-archive-item">
              <span class="dixihome-archive-date">2024<br>09.16</span>
              <ul>
                <li>修改导航栏配置。</li>
                <li>搬运第一份笔记：<a href="https://dixilog.github.io/NBU-NOTEBOOK/S%26S/">信号与系统笔记</a>。</li>
                <li>开辟随手记第一个板块：<a href="https://dixilog.github.io/随手记/whywhy/">十万个为什么</a>。</li>
              </ul>
            </div>
            <div class="dixihome-archive-item">
              <span class="dixihome-archive-date">2024<br>07.08</span>
              <ul>
                <li>建站。</li>
                <li>后续补入阅读时间、ROCOS 板块、Markdown 速记与博客同步。</li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </article>
  </div>

  <div class="dixihome-afterword" aria-label="页尾小札">
    <section class="dixihome-scrap" data-mark="01">
      <h3>碎碎念</h3>
      <p>逃过了《追忆似水流年》，没躲掉《喧哗与骚动》。</p>
      <p>兰生幽谷，不为莫服而不芳。舟在江海，不为莫乘而不浮。君子行义，不为莫知而止休。</p>
    </section>

    <section class="dixihome-scrap dixihome-poem" data-mark="02">
      <h3>打油诗</h3>
      <p>多少桐柳不得问，匆忙梦里寻佳人<br>辗转衾湿茫然顾，恍惚秦皇骊山坟</p>
    </section>

    <section class="dixihome-scrap" data-mark="03">
      <h3>联系与说明</h3>
      <p class="dixihome-contact">
        <span>QQ：1444127184</span>
        <a href="mailto:huang1444127184@gmail.com">huang1444127184@gmail.com</a>
        <span>转载请标明出处及作者呦~</span>
      </p>
    </section>
  </div>
</section>

<!-- Giscus 评论功能 -->
<div id="giscus-container"></div>

<script src="https://giscus.app/client.js"
        data-repo="dixiLOG/dixiLOG.github.io"
        data-repo-id="R_kgDOMSVlpg"
        data-category="Announcements"
        data-category-id="DIC_kwDOMSVlps4CgoIQ"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="0"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var feedbackSection = document.querySelector("md-feedback");
    var giscusContainer = document.querySelector("#giscus-container");

    if (feedbackSection && giscusContainer && feedbackSection.parentNode) {
      feedbackSection.parentNode.appendChild(giscusContainer);
    }

    var palette = __md_get("__palette");
    var theme = palette && palette.color.scheme === "slate" ? "dark" : "light";
    var giscusScript = document.querySelector("#giscus-container script");
    if (giscusScript) {
      giscusScript.setAttribute("data-theme", theme);
    }

    var paletteToggle = document.querySelector("[data-md-component=palette]");
    if (paletteToggle) {
      paletteToggle.addEventListener("change", function() {
        var newPalette = __md_get("__palette");
        var newTheme = newPalette && newPalette.color.scheme === "slate" ? "dark_dimmed" : "light_high_contrast";
        var giscusFrame = document.querySelector("iframe.giscus-frame");

        if (giscusFrame) {
          giscusFrame.contentWindow.postMessage(
            { giscus: { setConfig: { theme: newTheme } } },
            "https://giscus.app"
          );
        }
      });
    }
  });
</script>
