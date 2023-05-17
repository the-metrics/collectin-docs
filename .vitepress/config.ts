import { defineConfig } from "vitepress";
// import upload2cosPlugin from "vite-plugin-upload-cos";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collectin Docs",
  description:
    "免费不限量的 Collectin 服务可以帮助你更好的收集和管理书签和页签，只需点击一下便可以帮你快速保存感兴趣的网页，不管是文章、图片、视频、社交媒体、应用等都能一键保存到 Collectin 服务中。",
  base: "/collectin-docs/",
  themeConfig: {
    logo: "/icon.png",
    siteTitle: "Collectin Docs",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "官网", link: "https://www.collectin.net" },
      { text: "文档首页", link: "/" },
      { text: "使用指南", link: "/docs/guide" },
    ],

    sidebar: [
      {
        text: "使用指南",
        items: [
          { text: "入门指南", link: "/docs/guide" },
          { text: "插件安装", link: "/docs/extension" },
        ],
      },
      {
        text: "协议条款",
        items: [
          { text: "用户协议", link: "/docs/user-agreement" },
          { text: "隐私政策", link: "/docs/privacy" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present The Metrics Lab",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/the-metrics/collectin-docs" },
    ],
  },
});
