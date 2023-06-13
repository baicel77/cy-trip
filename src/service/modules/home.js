import cyRequest from '../request'
export function fetchHotSuggest() {
  return cyRequest.get({
    url: '/home/hotSuggests'
  })
}