import { axiosInstance } from './axiosInstance'

// export const loginUser = payload => {
//   return axiosInstance.post('/users/login', payload)
// }

export const getApartmentsList = () => {
  return axiosInstance.get('/apartments')
}

export const getApartmentById = id => {
  return axiosInstance.get(`/apartments/${id}`)
}
