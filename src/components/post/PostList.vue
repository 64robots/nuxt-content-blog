<script>
import { mapState } from 'vuex'

export default {
  name: 'PostList',

  props: {
    category: {
      type: String,
      default: null,
    },
    collection: {
      type: String,
      default: 'posts',
    },
    redirect: {
      type: String,
      default: null,
    },
  },

  async fetch() {
    const { $content, redirect } = this.$nuxt.context

    try {
      const path = this.category ? `${this.collection}/${this.category}` : this.collection
      const posts = await $content(path, { deep: this.fetchFilesFromSubdirectories }).fetch()
      this.posts = posts.map(p => {
        p.author = this.authors.find(author => author.slug === p.author) || {}
        return p
      })
    } catch (error) {
      if (this.redirect) {
        redirect(this.redirect)
      }
      this.error.message = 'Content not found'
      this.error.code = 'not_found'
    }
  },

  data() {
    return {
      posts: [],
      error: {
        message: '',
        code: false,
      },
    }
  },

  computed: {
    ...mapState({
      authors: state => state.blog.authors
    }),

    fetchFilesFromSubdirectories() {
      return !this.category
    },
  },

  render() {
    return this.$scopedSlots.default({
      posts: this.posts,
      error: this.error,
    })
  },
}
</script>
