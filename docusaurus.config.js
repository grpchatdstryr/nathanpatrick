// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nathan Patrick',
  tagline: 'Personal professional website and blog.',
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
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Learning',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
                label: 'Website Source Code',
                href: 'https://github.com/grpchatdstryr/nathanpatrick/',
              },
              {
                label: 'Status Tracker',
                href: 'https://status.nathanpatrick.net/',
              },
              {
                label: 'Capstone Website',
                href: 'https://capstone.nathanpatrick.net/',
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
                href: 'https://nathanpatrick.net/',
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



      

    }),
};

export default config;
