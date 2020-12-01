<template>
  <div>
    <baidu-map
      class="map"
      :center="{ lng: 121.586576, lat: 29.865067 }"
      :zoom="12"
      @ready="handler"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bml-heatmap :data="data" :max="0.6" :radius="20">
      </bml-heatmap>
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
      { lng: 121.543457, lat: 29.865568, count: 0.1 },
      { lng: 121.768249, lat: 29.908655, count: 0.2 },
      { lng: 121.684311, lat: 29.839506, count: 0.3 },
      { lng: 121.55323, lat: 29.81444, count: 0.4 },
      { lng: 121.645217, lat: 29.743721, count: 0.5 },
      { lng: 121.543457, lat: 29.865568, count: 0.6 },
      { lng: 121.664764, lat: 29.769306, count: 0.7 },
      { lng: 121.655565, lat: 29.796891, count: 0.8 },
      { lng: 121.446871, lat: 29.755762, count: 0.9 },
      { lng: 121.586126, lat: 29.871472, count: 1 },
      { lng: 121.583935, lat: 29.870234, count: 0.1 },
      { lng: 121.582156, lat: 29.873413, count: 0.2 },
      { lng: 121.588911, lat: 29.869358, count: 0.3 },
      { lng: 121.584581, lat: 29.869561, count: 0.4 },
      { lng: 121.587115, lat: 29.869827, count: 0.5 },
      { lng: 121.589109, lat: 29.870767, count: 0.6 },
      { lng: 121.587115, lat: 29.872928, count: 0.7 },
      { lng: 121.582605, lat: 29.871957, count: 0.8 },
      { lng: 121.585282, lat: 29.870469, count: 0.9 },
      // ...此处添加更多的数据集
    ],
    gradient: {
      // A + (B-A) / Step * N
      0.2: "rgb(0, 255, 255)",
      0.4: "rgb(63, 191, 191)",
      0.6: "rgb(127, 127, 127)",
      0.8: "rgb(191, 63, 63)",
      1.0: "rgb(255, 0, 0)",
    }
  }),
  created() {},
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      map.enableScrollWheelZoom()
    }
  }
}
</script>

<style>
.map {
  width: 100%;
  height: 600px;
}
</style>
