
const getters = {
  getTodos: (state) => { return state.list.filter((item) => !item.checked) },
  getDones: (state) => { return state.list.filter((item) => item.checked) },
  getTodoByID: (state) => (id) => { return (id < 0) ? null : state.list.filter((item) => item.id === id)[0] },
  currentTodo: (state) => { return (state.curID < 0) ? null : state.list.filter((item) => item.id === state.curID)[0] },
  isPlaying: (state) => { return state.isPlaying },
  isWork: (state) => { return state.isWork }
}

export default getters
