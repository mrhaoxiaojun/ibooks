const themeConfig = require('./config/theme/')

module.exports = {
  base: '/ibooks/',
  title: "白丁识书",
  description: '你的问题主要在于读书不多而想得太多。—杨绛',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  