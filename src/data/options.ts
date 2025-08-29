import { graphic } from 'echarts/core'

export const barOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  color: ['#009688', '#f44336'],
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
    {
      data: [180, 230, 190, 120, 110, 230, 235],
      type: 'bar',
    },
  ],
}

export const lineOptions = {
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  color: ['#009688', '#f44336'],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      smooth: true,
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      smooth: true,
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
}

export const pieOptions = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

export const wordOptions = {
  series: [
    {
      type: 'wordCloud',
      rotationRange: [0, 0],
      autoSize: {
        enable: true,
        minSize: 14,
      },
      textStyle: {
        fontFamily: 'Arial, sans-serif',
        color: function () {
          return (
            'rgb(' +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(',') +
            ')'
          )
        },
      },
      data: [
        { name: 'Vue', value: 10000 },
        { name: 'React', value: 9000 },
        { name: 'Charts', value: 4000 }, // Charts
        { name: 'Product', value: 7000 }, // Product
        { name: 'vue-manage-system', value: 2000 },
        { name: 'element-plus', value: 6000 },
        { name: 'Management System', value: 5000 }, // Management System
        { name: 'Frontend', value: 4000 }, // Frontend
        { name: 'Testing', value: 3000 }, // Testing
        { name: 'Backend', value: 8000 }, // Backend
        { name: 'Software Development', value: 6000 }, // Software Development
        { name: 'Programmer', value: 4000 }, // Programmer
      ],
    },
  ],
}

export const ringOptions = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}

export const dashOpt1 = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  grid: {
    top: '2%',
    left: '2%',
    right: '3%',
    bottom: '2%',
    containLabel: true,
  },
  color: ['#009688', '#f44336'],
  series: [
    {
      type: 'line',
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 150, 136,0.8)' },
          { offset: 1, color: 'rgba(0, 150, 136,0.2)' },
        ]),
      },
      smooth: true,
      data: [120, 132, 301, 134, 90, 230, 210],
    },
    {
      type: 'line',
      smooth: true,
      data: [220, 122, 191, 234, 190, 130, 310],
    },
  ],
}

export const dashOpt2 = {
  legend: {
    bottom: '1%',
    left: 'center',
  },
  color: ['#3f51b5', '#009688', '#f44336', '#00bcd4', '#1ABC9C'],
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      data: [
        { value: 1048, name: 'Digital' }, // Digital
        { value: 735, name: 'Food' }, // Food
        { value: 580, name: 'Mother & Baby' }, // Mother & Baby
        { value: 484, name: 'Home Appliances' }, // Home Appliances
        { value: 300, name: 'Sports' }, // Sports
      ],
    },
  ],
}
