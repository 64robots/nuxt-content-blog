<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',

  async fetch() {
    const { $content, params } = this.$nuxt.context
    const posts = await $content('posts', params.slug).fetch()

    this.posts = posts.map(p => {
      p.author = this.authors.find(author => author.slug === p.author) || {}
      return p
    })
    this.category = params.slug
  },

  data() {
    return {
      posts: [],
      category: '',
    }
  },

  computed: {
    ...mapState(['authors']),
  },

  render() {
    return this.$scopedSlots.default({
      posts: this.posts,
      category: this.category,
    })
  },
}
</script>
