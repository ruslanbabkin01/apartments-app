<template>
  <div id="app">
    <Notification />
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Notification from './components/Notifications.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Notification,
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}
</style>
