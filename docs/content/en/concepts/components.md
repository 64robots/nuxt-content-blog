---
title: "Components"
description: "Create your own @nuxt/content blog in seconds!"
position: 2
category: "Configuration"
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

### Post

The `Post` component render a given post by using the `permalink` prop. Note that it also has the `redirect` and `error` prop.
The `post` and `author` slots are available to render the matched content

```vue
<Post
  v-slot="{ post, author }"
  :permalink="$route.params.permalink"
  redirect="/"
>
    <PostContent :post="post" :author="author" />
</Post>
```

### AppHeader

The `AppHeader` component is used in the `default` layout and accepts two named slots to customize the title and subtitle

```vue
<AppHeader>
  <template #title>
    <h1 class="text-2xl font-semibold leading-6 transition ease-in-out duration-300 hover:bg-blue-100 py-2 pl-1 pr-5 inline-block">
      ✍️ Awesome Blog
    </h1>
  </template>
  <template #subtitle>
    <h2 class="text-xs text-gray-700 pl-1">
      The awesome description of my awesome blog
    </h2>
  </template>
</AppHeader>
```
