module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    }
  },
  plugins: [
    'react',
    'flowtype',
  ],
  extends: [
    'plugin:flowtype/recommended',
    'airbnb'
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    }
  },
  rules: {
    'react/prop-types': ['off'],
    'react/display-name': ['off'],
    'react/prefer-stateless-function': ['error', { 'ignorePureComponents': true }],
    'no-console': ['warn', { allow: ["warn", "error", "info"]}],
    'react/jsx-curly-spacing': ['off'],
    'react/no-children-prop': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'react/no-unused-prop-types': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/sort-comp': ['off'],
    'spaced-comment': ['off'],
    'no-underscore-dangle': ['off'],
    'template-curly-spacing': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'comma-dangle': ['off'],
    'import/prefer-default-export': ['off'],
    'eol-last': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'no-confusing-arrow': ['off'],
    'consistent-return': ['off'],
    'quotes': ['off'],
    'react/jsx-indent': ['off'],
    'no-constant-condition': ['off'],
    'prefer-const': ['off'],
    'no-duplicate-imports': ['off'],
  },
  env: {
    browser: true,
    es6: true,
  }
};