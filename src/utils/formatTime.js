import dayjs from "dayjs";
export function formatMonthDay(time) {
  return dayjs(time).format('MM月DD日')
}
export function getDiffsDay(startTime, endTime) {
  return dayjs(endTime).diff(startTime, 'day')
}