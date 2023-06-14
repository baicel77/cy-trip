import cyRequest from '../request'
export function fetchHotSuggest() {
  return cyRequest.get({
    url: '/home/hotSuggests'
  })
}
export function fetchCategroies() {
  return cyRequest.get({
    url: '/home/categories'
  })
}

export function fetchHouseList(page) {
  return cyRequest.get({
    url: 'home/houselist',
    params: {
      page
    }
  })
}