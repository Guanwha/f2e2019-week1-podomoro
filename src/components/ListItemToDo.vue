<template>
  <div class="item_frame" v-on:click.prevent="selectTodo(item.id)">
    <i class="material-icons" v-if="!item.checked && !isPlaying" v-on:click.prevent="switchChecked">check_box_outline_blank</i>
    <i class="material-icons" v-if="item.checked && !isPlaying" v-on:click.prevent="switchChecked">check_box</i>
    <i class="material-icons" v-bind:class="{'target-item': checkTarget}">play_circle_outline</i>
    <input v-model="item.title" v-on:keyup.enter="updateTodo(item)"/>
    <div v-for="n in parseInt(item.tomatos)"
         v-bind:key="n">
      <i class="material-icons">radio_button_checked</i>
    </div>
    <i class="material-icons del" v-on:click.prevent="removeTodo(item.id)">close</i>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListItemToDo',
  props: {
    _item: Object
  },
  data: function () {
    return {
      id: this._item.id
    }
  },
  methods: {
    switchChecked: function () {
      this.item.checked = !this.item.checked
      this.updateTodo(this.item)
    },
    ...mapActions(['updateTodo', 'removeTodo', 'selectTodo'])
  },
  computed: {
    ...mapGetters(['getTodoByID', 'isPlaying', 'currentTodo']),
    item () {
      return this.getTodoByID(this.id)
    },
    checkTarget () {
      return (this.id && this.currentTodo) ? (this.id === this.currentTodo.id) : false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';
@import '../styles/list_item.scss';

.target-item {
  color: $color-main
}
</style>
