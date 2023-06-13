import axios from 'axios'
import { baseURL, timeout } from './config'

class CYRequest {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
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