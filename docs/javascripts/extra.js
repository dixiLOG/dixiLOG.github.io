// var CURSOR;

// Math.lerp = (a, b, n) => (1 - n) * a + n * b;


// const getStyle = (el, attr) => {
//     try {
//         return window.getComputedStyle
//             ? window.getComputedStyle(el)[attr]
//             : el.currentStyle[attr];
//     } catch (e) {}
//     return "";
// };


// class Cursor {
//     constructor() {
//         this.pos = {curr: null, prev: null};
//         this.pt = [];
//         this.create();
//         this.init();
//         this.render();
//     }

//     move(left, top) {
//         this.cursor.style["left"] = `${left}px`;
//         this.cursor.style.top = `${top}px`;
//     }

//     create() {
//         if (!this.cursor) {
//             this.cursor = document.createElement("div");
//             this.cursor.id = "cursor";
//             this.cursor.classList.add("hidden");
//             document.body.append(this.cursor);
//         }

//         var el = document.getElementsByTagName('*');
//         for (let i = 0; i < el.length; i++)
//             if (getStyle(el[i], "cursor") == "pointer")
//                 this.pt.push(el[i].outerHTML);

//         document.body.appendChild((this.scr = document.createElement("style")));
//         // 这里改变鼠标指针的颜色 由svg生成
//         this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.5'/></svg>") 4 4, auto}`;
//     }

//     refresh() {
//         this.scr.remove();
//         this.cursor.classList.remove("hover");
//         this.cursor.classList.remove("active");
//         this.pos = {curr: null, prev: null};
//         this.pt = [];

//         this.create();
//         this.init();
//         this.render();
//     }

//     init() {
//         document.onmouseover  = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
//         document.onmouseout   = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
//         document.onmousemove  = e => {(this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = {x: e.clientX - 8, y: e.clientY - 8}; this.cursor.classList.remove("hidden");};
//         document.onmouseenter = e => this.cursor.classList.remove("hidden");
//         document.onmouseleave = e => this.cursor.classList.add("hidden");
//         document.onmousedown  = e => this.cursor.classList.add("active");
//         document.onmouseup    = e => this.cursor.classList.remove("active");
//     }

//     render() {
//         if (this.pos.prev) {
//             this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
//             this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
//             this.move(this.pos.prev.x, this.pos.prev.y);
//         } else {
//             this.pos.prev = this.pos.curr;
//         }
//         requestAnimationFrame(() => this.render());
//     }
// }

// (() => {
//     CURSOR = new Cursor();
//     // 需要重新获取列表时，使用 CURSOR.refresh()
// })();

// // 生成随机颜色
// function randomColor() {
//     const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// // // 生成烟花效果
// // function createFirework(x, y) {
// //     const fireworkContainer = document.createElement('div');
// //     fireworkContainer.classList.add('fireworks');
// //     fireworkContainer.style.left = `${x}px`;
// //     fireworkContainer.style.top = `${y}px`;
// //     document.body.appendChild(fireworkContainer);

// //     for (let i = 0; i < 25; i++) {
// //         const firework = document.createElement('div');
// //         firework.classList.add('firework');
// //         firework.style.backgroundColor = randomColor();
// //         firework.style.width = '5px';
// //         firework.style.height = '5px';
// //         firework.style.left = `${Math.random() * 80 - 50}px`;
// //         firework.style.top = `${Math.random() * 80 - 50}px`;
// //         firework.style.animation = `firework 1s ease-out forwards, fall 1s ${Math.random() * 0.5}s forwards`;
// //         fireworkContainer.appendChild(firework);
// //     }

// //     setTimeout(() => {
// //         fireworkContainer.remove();
// //     }, 300);
// // }
// // // 监听单击事件
// // document.addEventListener('click', (event) => {
// //     const x = event.clientX;
// //     const y = event.clientY + window.scrollY;
// //     createFirework(x, y);
// // });

// // 新的点击效果：水波扩散（大小随机）
// function createRipple(x, y) {
//     const ripple = document.createElement('div');
//     ripple.className = 'ripple';
//     ripple.style.left = `${x}px`;
//     ripple.style.top = `${y}px`;
//     // 生成随机比例（2～5之间），保留两位小数
//     const randomScale = (Math.random() * 3 + 2).toFixed(2);
//     ripple.style.setProperty('--random-scale', randomScale);
//     document.body.appendChild(ripple);

