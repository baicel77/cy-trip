<template>
  <div class="home-search">
    <!-- 位置信-->
    <div class="location section">
      <div class="city" @click="cityClick">
        {{ cityStore.cityItem.cityName }}
      </div>
      <div class="position">
        <div class="text" @click="getPosition">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- 入住 -->
    <div class="live section" @click="isShowCalendar = true">
      <div class="start">
        <div class="text">入住</div>
        <div class="time">{{ startDate }}</div>
      </div>
      <div class="stay">共{{ stayDays }}晚</div>
      <div class="end">
        <div class="text">离店</div>
        <div class="time">{{ endDate }}</div>
      </div>
    </div>
    <!-- 日历 -->
    <van-calendar
      class="van-calendar" 
      v-model:show="isShowCalendar" 
      type="range" 
      @confirm="onConfirm"
      color="#ff9854" 
      :round="false"
    />
    <!-- 价格/人数/关键字 -->
    <div class="other-info section">
      <div class="price">价格不限</div>
      <div class="people">人数不限</div>
    </div>
    <div class="keywords section">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="hot-suggest section">
      <template 
      v-for="(item, index) in homeStore.hotSuggest" :key="index">
        <div 
        class="suggest-item"
        :style="{ color:item.tagText.color,
                background:item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router'
const router = useRouter()

import useCity from '@/stores/modules/city'
const cityStore = useCity()

import useHome from '@/stores/modules/home';
const homeStore = useHome()

import { formatMonthDay, getDiffsDay } from '@/utils/formatTime'




// 获取当前位置
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log('获取位置成功', res)
   }, err => {
    console.log('获取位置失败', err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

// 点击城市
const cityClick = () => {
  // 跳转到城市页面
  router.push('/city')
}

// 日历
const isShowCalendar = ref(false)

const nowTimeStamp = new Date().getTime()
const targetTimeStamp = new Date().getTime() + 1 * 24 * 60 * 60 * 1000
const startDate = ref(formatMonthDay(nowTimeStamp))
const endDate = ref(formatMonthDay(targetTimeStamp))
const stayDays = ref(getDiffsDay(nowTimeStamp, targetTimeStamp))
// const endDate = ref('06月14日')

const onConfirm = (value) => {
  startDate.value = formatMonthDay(value[0])
  endDate.value = formatMonthDay(value[1])
  stayDays.value = getDiffsDay(value[0], value[1])
  isShowCalendar.value = false
}

</script>

<style lang="less" scoped>

.home-search {
  --van-calendar-popup-height: 100%;
   .location {
    display: flex;
    align-items: center;
    .city {
      flex: 1;
      font-size: 15px;
      color: #333;
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
        color: #666;
      }
      img {
        width: 18px;
      }
    }
  }
  .live {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .stay {
      color: #666;
      font-size: 12px;
    }
    .text {
      margin-bottom: 2px;
      color: #999;
      font-size: 12px;
    }
    .time {
      font-size: 15px;
    }
  }
  .other-info, .keywords {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: #999;
  }
  .hot-suggest {
    display: flex;
    flex-wrap: wrap;
    .suggest-item {
      margin: 4px;
      padding: 4px 8px;
      border-radius: 14px;
      font-size: 12px;
    }
  }
  .section {
    padding: 0 20px;
    height: 44px;
  }
}
 
 
</style>