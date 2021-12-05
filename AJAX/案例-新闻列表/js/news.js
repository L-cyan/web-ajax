$(function () {
    // 1.获取新闻数据 注意查看接口文档
    function getNews() {
        $.get(' http://www.liulongbin.top:3006/api/news', function (res) {
            if ( res.status !== 200) {
               return  alert('失败') 
            }
            console.log(res);
            // 2.2 因为"tags" 字符串需要循环 所以将每一个转为数组
            for (var i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags.split(',')
            }
            // 调用模板引擎函数 并渲染
            var item = template('tpl-news', res)
            $('#news-list').html(item            
        })
    }
    // 渲染
    getNews()
    // 3.定义过滤器 美化时间 先定义补零函数
    function padZero(n) {
       return n>=10? n:'0'+n
     }
    template.defaults.imports.dateFormat = function (dateInfo) {
        var date = new Date(dateInfo)
        var y = date.getFullYear()
        // 使用补零方法
        var m = padZero(date.getMonth() + 1)
        var d = padZero(date.getDate())
        var hh = padZero(date.getHours())
        var mm = padZero(date.getMinutes())
        var ss = padZero(date.getSeconds())
        return ` ${y}-${m}-${d} ${hh}:${mm}:${ss}  `
    }
})