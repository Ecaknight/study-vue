<template>
  <div>
    图表
    <bar />
    <!-- <line-charts /> -->
    <dynamic-bar />
    <v-line />
    <pie />
  </div>
</template>

<script>
// import lineCharts from './line-echarts.vue'
import Bar from './echartsDemo/bar.vue'
import DynamicBar from './echartsDemo/dynamicBar.vue'
import Line from './echartsDemo/line.vue'
import Pie from './echartsDemo/pie.vue'

export default {
  components: {
    // 'line-charts': lineCharts
    Bar,
    DynamicBar,
    'v-line': Line,
    Pie
  }
}
</script>

<style lang="less" scoped></style>
