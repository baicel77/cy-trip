import { ref, computed } from 'vue'
import useDetail from '@/stores/modules/detail'
const detailStore = useDetail()

export default function () {
  const housePics = computed(() => {
    console.log(detailStore.houseDetailList?.houseId)
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

  return {
    getIndicatorData,
    indicatorData,
    housePics,
  }
}

