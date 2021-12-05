window.addEventListener('load', function () {
// 用JS书写TODOlist注意点
// 获取元素后 再load（）加载渲染 要么放在内部函数
// 判断条件一定要== 或者=== 不能一个等号
// 注意书写结构 不要写岔了 写在函数里面了  
// JS 创建元素添加的话 已经创建li innerHTML就不要在写li了    
    var tittle = document.getElementById('title')
    var ol = document.getElementById('todolist')
    var ul = document.getElementById('donelist')
    load();
    tittle.addEventListener('keydown', function (e) {
        // 也可以写e.key =='enter'
        if (e.keyCode === 13) {
            if (this.value.trim() === '') {
                alert('请输入正确的值')
            } else {
                var local = getData();
                // 在里面追加这一条新数据 默认未完成
                local.push({ title: this.value, done: false })
                // 存储数据
                saveData(local)
                // 渲染在页面
                load();
                // 清空文本内容
                this.value=''              
            }
        }
    })
    function getData() {
        var data = localStorage.getItem('toDoList')
        console.log(data);
        //  return data == null ? [] : JSON.parse(data)
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
    function load() {
        // 获取
        var data = getData();
          // 因为加载渲染和需要渲染时会有重复数据 需要先清空ol 和ul的内容
        ol.innerHTML = null;
        ul.innerHTML = null;   
        // var lis1 = ol.children
        // for (var i = 0 ; i < lis1.length ;i++) {
        //       ol.removeChild(lis1[i])
        // } 
          // 5 统计数据
          var toDoCount = 0;
          var doneCount = 0;
          // 遍历 创建时 利用id唯一性设置为索引 方便以后删除操作 此时根据 done属性分组 已完成默认状态勾选
        data.forEach(function (n, i) {          
            if (n.done) {
                var li = document.createElement('li')
                li.innerHTML =`<input type="checkbox" checked='checked' ><p>${n.title}</p><a href="javascript:;" id=${i}></a>`
                ul.appendChild(li)
                doneCount++
            } else { 
                var li = document.createElement('li')
                li.innerHTML = `<input type="checkbox" > <p>${n.title}</p> <a href="javascript:;" id=${i}></a>`              
                ol.appendChild(li)
                toDoCount++
            }
        });       
        document.querySelector('#todocount').innerText = toDoCount
        document.querySelector('#donecount').innerText = doneCount
    }  
      // 事件委托  当点击a 或者input时 触发对应事件
      ol.addEventListener('click', function (e) {
          var data = getData();
          console.log();
         // console.log(e.target.nodeName);
          if (e.target.nodeName === 'A') {
              var index = e.target.getAttribute('id')
              console.log(index);
               data.splice(index, 1)
              saveData(data);
              load()
          }
          if (e.target.nodeName === 'INPUT') {                                                                                                                     
              var index = e.target.parentNode.lastElementChild.getAttribute('id')
              data[index].done = e.target.checked
              saveData(data);
              load()
           }
      })
      ul.addEventListener('click', function (e) {
          var data = getData();
         // console.log(e.target.nodeName);
          if (e.target.nodeName === 'A') {
              var index = e.target.getAttribute('id')
              console.log(index);
              data.splice(index, 1)
              saveData(data);
              load()
          }
          if (e.target.nodeName === 'INPUT') {                                                                                                                     
              var index = e.target.parentNode.lastElementChild.getAttribute('id')
            //   console.log(index);
            //   console.log(e.target.checked);
              data[index].done = e.target.checked
              saveData(data);
              load()
           }

      })
})