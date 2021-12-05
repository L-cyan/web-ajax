
var that
class Tab {
    constructor(id) {
        // 获取元素
        that = this
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul')
        this.fSection=this.main.querySelector('.tabscon')
        // 利用new调用constructor来启动init
        this.init()
    }
    // 将变动节点封装
    updateNode() {
        this.lis =  this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.tInfo = this.main.querySelectorAll('.fisrstnav li span:first-child')
        // this.sInfo = this.main.querySelectorAll('.tabscon section:first-child')
    }
    //  初始化
    init() {
        // this指向实例对象
        //先更新节点
        this.updateNode()
        //点击添加新增 不用写在for循环内
        this.add.onclick=this.addTab
        // 循环绑定事件
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab//切换
            this.remove[i].onclick = this.removeTab //删除
            this.tInfo[i].ondblclick =this.editTab
            this.sections[i].ondblclick =this.editTab
        }
     }

    // 功能1 切换
    toggleTab() {
        that.clearClass()
        //  this 指的是li
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    clearClass() {
         // this指向实例对象
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';           
        }
    }
    // 功能2 新增 this指向add
    addTab() {
        // 清除之前的选中状态
        that.clearClass()
        var random = Math.random()
        //新增的默认选中状态
        var li1 = ' <li class="liactive"><span>新选项</span><span class="iconfont icon-guanbi"></span></li>'
        var s1 = `<section class="conactive">${ random}</section>`
        that.ul.insertAdjacentHTML('beforeend', li1)
        that.fSection.insertAdjacentHTML('beforeend', s1)
        //使切换状态生效 再渲染一下
        that.init()
    }
    // 功能3 删除 this指向删除按钮
    removeTab(e) {
        //需要先组织冒泡 防止点击事件的触发产生问题
        e.stopPropagation()
        // 最后一个不能删
        if (that.lis.length === 1) return
        var  index = this.parentNode.index
        this.parentNode.remove()
       // console.log(this.parentNode.index);
        that.sections[index ].remove()
        // 在渲染 写在最后的话就全部能删除了 放在这个位置
        that.init()
        // 优化 如果有选中的选项 那么删除别的仍然显示当前选项
        if (document.querySelector('.liactive'))return
        // 优化 让删除后显示前一个 删第一个的话 就显示删后索引为0 的第一个
        index == 0 ? 0 : index--
        that.lis[index]&&that.lis[index].click()
        
    }
    // 功能4 编辑 this指向 
    editTab() {
        // 获取内容
        var str = this.innerHTML
        // 禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 将内容添加至文本框 默认全选
        this.innerHTML = '<input type="text">'
        var input = this.children[0]
        input.value = str
        input.select()
        //  失去焦点或者按下enter 标题内容修改
        input.onblur = function () {
            // this是输入框
            this.parentNode.innerHTML = this.value
        }
        
        input.onkeyup = function (e) {
            if (e.keyCode ===13) {
                this.blur()
            }
        }
    }


}
 new Tab('#tab')