//     // 动画完成后移除该元素（800ms 与 CSS 动画时间对应）
//     setTimeout(() => {
//         ripple.remove();
//     }, 800);
// }

// document.addEventListener('click', (event) => {
//     const x = event.clientX;
//     const y = event.clientY + window.scrollY;
//     createRipple(x, y);
// });

// // 监听滚动事件，为鼠标添加更精致的滚动交互效果
// document.addEventListener('scroll', () => {
//     // 添加 scrolling 类，触发滚动时的样式效果
//     CURSOR.cursor.classList.add('scrolling');
//     // 清除之前可能存在的定时器，避免连续滚动导致提前移除
//     clearTimeout(CURSOR.scrollTimeout);
//     // 设置定时器，150毫秒后移除 scrolling 类
//     CURSOR.scrollTimeout = setTimeout(() => {
//         CURSOR.cursor.classList.remove('scrolling');
//         CURSOR.cursor.style.transform = '';
//         CURSOR.cursor.style.opacity = '';
//         CURSOR.cursor.style.boxShadow = '';
//     }, 150);
// });




// 监听图片放大事件
document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});

// 监听滚动条事件
document.addEventListener('scroll', function () {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${scrolled}%`;
});

// 监听页面可见性变化事件
document.addEventListener("DOMContentLoaded", function () {
    let originalTitle = document.title; // 存储原始标题
    const awayTitle = "跑哪去惹(*´･д･`)"; // 当用户离开页面时显示的标题
    // 监听页面是否可见
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            document.title = awayTitle; // 当页面失去焦点时更改标题
        } else {
            // 当用户回到页面时恢复标题并开始每0.5秒更新一次
            document.title = originalTitle; // 恢复标题
        }
    });
    setInterval(function () {
        // 获取当前页面的完整 URL
        if (!document.hidden){
            originalTitle = document.title;
        } 
    }, 1000);
});

