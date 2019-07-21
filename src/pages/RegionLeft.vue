<template>
  <div class="cd-frame">
    <img src='../assets/Group20.svg'>
    <!-- play button -->
    <div v-bind:class="['cd-outer-play', isWork ? classOuterPlayWork : classOuterPlayBreak]"/>
    <div v-bind:class="['cd-inner-play', isWork ? classInnerPlayWork : classInnerPlayBreak]"/>
    <i class="material-icons md-light md-96 cd-play-icon" v-if="!isPlaying" v-on:click.prevent="play">play_arrow</i>
    <i class="material-icons md-light md-96 cd-play-icon" v-if="isPlaying" v-on:click.prevent="stop">stop</i>
    <!-- text information -->
    <span class="cd-text">{{cdText}}</span>
    <div class="cd-bar"/>
    <span class="item-title" v-if="currentTodo">{{currentTodo.title}}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const cWorkTime = 1500    // work time (unit: second)
const cBreakTime = 300    // break time (unit: second)

export default {
  name: 'RegionLeft',
  data: function () {
    return {
      cd: cWorkTime,
      cdText: '25:00',  // default text

      // scss class
      classOuterPlayWork: 'cd-outer-play-is-work',
      classOuterPlayBreak: 'cd-outer-play-is-break',
      classInnerPlayWork: 'cd-inner-play-is-work',
      classInnerPlayBreak: 'cd-inner-play-is-break'
    }
  },
  watch: {
    cd (newCD) {
      let min = Math.floor(newCD / 60)
      let sec = (newCD % 60)
      this.cdText = min + ':' + sec
    }
  },
  methods: {
    ...mapActions(['playTodo', 'stopTodo', 'changeToBreak', 'playBreak', 'changeToWork']),
    // play work / break
    play: function () {
      if (this.isPlaying) return
      if (this.isWork) {
        this.playTodo()
      } else {
        this.playBreak()
      }
      // start to count down
      this.countdown()
    },
    // count down loop
    countdown: function () {
      // if (this.isPlaying) {
      if (this.cd > 0) {
        setTimeout(() => {
          if (this.isPlaying) { // double check
            this.cd--
            this.countdown()
          }
        }, 1000)   // count down per 1 second
      } else {
        // count down finished
        if (this.isWork) {
          this.stopTodo(1)
          this.changeToBreak()
          this.cd = cBreakTime  // reset count-down
        } else {
          this.changeToWork()
          this.cd = cWorkTime   // reset count-down
        }
      }
      // }
    },
    // stop work / break
    stop: function () {
      // stop manually
      if (this.isPlaying) {
        if (this.isWork) {
          let increaseTomatos = (cWorkTime - this.cd) / cWorkTime
          this.stopTodo(increaseTomatos)
          this.cd = cWorkTime  // reset count-down
        } else {
          this.changeToWork()
          this.cd = cWorkTime   // reset count-down
        }
      }
    }
  },
  computed: {
    ...mapGetters(['currentTodo', 'isPlaying', 'isWork'])
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

.cd-frame {
  width: 100%;
  position: relative;

  img {
    position: absolute;
    left: 16%;
    top: 16%;
  }
  .cd-outer-play {
    width: $outer-play-width;
    height: $outer-play-width;
    position: absolute;
    transform: translate(-50%, -50%);
    left: $play-center-left;
    top: $play-center-top;
    border-radius: $outer-play-border-radius;

    &-is-work {
      border: 3px solid $color-work;
    }
    &-is-break {
      border: 3px solid $color-break;
    }
  }
  .cd-inner-play {
    width: $inner-play-width;
    height: $inner-play-width;
    position: absolute;
    transform: translate(-50%, -50%);
    left: $play-center-left;
    top: $play-center-top;
    border-radius: $inner-play-border-radius;

    &-is-work {
      background: $color-work-sub;
    }
    &-is-break {
      background: $color-break-sub;
    }
  }
  .cd-play-icon {
    position: absolute;
    transform: translate(-50%, -50%);
    left: $play-center-left;
    top: $play-center-top;
  }
  .cd-text {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 65%;
    font-size: 4rem;
    font-weight: bold;
    color: $color-font-light;
  }
  .cd-bar {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 70%;
    width: 30%;
    height: 5px;
    background: $color-bg-light;
  }
  .item-title {
    width: auto;
    height: 2rem;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 75%;
    font-size: 2rem;
    font-weight: bold;
    color: $color-font-light;
  }
}
</style>
