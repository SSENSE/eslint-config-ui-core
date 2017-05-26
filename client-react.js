module.exports = {
  extends: [
    './source/base',
    './source/react',
  ].map(require.resolve),
}
