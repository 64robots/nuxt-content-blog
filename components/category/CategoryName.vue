<template>
  <span>{{ name }}</span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoryName',

  props: {
    category: {
      type: String,
      default: '',
    },
  },

  computed: {
    ...mapState(['categories']),

    name() {
      const category = this.categories.find(category => category.slug === this.category) || {}
      return category.name || `${this.category.charAt(0).toUpperCase()}${this.category.slice(1)}`
    },
  },
}
</script>
