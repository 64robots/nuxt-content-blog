<template>
  <span>{{ name }}</span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AuthorName',

  props: {
    author: {
      type: String,
      default: '',
    },
  },

  computed: {
    ...mapState(['authors']),

    name() {
      const author = this.authors.find(author => author.slug === this.author) || {}
      return author.name || `${this.author.charAt(0).toUpperCase()}${this.author.slice(1)}`
    },
  },
}
</script>
