import * as types from './mutation_types'

export const addTodo = ({commit}, payload) => {
  commit(types.ADD_TODO, payload)
}
export const updateTodo = ({commit}, payload) => {
  commit(types.UPDATE_TODO, payload)
}
export const removeTodo = ({commit}, payload) => {
  commit(types.REMOVE_TODO, payload)
}
export const selectTodo = ({commit}, payload) => {
  commit(types.SELECT_TODO, payload)
}
export const playTodo = ({commit}) => {
  commit(types.PLAY_TODO)
}
export const stopTodo = ({commit}, payload) => {
  commit(types.STOP_TODO, payload)
}
export const changeToBreak = ({commit}) => {
  commit(types.CHANGE_TO_BREAK)
}
export const playBreak = ({commit}) => {
  commit(types.PLAY_BREAK)
}
export const changeToWork = ({commit}) => {
  commit(types.CHANGE_TO_WORK)
}
