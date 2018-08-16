/**
 * =================================
 * @2018 塞伯坦-CYB前端模块化工程构建工具
 * https://github.com/jd-cyb/cyb-cli
 * =================================
 */

/**
 * ---------------------------------
 * eslint配置文件，具体配置请参考：
 * https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
    root: true,{{#if_eq modelConfig "react"}}
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React", // Pragma to use, default to "React"
            "version": "16.4", // React version, default to the latest React stable release
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": ["forbidExtraProps"] // The names of any functions used to wrap the
        // propTypes object, e.g. `forbidExtraProps`.
        // If this isn't set, any propTypes wrapped in
        // a function will be skipped.
    },{{/if_eq}}
    parserOptions: {
        {{#if_eq modelConfig "react"}}"ecmaFeatures": {
            "jsx": true
        },{{/if_eq}}
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    /**
     * 预定义全局变量
     * http://eslint.cn/docs/user-guide/configuring#specifying-environments
     */
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true{{#if_eq modelConfig "jquery"}},
        jquery: true{{/if_eq}}
    },{{#if_eq lintConfig "standard"}}
    extends: [
        {{#if_eq modelConfig "vue"}}'plugin:vue/essential',{{/if_eq}}
        {{#if_eq modelConfig "react"}}"eslint:recommended",
        "plugin:react/recommended",{{/if_eq}}
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],{{/if_eq}}{{#if_eq lintConfig "airbnb"}}
    extends: [
        {{#if_eq modelConfig "react"}}"eslint:recommended",
        "plugin:react/recommended",{{/if_eq}}
        {{#if_eq modelConfig "vue"}}'plugin:vue/essential',{{/if_eq}}
        'airbnb-base'
    ],{{/if_eq}}{{#if_eq lintConfig "none"}}
    extends: [
      {{#if_eq modelConfig "vue"}}'plugin:vue/essential'{{/if_eq}}{{#if_eq modelConfig "react"}}"eslint:recommended",
      "plugin:react/recommended"{{/if_eq}}
    ],{{/if_eq}}
    plugins: [{{#if_eq modelConfig "vue"}}'vue'{{/if_eq}}{{#if_eq modelConfig "react"}}'react'{{/if_eq}}],
    rules: {
      {{#if_eq lintConfig "standard"}}
      // allow async-await
      'generator-star-spacing': 'off',{{/if_eq}}{{#if_eq lintConfig "airbnb"}}
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never'
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }],
      // allow optionalDependencies
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js']
      }],{{/if_eq}}
    }
}
