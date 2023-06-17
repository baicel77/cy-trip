export default function (url) {
  // 参数1:相对路径
  // 参数2:当前路径
  return new URL(`../${url}`, import.meta.url).href
}