<template>
  <div class="categories">
    <div class="item" v-for="item in categories" :key="item.id">
      <div class="pic">
        <img :src="item.pictureUrl" alt="">
      </div>
      <div class="text">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup>
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHome()
const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.categories {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin: 15px 0 25px;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .pic {
      width: 32px;
      img {
        width: 100%;
      }
    }
    .text {
      margin-top: 8px;
      color: #000;
      font-size: 12px;
    }
  }
}

</style>