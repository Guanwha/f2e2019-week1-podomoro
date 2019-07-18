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

<style scoped>
.frame{
  display: flex;
  flex-direction: row;
}
.left-region{
  width: 44%;
  height: 800px;
  display: flex;
  justify-content: flex-start;
  background: black;
}
.right-region{
  width: 56%;
  height: 800px;
  display: flex;
  justify-content: flex-end;
  background: white;
  padding: 114px 50px 66.5px 50px
}
</style>
