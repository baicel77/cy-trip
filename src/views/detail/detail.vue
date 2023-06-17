<template>
  <div class="detail hidden-tabbar" ref="detailRef">
    <detail-nav-bar title="房屋详情" left-text="旅途"/>
    <detail-swiper />
    <detail-infos data-name="描述" :ref="getPosition" />
    <detail-facility data-name="设施" :ref="getPosition"/>
    <detail-landlord data-name="房东" :ref="getPosition"/>
    <detail-comments data-name="评论" :ref="getPosition"/>
    <detail-rules data-name="须知" :ref="getPosition"/>
    <detail-position data-name="周边" data-index="5" :ref="getPosition"/>
    <detail-price-intro />
    <detail-tab 
      v-if="scrollTop > 300" 
      @tab-click="onTabClick" 
      :titles="Object.keys(tabEls)" 
      ref="tabRef" />
  </div>
</template>

<script setup>
import {  ref, watch } from 'vue'
import DetailNavBar from './cpns/detail-nav-bar.vue'
import DetailSwiper from './cpns/detail-swiper.vue'
import DetailInfos from './cpns/detail-infos.vue'
import DetailFacility from './cpns/detail-facility.vue'
import DetailLandlord from './cpns/detail-landlord.vue'
import DetailComments from './cpns/detail-comments.vue'
import DetailRules from './cpns/detail-rules.vue'
import DetailPosition from './cpns/detail-position.vue'
import DetailPriceIntro from './cpns/detail-price-intro.vue'
import DetailTab from './cpns/detail-tab.vue'
import { useRoute } from 'vue-router'
import useDetail from '@/stores/modules/detail'
import useScroll from '@/hooks/useScroll'

const detailStore = useDetail()
const route = useRoute()
// 发起actions获取详情页数据
detailStore.fetchHouseDetail(route.params.id)
// 详情页滚动逻辑
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)

const tabRef = ref()
watch(scrollTop, (newScrollTop) => {
  // 监听页面滚动,切换到相应的tab
  // for (const key in tabEls) {
  //   const top = tabEls[key].offsetTop
  //   if (Math.ceil(value) >= top - 44 ) {
  //     keyArr.push(key)
  //   }
  // }
  // 获取el的offsetTop
  const elOffsetTop = Object.values(tabEls).map(item => item.offsetTop)
  let currentIndex = elOffsetTop.length - 1
  for (let i = 0; i < elOffsetTop.length; i++) {
    const value = elOffsetTop[i]
    if (value >= newScrollTop + 45) {
      currentIndex = i - 1
      if (currentIndex === -1) {
        return
      }
      break
    }
  }
  if (tabRef.value) {
    tabRef.value.currentName = Object.keys(tabEls)[currentIndex]
  }
})
// 监听tab点击, 滚动到相应的位置
const onTabClick = (title) => {
  const scrollDistance = tabEls[title].offsetTop
  detailRef.value.scroll({
    top: title === '描述' ? scrollDistance : (scrollDistance - 44),
  })
}
// 动态绑定组件ref逻辑
const tabEls = {}
let flag = false

const getPosition = (elRef) => {
  if (flag) return
  const titleName = elRef.$el.dataset.name
  tabEls[titleName] = elRef.$el
  if (elRef.$el.dataset.index) flag = true
}


</script>

<style lang="less" scoped>

</style>