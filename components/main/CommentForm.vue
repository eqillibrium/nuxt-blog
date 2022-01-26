<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    label-width="120px"
    label-position="top"
    class="demo-ruleForm"
    @submit.native.prevent="onSubmit"
  >
    <h1>Добавить комментарий</h1>
    <el-form-item
      label="Ваше имя"
      prop="name"
    >
      <el-input
        v-model.trim="controls.name"
      />
    </el-form-item>
    <el-form-item
      label="Комментарий"
      prop="text"
    >
      <el-input
        type="textarea"
        v-model.trim="controls.text"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        round
        native-type="submit"
        :loading="loading"
      >
        Прокомментировать
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CommentForm",
  data () {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Имя не может быть пустым',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
          },
        ],
        text: [
          {
            required: true,
            message: 'Оставьте комментарий',
            trigger: 'blur',
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if(valid) {
          this.loading = true
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postID: ''
          }
          this.$message({
            message: 'Успешно!',
            type: 'success'
          })
          this.loading = false
          this.$emit('Комментарий успешно добавлен!')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
