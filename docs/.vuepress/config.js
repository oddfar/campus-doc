const plugins = require('./config/plugins.js');
const base = require('../../base.js');
const themeConfig = require('./config/themeConfig.js');



module.exports = {
  theme: 'vdoing', //  使用npm包主题
   // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  port: 8080,//端口

  plugins,
  themeConfig,
  base,  //引入后缀

  title: "Campus",
  description: 'Campus 一款简单的后台管理系统，快速开发框架，适合大学生开发毕设，或其他小项目。', // 描述,以 <meta> 标签渲染到页面html中

  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'oddfar,zhiyuan,campus' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],
  markdown: {
    lineNumbers: true, // 代码行号
	extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  },
}