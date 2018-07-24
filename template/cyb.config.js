/**
 * =================================
 * @2018 塞伯坦-CYB前端模块化工程构建工具
 * https://github.com/jd-cyb/cyb-cli
 * =================================
 */


module.exports = {
  {{#lint}}
  /**
   * 启用/禁用 eslint 检测
   */
  eslint: {
    available: true
  },
  {{/lint}}
  /**
   * -------------------------------
   * webpack配置
   * -------------------------------
   */
  webpack: {
    /**
     * webpack.config.js
     * 根据需求场景每个项目均可安装loader及plugin
     */
    config: {
      {{#if_eq modelConfig "jquery"}}
      externals: {
        jquery: 'jQuery'
      }
      {{/if_eq}}
    },
    /**
     * 用于提取合并公共模块
     * {
     *   target: '{打包名称}',
     *   chunk: ['{chunk1名称}','{chunk2名称}','{chunk3名称}']
     * }
     */
    extract: {
      js: []
    }
  }
}
