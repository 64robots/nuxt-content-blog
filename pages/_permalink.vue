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
import { mapState } from 'vuex'

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

  computed: {
    ...mapState(['authors']),

    author() {
      return this.authors.find(author => author.slug === this.post.author) || {}
    },
  },

  head() {
    const meta = [
      { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
      { hid: 'og:title', name: 'og:title', content: this.post.title },
      { hid: 'twitter:card', name: 'twitter:card', content: this.post.description },
      { hid: 'twitter:creator', name: 'twitter:creator', content: this.author.twitter },
      { hid: 'og:type', name: 'og:type', content: 'article' },
      { hid: 'article:author', name: 'article:author', content: this.post.author },
      {
        hid: 'article:published_time',
        name: 'article:published_time',
        content: new Date(this.post.createdAt).toLocaleDateString(),
      },
      {
        hid: 'article:modified_time',
        name: 'article:modified_time',
        content: new Date(this.post.updatedAt).toLocaleDateString(),
      },
    ]

    if (this.post.description) {
      meta.push({ hid: 'og:description', name: 'og:description', content: this.post.description })
      meta.push({ hid: 'description', name: 'description', content: this.post.description })
    }

    if (this.post.image) {
      meta.push({ hid: 'twitter:image:src', name: 'twitter:image:src', content: this.post.image })
      meta.push({ hid: 'og:image', name: 'og:image', content: this.post.image })
    }

    return {
      title: this.post.title,
      meta,
    }
  },
}
</script>
<style scoped lang="postcss">
h1 {
  @apply text-4xl font-bold;
}
</style>
