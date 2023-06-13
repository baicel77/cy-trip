import { defineStore } from 'pinia'
import { fetchHotSuggest } from '@/service/modules/home'
const useHome = defineStore('home', {
  state() {
    return {
      hotSuggest: []
    }
  },
  actions: {
    async fetchHotSuggest() {
      const res = await fetchHotSuggest()
      this.hotSuggest = res.data
    }
  }
})
export default useHome