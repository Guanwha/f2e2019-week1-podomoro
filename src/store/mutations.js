import * as types from './mutation_types'

// state
export const state = {
  list: [
    {id: 0, checked: true, title: '1st thing', tomatos: 4},
    {id: 1, checked: false, title: '2nd thing', tomatos: 0}
  ]
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
      console.log('[Vuex-ADD_TODO]: ' + JSON.stringify(item))
      state.list.push(item)
    }
  },
  // payload is a item (include id, checked, title, tomatos)
  [types.UPDATE_TODO] (state, payload) {
    if (payload) {
      for (let i in state.list) {
        let item = state.list[i]
        if (item.id === payload.id) {
          console.log('[Vuex-UPDATE_TODO]: ' + JSON.stringify(item) + '-->' + JSON.stringify(payload))
          state.list[i].checked = payload.checked
          state.list[i].title = payload.title
          state.list[i].tomatos = payload.tomatos
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
          console.log('[Vuex-REMOVE_TODO]: ' + JSON.stringify(item))
          state.list.splice(i, 1)
          break
        }
      }
    }
  }
}
