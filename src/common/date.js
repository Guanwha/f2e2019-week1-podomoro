
export const formatDate = (date) => {
  return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate()
}
export const todayDate = () => {
  let now = new Date()
  return formatDate(now)
}
export const someDate = (date, shiftDay) => {
  let someDay = new Date(date)
  someDay.setDate(someDay.getDate() + shiftDay)
  return someDay
}
