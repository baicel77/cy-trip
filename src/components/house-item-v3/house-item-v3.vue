<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="pic">
        <img :src="itemData.image?.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <div class="text">{{ itemData.location }}</div>
        </div>
        <div class="houseName ellispe2">{{ itemData.houseName }}</div>
        <div class="summaryText">{{ itemData.summaryText }}</div>
        <div class="price-relative">
          <div class="finalPrice">￥{{ itemData.finalPrice }}</div>
          <div class="productPrice">￥{{ itemData.productPrice }}</div>
          <div class="tip-text">{{ itemData.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  itemData: {
    type: Object,
    default: () =>({})
  }
})

</script>

<style lang="less" scoped>
.house-item {
  .item-inner {
    margin: 0 5px;
  }
  .pic {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .info {
    padding: 0 10px;
    font-size: 12px;
    .location {
      display: flex;
      margin: 8px 0;
      color: #666;
      img {
        width: 14px;
      }
    }
    .houseName {
      margin-bottom: 10px;
      font-size: 14px;
      color: #333;
    }
    .summaryText {
      color: #666;
      margin-bottom: 10px;
    }
    .price-relative {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .finalPrice {
        font-size: 14px;
        color: var(--primary-color);
      }
      .productPrice {
        color: #666;
      }
      .tip-text {
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
        color: #fff;
        padding: 0 3px;
        border-radius: 8px;
      }
    }
  }
}

</style>