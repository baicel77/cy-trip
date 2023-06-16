<template>
  <div class="price-intro">
    <detail-section title="价格说明">
      <div class="content" v-if="introductionModule">{{ introductionModule.introduction }}</div>
      <div class="footer">
        <img src="../../../assets/img/detail/icon_ensure.png" alt="">
        <p>弘源旅途, 永无止境!</p>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
import useDetail from '@/stores/modules/detail';
import { computed } from 'vue';
const detailStore = useDetail()
const introductionModule = computed(() => {
  return detailStore.houseDetailList?.mainPart?.introductionModule
})
</script>

<style lang="less" scoped>
.price-intro {
  .content {
    color: #666;
    font-size: 12px;
    line-height: 1.5;
  }
  .footer {
    margin-top: 50px;
    text-align: center;
    color: #666;
    font-size: 12px;
    img {
      width: 123px;
    }
  }
}
</style>