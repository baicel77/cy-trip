<template>
  <div class="tab">
    <van-tabs 
    v-model:active="currentName" 
    title-active-color="#ff9854" 
    @click-tab="tabClick">
      <van-tab 
      v-for="(item, index) in titles" 
      :key="item" 
      :title="item"
      :name="item"
      >
    </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})

const currentName = ref()

const emit = defineEmits(['tabClick'])
const tabClick = (name) => {
  emit('tabClick', name.title)
}

defineExpose({
  currentName
})

</script>

<style scoped lang="less">
.tab {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
}
</style>