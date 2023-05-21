<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, price, descr, imgUrl, rating } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
        class="apartments-list__item"
      />
    </div>
  </Container>
</template>
<script>
import Container from '../shared/Container.vue'
import ApartmentsItem from './ApartmentsItem.vue'

export default {
  name: 'ApartmentsList',
  components: { ApartmentsItem, Container },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
