
const getters = {
  getTodos: (state) => { return state.list.filter((item) => !item.checked) },
  getDones: (state) => { return state.list.filter((item) => item.checked) },
  getTodoByID: (state) => (id) => { return (id) ? state.list.filter((item) => item.id === id)[0] : null },
  currentTodo: (state) => { return (state.curID) ? state.list.filter((item) => item.id === state.curID)[0] : null },
  isPlaying: (state) => { return state.isPlaying },
  isWork: (state) => { return state.isWork }
}

export default getters
