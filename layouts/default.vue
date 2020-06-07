<template>
  <div class="pb-16">
    <div class="p-8 bg-gray-200 shadow-lg">
      <div class="mt-2 md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <h2
            class="text-2xl font-bold leading-7 text-gray-700 sm:text-3xl sm:leading-9 sm:truncate cursor-pointer"
            @click="$router.push('/')"
          >
            My Awesome Blog
          </h2>
        </div>
      </div>
    </div>
    <nuxt class="mt-16" />
  </div>
</template>
<style>
article {
  font-family: 'Merriweather', serif;
}
</style>
