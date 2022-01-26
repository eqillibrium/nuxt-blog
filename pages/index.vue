<template>
  <el-row
    type="flex"
    justify="center"
  >
    <el-col
      :xs="24"
      :sm="18"
      :md="12"
      :lg="10"
    >
      <AppPost
        v-for="post in 5 "
        :key="post"
      />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/AppPost.vue'
export default {
  components: {
    AppPost
  },
  head: {
    title: 'Главная'
  }
}
</script>
