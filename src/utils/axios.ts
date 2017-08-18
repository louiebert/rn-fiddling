import axios, {AxiosRequestConfig} from 'axios'

import store from '../stores/index'

const client = axios.create()

const addAuthTokenToRequest = (config: AxiosRequestConfig) => {
  if (store.auth.token) {
    const modifiedConfig = {...config}

    if (!modifiedConfig.headers) {
      modifiedConfig.headers = {}
    }

    modifiedConfig.headers.Authorization = `Bearer ${store.session.token}`

    return modifiedConfig
  } else {
    return config
  }
}

client.interceptors.request.use(addAuthTokenToRequest)

export default client
