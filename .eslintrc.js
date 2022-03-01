module.exports = {
  parserOptions : {
    ecmaVersion  : 2020,
    sourceType   : 'module',
    ecmaFeatures : { jsx : true }
  },
  env : {
    'browser' : true,
    'node'    : true,
    'es6'     : true
  },
  plugins : [
    'react-hooks',
    'jsx-a11y',
    'import'
  ],
  extends : [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended'
  ],
  rules : {
    /*
     * BASE
     */
    'semi'    : ['error', 'always'],
    'quotes'  : ['error', 'single', { 'allowTemplateLiterals' : true }],
    'max-len' : ['error', {
      'code'           : 120,
      'ignoreStrings'  : true,
      'ignoreComments' : true
    }],
    'newline-per-chained-call' : ['error', { 'ignoreChainWithDepth' : 2 }],
    'eqeqeq'                   : ['error', 'smart'],
    'comma-dangle'             : [
      'error', {
        'arrays'  : 'never',
        'objects' : 'only-multiline',
        'imports' : 'never',
        'exports' : 'never'
      }
    ],
    'multiline-ternary' : ['error', 'always-multiline'],
    'prefer-const'      : [
      'error', {
        'destructuring'          : 'any',
        'ignoreReadBeforeAssign' : false
      }
    ],
    'no-undef'           : 'error',
    'no-unused-vars'     : 'warn',
    'no-console'         : 'error',
    'no-trailing-spaces' : [
      'error', { 'skipBlankLines' : true }
    ],
    'no-unreachable'           : 'error',
    'no-var'                   : 'error',
    'no-mixed-spaces-and-tabs' : ['error', 'smart-tabs'],
    'no-debugger'              : 'error',
    'no-empty'                 : 'error',
    'no-empty-function'        : [
      'error', { 'allow' : ['arrowFunctions'] }
    ],

    /*
     * SPACING
     */
    'object-curly-spacing'    : ['error', 'always'],
    'object-property-newline' : ['error', { 'allowAllPropertiesOnSameLine' : true }],
    'array-bracket-spacing'   : ['error', 'never'],
    'comma-spacing'           : ['error', { 'after' : true }],
    'semi-spacing'            : ['error', { 'after' : true }
    ],
    'key-spacing' : ['error', {
      'beforeColon' : true,
      'align'       : 'colon'
    }],
    'space-infix-ops'         : ['error', { 'int32Hint' : false }],
    'no-multiple-empty-lines' : ['error', { 'max' : 1 }],
    'indent'                  : [
      'error',
      2,
      { 'SwitchCase' : 1 }
    ],
    'func-call-spacing' : ['error', 'never'],
    'curly'             : ['off', 'multi-or-nest', 'consistent'],
    'keyword-spacing'   : ['error', {
      'before' : true,
      'after'  : true
    }],
    'arrow-spacing' : ['error', {
      'before' : true,
      'after'  : true
    }],

    /*
     * ESLINT-PLUGIN-IMPORT
     */
    'import/no-unresolved'        : 'error',
    'import/no-duplicates'        : 'error',
    'import/first'                : 'error',
    'import/newline-after-import' : ['error', { 'count' : 1 }],
    'import/order'                : [
      'error', {
        'groups' : [
          ['builtin', 'external'],
          ['internal'],
          ['unknown'],
          ['parent', 'sibling'],
          'index'
        ],
        'newlines-between' : 'never'
      }
    ],
    'import/default' : 'warn',

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
  },
  settings : {
    'import/resolver' : {
      'node' : {
        'extensions' : ['.js', '.jsx']
      },
      'alias' : {
        'map' : [
          ['@/*', './src/*']
        ]
      }
    }
  },
};
