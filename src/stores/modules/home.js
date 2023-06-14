import { defineStore } from 'pinia'
import { fetchHotSuggest, fetchCategroies, fetchHouseList } from '@/service'
const useHome = defineStore('home', {
  state() {
    return {
      hotSuggest: [],
      categories: [],
      houseList: [],
      currentPage: 0
    }
  },
  actions: {
    async fetchHotSuggest() {
      const res = await fetchHotSuggest()
      this.hotSuggest = res.data
    },
    async fetchCategroies() {
      const res = await fetchCategroies()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await fetchHouseList(++this.currentPage)
      this.houseList.push(...res.data)
    }
  }
})
export default useHome