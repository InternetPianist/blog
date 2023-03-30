import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "Blog",
  description: "A Blog Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'JavaScript', link: '/javascript/', activeMatch: '/javascript/' }
      { 
        text: 'JavaScript', 
        items: [
          { text: 'JavaScript基础', link: '/javascript/basics/' },
          { text: 'ES6', link: '/javascript/es6/' }
        ] 
      },
      {
        text: '前端工程化',
        items: [
          {
            text: '前言',
            link: '/front-end-engineering/'
          },
          {
            text: 'webpack常用扩展',
            link: '/front-end-engineering/webpack/常用扩展'
          },
          {
            text: 'webpack5',
            link: '/front-end-engineering/webpack/webpack5'
          },
          {
            text: 'Git',
            link: '/front-end-engineering/Git'
          },
          {
            text: 'CSS工程化',
            link: '/front-end-engineering/CSS工程化'
          },
        ]
        // Front-end engineering
      },
      {
        text: 'Vue相关',
        items: [
          { text: 'Vue基础', link: '/vue/Vue的介绍和vue-cli'}
        ],
      },
      {
        text: 'React相关',
        items: [
          { text: 'React基础', link: '/react/' }
        ]
      }
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: {
      'javascript': [
        { 
          text: 'JavaScript',
          items: [
            { text: '简介', link: '/javascript/basics/' },
            { text: '编写方式', link: '/javascript/basics/编写方式' },
            { text: '常量和变量', link: '/javascript/basics/常量和变量' },
            { text: '标识符、关键字、保留字', link: '/javascript/basics/标识符、关键字、保留字' },
            { text: '变量的数据类型', link: '/javascript/basics/变量的数据类型' },
            { text: '基本数据类型', link: '/javascript/basics/基本数据类型' },
          ] 
        },
        {
          text: 'ES6',
          items: [
            { text: '简介', link: '/javascript/es6/' },
            { text: 'let、const 和块级作用域', link: '/javascript/es6/let、const 和块级作用域' },
            { text: '解构赋值', link: '/javascript/es6/解构赋值' },
            { text: '箭头函数', link: '/javascript/es6/箭头函数' },
            { text: '剩余参数和扩展运算符', link: '/javascript/es6/剩余参数和扩展运算符' },
            { text: '字符串、数组、对象的扩展', link: '/javascript/es6/字符串、数组、对象的扩展' },
            { text: '内置对象扩展：Set数据结构', link: '/javascript/es6/内置对象扩展：Set数据结构' },
          ]
        }
      ],
      'front-end-engineering': [
        {
          text: '前端工程化概述',
          link: '/front-end-engineering/'
        },
        {
          text: 'webpack',
          items: [
            {
              text: 'webpack常用扩展',
              link: '/front-end-engineering/webpack/常用扩展'
            },
            {
              text: 'webpack5',
              link: '/front-end-engineering/webpack/webpack5'

            }
          ]
        },
        {
          text: 'Git',
          link: '/front-end-engineering/Git'
        },
        {
          text: 'CSS工程化',
          link: '/front-end-engineering/CSS工程化'
        }
      ],
      'vue': [
        {
          text: 'Vue基础',
          items: [
            {
              text: 'Vue的介绍和vue-cli',
              link: '/vue/Vue的介绍和vue-cli'
            }
          ]
        }
      ],
      'react': [
        {
          text: 'React基础',
          items: [
            {
              text: 'React介绍',
              link: '/react/'
            },
            {
              text: 'JSX介绍',
              link: '/react/JSX语法介绍'
            },
            {
              text: '组件生命周期',
              link: '/react/组件生命周期'
            }
          ]
        }
      ]
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
