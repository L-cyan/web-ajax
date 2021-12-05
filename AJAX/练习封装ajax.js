function resolveData(data) {
    var arr = []
    for (var k in data) {
        arr.push(`${k}=${data[k]}`)
    }
    // 这个函数 应该return 一个结果 所以写return 不用定义变量啥的
   return arr.join('&')
}
function ownAjax(option) {
    var xhr = new XMLHttpRequest()
    var qs = resolveData(option.data)
    if (option.method.toUpperCase() ==='GET') {
        xhr.open(option.method, option.url +'?'+ qs)
        xhr.send()
    } else if (option.method.toUpperCase() ==='POST') {
        xhr.open(option.method, option.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            option.success(JSON.parse(xhr.responseText))
        }
    }
    
}
