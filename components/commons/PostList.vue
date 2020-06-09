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
  },

  async fetch() {
    try {
      const { $content } = this.$nuxt.context
      const path = this.category ? `${this.collection}/${this.category}` : this.collection
      const posts = await $content(path, { deep: this.fetchFilesFromSubdirectories }).fetch()
      this.posts = posts.map(p => {
        p.author = this.authors.find(author => author.slug === p.author) || {}
        return p
      })
    } catch (error) {
      this.notFound = true
    }
  },

  data() {
    return {
      posts: [],
      notFound: false,
    }
  },

  computed: {
    ...mapState(['authors']),

    fetchFilesFromSubdirectories() {
      return !this.category
    },
  },

  render() {
    return this.$scopedSlots.default({
      posts: this.posts,
      notFound: this.notFound,
    })
  },
}
</script>
