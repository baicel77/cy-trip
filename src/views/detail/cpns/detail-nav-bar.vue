<template>
  <div class="nav-bar">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: '标题'
  },
  leftText: {
    type: String,
    default: '返回'
  }
})

import { useRouter } from 'vue-router'
const router = useRouter()

const onClickLeft = () => {
  router.back()
}

</script>

<style scoped>

</style>