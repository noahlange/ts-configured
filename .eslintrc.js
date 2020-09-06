module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended'
  ],
  env: { browser: true, es6: true, node: true },
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-shadow': ['error'],
    'max-classes-per-file': ['error', 1],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-empty-interface': ['warn'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/array-type': ['error', { default: "array-simple" }],
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'default', format: ['camelCase'] },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      }
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as' }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowHigherOrderFunctions: true,
        allowExpressions: true
      }
    ]
  }
};
