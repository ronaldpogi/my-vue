<template>
  <div>
    <el-row :gutter="20" class="mgb20">
      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg1">
            <User />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color1" :end="6666" />
            <div>User Visits</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg2">
            <ChatDotRound />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color2" :end="168" />
            <div>System Messages</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg3">
            <Goods />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color3" :end="8888" />
            <div>Product Quantity</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg4">
            <ShoppingCartFull />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color4" :end="568" />
            <div>Orders Today</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mgb20">
      <el-col :span="18">
        <el-card shadow="hover" :body-style="{ height: '540px' }">
          <div class="card-header">
            <p class="card-header-title">Order Trends</p>
            <p class="card-header-desc">
              Order status in the past week, including completed and returned orders
            </p>
          </div>
          <v-chart class="chart" :option="dashOpt1" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ height: '540px' }">
          <div class="card-header">
            <p class="card-header-title">Category Distribution</p>
            <p class="card-header-desc">Category breakdown of products sold in the past month</p>
          </div>
          <v-chart class="chart" :option="dashOpt2" />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-card shadow="hover" :body-style="{ height: 'auto' }">
          <div class="card-header">
            <p class="card-header-title">Timeline</p>
            <p class="card-header-desc">Latest sales trends and activity updates</p>
          </div>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :color="activity.color"
            >
              <div class="timeline-item">
                <div>
                  <p>{{ activity.content }}</p>
                  <p class="timeline-desc">{{ activity.description }}</p>
                </div>
                <div class="timeline-time">{{ activity.timestamp }}</div>
              </div>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="hover" :body-style="{ height: 'auto' }">
          <div class="card-header">
            <p class="card-header-title">Ranking List</p>
            <p class="card-header-desc">Top 5 Best-Selling Products</p>
          </div>
          <div>
            <div class="rank-item" v-for="(rank, index) in ranks" :key="index">
              <div class="rank-item-avatar">{{ index + 1 }}</div>
              <div class="rank-item-content">
                <div class="rank-item-top">
                  <div class="rank-item-title">{{ rank.title }}</div>
                  <div class="rank-item-desc">Sales: {{ rank.value }}</div>
                </div>
                <el-progress
                  :show-text="false"
                  striped
                  :stroke-width="10"
                  :percentage="rank.percent"
                  :color="rank.color"
                />
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import countup from '@/components/CountUp.vue'
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
import { dashOpt1, dashOpt2 } from '@/modules/charts/options'
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  LineChart,
  PieChart,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  MapChart,
])

const activities = [
  {
    content: 'Product Favorited',
    description: 'xxx favorited your product, but didn’t buy',
    timestamp: '30 minutes ago',
    color: '#00bcd4',
  },
  {
    content: 'User Review',
    description: 'xxx gave a product a bad review, frustrating!',
    timestamp: '55 minutes ago',
    color: '#1ABC9C',
  },
  {
    content: 'Order Submitted',
    description: 'xxx submitted an order, go collect payment',
    timestamp: '1 hour ago',
    color: '#3f51b5',
  },
  {
    content: 'Refund Request',
    description: 'xxx requested a refund only, another loss',
    timestamp: '15 hours ago',
    color: '#f44336',
  },
  {
    content: 'Product Listed',
    description: 'Operations staff secretly listed an airplane',
    timestamp: '1 day ago',
    color: '#009688',
  },
]

const ranks = [
  {
    title: 'Mobile Phone',
    value: 10000,
    percent: 80,
    color: '#f25e43',
  },
  {
    title: 'Computer',
    value: 8000,
    percent: 70,
    color: '#00bcd4',
  },
  {
    title: 'Camera',
    value: 6000,
    percent: 60,
    color: '#64d572',
  },
  {
    title: 'Clothes',
    value: 5000,
    percent: 55,
    color: '#e9a745',
  },
  {
    title: 'Books',
    value: 4000,
    percent: 50,
    color: '#009688',
  },
]
</script>

<style>
.card-body {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0;
}
</style>
<style scoped>
.card-content {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
  padding: 0 20px;
}

.card-num {
  font-size: 30px;
}

.card-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.bg1 {
  background: #2d8cf0;
}

.bg2 {
  background: #64d572;
}

.bg3 {
  background: #f25e43;
}

.bg4 {
  background: #e9a745;
}

.color1 {
  color: #2d8cf0;
}

.color2 {
  color: #64d572;
}

.color3 {
  color: #f25e43;
}

.color4 {
  color: #e9a745;
}

.chart {
  width: 100%;
  height: 400px;
}

.card-header {
  padding-left: 10px;
  margin-bottom: 20px;
}

.card-header-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-header-desc {
  font-size: 14px;
  color: #999;
}

.timeline-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #000;
}

.timeline-time,
.timeline-desc {
  font-size: 12px;
  color: #787878;
}

.rank-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.rank-item-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f2f2f2;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
}

.rank-item-content {
  flex: 1;
}

.rank-item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #343434;
  margin-bottom: 10px;
}

.rank-item-desc {
  font-size: 14px;
  color: #999;
}
.map-chart {
  width: 100%;
  height: 350px;
}
</style>
