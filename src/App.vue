<template>
  <div id="app">
    <Pomodoro/>
  </div>
</template>

<script>
import Pomodoro from './pages/Pomodoro'

export default {
  name: 'App',
  components: {
    Pomodoro
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1280px;
  height: 800px;
  margin: 0 auto;
  background: red;
}
</style>
