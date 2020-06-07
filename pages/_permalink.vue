<template>
  <article>
    <div class="flex">
      <div class="flex-1 flex flex-col items-end p-8">
        <h1 class="my-8">{{ post.title }}</h1>

        <ArticleFooter :post="post" />
      </div>
      <img class="flex-1 h-64 w-1/2 object-cover" :src="post.image" alt="" />
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto mt-16">
        <nuxt-content :document="post" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ViewPost',

  async asyncData({ $content, params: { permalink } }) {
    const posts = await $content('category', { deep: true })
      .where({ permalink })
      .fetch()

    const post = posts[0]

    return {
      post,
    }
  },
}
</script>
<style scoped lang="postcss">
h1 {
  @apply text-4xl font-bold;
}
</style>
