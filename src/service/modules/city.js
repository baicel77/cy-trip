import cyRequest from '../request'
export function fetchAllCities() {
  return cyRequest.get({
    url: '/city/all'
  })
}