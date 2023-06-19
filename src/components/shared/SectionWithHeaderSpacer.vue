<template>
  <div class="section-spacer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionWithHeaderSpacer',
}
</script>

<style lang="scss" scoped>
.section-spacer {
  padding: 120px;
}
</style>
