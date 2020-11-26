<template>
  <div>
    <baidu-map class="map" :center="{ lng: 116.404, lat: 39.915 }" :zoom="14">
      <bml-heatmap :data="data" :max="100" :radius="20"> </bml-heatmap>
    </baidu-map>
  </div>
</template>

<script>
import { BmlHeatmap } from "vue-baidu-map"
export default {
  name: "Map",
  components: {
    BmlHeatmap
  },
  data: () => ({
    data: [
        {lng: 116.418261, lat: 39.921984, count: 50},
        {lng: 116.423332, lat: 39.916532, count: 51},
        {lng: 116.419787, lat: 39.930658, count: 15}
        // ...此处添加更多的数据集
      ]
  }),
  created() {},
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style>
.map {
  width: 100%;
  height: 400px;
}
</style>
