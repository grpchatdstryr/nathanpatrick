// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nathan Patrick',
  tagline: 'Personal portfolio and blog.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://nathanpatrick.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grpchatdstryr', // Usually your GitHub org/user name.
  projectName: 'nathanpatrick', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/grpchatdstryr/nathanpatrick/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/grpchatdstryr/nathanpatrick/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Nathan Patrick',
        //logo: {
        //  alt: 'My Site Logo',
        //  src: 'img/favicon.png',
        //},
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Experience',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: "about", label: "About", position: "left" },
          {
            href: 'https://github.com/grpchatdstryr/nathanpatrick',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/about-nathan-patrick/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/grpchatdstryr',
              },
              {
                label: 'Linktree',
                href: 'https://linktr.ee/nathanpatrick',
              },
              {
                label: 'Resume',
                href: '/resume',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Trumpet Central',
                href: 'https://trumpetcentral.org/',
              },
              {
                label: 'Capstone Website',
                href: 'https://capstone.nathanpatrick.net/',
              },
              {
                label: 'Status Tracker',
                href: 'https://status.nathanpatrick.net/',
              },
              {
                label: 'Project 46',
                href: 'https://project46.nathanpatrick.net/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Jarquavius Quankledankle',
                href: 'https://linktr.ee/jquank/',
              },
              {
                label: 'Photography Instagram',
                href: 'https://instagram/natep-media/',
              },
              {
                label: 'Website V2',
                href: 'https://nathanpatrick.org/',
              },
              {
                label: 'Website V1',
                href: 'https://web.archive.org/web/20250520031509/https://nathanpatrick.net/',
              },
            ],
          },
        ],
        copyright: `Nathan Patrick - Personal Website - ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

    algolia: {
      // The application ID provided by Algolia
      appId: 'T3Z7ZVQ3L3',

      // Public API key: it is safe to commit it
      apiKey: '7a9e65db1a892a5ef555a9685aa7fbd8',

      indexName: 'Personal Website',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //replaceSearchResultPathname: {
      //  from: '/docs/', // or as RegExp: /\/docs\//
      //  to: '/',
      //},

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      //askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },



    }),
};

export default config;
