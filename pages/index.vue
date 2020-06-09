<template>
  <PostList v-slot="{ posts }">
    <div class="grid gap-12 lg:grid-cols-2" syle="grid-auto-rows: 1fr;">
      <ArticleListItem v-for="post in posts" :key="post.path" :post="post" />
    </div>
  </PostList>
</template>

<script>
export default {
  name: 'Index',
}
</script>
