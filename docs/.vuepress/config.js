import { defineUserConfig, defaultTheme } from "vuepress";
import navbar from "./configs/navbar";
import sidebar from "./configs/sidebar";

export default defineUserConfig({
  lang: "zh-CN",

  title: "日常小贴士",

  description: " ",

  base: "/Tips/",

  theme: defaultTheme({
    docsDir: "docs",

    repo: "https://github.com/CATT-L/Tips",

    docsRepo: "https://github.com/CATT-L/Tips",

    docsBranch: "develop",

    editLinkPattern: ":repo/edit/:branch/:path",

    navbar: navbar,
    sidebar: sidebar,
  }),
});
