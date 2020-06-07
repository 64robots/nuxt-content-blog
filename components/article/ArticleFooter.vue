<template>
  <div class="mt-6 flex items-center">
    <div class="flex-shrink-0">
      <AuthorAvatar :author="post.author" />
    </div>
    <div class="ml-3">
      <p class="text-sm leading-5 font-medium text-gray-900">
        <a href="#" class="hover:underline">
          <AuthorName :author="post.author" />
        </a>
      </p>
      <div class="flex text-sm leading-5 text-gray-500">
        <time datetime="2020-03-16">
          {{ date }}
        </time>
        <span class="mx-1">
          &middot;
        </span>
        <span>
          {{ post.readingTime }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  name: 'ArticleFooter',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      author: {},
    }
  },

  computed: {
    date() {
      const date =
        typeof this.post.createdAt === 'string'
          ? parseISO(this.post.createdAt)
          : this.post.createdAt
      return format(date, 'MMM dd, yyyy')
    },
  },

  async created() {
    this.author = await this.$content('authors', this.post.author).fetch()
  },
}
</script>
