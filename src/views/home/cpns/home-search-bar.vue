<template>
  <div class="search-wrap">
    <div class="search-bar">
      <div class="live-info">
        <div class="start">
          <span class="text">住</span>
          <div class="time">{{ startDateStr }}</div>
        </div>
        <div class="end">
          <span class="text">离</span>
          <div class="time">{{ endDateStr }}</div>
        </div>
      </div>
      <div class="other-info">
        <div class="keywords">关键字/位置/民宿</div>
        <div class="search-btn">
          <van-icon name="search" size="25" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { formatMonthDay } from '@/utils/formatTime'
import useMain from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
const mainStore = useMain()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD'))
const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD'))

</script>

<style lang="less" scoped>
.search-wrap {
  background-color: #fff;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  .search-bar {
  display: flex;
  align-items: center;
  height: 45px;
  background-color: #f2f4f6;
  padding: 0 10px;
  border-radius: 5px;
  color: #999;
  font-size: 12px;
  .live-info {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    .start, .end {
      display: flex;
      .time {
        margin-left: 5px;
        color: #333;
      }
    }
    &::after {
      position: absolute;
      bottom: -2px;
      right: -4px;
      content: '';
      width: 0;
      height: 0;
      border: 4px solid transparent;
      border-top: 4px solid #666;
      transform: rotate(-45deg);
    }
  }
  .other-info {
    flex: 1;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid #fff;
    padding: 0 6px;
  }
}
}
</style>