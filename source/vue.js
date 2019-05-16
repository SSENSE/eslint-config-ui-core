module.exports = {
    extends: [
        "plugin:vue/base"
    ],
    parserOptions : {
        parser: "babel-eslint"
    },
    plugins: ['vue'],
    env: {
        browser: true,
    },
    rules: {
        // custom vue rules here
    }
}
