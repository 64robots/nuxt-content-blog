<template>
  <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
    <ArticleListItem v-for="post in posts" :key="post.path" :post="post" />
  </div>
</template>
<script>
export default {
  name: 'DisplayPosts',

  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
