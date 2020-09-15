---
title: Content
description: ''
position: 1
category: 'Configuration'
---

Once you've setup your blog, you can directly start writing your content. Here is a few things you should know before put your hands down to work.

This is how a the `/content` folder is structured

```bash
content/
  categories/
    frontend.json
  authors/
    sample-author.json
  posts/
    my-awesome-blog.md
```

### Categories

This is where you put your categories, just create a `<category-slug>.json` file with the following content in it.

You can create them manually or using the command line tool `yarn new:category`

**Example**

```json[frontend.json]
{
  "name": "Frontend"
}
```

### Authors

This is where you put your authors, just create a `<author-slug>.json` file with the following content in it.

You can create them manually or using the command line tool `yarn new:author`

**Example**

```json[sample-author.json]
{
  "name": "Sample Author",
  "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "twitter": "@example"
}
```

### Posts

This is where you put your blog posts, see [writing content](https://content.nuxtjs.org/writing) in `@nuxt/content` for reference

You can create them manually or using the command line tool `yarn new:post`

### Front-matter

To make it work properly, make sure to include these properties in the front-matter section of your markdown files.

- `title` (`String`)
  - The title of the blog post. Will be injected in metas
- `description` (`String`)
  - The description of the blog post. Will be injected in metas
- `image` (`String`)
  - This will be used a a post image
- `author` (`String`)
  - This should match the author file name
- `category` (`String`)
  - This should match the category slug

### Example
```bash[content/posts/frontend/first-blog-post.md]
---
title: This is my first Post
description: 'This is my awesome description of my first blog post'
image: https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1547&q=80
author: sample-author
category: frontend
---

This is my first blog post
```
