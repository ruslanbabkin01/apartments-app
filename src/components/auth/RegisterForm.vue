<template>
  <AuthContainer class="register">
    <MainTitle class="register__title">Register</MainTitle>
    <Form @submit.prevent="handleSubmit" ref="form" class="register__form">
      <CustomInput
        v-model="formData.name"
        placeholder="Name"
        autocomplete="username"
        name="name"
        :rules="nameRules"
        class="register__input"
      />
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="register__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="register__input"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        placeholder="Confirm password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="confirmPassword"
        class="register__input"
      />
      <UniversalButton class="register__btn" type="submit" :loading="loading"
        >Sign Up</UniversalButton
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
import { mapActions } from 'vuex'

export default {
  name: 'RegisterForm',
  components: {
    Form,
    CustomInput,
    UniversalButton,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
    nameRules() {
      return [this.rules.isRequired]
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation]
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation]
    },
    confirmPassword() {
      return [
        val => ({
          hasPassed: val === this.formData.password,
          message: 'Password mismatch',
        }),
      ]
    },
  },
  methods: {
    ...mapActions('auth', ['registerUser']),
    async handleSubmit() {
      const { form } = this.$refs
      const isFormValid = form.validate()
      // const { name, password, email } = this.formData
      if (isFormValid) {
        try {
          this.loading = true
          // await this.registerUser({ name, password, email })
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
.register {
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
