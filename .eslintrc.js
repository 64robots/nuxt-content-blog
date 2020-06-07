module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      jest: true,
    },
    extends: [
      'plugin:vue/recommended',
      'plugin:nuxt/recommended',
      'eslint:recommended',
      'prettier/vue',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'any',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      // Force this rules for auto fix
      quotes: [2, 'single', 'avoid-escape'],
      semi: [2, 'never'],
    },
    globals: {
      $nuxt: true,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  }
