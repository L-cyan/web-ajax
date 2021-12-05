$(function () {
    //  前言 将一个项目的两个属性 内容状态以数组对象的形式存在本地存储中
    // var toDoList = [{ tittle: '1', done: false },{
    //     title: '我今天学习jq',
    //     done: false
    //   },]
    // // 不丢失需要 localStorage 只能存储字符串 JSON.stringify()转换
    // localStorage.setItem('toDo', JSON.stringify(toDoList))
    // var data = localStorage.getItem('toDo')
    // // 获取的字符串在转为对象JSON.parse()
    // data = JSON.parse(data);
    // console.log(data);
     // 1 利用事件对象 .keycode ===13 判断按下了回车
    load();// 渲染数据
    $('#title').on('keydown', function (e) {
        if (e.keyCode === 13) {
            //判断不能为空值
            if ( $(this).val().trim()==='') {
                alert('请输入正确的值')
            } else {
                // 先获取存储的数据
            var local = getData();
            // 在里面追加这一条新数据 默认未完成
            local.push({ title: $(this).val(), done: false })
            // 存储数据
            saveData(local)
            // 渲染在页面
                load();
                // 清空文本内容
                $(this).val('')
            }
            
        }
       
    })
    // 3 事件委托 点击删除 必须使用on 因为a是动态创建的
    $('ol,ul').on('click', 'a', function () {
        // 获取数据 没法直接删对应的本地存储 那么就修改数据 重新赋值 渲染
        var data = getData();
        // 获取a 的id 对应的索引
        var index = $(this).attr('id')
        // 这里写data = data.splice(index, 1) 返回的是删掉的数组 会有BUG
        data.splice(index, 1)
        saveData(data);
        load()
    })
    // 4 .复选框勾选时 分组 利用事件委托 先获取数据data 根据data[ 利用a得到索引].done = 选框的checked 在存储数据 渲染
    $('ol,ul').on('click', 'input', function () {
        var data = getData();
        var index = $(this).siblings('a').attr('id')
        console.log(index);
        data[index].done = $(this).prop('checked')
        // 要把data存入
        saveData(data);
        load()
    })

    function getData() {
        var data = localStorage.getItem('toDoList')
        if (data != null) {
            // 不为空 字符串转为对象
            return JSON.parse(data)
        } else {
            // 空 一个空的数组
            return []
        }
    }
    function saveData(data) {
        // 保存 需要转为字符串 
        localStorage.setItem('toDoList', JSON.stringify(data))  
    }
    // 2 将数据渲染到页面
    function load() {
      // 获取
        var data = getData();
        // 因为加载渲染和需要渲染时会有重复数据 需要先清空ol 和ul的内容
        $('ol,ul').empty()
        // 5 统计数据
        var toDoCount = 0;
        var doneCount = 0;

        // 遍历 有几个就创建几个li 创建时 利用id唯一性设置为索引 方便以后删除操作 此时根据 done属性分组 已完成默认状态勾选
        $.each(data, function (i, n) {
            if (n.done) {
                $('ul').append(`<li><input type="checkbox" checked='checked' > <p>${n.title}</p> <a href="javascript:;" id=${i}></a> </li>`)
                doneCount++
            } else {
                $('ol').append(`<li><input type="checkbox" > <p>${n.title}</p> <a href="javascript:;" id=${i}></a> </li>`)
                toDoCount++
            }
          
        })
        $('#todocount').text(toDoCount)
        $('#donecount').text(doneCount)
    }

})