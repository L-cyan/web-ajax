window.addEventListener('load', function () {
  // 获取元素
  var preview_img = document.querySelector('.preview_img');
  var mask = document.querySelector('.mask');
  var big = document.querySelector('.big');
  var bigImg = document.querySelector('.bigImg');


  // 设置显示隐藏
  preview_img.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    big.style.display = 'block';
  })
  preview_img.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    big.style.display = 'none';
  })
  // 遮罩框移动
  preview_img.addEventListener('mousemove', function (e) {
    var x = e.pageX - preview_img.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // 遮罩层一半
    var half = mask.offsetHeight / 2;
    // 遮罩层坐标 这里只能数值
    var maskX = x - half;
    var maskY = y - half;
    // 限制
    var maskMax = preview_img.offsetWidth - mask.offsetWidth;
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= maskMax) {
      maskX = maskMax;
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= maskMax) {
      maskY = maskMax;
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';
    // 大图片的移动
    var bigImgMax = bigImg.offsetWidth - big.offsetWidth;
    var bigX = maskX * bigImgMax / maskMax;
    var bigY = maskY * bigImgMax / maskMax;
    bigImg.style.left = - bigX + 'px';
    bigImg.style.top = - bigY + 'px';
  })
})