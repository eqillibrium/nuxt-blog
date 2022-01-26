<template>
  <el-card
    shadow="hover"
    :body-style="{ margin: 0, padding: 0 }"
    class="article"
  >
    <header
      slot="header"
      class="article__header"
    >
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"> {{ new Date().toLocaleString() }}</i>
      </small>
    </header>
    <div class="article__body">
      <img
        src="https://img5.goodfon.ru/wallpaper/nbig/4/4c/vila-nova-de-gaia-porto-portugal-douro-river-dom-luis-i-br-1.jpg"
        alt="post img"
        class="article__img"
      >
    </div>
    <footer class="article__footer">
      <el-button
        round
        @click="$router.push('/post/1')"
      >
        Открыть
      </el-button>
      <span>
        <i class="el-icon-message"> 12</i>
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  name: "AppPost"
}
</script>

<style lang="scss" scoped>
.article {
  margin-bottom: 2rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__img {
    width: 100%;
    height: auto;
  }
  &__body {
    //margin-bottom: 1rem;
  }
  &__footer {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
