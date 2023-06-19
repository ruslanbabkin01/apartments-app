<template>
  <header class="header">
    <Container>
      <router-link to="/">
        <Logo />
      </router-link>
    </Container>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import Container from './shared/Container.vue'

export default {
  name: 'Header',
  components: { Container, Logo },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss';
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $secondary-color;
  height: 60px;
  padding: 16px 0;
  z-index: 100;
}
</style>
