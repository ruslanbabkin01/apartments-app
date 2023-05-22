<template>
  <main class="homepage">
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
          />
        </template>
      </ApartmentsList>
    </Container>
  </main>
</template>

<script>
import ApartmentsList from '../components/apartment/ApartmentsList.vue'
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue'
import apartments from '../components/apartment/apartments'
import ApartmentFilterForm from '../components/apartment/ApartmentFilterForm.vue'
import Container from '../components/shared/Container.vue'

export default {
  name: 'HomePage',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
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
.apartments-filter {
  margin-bottom: 40px;
}
</style>
