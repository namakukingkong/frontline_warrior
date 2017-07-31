// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root         : true,
  parser       : 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env          : {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends      : 'eslint:recommended',
  // required to lint *.vue files
  plugins      : [
    'html'
  ],
  // add your custom rules here
  'rules'      : {
    // allow paren-less arrow functions
    'arrow-parens'          : 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger'           : process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-unused-vars'  : 0,
    'no-undef'        : 0,
    'no-multi-spaces' : 0,
    'key-spacing'     : 0,
    'no-control-regex': 0,
    'no-regex-spaces' : 0,
    'no-console'      : [0, {allow: ['warn', 'error', 'log']}]
  }
}
