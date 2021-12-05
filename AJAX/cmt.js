$(function () {
    // 1.定义函数获取列表数据 并调用
    function getC() {
        // 参照接口文档 看参数 方式 url等
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            success: function (res) {
                console.log(res);
                if (res.status !== 200) return alert('失败')
                // 2.渲染列表 定义空数组 循环遍历追加 每一条数据
                var row = []
                $.each(res.data, function (i, item) {
                    row.push(`<li class="list-group-item">
                    <span class="badge">评论时间:${item.time}</span>
                    <span class="badge">评论人:${item.username}</span>
                    ${item.content}
                </li>`)
                })
                // 先清空列表 在追加转为字符串
                $('.list-group').empty().append(row.join(''))
            }
        })
    }
    getC()
    // 3 发表功能
    // 3.2注册提交事件  阻止默认行为 获取表单数据 .serialize() 提交给服务器
    $('#formAddVmt').submit(function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
            if (res.status !== 201) {
                return  alert('失败')
            }
            // 成功刷新列表即可
            getC()
            // 3.3 清空内容 原生JS方法 先转为DOM元素 .reset()
            $('#formAddVmt')[0].reset()
        })
    })
})