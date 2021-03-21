module.exports = {
  env: {
    browser: true,
    'es6': true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin-no-null',
    'eslint-plugin-jsdoc',
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    '@typescript-eslint/semi': [
      'error',
      'never'
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs'
    ],
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/newline-after-description': 'error',
    'max-len': [
      'error',
      {
        'code': 100
      }
    ],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        'markers': [
          '/'
        ]
      }
    ]
  }
}
