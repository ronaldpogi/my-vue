<template>
  <div class="container">
    <div class="plugins-tips">
      vue-schart: A Vue.js wrapper component for sChart.js. Visit here:
      <a href="https://github.com/lin-xin/vue-schart" target="_blank">vue-schart</a>
    </div>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Bar Chart</div>
      </template>
      <schart class="schart" canvasId="bar" :options="options1"></schart>
    </el-card>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Line Chart</div>
      </template>
      <schart class="schart" canvasId="line" :options="options2"></schart>
    </el-card>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Pie Chart</div>
      </template>
      <schart class="schart" canvasId="pie" :options="options3"></schart>
    </el-card>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Ring Chart</div>
      </template>
      <schart class="schart" canvasId="ring" :options="options4"></schart>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="schart">
import Schart from 'vue-schart'

const options1 = {
  type: 'bar',
  title: {
    text: 'Sales by Category (Past Week)',
  },
  colorList: ['#3f51b5', '#009688', '#f44336', '#00bcd4', '#1ABC9C'],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Home Appliances',
      data: [234, 278, 270, 190, 230],
    },
    {
      label: 'General Merchandise',
      data: [164, 178, 190, 135, 160],
    },
    {
      label: 'Food',
      data: [144, 198, 150, 235, 120],
    },
  ],
}

const options2 = {
  type: 'line',
  title: {
    text: 'Sales Trend by Category (Recent Months)',
  },
  colorList: ['#3f51b5', '#009688', '#f44336', '#00bcd4', '#1ABC9C'],
  labels: ['June', 'July', 'August', 'September', 'October'],
  datasets: [
    {
      label: 'Home Appliances',
      data: [234, 278, 270, 190, 230],
    },
    {
      label: 'General Merchandise',
      data: [164, 178, 150, 135, 160],
    },
    {
      label: 'Food',
      data: [114, 138, 200, 235, 190],
    },
  ],
}

const options3 = {
  type: 'pie',
  title: {
    text: 'Clothing Category Sales (Pie Chart)',
  },
  legend: {
    position: 'left',
  },
  colorList: ['#2196f3', '#673ab7', '#009688', '#1ABC9C', '#3f51b5', '#f44336', '#00bcd4'],
  labels: ['T-Shirt', 'Jeans', 'Dress', 'Sweater', 'Capri Pants', 'Skirt', 'Down Jacket'],
  datasets: [
    {
      data: [334, 278, 190, 235, 260, 200, 141],
    },
  ],
}

const options4 = {
  type: 'ring',
  title: {
    text: 'Ring Chart (Three Equal Parts)',
  },
  showValue: false,
  legend: {
    position: 'bottom',
    bottom: 40,
  },
  colorList: ['#3f51b5', '#009688', '#f44336', '#00bcd4', '#1ABC9C'],
  labels: ['Vue', 'React', 'Angular'],
  datasets: [
    {
      data: [500, 500, 500],
    },
  ],
}
</script>

<style scoped>
.schart {
  width: 100%;
  height: 400px;
}

.content-title {
  font-weight: 400;
  font-size: 22px;
  color: #1f2f3d;
}
</style>
