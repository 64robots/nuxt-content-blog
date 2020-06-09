<template>
  <div class="grid gap-12 lg:grid-cols-2" syle="grid-auto-rows: 1fr;">
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
