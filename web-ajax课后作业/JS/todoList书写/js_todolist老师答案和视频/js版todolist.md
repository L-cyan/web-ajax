## js 版todolist

## 1. 将输入框中的数据保存到本地存储当中

```js
	window.onload = function () {
    // 一 按下回车后保存输入的数据
    // 1 判断当前是否按下回车键，如果是回车键我们就保存数据，如果不是则证明我们在数据数据
    // 2 获取本地存储数据
    // 3 获取输入框中的数据， 将数据拼接成一个对象
    // 4 将拼接好的数据，追加到本地存储中的数据
    // 5 保存到本地存储当中
    var input = document.querySelector('#title')
    input.addEventListener('keyup', function (e) {
        if(this.value == '') return
        if(e.key == 'Enter') {
            var todoData = getData()
            todoData.push({title:this.value, done: false})
            setData(todoData)
        }
    })

    // 封装获取本地数据的方法
    function getData() {
        var data = localStorage.getItem('todo')
        return data == null ? [] : JSON.parse(data)
    }

    // 存储数据的方法
    function setData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }
}
```

## 2. 将本地存储的数据渲染到页面上

```js
window.onload = function () {
    // 当页面加载时 渲染本地数据
    load()
    // 一 按下回车后保存输入的数据
    // 1 判断当前是否按下回车键，
    // 2 获取本地存储数据
    // 3 获取输入框中的数据， 将数据拼接成一个对象
    // 4 将拼接好的数据，追加到本地存储中的数据
    // 5 保存到本地存储当中
    var input = document.querySelector('#title')
    input.addEventListener('keyup', function (e) {
        if(this.value == '') return
        if(e.key == 'Enter') {
            var todoData = getData()
            todoData.push({title:this.value, done: false})
            setData(todoData)
            load()
        }
    })

    // 封装获取本地数据的方法
    function getData() {
        var data = localStorage.getItem('todo')
        return data == null ? [] : JSON.parse(data)
    }

    // 存储数据的方法
    function setData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }

=>    // 第二个功能将本地存储的数据渲染到页面上
=>    // 1. 获取本地存储的数据
=>    // 2. 通过遍历本地存储的数据，创建出对应的小li
=>    // 3. 如果 done 的属性是 true 那么就追加到 ul 当中，如果done 的属性是 false 那么追加到 ol 当中
=>    function load() {
=>        var loadData = getData()
=>        console.log(loadData)
=>        var ul = document.querySelector('#donelist')
=>        var ol = document.querySelector('#todolist')
=>        // 因为在页面第一次加载时，就已经调用了一次 load 方法， 而在保存新数据后，仍然要渲染页面，这就导致了页面的重复渲染
=>        // 此时应将 ul 和 ol 中的数据，全部清除，避免了数据的重复渲染
=>        ol.innerHTML = null
=>        ul.innerHTML = null
=>        loadData.forEach(function (item, index) {
=>            if(item.done) {
=>                // 渲染到已完成的 ul 当中
=>                var li = document.createElement('li')
=>                li.innerHTML = `<input type="checkbox"  checked="checked"><p>${item.title}</p><a></a>`
=>                ul.append(li)
=>            } else {
=>                // 渲染到为完成的 ol 当中
=>                var li = document.createElement('li')
=>                li.innerHTML = `<input type="checkbox" ><p>${item.title}</p><a></a>`
=>                ol.append(li)
=>            }
=>
=>        })
=>    }
}
```

## 3. 修改复选框状态，重新渲染数据列表

