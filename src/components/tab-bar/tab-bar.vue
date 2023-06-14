<template>
   <!-- 使用UI库 -->
  <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
    <van-tabbar-item 
    v-for="(item, index) in tabBarData" 
    :key="item.text"
    :to="item.path"
    >
      <template #icon>
        <img v-if="currentIndex === index" :src="loadImgUrl(item.activeImgUrl)">
        <img v-else :src="loadImgUrl(item.imgUrl)" >
      </template>
      <span class="text">{{ item.text }}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>

import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { tabBarData } from '@/assets/data/tabbar'
import loadImgUrl from '@/utils/loadImgUrl'


const currentIndex = ref(0)
const route = useRoute()
watch(route, (newRoute) => {
  const path = newRoute.path
  const index = tabBarData.findIndex(item => item.path === path)
  if (index === currentIndex.value || index === -1) {
    return
  }
  currentIndex.value = index
})


</script>

<style scoped lang="less">
 // 修改引入组件样式的方法
// 方式一: 如果是以插槽的形式插到组件内部,可以直接取到对应的选择器进行样式修改
// 方式二: 修改全局变量

.van-tabbar {
// 方式三:修改局部变量
  // --van-tabbar-item-icon-margin-bottom: 8px;
  .van-tabbar-item {
    img {
      height: 26px;
    }
  }
  // 方式四::deep()穿透子组件
  // :deep(.van-tabbar-item--active) {
  //   background-color: pink;
  // }
}
</style>