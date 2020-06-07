<template>
  <div class="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
    <CategoryName :category="categorySlug" class="text-4xl font-bold" />

    <div class="relative max-w-7xl mx-auto">
      <DisplayPosts :posts="posts" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const categorySlug = params.slug
    const posts = await $content('category', categorySlug).fetch()

    return {
      posts,
      categorySlug,
    }
  },
}
</script>
