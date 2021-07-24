module.exports = {
  syntax: require('@stylelint/postcss-css-in-js'),
  plugins: [
    require('tailwindcss')(),
    require('autoprefixer'),
    require('postcss-discard-comments')(),
    require('postcss-discard-empty')(),
  ],
};
