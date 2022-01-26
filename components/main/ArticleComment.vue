<template>
  <el-card
    shadow="never"
    class="comment"
  >
    <div class="comment__header">
      <small>Person name</small>
      <small><i class="el-icon-time"> {{ new Date().toLocaleString() }}</i></small>
    </div>
    <div class="comment__text">Lorem ipsum dolor sit amet.</div>
  </el-card>
</template>

<script>
export default {
  name: "Comment",
  props: ['comment']
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  &__text {
    white-space: pre-line;
  }
}
</style>
