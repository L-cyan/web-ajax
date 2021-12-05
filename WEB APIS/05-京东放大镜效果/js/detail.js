window.addEventListener('load', function () {
  // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
  var preview_img = document.querySelector('.preview_img');
  var mask = document.querySelector('.mask');
  var big = document.querySelector('.big');
  preview_img.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    big.style.display = 'block';
  })
  preview_img.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    big.style.display = 'none';
  })
  // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
      // (1). 先计算出鼠标在盒子内的坐标   
  preview_img.addEventListener('mousemove', function(e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // (2) 减去盒子宽高高度的一半 就是我们mask 的最终 left 和top值了
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;

     // 黄色 盒子 右移 最大位置
    var maskMax = preview_img.offsetWidth - mask.offsetWidth;
    if (maskX <= 0) {
      maskX = 0
    } else if (maskX > maskMax ) {
      maskX = maskMax 
    }
    if (maskY <= 0) {
      maskY = 0
    } else if (maskY > maskMax ) {
      maskY = maskMax;
    }
    // (3) mask 移动的距离
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
      // 大图
    var  bigImg = document.querySelector('.bigImg')
      // 大图片最大移动距离
    var bigImgMax = bigImg.offsetWidth - big.offsetWidth
    
    var bigX = maskX * bigImgMax / maskMax;
    var bigY = maskY * bigImgMax / maskMax;
      // 大图片的移动距离 X Y
    bigImg.style.left = -bigX + 'px';
    bigImg.style.top =- bigY + 'px';
  })
})
  

 
     
 
   
    
    
