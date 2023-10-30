// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    // 'plugin:vue/recommended',
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    
  },
};
