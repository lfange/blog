import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Lfange Blog ！',
  description: '这是我的第一个 VuePress 站点',


  theme: defaultTheme({
    navbar: [
      { text: "数据结构与算法", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "vue3", link: "/vue3/" },
    ],
  })
})