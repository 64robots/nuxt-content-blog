---
title: 'Components'
description: 'Create your own @nuxt/content blog in seconds!'
position: 4
category: 'Configuration'
---
The package comes with some global Vue.js components ready out of the box.

### PostList

The `PostList` component is used to render a collection of posts. By default it renders the `posts` collection but you can specify your own by the `collection`prop.

```vue
<PostList v-slot="{ posts }">
  <DisplayPosts :posts="posts" />
</PostList>
```
You can also render a single category. Note that you also easily can handle errors or perform redirects by using the `redirect` prop.
You will use the posts slot containing all the matched posts.

```vue
<PostList v-slot="{ posts, error }" :category="$route.params.slug">
  <div v-if="error.code">
    {{ error.message }}
  </div>
  <div v-else>
    <div class="text-4xl font-bold">{{ $route.params.slug }}</div>
    <div class="grid gap-12 lg:grid-cols-2 mt-8">
      <ArticleListItem v-for="post in posts" :key="post.path" :post="post" />
    </div>
  </div>
</PostList>
```

| prop       | type   | default |   |   |
|------------|--------|---------|---|---|
| category   | String | null    |   |   |
| collection | String | posts   |   |   |
| redirect   | String | null    |   |   |

### Post

The `Post` component render a given post by using the `permalink` prop. Note that it also has the `redirect` and `error` prop.
The `post` and `author` slots are available to render the matched content

```vue
<Post v-slot="{ post, author }" :permalink="$route.params.permalink" redirect="/">
    <PostContent :post="post" :author="author" />
</Post>
```

| prop       | type   | default |   |   |
|------------|--------|---------|---|---|
| permalink  | String | ''      |   |   |
| redirect   | String | null    |   |   |
