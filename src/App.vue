<template>
  <div id="app">
    <div class="content">
      <h2>{{ text }}</h2>
      <Header />
      <Container>
        <ApartmentFilterForm class="apartments-filter" @submit="filter" />
      </Container>
      <Container>
        <p v-if="!filteredApartments.length">Nothing found</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
              class="apartments-list__item"
              @click.native="handleItemClick"
            />
          </template>
        </ApartmentsList>
      </Container>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList.vue'
import ApartmentsItem from './components/apartment/ApartmentsItem.vue'
import apartments from './components/apartment/apartments'
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue'
import Container from './components/shared/Container.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
    Footer,
    Header,
  },
  data() {
    return {
      text: '',
      apartments,
      filters: {
        city: '',
        price: 0,
      },
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments))
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments

      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city
      })
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments

      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding-top: 120px;
  flex-grow: 1;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
