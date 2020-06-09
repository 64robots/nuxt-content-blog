<template>
  <article>
    <Post v-slot="{ post, author, error }" :permalink="$route.params.permalink">
      <div v-if="error.code">
        No post found
      </div>
      <article v-else class="max-w-4xl w-full mx-auto">
        <div class="relative">
          <img class="flex-1 h-64 w-full object-cover" :src="post.image" :alt="post.title" />
          <AuthorAvatar
            :author="author"
            class="absolute"
            :style="{ bottom: '1rem', right: '1.8rem' }"
          />
        </div>

        <div class="mt-8">
          <h1 class="mt-2 text-4xl font-medium leading-7">{{ post.title }}</h1>
          <div class="mt-1">
            <span class="text-sm font-medium text-gray-700">{{ post.readingTime }}</span>
            <span>|</span>
            <time class="text-sm font-medium text-gray-700" :datetime="post.createdAt">
              {{ post.createdAt }}
            </time>
          </div>

          <div class="mt-6 content">
            <nuxt-content :document="post" />
          </div>
        </div>
      </article>
    </Post>
  </article>
</template>

<script>
export default {
  name: 'ViewPost',
}
</script>
<style scoped lang="postcss">
.content {
  h1 {
    @apply text-4xl font-bold;
  }
}
</style>
