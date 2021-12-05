window.addEventListener('load', function () {
  // 1. 获取元素
  // 获取轮播图容器 
  var focus = document.querySelector('.focus');
  // 获取 小圆点 所在的 ol 
  var ol = focus.children[1]
  // 获取到 ul 元素 因为 focus 下的 第一个 子元素 就是 ul
  var ul = focus.children[0];
  // 获取 focus 的宽度
  var w = focus.offsetWidth
  // 2. 利用定时器自动轮播图片
  var index = 0;
  var timer = setInterval(function () {
    index++;
    var translatex = -index * w;
    ul.style.transition = 'all .3s'
    ul.style.transform = 'translateX(' + translatex + 'px)'
    console.log(index);
  }, 2000)
  // 等着我们的过渡完成之后, 再去判断, 监听过渡完成的时间 transitionend 
  ul.addEventListener('transitionend', function () {
    // console.log('123');
    // 无缝滚动
    if (index >= 3) {
      index = 0
      // 去掉过渡效果,这样让我们的ul,快速的跳到目标位置
      ul.style.transition = 'none';
      // 利用最新的索引号乘以宽度 去滚动 图片
      var translatex = -index * w;
      ul.style.transform = 'translateX(' + translatex + 'px)'
    } else if (index < 0) {
      index = 2;
      // 利用最新的索引号乘以宽度 去滚动 图片
      ul.style.transition = 'none';
      var translatex = -index * w;
      ul.style.transform = 'translateX(' + translatex + 'px)'
    }
    // 3. 小圓點跟隨變化
    // 把 ol 里面 li 帶有  current 類名的选出来去掉类名 remove
    ol.querySelector('.current').classList.remove('current')
    // 让当前索引号的小 li 加上 current add
    ol.children[index].classList.add('current')
  })
  // 4. 手指滑动轮播图
  // 触摸元素 touchstarts 获取手指初始坐标
  var startX = 0;
  var moveX = 0; // 后面我们会使用这个移动距离 所以要定义一个全局变量
  var flag = false; // 判断是否发生移动 
  ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX;
    // 手指触摸的时候 就要停止计时器
    clearInterval(timer)
  })
  // 移动手指 touchmove 计算手指的滑动距离,并且移动盒子
  ul.addEventListener('touchmove', function (e) {
    moveX = e.targetTouches[0].pageX - startX
    // 移动盒子 : 盒子原来位置 + 手指移动距离
    var translateX = -index * w + moveX
    // 手指拖动的时候, 不需要动画效果所以要取消过渡动画效果
    ul.style.transition = 'none'
    ul.style.transform = 'translateX(' + translateX + 'px)'
    flag = true // 如果用户手指移动过 我们在去判断 否则 不做判断 
    e.preventDefault()
  })
  // 手指离开,根据移动距离去判断是会谈还是播放上一张或者是下一章
  ul.addEventListener('touchend', function () {
    // 如果移动距离大于50像素我们就播放上一张或者下一张
    if (flag) {
      if (Math.abs(moveX) > 50) {
        //(1) 如果是右滑就是 播放上一张 moveX 是正值
        if (moveX > 0) {
          index--
        } else {
          // 如果是左滑就是 播放下一张 moveX 是负值
          index++
        }
        var translatex = -index * w
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)'
      } else {
        // (2) 如果移动距离小于50像素我们就回弹
        var translatex = -index * w;
        ul.style.transition = 'all .1s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
      }
    }
    // 手指离开的时候 就重新开启定时器
    clearInterval(timer);
    timer = setInterval(function () {
      index++;
      var translatex = -index * w;
      ul.style.transition = 'all .3s';
      ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
  })
  // 返回顶部模块制作
  var goBack = document.querySelector('.goBack');
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= nav.offsetTop) {
      goBack.style.display = 'block';
    } else {
      goBack.style.display = 'none';
    }
  });
  goBack.addEventListener('click', function () {
    window.scroll(0, 0);
  })
})