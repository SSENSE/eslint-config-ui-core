module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: [
        'react',
    ],
    ecmaFeatures: {
        globalReturn: false,
        jsx: true,
    },
    extends: 'airbnb-base',
    // add custom rules here
    rules: {
    // DEFAULT
        // description: disable the rule specifically for param properties
            'no-param-reassign': [2, { props: false }],
        // description: indent 4 spaces and aligns switchcase
            'indent': [2, 4, { SwitchCase: 1 }],
        // description: fixes global var jsx declaration
            'no-unused-vars': 0,
        // description: max 200 characters per line, give warning
            'max-len': ['warn', 120],
        // description: exceptions for React usage
            'class-methods-use-this': 0,
        // description: exception for inclusion at the end of for loops
            'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        // description: allow debugger during development
            'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // IMPORT
        // description: dont require extensions for imports
            'import/extensions': 0,
        // description: webpack unresolved module loading react components
            'import/no-unresolved': 0,

    // REACT
        // desc: require prop types
            'react/prop-types': [2],
        },
};
