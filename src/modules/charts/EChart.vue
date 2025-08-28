<template>
  <div class="container">
    <div class="plugins-tips">
      vue-echarts: Vue.js component for Apache ECharts™. Visit:
      <a href="https://github.com/ecomfe/vue-echarts" target="_blank">vue-echarts</a>
    </div>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Bar Chart</div>
      </template>
      <v-chart class="schart" :option="barOptions" />
    </el-card>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Line Chart</div>
      </template>
      <v-chart class="schart" :option="lineOptions" />
    </el-card>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Pie Chart</div>
      </template>
      <v-chart class="schart" :option="pieOptions" />
    </el-card>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Donut Chart</div>
      </template>
      <v-chart class="schart" :option="ringOptions" />
    </el-card>
    <el-card class="mgb20" shadow="hover">
      <template #header>
        <div class="content-title">Word Cloud</div>
      </template>
      <v-chart class="schart" :option="wordOptions" />
    </el-card>
  </div>
</template>

<script setup lang="ts" name="echarts">
import { use } from 'echarts/core'
import { BarChart, LineChart, PieChart, MapChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
import 'echarts-wordcloud'
import { barOptions, lineOptions, pieOptions, ringOptions, wordOptions } from './options'
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  LineChart,
  PieChart,
  MapChart,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
])
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
