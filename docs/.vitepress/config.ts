import { defineConfig } from 'vitepress'
import { nav, socialLinks } from './config/nav'
import mySide from './config/side'

const links: any[] = socialLinks

export default defineConfig({
  title: "scaryL1n",
  base: '/learn-blog/',
  themeConfig: {
    nav,
    sidebar: mySide,
    socialLinks: links,
    algolia: {
      appId: 'BHRNRR37VX',
      apiKey: 'b80f083d0561b9b7a242e1bfba1d929a',
      indexName: 'index',
      placeholder: 'What do you want to search',
      buttonText: 'Go Search'
    }
  },
});