<template>
  <button
    v-bind:type="type"
    v-on="$listeners"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
    style="opacity: 1"
  >
    <CircleLoader v-if="loading" width="35" height="35" class="btn__loader" />
    <span :class="contentStyle" class="btn__content"> <slot></slot></span>
  </button>
</template>

<script>
import CircleLoader from '../loaders/CircleLoader'
export default {
  name: 'UniversalButton',
  components: {
    CircleLoader,
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return {
        'btn__content--hidden': this.loading,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
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

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
