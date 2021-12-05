$(function () {
    // 1. 复选框操作  全选 全不选
    // 全选按钮（checkall）change事件  将状态赋值给三个小的按钮（j-checkbox）
    $('.checkall').change(function () {
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'));
        // 7.点击背景颜色变化 设置css样式 添加删除class
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item')
        }
    })
    // 1.1 下面小复选框发生change事件时 根据  $('.j-checkbox:checked')[:前后不能空格]得到被选中的复选框 length 与全部复选框个数比较 相等全选 否则不全选
    $('.j-checkbox').change(function () {
        $('.checkall').prop('checked', $('.j-checkbox:checked').length === $('.j-checkbox').length ? true : false);
        // if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
        //     $(".checkall").prop("checked", true);
        // } else {
        //     $(".checkall").prop("checked", false);
        // }
         // 7.点击背景颜色变化 设置css样式 添加删除class
         if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item')
        } else {
            $(this).parents(".cart-item").removeClass('check-cart-item')
        }
    })
    // 2 商品数量增减 + - 按钮click事件 先定义变量获取其兄弟数量 在 ++ --[等于1时不允许修改 return false]  重新赋值给当前元素兄弟数量 
    $('.increment').click(function () {
        // 先获取表单值
        var n = $(this).siblings('.itxt').val();
       //console.log(n);
        n++;
        // 这里不应该直接$('.itxt') 会改变其他同类名的值
        $(this).siblings('.itxt').val(n)
        // 3 小计金额随之改变 
        // 找到单价 当前+按钮父级的父级的兄弟 可以用parents 所有父级然后指定选择器
        var p = $(this).parents('.p-num').siblings('.p-price').text();
        // substr 截取字符串 去掉￥ 直接重新赋值即可
        p = p.substr(1);
        // 计算赋值给小计 可以toFixed（n） 保留n位小数
        $(this).parents('.p-num').siblings('.p-sum').text('￥'+(p * n).toFixed(2))
        getSum()
    })
    $('.decrement').click(function () {      
        var n = $(this).siblings('.itxt').val();
       // console.log(n);
        if (n == 1) {
            return false;
        } else {
            n--;
            $(this).siblings('.itxt').val(n)  
        }
         // 3 小计金额随之改变 
        // 找到单价 当前+按钮父级的父级的兄弟 
        var p = $(this).parents('.p-num').siblings('.p-price').text();
        // substr 截取字符串 去掉￥
        p = p.substr(1);
        // 计算赋值给小计
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (p * n).toFixed(2))
        getSum()
    })
    // 4 当数量文本框修改的时候 单价也随之改变
    $('.itxt').change(function () {
        var n = $(this).val();
      //  console.log(isNaN(n));
        // 这个值应该限制一下吧
        if (n > 0 ) {
            var p = $(this).parents('.p-num').siblings('.p-price').text();
            p = p.substr(1);
           $(this).parents('.p-num').siblings('.p-sum').text('￥'+(p * n).toFixed(2))   
        } else {
            alert('请输入正确数量')
        // 此处不完善 还会保留值 且小计值不变有BUG 应该有更多操作
        }
        getSum()
    })
    getSum() // 加载时就计算
    // 5  总计 总数量 封装一个函数 在+ — 写入 渲染 删除项目时候都需要用
    function getSum() {
        var sum = 0;
        var priceSum = 0 
        $('.itxt').each(function (i, domEle) {
            // 表单获取的值用val 是字符串 要转为数字相加
            sum += parseInt($(domEle).val());
        })
        $('.amount-sum em').text(sum)
        $('.p-sum').each(function (i, domEle) {
            // 普通元素获取用text
            priceSum += parseFloat($(domEle).text().substr(1))
            // 浮点数计算精度问题 用toFixed()
            $('.price-sum em').text('￥'+priceSum.toFixed(2) )
        })
    }
    // 6  删除商品 三个地方
    // 点击每项后面的删除按钮 
    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove();
        getSum();
    })
    // 删除选中的
    $('.remove-batch').click(function () {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    })
    // 清空
    $('.clear-all').click(function () {
        $('.cart-item').remove();
        getSum();
    })



})

