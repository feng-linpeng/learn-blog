import { defineConfig } from 'vitepress'
import { nav, socialLinks } from './config/nav'
import mySide from './config/side'

const links: any[] = socialLinks

export default defineConfig({
  title: "Peng's Learn",
  themeConfig: {
    nav,
    sidebar: mySide,
    socialLinks: links,
  },
});