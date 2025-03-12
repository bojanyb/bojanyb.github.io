import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import theme from './theme.js';

export default defineUserConfig({
  base: '/',
  port: 7070,

  //头部引入
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css',
        integrity: 'sha512-A2sVEqmNCGCac7ji4czWLqCVSn28L0U5lSobS173H+gk+QTV6rH0EH0QEnYk5mz3KPRDmEr+GKM1hfdfLrsFpg==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
    ],
  ],

  lang: 'zh-CN',
  title: '彼得楊楊の第二大脑',
  description: '任何没有经过自己大脑处理过的知识永远都不会真正属于你!',

  theme,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  plugins: [],

  // Enable it with pwa
  // shouldPrefetch: false,
});
