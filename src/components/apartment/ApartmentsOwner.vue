<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Owner Information:</h2>
    <div class="apartments-owner__box-info">
      <p class="apartments-owner__info">{{ owner.name }}</p>
      <p class="apartments-owner__info">tel: {{ owner.phone }}</p>
      <p class="apartments-owner__info">email: {{ owner.email }}</p>
    </div>
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
@import '../../assets/scss';
.apartments-owner {
  padding: 20px;
  background-color: $card-bg;

  &__title {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
  }

  &__box-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__info {
    font-size: 16px;
  }
}
</style>
