import { defineStore } from "pinia";
import { fetchHouseDetail } from '@/service'
const useDetail = defineStore('detail', {
  state() {
    return {
      houseDetailList: {}
    }
  },
  actions: {
    async fetchHouseDetail(houseId) {
      const res = await fetchHouseDetail(houseId)
      this.houseDetailList = res.data
    }
  }
})
export default useDetail