function injectGithubStarButton() {
    const sourceLinks = document.querySelectorAll('[data-md-component="source"]');
    const countCacheKey = 'dixi-github-star-count-cache-v1';
    const countCacheTtl = 1000 * 60 * 30;

    sourceLinks.forEach((sourceLink) => {
        const host = sourceLink.closest('.md-header__source') || sourceLink.parentElement;
        const existingStar = host && host.querySelector('.md-source__github-star');
        if (!host || existingStar) {
            return;
        }

        const repoUrl = sourceLink.getAttribute('href');
        if (!repoUrl) {
            return;
        }

        let normalizedUrl;
        try {
            normalizedUrl = new URL(repoUrl);
        } catch (_) {
            return;
        }

        const segments = normalizedUrl.pathname
            .replace(/\.git$/, '')
            .split('/')
            .filter(Boolean);

        if (segments.length < 2) {
            return;
        }

        const [user, repo] = segments;
        const repoPageUrl = normalizedUrl.toString().replace(/\.git$/, '');
        const stargazersUrl = `${repoPageUrl}/stargazers`;
        const starGuideImageUrl = new URL('/img/github-star-guide-placeholder.png', window.location.origin).toString();
        const starWrapper = document.createElement('span');
        starWrapper.className = 'md-source__github-star';
        starWrapper.dataset.repo = `${user}/${repo}`;
        starWrapper.innerHTML = `
            <span class="md-source__github-star-shell">
                <span class="md-source__github-star-action" aria-hidden="true">
                    <span class="md-source__github-star-icon">★</span>
                    <span class="md-source__github-star-label">Star</span>
                </span>
                <a
                    class="md-source__github-star-count"
                    href="${stargazersUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                >Stars</a>
            </span>
            <span class="md-source__github-star-tooltip" role="tooltip">
                <span class="md-source__github-star-tooltip-title">如何在 GitHub 上点亮 Star</span>
                <span class="md-source__github-star-tooltip-text">登录 GitHub 后，直接点左侧 Star 按钮即可。</span>
                <img
                    class="md-source__github-star-tooltip-image"
                    src="${starGuideImageUrl}"
                    alt="GitHub Star 操作截图"
                    loading="lazy"
                >
            </span>
            <iframe
                class="md-source__github-star-frame"
                src="https://ghbtns.com/github-btn.html?user=${encodeURIComponent(user)}&repo=${encodeURIComponent(repo)}&type=star&count=false&size=large"
                title="GitHub Star"
                loading="lazy"
                width="56"
                height="30"
            ></iframe>
        `;

        sourceLink.insertAdjacentElement('afterend', starWrapper);

        const countNode = starWrapper.querySelector('.md-source__github-star-count');
        const apiUrl = `https://api.github.com/repos/${encodeURIComponent(user)}/${encodeURIComponent(repo)}`;
        let cachedStars = null;

        try {
            const cached = window.localStorage.getItem(countCacheKey);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (
                    parsed &&
                    parsed.repo === `${user}/${repo}` &&
                    Number.isFinite(parsed.stars) &&
                    Number.isFinite(parsed.updatedAt) &&
                    Date.now() - parsed.updatedAt < countCacheTtl
                ) {
                    cachedStars = parsed.stars;
                }
            }
        } catch (_) {}

        const renderStars = (stars) => {
            const formatted = new Intl.NumberFormat('zh-CN').format(stars);
            countNode.textContent = formatted;
            countNode.setAttribute('aria-label', `${formatted} 人已 Star`);
            starWrapper.dataset.ready = 'true';
        };

        if (Number.isFinite(cachedStars)) {
            renderStars(cachedStars);
        }

        fetch(apiUrl, {
            headers: {
                Accept: 'application/vnd.github+json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`GitHub API ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const stars = Number(data.stargazers_count);
                if (!Number.isFinite(stars)) {
                    throw new Error('Invalid stargazers_count');
                }

                renderStars(stars);
                try {
                    window.localStorage.setItem(countCacheKey, JSON.stringify({
                        repo: `${user}/${repo}`,
                        stars,
                        updatedAt: Date.now()
                    }));
                } catch (_) {}
            })
            .catch(() => {
                if (!Number.isFinite(cachedStars)) {
                    countNode.textContent = 'Star';
                    countNode.setAttribute('aria-label', '查看 GitHub Star 列表');
                }
            });
    });
}

if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(injectGithubStarButton);
} else {
    document.addEventListener("DOMContentLoaded", injectGithubStarButton);
}


