<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Log In</MainTitle>
    <Form @submit.prevent="handleSubmit" ref="form" class="login__form">
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="login__input"
      />
      <UniversalButton class="login__btn" type="submit" :loading="loading"
        >Sign In</UniversalButton
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from '../shared/Form'
import CustomInput from '../shared/CustomInput'
import UniversalButton from '../shared/UniversalButton'
import AuthContainer from './AuthContainer.vue'
import MainTitle from '../shared/MainTitle'
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../utils/validationRules'

export default {
  name: 'LoginForm',
  components: {
    Form,
    CustomInput,
    UniversalButton,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      }
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation]
    },
    passwordRules() {
      return [this.rules.isRequired]
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs
      const isFormValid = form.validate()
      if (isFormValid) {
        try {
          this.loading = true
          // this.$store.dispatch('auth/loginUser', this.formData)

          form.reset()
          this.$router.push({ name: 'home' })
        } catch (error) {
          console.log(error)
          this.$notify({
            type: 'error',
            title: 'Error',
            text: error.message,
          })
        } finally {
          this.loading = false
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
