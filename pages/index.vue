<template>
  <div class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
    <div class="relative max-w-7xl mx-auto">
      <DisplayPosts :posts="posts" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('category', { deep: true }).fetch()

    return {
      posts,
    }
  },
}
</script>
