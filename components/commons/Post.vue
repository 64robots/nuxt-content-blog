<script>
import { mapState } from 'vuex'

export default {
  name: 'Post',

  props: {
    permalink: {
      type: String,
      default: '',
    },
    redirect: {
      type: String,
      default: null,
    },
  },

  async fetch() {
    const { $content, redirect } = this.$nuxt.context

    const posts = await $content('posts', { deep: true })
      .where({ permalink: this.permalink })
      .fetch()
    const [post] = posts

    if (!post) {
      if (this.redirect) {
        redirect(this.redirect)
      }
      this.error.message = 'Content not found'
      this.error.code = 'not_found'
    }

    this.post = post || {}
  },

  data() {
    return {
      post: {},
      error: {
        message: '',
        code: false,
      },
    }
  },

  computed: {
    ...mapState(['authors']),

    author() {
      return this.authors.find(author => author.slug === this.post.author) || {}
    },
  },

  head() {
    if (!this.post || !this.author) {
      return
    }

    const meta = [
      { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
      { hid: 'og:title', name: 'og:title', content: this.post.title },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'og:type', name: 'og:type', content: 'article' },
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

    if (this.author.twitter) {
      meta.push({ hid: 'twitter:creator', name: 'twitter:creator', content: this.author.twitter })
    }

    if (this.author.name) {
      meta.push({ hid: 'article:author', name: 'article:author', content: this.author.name })
    }

    return {
      title: this.post.title,
      meta,
    }
  },

  render() {
    return this.$scopedSlots.default({
      post: this.post,
      author: this.author,
      error: this.error,
    })
  },
}
</script>
