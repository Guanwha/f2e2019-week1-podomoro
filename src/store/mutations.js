import * as types from './mutation_types'

// state
export const state = {
  list: [
    {id: 0, checked: true, title: '1st thing', tomatos: 4},
    {id: 1, checked: false, title: '2nd thing', tomatos: 0}
  ],
  curID: -1,        // id of current item in play
  isPlaying: false, // flag: is playing (some UI need to disable)
  isWork: true      // flag: work time / break time
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
  [types.UPDATE_TODO] (state, payload) {
    if (payload) {
      for (let i in state.list) {
        let item = state.list[i]
        if (item.id === payload.id) {
          state.list[i].checked = payload.checked
          state.list[i].title = payload.title
          state.list[i].tomatos = payload.tomatos
          if (item.id === state.curID && payload.checked) {
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