```js
window.onload = function () {
    // 当页面加载时 渲染本地数据
    load()
    // 一 按下回车后保存输入的数据
    // 1 判断当前是否按下回车键，
    // 2 获取本地存储数据
    // 3 获取输入框中的数据， 将数据拼接成一个对象
    // 4 将拼接好的数据，追加到本地存储中的数据
    // 5 保存到本地存储当中
    var input = document.querySelector('#title')
    input.addEventListener('keyup', function (e) {
        if(this.value == '') return
        if(e.key == 'Enter') {
            var todoData = getData()
            todoData.push({title:this.value, done: false})
            setData(todoData)
            load()
        }
    })

    // 封装获取本地数据的方法
    function getData() {
        var data = localStorage.getItem('todo')
        return data == null ? [] : JSON.parse(data)
    }

    // 存储数据的方法
    function setData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }

    // 第二个功能将本地存储的数据渲染到页面上
    // 1. 获取本地存储的数据
    // 2. 通过遍历本地存储的数据，创建出对应的小li
    // 3. 如果 done 的属性是 true 那么就追加到 ul 当中，如果done 的属性是 false 那么追加到 ol 当中
    function load() {
        var loadData = getData()
        console.log(loadData)
        var ul = document.querySelector('#donelist')
        var ol = document.querySelector('#todolist')
        // 因为在页面第一次加载时，就已经调用了一次 load 方法， 而在保存新数据后，仍然要渲染页面，这就导致了页面的重复渲染
        // 此时应将 ul 和 ol 中的数据，全部清除，避免了数据的重复渲染
        ol.innerHTML = null
        ul.innerHTML = null
        loadData.forEach(function (item, index) {
            if(item.done) {
                // 渲染到已完成的 ul 当中
                var li = document.createElement('li')
=>                li.innerHTML = `<input type="checkbox" data-input=${index}  checked="checked"><p>${item.title}</p><a></a>`
                ul.append(li)
            } else {
                // 渲染到为完成的 ol 当中
                var li = document.createElement('li')
=>                li.innerHTML = `<input type="checkbox" data-input=${index} ><p>${item.title}</p><a></a>`
                ol.append(li)
            }

        })
    }

    // 第三个功能，修改复选框状态，重新渲染数据列表
    // 当前的 li 是通过数据追加到页面上的，属于是未来元素，不能通过传统的绑定数据方式，要通过事件委托的形式，绑定到父级上，去监听子元素的触发
    // 当前页面，复选框存在与 ul 和 ol 当中，两个列表中都需要改变状态， 此时将事件处理程序封装成一个函数，这样两个列表都可以使用
    // 此时有个问题，如何获取到我们点击的复选框的索引
    // 可以在渲染li 的时候直接给我们的input 设置个自定义属性，方便获取我们修改数据的序号
    // 有了索引号之后，直接访问数组中的元素的 done 属性，将期更改为 true
    // 最后重新渲染页面
=>    var ol = document.querySelector('ol')
=>    var ul = document.querySelector('ul')
=>    ol.addEventListener('change', function (e){
=>        changeData(e)
=>    })
=>    ul.addEventListener('change', function (e) {
=>        changeData(e)
=>    })
=>    // 封装改变数据事件
=>    function changeData (e){
=>        var index = e.target.getAttribute('data-input')
=>        var changeData = getData('todo')
=>        changeData[index].done = e.target.checked
=>        setData(changeData)
=>        load()
=>    }
}
```

## 4. 删除功能

