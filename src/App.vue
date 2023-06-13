<template>
  <div class="app">
    <!-- 路由组件占位符 -->
    <router-view></router-view>
    <!-- tabbar -->
    <tab-bar v-show="!route.meta?.hiddenTabBar"></tab-bar>

  </div>
</template>

<script setup>

import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style lang="less" scoped>


</style>