$(function () {
  // 初始化右侧滚动条让聊天框区域自动滚动到底部
  // 这个方法定义在scroll.js中
    resetui();
    // 1.将用户输入的内容渲染到聊天窗口
    $('#btnSend').on('click', function() {
        var text = $('.input_txt').val().trim()
        if (text.length <= 0) {
            //  没数据 结束并置空
            return $('.input_txt').val('')
        }
        // 获取到对应的ul容器，调用 append 函数来追加 li，注意：追加li的类名叫做 right_word
    $('#talk_list') .append(`<li class="right_word">
    <img src
    ="img/person02.png" /> <span>${text}</span>
  </li>`)
        // 清空文本框输入的内容
        $('.input_txt').val('')
        // 重置右侧滚动条位置
        resetui();
        // 用户输入后调用机器人的消息
        getMsg(text)
 
    })
    // 定义一个函数 获取机器人消息 传入用户输入的信息
    function getMsg(text) {
        $.ajax({
            method: 'GET',
            url:'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken:text
            },
            success: function (res) {
                console.log(res);
                if (res.message === 'success') {
                    // 接受消息 渲染在页面
                    var msg = res.data.info.text
                    // 注意类名是left-word
                    $('#talk_list') .append(` <li class="left_word">
                    <img src="img/person01.png" /> <span>${msg}</span>
                  </li>`)
                     // 重置右侧滚动条位置
                    resetui();
                    // 调用转语音
                    getVoice(msg)
                }
            }

            
        })
        
    }
    // 定义文字转语音
    function getVoice(text) {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
              text: text
            },
            success: function (res) {
                console.log(res);
                if (res.status == 200) {
                    //  播放语音 注意 后面的res.voiceUrl不要加''
                   $('#voice').prop('src',res.voiceUrl) 
                }
            }
        })
    }
    //3 回车键提交
    $('.input_txt').on('keyup', function (e) {     
        if (e.keyCode === 13) {
            // 手动调用点击事件
          $('#btnSend').click()
        }
      })
});
