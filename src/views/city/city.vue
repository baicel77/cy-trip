<template>
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        show-action
        placeholder="城市/区域/位置"
        shape="round"
        @cancel="onCancel"
      />
      <!-- tab -->
      <van-tabs 
      v-model:active="active" 
      color="#ff9854"
      line-height="2px"
      >
        <van-tab 
        v-for="(value, key, index) in allCities"
        :key="index"
        :name="key"
        :title="value.title">
        </van-tab>
      </van-tabs>
    </div>

    <!-- content -->
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <home-tab-content 
          v-show="key === active" 
          :city-datas="value">
        </home-tab-content>
      </template>
    </div>
    
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import HomeTabContent from './cpns/city-tab-content.vue'
// 路由
import { useRouter } from 'vue-router'
const router = useRouter()

// store
import useCity from '@/stores/modules/city'
const cityStore = useCity()
// 发起获取城市数据的action
const allCities = ref([])
cityStore.fetchAllCities().then(res => {
  allCities.value = res
})


// 搜索框
const searchValue = ref('')
const onCancel = () => {
  router.back()
}

// tab
const active = ref('')

</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>