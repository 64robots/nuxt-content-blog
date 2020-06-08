<script>
import { mapState } from 'vuex'

export default {
  name: 'Posts',

  async fetch() {
    const { $content } = this.$nuxt.context
    const posts = await $content('posts', { deep: true }).fetch()
    this.posts = posts.map(p => {
      p.author = this.authors.find(author => author.slug === p.author) || {}
      return p
    })
  },

  data() {
    return {
      posts: [],
    }
  },

  computed: {
    ...mapState(['authors']),
  },

  render() {
    return this.$scopedSlots.default({
      posts: this.posts,
    })
  },
}
</script>
