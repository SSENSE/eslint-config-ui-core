module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        impliedStrict: true,
        ecmaFeatures: {
            globalReturn: false,
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: [
        'import',
    ],
    extends: 'airbnb-base',
    // add custom rules here
    rules: {
    // DEFAULT
        // description: disable the rule specifically for param properties
            'no-param-reassign': [2, { props: false }],
        // description: indent 4 spaces and aligns switchcase
            'indent': [2, 4, {
                SwitchCase: 1,
                MemberExpression: 1,
                ObjectExpression: 1,
                CallExpression: {
                    arguments: 1
                }
            }],
        // description: fixes global var jsx declaration, DISABLED
            'no-unused-vars': 0,
        // description: max 200 characters per line, give warning
            'max-len': ['warn', 120],
        // description: exceptions for React usage, DISABLED
            'class-methods-use-this': 0,
        // description: exception for inclusion at the end of for loops
            'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        // description: allow debugger during development
            'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // description: provides consistent linebreak style for operators, DISABLED
            'operator-linebreak': 0,
        // description: disallows nested ternary expressions, DISABLED
            'no-nested-ternary': 0,
        // description: consistency around empty line padding inside blocks
            'padded-blocks': 1,

    // IMPORT
        // description: dont require extensions for imports, DISABLED
            'import/extensions': 0,
        // description: webpack unresolved module loading react components, DISABLED
            'import/no-unresolved': 0,
        // description: reports if namespace is used
            'import/no-namespace': 1,
        // description: reports require function calls
            'import/no-commonjs': 1,
        // description: Forbid the import of external modules that are not declared in the package.json
            'import/no-extraneous-dependencies': [
                2, {
                    'devDependencies': [
                        '**/*.test.js',
                        '**/*.spec.js'
                    ]
                }
            ],
        // description: enforce a convention order for loading modules
        // not sure we need to be this strict, import/first already sets some basic rules.
            'import/order': [
                0, {
                    'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
                }
            ],
        // Require async functions to await something
            "require-await": 1,
        
        // Warn when a todo comment is written
            "no-warning-comments": ["warn", {
                "terms": [
                    "todo",
                    "@todo"
                ]
            }],

            "arrow-parens": [
                0,
                "always"
            ],
            
            "comma-dangle": [
                1,
                "only-multiline"
            ],
        
        },
};
