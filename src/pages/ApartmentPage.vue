<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <ApartmentsOwner
          :owner="apartment.owner"
          class="apartment-page__owner"
        />
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '@/components/shared/Container.vue'
import apartments from '../components/apartment/apartments'
import ApartmentsMainInfo from '@/components/apartment/ApartmentsMainInfo.vue'
import ApartmentsOwner from '@/components/apartment/ApartmentsOwner.vue'

export default {
  name: 'ApartmentPage',
  components: { Container, ApartmentsMainInfo, ApartmentsOwner },
  computed: {
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
