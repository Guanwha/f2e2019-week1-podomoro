import * as fnDate from '../common/date'

const getters = {
  getTodos: (state) => { return state.list.filter((item) => !item.checked) },
  getDones: (state) => { return state.list.filter((item) => item.checked) },
  getTodoByID: (state) => (id) => { return (id) ? state.list.filter((item) => item.id === id)[0] : null },
  currentTodo: (state) => { return (state.curID) ? state.list.filter((item) => item.id === state.curID)[0] : null },
  isPlaying: (state) => { return state.isPlaying },
  isWork: (state) => { return state.isWork },

  tomatosToday: (state) => {
    let today = fnDate.todayDate()
    return state.tomatoRecords[today]
  },
  tomatosThisWeek: (state) => {
    let day = new Date()
    let dayStr = fnDate.formatDate(day)
    let tomatos = (state.tomatoRecords[dayStr]) ? state.tomatoRecords[dayStr] : 0
    for (let i = 0; i < 7; i++) {
      day.setDate(day.getDate() - 1)
      dayStr = fnDate.formatDate(day)
      tomatos += (state.tomatoRecords[dayStr]) ? state.tomatoRecords[dayStr] : 0
    }
    return tomatos
  },
  missionsToday: (state) => {
    return countMissions(state, 1)
  },
  missionsThisWeek: (state) => {
    return countMissions(state, 7)
  }
}

// ====== calculation ======
// count mission number in some days
export const countMissions = (state, daysBeforeToday) => {
  let today = new Date()
  let missions = 0
  for (let i in state.list) {
    let todo = state.list[i]
    JSON.stringify(todo)
    if (todo && todo.finished) {
      let date = new Date(todo.finished)
      let difDay = parseInt((today.getTime() - date.getTime()) / 1000 / 60 / 60 / 24)
      if (difDay < daysBeforeToday) {
        missions++
      }
    }
  }
  return missions
}

export default getters
