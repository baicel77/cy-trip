import { defineStore } from 'pinia'
import { fetchAllCities } from '@/service'
const useCity = defineStore('city', {
  state() {
    return {
      allCities: {},
      cityItem: { cityName: '广州' }
    }
  },
  actions: {
    async fetchAllCities() {
      const res = await fetchAllCities()
      this.allCities = res.data
      return res.data
    },
    setCityData(item) {
      this.cityItem = item
    }
  }
})

export default useCity