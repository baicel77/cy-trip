<template>
  <div class="home title">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search></home-search>
  </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearch from './cpns/home-search.vue'
import useHome from '@/stores/modules/home';
const homeStore = useHome()
homeStore.fetchHotSuggest()

</script>

<style lang="less" scoped>
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>