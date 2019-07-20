import * as types from './mutation_types'

export const addTodo = ({commit}, payload) => {
  commit(types.ADD_TODO, payload)
}
