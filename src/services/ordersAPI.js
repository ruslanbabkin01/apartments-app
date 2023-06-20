import { axiosInstance } from './axiosInstance'

export const bookApartment = payload => {
  return axiosInstance.post('/orders', payload)
}

export const getOrders = () => {
  return axiosInstance.get('/orders')
}
