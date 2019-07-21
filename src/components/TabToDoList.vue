<template>
  <div class="todo_frame">
    <!-- add to do item -->
    <div class="region-create">
      <input v-model="newTodo" placeholder="Add New Mission...">
      <button v-on:click.prevent="addTodo(newTodo)">Create</button>
    </div>
    <!-- lists -->
    <div class="region-lists">
      <ListToggle v-bind:_title="todoListTitle" v-bind:_list="getTodos" v-bind:_editable="true"/>
      <ListToggle v-bind:_title="doneListTitle" v-bind:_list="getDones" v-bind:_editable="false"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ListToggle from '../components/ListToggle'

export default {
  name: 'TabToDoList',
  components: {
    ListToggle
  },
  data: function () {
    return {
      newTodo: '',            // new todo title
      todoListTitle: 'TO DO', // todo list title
      doneListTitle: 'DONE'   // done list title
    }
  },
  methods: {
    ...mapActions(['addTodo'])
  },
  computed: {
    ...mapGetters([ 'getTodos', 'getDones' ])
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.todo-frame {
  height: 100%;
  background: $color-bg-light;
}
.region-create {
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 10px 0 10px 0;

  input {
    width: 100%;
    border: 1px solid $color-main;
    font-size: 1rem;
    padding: 5px;
  }
  button {
    width: 100px;
    border: 2px solid $color-main;
    color: $color-main;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 5px;
  }
}
.region-lists {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
</style>
