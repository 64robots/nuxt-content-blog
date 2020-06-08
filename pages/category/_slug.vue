<template>
  <div class="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
    <Category v-slot="{ posts, category }">
      <div>
        <CategoryName :category="category" class="text-4xl font-bold" />
        <div class="relative max-w-7xl mx-auto">
          <DisplayPosts :posts="posts" />
        </div>
      </div>
    </Category>
  </div>
</template>

<script>
export default {
  name: 'CategorySlug',
}
</script>
