# rocos 菜鸟入门

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

<!-- 引入 Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>

<script>
    // 确保 Firebase 只初始化一次
    if (!firebase.apps.length) {
        const firebaseConfig = {
            apiKey: "AIzaSyAa66EUv9NGTgQ2MmRrSUzvmWQIh7DAH0w",
            authDomain: "dixilog-cc0be.firebaseapp.com",
            projectId: "dixilog-cc0be",
            storageBucket: "dixilog-cc0be.appspot.com",
            messagingSenderId: "317567263984",
            appId: "1:317567263984:web:58fa672ce564bf554d0e35",
            measurementId: "G-XKHLTS0VXB"
        };
        firebase.initializeApp(firebaseConfig);
    }

    // 监听用户登录状态
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // 输出调试信息
            console.log('User already logged in, redirecting...');
            // alert('您已登录，为您自动跳转~');
        } else {
            // 输出调试信息
            console.log('User not logged in, redirecting to login.html');
            window.location.href = 'login.html'; // 未登录用户跳转到登录页
        }
    });
</script>


## 写在前面
:   NBU足球组的菜鸟入门系列教程，基于老师的教学视频与自己的拙略理解编写
:   希望对足球组的同学们有所帮助
:   也算是抛砖引玉，希望 NBU 足球组能慢慢搭建属于我们自己的 WIKI !



??? warning "因能力有限，这一部分暂时只对 NBU 足球组的童鞋开放喔~  |  等楼建得差不多了就会放开惹"
    ~~只是对身份认证的尝试，开源仓库一览无余捏O__O "~~


> MAKE ROCOS GREAT AGAIN！
