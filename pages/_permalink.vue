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
  @apply text-base text-gray-900 leading-normal;

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

  & > * + *,
  & li + li,
  & li > p + p {
    @apply mt-6;
  }

  & ul > li {
    @apply list-disc;
  }

  & ol > li {
    @apply list-decimal;
  }

  & strong {
    @apply text-black font-bold;
  }

  & a[href^='http'],
  & a[href^='www'] {
    @apply text-black font-semibold border-b-2 border-black transition ease-in-out duration-200 px-1;

    &:hover {
      @apply bg-black text-white;
    }
  }

  & a[href^='#'] > span.icon {
    background-image: url('data:image/svg+xml,<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="black"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>');
    @apply bg-no-repeat w-6 h-6 inline-block;
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

  & table {
    @apply table-auto;
  }

  & table thead tr th {
    @apply px-4;
    @apply py-2;
    @apply font-bold;
  }

  & table tbody tr td {
    @apply px-4;
    @apply py-2;
    @apply border;
  }
}
</style>