```js
window.onload = function () {
    // 当页面加载时 渲染本地数据
    load()
    // 一 按下回车后保存输入的数据
    // 1 判断当前是否按下回车键，
    // 2 获取本地存储数据
    // 3 获取输入框中的数据， 将数据拼接成一个对象
    // 4 将拼接好的数据，追加到本地存储中的数据
    // 5 保存到本地存储当中
    var input = document.querySelector('#title')
    input.addEventListener('keyup', function (e) {
        if(this.value == '') return
        if(e.key == 'Enter') {
            var todoData = getData()
            todoData.push({title:this.value, done: false})
            setData(todoData)
            load()
        }
    })

    // 封装获取本地数据的方法
    function getData() {
        var data = localStorage.getItem('todo')
        return data == null ? [] : JSON.parse(data)
    }

    // 存储数据的方法
    function setData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }

    // 第二个功能将本地存储的数据渲染到页面上
    // 1. 获取本地存储的数据
    // 2. 通过遍历本地存储的数据，创建出对应的小li
    // 3. 如果 done 的属性是 true 那么就追加到 ul 当中，如果done 的属性是 false 那么追加到 ol 当中
    function load() {
        var loadData = getData()
        console.log(loadData)
        var ul = document.querySelector('#donelist')
        var ol = document.querySelector('#todolist')
        // 因为在页面第一次加载时，就已经调用了一次 load 方法， 而在保存新数据后，仍然要渲染页面，这就导致了页面的重复渲染
        // 此时应将 ul 和 ol 中的数据，全部清除，避免了数据的重复渲染
        ol.innerHTML = null
        ul.innerHTML = null
        loadData.forEach(function (item, index) {
            if(item.done) {
                // 渲染到已完成的 ul 当中
                var li = document.createElement('li')
=>                li.innerHTML = `<input type="checkbox" data-input=${index}  checked="checked"><p>${item.title}</p><a data-a=${index}></a>`
                ul.append(li)
            } else {
                // 渲染到为完成的 ol 当中
                var li = document.createElement('li')
=>                li.innerHTML = `<input type="checkbox" data-input=${index} ><p>${item.title}</p><a data-a=${index}</a>`
                ol.append(li)
            }

        })
    }

    // 第三个功能，修改复选框状态，重新渲染数据列表
    // 当前的 li 是通过数据追加到页面上的，属于是未来元素，不能通过传统的绑定数据方式，要通过事件委托的形式，绑定到父级上，去监听子元素的触发
    // 当前页面，复选框存在与 ul 和 ol 当中，两个列表中都需要改变状态， 此时将事件处理程序封装成一个函数，这样两个列表都可以使用
    // 此时有个问题，如何获取到我们点击的复选框的索引
    // 可以在渲染li 的时候直接给我们的input 设置个自定义属性，方便获取我们修改数据的序号
    // 有了索引号之后，直接访问数组中的元素的 done 属性，将期更改为 true
    // 最后重新渲染页面
    var ol = document.querySelector('ol')
    var ul = document.querySelector('ul')

    ol.addEventListener('change', function (e){
        changeData(e)
    })
    ul.addEventListener('change', function (e) {
        changeData(e)
    })
    // 封装改变数据事件
    function changeData (e){
        var index = e.target.getAttribute('data-input')
        var changeData = getData('todo')
        changeData[index].done = e.target.checked
        setData(changeData)
        load()
    }

    // 第四个删除功能
    // 1. 删除功能同我们修改功能一样，都是给未来元素绑定事件，采用事件委托的形式
    // 2. 在ul 和 ol 当中 都有 a 标签要做删除功能，此时将删除逻辑抽离成一个函数，方便复用
    // 3. 在删除时，要判断当前删除的元素是否是a， 因为我们是通过事件委托的形式给 ul 和 ol 增加点击事件的，
    // 此时就面临一个问题，如何找到当前触发源是a标签呢，此时我们可以通过 e.target.nodeName 判断点击的是否是 a 标签
    // 此时就有了另一个问题，如何找到当前点击的索引号呢，此时可以通过创建 a 标签时，给a 增加一个自定义属性用来获取当前a 的索引
    // 如果是的话，就通过数据的 splice 方法，删掉数组当中的一个元素
=>    ol.addEventListener('click', function (e){
=>        deletData(e)
=>    })
=>    ul.addEventListener('click', function (e) {
=>        deletData(e)
=>    })
=>    // 封装删除方法
=>    function deletData(e) {
=>        if(e.target.nodeName == 'A'){
=>            var data = getData()
=>            var index = e.target.getAttribute('data-a')
=>            data.splice(index, 1)
=>            setData(data)
=>            load()
=>        }
=>    }
}
```

## 5. 显示当前完成和未完成的数量

