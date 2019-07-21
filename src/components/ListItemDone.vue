<template>
  <div class="item_frame">
    <i class="material-icons" v-on:click.stop="toggleTodo(item)">check_box</i>
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
    ...mapActions(['toggleTodo'])
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
