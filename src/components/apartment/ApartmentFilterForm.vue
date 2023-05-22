<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect class="form__select" :items="cities" v-model="city" />
    <CustomInput v-model="price" placeholder="Price, from" />
    <UniversalButton type="submit" class="form__submit"
      >Housing selection</UniversalButton
    >
  </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue'
import CustomSelect from '../shared/CustomSelect.vue'
import UniversalButton from '../shared/UniversalButton'

export default {
  name: 'ApartmentFilterForm',
  components: { CustomSelect, CustomInput, UniversalButton },
  data() {
    return {
      price: '',
      city: '',
    }
  },
  computed: {
    cities() {
      return [
        { value: '', label: 'City', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ]
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
