<template>
  <div class="item_frame">
    <i class="material-icons" v-if="!item.checked" v-on:click.prevent="switchChecked">check_box_outline_blank</i>
    <i class="material-icons" v-if="item.checked" v-on:click.prevent="switchChecked">check_box</i>
    <p>{{item.title}}</p>
    <div v-for="n in parseInt(item.tomatos)"
         v-bind:key="n">
      <i class="material-icons">radio_button_checked</i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListItemDone',
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
    ...mapActions(['updateTodo'])
  },
  computed: {
    ...mapGetters(['getTodoByID']),
    item () {
      return this.getTodoByID(this.id)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';
@import '../styles/list_item.scss';
</style>
