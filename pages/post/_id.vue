<template>
  <article class="article">
    <header class="article__header">
      <div class="article__title">
        <h1>Article title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"> На главную</i>
        </nuxt-link>
      </div>
      <div class="article__info">
        <small>
          <i class="el-icon-time"> {{ new Date().toLocaleString() }}</i>
        </small>
        <small>
          <i class="el-icon-view"> 42 </i>
        </small>
      </div>
      <div>
        <img
          src="https://img5.goodfon.ru/wallpaper/nbig/4/4c/vila-nova-de-gaia-porto-portugal-douro-river-dom-luis-i-br-1.jpg"
          alt="post img"
          class="article__img"
        >
      </div>
    </header>
    <main class="article__img">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, architecto?</p>
    </main>
    <footer>
      <CommentForm
        v-if="isCommentAvailable"
        @created="createCommentHandler"
      />
      <div class="comments" v-if="true">
        <ArticleComment
          v-for="comment in 5"
          :key="comment"
        />
      </div>
      <div class="text-center" v-else>Комментариев пока нет</div>
    </footer>
  </article>
</template>

<script>
import ArticleComment from '@/components/main/ArticleComment'
import CommentForm from '@/components/main/CommentForm'

export default {
  validate ({ params }) {
    return !!params.id
  },
  components: {
    ArticleComment, CommentForm
  },
  data () {
    return {
      isCommentAvailable: true
    }
  },
  methods: {
    createCommentHandler () {
      this.isCommentAvailable = false
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  max-width: 600px;
  margin: 0 auto;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  &__img {
    width: 100%;
    height: auto;
  }
}
</style>
