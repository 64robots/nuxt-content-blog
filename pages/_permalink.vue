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

          <div class="mt-6">
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
.nuxt-content {
  & h1 {
    @apply text-4xl font-bold leading-7 mb-2;
  }

  & h2 {
    @apply text-3xl font-bold leading-6 mb-2;
  }

  & h3 {
    @apply text-2xl font-semibold leading-5 mb-1;
  }

  & h4 {
    @apply text-xl font-semibold leading-5 mb-1;
  }

  & h5 {
    @apply text-lg font-semibold;
  }

  & strong {
    @apply font-bold;
  }

  & em {
    @apply italic;
  }

  & del {
    @apply line-through;
  }
  @apply text-lg text-gray-900 leading-normal;
  & > * + *,
  & li + li,
  & li > p + p {
    @apply mt-6;
  }
  & strong {
    @apply text-black font-bold;
  }
  & a {
    @apply text-black font-semibold;
  }
  & strong a {
    @apply font-bold;
  }
  & p > code {
    @apply font-mono text-sm inline bg-gray-200 px-2 py-1;
  }
  & blockquote {
    @apply border-l-4 border-gray-200 pl-4 italic;
  }
  & ul,
  & ol {
    @apply pl-5;
    @screen sm {
      @apply pl-10;
    }
  }
}
</style>
