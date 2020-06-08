<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <nuxt-link :to="`/${post.permalink}`" class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="post.image" alt="" />
    </nuxt-link>
    <article class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-indigo-600">
          <nuxt-link :to="post.dir" class="hover:underline">
            <CategoryName :category="post.category" />
          </nuxt-link>
        </p>
        <nuxt-link :to="`/${post.permalink}`" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ post.title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ post.description }}
          </p>
        </nuxt-link>
      </div>
      <ArticleFooter :post="post" :author="author" />
    </article>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'ArticleListItem',

  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {}
  },

  computed: {
    ...mapState(['authors']),

    author() {
      return this.authors.find(author => author.slug === this.post.author) || {}
    },
  },
}
</script>
