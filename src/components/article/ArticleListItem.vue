<template>
  <article class="mb-3 h-full border-b-4 pb-2 border-black flex flex-col justify-between">
    <div>
      <!-- IMAGE -->
      <nuxt-link :to="`/${post.permalink}`" class="flex-shrink-0">
        <img
          class="h-48 w-full object-cover border-4 border-gray-900 border-b-8"
          :src="post.image"
          alt=""
        />
      </nuxt-link>
      <!-- IMAGE -->

      <!-- TITLE AND USER -->
      <div
        class="bg-gray-900 md:rounded-b-md text-white font-sans px-6 py-3 flex justify-between items-start"
      >
        <div class="flex flex-col">
          <div class="flex items-start">
            <nuxt-link :to="`/${post.permalink}`">
              <h3 class="text-2xl leading-5 font-semibold text-white">
                {{ post.title }}
              </h3>
            </nuxt-link>
            <div
              class="ml-4 -mt-1 text-xs border border-gray-800 py-1 px-3 rounded-lg whitespace-no-wrap"
            >
              <nuxt-link :to="`/category/${post.category}`">{{ post.category }}</nuxt-link>
            </div>
          </div>
          <div class="mt-1">
            <span class="text-sm font-medium text-gray-100">{{ post.readingTime }}</span>
            <span>|</span>
            <time class="text-sm font-medium text-gray-100" :datetime="dateTag">
              {{ postDate }}
            </time>
          </div>
        </div>
        <AuthorAvatar class="ml-2" :author="post.author" />
      </div>
      <!-- TITLE AND USER -->

      <p class="mt-3 text-base leading-6 text-gray-800 px-6">
        {{ post.description }}
      </p>
    </div>
    <div class="px-6 flex justify-end">
      <nuxt-link :to="`/${post.permalink}`" class="text-sm text-gray-800 hover:underline">
        Read this article →
      </nuxt-link>
    </div>
  </article>
</template>
<script>
// import format from 'date-fns/format'
// import parseISO from 'date-fns/parseISO'

export default {
  name: 'ArticleListItem',

  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    date() {
      return this.post.createdAt
      // return typeof this.post.createdAt === 'string'
      //   ? parseISO(this.post.createdAt)
      //   : this.post.createdAt
    },

    postDate() {
      return this.date
      // return format(this.date, 'MMM dd, yyyy')
    },

    dateTag() {
      this.date
      // return format(this.date, 'yyyy-MM-dd')
    },
  },
}
</script>
