window.addEventListener('load', function () {
  // 获取元素
  var arrow_l = document.querySelector('.arrow-l');
  var arrow_r = document.querySelector('.arrow-r');
  var focus = document.querySelector('.focus');
  var focusWidth = focus.offsetWidth; // 全局使用
  // 功能1 鼠标经过/离开轮播图区域 显示/隐藏左右按钮 开启关闭定时器
  focus.addEventListener('mouseenter', function () {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer)
    timer = null
  })
  focus.addEventListener('mouseleave', function () {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function () {
      arrow_r.click();
    },2000)
  })

  // 解决问题 生成小圆圈 动态与图片匹配
  var ul = focus.querySelector('ul');
  var ol = focus.querySelector('.circle');
  for (var i = 0; i < ul.children.length;i++) {
    var li = document.createElement('li');
    li.setAttribute('data-index', i);
    ol.append(li);
    // 解决问题 小圆圈的排他思想 写在for循环内
    li.addEventListener('click', function () {
      for (var i = 0; i < ol.children.length;i++) {
        ol.children[i].className = '';
      }
      this.className = 'current';
      // 功能2 点击小圆圈 切换图片 利用动画
      var index = this.getAttribute('data-index');
      // 解决BUG 点击图片再左右按钮出现错乱
      num = index;
      circle = index;
      // 针对我书写的
      // num = index ;
      // 移动的是ul 距离是图片宽度* 索引的负值
      animate(ul , - index * focusWidth )

    })  
  }
  // 设置当前图片选中
  ol.children[0].className = 'current';
  //  功能3  点击右侧按钮 滚动
  // 克隆第一张图片 解决圆圈和图片不匹配问题
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  var num = 0;
  var circle = 0;
  var flag = true;
  arrow_r.addEventListener('click', function () {
    if (flag) {
      flag = false
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, - num * focusWidth, function () {
        flag = true;
      });
      // 功能右侧按钮 小圆圈一起变化  
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      circleChange();
    }
    
    // 我书写的不用加图片也能实现无缝
    // var num = 1;
    // var circle = 1;
    // arrow_r.addEventListener('click', function () {
    //   if (num == ul.children.length ) {
    //     ul.style.left = 0;
    //     num = 0;
    //   }
      
    //   animate(ul, - num * focusWidth)
    //   num++; 
    //     for (var i = 0; i < ol.children.length;i++) {
    //       ol.children[i].className = '';
    //   }
    //   if (circle == ol.children.length) {
    //     circle = 0;
    //   }
    //     ol.children[circle].className = 'current';
    //   circle++; 
    
  });
  console.log(ul.children.length);
  // 功能4 左侧按钮    
  arrow_l.addEventListener('click', function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = - num * focusWidth + 'px';
      }
      
      num--;
      animate(ul, - num * focusWidth, function () {
        flag = true;
      });
  
      circle--;
      // if (circle < 0) {
      //   circle = ol.children.length - 1;
      // }
      circle = circle < 0 ? ol.children.length - 1 : circle;
      circleChange();
    
    }
  });
  // 排他函数
  function circleChange() {
    for (var i = 0; i < ol.children.length;i++) {
      ol.children[i].className = '';
    }
    ol.children[circle].className = 'current';
  }
 // 功能5   自动播放
  var timer = setInterval(function () {
    arrow_r.click();
  }, 2000);
  
  


})