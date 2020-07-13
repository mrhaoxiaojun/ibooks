const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  logo: '/head.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  codeTheme: 'solarizedlight',
  // 选项来启用页面滚动效果
  smoothScroll: true
})