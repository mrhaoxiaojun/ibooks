module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
  // { text: '吸星大法', link: '/course/' },
  {
    text: '教程笔记',
    items: [
      { text: '面试知识库-待整理学习', link: '/course/interview/js' },
      { text: 'Git 简版实战教程篇', link: '/course/git/intro' },
      { text: 'Webpack 实战浅聊', link: '/course/webpack/' },
      { text: '正则-简版实战教程篇-待完成', link: '/course/regExp/regExp' },
      { text: '浏览器工作原理 100问', link: '/course/browser/' },
      { text: 'Linux实战-笔记篇', link: '/course/linux/linuxBase' },
      { text: 'ECMAScript 6 收录笔记-未完成', link: '/course/es6/read' },
      { text: 'Javascript设计模式-简版教程篇', link: '/course/designMode/intro' },
      { text: 'Vue3.0 实战浅聊', link: '/course/vue/' },
    ]
  },
  { text: '联系', 
    icon: 'reco-message',
    items: [
      { text: 'NPM', link: 'https://www.npmjs.com/~mrhaoxiaojun', icon: 'reco-npm' },
      { text: 'GitHub', link: 'https://github.com/mrhaoxiaojun/', icon: 'reco-github' },
      { text: 'CSDN', link: 'https://blog.csdn.net/mrhaoxiaojun/', icon: 'reco-csdn' },
      { text: 'WeChat', link: '/views/connection/', icon: 'reco-wechat' },
    ]
  }
]