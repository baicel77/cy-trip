import { defineStore } from 'pinia'
const useHome = defineStore('home', {
  state() {
    return {
      message: 'Hello'
    }
  }
})
export default useHome