```js
window.onload = function () {
    // 当页面加载时 渲染本地数据
    load()
    // 一 按下回车后保存输入的数据
    // 1 判断当前是否按下回车键，
    // 2 获取本地存储数据
    // 3 获取输入框中的数据， 将数据拼接成一个对象
    // 4 将拼接好的数据，追加到本地存储中的数据
    // 5 保存到本地存储当中
    var input = document.querySelector('#title')
    input.addEventListener('keyup', function (e) {
        if(this.value == '') return
        if(e.key == 'Enter') {
            var todoData = getData()
            todoData.push({title:this.value, done: false})
            setData(todoData)
            load()
        }
    })

    // 封装获取本地数据的方法
    function getData() {
        var data = localStorage.getItem('todo')
        return data == null ? [] : JSON.parse(data)
    }

    // 存储数据的方法
    function setData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }

    // 第二个功能将本地存储的数据渲染到页面上
    // 1. 获取本地存储的数据
    // 2. 通过遍历本地存储的数据，创建出对应的小li
    // 3. 如果 done 的属性是 true 那么就追加到 ul 当中，如果done 的属性是 false 那么追加到 ol 当中
    function load() {
        var loadData = getData()
        console.log(loadData)
        var ul = document.querySelector('#donelist')
        var ol = document.querySelector('#todolist')
        // 因为在页面第一次加载时，就已经调用了一次 load 方法， 而在保存新数据后，仍然要渲染页面，这就导致了页面的重复渲染
        // 此时应将 ul 和 ol 中的数据，全部清除，避免了数据的重复渲染
        ol.innerHTML = null
        ul.innerHTML = null
        // 声明完成和未完成的
=>      var todocount = 0,
=>          donecount = 0
=>      // 获取对应的 dom 节点
=>      var todoDom = document.querySelector('#todocount')
=>      var donecountDom = document.querySelector('#donecount')
        loadData.forEach(function (item, index) {
            if(item.done) {
                // 渲染到已完成的 ul 当中
=>              donecount++
                var li = document.createElement('li')
                li.innerHTML = `<input type="checkbox" data-input=${index}  checked="checked"><p>${item.title}</p><a data-a=${index}></a>`
                ul.append(li)
            } else {
                // 渲染到为完成的 ol 当中
=>              todocount++
                var li = document.createElement('li')
                li.innerHTML = `<input type="checkbox" data-input=${index} ><p>${item.title}</p><a data-a=${index}</a>`
                ol.append(li)
            }
        })
=>      todoDom.innerText = todocount
=>      donecountDom.innerText = donecount
    }

    // 第三个功能，修改复选框状态，重新渲染数据列表
    // 当前的 li 是通过数据追加到页面上的，属于是未来元素，不能通过传统的绑定数据方式，要通过事件委托的形式，绑定到父级上，去监听子元素的触发
    // 当前页面，复选框存在与 ul 和 ol 当中，两个列表中都需要改变状态， 此时将事件处理程序封装成一个函数，这样两个列表都可以使用
    // 此时有个问题，如何获取到我们点击的复选框的索引
    // 可以在渲染li 的时候直接给我们的input 设置个自定义属性，方便获取我们修改数据的序号
    // 有了索引号之后，直接访问数组中的元素的 done 属性，将期更改为 true
    // 最后重新渲染页面
    var ol = document.querySelector('ol')
    var ul = document.querySelector('ul')

    ol.addEventListener('change', function (e){
        changeData(e)
    })
    ul.addEventListener('change', function (e) {
        changeData(e)
    })
    // 封装改变数据事件
    function changeData (e){
        var index = e.target.getAttribute('data-input')
        var changeData = getData('todo')
        changeData[index].done = e.target.checked
        setData(changeData)
        load()
    }

    // 第四个删除功能
    // 1. 删除功能同我们修改功能一样，都是给未来元素绑定事件，采用事件委托的形式
    // 2. 在ul 和 ol 当中 都有 a 标签要做删除功能，此时将删除逻辑抽离成一个函数，方便复用
    // 3. 在删除时，要判断当前删除的元素是否是a， 因为我们是通过事件委托的形式给 ul 和 ol 增加点击事件的，
    // 此时就面临一个问题，如何找到当前触发源是a标签呢，此时我们可以通过 e.target.nodeName 判断点击的是否是 a 标签
    // 此时就有了另一个问题，如何找到当前点击的索引号呢，此时可以通过创建 a 标签时，给a 增加一个自定义属性用来获取当前a 的索引
    // 如果是的话，就通过数据的 splice 方法，删掉数组当中的一个元素
    ol.addEventListener('click', function (e){
        deletData(e)
    })
    ul.addEventListener('click', function (e) {
        deletData(e)
    })
    // 封装删除方法
    function deletData(e) {
        if(e.target.nodeName == 'A'){
            var data = getData()
            var index = e.target.getAttribute('data-a')
            data.splice(index, 1)
            setData(data)
            load()
        }
    }
=>    // 第五个功能，显示对应的数量
=>    // 1. 在创建li 时，就记录对应的数量
=>    // 2. 获取对应的 dom 节点渲染
}
```

