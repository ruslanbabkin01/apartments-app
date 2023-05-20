<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <UniversalButton @click="increment" outlined>Click me</UniversalButton>
    <DirectivesTest />
    <StarRating :rating="4.5" />
  </div>
</template>

<script>
import DirectivesTest from './components/DirectivesTest.vue'
import UniversalButton from './components/UniversalButton.vue'
import StarRating from './components/StarRating.vue'

export default {
  name: 'App',
  components: {
    UniversalButton,
    DirectivesTest,
    StarRating,
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
