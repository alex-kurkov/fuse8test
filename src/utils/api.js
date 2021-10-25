import { API_URL } from "./constants"

export const getApartmentsRequest = () => fetch(API_URL)
  .then(res => res.json())
  .then(data => Promise.resolve(data))
  .catch(err => Promise.reject(err | 'error while fetching data...'))