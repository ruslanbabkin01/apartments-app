<template>
  <button
    v-bind:type="type"
    v-on="$listeners"
    :class="{ btn: true, 'btn--outlined': outlined }"
    style="opacity: 1"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UniversalButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 18px;
  background-color: #ff662d;
  color: #fff;
  min-width: 220px;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background-color: transparent;
    border: 1px solid #ff662d;
    color: #ff662d;
  }
}
</style>
