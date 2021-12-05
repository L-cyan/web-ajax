window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    ul = focus.children[0];
    ol = focus.children[1];
    var focusWidth = focus.offsetWidth;
    // 添加自动播放效果
    var index = 0;// 定义一个变量 让自增 然后移动一个图片的距离
    var timer = setInterval(function () {
        index++;
        var translatex = - index * focusWidth;
        // 添加过渡效果
        ul.style.transition = 'all  .3s'
        // 一定要注意加px
        ul.style.transform = `translateX(${translatex}px)`
    }, 2000)
    // 无缝移动 需要在过渡效果完成后判断到哪一张了
    ul.addEventListener('transitionend', function () {
        // 有BUG 切换其他页面长时间回来 所以讲== 改>=
        if (index >= ul.children.length - 2) {
            index = 0; // 复原index
            ul.style.transition = 'none' // 去除过渡效果
            var translatex = - index * focusWidth;
            ul.style.transform = `translateX(${translatex}px)`// 还原ul位置
            // 左滑时的无缝
        } else if (index < 0) {
            index = ul.children.length - 3; // 到最后一张图片
            ul.style.transition = 'none' // 去除过渡效果
            var translatex = - index * focusWidth;
            ul.style.transform = `translateX(${translatex}px)`// 还原ul位置     
        }
        // 小圆点修改当前current
        // 将对应类名全取消
        ol.querySelector('.current').classList.remove('current');
        //当前index 添加
        ol.children[index].classList.add('current');
    });
     // 手指拖动
    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
    })
    ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        ul.style.transition = 'none' // 去除过渡效果
        // 去除自动播放
        clearInterval(timer);
        var translatex = - index * focusWidth + moveX ;
        ul.style.transform = `translateX(${translatex}px)`// 还原ul位置 
        //手指滑动才有离开判断滑动距离回弹或者去上下页
        flag = true;
        // 手指移动是清除默认行为
        e.preventDefault();
    })
    // 手指离开时根据移动距离来确定上一张还是下一张 还是不动？
    ul.addEventListener('touchend', function () {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                moveX > 0 ? index-- : index++;
                // 添加过渡效果
                ul.style.transition = 'all  .3s'
                var translatex = - index * focusWidth;
                // 一定要注意加px
                ul.style.transform = `translateX(${translatex}px)`
            } else {
                // 回弹
                ul.style.transition = 'all  .3s'
                var translatex = - index * focusWidth;
                // 一定要注意加px
                ul.style.transform = `translateX(${translatex}px)`
            }
        }
        // 手指离开 开启定时器 先清除
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translatex = - index * focusWidth;
            // 添加过渡效果
            ul.style.transition = 'all  .3s'
            // 一定要注意加px
            ul.style.transform = `translateX(${translatex}px)`
        }, 2000)

    })
    // 返回顶部按钮
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }          
    })
    goBack.addEventListener('click', function () {
        window.scroll(0,0)
    })
})