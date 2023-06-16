<template>
  <div class="section">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot>默认内容</slot>
    </div>
    <div class="more" v-if="moreText">
      <div class="text">{{ moreText }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  moreText: {
    type: String,
    default: ''
  }
})

</script>

<style lang="less" scoped>
.section {
  padding: 0 15px 30px;
  border-top: 5px solid #f2f4f6;
  .title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    color: #333;
    font-weight: 600;
    font-size: 20px;
  }
  .content {
    padding: 10px 0;
  }
  .more {
    display: flex;
    justify-content: flex-end;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 14px;
  }
}
</style>