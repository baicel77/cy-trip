import { defineStore } from 'pinia'
const nowTimeStamp = new Date().getTime()
const targetTimeStamp = new Date().getTime() + 1 * 24 * 60 * 60 * 1000
const useMain = defineStore('main', {
  state() {
    return {
      startDate: nowTimeStamp,
      endDate: targetTimeStamp
    }
  },
  actions: {
    
  }
})
export default useMain