<template>
  <a v-if="author.avatar" href="#">
    <img class="h-10 w-10 rounded-full" :src="author.avatar" alt="" />
  </a>
  <div
    v-else
    :style="{ backgroundColor: background }"
    class="h-10 w-10 rounded-full flex items-center justify-center"
  >
    <span class="text-white font-bold uppercase">{{ nameInitials }}</span>
  </div>
</template>

<script>
export default {
  name: 'AuthorName',

  props: {
    author: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)',
      ],
    }
  },

  computed: {
    nameInitials() {
      if (!this.author.name) {
        return ''
      }

      const [name, surname] = this.author.name.split(' ')
      return `${name.substring(0, 1)}${surname.substring(0, 1)}`
    },

    background() {
      const firstLetter = this.nameInitials?.toLowerCase().charCodeAt(0) - 96
      const secondLetter = this.nameInitials?.toLowerCase().charCodeAt(1) - 96
      const index = (firstLetter + secondLetter) % this.swatches.length
      return this.swatches[index]
    },
  },
}
</script>
