<template>
  <div class="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
    <PostList v-slot="{ posts, error }" :category="$route.params.slug">
      <div v-if="error.code">
        No posts to display
      </div>
      <div v-else>
        <CategoryName :category="$route.params.slug" class="text-4xl font-bold" />
        <div class="relative max-w-7xl mx-auto">
          <DisplayPosts :posts="posts" />
        </div>
      </div>
    </PostList>
  </div>
</template>

<script>
export default {
  name: 'CategorySlug',
}
</script>
