---
title: 'Blog pages'
description: 'Create your own @nuxt/content blog in seconds!'
position: 6
category: 'Configuration'
---
There are three pages available, while you can extend them to build anything as you want around the blog, these three pages provide the minimun functionality

## Index
This is the entry point of your project, normally used to show a list of your blog post.

#### Example
```vue[pages/index.vue]
<template>
  <PostList v-slot="{ posts }">
    <div class="grid gap-12 lg:grid-cols-2">
      <ArticleListItem v-for="post in posts" :key="post.path" :post="post" />
    </div>
  </PostList>
</template>
```

## Permalink
This page will be used to render a single blog post. The permalink prop should match the post slug you want to render, note that this is the file name.

```vue[pages/_permalink.vue]
<template>
<article>
    <Post v-slot="{ post, author, error }" :permalink="$route.params.permalink">
      <div v-if="error.code">
        No post found
      </div>
      <BlogPost v-else />
    </Post>
  </article>
</template>
```
## Category slug
This page will be used to render a category list. The category prop should match the category slug you want to render, note that this is the file name.

```vue[pages/category/_slug.vue]
<template>
  <PostList v-slot="{ posts, error }" :category="$route.params.slug">
    <div v-if="error.code">
      No posts to display
    </div>
    <div v-else>
      <div class="text-4xl font-bold">{{ $route.params.slug }}</div>
      <div class="grid gap-12 lg:grid-cols-2 mt-8">
        <ArticleListItem v-for="post in posts" :key="post.path" :post="post" />
      </div>
    </div>
  </PostList>
</template>
```