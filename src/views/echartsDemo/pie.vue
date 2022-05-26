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
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 335,
                name: '直接访问'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 1335,
                name: '浏览器'
              }
            ]
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
  margin-top: 10px;
}
</style>
