<template>
  <el-container>
    <el-header>
      <AppNavigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/AppNavigation'

export default {
  components: {
    AppNavigation
  }
}
</script>

<style scoped>

</style>
