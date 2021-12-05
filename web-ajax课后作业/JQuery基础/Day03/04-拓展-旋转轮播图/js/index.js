/**
 * Created by Lenovo on 2017/11/23.
 */
$(window).load(function () {
        //��תľ����ԭ����ÿ������һ����ʽ;�����/�Ҳఴť��ʱ��
        //              �������еĵ�/���һ�����ӵ��������ǰ��/����;
    //����1: ҳ����ص�ʱ��ÿ��li��ǩ����һ����ʽ;(��������ʾ���ƿ�����)
    //����2: ����Ҳఴť��ɾ�����������һ�������ӵ��������ǰ��;
    //����3: �����ఴť��ɾ�������е�һ�������ӵ�����������;


    var arrOfJson = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity: 0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity: 0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity: 1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity: 0.2,
            "z-index":2
        }
    ];
    load()
    function load() {
        $.each(arrOfJson, function (i , n) {
            $('li').eq(i).css({
                top: n.top,
                width: n.width,
                left: n.left,
                opacity: n.opacity,
                // 这里这么写不会有层级不对的BUG  n['z-index']
                zIndex:n['z-index']
           })
        })   
    }
    // 左右按钮显示与隐藏
    $('.wrap .slide').hover(function () {
        $('.arrow').css('opacity',1)
    }, function () {
        $('.arrow').css('opacity',0)
      })
    
    // 点击按钮 将数据变化 然后渲染
    $('.next').on('click', function () {
        last = arrOfJson.pop();
        arrOfJson.unshift(last);
        load()        
    })
    $('.prev').on('click', function () {
        first = arrOfJson.shift();
        arrOfJson.push(first);
        load()        
    })

// 答案写法
    //  var bool = true;
    //  $("#slide li").each(function (index,ele) {
    //      $(ele).css("z-index",arrOfJson[index]["z-index"])
    //      $(ele).animate(arrOfJson[index],1000);
    //  });
    //  $("#wrap").hover(function () {
    //      $("#arrow").fadeTo(100,1);
    //  },function () {
    //      $("#arrow").fadeTo(100,0);
    //  })
    //  $(".next").click(function () {
    //      if(bool == false){
    //          return;
    //      }
    //      bool = false;
    //      var last = arrOfJson.pop();
    //      arrOfJson.unshift(last);
    //      $("#slide li").each(function (index,ele) {
    //          $(ele).css("z-index",arrOfJson[index]["z-index"])
    //          $(ele).animate(arrOfJson[index],1000, function () {
    //              bool = true;
    //          });
    //      });
    //  });  
    //  $(".prev").click(function () {
    //      var first = arrOfJson.shift();
    //      arrOfJson.push(first);
    //      $("#slide li").each(function (index,ele) {
    //          $(ele).css("z-index",arrOfJson[index]["z-index"])
    //          $(ele).animate(arrOfJson[index],1000);
    //      });
    //  })   
});








