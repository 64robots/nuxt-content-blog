const path = require('path')
const slugify = require('../../slugify')

module.exports = {
  prompt: ({ prompter }) => {
    var fs = require('fs')
    const contentPath = path.resolve(__dirname, '../../../content/')
    const authorsPath = `${contentPath}/authors`
    const categoriesPath = `${contentPath}/categories`

    const authors = fs.readdirSync(authorsPath).map(file => ({
      name: file.replace('.json', ''),
      message: require(`${authorsPath}/${file}`).name,
    }))

    const categories = fs.readdirSync(categoriesPath).map(file => ({
      name: file.replace('.json', ''),
      message: require(`${categoriesPath}/${file}`).name,
    }))

    return new Promise(resolve => {
      prompter
        .prompt([
          {
            type: 'select',
            name: 'category',
            message: 'Pick Category:',
            choices: categories,
            validate(value) {
              if (!value.length) {
                return 'Blog posts must belongs to a category.'
              }
              return true
            },
          },
          {
            type: 'select',
            name: 'author',
            message: 'Pick Author:',
            choices: authors,
            validate(value) {
              if (!value.length) {
                return 'Blog posts must belongs to an author.'
              }
              return true
            },
          },
          {
            type: 'input',
            name: 'title',
            message: 'Title:',
            validate(value) {
              if (!value.length) {
                return 'Blog posts must have a title.'
              }
              return true
            },
          },
          {
            type: 'input',
            name: 'description',
            message: 'Description (optional):',
          },
          {
            type: 'input',
            name: 'image',
            message: 'Image Url (optional):',
          },
        ])
        .then(({ title, description, category, author, image }) => {
          const permalink = slugify(title)
          resolve({
            title,
            description,
            permalink,
            category,
            author,
            image,
          })
        })
    })
  },
}
