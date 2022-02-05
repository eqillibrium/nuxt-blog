<template>
  <el-card
    shadow="always"
  >
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      label-width="120px"
      label-position="top"
      class="demo-ruleForm"
      @submit.native.prevent="onSubmit"
    >
      <h1>Войдите в систему</h1>
      <el-form-item
        label="Ваш логин"
        prop="login"
      >
        <el-input
          v-model.trim="controls.login"
          type="text"
        />
      </el-form-item>
      <el-form-item
        label="Пароль"
        prop="password"
      >
        <el-input
          v-model.trim="controls.password"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          round
          native-type="submit"
          class="mt-1"
          :loading="loading"
        >
          Прокомментировать
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          {
            required: true,
            message: 'Введите логин',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 13,
            message: 'Length should be 3 to 13',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'blur'
          },
          {
            min: 6,
            message: 'Длина пароля должна быть не менее 6 символов',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          const formData = {
            login: this.controls.login,
            password: this.controls.password
          }
          await this.$store.dispatch('auth/login', formData)
          this.$message({
            message: 'Успешно!',
            type: 'success'
          })
          console.log(formData)
          this.loading = false
        } else {
          return false
        }
      })
    }
  },
  beforeMount () {
    if (this.$route.query.message === 'auth') {
      this.$message({
        message: 'Необходимо войти в систему',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>

</style>
