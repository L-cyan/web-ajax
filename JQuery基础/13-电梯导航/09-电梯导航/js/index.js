$(function () {
    // 1  页面滚到到位置 显示电梯
    var toolTop = $('.recommend').offset().top;
    var flag =true // 互斥锁 解决点击事件里的滚动造成 滚动事件中给楼层添加类引起的BUG 当点击时 禁止滚动添加类 完成后放开
    // 解决已加载页面显示隐藏电梯问题
    toolToggle()
    function toolToggle() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function () {
        toolToggle()
        // 页面滑动时高亮跟随对应li添加类 遍历楼层根据卷去的部分和是否大于楼层的offset().top 得到i 然后对应li添加类
        if (flag) {
            $('.floor .w').each(function (i , domEle) {
                if ($(document).scrollTop() >= $(domEle).offset().top) {
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass()
                }
            })
        }

    })
    // 2 点击电梯 页面滚动到对应位置（对应索引号的 项目的offset().top)  
    $('.fixedtool li').click(function () {
        flag = false;
        // 页面应该去往的位置
        var current = $('.floor .w').eq($(this).index()).offset().top;
        $('body , html').stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
         // 点击时高亮显示   
        $(this).addClass('current').siblings().removeClass()// 只有一个类名可不写 
    })

})