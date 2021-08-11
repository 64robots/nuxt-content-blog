---
title: 'Quick start'
description: 'Create your own @nuxt/content blog in seconds!'
position: 1
category: 'Getting started'
---

To get started quickly you can use the [create-nuxt-content-blog](https://github.com/64robots/create-nuxt-content-blog) package.

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn create nuxt-content-blog <project-name>
  ```

  </code-block>
  <code-block label="NPX">

  ```bash
  # Make sure you have npx installed (npx is shipped by default since NPM 5.2.0) or npm v6.1 or yarn.
  npx create-nuxt-content-blog <project-name>
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  # Starting with npm v6.1 you can do:
  npm init nuxt-content-blog <project-name>
  ```

  </code-block>
</code-group>

It will ask few questions about your project and install all the dependencies.

## Scaffolding
This option will publish a ready to use blog layout with a predefined style, check it over here [nuxt-content-blog-demo](https://nuxt-content-blog-demo.netlify.app/)

![image](https://user-images.githubusercontent.com/9825719/93459324-d601e580-f8e1-11ea-994e-566cdddf72a3.png)

If you prefer to not use the provided scaffolding check out the [Pages section](concepts/pages)

The next step is to get into your project folder and launch it:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  cd <project-name>
  yarn dev
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  cd <project-name>
  npm run dev
  ```

  </code-block>
</code-group>

The application is now running on [http://localhost:3000](http://localhost:3000). Well done!
