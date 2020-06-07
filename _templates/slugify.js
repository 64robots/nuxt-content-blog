module.exports = name =>
  name
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-*|-*$/g, '')
    .toLowerCase()
