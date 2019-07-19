<template>
  <div class="main-tabs">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        v-bind:key="tab.key"
        v-bind:class="['tab-button', { active : currentTab === tab.key}]"
        v-on:click.prevent="clickTab(tab.key)"
      >
        <i class="material-icons">{{tab.icon}}</i>
        <span class="text">{{tab.text}}</span>
      </button>
    </div>

    <component v-bind:is="currentTabCompoent">
    </component>
  </div>
</template>

<script>
import TabToDoList from '../components/TabToDoList'
import TabAnalysis from '../components/TabAnalysis'
import TabSettings from '../components/TabSettings'

export default {
  name: 'RegionRight',
  components: {
    TabToDoList,
    TabAnalysis,
    TabSettings
  },
  data: function () {
    return {
      tabs: [
        { key: 'ToDoList', text: 'TO DO LIST', icon: 'list' },
        { key: 'Analysis', text: 'ANALYSIS', icon: 'show_chart' },
        { key: 'Settings', text: 'SETTING', icon: 'settings' }
      ],
      currentTab: 'ToDoList'
    }
  },
  methods: {
    clickTab: function (tabKey) {
      this.currentTab = tabKey
    }
  },
  computed: {
    currentTabCompoent: function () {
      return 'Tab' + this.currentTab
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

.main-tabs{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tabs {
  height: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}
.tab-button {
  width: 33.333%;
  background: $color-bg-light;
  border-width: 0;
  display: flex;
  color: $color-font-dark;

  &.active {
    background: $color-bg-light;
    border-width: 0 0 3px 0;
    border-style: solid;
    border-color: $color-main;
    color: $color-main;
  }

  .text {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    margin-left: 12px;

    &:hover {
      font-size: 25px;
    }
  }

  i {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
}
</style>
