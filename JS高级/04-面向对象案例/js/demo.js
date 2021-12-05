var that
class Tab {
    constructor(id) {
        that = this
        // 获取元素
        // 获取主体内容
        this.main = document.querySelector(id)
        // 获取所有的 li 千万不要写错哈
        this.lis = this.main.querySelectorAll('li')
        // 获取 所有的 section
        this.sections = this.main.querySelectorAll('section')
        // 注意这个地方时类选择器
        this.add = this.main.querySelector('.tabadd')
        // li 的父亲
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.fsection = this.main.querySelector('.tabscon')
        // 
        this.init()
    }
    // init 初始化操作让相关的元素绑定事件
    init() {
        that.updateNode()
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTable
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }

    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        // 获取叉号 
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    // 1. 切换功能
    toggleTable() {
        //为当前的标题添加激活样式
        that.clearClass()
        //为当前的标题添加激活样式
        this.className = 'liactive';
        //为当前的内容添加激活样式
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    // 2. 添加功能
    addTab() {
        that.clearClass();
        var random = Math.random();
        // (1) 创建li元素和section元素 
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi">				</span></li>';
        var section = '<section class="conactive">测试 ' + random + '</section>';
        // (2) 把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        console.log(that.fesction);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init()
    }
    // 3. 删除功能
    removeTab(e) {
        e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
        var index = this.parentNode.index;
        console.log(index);
        // 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
        index--;
        // 手动调用我们的点击事件  不需要鼠标触发
        that.lis[index] && that.lis[index].click();
    }
    // 4. 修改功能
    editTab() {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select()
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
            // 手动调用表单失去焦点事件  不需要鼠标离开操作
            this.blur();
            }
        }
    }
}

new Tab("#tab")