---
title: 'Manual Installation'
description: 'Create your own @nuxt/content blog in seconds!'
position: 2
category: 'Getting started'
---

So you want to start a blog, right? Let's go for it! This themes relies on NuxtJS, so you need:

### `package.json`

> This file can be created with `npm init`.

Install `nuxt` and `@nuxt/content-theme-docs`:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add nuxt @64robots/nuxt-content-blog
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install nuxt @64robots/nuxt-content-blog
  ```

  </code-block>
</code-group>

**Example**

```json[package.json]
{
  "name": "blog",
  "version": "1.0.0",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate"
  },
  "dependencies": {
    "@64robots/nuxt-content-blog": "^0.1.12",
    "nuxt": "^2.14.0"
  }
}
```

### `nuxt.config.js`

Import the theme function from `@64robots/nuxt-content-blog`:

```js[nuxt.config.js]
import theme from '@64robots/nuxt-content-blog'

export default theme()
```

The theme exports a function to setup the `nuxt.config.js` and allows you to add / override the default config.

> Check out the documentation of [defu.arrayFn](https://github.com/nuxt-contrib/defu#array-function-merger) to see how the config is merged.


### `tailwind.config.js`

You can override the existing tailwind configuration, check out the [Tailwindcss documentation](https://tailwindcss.com/docs/configuration) for that.

**Example**

```js[tailwind.config.js]
module.exports = {
  theme: {
    extend: {
      colors: {
      }
    }
  }
}
```

### `content/`

This is where you put your markdown content files.

### `static/`

This is where you put your static assets like the logo.

**Example**

```bash
content/
  categories/
    frontend.json
  authors/
    sample-author.json
  posts/
    my-awesome-blog.md
static/
  icon.png
nuxt.config.js
package.json
```