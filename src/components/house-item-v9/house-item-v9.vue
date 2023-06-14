<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="pic">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summaryText">{{ itemData.summaryText }}</div>
        <div class="houseName ellispe2">{{ itemData.houseName }}</div>
        <van-rate 
        v-model="commentScore" 
        readonly 
        allow-half
        color="#fff"
        :size="15"
        />
        <div class="finalPrice">￥{{ itemData.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () =>({})
  }
})
const commentScore = computed(() => props.itemData.commentScore * 1)

</script>

<style lang="less" scoped>
.house-item {
  .item-inner {
    position: relative;
    overflow: hidden;
    margin: 0 5px;
  }
  .pic {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .info {
    position: absolute;
    bottom: 10px;
    padding: 0 10px;
    color: #fff;
    .summaryText {
      font-size: 12px;
    }
    .houseName {
      margin: 8px 0;
    }
  }
}


</style>