module.exports = {
  prompts: [{
    type: 'input',
    name: 'projectName',
    message: '请填写项目目录名（字母或数字组合）：',
    default: 'fez-template'
  }, {
    type: 'list',
    name: 'style',
    message: '请选择样式编译：',
    choices: [{
      name: 'Sass',
      value: 'scss',
      short: 'Sass',
    }, {
      name: 'Less',
      value: 'less',
      short: 'Less',
    }, {
      name: 'Stylus',
      value: 'styl',
      short: 'Stylus',
    }, {
      name: 'Css',
      value: 'css',
      short: 'Css',
    }],
  }, {
    name: 'userModel',
    type: 'confirm',
    message: '是否配置技术平台?',
  }, {
    when: function(answers) {
      return answers.userModel === true;
    },
    type: 'list',
    name: 'modelConfig',
    message: '请选择技术平台：',
    choices: [{
      name: 'none (configure it yourself)',
      checked: false,
      value: 'none',
      short: 'none',
    }, {
      name: 'Vue',
      checked: false,
      value: 'vue',
      short: 'Vue',
    }, {
      name: 'React',
      checked: false,
      value: 'react',
      short: 'React',
    }, {
      name: 'jQuery',
      checked: false,
      value: 'jquery',
      short: 'jQuery',
    }],
  }, {
    name: 'lint',
    type: 'confirm',
    message: '是否使用Eslint检测代码？',
  }, {
    when: function(answers) {
      return answers.lint === true;
    },
    name: 'lintConfig',
    type: 'list',
    message: '选择Eslint预置配置：',
    choices: [{
        name: 'none (自行配置eslint规则)',
        value: 'none',
        short: 'none',
      }, {
        name: 'Standard (https://github.com/standard/standard)',
        value: 'standard',
        short: 'Standard',
      },
      {
        name: 'Airbnb (https://github.com/airbnb/javascript)',
        value: 'airbnb',
        short: 'Airbnb',
      }
    ],
  }, {
    type: 'list',
    name: 'autoInstall',
    message: '是否自动安装NPM包？',
    choices: [{
        name: 'Yes, use NPM',
        value: 'npm',
        short: 'npm',
      },
      {
        name: 'Yes, use Yarn',
        value: 'yarn',
        short: 'yarn',
      },
      {
        name: 'No, I will handle that myself',
        value: false,
        short: 'no',
      },
    ],
  }],
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'src/views/demo-jquery/': "userModel && modelConfig.includes('jquery')",
    'src/views/demo-react/': "userModel && modelConfig.includes('react')",
    'src/views/demo-vue/': "userModel && modelConfig.includes('vue')",
    'webpack.config.vue.js': "userModel && modelConfig.includes('vue')"
  }
}
