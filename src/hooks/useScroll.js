import {  onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'
export default function () {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)

  const scrollListenerHandler = () => {
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    clientHeight.value = document.documentElement.clientHeight
    if (parseInt(scrollHeight.value - scrollTop.value) <= clientHeight.value) {
      isReachBottom.value = true
    }  
  }

  onMounted(() => {
    window.addEventListener('scroll', throttle(scrollListenerHandler, 100))
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return {
    scrollTop, isReachBottom
  }
}