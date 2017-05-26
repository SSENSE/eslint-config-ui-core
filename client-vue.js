module.exports = {
  extends: [
    './source/base',
    './source/vue',
  ].map(require.resolve),
}
