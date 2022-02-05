<template>
  <el-container
    style="width: 100%; height: 100vh"
  >
    <AdminAside
      style="width: 250px"
    />
    <el-main>
      <Nuxt />
    </el-main>
  </el-container>
</template>
<script>
import AdminAside from '~/components/admin/AdminAside'
export default {
  components: { AdminAside },
  middleware: 'auth-admin'
}
</script>

<style lang="scss">
</style>
