module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue'],
  // ここにカスタムルールを追加します。
  rules: {
    'vue/html-self-closing': 'off',
    semi: [2, 'never'],
    'vue/no-v-html': 'off',
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
  },
}
