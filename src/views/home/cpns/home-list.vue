<template>
  <div class="home-list-box">
    <div class="list-title">热门精选</div>
    <div class="home-list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <house-item-v3 v-if="item.discoveryContentType === 3" 
          :item-data="item.data"
          @click="houseItemClick(item.data)">
        </house-item-v3>
        <house-item-v9 v-else-if="item.discoveryContentType === 9"
          :item-data="item.data"
          @click="houseItemClick(item.data)">
        </house-item-v9>
      </template>
    </div>
  </div>
</template>

<script setup>
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHome()
const { houseList } = storeToRefs(homeStore)
import { useRouter } from 'vue-router';
const router = useRouter()

// 点击每个房子
const houseItemClick = (item) => {
  router.push({
    path: '/detail/' + item.houseId,
  })
}

</script>

<style lang="less" scoped>
  .home-list-box {
    padding: 10px;
    .list-title {
      margin-bottom: 18px;
      color: #000;
      font-size: 22px;
      font-weight: 700;
    }
    .home-list {
      display: flex;
      flex-wrap: wrap;
      .house-item {
        width: 50%;
        margin-bottom: 10px;
      }
    }
  }
</style>