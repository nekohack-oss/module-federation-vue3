<template>
  <div id="app">
    <h2>Main App</h2>
    <Content />
    <Button />
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue'

export default {
  components: {
    Content: defineAsyncComponent(() => import('./components/Content')),
    Button: defineAsyncComponent(() => import('./components/Button'))
  },
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return { count, increment }
  }
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

h2 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
