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
