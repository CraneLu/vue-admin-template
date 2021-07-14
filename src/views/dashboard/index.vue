<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">

<!--    <panel-group @handleSetLineChartData="handleSetLineChartData" />-->

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:0px;">
      <el-col style="width:100%">
        <history-table @row-click="onHistoryTableRowClicked"/>
      </el-col>
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:0px;">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart :chart-data="chartData" />
        </div>
      </el-col>
    </el-row>

  </div>
  </div>
</template>

<script>
import PieChart from './components/PieChart'
import HistoryTable from '@/views/dashboard/components/HistoryTable'
import { getChartData } from '@/api/table'

export default {
  name: 'Dashboard',
  components: {
    HistoryTable,
    PieChart
  },
  data() {
    return {
      sn: '',
      chartData: null
    }
  },
  created() {
    // this.getBreadcrumb()
    this.init()
  },
  watch: {
    sn(value) {
      if (value) {
        this.upateChart()
      }
    }
  },
  methods: {
    init() {
      this.upateChart()
    },
    upateChart() {
      this.listLoading = true
      getChartData(this.sn).then(response => {
        this.chartData = response.data
        this.listLoading = false
      })
    },
    onHistoryTableRowClicked(sn) {
      this.sn = sn
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 5px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
