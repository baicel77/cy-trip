<template>
  <div class="home title">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue'

</script>

<style lang="less" scoped>
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
    .location {
      display: flex;
      height: 44px;
      align-items: center;
      padding: 0 20px;
      .city {
        flex: 1;
      }
      .position {
        display: flex;
        align-items: center;
        width: 74px;
        .text {
          font-size: 12px;
          position: relative;
          top: 2px;
          margin-right: 5px;
        }
        img {
          width: 18px;
        }
      }
    }
  }
</style>