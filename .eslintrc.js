module.exports = {
  parserOptions : {
    sourceType   : 'module',
    ecmaFeatures : { jsx : true }
  },
  env : {
    browser : true,
    node    : true,
    es6     : true
  },
  plugins : [
    'react-hooks',
    'jsx-a11y'
  ],
  extends : [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  settings : { react : { version : 'detect' } },
  rules    : {
    'semi'    : ['error', 'always'],
    'quotes'  : ['error', 'single'],
    'max-len' : ['error', {
      'code'           : 120,
      'ignoreStrings'  : true,
      'ignoreComments' : true
    }],
    'newline-per-chained-call' : ['error', { 'ignoreChainWithDepth' : 1 }],
    'indent'                   : [
      'error', 2,
      { 'SwitchCase' : 1 }
    ],
    'no-undef' : 'error',

    /*
     * SPACING
     */
    'object-curly-spacing' : ['error', 'always'],
    'object-curly-newline' : ['error', {
      'ObjectExpression'  : { 'multiline' : true, 'minProperties' : 5 },
      'ObjectPattern'     : { 'multiline' : true, 'minProperties' : 5 },
      'ImportDeclaration' : 'never',
      'ExportDeclaration' : 'never'
    }],
    'array-bracket-spacing' : ['error', 'never'],
    'comma-spacing'         : [
      'error',
      { 'after' : true }
    ],
    'key-spacing' : [
      'error',
      {
        'beforeColon' : true,
        'align'       : 'colon'
      }
    ],
    'space-infix-ops' : ['error', { 'int32Hint' : false }],

    /*
    * REACT
    */
    'react-hooks/rules-of-hooks'   : 'error',
    'react-hooks/exhaustive-deps'  : 'warn',
    'react/jsx-indent'             : [2, 2, { 'indentLogicalExpressions' : true }],
    'react/jsx-max-props-per-line' : [2, { 'maximum' : 2 }],
    'react/jsx-indent-props'       : [2, 2],
    'react/jsx-wrap-multilines'    : [
      'error',
      {
        'declaration' : 'parens-new-line',
        'assignment'  : 'parens-new-line',
        'return'      : 'parens-new-line',
        'arrow'       : 'parens-new-line',
        'condition'   : 'parens-new-line',
        'logical'     : 'parens-new-line',
        'prop'        : 'parens-new-line'
      }
    ],
    'react/jsx-tag-spacing' : [
      2,
      { 'beforeSelfClosing' : 'always' }
    ],
    'react/react-in-jsx-scope' : 0
  }
};
