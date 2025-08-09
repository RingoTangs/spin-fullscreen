const process = require('node:process')

module.exports = () => {
  return {
    plugins: [
      require('postcss-preset-env'),
      require('autoprefixer'),
      require('postcss-import'),
      process.env.NODE_ENV === 'prod' ? require('cssnano') : false,
    ].filter(Boolean),
  }
}
