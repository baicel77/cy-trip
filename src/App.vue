<template>
  <div class="app">
    <!-- 路由组件占位符 -->
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <!-- tabbar -->
    <tab-bar v-show="!route.meta?.hiddenTabBar"></tab-bar>
    <!-- loading -->
    <loading v-if="mainStore.isShowLoading" @click="mainStore.isShowLoading = false" />
  </div>
</template>

<script setup>

import TabBar from '@/components/tab-bar/tab-bar.vue'
import Loading from '@/components/loading/loading.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import useMain from '@/stores/modules/main'
const mainStore = useMain()

</script>

<style lang="less" scoped>

</style>