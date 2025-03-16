import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
    {
        ignores: ['node_modules/**', 'dist/**']
    },
    js.configs.recommended,
    ...vue.configs["flat/recommended"],
    {
        files: ['**/*.js', '**/*.vue'],
        languageOptions: {
            sourceType: 'module',
        },
        rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            quotes: [
                "error",
                "single"
            ],
            semi: [
                "error",
                "always"
            ],
            indent: [
                "error",
                2
            ],
            "eol-last": [
                "error",
                "always"
            ]
        },
    }
];
