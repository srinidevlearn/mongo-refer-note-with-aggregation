import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { hopeTheme } from 'vuepress-theme-hope';
import { sidebar } from './sidebarData'
import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url)
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  lang: 'en-US',
  pure: true,
  title: 'Quick-Reference-Notes',
  description: '',
  base:"/mongo-qrf/",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap' }]
  ],
  plugins: [
    mdEnhancePlugin({
      // Enable Code Demo
      demo: true,
      codetabs: true,
      container: true,
      presentation: true,
      tasklist: true,
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),

    ['vuepress-plugin-code-copy', true],
    searchPlugin({
      // getExtraFields: (page) => page.frontmatter.tags,
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
      maxSuggestions: 15,
      hotKeys: ['s', '/'],
      locales: {
        '/': {
          placeholder: 'Search',
        }
      },
    }
    })
  ],


  theme: hopeTheme({
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg#center',
      nav: [

    ],
    smoothScroll: true,
    sidebar,
    sidebarDepth:2,
    mdEnhance: {
      footnote: true,
      container: true,

    },
    // sidebar object
    // pages under different sub paths will use different sidebar
    // sidebar: {

    //   '/intro/': [
    //     {
    //       text: 'Mongo introduction',
    //       children: ['/intro/index.md','/intro/mongosetup.md'],
    //     },
    //   ],
    //   '/dboperation/': [
    //     {
    //       text: 'MongoDB Operations',
    //       children: ['/dboperation/createdb.md', '/dboperation/deletedb.md'],
    //     },
    //   ],
    // },
  }),
})
