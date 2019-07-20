<template>
  <div class="item_frame">
    <i class="material-icons" v-if="!item.checked" v-on:click.prevent="switchChecked">check_box_outline_blank</i>
    <i class="material-icons" v-if="item.checked" v-on:click.prevent="switchChecked">check_box</i>
    <i class="material-icons" v-on:click.prevent="playItem">play_circle_outline</i>
    <input v-model="item.title" v-on:keyup.enter="updateTodo(item)"/>
    <div v-for="n in item.tomatos"
         v-bind:key="n">
      <i class="material-icons">radio_button_checked</i>
    </div>
    <i class="material-icons del" v-on:click.prevent="removeTodo(item.id)">close</i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ListItemToDo',
  props: {
    _item: Object
  },
  data: function () {
    return {
      item: {
        id: this._item.id,
        checked: this._item.checked,
        title: this._item.title,
        tomatos: this._item.tomatos
      }
    }
  },
  methods: {
    switchChecked: function () {
      this.item.checked = !this.item.checked
      this.updateTodo(this.item)
    },
    playItem: function () {
      console.log('start to play ' + this.item.title)
      // start to play item.id
    },
    ...mapActions(['updateTodo', 'removeTodo'])
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';
@import '../styles/list_item.scss';
</style>
