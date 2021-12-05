window.addEventListener('load', function () {
    var regTel = /^1[3|4|5|7|8|9]\d{9}$/
    var regQq = /^[1-9]\d{4,}$/
    var regNc = /^[\u4e00-\u9fa5]{2,8}$/
    var regMsg = /^\d{6}$/
    var regPwd = /^\w{6,16}$/
    // var regPwd = /^[a-zA-Z-_0-9]{6,16}$/
    var tel = document.querySelector('#tel')
    var nickName = document.querySelector('#nc')
    var qq = document.querySelector('#qq')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var surePwd = document.querySelector('#surepwd') 
    reg(tel,regTel)
    reg(qq,regQq)
    reg(msg,regMsg)
    reg(nickName,regNc)
    reg(pwd, regPwd)
     //  校验的方法封装 
    function reg(ele ,reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML= ' <i class="success_icon"></i>正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = ' <i class="error_icon"></i>错误'
             }   
        }  
    }
    surePwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML= ' <i class="success_icon"></i>正确'
         } else 
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = ' <i class="error_icon"></i>错误'
     }
})