(function () {
    if (window.__dixiHomeInitRegistered) {
        return;
    }

    window.__dixiHomeInitRegistered = true;

    function cleanupDixiHome() {
        if (typeof window.__dixiHomeCleanup === "function") {
            window.__dixiHomeCleanup();
        }
        window.__dixiHomeCleanup = null;
    }

    function initDixiHome() {
        cleanupDixiHome();

        const home = document.querySelector(".dixihome");
        const progress = document.querySelector(".dixihome-progress span");
        const profile = document.querySelector(".dixihome-profile");

        if (!home || !progress) {
            return;
        }

        const cleanups = [];
        let animationId = 0;
        let resizeObserver = null;

        const updateProgress = () => {
            const rect = home.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const read = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
            progress.style.setProperty("--dixi-progress", (read / Math.max(total, 1) * 100).toFixed(1) + "%");
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);
        cleanups.push(() => window.removeEventListener("scroll", updateProgress));
        cleanups.push(() => window.removeEventListener("resize", updateProgress));

        if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(updateProgress);
            resizeObserver.observe(home);
            cleanups.push(() => resizeObserver && resizeObserver.disconnect());
        }

        if (!profile || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.__dixiHomeCleanup = () => {
                cleanups.forEach((cleanup) => cleanup());
            };
            return;
        }

        const tags = Array.from(profile.querySelectorAll(".dixihome-tags li"));
        const pointer = { x: -9999, y: -9999, active: false };

        const handlePointerMove = (event) => {
            const rect = profile.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;

            profile.style.setProperty("--dixi-spot-x", x.toFixed(2) + "%");
            profile.style.setProperty("--dixi-spot-y", y.toFixed(2) + "%");
            pointer.x = event.clientX - rect.left;
            pointer.y = event.clientY - rect.top;
            pointer.active = true;
        };

        const handlePointerLeave = () => {
            profile.style.setProperty("--dixi-spot-x", "78%");
            profile.style.setProperty("--dixi-spot-y", "8%");
            pointer.active = false;
        };

        profile.addEventListener("pointermove", handlePointerMove);
        profile.addEventListener("pointerleave", handlePointerLeave);
        cleanups.push(() => profile.removeEventListener("pointermove", handlePointerMove));
        cleanups.push(() => profile.removeEventListener("pointerleave", handlePointerLeave));

        const moveTags = (time) => {
            const profileRect = profile.getBoundingClientRect();

            tags.forEach((tag, index) => {
                const tagRect = tag.getBoundingClientRect();
                const centerX = tagRect.left - profileRect.left + tagRect.width / 2;
                const centerY = tagRect.top - profileRect.top + tagRect.height / 2;
                const dx = centerX - pointer.x;
                const dy = centerY - pointer.y;
                const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
                const force = pointer.active ? Math.max(0, (150 - distance) / 150) : 0;
                const scatterX = (dx / distance) * force * (34 + index * 3);
                const scatterY = (dy / distance) * force * (22 + index * 2);
                const swimX = Math.sin(time / (950 + index * 110) + index) * (4 + index % 3);
                const swimY = Math.cos(time / (1100 + index * 90) + index * 0.7) * (3 + index % 2);

                tag.classList.toggle("is-lit", force > 0.1);
                tag.style.setProperty("--scatter-x", scatterX.toFixed(2) + "px");
                tag.style.setProperty("--scatter-y", scatterY.toFixed(2) + "px");
                tag.style.setProperty("--swim-x", swimX.toFixed(2) + "px");
                tag.style.setProperty("--swim-y", swimY.toFixed(2) + "px");
                tag.style.setProperty("--tag-rot", (Math.sin(time / 1300 + index) * 1.8 + scatterX * 0.03).toFixed(2) + "deg");
            });

            animationId = window.requestAnimationFrame(moveTags);
        };

        if (tags.length) {
            animationId = window.requestAnimationFrame(moveTags);
            cleanups.push(() => window.cancelAnimationFrame(animationId));
        }

        window.__dixiHomeCleanup = () => {
            cleanups.forEach((cleanup) => cleanup());
            tags.forEach((tag) => {
                tag.classList.remove("is-lit");
            });
        };
    }

    const scheduleDixiHomeInit = () => {
        window.requestAnimationFrame(initDixiHome);
    };

    if (typeof document$ !== "undefined" && document$.subscribe) {
        document$.subscribe(scheduleDixiHomeInit);
    } else {
        document.addEventListener("DOMContentLoaded", scheduleDixiHomeInit);
    }
})();



// 页面访问记录
document.addEventListener("DOMContentLoaded", function () {
    // 获取当前页面的完整 URL
    const currentUrl = document.location.href;
    const currentPath = document.location.pathname;
    // console.log("Current URL:", currentUrl, currentPath);

    // 获取最后访问的页面 URL
    const lastVisitedUrl = localStorage.getItem("lastVisitedUrl");

    // 检查是否在主页
    const isHomePage = currentPath === '/';

    // 如果在主页、最后访问的 URL 存在且不等于当前 URL（规避死循环），跳转到最后访问的页面
    if (isHomePage && lastVisitedUrl && lastVisitedUrl !== currentUrl) {
        document.location.href = lastVisitedUrl;
    }

    // 每隔1秒检查当前 URL 并更新 lastVisitedUrl
    setInterval(function () {
        // 获取当前页面的完整 URL
        const currentUrl = document.location.href;

        // 获取最后访问的页面 URL
        const lastVisitedUrl = localStorage.getItem("lastVisitedUrl");

        // 如果当前 URL 与最后访问的 URL 不同，则更新 lastVisitedUrl
        if (currentUrl !== lastVisitedUrl) {
            localStorage.setItem("lastVisitedUrl", currentUrl);
        }
    }, 1000);
});
