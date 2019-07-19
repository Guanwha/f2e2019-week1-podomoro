<template>
  <div class="frame">
    <div class='left-region'>123</div>
    <div class='right-region'>
      <RegionRight/>
    </div>
  </div>
</template>

<script>
import RegionRight from './RegionRight'

export default {
  name: 'Pomodoro',
  components: {
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
  width: 44%;
  height: 800px;
  display: flex;
  justify-content: flex-start;
  background: $color-bg-dark;
}
.right-region{
  width: 56%;
  height: 800px;
  display: flex;
  justify-content: flex-end;
  background: $color-bg-light;
  padding: 114px 50px 66.5px 50px;
}
</style>
