<template>
  <div :id="$style.app">
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          class="apartments-list__item"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList.vue'
import ApartmentsItem from './components/apartment/ApartmentsItem.vue'
import apartments from './components/apartment/apartments'
export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
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
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
