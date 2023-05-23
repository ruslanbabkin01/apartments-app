<template>
  <div class="reviews-heading">
    <ReviewsAvatar class="reviews-heading__avatar" />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
import ReviewsAvatar from './ReviewsAvatar.vue'

export default {
  name: 'ReviewsHeading',
  components: { StarRating, ReviewsAvatar },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  align-items: center;

  &__avatar {
    margin-right: 18px;
  }

  &__author {
    font-weight: 700;
    font-size: 18px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
