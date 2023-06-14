import dayjs from "dayjs";
export function formatMonthDay(time, format = 'MM月DD日') {
  return dayjs(time).format(format)
}
export function getDiffsDay(startTime, endTime) {
  return dayjs(endTime).diff(startTime, 'day')
}