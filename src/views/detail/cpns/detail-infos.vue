<template>
  <div class="info" >
   <template v-if="topModule">
    <div class="houseName">{{ topModule.houseName }}</div>

    <div class="houseTags">
        <template v-for="item in topModule.houseTags" :key="item.tagCode">
          <div class="tag-item" 
          v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
          >
          {{ item.tagText.text }} 
          </div>
        </template>
    </div>

    <div class="commentBrief">
      <div class="left">
        <div class="overall">{{ topModule.commentBrief.overall }}</div>
        <div class="scoreTitle">{{ topModule.commentBrief.scoreTitle }}</div>
        <div class="commentBrief">{{ topModule.commentBrief.commentBrief }}</div>
      </div>
      <div class="totalCount">
        {{ topModule.commentBrief.totalCount + '条评论' }}
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="nearByPosition">
      <div class="address">{{ topModule.nearByPosition.address }}</div>
      <div class="nearBy">
        <span class="text">地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
   </template>

  </div>
</template>

<script setup>
import { computed } from 'vue';

import useDetail from '@/stores/modules/detail'
const detailStore = useDetail()
const topModule = computed(() => detailStore.houseDetailList?.mainPart?.topModule)
</script>

<style lang="less" scoped>

.info {
  padding: 15px 15px 50px;
  .houseName {
    color: #333;
    font-size: 20px;
    font-weight: 600;
  }
  .houseTags {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    font-size: 12px;
    color: var(--primary-color);

    .tag-item {
      flex-shrink: 0;
      background: rgba(255, 150, 69, 0.15);
      padding: 1px 3px;
      margin: 0 2px 5px 2px;
    }
  }
  .commentBrief, .nearByPosition {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f5f7fa;
    padding: 8px 12px;
    font-size: 12px;
    .left {
      display: flex;
      align-items: center;
      color: #666;
      .overall {
        position: relative;
        top: -1px;
        margin-right: 4px;
        font-size: 18px;
        color: #333;
        font-weight: 600;
      }
      .scoreTitle {
        color: #000;
        font-weight: 600;
      }
    }
    .totalCount {
      color: var(--primary-color);
    }
  }
  .nearByPosition {
    margin-top: 12px;
    .address {
      color: #333;
      font-weight: 600;
      font-size: 14px;
    }
    .nearBy {
      color: var(--primary-color);
    }
  }
}

</style>