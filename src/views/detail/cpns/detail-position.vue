<template>
  <div class="position">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="map" ref="mapRef">
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
import { computed, onMounted, ref, watch } from 'vue';
import useDetail from '@/stores/modules/detail';
const detailStore = useDetail()
const positionModule = computed(() => {
  return detailStore.houseDetailList?.mainPart?.dynamicModule.positionModule
})



const mapRef = ref()
onMounted(() => {
  const loadMapFn = () => {
    const map = new BMapGL.Map(mapRef.value) //创建地图实例
    const point = new BMapGL.Point(positionModule.value.longitude, positionModule.value.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
    const marker = new BMapGL.Marker(point); // 创建标注   
    map.addOverlay(marker); //将标注添加到地图中
  }

  // if (positionModule.value) {
  //   loadMapFn()
  //   return 
  // }
  watch(positionModule, (newValue) => {
    if (newValue) {
      loadMapFn() 
    }
  }, {
    immediate: true   
  })

  

})


</script>

<style lang="less" scoped>
.position {
  .map {
    height: 300px;
  }
}

</style>