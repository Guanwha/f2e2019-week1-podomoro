<template>
  <div class="cd-frame">
    <img src='../assets/Group20.svg'>
    <!-- play animation -->
    <div class="cd-outer-play"></div>
    <div class="cd-inner-play"/>
    <i class="material-icons md-light md-96 cd-play-icon">play_arrow</i>
    <!-- text information -->
    <span class="cd-text">{{cdText}}</span>
    <div class="cd-bar"/>
    <span class="item-title">{{item.title}}</span>
  </div>
</template>

<script>

export default {
  name: 'RegionLeft',
  data: function () {
    return {
      cdText: '25:00',                                              // fake
      item: {id: 0, checked: true, title: '1st thing', tomatos: 4}  // fake
    }
  },
  methods: {
  },
  computed: {
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
    border: 3px solid $color-main;
    border-radius: $outer-play-border-radius;
  }
  .cd-inner-play {
    width: $inner-play-width;
    height: $inner-play-width;
    position: absolute;
    transform: translate(-50%, -50%);
    left: $play-center-left;
    top: $play-center-top;
    border-radius: $inner-play-border-radius;
    background: $color-sub;
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
