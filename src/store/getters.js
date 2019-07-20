
const getters = {
  getTodos: (state) => { return state.list.filter((item) => !item.checked) },
  getDones: (state) => { return state.list.filter((item) => item.checked) }
}

export default getters
