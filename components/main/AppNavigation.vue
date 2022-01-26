<template>
  <nav>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">Main</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style scoped>

</style>
