import { defineConfig } from 'vitepress'
import { nav, socialLinks } from './config/nav'
import mySide from './config/side'

const links: any[] = socialLinks

export default defineConfig({
  title: "Peng's Learn Notes",
  base: '/learn-blog/',
  themeConfig: {
    nav,
    sidebar: mySide,
    socialLinks: links
  },
});