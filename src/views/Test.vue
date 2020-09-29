<template>
  <div>
    Test
    <PlxTableGrid :data="tableData" height="250" border style="width: 100%">
      <PlxTableColumn prop="id" label="ID" width="180"> </PlxTableColumn>
      <PlxTableColumn prop="date" label="日期" width="180"> </PlxTableColumn>
      <PlxTableColumn prop="name" label="姓名" width="180"> </PlxTableColumn>
      <PlxTableColumn prop="address" label="地址"> </PlxTableColumn>
    </PlxTableGrid>
  </div>
</template>

<script>
import { PlxTableGrid, PlxTableColumn } from "pl-table"
import "pl-table/themes/index.css"
import "pl-table/themes/plTableStyle.css"
export default {
  name: "Test",
  components: {
    PlxTableGrid,
    PlxTableColumn
  },
  data: function() {
    return {
      tableData: []
    }
  },
  methods: {
    init: function() {
      for (let index = 0; index < 15000; index++) {
        this.tableData.push({
          id: index + 1,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        })
      }
    },
    generateData: function() {
      console.info(this.getRandomArbitrary(2000, 2020))
    },
    getRandomArbitrary: function(min, max) {
      return Math.random() * (max - min) + min
    }
  },
  created: function() {
    this.init()
  }
}
</script>

<style></style>
