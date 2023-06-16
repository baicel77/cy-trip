import cyRequest from '../request'
export function fetchHouseDetail(houseId) {
  return cyRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}