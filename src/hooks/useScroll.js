import {  onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'
export default function (el = window) {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)

  const scrollListenerHandler = () => {
    if (el === window) {
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
      clientHeight.value = document.documentElement.clientHeight
    } else {
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
      clientHeight.value = el.clientHeight
    }
    if (parseInt(scrollHeight.value - scrollTop.value) <= clientHeight.value) {
      isReachBottom.value = true
    }  
  }

  onMounted(() => {
    if(el.value) el = el.value
    el.addEventListener('scroll', throttle(scrollListenerHandler, 100))
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  return {
    scrollTop, isReachBottom
  }
}