<template>
  <!-- 自己封装 -->
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData" :key="item.text">
      <div 
      class="tab-bar-item" 
      @click="itemClick(item, index)"
      :class="{active: currentIndex === index}"
      >
        <img v-if="currentIndex === index" :src="loadImgUrl(item.activeImgUrl)">
        <img v-else :src="loadImgUrl(item.imgUrl)" >
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { tabBarData } from '@/assets/data/tabbar'
import loadImgUrl from '@/utils/loadImgUrl'


const currentIndex = ref(0)

const router = useRouter()
const itemClick = (item, index) => {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style scoped lang="less">
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    align-items: center;
    border-top: 1px solid #f3f3f3;
    font-size: 12px;
    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &.active {
        color: var(--primary-color);
      }
      // color: var(--primary-color);
      img {
        height: 26px;
      }
    }
  }
</style>