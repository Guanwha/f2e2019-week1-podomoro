import * as types from './mutation_types'
import * as fnDate from '../common/date'

// state
export const state = {
  list: [
    {id: 1, checked: true, title: '1st thing', tomatos: 4},
    {id: 2, checked: false, title: '2nd thing', tomatos: 0}
  ],
  curID: -1,          // id of current item in play
  isPlaying: false,   // flag: is playing (some UI need to disable)
  isWork: true,       // flag: work time / break time
  tomatoRecords: {},  // record total tomatos per day (key: date,  value: tomato number)
  missionRecords: {}  // record total missions per day (key: date,  value: mission number)
}

// mutations
export const mutations = {
  // payload is a title string
  [types.ADD_TODO] (state, payload) {
    if (payload) {
      let item = {
        id: Date.now(),
        checked: false,
        title: payload,
        tomatos: 0
      }
      state.list.push(item)
    }
  },
  // payload is a item (include id, checked, title, tomatos)
  [types.TOGGLE_TODO] (state, payload) {
    if (payload) {
      for (let i in state.list) {
        if (state.list[i].id === payload.id) {
          // toggle the job checked and record the date
          state.list[i].checked = !state.list[i].checked
          state.list[i].finished = (state.list[i].checked) ? fnDate.todayDate() : ''
          break
        }
      }
    }
  },
  // payload is a item (include id, checked, title, tomatos)
  [types.UPDATE_TODO] (state, payload) {
    if (payload) {
      for (let i in state.list) {
        let item = state.list[i]
        if (item.id === payload.id) {
          // update the information
          state.list[i].title = payload.title
          if (item.id === state.curID && payload.checked) {
            // remove the current todo id when it has finished
            state.curID = -1
          }
          break
        }
      }
    }
  },
  // payload is a id
  [types.REMOVE_TODO] (state, payload) {
    if (payload) {
      for (let i in state.list) {
        let item = state.list[i]
        if (item.id === payload) {
          state.list.splice(i, 1)
          if (item.id === state.curID) {
            state.curID = -1
          }
          break
        }
      }
    }
  },
  // payload is a id
  [types.SELECT_TODO] (state, payload) {
    if (state.isPlaying) return
    if (payload && payload >= 0) {
      for (let i in state.list) {
        let item = state.list[i]
        if (item.id === payload) {
          if (!item.checked) {
            state.curID = payload
            break
          }
        }
      }
    }
  },
  // no payload
  [types.PLAY_TODO] (state) {
    state.isPlaying = (state.curID >= 0)
  },
  // payload is a number (increaseTomatos)
  [types.STOP_TODO] (state, payload) {
    if (payload) {
      for (let i in state.list) {
        let item = state.list[i]
        if (item.id === state.curID) {
          state.list[i].tomatos += payload
          state.isPlaying = false
          recordTomatos(payload)
        }
      }
    }
  },
  // no payload
  [types.CHANGE_TO_BREAK] (state) {
    state.isWork = false
  },
  // no payload
  [types.PLAY_BREAK] (state) {
    state.isPlaying = true
  },
  // no payload
  [types.CHANGE_TO_WORK] (state) {
    state.isPlaying = false
    state.isWork = true
  }
}

// calculation
export const recordTomatos = (tomatos) => {
  let today = fnDate.todayDate()
  if (state.tomatoRecords[today]) {
    state.tomatoRecords[today] += tomatos
  } else {
    state.tomatoRecords[today] = tomatos
  }
}
