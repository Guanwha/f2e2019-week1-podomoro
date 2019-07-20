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
  }
}
