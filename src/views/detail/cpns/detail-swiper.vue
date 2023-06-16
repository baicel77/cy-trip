<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#fff">
        <van-swipe-item 
        v-for="(item, index) in housePics"
        :key="index"
        >
          <img :src="item.url" alt="">
        </van-swipe-item>
        <!-- 自定义指示器 -->
        <template #indicator="{ active, total }">
          <div class="custom-indicator">
            <template v-for="(value, key, index) in indicatorData" :key="key">
              <div 
              class="item" 
              :class="{active: housePics[active]?.enumPictureCategory == key }">
                <span class="text">{{ formatName(value[index]?.title) }}</span>
                <span 
                class="groupCurrentPage" 
                v-if="housePics[active]?.enumPictureCategory == key">
                  (<span style="color: #ff9854;">
                    {{ getCategoryIndex(housePics[active]) + 1 }}
                    <!-- {{ getCurrentGroupIndex(housePics[active], active) + 1 }} -->
                  </span>/{{ value.length }}) 
                </span>
              </div>
            </template>
          </div>
        </template>
    </van-swipe>
  </div>
</template>

<script setup>
import {  watch, ref, computed} from 'vue';
import useDetail from '@/stores/modules/detail'
const detailStore = useDetail()

const housePics = computed(() => {
  return detailStore.houseDetailList?.mainPart?.topModule.housePicture.housePics 
})
// 自定义指示器数据
const indicatorData = ref({})
const getIndicatorData = (data) => {
  for (const item of data) {
    let value = indicatorData.value[item.enumPictureCategory] 
    if (!value) {
      value = []
      indicatorData.value[item.enumPictureCategory] = value
    }
    indicatorData.value[item.enumPictureCategory].push(item) 
  }
}
let index = 0

watch(housePics, (newValue) => {  
  console.log(index++)
  console.log(housePics.value)   
  if (newValue) { 
    getIndicatorData(newValue)  
  } 
}, {
  // immediate: true,  
})
// if (housePics.value) { 
//   getIndicatorData(housePics.value) 
// } else { 
//   watch(housePics, (newValue) => {
//     if (newValue) { 
//       getIndicatorData(newValue)     
//     } 
//   })
// }  

// 利用正则 
const re = /【(.+)】：/i

// 格式化title
const formatName = (name) => {
  // return name.replace('【', '').replace('】：', '')
  if (name) return name.match(re)[1]
}

// 获取指示器分组当前索引
// const getCurrentGroupIndex = (item, active) => {
//   const index = housePics.value[active]?.enumPictureCategory
//   const data = indicatorData.value[index]
//   return data.findIndex(data => {
//     return data == item
//   })
// }
const getCategoryIndex = (item) => {
  const valueArray = indicatorData.value?.[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item)
}

</script>

<style lang="less" scoped>
.swiper {
  .my-swipe {
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      display: flex;
      .item {
        margin: 0 3px;
        &.active {
          background-color: #fff;
          color: #000;
          border-radius: 4px;
          padding: 1px 3px;
        }
      }
    }
  }
}
</style>