// (function() {
//     $(".monitor .tabs").on("click", "a", function() {
//       $(this)
//         .addClass("active")
//         .siblings("a")
//         .removeClass("active");
  
//       // console.log($(this).index());
//       //   选取对应索引号的content
//       $(".monitor .content")
//         .eq($(this).index())
//         .show()
//         .siblings(".content")
//         .hide();
//     })
//   console.log(1);
//   // TAB栏内容区域数据滚动 做无缝滚动 先复制一份粘在最后 有两个内容 遍历方式
//   $('.marquee-view  .marquee').each(function () {
//     rows = $(this).children().clone()
//     $(this).append(rows)

//   })
// })();
// 监控区域模块制作
(function () {
  $(".monitor .tabs").on("click", "a", function() {
    $(this).addClass("active").siblings("a").removeClass("active");
    // console.log($(this).index());
    //   选取对应索引号的content
    $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
  });
  $(".marquee-view .marquee").each(function() {
    // console.log($(this));
    var rows = $(this).children().clone();
    $(this).append(rows);
  }); 
})();
// 点状区域
(function () {
  // 实例化对象 注意选择器类名.
  var myChart = echarts.init(document.querySelector('.pie'))
  // 配置项和数据
  var option = {
    color:['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
      name: '点位统计',
      type: 'pie',
      // 半径 内外 可以数值 可以百分比基于DOM容器 需要引号
      radius: ['10%', '75%'],
      // 在容器内位置 
      center: ['50%', '50%'],
      // radius 半径 和 area面积模式
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      // 修改连接线 
      labelLine: {
        length: 6,
        length2: 8,
      },
      label: {
        // 饼形图文字样式
        show: true,
        // fontSize: '20px',
        fontSize: 10,
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 20, name: '云南' },
        { value: 26, name: '北京' },
        { value: 24, name: '山东' },
        { value: 25, name: '河北' },
        { value: 20, name: '江苏' },
        { value: 25, name: '浙江' },
        { value: 30, name: '四川' },
        { value: 42, name: '湖北' }
      ]
    }  ]
 
  }
  myChart.setOption(option)
  // 监听浏览器窗口改变事件 然后实例对象调用方法
  window.addEventListener('resize', function () {
    myChart.resize()
  })

})();
// 用户区域
(function () {
  var item = {
    name: '',
    value: 1200,
    // 柱子
    itemStyle: {
      color: '#254065'
    },
    emphasis: {
      itemStyle: {
        color: '#254065'
      }
    },
    tooltip: {
      extraCssText: 'opacity:0'
    }
  }

  var myChart = echarts.init(document.querySelector('.bar'))
  var option = {
    // 修改线性渐变色方式 1
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0, 0, 0, 1,
      [
        { offset: 0, color: '#00fffb' }, // 0 起始颜色
        { offset: 1, color: '#0061ce' }  // 1 结束颜色
      ]
    ),
    tooltip: {
      // 只在柱上触发提示 改为item 此时也会取消阴影兄啊过
      trigger: 'item',
      // axisPointer: {
      //   type: 'shadow'
      // }
    },
    grid: {
      left: '0%',
      right: '3%',
      bottom: '3%',
      top: '3%',
      containLabel: true,
      // 显示
      show: true,
      // 边框颜色
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    // x轴坐标 样式修改
    xAxis: [
      {
        type: 'category',
        data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
        // 刻度
        axisTick: {
          alignWithLabel: false,
          // 不显示刻度
          show: false,
        },
        // 文字标签样式
        axisLabel: {
          color: '#4c9bfd'
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)',
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 刻度
        axisTick: {
          alignWithLabel: false,
          // 不显示刻度
          show: false,
        },
        axisLabel: {
          color: '#4c9bfd'
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)',
          }
        },
        // 设置Y轴分割线
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)',
          }
          
        }
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [2100,1900,1700,1560,1400,item,item,item,900,750,600,480,240]
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();
// 线型图
(function () {
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  }
  var myChart = echarts.init(document.querySelector('.line'))
  var option = {
    color: ['#00f2f1', '#ed3f35'],
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // 设置字体颜色和右边距
      textStyle: {
        color: '#4c9bfd',
        fontSize: 4
      },
      right: '5%',
      top: '-5%'
      // series 里面name同步 如果不想修改可以删除这个
      // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '15%',
      // 显示边框和颜色
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
       
      // 去除刻度线 文本颜色 去除轴线 去除周内间距
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd',
        fontSize: 8

      },
      axisLine: {
        show: false
      },
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      // 去除刻度 颜色 分割线颜色
      axisLabel: {
        color: '#4c9bfd',
        fontSize: 8
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '预期销售额',
        type: 'line',
        smooth: true,// 设置平滑
        data: data.year[0]
      },
      {
        name: '实际销售额',
        type: 'line',
        smooth: true,
        data: data.year[1]
      },
    
    ]
  };
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
  // TAB栏切换是切换data数据  给a设置自定义属性然后 点击时获取 查到数据再渲染
  $('.sales .caption').on('click', 'a', function () {
    $(this).addClass('active').siblings('a').removeClass('active')
    // 利用data['']里面正好是字符串 获取到数据
    var arr = data[this.dataset.type]
    option.series[0].data = arr[0]
    option.series[1].data = arr[1]
    myChart.setOption(option)// 渲染
    // 点击时BUG 
    index = $(this).index() - 1 // 因为前面有个h3
  })
  // 定时器 需要考虑鼠标经过 停定时器 离开 清除所有在开启定时器。鼠标点击后index值要变
  var as = $('.sales .caption a');
  var index = 0;
  var timer = setInterval(function () {
    index++;
    // 循环
    if (index >= as.length) index = 0;
    as.eq(index).click();
  }, 1000)
  // 鼠标
  $('.sales').hover(function () {
    clearInterval(timer)
  }, function () {
    clearInterval(timer)
    timer = setInterval(function () {
      index++;
      // 循环
      if (index >= as.length) index = 0;
      as.eq(index).click();
    }, 1000)
  })
})();
(function() {
  var myChart = echarts.init(document.querySelector('.radar'));
  const dataBJ = [
    [90, 19, 56, 11, 34],
    
  ];
  const lineStyle = {
    width: 1,
    opacity: 0.5,
    color:'#fff',

  };
  var option = {
    // 鼠标经过显示提示框组件
    tooltip: {
      show: true,
      //  提示框位置
      position:['60%','10%']
    },
    radar: {
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 }
      ],
     
      name: {
        textStyle: {
           // 文字颜色
        color:'#4c9bfd'
      }},
      shape: 'circle',
      // 外径占容器大小 也可数字
      radius:'65%',
      splitNumber:4,
      axisName: {
        color: 'rgb(238, 197, 102)'
      },
      splitLine: {
        lineStyle: {
          color: 
            'rgba(255,255,255, 0.5)',
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    series: [
      {
        name: 'Beijing',
        type: 'radar',
        // 线条颜色
        lineStyle: lineStyle,
        data: dataBJ,
        // 设置图形标记（拐点）
        symbol: 'circle',
        // 圆点大小
        symbolSize:5,
        itemStyle: {
          // 拐点颜色
          color: '#FFF'
        },
        // 拐点显示相关数据
        label: {
          show: true,
          color: '#fff',
          fontSize:10,
        },
        // 区域样式
        areaStyle: {
          // 填充的背景颜色
          color: 'rgba(238, 197, 102, 0.6)',
        }
      }  
    ]
    };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  }) 
})();
(function () {
  var myChart = echarts.init(document.querySelector('.gauge'));
   var option = {

    series: [
       {
         type: 'pie',
         radius: ['130%', '150%'],
         center: ['48%', '80%'],
         startAngle: 180,
         hoverOffset: 0,  
         // 是否启用防止标签重叠策略
         // avoidLabelOverlap: false,
         label: {
           show: false,
           position: 'center'
         },
      
         data: [
           {
             value: 150,
             itemStyle: {
               color: new echarts.graphic.LinearGradient(
                 // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                 0,
                 0,
                 0,
                 1,
                 [
                   { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                   { offset: 1, color: "#005fc1" } // 1 结束颜色
                 ]
               )
             }
           },
           {
             value: 50,
             itemStyle: {
               color: '#12274d'
             },
           },
           {
             value: 200,
             itemStyle: {
               color: 'transparent',
             },
           }
         ]
       }
  ]};
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();
(function () {
  // 开发中从后台得到这个数据
  var hotData = [
    {
      city: '北京',  // 城市
      sales: '25, 179',  // 销售额
      flag: true, //  上升还是下降
      brands: [   //  品牌种类数据
        { name: '可爱多', num: '9,086', flag: true },
        { name: '娃哈哈', num: '8,341', flag: true },
        { name: '喜之郎', num: '7,407', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '6,724', flag: false },
        { name: '好多鱼', num: '2,170', flag: true },
      ]
    },
    {
      city: '河北',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '3,457', flag: false },
        { name: '娃哈哈', num: '2,124', flag: true },
        { name: '喜之郎', num: '8,907', flag: false },
        { name: '八喜', num: '6,080', flag: true },
        { name: '小洋人', num: '1,724', flag: false },
        { name: '好多鱼', num: '1,170', flag: false },
      ]
    },
    {
      city: '上海',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '2,345', flag: true },
        { name: '娃哈哈', num: '7,109', flag: true },
        { name: '喜之郎', num: '3,701', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '2,724', flag: false },
        { name: '好多鱼', num: '2,998', flag: true },
      ]
    },
    {
      city: '江苏',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '2,156', flag: false },
        { name: '娃哈哈', num: '2,456', flag: true },
        { name: '喜之郎', num: '9,737', flag: true },
        { name: '八喜', num: '2,080', flag: true },
        { name: '小洋人', num: '8,724', flag: true },
        { name: '好多鱼', num: '1,770', flag: false },
      ]
    },
     {
      city: '山东',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '9,567', flag: true },
        { name: '娃哈哈', num: '2,345', flag: false },
        { name: '喜之郎', num: '9,037', flag: false },
        { name: '八喜', num: '1,080', flag: true },
        { name: '小洋人', num: '4,724', flag: false },
        { name: '好多鱼', num: '9,999', flag: true },
      ]
    }
  ]
  var supHtml = '';
  $.each(hotData, function (i, item) {
    supHtml +=`<li>
    <span>${item.city}</span>
    <span>${item.sales}<s class=${item.flag? 'icon-up':'icon-down'}></s></span>
  </li>`
  })
  $('.sup').html(supHtml)
  // 鼠标经过时候 高亮显示 并且显示sub模块
  $('.province .sup').on('mouseenter', 'li', function () {
   render($(this))
  })
  //默认第一个li选中并展示
  var lis = document.querySelector('.sup').querySelectorAll('li')

  // render(lis[0])
  $(lis[0]).mouseenter()
  //原生对象不能使用JQuery方法 或者转为JQuery对象 后面用到的lis也要转
  // var lis = $('.province .sup li')
  // lis.eq(0).mouseenter()
  // 设置定时器
  var index = 0
  var timer = setInterval(() => {
    index++;
    if (index >= 5) index = 0;
    render($(lis).eq(index));
  }, 2000);
  // 鼠标经过离开
  $('.province .sup').hover(function () {
    clearInterval(timer)
   }, function () {
    clearInterval(timer)
    timer = setInterval(() => {
      index++;
      if (index >= 5) index = 0;
      render($(lis).eq(index));
    }, 2000);
  })
  // 解决hover和mouseenter冲突问题 
  function render(currentEle) {
    currentEle.addClass('active').siblings().removeClass('active')
     index =currentEle.index();
     var subHtml = '';
     $.each(hotData[currentEle.index()].brands, function (i,item) {
       subHtml +=  `<li><span>${item.name}</span><span>${item.num} <s class=${item.flag?'icon-up':'icon-down'}></s></span></li>`
     })
     $('.sub').html(subHtml)  
  }

})();