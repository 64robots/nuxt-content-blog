<template>
  <PostList v-slot="{ posts, error }" :category="$route.params.slug">
    <div v-if="error.code">
      No posts to display
    </div>
    <div v-else>
      <div class="text-4xl font-bold">{{ $route.params.slug }}</div>
      <div class="grid gap-12 lg:grid-cols-2 mt-8">
        <ArticleListItem v-for="post in posts" :key="post.path" :post="post" />
      </div>
    </div>
  </PostList>
</template>

<script>
export default {
  name: 'CategorySlug',
}
</script>
