<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import LoginForm from '../components/auth/LoginForm'
import AuthSection from '../components/auth/AuthSection'

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    AuthSection,
  },
}
</script>

<style lang="scss" scoped></style>
