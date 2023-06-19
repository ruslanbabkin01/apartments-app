<template>
  <main class="register">
    <AuthSection>
      <RegisterForm />
    </AuthSection>
  </main>
</template>

<script>
import RegisterForm from '../components/auth/RegisterForm'
import AuthSection from '../components/auth/AuthSection'

export default {
  name: 'RegisterPage',
  components: {
    RegisterForm,
    AuthSection,
  },
}
</script>

<style lang="scss" scoped></style>