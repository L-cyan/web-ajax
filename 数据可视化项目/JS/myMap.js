(function () {
    var myChart = echarts.init(document.querySelector('.geo'));
    var geoCoordMap = {
        灵宝: [110.8945, 34.51682],
        韶关: [113.591544, 24.801322],
        洛阳: [112.434468, 34.663041],
        长治: [113.113556, 36.191112],
        宿州: [116.984084, 33.633891],
        信阳: [114.075031, 32.123274],
        芜湖: [118.376451, 31.326319],
        景德镇: [117.214664, 29.29256],
        吉安: [114.986373, 27.111699],
        九江: [115.992811, 29.712034],
        宁都: [116.01565, 26.47227],
        长汀: [116.35888, 25.82773],
        南昌: [115.892151, 28.676493],
        赣州: [114.940278, 25.85097],
        梅州: [116.117582, 24.299112],
        龙川: [115.26025, 24.10142],
        大埔: [116.69662, 24.35325],
        汕头: [116.708463, 23.37102],
        南雄: [114.30966, 25.11706],
        广州: [113.280637, 23.125178],
        宝安: [113.88311, 22.55371],
        阳江: [111.975107, 21.859222],
        桂平: [110.08105, 23.39339],
        信宜: [110.94647, 22.35351],
        钦州: [108.624175, 21.967127],
        海口: [110.33119, 20.031971],
        柳州: [109.411703, 24.314617],
        榕江: [108.52072, 25.92421],
        凤山: [107.04892, 24.54215],
        韶光: [113.591544, 24.801322],
        贺州: [111.552056, 24.414141],
        郴州: [113.032067, 25.793589],
        邵阳: [111.46923, 27.237842],
        常德: [111.691347, 29.040225],
        恩施: [109.47942, 30.29502],
        重庆: [106.504962, 29.533155],
        惠州: [114.412599, 23.079404],
        龙岩: [117.02978, 25.091603],
        高雄: [120.311922, 22.620856],
        台北: [121.56517, 25.037798],
        中山: [113.382391, 22.521113],
        广元: [105.829757, 32.433668],
        成都: [104.065735, 30.659462],
        会理: [102.24539, 26.65627],
        凭祥: [106.75534, 22.10573],
    };
    
    var BJData = [
        [
            {
                name: '宿州',
            },
            {
                name: '芜湖',
                value: 60,
            },
        ],
    
        [
            {
                name: '灵宝',
            },
            {
                name: '灵宝',
                value: 60,
            },
        ],
        [
            {
                name: '长治',
            },
            {
                name: '长治',
                value: 60,
            },
        ],
        [
            {
                name: '洛阳',
            },
            {
                name: '洛阳',
                value: 60,
            },
        ],
        [
            {
                name: '灵宝',
            },
            {
                name: '信阳',
                value: 60,
            },
        ],
        [
            {
                name: '长治',
            },
            {
                name: '宿州',
                value: 60,
            },
        ],
        [
            {
                name: '洛阳',
            },
            {
                name: '信阳',
                value: 60,
            },
        ],
        [
            {
                name: '信阳',
            },
            {
                name: '吉安',
                value: 60,
            },
        ],
    ];
    
    var SHData = [
        [
            {
                name: '南昌',
            },
            {
                name: '南昌',
                value: 60,
            },
        ],
    
        [
            {
                name: '信阳',
            },
            {
                name: '景德镇',
                value: 60,
            },
        ],
    
        [
            {
                name: '芜湖',
            },
            {
                name: '景德镇',
                value: 60,
            },
        ],
    
        [
            {
                name: '景德镇',
            },
            {
                name: '长汀',
                value: 60,
            },
        ],
    
        [
            {
                name: '南昌',
            },
            {
                name: '赣州',
                value: 60,
            },
        ],
    ];
    
    var GZData = [
        [
            {
                name: '吉安',
            },
            {
                name: '南雄',
                value: 60,
            },
        ],
        [
            {
                name: '宁都',
            },
            {
                name: '宁都',
                value: 60,
            },
        ],
        [
            {
                name: '南雄',
            },
            {
                name: '惠州',
                value: 60,
            },
        ],
        [
            {
                name: '赣州',
            },
            {
                name: '龙川',
                value: 60,
            },
        ],
        [
            {
                name: '宁都',
            },
            {
                name: '梅州',
                value: 60,
            },
        ],
        [
            {
                name: '长汀',
            },
            {
                name: '龙岩',
                value: 60,
            },
        ],
    ];
    
    var WJData = [
        [
            {
                name: '梅州',
            },
            {
                name: '汕头',
                value: 60,
            },
        ],
        [
            {
                name: '汕头',
            },
            {
                name: '高雄',
                value: 60,
            },
        ],
        [
            {
                name: '高雄',
            },
            {
                name: '台北',
                value: 60,
            },
        ],
        [
            {
                name: '龙川',
            },
            {
                name: '宝安',
                value: 60,
            },
        ],
        [
            {
                name: '惠州',
            },
            {
                name: '广州',
                value: 60,
            },
        ],
    
        [
            {
                name: '广州',
            },
            {
                name: '桂平',
                value: 60,
            },
        ],
        [
            {
                name: '桂平',
            },
            {
                name: '柳州',
                value: 60,
            },
        ],
    
        [
            {
                name: '韶关',
            },
            {
                name: '韶关',
                value: 60,
            },
        ],
    
        [
            {
                name: '柳州',
            },
            {
                name: '榕江',
                value: 60,
            },
        ],
    
        [
            {
                name: '柳州',
            },
            {
                name: '凤山',
                value: 60,
            },
        ],
    
        [
            {
                name: '惠州',
            },
            {
                name: '中山',
                value: 60,
            },
        ],
    
        [
            {
                name: '中山',
            },
            {
                name: '阳江',
                value: 60,
            },
        ],
    
        [
            {
                name: '韶关',
            },
            {
                name: '贺州',
                value: 60,
            },
        ],
    
        [
            {
                name: '韶关',
            },
            {
                name: '郴州',
                value: 60,
            },
        ],
    
        [
            {
                name: '郴州',
            },
            {
                name: '邵阳',
                value: 60,
            },
        ],
    
        [
            {
                name: '邵阳',
            },
            {
                name: '常德',
                value: 60,
            },
        ],
        [
            {
                name: '常德',
            },
            {
                name: '恩施',
                value: 60,
            },
        ],
        [
            {
                name: '恩施',
            },
            {
                name: '重庆',
                value: 60,
            },
        ],
        [
            {
                name: '重庆',
            },
            {
                name: '成都',
                value: 60,
            },
        ],
    
        [
            {
                name: '重庆',
            },
            {
                name: '广元',
                value: 60,
            },
        ],
    
        [
            {
                name: '重庆',
            },
            {
                name: '会理',
                value: 60,
            },
        ],
    ];
    
    var JGData = [
        [
            {
                name: '中山',
            },
            {
                name: '信宜',
                value: 60,
            },
        ],
    
        [
            {
                name: '信宜',
            },
            {
                name: '钦州',
                value: 60,
            },
        ],
        [
            {
                name: '桂平',
            },
            {
                name: '凭祥',
                value: 60,
            },
        ],
        [
            {
                name: '信宜',
            },
            {
                name: '海口',
                value: 60,
            },
        ],
    ];
    
    var planePath =
        'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
    
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([
                    {
                        coord: fromCoord,
                    },
                    {
                        coord: toCoord,
                    },
                ]);
            }
        }
        return res;
    };
    
    var color = ['#FF8888', ' #ffa022', '#a6c84c', '#3ed4ff', '	#E38EFF'];
    var series = [];
    [
        ['长治', BJData],
        ['景德镇', SHData],
        ['宁都', GZData],
        ['汕头', WJData],
        ['信宜', JGData],
    ].forEach(function (item, i) {
        series.push(
            {
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3,
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2,
                    },
                },
    
                data: convertData(item[1]),
            },
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15,
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2,
                    },
                },
    
                data: convertData(item[1]),
            },
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15,
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2,
                    },
                },
    
                data: convertData(item[1]),
            },
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15,
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2,
                    },
                },
    
                data: convertData(item[1]),
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke',
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                    },
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i],
                    },
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    };
                }),
            }
        );
    });
    
    var option = {
       
      
       
       
        geo: {
            map: 'china',
            zoom: 1.2,
            scaleLimit: {
                //控制滚轮缩放大小
                max: 8,
                min: 1,
            },
            label: {
                emphasis: {
                    show: false,
                },
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#142957',
                    borderColor: '#0692a4',
                },
                emphasis: {
                    areaColor: '#0b1c2d',
                },
            },
        },
        series: series,
    };
    

    myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();