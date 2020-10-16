<template>
  <div id="app">
    <img src="./logo.png" width="30" />
    <h2>Remote Component</h2>
    <content-element />
    <button-element />
  </div>
</template>

<script>
export default {
  //
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
