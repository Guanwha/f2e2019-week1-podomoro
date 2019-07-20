<template>
  <div class="frame">
    <div class='left-region'><RegionLeft/></div>
    <div class='right-region'><RegionRight/></div>
  </div>
</template>

<script>
import RegionLeft from './RegionLeft'
import RegionRight from './RegionRight'

export default {
  name: 'Pomodoro',
  components: {
    RegionLeft,
    RegionRight
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.frame{
  display: flex;
  flex-direction: row;
}
.left-region{
  width: $width-left;
  height: $height-view;
  display: flex;
  justify-content: flex-start;
  background: $color-bg-dark;
}
.right-region{
  width: $width-right;
  height: $height-view;
  display: flex;
  justify-content: flex-end;
  background: $color-bg-light;
  padding: 114px 50px 66.5px 50px;
}
</style>
