<template>
  <div class="rule">
    <detail-section title="预定须知">
      <div class="rules" v-if="orderRules">
        <template v-for="(item, index) in orderRules" :key="index">
          <div class="item">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="tip" v-if="item.title === '在线押金'">查看说明</div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
import useDetail from '@/stores/modules/detail';
import { computed } from 'vue';
const detailStore = useDetail()
const orderRules = computed(() => {
  return detailStore.houseDetailList?.mainPart?.dynamicModule.rulesModule.orderRules
})
</script>

<style lang="less" scoped>
.rule {
  .rules {
    font-size: 12px;
    .item {
      display: flex;
      position: relative;
      margin-bottom: 15px;
      .title {
        width: 70px;
        color: #666;
      }
      .introduction {
        color: #333;
      }
      .tip {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>