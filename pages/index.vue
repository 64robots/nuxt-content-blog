<template>
  <PostList v-slot="{ posts }">
    <DisplayPosts :posts="posts" />
  </PostList>
</template>

<script>
export default {
  name: 'Index',
}
</script>
