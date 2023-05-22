<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Owner Information:</h2>
    <p class="apartments-owner__info">{{ owner.name }}</p>
    <p class="apartments-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartments-owner__info">email: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.apartments-owner {
  padding: 20px;
  background-color: #e1efff;
  font-weight: 400;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__info {
    margin-top: 6px;
  }
}
</style>
