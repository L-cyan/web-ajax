// $(function () {
    // 1. 处理data对象参数 转为查询字符串的格式
    function resolveData(data) {
        // 定义空数组 遍历以键值对追加到数组中
        var arr = []
        for (var k in data) {
           arr.push(`${k}=${data[k]}`) 
        }
        // 将数组转为&链接的字符串 返回当做查询字符串
        // 这个函数 应该return 一个结果 所以写return 不用定义变量啥的
        return arr.join('&')
    }
    // 2封装AJAX函数 
    // 传入的是配置对象
    function myAjax(option) {
        // 2.1创建对象
        var xhr = new XMLHttpRequest()
        // 2.2将配置对象的数据转为查询字符串
        var qs = resolveData(option.data)
        // 2.3 根据option.method 注意.toUpperCase()是个方法要加()条件判断 执行 open和send
        if (option.method.toUpperCase() === 'GET') {
            // 地址应该是option.url得到  且get要拼接？查询字符串
            xhr.open('GET', `${option.url}?${qs}`)
            xhr.send()          
        } else if (option.method.toUpperCase() === 'POST') {
            xhr.open(option.method,option.url)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(qs)
        }
        // 2.4 监听事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 将responseText转为对象 给option的success的参数
                var res = JSON.parse(xhr.responseText)
                option.success(res)
            }
        }
    }
//  })
