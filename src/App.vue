<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <UniversalButton @click="increment" outlined>Click me</UniversalButton>
    <DirectiveTest></DirectiveTest>
  </div>
</template>

<script>
import DirectiveTest from './components/DirectiveTest.vue'
import UniversalButton from './components/UniversalButton.vue'

export default {
  name: 'App',
  components: {
    UniversalButton,
    DirectiveTest,
  },
  data() {
    return {
      amountOfClicks: 0,
    }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1
    },
  },
}
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
