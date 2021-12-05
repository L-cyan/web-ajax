window.addEventListener('load', function () {
  // 1实现鼠标经过/离开  左右按钮显示与隐藏 以及自动播放的开始停止
  var arrow_r = document.querySelector('.arrow-r');
  var arrow_l = document.querySelector('.arrow-l');
  var focus = document.querySelector('.focus');
  focus.addEventListener('mouseenter', function () {
    arrow_r.style.display = 'block';
    arrow_l.style.display = 'block';
    clearInterval(timer);
    timer = null;
  })
  focus.addEventListener('mouseleave', function () {
    arrow_r.style.display = 'none';
    arrow_l.style.display = 'none';
    timer =  setInterval(function () {
     arrow_r.click();
   },2000)
  })

  // 2 让图片与小圆点动态一致
  var ol = document.querySelector('.circle')
  var ul = focus.querySelector('ul')
  var focusWidth = focus.offsetWidth // 全局使用
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li')
    ol.appendChild(li)
    // 给每个圆点自定义索引
    li.setAttribute('data-index', i)
    
    // 3 圆点点击可以切换图片
    li.addEventListener('click', function () {
      // 排他 选中状态
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    this.className = 'current';
      // 这个写在事件里面！
      var index = this.getAttribute('data-index')
       // 解决BUG
      num = index;
      circle = index;
      animate(ul, -index * focusWidth)
     
    })
  }
 // 注意className前没有style
 ol.children[0].className='current'
  //  4 点击左右按钮 切换图片 
 
  // ① 通过拼接第一张图片来完成 写在生成圆点之外不会造成圆点不匹配 
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  console.log(ul.children.length);
  var num = 0; // 设置变量 不断点击进行累加
  var circle = 0;
  // 7 flag 节流阀
  var flag = true; 
  arrow_r.addEventListener('click', function () {
    // 当点击拼接的图片 此时num为ul.children.length（比圆点多一个）- 1  需要将其重置为0  并且将ul复原位置
    if (flag) {
      flag = false;
      if (num == ul.children.length - 1) {
        num = 0;
        ul.style.left = 0;
      }
      num++
      animate(ul, - num * focusWidth, function () {
        flag = true;
      });
      // 5.小圆点也跟随变化
      // 在设置一个变量circle
      circle++
      // 什么情况需要重置 走完ol的点 ol.children.length就是到了复制的图片再回到第一个
      if (circle == ol.children.length) {
        circle = 0;
      }
      // 将小圆点对应类名修改 先排他
      circleChange();
    }
  });
  arrow_l.addEventListener('click', function () {
    if (flag) {
      flag = false;
       // 当num -- 到0 的时候 转为最后一张拼接的
    if(num == 0  ) {
      num = ul.children.length - 1;
      ul.style.left = - num * focusWidth + 'px';
   }
    num--
      animate(ul, - num * focusWidth, function () {
        flag = true;
      })
    circle--
    
    // if ( circle < 0 ) {
    //   circle = ol.children.length-1;
    // }
    circle = circle < 0 ? ol.children.length - 1 : circle;
    // 将小圆点对应类名修改 先排他
    circleChange();
    }
  })
  function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    ol.children[circle].className = 'current';
  }
  // 6 自动播放
  var timer = setInterval(function () {
     // 手动调用右键点击
    arrow_r.click();
  },2000)
})