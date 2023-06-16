import axios from 'axios'
import { baseURL, timeout } from './config'
import useMain from '@/stores/modules/main'
import { storeToRefs } from 'pinia'
const mainStore = useMain()
const { isShowLoading } = storeToRefs(mainStore)
class CYRequest {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    this.instance.interceptors.request.use((config) => {
      isShowLoading.value = true
      return config
    })
    this.instance.interceptors.response.use((res) => {
      isShowLoading.value = false
      return res.data
    }, err => {
      isShowLoading.value = false
      return err
    })
  }


  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

}

export default new CYRequest(baseURL, timeout)