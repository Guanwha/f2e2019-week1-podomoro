<template>
  <div class="list-frame">
    <div class="toggle-header" v-on:click.prevent="switchListDisplay">
      {{_title}}
      <i class="material-icons" v-if="showList">arrow_drop_up</i>
      <i class="material-icons" v-if="!showList">arrow_drop_down</i>
    </div>
    <div
        v-show="showList"
        v-for="item in list"
        v-bind:key="item.id">
      <ListItemToDo v-if="_editable" v-bind:_item="item"/>
      <ListItemDone v-if="!_editable" v-bind:_item="item"/>
    </div>
  </div>
</template>

<script>
import ListItemToDo from './ListItemToDo'
import ListItemDone from './ListItemDone'

export default {
  name: 'ToggleList',
  components: {
    ListItemToDo,
    ListItemDone
  },
  props: {
    _title: String,
    _list: Array,
    _editable: Boolean
  },
  data: function () {
    return {
      list: this._list,     // id: identity, key: checked, title, tomatos
      showList: true       // flag: control todo list display
    }
  },
  watch: {
    _list (list) {
      this.list = this._list
    }
  },
  methods: {
    switchListDisplay: function () {
      this.showList = !this.showList
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.list-frame {
  width: auto;
  height: auto;
  margin-bottom: 20px;
}
.toggle {
  &-header {
    width: 100%;
    background: $color-bg-dark;
    color: $color-font-light;
    font-size: 1rem;
    font-weight: bold;
    line-height: 2rem;
    text-align: left;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
