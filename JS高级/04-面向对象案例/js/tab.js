var that;// 不能再class里面声明 用来维护this指向
class Tab {
    
    constructor(id) {
        // ①获取元素\
    that = this 
        this.main = document.querySelector(id);
        
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.fSection = this.main.querySelector('.tabscon')
        // 在实例化的时候 启用初始化 要加this 
        this.init();

    }
// 方法1 初始化
    // 为了让新添加的元素能有点击效果
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.section = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.span = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    init() {
        // 先获取元素
        this. updateNode()
        //点击+按钮 增加元素
        this.add.onclick = this.addTab
        
        for (var i = 0; i < this.lis.length ; i++) {
            // init是实例化对象调用 指的是实例化对象 
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTable // 不写（）点击触发
            this.remove[i].onclick = this.removeTab  // 写在循环内部 添加事件
            this.span[i].ondblclick = this.editTab
            this.section[i].ondblclick = this.editTab;
        }
    }
    // 方法2 切换
toggleTable() { 
  // li调用 指向li
        that.clearClass()
        this.className = 'liactive';
        that.section[this.index].className='conactive'
    }
   
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className=''
            this.section[i].className=''
        }   
    }
// 方法3 删除
    removeTab(e) {
        // this 删除按钮
        e.stopPropagation() // 阻止冒泡 触发li的点击切换事件
        if (that.lis.length == 1)  return // 不让全部删除
        var index = this.parentNode.index
        // console.log(index);
        // 根据索引删除对应的li ul
        that.lis[index].remove();
        that.section[index].remove();
        // 刷新初始化
       
        that.init();
        // 优化效果 ① 当前有点击 那么删除别的之后还是现实该点击的选项
        if (document.querySelector('.liactive')) return
       
        // 删除后显示前一个 手动执行前一个的点击事件 如果找不到前一个则不执行
        index == 0 ? 0 : index-- // 解决删除第一个 没有切换的状态
        that.lis[index] && that.lis[index].click()
    }
// 方法4 修改
    editTab() {
        // this 指向span
        var str = this.innerHTML
        // 禁止选中文字 
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML =  '<input type="text" />';
        var input = this.children[0];
        input.value = str
        input.select() // 文本框内容为选定状态
        // 鼠标离开时 将文本内容给span
        input.onblur = function () {
            // this 指的是input
            this.parentNode.innerHTML= this.value
        }
        // 我们按下回车时 手动调用焦点事件
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // this 为input   
            this.blur();
             }
            
        }


    }
// 方法5 增加
    addTab() {
        // 为了添加后有当前效果 先删除
        that.clearClass()
        var li = ' <li class="liactive"><span>选项</span><span class="iconfont icon-guanbi"></span></li>'
        var uls =  '<section class="conactive">测试5</section>'
        // this指向add
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fSection.insertAdjacentHTML('beforeend', uls)
        //添加后重新初始化
        that.init()
    }
};

    

 
var tab = new Tab ('#tab')