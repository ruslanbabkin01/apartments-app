import { axiosInstance } from './axiosInstance'

export const loginUser = payload => {
  return axiosInstance.post('/users/login', payload)
}

export const registerUser = payload => {
  return axiosInstance.post('/users/register', payload)
}

export const logoutUser = () => {
  return axiosInstance.post('/users/logout')
}
