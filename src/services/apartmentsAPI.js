import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
})

export const getApartmentsList = () => {
  return axiosInstance.get('/apartments')
}

export const getApartmentById = id => {
  return axiosInstance.get(`/apartments/${id}`)
}
