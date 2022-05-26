<template>
  <div class="container" />
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
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
          type: 'category',
          data: ['A', 'B', 'C']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 140, 110],
            type: 'line'
          }
        ]
      }
      instance.setOption(options)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 300px;
  border: 1px solid red;
  margin-top: 10px;
}
</style>
