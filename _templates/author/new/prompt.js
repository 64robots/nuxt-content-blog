const slugify = require('../../slugify')

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise(resolve => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Name:',
            validate(value) {
              if (!value.length) {
                return 'Name is required.'
              }
              return true
            },
          },
          {
            type: 'input',
            name: 'avatar',
            message: 'Avatar (optional):',
          },
        ])
        .then(({ name, avatar }) => {
          const slug = slugify(name)
          resolve({
            name,
            slug,
            avatar,
          })
        })
    })
  },
}
