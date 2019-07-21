
export const todayDate = () => {
  let now = new Date()
  return now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate()
}
export const someDate = (date, shiftDay) => {
  let someDay = new Date(date)
  someDay.setDate(someDay.getDate() + shiftDay)
  return someDay
}
