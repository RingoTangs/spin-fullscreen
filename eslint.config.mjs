import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  vue: true,
  react: true,
  formatters: true,
  markdown: false,
  gitignore: true,
  ignores: [
    '**/playground/**',
  ],
  rules: {
    'antfu/top-level-function': 'off',
    'react-refresh/only-export-components': 'off',
  },
  typescript: {
    overrides: {
      'ts/explicit-function-return-type': 'off',
    },
  },
})
