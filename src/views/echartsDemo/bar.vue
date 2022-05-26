<template>
  <div :style="{ width: '100%', height: '400px' }">xxx</div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      data: [],
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init() {
      const instance = echarts.init(this.$el)
      const options = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25],
            stack: 'x'
          },
          {
            type: 'bar',
            data: [12, 22, 32, 33, 44, 17, 21],
            stack: 'x'
          }
        ]
      }
      instance.setOption(options)
    }
  }
}
</script>

<style lang="less" scoped></style>
