<template>
  <div class="tab-content">
    <van-index-bar 
    :sticky="false"
    highlight-color="#ff9854"
    :index-list="indexList"
    >
      <div class="hot-city">
        <van-index-anchor  index="热门" />
        <div class="city">
          <template v-for="item in cityDatas.hotCities" :key="item.cityId">
            <div class="item" @click="cityItemClick(item)">
              {{ item.cityName }}
            </div>
          </template>
        </div>
      </div>
      <template v-for="item in cityDatas.cities" :key="item.group">
        <van-index-anchor  :index="item.group" />
        <template v-for="citem in item.cities" :key="citem.cityId">
          <van-cell :title="citem.cityName" @click="cityItemClick(citem)" />
        </template>
      </template>
    </van-index-bar>
  
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useCity from '@/stores/modules/city'
const props = defineProps({
  cityDatas: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  return props.cityDatas.cities.map(item => item.group)
})
indexList.value.unshift('#')

const router = useRouter()
const cityStore = useCity()
const cityItemClick = (item) => {
  cityStore.setCityData(item)
  router.back()
}


</script>

<style lang="less" scoped>
.tab-content {
  .hot-city {
    .city {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      .item {
        width: 70px;
        height: 28px;
        font-size: 12px;
        background-color: #fff4ec;
        color: #000;
        border-radius: 14px;
        margin: 6px 1px 6px 0;
        line-height: 28px;
        text-align: center;
      }
    }
  }
}
</style>