<template>
  <div class="home title" ref="homeRef">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search></home-search>
    <home-categories></home-categories>
    <home-search-bar v-show="isShowSearchBar"></home-search-bar>
    <home-list></home-list>

  </div>
</template>

<script>

export default {
  name: 'home'
}

</script>

<script setup>
import useScroll from '@/hooks/useScroll'
import { computed, watch, ref, onActivated } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearch from './cpns/home-search.vue'
import HomeCategories from './cpns/home-categories.vue';
import HomeList from './cpns/home-list.vue';
import HomeSearchBar from './cpns/home-search-bar.vue'
import useHome from '@/stores/modules/home';
const homeStore = useHome()
homeStore.fetchHotSuggest()
homeStore.fetchCategroies()
homeStore.fetchHouseList()

const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})
const isShowSearchBar = computed(() => scrollTop.value >= 500)

onActivated(() => {
  homeRef?.value.scrollTo({
    top: scrollTop.value
  })
})



</script>

<style lang="less" scoped>
  .home {
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 60px;
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>