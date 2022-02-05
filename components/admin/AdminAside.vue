<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      index="/admin">
      <el-icon class="el-icon-data-analysis"></el-icon>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item
      index="/admin/create">
      <el-icon class="el-icon-edit-outline"></el-icon>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item
      index="/admin/list">
      <el-icon class="el-icon-tickets"></el-icon>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item
      index="/admin/user">
      <el-icon class="el-icon-user"></el-icon>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item
      index="/admin/logout">
      <el-icon class="el-icon-bottom-left"></el-icon>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 2
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
