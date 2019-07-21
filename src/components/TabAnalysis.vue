<template>
  <div class="analysis">
    <div class="buttons">
      <button v-bind:class="['tomato', {focus: showTomato}]" v-on:click.stop="focusTomato">TOMATO</button>
      <button v-bind:class="['mission', {focus: !showTomato}]" v-on:click.stop="focusMission">MISSION</button>
    </div>
    <div class="focus-time">
      <div class="title">FOCUS TIME</div>
      <div class="info">
        <div class="data-block">
          <div class="data-block-title">TODAY</div>
          <div class="data-block-display">
            <div class="num">{{numToday()}}</div>
            <div class="unit">{{showTomato ? 'TOMATOS' : 'MISSIONS'}}</div>
          </div>
        </div>
        <div class="data-block">
          <div class="data-block-title">WEEK</div>
          <div class="data-block-display">
            <div class="num">{{numThisWeek()}}</div>
            <div class="unit">{{showTomato ? 'TOMATOS' : 'MISSIONS'}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>Chart</div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TabAnalysis',
  data: function () {
    return {
      showTomato: true,
      test: this.tomatosThisWeek
    }
  },
  methods: {
    focusTomato: function () {
      this.showTomato = true
    },
    focusMission: function () {
      this.showTomato = false
    },
    numToday: function () {
      return this.showTomato
        ? (this.tomatosToday ? this.tomatosToday.toFixed(0) : '0')
        : (this.missionsToday ? this.missionsToday.toFixed(0) : '0')
    },
    numThisWeek: function () {
      return this.showTomato
        ? (this.tomatosThisWeek ? this.tomatosThisWeek.toFixed(0) : '0')
        : (this.missionsThisWeek ? this.missionsThisWeek.toFixed(0) : '0')
    }
  },
  computed: {
    ...mapGetters(['tomatosToday', 'tomatosThisWeek', 'missionsToday', 'missionsThisWeek'])
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

.analysis {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  .buttons {
    height: 70px;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    .tomato {
      border-width: 1px;
      border-color: $color-bg-dark;
      border-radius: 15px 0 0 15px;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1rem;
      color: $color-font-dark;
      background: $color-bg-light;
      padding: 0 10px 0 20px;
      &:hover {
        font-size: 1.2rem;
      }
    }
    .mission {
      border-width: 1px;
      border-color: $color-bg-dark;
      border-radius: 0 15px 15px 0;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1rem;
      color: $color-font-dark;
      background: $color-bg-light;
      padding: 0 20px 0 10px;
      &:hover {
        font-size: 1.2rem;
      }
    }
    .focus {
      color: $color-font-light;
      background: $color-bg-dark;
    }
  }
  .focus-time {
    display: flex;
    flex-direction: column;
    .title {
      height: 32px;
      width: 100%;
      font-weight: bold;
      line-height: 32px;
      color: $color-font-light;
      background: $color-bg-dark;
      text-align: start;
      padding: 0 10px;
    }
    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background: $color-bg-light;
    }
  }
}
.data-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $color-bg-light;
  padding: 5px;
  &-title {
    font-size: 1rem;
    font-weight: bold;
    line-height: 2rem;
    color: $color-font-dark;
    text-align: start;
    padding: 10px;
  }
  &-display {
    display: flex;
    flex-direction: row;
    padding: 10px;
    .num {
      line-height: 2rem;
      font-size: 2rem;
      color: $color-main;
      text-align: end;
      margin: 10px;
    }
    .unit {
      line-height: 2rem;
      font-size: 1rem;
      text-align: end;
      margin: 10px;
    }
  }
}
</style>
