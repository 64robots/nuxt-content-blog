# Blog Scaffolding using Nuxt and @nuxt/content

> Create blog posts from the command line and get them up and running automaticly.

![68igUm066A](https://user-images.githubusercontent.com/12644599/83974499-f0ddba80-a8ed-11ea-996b-7374f26f2b4f.gif)


## Folder Structure
![image](https://user-images.githubusercontent.com/12644599/83972297-a6554180-a8df-11ea-863c-e2ca322892ca.png)

All the magic occurs inside `content` folder. Here we have `authors`, `categories`, and `posts`. In all cases the name of the file is taken as its `slug`

### Authors
Authors live in `content/authors` folder and are declared in json files.

`sample-author.json`

```json
{
  "name": "Sample Author",
  "avatar": "http://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png"
}
```

### Categories
Categories live in `content/categories` folder and are declared in json files.

`remote-work.json`
```json
{
  "name": "Remote Work"
}
```

### Posts
Posts live in `content/category/{category-slug}` folder and they are declared in md files. It's important to match the folder name with the category. (You can use the command-line tools, described above, if you dont want to worry about it)

```md
---
title: How to do zoom meetings
description: 'this is the description'
image: https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1934&amp;q=80
author: sample-author
category: remote-work
---

# You can write markdown here

[Take a look to Nuxt contenct documentation!](https://content.nuxtjs.org/writing)

```

##  Components ready out of the box
There are two renderless components ready to be used

### PostList

The `PostList` component is used to render a collection of posts. By default it renders the collection `posts` collection but you can specify your own by the `collection`prop.

```javascript
<PostList v-slot="{ posts }">
  <DisplayPosts :posts="posts" />
</PostList>
```
You can also render a single category. Note that you also easily can handle errors or perform redirects by using the `redirect` prop.
You will use the posts slot containing all the matched posts.

```javascript
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

```
<Post v-slot="{ post, author }" :permalink="$route.params.permalink" redirect="/">
    <PostContent :post="post" :author="author" />
</Post>
```

## Command-line tools

You can use these convinient helpers for creating Authors, Categories and Posts:

- yarn new:author
- yarn new:category
- yarn new:post

These commands will generate the files in the right folders

## Install

Clone this repo as a boilerplate and then

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
