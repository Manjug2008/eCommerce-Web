import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * API middleware handler
 */
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_SERVER_BASE_URL,
  validateStatus: (status)=>{
    return status >= 200 && status < 400
  }
})

async function authRequestInterceptor(config: AxiosRequestConfig) {
  if (config === undefined || config === null) {
    throw new Error('config is undefined')
  }

  if (config.headers === undefined || config.headers === null) {
    throw new Error('config.headers is undefined')
  }

  let token = ''
  if (typeof window !== 'undefined') {
      token =  process.env.NEXT_PUBLIC_PRODUCT_SECRET as string
       }
  
  config.headers.Authorization = `Bearer ${token}`
  config.headers.Accept = 'application/json'
  config.headers.Version = '1.0'
  return config
}

function responseFormatterInterceptor(response: AxiosResponse) {
  return response.data
}

function errorHandlerInterceptor(error: any) {
  const message = error.response?.data?.message || error.message
  throw new Error(message)
}


apiClient.interceptors.request.use(authRequestInterceptor)
apiClient.interceptors.response.use(responseFormatterInterceptor, errorHandlerInterceptor)


