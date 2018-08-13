const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const config = require('./cyb.config.js')

const eslintLoader = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  exclude: /(node_modules|bower_components)/,
  options: {
    formatter: eslintFriendlyFormatter,
    emitWarning: true
  }
})

module.exports = {
  module: {
    rules: [
      ...(config.eslint.available ? [eslintLoader()] : [])
    ]
  }
}
